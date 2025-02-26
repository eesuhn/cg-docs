---
title: "Coin Data by Token Address"
slug: "coins-contract-address"
excerpt: "This endpoint allows you to **query all the coin data (name, price, market ... including exchange tickers) on CoinGecko coin page based on asset platform and particular token contract address**"
hidden: false
createdAt: "Sun Feb 04 2024 14:18:21 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Feb 26 2025 13:52:21 GMT+0000 (Coordinated Universal Time)"
---
> 👍 **Tips**
> 
> - You may obtain the asset platform and contract address via several ways:
>   - refers to respective coin page and find ‘contract address’.
>   - refers to [`/coins/list`](/reference/coins-list) endpoint (`include platform = true`).

> 📘 **Notes**
> 
> - Coin descriptions may include newline characters represented as `\r\n` (escape sequences), which may require processing for proper formatting.
> - Cache / Update Frequency: every 60 seconds for all the API plans.
