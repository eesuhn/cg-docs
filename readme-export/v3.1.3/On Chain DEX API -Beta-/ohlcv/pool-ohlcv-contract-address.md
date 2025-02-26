---
title: "Pool OHLCV chart by Pool Address"
slug: "pool-ohlcv-contract-address"
excerpt: "This endpoint allows you to **get the OHLCV chart (Open, High, Low, Close, Volume) of a pool based on the provided pool address on a network**"
hidden: false
createdAt: "Wed Jan 31 2024 03:32:40 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue Mar 05 2024 04:30:22 GMT+0000 (Coordinated Universal Time)"
---
> 👍 **Tips**
> 
> - You may use this endpoint to query the historical price and volume of a token
> - You may select the timeframe with its respective aggregate to get the intended OHLCV data (Example: `minute?aggregate=15` for 15 minutes OHLCV)

> 📘 **Notes**
> 
> - This endpoint uses epoch/unix timestamp seconds for its timestamp format. Example: `1708850449`
> - Data is only available for **up to 6 months** prior. If no earlier data is available, an empty response will be returned
> - Pools with more than 2 tokens are not yet supported for this endpoint
> - Cache/Update frequency: every 60 seconds
