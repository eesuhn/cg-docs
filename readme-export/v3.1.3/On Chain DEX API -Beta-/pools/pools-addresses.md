---
title: "Multiple Pools Data by Pool Addresses"
slug: "pools-addresses"
excerpt: "This endpoint allows you to **query multiple pools based on the provided network and pool address**"
hidden: false
createdAt: "Wed Jan 31 2024 03:32:40 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Jun 05 2024 08:16:37 GMT+0000 (Coordinated Universal Time)"
---
> 📘 **Notes**
> 
> - Addresses not found in GeckoTerminal will be ignored
> - If the token's market cap is not verified by the team, the API response will return null for its market cap value, even though it has a displayed value on GeckoTerminal, which might not be accurate as it often matches the Fully Diluted Valuation (FDV)
> - Attributes specified in the `include ` params will be included under the "included" key at the top level
> - Cache/Update frequency: every 60 seconds
