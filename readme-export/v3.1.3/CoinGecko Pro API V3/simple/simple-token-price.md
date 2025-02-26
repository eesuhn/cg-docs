---
title: "Coin Price by Token Addresses"
slug: "simple-token-price"
excerpt: "This endpoint allows you to **query a token price by using token contract address**."
hidden: false
createdAt: "Wed Jan 31 2024 03:32:31 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue Feb 27 2024 07:12:11 GMT+0000 (Coordinated Universal Time)"
---
> 👍 **Tips**
> 
> - You may obtain the asset platform and contract address via several ways:
>   - refers to respective coin page and find ‘contract’
>   - refers to [`/coins/list`](/reference/coins-list) endpoint (`include platform = true`)
> - You may flag to include more data such as market cap, 24hr volume, 24hr change, last updated time etc.

> 📘 **Notes**
> 
> - The endpoint returns the global average price of the coin that is aggregated across all active exchanges on CoinGecko
> - You may cross-check the price on [CoinGecko](https://www.coingecko.com) and learn more about our price methodology [here](https://www.coingecko.com/en/methodology)
> - Cache/Update Frequency: every 30 seconds for Pro API (Analyst, Lite, Pro, Enterprise)
