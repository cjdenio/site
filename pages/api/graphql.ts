import { createServer } from "@graphql-yoga/node";
import { PrismaClient } from "@prisma/client";
import cookie from "cookie";
import type { NextApiRequest, NextApiResponse } from "next";
import * as jose from "jose";

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

  type Query {
    guestbook: [GuestbookEntry!]!
    me: User
  }

  type Mutation {
    createGuestbookEntry(message: String!, favoriteColor: String): GuestbookEntry
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
    try {
      const cookies = cookie.parse(request.headers.get("Cookie") || "");
      const jwt = cookies.gadzooks_auth;

      const { payload } = await jose.jwtVerify(
        jwt,
        Buffer.from(process.env.JWT_SECRET, "hex")
      );

      return {
        user: payload.username,
      };
    } catch (e) {
      return {};
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
