---
title: "Search Pools"
slug: "search-pools"
excerpt: "This endpoint allows you to **search for pools on a network**"
hidden: false
createdAt: "Wed Jan 31 2024 03:32:40 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Feb 26 2025 14:01:10 GMT+0000 (Coordinated Universal Time)"
---
> 👍 **Tips**
> 
> - You may use this endpoint to search for query such as pool contract address, token contract address or token symbol. The endpoint will return matching pools as response.
> - You may include values such as `page` to specify which page of responses you would like to show.

> 📘 **Notes**
> 
> - If the token's market cap is not verified by the team, the API response will return `null` for its market cap value, even though it has a displayed value on GeckoTerminal, which might not be accurate as it often matches the Fully Diluted Valuation (FDV).
> - Attributes specified in the `include` param will be returned under the top-level `"included"` key.
> - This endpoint returns up to 20 pools per page. Use the `page` param to navigate more results.
> - `page`: Pagination beyond 10 pages is available for [Paid Plan](https://www.coingecko.com/en/api/pricing) subscribers (Analyst plan or above).
> - Cache/Update frequency: every 60 seconds.
