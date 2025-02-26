---
title: "Token Price by Contract Addresses"
slug: "simple_token_price-1"
excerpt: "This endpoint allows you to **get token price based on the provided token contract address on a network**"
hidden: false
createdAt: "Sat Dec 23 2023 04:57:22 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue Jan 02 2024 09:17:39 GMT+0000 (Coordinated Universal Time)"
---
> 📘 **Notes**
> 
> - The returned price currency is in USD
> - Addresses not found in GeckoTerminal will be ignored
> - When using this endpoint, GeckoTerminal's routing decides the best pool for token price. The price source may change based on liquidity and pool activity. For full control over the price, you may use [`/networks/{network}/pools/{address}`](/reference/pool_address) endpoint by providing a specific pool address.
