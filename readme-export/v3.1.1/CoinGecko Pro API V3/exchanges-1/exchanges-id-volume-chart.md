---
title: "Exchange Volume Chart by ID"
slug: "exchanges-id-volume-chart"
excerpt: "This endpoint allows you to **query the historical volume chart data with time in UNIX and trading volume data in BTC based on exchange’s ID**"
hidden: false
createdAt: "Wed Jan 31 2024 03:32:31 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Feb 26 2025 13:44:25 GMT+0000 (Coordinated Universal Time)"
---
> 📘 **Notes**
> 
> - You can use this endpoint to query the historical volume chart data of **derivatives exchanges** as well.
> - The exchange volume in the response is provided in BTC. To convert it to other currencies, please use [/exchange_rates](/reference/exchange-rates) endpoint.
> - Data granularity is automatic (cannot be adjusted):
>   - 1 day = 10-minutely
>   - 7, 14 days = hourly
>   - 30 days & above = daily
> - Cache / Update Frequency: every 60 seconds for all the API plans.
