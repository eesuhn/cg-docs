---
title: "Extended Historical Data for Onchain OHLCV Endpoint"
slug: "extended-historical-data-for-onchain-ohlcv-endpoint"
type: "improved"
createdAt: "Wed Jan 15 2025 04:51:33 GMT+0000 (Coordinated Universal Time)"
hidden: false
---
## What’s New?

We’ve improved the [Pool OHLCV Chart by Pool Address](https://docs.coingecko.com/reference/pool-ohlcv-contract-address) endpoint to provide access to a much broader range of historical data.

### Key Updates

- **Previous Behavior:** Users could only query data for the past 6 months from today.
- **New Behavior**: Users can now access data from September 2021 to the present, depending on the pool’s tracking start date on GeckoTerminal.
- Each API request is **limited to a 6-month date range**, but users can query older data by using the before_timestamp parameter.

Note: access to data beyond the past 6 months is only available to [Paid Plan](https://www.coingecko.com/en/api/pricing) subscribers (Analyst plan & above).

### Action Required

No changes are required for existing integrations. However, users who need data beyond the past 6 months should adjust their queries to use the `before_timestamp` parameter to fetch additional data.