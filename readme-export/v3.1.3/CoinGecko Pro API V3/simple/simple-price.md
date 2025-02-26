---
title: "Coin Price by IDs"
slug: "simple-price"
excerpt: "This endpoint allows you to **query the prices of one or more coins by using their unique Coin API IDs**."
hidden: false
createdAt: "Wed Jan 31 2024 03:32:31 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Mar 14 2024 06:17:49 GMT+0000 (Coordinated Universal Time)"
---
> 👍 **Tips**
> 
> - You may obtain the coin id (api id) via several ways:
>   - refers to respective coin page and find ‘api id’
>   - refers to [`/coins/list`](/reference/coins-list) endpoint
>   - refers to google sheets [here](https://docs.google.com/spreadsheets/d/1wTTuxXt8n9q7C4NDXqQpI3wpKu1_5bGVmP9Xz0XGSyU/edit?usp=sharing)
> - You may flag to include more data such as market cap, 24hr volume, 24hr change, last updated time etc.
> - To verify if a price is stale, you may flag `include_last_updated_at=true` in your request to obtain the latest updated time. Alternatively, you may flag `include_24hr_change=true` to determine if it returns a 'null' value.

> 📘 **Notes**
> 
> - You may cross-check the price on [CoinGecko](https://www.coingecko.com) and learn more about our price methodology [here](https://www.coingecko.com/en/methodology)
> - Cache/Update Frequency: every 30 seconds for Pro API (Analyst, Lite, Pro, Enterprise)
