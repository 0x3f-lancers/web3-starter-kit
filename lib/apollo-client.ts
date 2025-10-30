// lib/apollo-clients.ts
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const isTESTNET = process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true";
const isLOCALNET = process.env.NEXT_PUBLIC_ENABLE_LOCALNETS === "true";

const prodURI = process.env.NEXT_PUBLIC_MAINNET_SUBGRAPH_URL!;
const testURI = process.env.NEXT_PUBLIC_TESTNET_SUBGRAPH_URL!;
const localURI = process.env.NEXT_PUBLIC_LOCALNET_SUBGRAPH_URL!;

const URI = isLOCALNET ? localURI : isTESTNET ? testURI : prodURI;

export const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: URI }),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network",
    },
  },
});
