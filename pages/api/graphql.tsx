import { ApolloServer } from "apollo-server-micro";

import { resolvers } from "../../server/resolvers";
import { typeDefs } from "../../server/typedefs";

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: "/api/graphql" });
