---
title: "Token Info by Token Address"
slug: "token-info-contract-address"
excerpt: "This endpoint allows you to **query token metadata (name, symbol,  CoinGecko ID, image, socials, websites, description, etc.) based  on a provided token contract address on a network**"
hidden: false
createdAt: "Wed Jan 31 2024 03:32:40 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue Mar 18 2025 14:10:56 GMT+0000 (Coordinated Universal Time)"
---
> 👍 **Tips**
> 
> - If you would like to query token data such as decimals, total supply, price and etc. You can go to this endpoint [`/networks/{network}/tokens/{address}`](/reference/token-data-contract-address) instead.
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
