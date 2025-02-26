---
title: "Coin Data by ID"
slug: "coins-id"
excerpt: "This endpoint allows you to **query all the coin data of a coin (name, price, market ... including exchange tickers) on CoinGecko coin page based on a particular coin ID**"
hidden: false
createdAt: "Wed Jan 31 2024 03:32:31 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Feb 26 2025 13:41:02 GMT+0000 (Coordinated Universal Time)"
---
> 👍 **Tips**
> 
> - You may obtain the coin `id` (API ID) via several ways:
>   - refers to respective coin page and find "API ID".
>   - refers to [`/coins/list`](/reference/coins-list) endpoint.
>   - refers to Google Sheets [here](https://docs.google.com/spreadsheets/d/1wTTuxXt8n9q7C4NDXqQpI3wpKu1_5bGVmP9Xz0XGSyU/edit?usp=sharing).
> - You may also flag to include more data such as tickers, market data, community data, developer data and sparkline.
> - You may refer to `last_updated` in the endpoint response to check whether the price is stale.

> 📘 **Notes**
> 
> - Tickers are limited to 100 items, to get more tickers, please go to [/coins/{id}/tickers](/reference/coins-id-tickers).
> - Coin descriptions may include newline characters represented as `\r\n` (escape sequences), which may require processing for proper formatting. 
> - Cache/Update Frequency:
>   - Every 60 seconds for all the API plans.
>   - Community data for Twitter and Telegram will be updated on weekly basis (Reddit community data is no longer supported).
