---
title: "Multiple Improvements: Onchain Token Price, NFT Market Cap"
slug: "multiple-improvements-onchain-token-price-nft-market-cap"
type: "improved"
createdAt: "Fri Jan 24 2025 09:22:16 GMT+0000 (Coordinated Universal Time)"
hidden: false
---
## Onchain Simple Token Price: Added Market Cap and 24h Volume Data

**Endpoint: ** [Token Price by Token Addresses](https://docs.coingecko.com/reference/onchain-simple-price)

- You can now flag `include_market_cap=true` and `include_24hr_vol=true` to retrieve market cap and 24h trading volume data. e.g.

```json json
{
  "data": {
    "id": "e1979db1-5c3e-4ba8-b103-cb0258af4a7c",
    "type": "simple_token_price",
    "attributes": {
      "token_prices": {
        "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48": "0.999365729816931",
        "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2": "3399.24368371279"
      },
      "market_cap_usd": {
        "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48": "51963214441.24363",
        "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2": "10005535878.50094"
      },
      "h24_volume_usd": {
        "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48": "2095689865.85327",
        "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2": "2544539948.02599"
      }
    }
  }
}
```

<br />

## NFT Data: Added 'Market Cap Rank'

You can now obtain the `market_cap_rank` data of NFT collections via the following endpoints: 

- [NFTs Collection Data by ID](https://docs.coingecko.com/reference/nfts-id)
- [NFTs Collection Data by Contract Address](https://docs.coingecko.com/reference/nfts-contract-address)

```json example

  "market_cap_rank": 75,

```