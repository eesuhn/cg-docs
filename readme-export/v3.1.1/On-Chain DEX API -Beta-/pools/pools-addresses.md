---
title: "Multiple Pools Data by Pool Addresses"
slug: "pools-addresses"
excerpt: "This endpoint allows you to **query multiple pools based on the provided network and pool address**"
hidden: false
createdAt: "Wed Jan 31 2024 03:32:40 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Feb 12 2025 07:35:05 GMT+0000 (Coordinated Universal Time)"
---
> 📘 **Notes**
> 
> - Addresses not found in GeckoTerminal will be ignored.
> - If the token's market cap is not verified by the team, the API response will return `null` for its market cap value, even though it has a displayed value on GeckoTerminal, which might not be accurate as it often matches the Fully Diluted Valuation (FDV).
> - This endpoint allows querying **up to 50 contract addresses** per request. This limit is exclusive for [paid plan](https://www.coingecko.com/en/api/pricing) subscribers (Analyst plan & above).
> - Market Cap can be verified by and sourced from CoinGecko, and the number may be higher than FDV as it may include Market Cap of tokens issued on other blockchain network.
> - Attributes specified in the `include ` params will be included under the "included" key at the top level.
> - Cache/Update Frequency: every 30 seconds for Pro API (Analyst, Lite, Pro, Enterprise).
