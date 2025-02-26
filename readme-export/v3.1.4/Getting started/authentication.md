---
title: "🔓 Authentication"
slug: "authentication"
excerpt: "Good News! GeckoTerminal on-chain API endpoints are now part of CoinGecko Pro API  🔥🔥"
hidden: false
createdAt: "Wed Jan 03 2024 04:57:21 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Jan 03 2024 06:17:17 GMT+0000 (Coordinated Universal Time)"
---
To access the GeckoTerminal on-chain data (Beta) via CoinGecko Pro API, please follow the steps outlined below:

### 1. Obtaining a CoinGecko Pro-API Key

If you haven't obtained a CoinGecko Pro-API key yet, follow these steps:

- Login to your developer dashboard [here](https://www.coingecko.com/en/developers/dashboard) using your CoinGecko API subscription account email.
- Create a new API key.

***

### 2. Authentication Method

**Root URL for CoinGecko Pro API:** `https://pro-api.coingecko.com/api/v3/`

If this is your first time using the Pro-API key, you can supply API Key to the root URL using one of these ways:

1. **Header**: `x-cg-pro-api-key`
2. **Query String Parameter**: `x_cg_pro_api_key`

Example for [Supported Network List Endpoint](/reference/networks_list):

`https://pro-api.coingecko.com/api/v3/onchain/networks?x_cg_pro_api_key=YOUR_API_KEY`

***

### 3. Accessing On Chain (GeckoTerminal) Endpoints

You can now use the Pro-API key to call all GeckoTerminal endpoints listed on [GeckoTerminal DEX API](https://www.geckoterminal.com/dex-api). 

You can also use the [docs](/reference/simple_token_price-1) below to try out the API Endpoints.

> ❗️ **Important**
> 
> When using the CG Pro API to access GT endpoints, include the `/onchain/` endpoint path in the request

**For example:**

- How you called GT Public API in the past:  
  `https://api.geckoterminal.com/api/v2/simple/networks/eth/token_price/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2?partner_api_key={your_api_key}`
- How to call it with CG Pro API:  
  `https://pro-api.coingecko.com/api/v3/onchain/simple/networks/eth/token_price/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2?x_cg_pro_api_key={your_pro_api_key}`

***

### 4. Deprecation of GeckoTerminal Public API Key

> 📘 **Note**
> 
> - If you **received temporary API key **in the past, your temporary key for GeckoTerminal Public API will be deprecated soon
> - Please update your integration to use the CoinGecko Pro API as soon as possible, before 30 January 2024 to prevent disruption. 
> - By switching to CoinGecko Pro API, you'll enjoy better services with a higher rate limit and a dedicated enterprise-grade server

Thank you for being part of our private beta launch test! If you have any questions or need assistance, feel free to contact our support team.
