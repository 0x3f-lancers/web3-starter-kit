// Loads .env, .env.local, etc. (simple & conventional)
import "dotenv-flow/config";
import type { CodegenConfig } from "@graphql-codegen/cli";

const isTestnet = process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true";
const schema = isTestnet
  ? process.env.NEXT_PUBLIC_TESTNET_SUBGRAPH_URL
  : process.env.NEXT_PUBLIC_MAINNET_SUBGRAPH_URL;

console.log(`GraphQL Codegen using schema: ${schema}`);

if (!schema) {
  throw new Error("Missing NEXT_PUBLIC_MAINNET_SUBGRAPH_URL or TESTNET");
}

const config: CodegenConfig = {
  // Top-level fields per the Guild reference
  schema,
  documents: "queries/**/*.{ts,tsx,graphql,gql}",
  generates: {
    "generated/graphql-staking.ts": {
      plugins: [
        {
          add: {
            content: ["/* eslint-disable */", "// @ts-nocheck"].join("\n"),
          },
        },
        "typescript",
        "typescript-operations",
      ],
      config: {
        withHooks: true,
        useTypeImports: true,
        apolloReactHooksImportFrom: "@apollo/client",
        apolloReactCommonImportFrom: "@apollo/client",
      },
    },
  },
};

export default config;
