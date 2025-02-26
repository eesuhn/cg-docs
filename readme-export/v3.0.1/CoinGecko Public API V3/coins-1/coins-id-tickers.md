---
title: "Coin Tickers by ID"
slug: "coins-id-tickers"
excerpt: "This endpoint allows you to **query the coin tickers on both centralized exchange (CEX) and decentralized exchange (DEX) based on a particular coin ID**"
hidden: false
createdAt: "Sun Feb 04 2024 14:18:21 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Feb 26 2025 13:21:23 GMT+0000 (Coordinated Universal Time)"
---
> 👍 **Tips**
> 
> - You may obtain the coin ID (API ID) via several ways:
>   - refers to respective coin page and find ‘API ID’.
>   - refers to [`/coins/list`](/reference/coins-list) endpoint.
>   - refers to google sheets [here](https://docs.google.com/spreadsheets/d/1wTTuxXt8n9q7C4NDXqQpI3wpKu1_5bGVmP9Xz0XGSyU/edit?usp=sharing).
> - You may specify the `exchange_ids` if you want to retrieve tickers for specific exchange only.
> - You may include values such as  `page` to specify which page of responses you would like to show.
> - You may also flag to include more data such as exchange logo and depth.

> 📘 **Notes**
> 
> - The tickers are paginated to 100 items.
> - Cache / Update Frequency: every 2 minutes for all the API plans.
> - When order is sorted by `volume`, **_converted_volume_** will be used instead of _**volume**_.
