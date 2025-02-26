---
title: "Token Price by Token Addresses"
slug: "onchain-simple-price"
excerpt: "This endpoint allows you to **get token price based on the provided token contract address on a network**"
hidden: false
createdAt: "Wed Jan 31 2024 04:17:39 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue Feb 27 2024 07:12:44 GMT+0000 (Coordinated Universal Time)"
---
> 📘 **Notes**
> 
> - The returned price currency is in USD
> - Addresses not found in GeckoTerminal will be ignored
> - When using this endpoint, GeckoTerminal's routing decides the best pool for token price. The price source may change based on liquidity and pool activity. For full control over the price, you may use [`/networks/{network}/pools/{address}`](/reference/pool-address) endpoint by providing a specific pool address.
> - Cache/Update frequency: every 60 seconds
