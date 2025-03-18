---
title: "Pool Tokens Info by Pool Address"
slug: "pool-token-info-contract-address"
excerpt: "This endpoint allows you to **query pool info including base and quote token info based on provided pool contract address on a network**"
hidden: false
createdAt: "Thu Feb 01 2024 10:17:56 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Fri Mar 14 2025 10:46:18 GMT+0000 (Coordinated Universal Time)"
---
> 👍 **Tips**
> 
> - If you would like to query pool data such as price, transactions, volume and etc. You can go to this endpoint [`/networks/{network}/pools/{address}`](/reference/pool_address) instead.
> - Cache/Update frequency: every 60 seconds.
> - Learn more about GT score [here](https://support.coingecko.com/hc/en-us/articles/38381394237593-What-is-GT-Score-How-is-GT-Score-calculated).
> - Metadata (image, websites, description, socials) may be sourced on-chain and is not vetted by the CoinGecko team. If you wish to get metadata reviewed by CoinGecko team, you may use the following endpoints:
>   - [Coin Data by ID](https://docs.coingecko.com/reference/coins-id)
>   - [Coin Data by Token Address](https://docs.coingecko.com/reference/coins-contract-address)

> 📘 **Notes**
> 
> - `holders` data is currently in Beta, with ongoing improvements to data quality, coverage, and update frequency.
>   - Supported chains include: Solana, EVM (Ethereum, Polygon, BNB, Arbitrum, Optimism, Base), Sui, TON, and Ronin.
>   - `distribution_percentage` coverage:
>     - Solana: `top_10`, `11_20`, `21_40`, `rest`
>     - Other chains: `top_10`, `11_30`, `31_50`, `rest`
