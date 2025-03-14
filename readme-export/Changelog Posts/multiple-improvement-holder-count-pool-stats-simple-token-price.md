---
title: "Multiple Improvement: Holders, Locked Liquidity, Pool Stats, etc"
slug: "multiple-improvement-holder-count-pool-stats-simple-token-price"
type: "improved"
createdAt: "Wed Mar 12 2025 07:08:17 GMT+0000 (Coordinated Universal Time)"
hidden: true
---
## Onchain Token Info endpoints - Holders

Now support the following holder data **(Beta)**:

- holders count
- top holders distribution percentage

**Improved endpoints:**

- [Token Data by Token Address](https://docs.coingecko.com/reference/token-data-contract-address)
- [Tokens Data by Token Addresse](https://docs.coingecko.com/reference/tokens-data-contract-addresses)s

```json
    "holders": {
      "count": 1432761,
      "distribution_percentage": {
        "top_10": "1.3019",
        "11_20": "0.1024",
        "21_40": "0.095",
        "rest": "98.5007"
      },
      "last_updated": "2025-03-06T01:21:18Z"
```

<br />

## Onchain Token Info endpoints - Locked Liquidity

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

## Onchain Pool Data endpoints - More Data Support

Now support the following data: 

- `volume_usd`: m15, m30
- `transactions`: h6

**Improved endpoints:**

- [Specific Pool Data by Pool Address](https://docs.coingecko.com/reference/pool-address)
- [Multiple Pools Data by Pool Addresse](https://docs.coingecko.com/reference/pools-addresses)s

```json
        "price_change_percentage": {
          "m5": "0.06",
          "m15": "0.06",
          "m30": "0.89",
          "h1": "-4.31",
          "h6": "-1.02",
          "h24": "3.32"
        },
        "transactions": {
          "m5": {
            "buys": 0,
            "sells": 2,
            "buyers": 0,
            "sellers": 2
          },
          "m15": {
            "buys": 0,
            "sells": 2,
            "buyers": 0,
            "sellers": 2
          },
          "m30": {
            "buys": 0,
            "sells": 3,
            "buyers": 0,
            "sellers": 3
          },
          "h1": {
            "buys": 1,
            "sells": 23,
            "buyers": 1,
            "sellers": 7
          },
          "h6": {
            "buys": 60,
            "sells": 38,
            "buyers": 23,
            "sellers": 18
          },
          "h24": {
            "buys": 206,
            "sells": 138,
            "buyers": 96,
            "sellers": 77
          }
        },
        "volume_usd": {
          "m5": "130.5119858698",
          "m15": "130.5119858698",
          "m30": "177.109036156",
          "h1": "4942.2463835639",
          "h6": "28362.2127269542",
          "h24": "112426.585893123"
        }
```

<br />

## Onchain Simple Token Price endpoint - More Data Support

Now supports the following optional parameter to return more data.

- `include_24hr_change`
- `include_total_reverse_in_usd`

**Improved Endpoint: **

- [Token Price by Token Addresses](https://docs.coingecko.com/reference/onchain-simple-price)

```json
{
  "data": {
    "id": "e58258f7-8368-4968-bbe1-b5343540cd71",
    "type": "simple_token_price",
    "attributes": {
      "token_prices": {
        "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48": "1.00276143983565",
        "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2": "3175.22870146126"
      },
      "market_cap_usd": {
        "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48": "25000000000",
        "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2": "500000000000"
      },
      "h24_volume_usd": {
        "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48": "50000000",
        "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2": "10000000000"
      },
      "h24_price_change_percentage": {
        "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48": "-0.15",
        "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2": "1.15"
      },
      "total_reserve_in_usd": {
        "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48": "417994486.4342195821530162288",
        "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2": "417994486.4342195821530162288" 
    }
  }
}
```