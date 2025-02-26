---
title: "Token Price by Token Addresses"
slug: "onchain-simple-price"
excerpt: "This endpoint allows you to **get token price based on the provided token contract address on a network**"
hidden: false
createdAt: "Wed Jan 31 2024 04:17:39 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Feb 12 2025 07:36:38 GMT+0000 (Coordinated Universal Time)"
---
> 📘 **Notes**
> 
> - The returned price currency is in USD.
> - Addresses not found in GeckoTerminal will be ignored.
> - This endpoint allows querying **up to 100 contract addresses** per request. This limit is exclusive for [paid plan](https://www.coingecko.com/en/api/pricing) subscribers (Analyst plan & above).
> - When using this endpoint, GeckoTerminal's routing decides the best pool for token price. The price source may change based on liquidity and pool activity. For full control over the price, you may use [`/networks/{network}/pools/{address}`](/reference/pool-address) endpoint by providing a specific pool address.
> - Cache/Update Frequency: every 30 seconds for Pro API (Analyst, Lite, Pro, Enterprise).
