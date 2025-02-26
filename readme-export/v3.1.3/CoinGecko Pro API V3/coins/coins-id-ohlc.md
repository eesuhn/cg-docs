---
title: "Coin OHLC Chart by ID"
slug: "coins-id-ohlc"
excerpt: "This endpoint allows you to **get the OHLC chart (Open, High, Low, Close) of a coin based on particular coin id**."
hidden: false
createdAt: "Wed Jan 31 2024 03:32:31 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Fri May 10 2024 19:26:44 GMT+0000 (Coordinated Universal Time)"
---
> 👍 Tips
> 
> - You may obtain the coin id (api id) via several ways:
>   - refers to respective coin page and find ‘api id’
>   - refers to [`/coins/list`](/reference/coins-list) endpoint
>   - refers to google sheets [here](https://docs.google.com/spreadsheets/d/1wTTuxXt8n9q7C4NDXqQpI3wpKu1_5bGVmP9Xz0XGSyU/edit?usp=sharing)
> - For historical chart data with better granularity, you may consider using [/coins/{id}/market_chart](/reference/coins-id-market-chart) endpoint

> 📘 **Notes**
> 
> - The timestamp displayed in the payload (response) indicates the end (or close) time of the OHLC data
> - Data granularity (candle's body) is automatic:
>   - 1 - 2 days: 30 minutes
>   - 3 - 30 days: 4 hours
>   - 31 days and beyond: 4 days
> - Cache / Update Frequency:  
>   - every 30 minutes for all the API plans
>   - The last completed UTC day (00:00) is available 35 minutes after midnight on the next UTC day (00:35)
> - Exclusive **daily** and **hourly** candle interval parameter for all paid plan subscribers (`interval = daily`, `interval=hourly`)
>   - '**daily**' interval is available for **1** / **7** / **14** / **30** / ** 90** / **180** days only.
>   - '**hourly**' interval is available for  **1** /**7** / **14** / **30** / **90** days only.
