---
title: "Token Data by Token Address"
slug: "token-data-contract-address"
excerpt: "This endpoint allows you to **query specific token data based on the provided token contract address on a network**"
hidden: false
createdAt: "Wed Jan 31 2024 03:32:40 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Feb 26 2025 14:01:59 GMT+0000 (Coordinated Universal Time)"
---
> 👍 **Tips**
> 
> - You may add values such as `top_pools` in the include param to include top pools along with the pools information.
> - If you would like to query token information such as socials, websites, description and etc. You can go to this endpoint [`/networks/{network}/tokens/{address}/info`](/reference/token-info-contract-address) instead.

> 📘 **Notes**
> 
> - If the token's market cap is not verified by the team, the API response will return null for its market cap value, even though it has a displayed value on GeckoTerminal, which might not be accurate as it often matches the Fully Diluted Valuation (FDV).
> - Market Cap can be verified by and sourced from CoinGecko, and the number may be higher than FDV as it may include Market Cap of tokens issued on other blockchain network.
> - Attributes specified in the `include` param will be returned under the top-level `"included"` key.
> - Cache/Update frequency: every 30 seconds.
