---
title: "Search Pools"
slug: "search-pools"
excerpt: "This endpoint allows you to **search for pools on a network**"
hidden: false
createdAt: "Wed Jan 31 2024 03:32:40 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Jun 05 2024 08:17:24 GMT+0000 (Coordinated Universal Time)"
---
> 👍 **Tips**
> 
> - You may use this endpoint to search for query such as pool address, token address or token symbol. The endpoint will return matching pools as response
> - You may include values such as `page` to specify which page of responses you would like to show

> 📘 **Notes**
> 
> - If the token's market cap is not verified by the team, the API response will return null for its market cap value, even though it has a displayed value on GeckoTerminal, which might not be accurate as it often matches the Fully Diluted Valuation (FDV)
> - Attributes specified in the `include ` params will be included under the "included" key at the top level
> - Cache/Update frequency: every 60 seconds
