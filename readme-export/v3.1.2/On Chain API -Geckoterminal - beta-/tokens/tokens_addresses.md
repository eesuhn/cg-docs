---
title: "Tokens Data by Contract Addresses"
slug: "tokens_addresses"
excerpt: "This endpoint allows you to **query multiple tokens data based on the provided token contract addresses on a network**"
hidden: false
createdAt: "Sat Dec 23 2023 05:57:28 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue Jan 02 2024 09:17:40 GMT+0000 (Coordinated Universal Time)"
---
> 👍 **Tips**
> 
> - You may add values such as `top_pools` in the include param to include top pools along with the pools information
> - If you would like to query token information such as image url, websites, description and etc. You can go to this endpoint [`/networks/{network}/tokens/{address}/info`](/reference/token_info_address) instead

> 📘 **Notes**
> 
> - Addresses not found in GeckoTerminal will be ignored
> - The endpoint will only return the first top pool for each token
> - Attributes specified in the `include ` params will be included under the "included" key at the top level
