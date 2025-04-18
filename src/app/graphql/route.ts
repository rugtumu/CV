import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import { MeResolver } from "../../apollo/resolvers";
import { buildSchema } from "type-graphql";
import { NextRequest } from "next/server";

const schema = await buildSchema({
  resolvers: [MeResolver],
});

const apolloServer = new ApolloServer({
  schema,
  plugins: [ApolloServerPluginLandingPageLocalDefault()],
  introspection: true,
});

const apolloHandler = startServerAndCreateNextHandler<NextRequest>(apolloServer, {
  context: async (req) => ({ req }),
});

// Fixed parameter types for Next.js 15
export async function GET(
  request: NextRequest
) {
  return apolloHandler(request);
}

export async function POST(
  request: NextRequest
) {
  return apolloHandler(request);
}