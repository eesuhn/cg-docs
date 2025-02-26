---
title: "💼 Paid Plan"
slug: "paid-plan"
excerpt: "Exclusive endpoints available for all paid plans: **Analyst, Lite, Pro, Enterprise**"
hidden: true
createdAt: "Mon Jan 15 2024 08:52:06 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Fri Jan 26 2024 06:05:25 GMT+0000 (Coordinated Universal Time)"
---
> 📘 **Notes**
> 
> - Please be aware that the following endpoints are currently in beta, and there may be future changes
> - Your feedback is valuable to us; please share your thoughts with us at [api@coingecko.com](mailto:api@coingecko.com)

[block:parameters]
{
  "data": {
    "h-0": "Endpoint",
    "h-1": "Description",
    "0-0": "[/coins/list/new](/reference/coins_list_new)",
    "0-1": "Get the latest 200 coins that recently listed on CoinGecko",
    "1-0": "[/coins/top_gainers_losers](/reference/coins_top_gainers_losers)",
    "1-1": "Get the top 30 coins with largest price gain and loss by a specific time duration",
    "2-0": "[/nfts/markets](/reference/nfts_markets)",
    "2-1": "Get all the supported NFT collections with floor price, market cap, volume and market related data on CoinGecko",
    "3-0": "[/nfts/{id}/market_chart](/reference/nfts_contract_address_market_chart)",
    "3-1": "Get the historical market data of a NFT collection, including floor price, market cap, and 24h volume, by number of days away from now based on the provided nft id",
    "4-0": "[/nfts/{asset_platform_id}/  \ncontract/{contract_address}/market_chart](/reference/nfts_contract_address_market_chart)",
    "4-1": "Get historical market data of a NFT collection, including floor price, market cap, and 24h volume, by number of days away from now based on the provided contract address",
    "5-0": "[/nfts/{id}/tickers](/reference/nfts_id_tickers)",
    "5-1": "Get the latest floor price and 24h volume of a NFT collection, on each NFT marketplace, e.g. OpenSea and LooksRare",
    "6-0": "[/global/market_cap_chart](/reference/global_market_cap_chart)",
    "6-1": "Get historical global market cap and volume data by number of days away from now",
    "7-0": "[/exchanges/{id}/volume_chart/range](/reference/exchanges_id_volume_chart_range)",
    "7-1": "Get the historical volume chart data in BTC by specifying date range in UNIX based on exchange’s id",
    "8-0": "Exclusive `daily` interval params for [/coins/{id}/ohlc](/reference/coins_id_ohlc)",
    "8-1": "Get the OHLC chart (Open, High, Low, Close) of a coin based on particular coin id"
  },
  "cols": 2,
  "rows": 9,
  "align": [
    "left",
    "left"
  ]
}
[/block]
