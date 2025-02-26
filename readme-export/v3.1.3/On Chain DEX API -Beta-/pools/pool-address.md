---
title: "Specific Pool Data by Pool Address"
slug: "pool-address"
excerpt: "This endpoint allows you to **query the specific pool based on the provided network and pool address**"
hidden: false
createdAt: "Wed Jan 31 2024 03:32:40 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Jun 05 2024 08:16:29 GMT+0000 (Coordinated Universal Time)"
---
> 📘 **Notes**
> 
> - Address not found in GeckoTerminal will be ignored
> - If the token's market cap is not verified by the team, the API response will return null for its market cap value, even though it has a displayed value on GeckoTerminal, which might not be accurate as it often matches the Fully Diluted Valuation (FDV)
> - Attributes specified in the `include ` params will be included under the "included" key at the top level
> - Cache/Update frequency: every 60 seconds
