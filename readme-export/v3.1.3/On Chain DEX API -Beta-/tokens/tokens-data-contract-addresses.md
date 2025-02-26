---
title: "Tokens Data by Token Addresses"
slug: "tokens-data-contract-addresses"
excerpt: "This endpoint allows you to **query multiple tokens data based on the provided token contract addresses on a network**"
hidden: false
createdAt: "Wed Jan 31 2024 03:32:40 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Jun 05 2024 08:18:05 GMT+0000 (Coordinated Universal Time)"
---
> 👍 **Tips**
> 
> - You may add values such as `top_pools` in the include param to include top pools along with the pools information
> - If you would like to query token information such as socials, websites, description and etc. You can go to this endpoint [`/networks/{network}/tokens/{address}/info`](/reference/token-info-contract-address) instead

> 📘 **Notes**
> 
> - Addresses not found in GeckoTerminal.com will be ignored
> - This endpoint allows querying **up to 30 contract addresses** per request
> - The endpoint will only return the first top pool for each token
> - If the token's market cap is not verified by the team, the API response will return null for its market cap value, even though it has a displayed value on GeckoTerminal, which might not be accurate as it often matches the Fully Diluted Valuation (FDV)
> - Attributes specified in the `include ` params will be included under the "included" key at the top level
> - Cache/Update frequency: every 60 seconds
