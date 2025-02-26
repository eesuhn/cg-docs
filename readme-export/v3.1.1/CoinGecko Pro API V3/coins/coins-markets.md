---
title: "Coins List with Market Data"
slug: "coins-markets"
excerpt: "This endpoint allows you to **query all the supported coins with price, market cap, volume and market related data**"
hidden: false
createdAt: "Wed Jan 31 2024 03:32:31 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Feb 26 2025 13:41:00 GMT+0000 (Coordinated Universal Time)"
---
> 👍 **Tips**
> 
> - You may specify the coins’ IDs in `ids` parameter if you want to retrieve market data for specific coins only instead of the whole list.
> - You may also provide value in `category` to filter the responses based on coin's category.
> - You can use `per_page` and `page` values to control the number of results per page and specify which page of results you want to display in the responses.

> 📘 **Notes**
> 
> - If you provide values for both `category` and `ids` parameters, the `category` parameter will be prioritized over the `ids` parameter.
> - Cache/Update Frequency: every 45 seconds for Pro API (Analyst, Lite, Pro, Enterprise).
