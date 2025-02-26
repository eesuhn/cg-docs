---
title: "💼 Global Market Cap Chart Data"
slug: "global-market-cap-chart"
excerpt: "This endpoint allows you to **query historical global market cap and volume data by number of days away from now**"
hidden: false
createdAt: "Wed Jan 31 2024 03:32:31 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Feb 26 2025 13:50:53 GMT+0000 (Coordinated Universal Time)"
---
> 📘 **Notes**
> 
> - CoinGecko equivalent page: <https://www.coingecko.com/en/global-charts>.
> - Data Granularity (auto):
>   - 1 day from now = **hourly** data
>   - 2 days & above from now = **daily** data
> - Exclusive for all Paid Plan Subscribers (Analyst, Lite, Pro and Enterprise).
> - The last completed UTC day (00:00) is available 5 minutes after midnight on the next UTC day (00:05). The cache will **always expire at 00:05 UTC**. If you wish to get the latest daily data (00:00 UTC), you can make request at 00:05 UTC or later.
> - Cache / Update Frequency: every 1 minute.
