---
title: "Coin Historical Chart Data by Token Address"
slug: "contract-address-market-chart"
excerpt: "This endpoint allows you to **get the historical chart data including time in UNIX, price, market cap and 24hrs volume based on asset platform and particular token contract address**"
hidden: false
createdAt: "Wed Jan 31 2024 03:32:31 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Feb 26 2025 13:41:39 GMT+0000 (Coordinated Universal Time)"
---
> 👍 **Tips**
> 
> - You may obtain the asset platform and contract address via several ways:
>   - refers to respective coin page and find ‘contract address’.
>   - refers to [`/coins/list`](/reference/coins-list) endpoint (`include platform = true`).

> 📘 **Notes**
> 
> - You may leave the interval params as empty for automatic granularity:
>   - 1 day from current time = **5-minutely** data
>   - 2 - 90 days from current time = **hourly** data
>   - above 90 days from current time = **daily** data (00:00 UTC)
> - For **non-Enterprise plan subscribers** who would like to get hourly data, please leave the interval params empty for auto granularity.
> - The **5-minutely** and **hourly** interval params are also exclusively available to **Enterprise plan subscribers,** bypassing auto-granularity:
>   - `interval=5m`: 5-minutely historical data (responses include information from the past 10 days up until now)
>   - `interval=hourly`: hourly historical data (responses include information from the past 100 days, up until now)
> - Cache / Update Frequency:  
>   - Every 5 minutes for all the API plans.
>   - The last completed UTC day (00:00) is available 35 minutes after midnight on the next UTC day (00:35). The cache will always expire at 00:40 UTC.
