---
title: "Top Pools by Token Address"
slug: "top-pools-contract-address"
excerpt: "This endpoint allows you to **query top pools based on the provided token contract address on a network**"
hidden: false
createdAt: "Wed Jan 31 2024 03:32:40 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Jun 05 2024 08:17:40 GMT+0000 (Coordinated Universal Time)"
---
> 👍 **Tips**
> 
> - You may include values such as `page` to specify which page of responses you would like to show

> 📘 **Notes**
> 
> - The ranking of the top 20 pools is established by evaluating their liquidity and trading activity to identify the most liquid ones. This ranking is determined through a combination of two key factors: liquidity ('reserve_in_usd') and 24-Hour Trading Volume ('volume_usd')
> - If the token's market cap is not verified by the team, the API response will return null for its market cap value, even though it has a displayed value on GeckoTerminal, which might not be accurate as it often matches the Fully Diluted Valuation (FDV)
> - Attributes specified in the `include ` params will be included under the "included" key at the top level
> - Cache/Update frequency: every 60 seconds
