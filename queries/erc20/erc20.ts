import { gql } from "@apollo/client";

/**
 * Get token details (name, symbol, decimals, totalSupply)
 */
export const GET_TOKEN_DETAILS = gql`
  query GetTokenDetails($id: ID!) {
    token(id: $id) {
      id
      name
      symbol
      decimals
      totalSupply
    }
  }
`;

/**
 * Get multiple tokens
 */
export const GET_TOKENS = gql`
  query GetTokens($first: Int = 10, $skip: Int = 0) {
    tokens(
      first: $first
      skip: $skip
      orderBy: totalSupply
      orderDirection: desc
    ) {
      id
      name
      symbol
      decimals
      totalSupply
    }
  }
`;

/**
 * Get user's token balance
 */
export const GET_USER_BALANCE = gql`
  query GetUserBalance($userId: ID!) {
    user(id: $userId) {
      id
      balance
      token {
        id
        name
        symbol
        decimals
      }
    }
  }
`;

/**
 * Get all transfers for a token
 */
export const GET_TOKEN_TRANSFERS = gql`
  query GetTokenTransfers($tokenId: ID!, $first: Int = 20, $skip: Int = 0) {
    transfers(
      where: { token: $tokenId }
      orderBy: timestamp
      orderDirection: desc
      first: $first
      skip: $skip
    ) {
      id
      from
      to
      value
      token {
        id
        symbol
        decimals
      }
      blockNumber
      timestamp
      txHash
    }
  }
`;

/**
 * Get transfers for a specific user (sent or received)
 */
export const GET_USER_TRANSFERS = gql`
  query GetUserTransfers(
    $userAddress: String!
    $first: Int = 20
    $skip: Int = 0
  ) {
    transfers(
      where: { or: [{ from: $userAddress }, { to: $userAddress }] }
      orderBy: timestamp
      orderDirection: desc
      first: $first
      skip: $skip
    ) {
      id
      from
      to
      value
      token {
        id
        name
        symbol
        decimals
      }
      blockNumber
      timestamp
      txHash
    }
  }
`;

/**
 * Get approval events
 */
export const GET_APPROVALS = gql`
  query GetApprovals($first: Int = 20, $skip: Int = 0, $owner: String) {
    approvals(
      where: { owner: $owner }
      orderBy: timestamp
      orderDirection: desc
      first: $first
      skip: $skip
    ) {
      id
      owner
      spender
      value
      token {
        id
        symbol
        decimals
      }
      blockNumber
      timestamp
      txHash
    }
  }
`;

/**
 * Get top token holders
 */
export const GET_TOP_HOLDERS = gql`
  query GetTopHolders($tokenId: ID!, $first: Int = 10) {
    users(
      where: { token: $tokenId, balance_gt: "0" }
      orderBy: balance
      orderDirection: desc
      first: $first
    ) {
      id
      balance
      token {
        id
        symbol
        decimals
      }
    }
  }
`;

/**
 * Get transfer statistics
 */
export const GET_TRANSFER_STATS = gql`
  query GetTransferStats($tokenId: ID!, $from: Int!, $to: Int!) {
    transfers(
      where: { token: $tokenId, timestamp_gte: $from, timestamp_lte: $to }
    ) {
      id
      value
      timestamp
    }
  }
`;

/**
 * Search tokens by name or symbol
 */
export const SEARCH_TOKENS = gql`
  query SearchTokens($searchText: String!, $first: Int = 10) {
    tokens(
      where: {
        or: [
          { name_contains_nocase: $searchText }
          { symbol_contains_nocase: $searchText }
        ]
      }
      first: $first
    ) {
      id
      name
      symbol
      decimals
      totalSupply
    }
  }
`;

/**
 * Get recent activity (transfers + approvals)
 */
export const GET_RECENT_ACTIVITY = gql`
  query GetRecentActivity($first: Int = 20, $skip: Int = 0) {
    transfers(
      orderBy: timestamp
      orderDirection: desc
      first: $first
      skip: $skip
    ) {
      id
      from
      to
      value
      token {
        id
        symbol
      }
      timestamp
      txHash
    }
    approvals(
      orderBy: timestamp
      orderDirection: desc
      first: $first
      skip: $skip
    ) {
      id
      owner
      spender
      value
      token {
        id
        symbol
      }
      timestamp
      txHash
    }
  }
`;

/**
 * Get user's complete profile (balance + transfers + approvals)
 */
export const GET_USER_PROFILE = gql`
  query GetUserProfile($userAddress: ID!) {
    user(id: $userAddress) {
      id
      balance
      token {
        id
        name
        symbol
        decimals
      }
    }
    transfers(
      where: { or: [{ from: $userAddress }, { to: $userAddress }] }
      orderBy: timestamp
      orderDirection: desc
      first: 10
    ) {
      id
      from
      to
      value
      token {
        id
        symbol
      }
      timestamp
      txHash
    }
    approvals(
      where: { owner: $userAddress }
      orderBy: timestamp
      orderDirection: desc
      first: 10
    ) {
      id
      spender
      value
      token {
        id
        symbol
      }
      timestamp
      txHash
    }
  }
`;
