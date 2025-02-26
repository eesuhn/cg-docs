---
title: "3. Get Exchanges & NFT Data"
slug: "3-get-exchanges-nft-data"
excerpt: ""
hidden: false
createdAt: "Mon Jan 29 2024 07:23:19 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Feb 26 2025 08:30:24 GMT+0000 (Coordinated Universal Time)"
---
You can get Exchange and NFT data just like how you get the coins data:

1. Get the ID (exchange or NFT) from `/list` endpoint.
2. Use the ID to query latest or historical market data

| Type                   | Coins                                                        | NFTs                                                                                 | Exchanges                                                            | Derivatives                                                          |
| :--------------------- | :----------------------------------------------------------- | :----------------------------------------------------------------------------------- | :------------------------------------------------------------------- | :------------------------------------------------------------------- |
| Get Full List with IDs | [/coins/list](/reference/coins-list)                         | [/nfts/list](/reference/nfts-list)                                                   | [/exchanges/list](/reference/exchanges-list)                         | [/derivatives/exchanges/list](/reference/derivatives-exchanges-list) |
| Get latest market data | [/coins/{id}](/reference/coins-id)                           | [/nfts/{id}](/reference/nfts-id)                                                     | [/exchanges/{id}](/reference/exchanges-id)                           | [/derivatives/exchanges/{id}](/reference/derivatives-exchanges-id)   |
| Get Historical Data    | [/coins/{id}/market_chart](/reference/coins-id-market-chart) | [/nfts/{id}/market_chart](https://docs.coingecko.com/reference/nfts-id-market-chart) | [/exchanges/{id}/volume_chart](/reference/exchanges-id-volume-chart) | [/exchanges/{id}/volume_chart](/reference/exchanges-id-volume-chart) |
