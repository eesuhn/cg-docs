---
title: "Update Frequency Improvements for selected Pro-API endpoints (March 2025)"
slug: "update-frequency-improvements-for-selected-pro-api-endpoints-march-2025"
type: "improved"
createdAt: "Fri Mar 14 2025 08:39:17 GMT+0000 (Coordinated Universal Time)"
hidden: false
---
\[Changes below are applicable to Analyst/Lite/Pro/Enterprise [plan subscribers](https://www.coingecko.com/en/api/pricing) only.]

Dear CoinGecko API paid plan subscribers, 

We’re excited to announce an improvement to our API, aimed at providing you with even faster access to real-time data! Starting **02:00 UTC, March 25, 2025**, the edge cache duration for the following endpoints will be reduced from 60s to 30s, allowing you to retrieve updated data more frequently.

1. Effective from 02:00 UTC, March 25, 2025:
   1. [Trending Pools List](https://docs.coingecko.com/reference/trending-pools-list) 
   2. [Trending Pools by Network](https://docs.coingecko.com/reference/trending-pools-network)
   3. [Top Pools by Network](https://docs.coingecko.com/reference/top-pools-network) 
   4. [Top Pools by Dex](https://docs.coingecko.com/reference/top-pools-dex)
2. Effective from 02:00 UTC, March 26, 2025:
   1. [New Pools by Network](https://docs.coingecko.com/reference/latest-pools-network) 
   2. [New Pools List](https://docs.coingecko.com/reference/latest-pools-list) 
   3. [ Megafilter for Pools](https://docs.coingecko.com/reference/pools-megafilter)
   4. [Search Pools](https://docs.coingecko.com/reference/search-pools)
3. Effective from 02:00 UTC, March 27, 2025:
   1. [Top Pools by Token Address](https://docs.coingecko.com/reference/top-pools-contract-address) 
   2. [Most Recently Updated Tokens List](https://docs.coingecko.com/reference/tokens-info-recent-updated) 
   3. [Pools by Category ID](https://docs.coingecko.com/reference/pools-category)

<br />

**What This Means for You:**

- **Fresher Data, Quicker**: With a reduced cache time, you’ll now have the option to access more up-to-date data, closer to real-time!
- **No Extra Credits for Cached Data**: If your request hits the cache (now updated every 30 seconds for endpoints above), there will be no additional credits charged—just like before.

**Things to Keep in Mind:**

- If your request hits our origin server instead of the cache to retrieve the latest data, there may be additional credits used.
- To balance cost and real-time data needs, we recommend reviewing your request frequency. For those who prefer to obtain data without extra credits, consider keeping your request interval at 60 seconds or more to align with the new cache duration.

We’re committed to continuously improving your experience and ensuring you get the data you need, as efficiently as possible. If you have any questions or need assistance, feel free to reach out to [soonaik@coingecko.com](mailto:soonaik@coingecko.com) .

**CoinGecko API Team**