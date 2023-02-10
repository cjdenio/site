import { createServer } from "@graphql-yoga/node";
import { PrismaClient } from "@prisma/client";
import cookie from "cookie";
import type { NextApiRequest, NextApiResponse } from "next";
import * as jose from "jose";
import { GraphQLError } from "graphql";

const prisma = new PrismaClient();

const typeDefs = `
  type GuestbookEntry {
    id: ID!
    username: String!
    name: String
    message: String!
    favoriteColor: String
  }

  type User {
    username: String!
  }

  type Rating {
    item: String!
    stars: Float!
    reviewCount: Int!
    myRating: Int
  }

  type Query {
    guestbook: [GuestbookEntry!]!
    me: User
    rating(item: String!): Rating!
    reviewItems: [Rating!]!
  }

  type Mutation {
    createGuestbookEntry(message: String!, favoriteColor: String): GuestbookEntry
    review(stars: Int!, item: String!): Rating
  }
`;

const resolvers = {
  Query: {
    async guestbook() {
      return await prisma.guestbookEntry.findMany({
        orderBy: { createdAt: "desc" },
      });
    },
    async me(parent, args, context, info) {
      if (context.user) {
        return {
          username: context.user,
        };
      }
    },
    async rating(parent, { item }, context, info) {
      const result = await prisma.review.aggregate({
        _avg: { stars: true },
        _count: true,
        where: { item: item },
      });

      const myRating =
        context.userKey &&
        (
          await prisma.review.findUnique({
            where: { userKey_item: { userKey: context.userKey, item: item } },
          })
        )?.stars;

      return {
        stars: result._avg.stars || 0,
        reviewCount: result._count,
        item,
        myRating,
      };
    },
    async reviewItems() {
      return await prisma.review
        .groupBy({
          by: ["item"],
          _avg: { stars: true },
          _count: true,
        })
        .then((result) =>
          result.map((review) => ({
            stars: review._avg.stars,
            reviewCount: review._count,
            item: review.item,
          }))
        );
    },
  },
  Mutation: {
    async createGuestbookEntry(
      parent,
      { message, favoriteColor },
      context,
      info
    ) {
      if (!context.user) return;

      return await prisma.guestbookEntry.create({
        data: {
          username: context.user,
          message,
          favoriteColor,
        },
      });
    },
    async review(parent, { stars, item }, context, info) {
      if (!context.userKey) {
        throw new GraphQLError("eee");
      }

      const review = await prisma.review.findUnique({
        where: { userKey_item: { userKey: context.userKey, item } },
      });

      if (review && review.stars == stars) {
        await prisma.review.delete({ where: { id: review.id } });
      } else if (review) {
        await prisma.review.update({
          where: { id: review.id },
          data: { stars: Math.min(Math.max(1, stars), 5) },
        });
      } else {
        await prisma.review.create({
          data: {
            stars: Math.min(Math.max(1, stars), 5),
            item,
            userKey: context.userKey,
          },
        });
      }

      const result = await prisma.review.aggregate({
        _avg: { stars: true },
        _count: true,
        where: { item: item },
      });

      const myRating =
        context.userKey &&
        (
          await prisma.review.findUnique({
            where: { userKey_item: { userKey: context.userKey, item: item } },
          })
        )?.stars;

      return {
        stars: result._avg.stars || 0,
        reviewCount: result._count,
        item,
        myRating,
      };
    },
  },
};

const server = createServer({
  schema: {
    typeDefs,
    resolvers,
  },
  graphiql: true,
  endpoint: "/api/graphql",
  async context({ request }) {
    const cookies = cookie.parse(request.headers.get("Cookie") || "");

    try {
      const jwt = cookies.gadzooks_auth;

      const { payload } = await jose.jwtVerify(
        jwt,
        Buffer.from(process.env.JWT_SECRET, "hex")
      );

      return {
        user: payload.username,
        userKey: cookies.user_key,
      };
    } catch (e) {
      return {
        userKey: cookies.user_key,
      };
    }
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await server(req, res);
  await prisma.$disconnect();
}
