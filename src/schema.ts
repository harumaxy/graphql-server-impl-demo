import { db } from "./db";
import type { Resolvers } from "./resolvers-types";
import * as fs from "node:fs/promises";
import { users } from "../drizzle/schema";
import { eq } from "drizzle-orm";

export const typeDefs = await fs.readFile("./src/typeDefs.graphql", "utf-8");
export const resolvers: Resolvers = {
  Query: {
    user: async (_, args, _ctx, _info) => {
      const user = await db.query.users.findFirst({
        where: eq(users.id, args.id),
      });
      return user ?? null;
    },
    allUsers: async () => {
      const users = await db.query.users.findMany();
      return users;
    },
  },
  User: {
    id: (parent) => parent.id,
    name: (parent) => {
      return parent.name + "さん";
    },
  },
};
