---
title: "Improved Update Frequency for selected Pro-API endpoints"
slug: "improved-update-frequency-for-selected-pro-api-endpoints"
type: "improved"
createdAt: "Mon Jan 13 2025 09:36:14 GMT+0000 (Coordinated Universal Time)"
hidden: false
---
\[Changes below are applicable to Analyst/Lite/Pro/Enterprise [plan subscribers](https://www.coingecko.com/en/api/pricing) only.]

The edge cache duration for the following endpoints are now reduced to 20-30s, allowing you to retrieve updated data more frequently.

| Endpoints                                                                                                 | Previous Update Frequency | Current Update Frequency |
| :-------------------------------------------------------------------------------------------------------- | :------------------------ | :----------------------- |
| CoinGecko [/simple/price](https://docs.coingecko.com/reference/simple-price)                              | 30s                       | 20s                      |
| CoinGecko [/simple/token_price](https://docs.coingecko.com/reference/simple-token-price)                  | 30s                       | 20s                      |
| Onchain [/simple/networks/../token_price](https://docs.coingecko.com/reference/onchain-simple-price)      | 60s                       | 30s                      |
| Onchain [/networks/../pools/../trades](https://docs.coingecko.com/reference/pool-trades-contract-address) | 60s                       | 30s                      |
| Onchain [/networks/../pools/..](https://docs.coingecko.com/reference/pool-address)                        | 60s                       | 30s                      |
| Onchain [/networks/../pools/multi/..](https://docs.coingecko.com/reference/pools-addresses)               | 60s                       | 30s                      |

**What This Means for You:**

- **Fresher Data, Quicker**: With a reduced cache time, you’ll now have the option to access more up-to-date data, closer to real-time!
- **No Extra Credits for Cached Data**: If your request hits the cache (now updated every 20-30 seconds for endpoints above), there will be no additional credits charged—just like before.

**Things to Keep in Mind:**

- If your request hits our origin server instead of the cache to retrieve the latest data, there may be additional credits used.
- To balance cost and real-time data needs, we recommend reviewing your request frequency. For those who prefer fresher data without extra credits, consider keeping your request interval at 30 seconds or more to align with the new cache duration.

We’re committed to continuously improving your experience and ensuring you get the data you need, as efficiently as possible. If you have any questions or need assistance, feel free to reach out to [soonaik@coingecko.com](mailto:soonaik@coingecko.com) .

**CoinGecko API Team**