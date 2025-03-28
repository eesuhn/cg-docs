---
title: "Enhanced Onchain Metadata, Increased Max Address Limit for Multi Endpoints, Improved Exchange Tickers Sorting"
slug: "multiple-improvements-onchain-metadata"
type: "improved"
createdAt: "Sun Feb 09 2025 04:06:45 GMT+0000 (Coordinated Universal Time)"
hidden: false
---
## Onchain Metadata: Improved Coverage

**Previously:** Payload may return 'missing.png' for `image_url` for tokens that do not have image data.

**Now: ** Coverage of metadata (images, websites, description, socials) is now improved for tokens on Solana, Ton, Base, and Sui networks. For tokens that do not contain image data, 'null' value will be returned for `image_url`.

**Improved endpoints with image data:**

1. [Trending Pools List](https://docs.coingecko.com/reference/trending-pools-list)
2. [Trending Pools by Network](https://docs.coingecko.com/reference/trending-pools-network)
3. [Specific Pool Data by Pool Address](https://docs.coingecko.com/reference/pool-address)
4. [Multiple Pools Data by Pool Addresses](https://docs.coingecko.com/reference/pools-addresses)
5. [Top Pools by Network](https://docs.coingecko.com/reference/top-pools-network)
6. [Top Pools by Dex](https://docs.coingecko.com/reference/top-pools-dex)
7. [New Pools by Network](https://docs.coingecko.com/reference/latest-pools-network)
8. [New Pools List](https://docs.coingecko.com/reference/latest-pools-list)
9. [Search Pools](https://docs.coingecko.com/reference/search-pools)
10. [Top Pools by Token Address](https://docs.coingecko.com/reference/top-pools-contract-address)
11. [Token Data by Token Address](https://docs.coingecko.com/reference/token-data-contract-address)
12. [Tokens Data by Token Addresses](https://docs.coingecko.com/reference/tokens-data-contract-addresses)
13. [Token Info by Token Address](https://docs.coingecko.com/reference/token-info-contract-address)
14. [Pool Tokens Info by Pool Address](https://docs.coingecko.com/reference/pool-token-info-contract-address)
15. [Most Recently Updated Tokens List](https://docs.coingecko.com/reference/tokens-info-recent-updated)

**Improved endpoints with metadata (images, websites, description, socials):**

1. [Token Info by Token Address](https://docs.coingecko.com/reference/token-info-contract-address)
2. [Pool Tokens Info by Pool Address](https://docs.coingecko.com/reference/pool-token-info-contract-address)
3. [Most Recently Updated Tokens List](https://docs.coingecko.com/reference/tokens-info-recent-updated)

Note: Metadata may be sourced on-chain and is not vetted by the CoinGecko team. If you wish to get metadata reviewed by CoinGecko team, you may use the following endpoints:

- [Coin Data by ID](https://docs.coingecko.com/reference/coins-id)
- [Coin Data by Token Address](https://docs.coingecko.com/reference/coins-contract-address)

<br />

## Improved Max Address Limit for onchain /multi endpoints

**Previously:** Onchain /multi endpoints support up to 30 token or pool contract addresses per request. 

**Now: ** Onchain /multi endpoints support up to 50 token or pool contract addresses per request.

**Improved endpoints:**

1. [Tokens Data by Token Addresses](https://docs.coingecko.com/reference/tokens-data-contract-addresses)
2. [Multiple Pools Data by Pool Addresses ](https://docs.coingecko.com/reference/pools-addresses)

Note: this new max address input limit is exclusive for paid plan subscribers (Analyst plan & above) only.

<br />

## Improved Data Consistency for Exchange Tickers by ID

For [Exchange Tickers by ID](https://docs.coingecko.com/reference/exchanges-id-tickers) endpoint, the order is sorted by **trust_score_desc** by default. 

- Sometimes duplicate or missing data may occur due to paginated cached response, especially when a ticker's rank changes between 2 paginated requests, e.g. it might shift from Page 2 to Page 1, vice versa.   
- We've added a new `order` option: **base_target**, which will sort the tickers by **base** symbol, then **target** symbol, in lexicographical order, i.e. `0->9`, then `a->Z`.

Example:  flagging ?order=base_target

```
pro-api.coingecko.com/api/v3/exchanges/binance/tickers?order=base_target
```

This sorting method ensures stable pagination, reducing issues where cached responses may cause duplicate or missing tickers across pages.