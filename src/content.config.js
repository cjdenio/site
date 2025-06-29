import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";
import { parse as csvParse } from "csv-parse/sync";

export const collections = {
  blog: defineCollection({
    loader: glob({ pattern: "*.md", base: "./blog" }),
  }),
  postOffices: defineCollection({
    loader: file("src/data/post_offices.csv", {
      parser: (content) =>
        csvParse(content, {
          columns: true,
          relax_column_count_less: true,
        }),
    }),
    schema: z.object({
      id: z.string(),
      city: z.string(),
      state: z.string(),
      latitude: z.string(),
      longitude: z.string(),
      visited: z.string().optional(),
    }),
  }),
};
