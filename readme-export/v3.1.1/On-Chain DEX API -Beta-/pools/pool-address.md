---
title: "Specific Pool Data by Pool Address"
slug: "pool-address"
excerpt: "This endpoint allows you to **query the specific pool based on the provided network and pool address**"
hidden: false
createdAt: "Wed Jan 31 2024 03:32:40 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Mar 13 2025 10:15:16 GMT+0000 (Coordinated Universal Time)"
---
> 📘 **Notes**
> 
> - Address not found in GeckoTerminal will be ignored.
> - If the token's market cap is not verified by the team, the API response will return `null` for its market cap value, even though it has a displayed value on GeckoTerminal, which might not be accurate as it often matches the Fully Diluted Valuation (FDV).
> - Market Cap can be verified by and sourced from CoinGecko, and the number may be higher than FDV as it may include Market Cap of tokens issued on other blockchain network.
> - Attributes specified in the `include` param will be returned under the top-level `"included"` key.
> - `locked_liquidity_percentage` will be updated on daily basis.
> - Cache/Update Frequency: every 30 seconds for Pro API (Analyst, Lite, Pro, Enterprise).
