---
title: "New Endpoint & Multiple Improvements: On-Chain Top Token Holder Address, Security Data, Historical Supply."
slug: "onchain-token-top-holder-address"
type: "added"
createdAt: "Fri Mar 28 2025 08:36:00 GMT+0000 (Coordinated Universal Time)"
hidden: false
---
## [Pro-API Exclusive] New Endpoint  - Top Token Holder Address Data

You can now access the top 50 token holder address data for tokens, as seen on GeckoTerminal.com. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/aa36fd948aa8fa813161aa927b3fdf5d7aaf9b5c3d30c1d6b9954a138b752c17-Screenshot_2025-03-26_at_12.10.28_PM.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


By default, this endpoint returns the top 10 holders data, you can also specify the `holders` parameter to retrieve up to top 50 holders data. 

**Network supported:**

- EVM: Ethereum, Polygon, BNB, Arbitrum, Optimism, Base
- Solana
- Sui
- TON
- Ronin

👉 Visit the endpoint reference page - [Top Token Holders by Token Address](https://docs.coingecko.com/reference/top-token-holders-token-address) to learn more and try it out now!

**Note:**  this exclusive endpoint is available for our API [paid plan](https://www.coingecko.com/en/api/pricing) subscribers (Analyst plan & above). 

- The holders data is currently in **Beta**, with ongoing improvements to data quality, coverage, and update frequency.
- For Solana tokens, the maximum number of retrievable top holders data is 40 instead of 50. 

**Tips:** You may also use the following endpoints to retrieve **token holders count** and **top holders distribution percentage data**:

- [Token Info by Token Address](https://docs.coingecko.com/reference/token-info-contract-address)
- [Pool Tokens Info by Pool Address](https://docs.coingecko.com/reference/pool-token-info-contract-address)

<br />

## Historical Supply endpoints - Support for Inactive Coins

You may now access historical total and circulating supply data of inactive coins using the following endpoints. To check for list of inactive coins, you may use [Coin List (ID Map)](https://docs.coingecko.com/reference/coins-list) endpoint and flag `status=inactive`.

Note: these endpoints below are exclusive for [Enterprise plan](https://www.coingecko.com/en/api/pricing) customers only.

**Improved endpoints:**

- [Circulating Supply Chart by ID](https://docs.coingecko.com/reference/coins-id-circulating-supply-chart)
- [Circulating Supply Chart within Time Range by ID](https://docs.coingecko.com/reference/coins-id-circulating-supply-chart-range)
- [Total Supply Chart by ID](https://docs.coingecko.com/reference/coins-id-total-supply-chart)
- [Total Supply Chart within time range by ID](https://docs.coingecko.com/reference/coins-id-total-supply-chart-range)

<br />

## Onchain Pool Data endpoints - Locked Liquidity

Now support **`locked_liquidity_percentage`** data.

**Improved endpoints:**

- [Specific Pool Data by Pool Address](https://docs.coingecko.com/reference/pool-address)
- [Multiple Pools Data by Pool Addresses](https://docs.coingecko.com/reference/pools-addresses)

```json
{
  "data": [
    {
      "id": "eth_0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640",
      "type": "pool",
      "attributes": {
        "base_token_price_usd": "3653.12491645176",
        "base_token_price_native_currency": "1.0",
..
        "volume_usd": {
          "m5": "868581.7348314",
          "h1": "16798158.0138526",
          "h6": "164054610.850188",
          "h24": "536545444.904535"
        },
        "reserve_in_usd": "163988541.3812",
        "locked_liquidity_percentage": "99.82"
      },
```

<br />

## Onchain Token Info endpoints - GT Score, Mint Authority, Freeze Authority

The following Token Info endpoints now provide more security related information:

- **GeckoTerminal Score Details ** - Learn more about GT Score [here](https://support.coingecko.com/hc/en-us/articles/38381394237593-What-is-GT-Score-How-is-GT-Score-calculated).
  - **Pool** - Combination of pool signals such as honeypot risk, buy/sell tax, proxy contract, liquidity amount, and whether the liquidity is locked.
  - **Transaction **- Total number of transactions and trading volume in the last 24 hours.
  - **Creation** - Age of the pool since creation. The longer, the better it is for the score.
  - **Info** - Submitted social info and metadata to the token.
  - **Holders** - Distribution of tokens among unique addresses.
- **Mint Authority**
- **Freeze Authority**

**Improved endpoints:**

- [Token Info by Token Address](https://docs.coingecko.com/reference/token-info-contract-address)
- [Pool Tokens Info by Pool Address](https://docs.coingecko.com/reference/pool-token-info-contract-address)

```json
        "gt_score": 92.6605504587156,    
        "gt_score_details": {
          "pool": 0,
          "transaction": 32.2,
          "creation": 0,
          "info": 0,
          "holders": 0
        }
        "mint_authority": "no",   
        "freeze_authority": "no" 
```

<br />

## Onchain Simple Token Price endpoint - Market Cap to FDV Fallback

The [Onchain Simple Token Price](https://docs.coingecko.com/reference/onchain-simple-price) endpoint now supports fallback option for Market Cap to return FDV value, when the Market Cap value is not available. 

Notes:

- If the token's market cap is not verified by the CoinGecko team, the onchain endpoints will return **null** for its market cap value, even though it has a displayed value on GeckoTerminal, which might not be accurate as it often matches the Fully Diluted Valuation (FDV).
- Market Cap can be verified by and sourced from CoinGecko, and the number may be higher than FDV as it may include Market Cap of tokens issued on other blockchain network.

If you require the Market Cap key (`market_cap_usd`) to return FDV value (as seen on GeckoTerminal.com) when Market Cap data is unavailable, please specify this parameter `marketcap_fdv_fallback=true`.