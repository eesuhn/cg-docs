---
title: "Pools by Category ID"
slug: "pools-category"
excerpt: "This endpoint allows you to **query all the pools based on the provided category ID**"
hidden: false
createdAt: "Tue Dec 24 2024 04:33:21 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Feb 27 2025 18:35:14 GMT+0000 (Coordinated Universal Time)"
---
> 👍 **Tips**
> 
> - You can retrieve full list of categories id via this endpoint: [Categories List](https://docs.coingecko.com/reference/categories-list).
> - You can retrieve tokens of a specific category, by flagging `include=base_token`.
> - GeckoTerminal categories are different from [CoinGecko categories](https://docs.coingecko.com/reference/coins-categories-list).

> 📘 **Notes**
> 
> - This endpoint returns up to 20 pools per page. Use the `page` param to navigate more results.
> - `page`: Pagination beyond 10 pages is available for [Paid Plan](https://www.coingecko.com/en/api/pricing) subscribers (Analyst plan or above).
> - GeckoTerminal equivalent page example: <https://www.geckoterminal.com/category/pump-fun>
> - Cache/Update frequency: every 60 seconds.
> - Exclusive for all Paid Plan Subscribers (Analyst, Lite, Pro and Enterprise).
