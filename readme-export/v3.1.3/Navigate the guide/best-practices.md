---
title: "✍️ Best Practices"
slug: "best-practices"
excerpt: "Wonder how to use different endpoints together? This is the perfect place for you"
hidden: false
createdAt: "Fri Jan 26 2024 06:16:12 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Jun 05 2024 15:18:30 GMT+0000 (Coordinated Universal Time)"
---
## User Journey for CoinGecko API Endpoints

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/60fecdf-image.png",
        null,
        ""
      ],
      "align": "center",
      "border": true
    }
  ]
}
[/block]


<br />

### "Discovery/Navigational Endpoints"

**Examples:**

- [/coins/list](/reference/coins-list) - can be used to query all the supported coins on CoinGecko with names, symbols and coin IDs that can be used in other endpoints
- [/search/trending](/reference/trending-search) - can be used to query trending search coins, categories and nfts on CoinGecko

<br />

### "Supporting Endpoints"

**Examples: **

- [/simple/supported_vs_currencies](/reference/simple-supported-currencies) - can be used to query the list of currencies for other endpoints that include parameters like `vs_currencies`, allowing to obtain the corresponding data for those currencies
- [/asset_platforms](/reference/asset-platforms-list) - can be used to query the list of asset platforms for other endpoints that contain parameters like `id` or `ids` (asset platforms), allowing the retrieval of corresponding data for these asset platforms

<br />

### "Data Endpoints"

**Examples: **

- [/simple/price](/reference/simple-price) - can be used to query the prices of coins using the unique coin IDs that can be obtained from the "discovery endpoints" mentioned above
- [/coins/{id}](/reference/coins-id) - can be used to query the coin data using the unique coin IDs that can be obtained from the "discovery endpoints" mentioned above

<br />

## User Journey for CoinGecko Onchain DEX API Endpoints

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/fc38fa8-image.png",
        null,
        ""
      ],
      "align": "center",
      "border": true
    }
  ]
}
[/block]


<br />

### "Discovery/Navigational Endpoints"

**Examples:**

- [/onchain/trending_pools](/reference/trending-pools-list) - can be used to query trending pools across all networks on GeckoTerminal 
- [/onchain/search/pools](/reference/search-pools) - can be used to search for any pools on GeckoTerminal

### "Supporting Endpoints"

**Examples: **

- [/onchain/networks](/reference/networks-list) - can be used to query all the supported networks on GeckoTerminal
- [/onchain/networks/{network}/dexes](/reference/dexes-list) - can be used to query all the supported decentralized exchanges (dexes) on GeckoTerminal based on network id that can be obtained from the endpoint mentioned above

### "Data Endpoints"

**Examples: **

- [/onchain/simple/networks/{network}/token_price/{addresses}](/reference/onchain-simple-price) - can be used to query any token price using the token address and network id that can be obtained from the "discovery endpoints" and "supporting endpoints" mentioned above
- [/onchain/networks/{network}/pools/{address}](/reference/pool-address) - can be used to query  the data of a specific pool based on the pool address and network id that can be obtained from the "discovery endpoints" and "supporting endpoints" mentioned above
