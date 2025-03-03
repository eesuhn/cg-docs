---
title: "Added: Onchain Categories Data, CG data improvements"
slug: "multiple-improvements-onchain-categories-data"
type: "added"
createdAt: "Tue Dec 24 2024 10:13:00 GMT+0000 (Coordinated Universal Time)"
hidden: false
---
## NEW: Onchain Categories : Get Categories on GeckoTerminal.com

This new [Categories List](https://docs.coingecko.com/reference/categories-list) endpoint allows you to query all the categories supported on GeckoTerminal.com such as 'Pump Fun' and 'Animal'.  

- This endpoint is exclusively available for [Analyst/Lite/Pro/Enterprise plan](https://www.coingecko.com/en/api/pricing) subscribers only. 

<br />

## NEW: Onchain Catergory Pools: Get Pools of a specific Category

This new [Pools by Category ID](https://docs.coingecko.com/reference/pools-category) endpoint allows you to query all the pools of a specific category on GeckoTerminal.com.

- This endpoint is exclusively available for [Analyst/Lite/Pro/Enterprise plan](https://www.coingecko.com/en/api/pricing) subscribers only.
- You can also obtain tokens of a specific category, by flagging `include=base_token` 

<br />

## Onchain Token Info: Added Categories Data

You can now obtain the categories of a token via the following endpoints: 

1. [Token Info by Token Address](https://docs.coingecko.com/reference/token-info-contract-address)
2. [Pool Tokens Info by Pool Address](https://docs.coingecko.com/reference/pool-token-info-contract-address)

Payload example:

```yaml json
  "categories": [
    "Doge",
    "Baby",
    "Animal"
  ],
  "gt_category_ids": [
    "doge",
    "baby",
    "animal"
```

<br />

## Onchain New Pools Data: Bug Fixed

Previously, this [/networks/new_pools](https://docs.coingecko.com/reference/latest-pools-network) endpoint omitted new pools that are created within the last 24 hours. 

It now returns all newly created pools in the last 48 hours. 

<br />

## CoinGecko Exchange Data: Added support of inactive exchange id

You now query the the list of id of delisted exchanges with [Exchanges List (ID Map)](https://docs.coingecko.com/reference/exchanges-list) endpoint, by flagging `status=inactive `

Payload example:

```yaml json
  {
    "id": "ftx",
    "name": "FTX (Derivatives)"
  },
  {
    "id": "ftx_spot",
    "name": "FTX"
  },
  {
    "id": "ftx_tr",
    "name": "FTX TR"
  },
  {
    "id": "ftx_us",
    "name": "FTX.US"
  },
```

**Tips**: you may query to get historical volume delisted exchanges for via the following endpoints:

-  [Exchange Volume Chart by ID](https://docs.coingecko.com/reference/exchanges-id-volume-chart) 
- [Exchange Volume Chart within Time Range by ID](https://docs.coingecko.com/reference/exchanges-id-volume-chart-range)

<br />

## CoinGecko Historical Chart Data: Faster Last UTC Day (00:00) Data Update

For [Coin Historical Chart Data by ID](https://docs.coingecko.com/reference/coins-id-market-chart) endpoint, the last completed UTC day (00:00) data is now available **10 minutes after midnight** on the next UTC day (00:10).

Previously, the last completed UTC day (00:00) was only made available **35 minutes** after midnight.