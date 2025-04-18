---
title: "👑 Enterprise Plan"
slug: "enterprise-plan"
excerpt: "Exclusive endpoints available for **Enterprise plan clients only**"
hidden: true
createdAt: "Mon Jan 15 2024 08:52:21 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Fri Jan 26 2024 06:05:25 GMT+0000 (Coordinated Universal Time)"
---
> 📘 **Notes**
> 
> - Please be aware that the following endpoints are currently in beta, and there may be future changes
> - If you are currently subscribed to our Enterprise plan and do not have access to the endpoints listed below, kindly reach out to us at [api@coingecko.com](mailto:api@coingecko.com)

[block:parameters]
{
  "data": {
    "h-0": "Endpoint",
    "h-1": "Description",
    "0-0": "[/coins/{id}/circulating_supply_chart](/reference/coins_id_circulating_supply_chart)",
    "0-1": "Get historical circulating supply of a coin by number of days away from now based on provided coin id",
    "1-0": "[/coins/{id}/circulating_supply_chart/range](/reference/coins_id_circulating_supply_chart_range)",
    "1-1": "Get historical circulating supply of a coin, within a range of timestamp based on the provided coin id",
    "2-0": "[/coins/{id}/total_supply_chart](/reference/coins_id_total_supply_chart)",
    "2-1": "Get historical total supply of a coin by number of days away from now based on provided coin id",
    "3-0": "[/coins/{id}/total_supply_chart/range](/reference/coins_id_total_supply_chart_range)",
    "3-1": "Get historical total supply of a coin, within a range of timestamp based on the provided coin id",
    "4-0": "[/token_lists/{asset_platform_id}/all.json](/reference/token_lists_asset_platform_id)",
    "4-1": "Get full list of tokens of a blockchain network (asset platform) that is supported by Ethereum token list standard",
    "5-0": "Exclusive `5m` (5 minute) and `hourly`  \ninterval params for [/coins/{id}/market_chart](/reference/coins_id_market_chart)",
    "5-1": "Get the historical chart data of a coin including time in UNIX, price, market cap and 24hrs volume based on particular coin id",
    "6-0": "Exclusive `5m` (5 minute) and `hourly`  \ninterval params for [/coins/{id}/market_chart/range](/reference/coins_id_market_chart)",
    "6-1": "Get the historical chart data of a coin within certain time range in UNIX along with price, market cap and 24hrs volume based on particular coin id."
  },
  "cols": 2,
  "rows": 7,
  "align": [
    "left",
    "left"
  ]
}
[/block]
