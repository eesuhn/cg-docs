---
title: "Removal of Unsupported Categories"
slug: "update-removal-of-unsupported-categories"
type: "removed"
createdAt: "Thu Jan 23 2025 11:30:26 GMT+0000 (Coordinated Universal Time)"
hidden: false
---
## Upcoming Removal of Unsupported Categories from CoinGecko and CoinGecko API

### Summary

We are announcing the removal of certain categories from CoinGecko and CoinGecko API. These categories will no longer be supported across all API endpoints starting **February 12, 2025**.

| No | Category Name          | Category ID         |
| :- | :--------------------- | :------------------ |
| 1  | US Election 2020       | us-election-2020    |
| 2  | Governance             | governance          |
| 3  | Cryptocurrency         | cryptocurrency      |
| 4  | Technology and Science | technology-science  |
| 5  | Presale Meme           | presale-meme-coins  |
| 6  | Business Platform      | business-platform   |
| 7  | Number                 | number              |
| 8  | Structured Product     | structured-products |
| 9  | Investment             | investment          |
| 10 | Niftex Shards          | niftex-shards       |
| 11 | Ethereum POW IOU       | ethereum-pow-iou    |
| 12 | Mirrored Assets        | mirrored-assets     |
| 13 | Remittance             | remittance          |
| 14 | Protocol               | protocol            |
| 15 | Unicly Ecosystem       | utokens             |
| 16 | Finance and Banking    | finance-banking     |
| 17 | Eth 2.0 Staking        | eth-2-0-staking     |

### Reason for Removal

Many of these categories no longer have associated coins. Some categories are outdated and no longer relevant in the crypto space. The changes align with updated category topology standards to maintain data accuracy and relevance.

### Impact

API responses for the `/coins/markets` [endpoint](https://docs.coingecko.com/reference/coins-markets) will no longer support data of the categories above. Any requests specifying these categories will return an error.

### Action Required

Ensure applications using the `/coins/markets` [endpoint](https://docs.coingecko.com/reference/coins-markets) are not querying these removed categories. Please update any code or documentation referencing these categories to prevent errors.