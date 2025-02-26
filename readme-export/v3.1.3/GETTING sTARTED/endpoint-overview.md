---
title: "📡 Endpoint Overview"
slug: "endpoint-overview"
excerpt: ""
hidden: false
createdAt: "Mon Jan 15 2024 08:31:29 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Fri May 10 2024 18:41:43 GMT+0000 (Coordinated Universal Time)"
---
> 📘 Notes
> 
> For Pro-API users (any [paid plan](https://www.coingecko.com/en/api/pricing) subscribers), you get to access all the endpoints listed below, except those that marked with 👑. Some endpoints may have parameters or data access that are exclusive to different plan subscribers, please refer to the endpoint reference for details.
> 
> In the API Reference section, the distinction between Paid Plan and Enterprise Plan will be marked:
> 
> - 💼 - exclusive for any Paid Plan subscribers 
> - 👑 - exclusive for Enterprise Plan subscribers only

[block:html]
{
  "html": "<br>"
}
[/block]


## CoinGecko Endpoints: Coins

| Endpoint                                                                                            | Description                                                                                                                                                                             |
| :-------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [/ping](/reference/ping-server)                                                                     | Endpoint to check the API server status                                                                                                                                                 |
| 💼 [/key](/reference/api-usage)                                                                     | Endpoint to check account's API usage                                                                                                                                                   |
| [/simple/price](/reference/simple-price)                                                            | Endpoint to query the prices of one or more coins by using their unique Coin API IDs                                                                                                    |
| [/simple/token_price/{id}](/reference/simple-token-price)                                           | Endpoint to query the prices of one or more coins by using their unique Coin API IDs                                                                                                    |
| [/simple/supported_vs_currencies](/reference/simple-supported-currencies)                           | Endpoint to query all the supported currencies on CoinGecko                                                                                                                             |
| [/coins/list](/reference/coins-list)                                                                | Endpoint to query all the supported coins on CoinGecko with coins id, name and symbol                                                                                                   |
| [/coins/markets](/reference/coins-markets)                                                          | Endpoint to query all the supported coins with price, market cap, volume and market related data                                                                                        |
| [/coins/{id}](/reference/coins-id)                                                                  | Endpoint to query all the coin data of a coin (name, price, market .... including exchange tickers) on CoinGecko coin page based on a particular coin id                                |
| [/coins/{id}/tickers](/reference/coins-id-tickers)                                                  | Endpoint to query the coin tickers on both centralized exchange (cex) and decentralized exchange (dex) based on a particular coin id                                                    |
| [/coins/{id}/history](/reference/coins-id-history)                                                  | Endpoint to query the historical data (price, market cap, 24hrs volume, etc) at a given date for a coin based on a particular coin id                                                   |
| [/coins/{id}/market_chart](/reference/coins-id-market-chart)                                        | Endpoint to get  the historical chart data of a coin including time in UNIX, price, market cap and 24hrs volume based on particular coin id                                             |
| [/coins/{id}/market_chart/range](/reference/coins-id-market-chart-range)                            | Endpoint to get the historical chart data of a coin within certain time range in UNIX along with price, market cap and 24hrs volume based on particular coin id.                        |
| [/coins-id-ohlc](/reference/coins-id-ohlc)                                                          | Endpoint to get the OHLC chart (Open, High, Low, Close) of a coin based on particular coin id                                                                                           |
| 💼 [/coins/{id}/ohlc/range](/reference/coins-id-ohlc-range)                                         | Endpoint to get the OHLC chart (Open, High, Low, Close) of a coin within a range of timestamp based on particular coin id                                                               |
| 💼 [/coins/top_gainers_losers](/reference/coins-top-gainers-losers)                                 | Endpoint to query the top 30 coins with largest price gain and loss by a specific time duration                                                                                         |
| 💼 [/coins/list/new](/reference/coins-list-new)                                                     | Endpoint to query the latest 200 coins that recently listed on CoinGecko                                                                                                                |
| 👑 [/coins/{id}/circulating_supply_chart](/reference/coins-id-circulating-supply-chart)             | Endpoint to query historical circulating supply of a coin by number of days away from now based on provided coin id                                                                     |
| 👑 [/coins/{id}/circulating_supply_chart/range](/reference/coins-id-circulating-supply-chart-range) | Endpoint to query historical circulating supply of a coin, within a range of timestamp based on the provided coin id                                                                    |
| 👑[ /coins/{id}/total_supply_chart](/reference/coins-id-total-supply-chart)                         | Endpoint to query historical total supply of a coin by number of days away from now based on provided coin id                                                                           |
| 👑 [/coins/{id}/total_supply_chart/range](/reference/coins-id-total-supply-chart-range)             | Endpoint to query historical total supply of a coin, within a range of timestamp based on the provided coin id                                                                          |
| [/coins/{id}/contract/{contract_address}](/reference/coins-contract-address)                        | Endpoint to query all the coin data (name, price, market .... including exchange tickers) on CoinGecko coin page based on asset platform and particular token contract address          |
| [/coins/{id}/contract/{..}/market_chart](/reference/contract-address-market-chart)                  | Endpoint to get the historical chart data including time in UNIX, price, market cap and 24hrs volume based on asset platform and particular token contract address.                     |
| [/coins/{id}/contract/{..}/market_chart/range](/reference/contract-address-market-chart-range)      | Endpoint to get the historical chart data within certain time range in UNIX along with price, market cap and 24hrs volume based on asset platform and particular token contract address |
| [/coins/categories/list](/reference/coins-categories-list)                                          | Endpoint to query all the coins categories on CoinGecko                                                                                                                                 |
| [/coins/categories](/reference/coins-categories)                                                    | Endpoint to query all the coins categories with market data (market cap, volume, etc.) on CoinGecko                                                                                     |

[block:html]
{
  "html": "<br>"
}
[/block]


## CoinGecko Endpoints: NFT

| Endpoint                                                                                                                  | Description                                                                                                                                                                             |
| :------------------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [/nfts/list](/reference/nfts-list)                                                                                        | Endpoint to query all supported NFTs with id, contract address, name, asset platform id and symbol on CoinGecko                                                                         |
| [/nfts/{id}](/reference/nfts-id)                                                                                          | Endpoint to to query all the NFT data (name, floor price, 24 hr volume....) based on the nft collection id                                                                              |
| [/nfts/{asset_platform_id}/contract/{..}](/reference/nfts-contract-address)                                               | Endpoint to query all the NFT data (name, floor price, 24 hr volume....) based on the nft collection contract address and respective asset platform                                     |
| 💼 [/nfts/markets](/reference/nfts-markets)                                                                               | Endpoint to query all the supported NFT collections with floor price, market cap, volume and market related data on CoinGecko                                                           |
| 💼 [/nfts/{id}/market_chart](/reference/nfts-id-market-chart)                                                             | Endpoint to query historical market data of a NFT collection, including floor price, market cap, and 24h volume, by number of days away from now                                        |
| 💼 [/nfts/{asset_platform_id}/contract/   {contract_address}/market_chart](/reference/nfts-contract-address-market-chart) | Endpoint to query historical market data of a NFT collection, including floor price, market cap, and 24h volume, by number of days away from now based on the provided contract address |
| 💼 [/nfts/{id}/tickers](/reference/nfts-id-tickers)                                                                       | Endpoint to query the latest floor price and 24h volume of a NFT collection, on each NFT marketplace, e.g. OpenSea and LooksRare                                                        |

[block:html]
{
  "html": "<br>"
}
[/block]


## CoinGecko Endpoints: Exchanges & Derivatives

| Endpoint                                                                            | Description                                                                                                                                    |
| :---------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| [/exchanges](/reference/exchanges)                                                  | Endpoint to query all the supported exchanges with exchanges’ data (id, name, country, .... etc) that have active trading volumes on CoinGecko |
| [/exchanges/list](/reference/exchanges-list)                                        | Endpoint to query all the exchanges with id and name                                                                                           |
| [/exchanges/{id}](/reference/exchanges-id)                                          | Endpoint to query exchange’s data (name, year established, country, .... etc), exchange volume in BTC and tickers based on exchange’s id       |
| [/exchanges/{id}/tickers](/reference/exchanges-id-tickers)                          | Endpoint to query exchange's tickers based on exchange’s id                                                                                    |
| [/exchanges/{id}/volume_chart](/reference/exchanges-id-volume-chart)                | Endpoint to query the historical volume chart data with time in UNIX and trading volume data in BTC based on exchange’s id                     |
| 💼 [/exchanges/{id}/volume_chart/range](/reference/exchanges-id-volume-chart-range) | Endpoint to query the historical volume chart data in BTC by specifying date range in UNIX based on exchange’s id                              |
| [/derivatives](/reference/derivatives-tickers)                                      | Endpoint to query all the tickers from derivatives exchanges on CoinGecko                                                                      |
| [/derivatives/exchanges](/reference/derivatives-exchanges)                          | Endpoint to query all the derivatives exchanges with related data (id, name, open interest, .... etc) on CoinGecko                             |
| [/derivatives/exchanges/{id}](/reference/derivatives-exchanges-id)                  | Endpoint to query the derivatives exchange’s related data (id, name, open interest, .... etc) based on the exchanges’ id                       |
| [/derivatives/exchanges/list](/reference/derivatives-exchanges-list)                | Endpoint to to query all the derivatives exchanges with id and name on CoinGecko                                                               |

[block:html]
{
  "html": "<br>"
}
[/block]


## CoinGecko Endpoints: General

| Endpoint                                                                     | Description                                                                                                                    |
| :--------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------- |
| [/exchange_rates](/reference/exchange-rates)                                 | Endpoint to query BTC exchange rates with other currencies.                                                                    |
| [/asset_platforms](/reference/asset-platforms-list)                          | Endpoint to query all the asset platforms (blockchain networks) on CoinGecko.                                                  |
| 👑 [/token_lists/{asset_platform_id}/all.json](/reference/token-lists)       | Endpoint to get full list of tokens of a blockchain network (asset platform) that is supported by Ethereum token list standard |
| [/search](/reference/search-data)                                            | Endpoint to search for coins, categories and markets listed on CoinGecko                                                       |
| [/search/trending](/reference/trending-search)                               | Endpoint to query trending search coins, nfts and categories on CoinGecko in the last 24 hours                                 |
| [/global](/reference/crypto-global)                                          | Endpoint to query cryptocurrency global data including active cryptocurrencies, markets, total crypto market cap and etc       |
| [/global/decentralized_finance_defi](/reference/global-defi)                 | Endpoint to query cryptocurrency global decentralized finance (defi) data including defi market cap, trading volume            |
| 💼 [/global/market_cap_chart](/reference/global-market-cap-chart)            | Endpoint to query historical global market cap and volume data by number of days away from now                                 |
| [/companies/public_treasury/{coin_id}](/reference/companies-public-treasury) | Endpoint to query public companies’ bitcoin or ethereum holdings                                                               |

[block:html]
{
  "html": "<br>"
}
[/block]


## 💼 Onchain DEX Endpoints (GeckoTerminal)

| Endpoint                                                                                                        | Description                                                                                                                        |
| :-------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| [/onchain/simple/networks/{..}/token_price/{addresses}](/reference/onchain-simple-price)                        | Endpoint to get token price based on the provided token contract address on a network                                              |
| [/onchain/networks](/reference/networks-list)                                                                   | Endpoint to query all the supported networks on GeckoTerminal                                                                      |
| [/onchain/networks/{network}/dexes](/reference/dexes-list)                                                      | Endpoint to query all the supported decentralized exchanges (dexes) based on the provided network on GeckoTerminal                 |
| [/onchain/networks/trending_pools](/reference/trending-pools-list)                                              | Endpoint to query all the trending pools across all networks on GeckoTerminal                                                      |
| [/onchain/networks/{network}/trending_pools](/reference/trending-pools-network)                                 | Endpoint to query the trending pools based on the provided network                                                                 |
| [/onchain/networks/{network}/pools/{address}](/reference/pool-address)                                          | Endpoint to query the specific pool based on the provided network and pool address                                                 |
| [/onchain/networks/{network}/pools/multi/{addresses}](/reference/pools-addresses)                               | Endpoint to query multiple pools based on the provided network and pool address                                                    |
| [/onchain/networks/{network}/pools](/reference/top-pools-network)                                               | Endpoint to query all the top pools based on the provided network                                                                  |
| [/onchain/networks/{network}/dexes/{dex}/pools](/reference/top-pools-dex)                                       | Endpoint to query all the top pools based on the provided network and decentralized exchange (dex)                                 |
| [/onchain/networks/{network}/new_pools](/reference/latest-pools-network)                                        | Endpoint to query all the latest pools based on provided network                                                                   |
| [/onchain/networks/new_pools](/reference/latest-pools-list)                                                     | Endpoint to query all the latest pools across all networks on GeckoTerminal                                                        |
| [/onchain/search/pools](/reference/search-pools)                                                                | Endpoint to search for pools on a network                                                                                          |
| [/onchain/networks/{..}/tokens/{token_address}/pools](/reference/top-pools-contract-address)                    | Endpoint to query top pools based on the provided token contract address on a network                                              |
| [/onchain/networks/{network}/tokens/{address}](/reference/token-data-contract-address)                          | Endpoint to query specific token data based on the provided token contract address on a network                                    |
| [/onchain/networks/{network}/tokens/multi/{addresses}](/reference/tokens-data-contract-addresses)               | Endpoint to query multiple tokens data based on the provided token contract addresses on a network                                 |
| [/onchain/networks/{network}/tokens/{address}/info](/reference/token-info-contract-address)                     | Endpoint to query specific token info such as name,symbol, coingecko id etc. based on provided token contract address on a network |
| [/onchain/networks/{..}/pools/{pool_address}/info](/reference/pool-token-info-contract-address)                 | Endpoint to query pool info including base and quote token info based on provided pool contract address on a network               |
| [/onchain/tokens/info_recently_updated](/reference/tokens-info-recent-updated)                                  | Endpoint to query 100 most recently updated tokens info across all networks on GeckoTerminal                                       |
| [/onchain/networks/{network}   /pools/{pool_address}/ohlcv/{timeframe}](/reference/pool-ohlcv-contract-address) | Endpoint to get the OHLCV chart (Open, High, Low, Close, Volume) of a pool based on the provided pool address on a network         |
| [/onchain/networks/{..}/pools/{pool_address}/trades](/reference/pool-trades-contract-address)                   | Endpoint to query the last 300 trades in the past 24 hours based on the provided pool address                                      |
