---
title: "Fixed - Historical Supply endpoints: false zero value data will no longer surface"
slug: "improvement-for-historical-supply-endpoints-false-zero-value-data-will-no-longer-surface"
type: "fixed"
createdAt: "Fri Sep 13 2024 05:22:00 GMT+0000 (Coordinated Universal Time)"
hidden: true
---
For the following Enterprise-plan exclusive endpoints below, there was a bug that caused the payload to return '0' value. This is fixed and will no longer return false '0' value in the payload.

1. [👑 Circulating Supply Chart by ID](https://docs.coingecko.com/reference/coins-id-circulating-supply-chart)
2. [👑 Circulating Supply chart within Time Range by ID](https://docs.coingecko.com/reference/coins-id-circulating-supply-chart-range)
3. [👑 Total Supply Chart by ID](https://docs.coingecko.com/reference/coins-id-total-supply-chart)
4. [👑 Total Supply chart within time range by ID](https://docs.coingecko.com/reference/coins-id-total-supply-chart-range)