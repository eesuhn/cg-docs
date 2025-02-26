---
title: "Coins List (ID Map)"
slug: "coins-list"
excerpt: "This endpoint allows you to **query all the supported coins on CoinGecko with coins ID, name and symbol**"
hidden: false
createdAt: "Wed Jan 31 2024 03:32:31 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Feb 26 2025 13:29:02 GMT+0000 (Coordinated Universal Time)"
---
> 👍 **Tips**
> 
> - You may use this endpoint to query the list of coins with coin id for other endpoints that contain params like `id` or `ids` (coin ID).
> - By default, this endpoint returns full list of active coins that are currently listed on CoinGecko.com , you can also flag `status=inactive` to retrieve coins that are no longer available on CoinGecko.com . The inactive coin IDs can also be used with [selected historical data](https://docs.coingecko.com/changelog/30042024) endpoints.

> 📘 **Notes**
> 
> - There is no pagination required for this endpoint.
> - Cache/Update Frequency: every 5 minutes for Pro API (Analyst, Lite, Pro, Enterprise).
