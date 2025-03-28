---
title: "Top Pools by Network"
slug: "top-pools-network"
excerpt: "This endpoint allows you to **query all the top pools based on the provided network**"
hidden: false
createdAt: "Wed Jan 31 2024 03:32:40 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Mar 27 2025 05:14:39 GMT+0000 (Coordinated Universal Time)"
---
> 👍 **Tips**
> 
> - You may include values such as `page` to specify which page of responses you would like to show.
> - For more flexibility in retrieving an exact list of pools that match your specific needs, consider using the [/pools/megafilter](/reference/pools-megafilter) endpoint.

> 📘 **Notes**
> 
> - If the token's market cap is not verified by the team, the API response will return `null` for its market cap value, even though it has a displayed value on GeckoTerminal, which might not be accurate as it often matches the Fully Diluted Valuation (FDV).
> - Attributes specified in the `include` param will be returned under the top-level `"included"` key.
> - This endpoint returns up to 20 pools per page. Use the `page` param to navigate more results.
> - `page`: Pagination beyond 10 pages is available for [Paid Plan](https://www.coingecko.com/en/api/pricing) subscribers (Analyst plan or above).
> - Cache/Update frequency: every 30 seconds.
> - GeckoTerminal equivalent page (example): <https://www.geckoterminal.com/solana/pools?sort=-24h_transactions>
