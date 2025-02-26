---
title: "Top Pools by Dex"
slug: "top-pools-dex"
excerpt: "This endpoint allows you to **query all the top pools based on the provided network and decentralized exchange (DEX)**"
hidden: false
createdAt: "Wed Jan 31 2024 03:32:40 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Feb 26 2025 14:00:47 GMT+0000 (Coordinated Universal Time)"
---
> 👍 **Tips**
> 
> - You may include values such as `page` to specify which page of responses you would like to show.

> 📘 **Notes**
> 
> - If the token's market cap is not verified by the team, the API response will return `null` for its market cap value, even though it has a displayed value on GeckoTerminal, which might not be accurate as it often matches the Fully Diluted Valuation (FDV).
> - Attributes specified in the `include` param will be returned under the top-level `"included"` key.
> - This endpoint returns up to 20 pools per page. Use the `page` param to navigate more results.
> - `page`: Pagination beyond 10 pages is available for [Paid Plan](https://www.coingecko.com/en/api/pricing) subscribers (Analyst plan or above).
> - Cache/Update frequency: every 60 seconds.
> - GeckoTerminal equivalent page (example): <https://www.geckoterminal.com/base/uniswap-v3-base/pools?sort=-24h_transactions>
