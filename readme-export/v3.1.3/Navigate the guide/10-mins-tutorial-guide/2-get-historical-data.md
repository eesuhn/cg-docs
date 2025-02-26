---
title: "2. Get Historical Data"
slug: "2-get-historical-data"
excerpt: ""
hidden: false
createdAt: "Mon Jan 29 2024 07:22:33 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue Feb 27 2024 09:12:49 GMT+0000 (Coordinated Universal Time)"
---
> 👍 **Tips**
> 
> - Most of the historical data are returned and queried using UNIX Timestamp. If you are not familiar with UNIX Timestamp, you may use tool like [epochconverter.com](https://www.epochconverter.com/) to convert between UNIX Timestamp and human readable date
> - You may use either coin id or contract address to get the historical data

There are five different endpoints to get historical data of a coin:

| Endpoint                                                                                                     | Description                                                                                                                                             |
| :----------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [/coins/{id}/history](/reference/coins-id-history)                                                           | Get the historical data (price, market cap, 24hrs volume, etc.) at a given date for a coin based on a particular coin id                                |
| [/coins/{id}/market_chart](/reference/coins-id-market-chart)                                                 | Get the historical chart data of a coin including time in UNIX, price, market cap and 24hrs volume based on particular coin id                          |
| [/coins/{id}/market_chart/range](/reference/coins-id-market-chart-range)                                     | Get the historical chart data of a coin within certain time range in UNIX along with price, market cap and 24hrs volume based on particular coin id     |
| [/coins/{id}/contract/{contract_address}/market_chart](/reference/contract-address-market-chart)             | Get the historical chart data of a coin including time in UNIX, price, market cap and 24hrs volume based on token contract address                      |
| [/coins/{id}/contract/{contract_address}/market_chart/range](/reference/contract-address-market-chart-range) | Get the historical chart data of a coin within certain time range in UNIX along with price, market cap and 24hrs volume based on token contract address |

> 📘 **Notes**
> 
> The data granularity (interval) for /market_chart and /market_chart/range endpoints is automatic and based on the date range:
> 
> - 1 day from current time = 5-minutely data
> - 1 day from anytime (except from current time) = hourly data
> - 2-90 days from current time or anytime = hourly data
> - above 90 days from current time or anytime = daily data (00:00 UTC)
