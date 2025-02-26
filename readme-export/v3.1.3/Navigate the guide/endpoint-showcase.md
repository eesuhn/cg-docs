---
title: "🏠 Endpoint Showcase"
slug: "endpoint-showcase"
excerpt: "Discover how CoinGecko API is used at CoinGecko.com and GeckoTerminal.com"
hidden: false
createdAt: "Fri Jan 26 2024 06:20:01 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue Feb 27 2024 09:16:41 GMT+0000 (Coordinated Universal Time)"
---
## CoinGecko

### [Home Page](https://www.coingecko.com)

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5efbe42-image.png",
        null,
        ""
      ],
      "align": "center",
      "border": true
    }
  ]
}
[/block]


1. [/global](/reference/crypto-global)  - Display global crypto data such as number of active cryptocurrencies, exchanges and etc.
2. [/search/trending](/reference/trending-search) - Display trending search coins, nfts and categories
3. [/coins/top_gainers_losers](/reference/coins-top-gainers-losers) - Display the largest gainers in 24h
4. [/coins/categories](/reference/coins-categories)  - Display all the categories list 
5. [/coins/markets](/reference/coins-markets) - Display all the supported coins with market related data

[block:html]
{
  "html": "<br>"
}
[/block]


### [Coin Page](https://www.coingecko.com/en/coins/bitcoin)

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2f71923-image.png",
        null,
        ""
      ],
      "align": "center",
      "border": true
    }
  ]
}
[/block]


1. [/coins/{id} ](/reference/coins-id) - Display all the coin data including name, price, market related data, website, explorers and etc.
2. [/simple/price ](/reference/simple-price) - Display data such as latest coin price, market cap and 24hr trading volume
3. [/coins/{id}/history](/reference/coins-id-history) - Display the historical price data  
   [/coins/{id}/market_chart ](/reference/coins-id-market-chart) - Display the historical data in line chart  
   [/coins/{id}/market_chart/range ](/reference/coins-id-market-chart-range) - Display the historical data within time range  
   [/coins/{id}/ohlc ](/reference/coins-id-ohlc) - Display the historical data in candlestick chart

[block:html]
{
  "html": "<br>"
}
[/block]


### [Exchanges Page](https://www.coingecko.com/en/exchanges/jupiter)

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9e12298-image.png",
        null,
        ""
      ],
      "align": "center",
      "border": true
    }
  ]
}
[/block]


1. [/exchanges/{id}](/reference/exchanges-id) - Display the exchange information such as name, type, market related data such as trading volume and etc. 
2. [/exchanges/{id}/volume_chart](/reference/exchanges-id-volume-chart) - Display the historical volume chart data 
3. [/exchanges/{id}/tickers](/reference/exchanges-id-tickers) - Display the exchange's tickers 

[block:html]
{
  "html": "<br>"
}
[/block]


### [NFTs Page](https://www.coingecko.com/en/nft/pudgy-penguins)

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/cda9241-image.png",
        null,
        ""
      ],
      "align": "center",
      "border": true
    }
  ]
}
[/block]


[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/cc963fe-image.png",
        null,
        ""
      ],
      "align": "center",
      "border": true
    }
  ]
}
[/block]


1. [/nfts/{id}](/reference/nfts-id) - Display NFT data such as name, contract address, website, market related data such as floor price, market cap, volume and etc. 
2. [/nfts/{id}/market_chart](/reference/nfts-id-market-chart) - Display the historical market data in chart 
3. [/nfts/{id}](/reference/nfts-id) - Display the description of the NFT collection
4. [/nfts/{id}/tickers](/reference/nfts-id-tickers) - Display the tickers of the NFT collection on different NFT marketplace

[block:html]
{
  "html": "<br>\n<br>"
}
[/block]


## GeckoTerminal

### [Home Page](https://www.geckoterminal.com/)

![](https://files.readme.io/8d5ac53-image.png)

1. [/onchain/search/pools ](/reference/search-pools) - Allow users to search for pools on GeckoTerminal
2. [/onchain/networks](/reference/networks-list) - Display a list of supported networks on GeckoTerminal
3. [/onchain/networks/trending_pools](/reference/trending-pools-list) - Display a list of trending pools across all networks on GeckoTerminal
4. [/onchain/networks/new_pools](/reference/latest-pools-list) - Display all the latest pools across all networks on GeckoTerminal

[block:html]
{
  "html": "<br>"
}
[/block]


### [ Chain Page (Ethereum)](https://www.geckoterminal.com/eth/pools)

![](https://files.readme.io/7b49f3e-image.png)

1. [/onchain/networks/{network}/dexes](/reference/dexes-list) - Display all the supported dex on a network on GeckoTerminal
2. [/onchain/networks/{network}/trending_pools](/reference/trending-pools-network) - Display a list of trending pools on a network on GeckoTerminal
3. [/onchain/networks/{network}/new_pools](/reference/latest-pools-network) -  Display a list of new pools on a network on GeckoTerminal
4. [/onchain/networks/{network}/pools](/reference/top-pools-network) - Display all the top pools on a network on GeckoTerminal

[block:html]
{
  "html": "<br>"
}
[/block]


### [Pool Page (PORK/WETH)](https://www.geckoterminal.com/eth/pools/0x331399c614ca67dee86733e5a2fba40dbb16827c)

![](https://files.readme.io/43e04c2-image.png)

1. [/onchain/networks/{network}/pools/{address}](/reference/pool-address) - Display pool data such as price, transactions, volume and etc.  
   [/onchain/networks/{network}/pools/{pool_address}/info](/reference/pool-token-info-contract-address) - Display pool information such as name, symbol, image url, description and etc. 
2. [/onchain/networks/{network}/pools/{pool_address}/ohlcv/{timeframe}](/reference/pool-ohlcv-contract-address) - Display the OHLCV chart of the pool
3. [/onchain/networks/{network}/pools/{pool_address}/trades](/reference/pool-trades-contract-address) - Display the trades of the pool in the past 24 hours
