import type { Address } from "viem";

// ---- Flags (LOCAL has priority over TEST) ----
const ENABLE_LOCALNETS = process.env.NEXT_PUBLIC_ENABLE_LOCALNETS === "true";
const ENABLE_TESTNETS = process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true";

export type NetworkMode = "local" | "testnet" | "mainnet";

/** local > testnet > mainnet */
export const NETWORK_MODE: NetworkMode = ENABLE_LOCALNETS
  ? "local"
  : ENABLE_TESTNETS
  ? "testnet"
  : "mainnet";

// ---- Small utils ----
function cleanse<T extends string | undefined | null>(
  v: T
): string | undefined {
  // Treat "", undefined, null, and literal "null" as missing
  if (!v || v === "null") return undefined;
  return v;
}

function pickByMode<T extends string>(
  opts: { local?: T; testnet?: T; mainnet?: T },
  kind: string
): T {
  const chosen =
    NETWORK_MODE === "local"
      ? opts.local
      : NETWORK_MODE === "testnet"
      ? opts.testnet
      : opts.mainnet;

  const val = cleanse(chosen);
  if (!val) {
    throw new Error(
      `[env] Missing ${kind} for ${NETWORK_MODE}. Populate the appropriate NEXT_PUBLIC_* env var.`
    );
  }
  return val as T;
}

function pickAddressByMode(
  opts: {
    local?: string | null;
    testnet?: string | null;
    mainnet?: string | null;
  },
  kind: string
): Address {
  // Normalize potential `null` values from envs to `undefined`
  const normalized: { local?: string; testnet?: string; mainnet?: string } = {
    local: opts.local ?? undefined,
    testnet: opts.testnet ?? undefined,
    mainnet: opts.mainnet ?? undefined,
  };
  const addr = pickByMode(normalized, kind);
  // Optional: cheap shape check
  if (!addr.startsWith("0x") || addr.length < 4) {
    throw new Error(
      `[env] ${kind} is not a valid 0x-address for ${NETWORK_MODE}. Got "${addr}".`
    );
  }
  return addr as `0x${string}`;
}

// ---- Getters ----

/** ERC20 Token contract per network */
export function getERC20Address(): Address {
  return pickAddressByMode(
    {
      local: process.env.NEXT_PUBLIC_ERC20_ADDRESS_LOCAL,
      testnet: process.env.NEXT_PUBLIC_ERC20_ADDRESS_TEST,
      mainnet: process.env.NEXT_PUBLIC_ERC20_ADDRESS_MAIN,
    },
    "ERC20_ADDRESS"
  );
}
