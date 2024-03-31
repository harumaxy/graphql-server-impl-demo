import type { Resolvers } from "./resolvers-types";
import * as fs from "node:fs/promises";

export const typeDefs = await fs.readFile("./src/typeDefs.graphql", "utf-8");
export const resolvers: Resolvers = {
  Query: {
    info: (_, __, context, info) => {
      console.log(info.fragments);
      return "Hello";
    },
    feed: (_, __, context, info) => {
      console.log(info.fragments);
      return [];
    },
  },
  Link: {
    id: (parent) => parent.id,
    url: (parent) => parent.url,
    description: (parent) => parent.description,
  },
};
