---
title: "Multiple Improvements: Onchain Trending Pools, CG New Currencies Support, Snapshot, Exchange Info"
slug: "multiple-improvements-new-currencies-support"
type: "improved"
createdAt: "Sun Dec 15 2024 21:09:00 GMT+0000 (Coordinated Universal Time)"
hidden: false
---
## Onchain Trending Pools: Added Support to Filter by Duration

You can now query trending pools with the following endpoints, and filter them by different duration: 5m, 1h, 6h, 24h, using `duration` parameter. e.g. `duration=5m`

- [Trending Pools List](https://docs.coingecko.com/reference/trending-pools-list): query all the trending pools across all networks on GeckoTerminal
- [Trending Pools by Network](https://docs.coingecko.com/reference/trending-pools-network): query the trending pools based on the provided network

<br />

## CG Coin Prices: Added Support for New Fiat Currencies

You can now query coin prices in the 13 new currencies for the following 3 endpoints:

- [Coin Price by IDs](https://docs.coingecko.com/reference/simple-price): query latest price in selected currencies, by coin id
- [Coin Price by Token Addresses](https://docs.coingecko.com/reference/simple-token-price): query latest price in selected currencies, by token address
- [BTC-to-Currency Exchange Rates](https://docs.coingecko.com/reference/exchange-rates): query BTC exchange rates with other currencies

**New supported currencies:**

1. Colombia | COP
2. Kenya | KES
3. Romania | RON
4. Dominican Republic | DOP
5. Costa Rica | CRC
6. Honduras | HNL
7. Zambia | ZMW
8. El Salvador | SVC
9. Bosnia and Herzegovina | BAM
10. Peru | PEN
11. Guatemala | GTQ
12. Lebanon | LBP
13. Armenian Dram | AMD

<br />

## CG Coin Info: Included Snapshot URL

[Coin Data by ID](https://docs.coingecko.com/reference/coins-id) now includes Snapshot link, e.g.

```asp json
"snapshot_url": "https://snapshot.org/#/lido-snapshot.eth",
```

<br />

## CG Exchange Info: Included Number of Coins and Pairs

<https://docs.coingecko.com/reference/exchanges-id> now includes "coins" and "pairs", e.g.

```asp json
 "coins": 384,
 "pairs": 1281,
```