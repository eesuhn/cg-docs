---
title: "Coin OHLC Chart by ID"
slug: "coins-id-ohlc"
excerpt: "This endpoint allows you to **get the OHLC chart (Open, High, Low, Close) of a coin based on particular coin ID**"
hidden: false
createdAt: "Sun Feb 04 2024 14:18:21 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Feb 26 2025 13:51:57 GMT+0000 (Coordinated Universal Time)"
---
> 👍 Tips
> 
> - You may obtain the coin ID (API ID) via several ways:
>   - refers to respective coin page and find ‘API ID’.
>   - refers to [`/coins/list`](/reference/coins-list) endpoint.
>   - refers to google sheets [here](https://docs.google.com/spreadsheets/d/1wTTuxXt8n9q7C4NDXqQpI3wpKu1_5bGVmP9Xz0XGSyU/edit?usp=sharing).
> - For historical chart data with better granularity, you may consider using [/coins/{id}/market_chart](/reference/coins-id-market-chart) endpoint.

> 📘 **Notes**
> 
> - The timestamp displayed in the payload (response) indicates the end (or close) time of the OHLC data.
> - Data granularity (candle's body) is automatic:
>   - 1 - 2 days: 30 minutes
>   - 3 - 30 days: 4 hours
>   - 31 days and beyond: 4 days
> - Cache / Update Frequency:  
>   - Every 15 minutes for all the API plans.
>   - The last completed UTC day (00:00) is available 35 minutes after midnight on the next UTC day (00:35).
> - Access to historical data via the Public API (Demo plan) is **restricted to the past 365 days** only. To access the complete range of historical data, please subscribe to one of our [paid plans](https://www.coingecko.com/en/api/pricing) to obtain a Pro-API key.
