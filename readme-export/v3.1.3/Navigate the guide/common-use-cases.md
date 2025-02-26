---
title: "👀 Common Use Cases"
slug: "common-use-cases"
excerpt: "Discover the common use cases of CoinGecko API by our users"
hidden: false
createdAt: "Fri Jan 26 2024 06:20:38 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu May 02 2024 05:00:54 GMT+0000 (Coordinated Universal Time)"
---
## 1\. Get Coins Logo Images

- Use [/coins/{id}](/reference/coins-id) endpoint
- This endpoint can be used to query other coin's metadata like: links, categories, contract address, community, description in different languages and many more

## 2\. Best Endpoint for Latest Crypto Price

- Use [/simple/price](/reference/simple-price) endpoint
- This endpoint can be used to query other market data like market cap, 24-hour trading volume and 24-hour price change percentage

## 3\. Get All Trading Pairs (Tickers) of a Coin

- Use [/coins/{id}/tickers](/reference/coins-id-tickers) endpoint

## 4\. Get Trading Pairs of Specific Coins from a Specific Exchange

- Use[ /coins/{id}/tickers](/reference/coins-id-tickers) endpoint by supplying specific exchange id

## 5\. Building Telegram Bot for Latest Coin Listings

- Use [/coins/list/new](/reference/coins-list-new) endpoint

## 6\. Get List of Coins Under Specific Category

- Use[ /coins/markets](/reference/coins-markets) by supplying specific category

## 7\. Identify DEX Decentralized Exchanges

- Use [/exchanges/list](/reference/exchanges-list) endpoint to get full list of exchanges with id on CoinGecko
- Use [/exchanges/{id}](/reference/exchanges-id) to find out whether the exchange is centralized or decentralized
- Example of responses (using Uniswap V3 as example) :

  Since Uniswap is a DEX, therefore it shows `"centralized": false`

  [block:html]{"html":"<br>"}[/block]

  ```Text json
  {
    "name": "Uniswap V3 (Ethereum)",
    ......
    "centralized": false, 👈
    ......
    "tickers": [],
    "status_updates": []
  }
  ```

## 8\. Get Bitcoin Dominance Data (BTC.D)

- Use [/global ](/reference/crypto-global)endpoint
- Example of responses:

  [block:html]{"html":"<br>"}[/block]

  ```json json
  {
    "data": {
      "active_cryptocurrencies": 12414,
      ......
      "market_cap_percentage": { 👈
        "btc": 47.82057011844006,👈
        "eth": 16.943340351591583,
        ......
      },
      "market_cap_change_percentage_24h_usd": -5.032104325648996,
      "updated_at": 1706002730
    }
  }
  ```

## 9\. Get Market Cap or Dominance of a Specific Ecosystem

- Use [/coins/categories](/reference/coins-categories)
- The endpoint also returns the 24-hour percentage change, offering insights into the traction of different categories or ecosystems

## 10\. Get Token Lists of a Specific Blockchain Network

- Use [/token_lists/{asset_platforms_id}/all.json](/reference/token-lists) endpoint
- Supply asset platform id to the endpoint

## 11\. Get 7-Day Sparkline Price Data of a Coin

- Use [/coins/{id}](/reference/coins-id) or [/coins/markets](/reference/coins-markets) endpoints by flagging `sparkline = true`

## 12\. Get Link to Individual CoinGecko Coin Page

- Use [/coins/list](/reference/coins-list) endpoint to get the API ID of the coin
- Supply API ID to the `www.coingecko.com/en/coins/{API_ID}`

## 13\. Check Coin Status and Stale Price Updates

- Active: use [/coins/list](/reference/coins-list) endpoint, only active coins will be shown there
- Price Stale: use [/simple/price](/reference/simple-price) endpoint, flag `include_last_updated_at = true` to check latest update time

## 14\. Get Real-Time and Historical Exchange of BTC in USD

- Current exchange rate: use [/exchange_rates](/reference/exchange-rates) endpoint
- Historical exchange rate: use [/coins/{id}/history](/reference/coins-id-history) or [/coins/{id}/market_chart](/reference/coins-id-market-chart) endpoints

## 15\. Get Watchlist Portfolio Data of a Coin

- Use [/coins/{id}](/reference/coins-id) endpoint by supplying coin id
- Example of responses:

  ```json
  {
    "id": "bitcoin",
    ......
    "watchlist_portfolio_users": 1487932, 👈
    "market_cap_rank": 1,
    ......
  }
  ```

## 16\. Get Historical Data for Inactive Coins

- Use [/coins/list](/reference/coins-list) endpoint, specifying the status param as `inactive`  
  Example of endpoint request:  
  `https://pro-api.coingecko.com/api/v3/coins/list?include_platform=false&status=inactive&x_cg_pro_api_key=YOUR_API_KEY`
- Retrieve the coin's ID from the endpoint mentioned above and use it to access historical data via the following endpoints
  - [/coins/{id}/history](/reference/coins-id-history)
  - [/coins/{id}/market_chart](/reference/coins-id-market-chart)
  - [/coins/{id}/market_chart/range](/reference/coins-id-market-chart-range)
  - [/coins/{id}/contract/{contract_address}/market_chart](/reference/contract-address-market-chart)
  - [/coins/{id}/contract/{contract_address}/market_chart/range](/reference/contract-address-market-chart-range)
