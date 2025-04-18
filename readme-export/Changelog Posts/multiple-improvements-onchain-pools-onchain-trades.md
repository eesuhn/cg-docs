---
title: "Multiple Improvements: Onchain Pools Page Limit, Trades Token Filter"
slug: "multiple-improvements-onchain-pools-onchain-trades"
type: "improved"
createdAt: "Mon Jan 27 2025 10:23:43 GMT+0000 (Coordinated Universal Time)"
hidden: false
---
## Onchain Pools Data: Supports more than 10 pages of data

**Previously: ** There was a limitation of a maximum of 10 pages for accessing pools data in the related endpoints.

**Now:** All paid plan subscribers (Analyst & above) can access more than 10 pages of pools data for the endpoints below. 

**Improved Endpoints:**

1. [Search Pools](https://docs.coingecko.com/reference/search-pools)
2. [Top Pools by Token Address](https://docs.coingecko.com/reference/top-pools-contract-address)
3. [Trending Pools List](https://docs.coingecko.com/reference/trending-pools-list)
4. [Trending Pools by Network](https://docs.coingecko.com/reference/trending-pools-network)
5. [New Pools by Network](https://docs.coingecko.com/reference/latest-pools-network)
6. [New Pools List](https://docs.coingecko.com/reference/latest-pools-list)
7. [Top Pools by Network](https://docs.coingecko.com/reference/top-pools-network)
8. [Top Pools by Dex](https://docs.coingecko.com/reference/top-pools-dex)

<br />

## Onchain Trades: Added Token Filter

**Endpoint: ** [Past 24 Hour Trades by Pool Address](https://docs.coingecko.com/reference/pool-trades-contract-address)

**Previously: ** There was no way to filter trades data by base or quote token.

**Now**: A new optional parameter has been added to allow filtering by base or quote token of a pool.

- Parameter: `token`
- Value options:
  - `base`
  - `quote`
  - `{token_address}`

**Example**:

```json Example
?token=base // get the trades data of base token
?token=quote // get the trades data of quote token
?token=8FqXr6dw5NHA2TtwFeDz6q9p7y9uWyoEdZmpXqqUpump // get the trades data of specific token based on address
```