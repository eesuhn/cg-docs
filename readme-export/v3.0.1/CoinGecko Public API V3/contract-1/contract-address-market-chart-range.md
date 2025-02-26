---
title: "Coin Historical Chart Data within Time Range by Token Address"
slug: "contract-address-market-chart-range"
excerpt: "This endpoint allows you to **get the historical chart data within certain time range in UNIX along with price, market cap and 24hrs volume  based on asset platform and particular token contract address**"
hidden: false
createdAt: "Sun Feb 04 2024 14:18:21 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Feb 26 2025 13:53:15 GMT+0000 (Coordinated Universal Time)"
---
> 👍 **Tips**
> 
> - You may obtain the asset platform and contract address via several ways:
>   - refers to respective coin page and find ‘contract address'.
>   - refers to [`/coins/list`](/reference/coins-list) endpoint (`include platform = true`).

> 📘 **Notes**
> 
> - You may leave the interval params as empty for automatic granularity:
>   - 1 day from current time = **5-minutely** data
>   - 1 day from any time (except current time) = **hourly** data
>   - 2 - 90 days from any time = **hourly** data
>   - above 90 days from any time = **daily** data (00:00 UTC)
> - Cache / Update Frequency:  
>   Based on days range (all the API plans)
>   - 1 day = 30 seconds cache
>   - 2 -90 days = 30 minutes cache
>   - 90 days = 12 hours cache
> - The last completed UTC day (00:00) is available 35 minutes after midnight on the next UTC day (00:35). The cache will always expire at 00:40 UTC.
> - Access to historical data via the Public API (Demo plan) is **restricted to the past 365 days** only. To access the complete range of historical data, please subscribe to one of our [paid plans](https://www.coingecko.com/en/api/pricing) to obtain a Pro-API key.
