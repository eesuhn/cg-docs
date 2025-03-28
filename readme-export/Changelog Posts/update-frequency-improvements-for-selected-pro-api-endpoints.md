---
title: "Update Frequency Improvements for selected Pro-API endpoints"
slug: "update-frequency-improvements-for-selected-pro-api-endpoints"
type: "improved"
createdAt: "Fri Feb 14 2025 15:55:10 GMT+0000 (Coordinated Universal Time)"
hidden: false
---
\[Changes below are applicable to Analyst/Lite/Pro/Enterprise [plan subscribers](https://www.coingecko.com/en/api/pricing) only.]

Dear CoinGecko API paid plan subscribers, 

We’re excited to announce an improvement to our API, aimed at providing you with even faster access to real-time data! Starting **02:00 UTC, February 24, 2025**, the edge cache duration for the following endpoints will be reduced to 30s, allowing you to retrieve updated data more frequently.

| Endpoints                                                                                                            | Effective Date & Time                                            | Current Update Frequency | New Update Frequency |
| :------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------- | :----------------------- | :------------------- |
| Onchain [/networks/../tokens/{address}](https://docs.coingecko.com/reference/token-data-contract-address)            | 02:00 UTC, February 24, 2025                                     | 60s                      | 30s                  |
| Onchain [/networks/../tokens/multi/{addresses}](https://docs.coingecko.com/reference/tokens-data-contract-addresses) | 06:00 UTC, February 24, 2025                                     | 60s                      | 30s                  |
| Onchain [/networks/../pools/../ohlcv](https://docs.coingecko.com/reference/pool-ohlcv-contract-address)              | 02:00 UTC, February 25, 2025 - Enterprise plan subscribers only  | 60s                      | 30s                  |
| Onchain [/networks/../pools/../ohlcv](https://docs.coingecko.com/reference/pool-ohlcv-contract-address)              | 02:00 UTC, February 26, 2025 - Analyst/Lite/Pro plan subscribers | 60s                      | 30s                  |

<br />

**What This Means for You:**

- **Fresher Data, Quicker**: With a reduced cache time, you’ll now have the option to access more up-to-date data, closer to real-time!
- **No Extra Credits for Cached Data**: If your request hits the cache (now updated every 30 seconds for endpoints above), there will be no additional credits charged—just like before.

**Things to Keep in Mind:**

- If your request hits our origin server instead of the cache to retrieve the latest data, there may be additional credits used.
- To balance cost and real-time data needs, we recommend reviewing your request frequency. For those who prefer to obtain data without extra credits, consider keeping your request interval at 60 seconds or more to align with the new cache duration.

We’re committed to continuously improving your experience and ensuring you get the data you need, as efficiently as possible. If you have any questions or need assistance, feel free to reach out to [soonaik@coingecko.com](mailto:soonaik@coingecko.com) .

**CoinGecko API Team**