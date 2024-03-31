import { createServer } from "node:http";
import { createSchema, createYoga } from "graphql-yoga";
import type { Resolvers } from "./resolvers-types";
import { resolvers, typeDefs } from "./schema";

const yoga = createYoga({
  schema: createSchema({
    typeDefs: typeDefs,
    resolvers: resolvers,
  }),
});

const server = createServer(yoga);

server.listen(4000, () => {
  console.info("Server is running on http://localhost:4000/graphql");
});
