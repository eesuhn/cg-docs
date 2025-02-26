---
title: "On Chain API (GeckoTerminal)"
slug: "on-chain-api"
excerpt: "Exclusive on-chain endpoints available for all paid plans: **Analyst, Lite, Pro, Enterprise**"
hidden: true
createdAt: "Mon Jan 15 2024 08:52:47 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Fri Jan 26 2024 06:05:25 GMT+0000 (Coordinated Universal Time)"
---
| Endpoint Category | Endpoint                                                  | Description                                                                                     |
| :---------------- | :-------------------------------------------------------- | :---------------------------------------------------------------------------------------------- |
| Simple            | /onchain/simple/\*                                        | Endpoint to get latest token price by contract address                                          |
| Networks          | /onchain/networks                                         | Endpoint to get all the supported blockchain networks on GeckoTerminal                          |
| Dexes             | /onchain/networks/{network}/dexes                         | Endpoint to get the list of dexes on GeckoTerminal by network                                   |
| Pools             | /onchain/networks/\*                                      | Endpoints to get pools related data such as trending pools. latest pools, pool information etc. |
| Tokens            | /onchain/networks/{network}/tokens/\*                     | Endpoints to get tokens related data such as top pools, token information etc. by token address |
| OHLCV             | /onchain/networks/{network}/pools/{pool_address}/ohlcv/\* | Endpoint to get the OHLCV chart of a pool by pool address                                       |
| Trades            | /onchain/networks/{network}/pools/{pool_address}/trades   | Endpoint to get the past 24 hour trades by pool address                                         |
