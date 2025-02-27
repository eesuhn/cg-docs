---
title: "Coin Historical Chart Data within Time Range by ID"
slug: "coins-id-market-chart-range"
excerpt: "This endpoint allows you to **get the historical chart data of a coin within certain time range in UNIX along with price, market cap and 24hr volume based on particular coin ID**"
hidden: false
createdAt: "Mon Feb 19 2024 08:16:18 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Feb 27 2025 18:34:26 GMT+0000 (Coordinated Universal Time)"
---
> 👍 **Tips**
> 
> - You may obtain the coin ID (API ID) via several ways:
>   - refers to respective coin page and find ‘API ID’.
>   - refers to [`/coins/list`](/reference/coins-list) endpoint.
>   - refers to google sheets [here](https://docs.google.com/spreadsheets/d/1wTTuxXt8n9q7C4NDXqQpI3wpKu1_5bGVmP9Xz0XGSyU/edit?usp=sharing).

> 📘 **Notes**
> 
> - You may leave the interval params as empty for automatic granularity:
>   - 1 day from current time = **5-minutely** data
>   - 1 day from any time (except current time) = **hourly** data
>   - 2 - 90 days from any time = **hourly** data
>   - above 90 days from any time = **daily** data (00:00 UTC)
> - For **non-Enterprise plan subscribers** who would like to get hourly data, please leave the interval params empty for auto granularity.
> - The **5-minutely** and **hourly** interval params are also exclusively available to **Enterprise plan subscribers**, bypassing auto-granularity:
>   - `interval=5m`: 5-minutely historical data, supports up to **any 10 days** date range per request. 
>   - `interval=hourly`: hourly historical data, supports up to **any 100 days** date range per request.
> - Data availability:
>   - `interval=5m`: Available from 9 February 2018 onwards.
>   - `interval=hourly`: Available from 30 Jan 2018 onwards.
> - Cache / Update Frequency:  
>   Based on days range (all the API plans)
>   - 1 day = 30 seconds cache
>   - 2 -90 days = 30 minutes cache
>   - 90 days = 12 hours cache
>   - The last completed UTC day (00:00) is available 35 minutes after midnight on the next UTC day (00:35). The cache will always expire at 00:40 UTC.
