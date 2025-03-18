---
title: "Multiple Improvement: locked liquidity..."
slug: "multiple-improvement-locked-liquidity"
type: ""
createdAt: "Fri Mar 14 2025 08:36:22 GMT+0000 (Coordinated Universal Time)"
hidden: true
---
## Onchain Token Info endpoints - Locked Liquidity

Now support **`locked_liquidity_percentage`** data.

**Improved endpoints:**

- [Specific Pool Data by Pool Address](https://docs.coingecko.com/reference/pool-address)
- [Multiple Pools Data by Pool Addresses](https://docs.coingecko.com/reference/pools-addresses)

```json
{
  "data": [
    {
      "id": "eth_0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640",
      "type": "pool",
      "attributes": {
        "base_token_price_usd": "3653.12491645176",
        "base_token_price_native_currency": "1.0",
..
        "volume_usd": {
          "m5": "868581.7348314",
          "h1": "16798158.0138526",
          "h6": "164054610.850188",
          "h24": "536545444.904535"
        },
        "reserve_in_usd": "163988541.3812",
        "locked_liquidity_percentage": "99.82"
      },
```

##