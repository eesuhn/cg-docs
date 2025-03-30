---
title: "Tokens Data by Token Addresses"
slug: "tokens-data-contract-addresses"
excerpt: "This endpoint allows you to **query multiple tokens data based on the provided token contract addresses on a network**"
hidden: false
createdAt: "Wed Jan 31 2024 03:32:40 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Fri Mar 28 2025 09:28:41 GMT+0000 (Coordinated Universal Time)"
---
> 👍 **Tips**
> 
> - You may add values such as `top_pools` in the include param to include top pools along with the pools information.
> - If you would like to query token information such as socials, websites, description and etc. You can go to this endpoint [`/networks/{network}/tokens/{address}/info`](/reference/token-info-contract-address) instead.

> 📘 **Notes**
> 
> - Addresses not found in GeckoTerminal.com will be ignored.
> - This endpoint allows querying **up to 50 contract addresses** per request. This limit is exclusive for [paid plan](https://www.coingecko.com/en/api/pricing) subscribers (Analyst plan & above). 
> - The endpoint will only return the first top pool for each token.
> - If the token's market cap is not verified by the team, the API response will return `null` for its market cap value, even though it has a displayed value on GeckoTerminal, which might not be accurate as it often matches the Fully Diluted Valuation (FDV).
> - Market Cap can be verified by and sourced from CoinGecko, and the number may be higher than FDV as it may include Market Cap of tokens issued on other blockchain network.
> - Attributes specified in the `include` param will be returned under the top-level `"included"` key.
> - Cache/Update frequency: every 30 seconds.
