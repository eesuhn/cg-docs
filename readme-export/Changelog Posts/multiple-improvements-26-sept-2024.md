---
title: "Multiple Improvements: Global Market Chart, Asset Platforms, Coin Categories, Historical Supply Chart"
slug: "multiple-improvements-26-sept-2024"
type: "improved"
createdAt: "Thu Sep 26 2024 09:30:00 GMT+0000 (Coordinated Universal Time)"
hidden: false
---
## Global Market Chart - Improved Daily Data Update

Previously, for [Global Market Cap Chart Data endpoint](https://docs.coingecko.com/reference/global-market-cap-chart) , the daily data is returned at 23:00 UTC. We've made improvement to return daily data at 00:00 UTC. 

The last completed UTC day (00:00) is available 5 minutes after midnight on the next UTC day (00:05). The cache will **always expire at 00:05 UTC**. If you wish to get the latest daily data (00:00 UTC), you can make request at 00:05 UTC or later.

<br />

## Asset Platforms - Included Images of Blockchain Network Logos

[Asset Platforms List (ID Map)](/reference/asset-platforms-list) now provides the logos of blockchain networks. 

For example:

```json
    "image": {
      "thumb": "https://coin-images.coingecko.com/asset_platforms/images/93/thumb/AN_logomark.png?1706606703",
      "small": "https://coin-images.coingecko.com/asset_platforms/images/93/small/AN_logomark.png?1706606703",
      "large": "https://coin-images.coingecko.com/asset_platforms/images/93/large/AN_logomark.png?1706606703"
    }
```

<br />

## Coins Categories - Included Ids of Top 3 Coins

[Coins Categories List with Market Data](/reference/coins-categories) now provides coins id of the top 3 coins of a category.

For example:

```json
"top_3_coins_id": [
  "bitcoin",
  "ethereum",
  "binancecoin"
],
```

<br />

## Circulating Supply Chart and Total Supply Chart - Fixed '0' data issue

For the following **Enterprise-plan** exclusive endpoints below, there was a bug that returned wrong '0' value in the payload. This is fixed and will no longer return wrong '0' value in the payload.

1. [👑 Circulating Supply Chart by ID](https://docs.coingecko.com/reference/coins-id-circulating-supply-chart)
2. [👑 Circulating Supply chart within Time Range by ID](https://docs.coingecko.com/reference/coins-id-circulating-supply-chart-range)
3. [👑 Total Supply Chart by ID](https://docs.coingecko.com/reference/coins-id-total-supply-chart)
4. [👑 Total Supply Chart within time range by ID](https://docs.coingecko.com/reference/coins-id-total-supply-chart-range)