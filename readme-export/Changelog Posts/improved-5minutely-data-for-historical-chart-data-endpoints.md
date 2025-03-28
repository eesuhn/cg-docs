---
title: "Improved 5-minutely data for Historical Chart Data endpoints"
slug: "improved-5minutely-data-for-historical-chart-data-endpoints"
type: "improved"
createdAt: "Thu Jan 09 2025 10:41:00 GMT+0000 (Coordinated Universal Time)"
hidden: false
---
For the following 4 historical chart endpoints, the data of the _last 48 hours from now_ is no longer excluded. 

- [Coin Historical Chart Data by ID](https://docs.coingecko.com/reference/coins-id-market-chart)
- [Coin Historical Chart Data within Time Range by ID](https://docs.coingecko.com/reference/coins-id-market-chart-range)
- [Coin Historical Chart Data by Token Address](https://docs.coingecko.com/reference/contract-address-market-chart)
- [Coin Historical Chart Data within Time Range by Token Address](https://docs.coingecko.com/reference/contract-address-market-chart-range)

**Note:** The **5-minutely** and **hourly **interval params are exclusively available to Enterprise plan subscribers, bypassing auto-granularity: 

- `interval=5m`: 5-minutely historical data, supports up to any 10 days date range per request.
- `interval=hourly`: hourly historical data, supports up to any 100 days date range per request.
- **Data availability:**
  - `interval=5m`: Available from 9 February 2018 onwards
  - `interval=hourly`: Available from 30 Jan 2018 onwards

For non-Enterprise plan subscribers who would like to get hourly data, please leave the `interval` params empty for auto granularity:

- 1 day from current time = 5-minutely data
- 1 day from any time (except current time) = hourly data
- 2 - 90 days from any time = hourly data
- above 90 days from any time = daily data (00:00 UTC)