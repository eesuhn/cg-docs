---
title: "Included new fields - NFT data"
slug: "included-new-fields-nft-data"
type: "improved"
createdAt: "Sun Aug 18 2024 03:54:47 GMT+0000 (Coordinated Universal Time)"
hidden: false
---
We've added  'user_favorites_count', and 'ath' (all-time-high) related data to the following NFT endpoints:

- [/nfts/{id}](/reference/nfts-id)
- [/nfts/{asset_platform_id}/contract/{contract_address}](/reference/nfts-contract-address)

**Example of responses:**

```json
{
  "user_favorites_count": 3660,
  "ath": {
    "native_currency": 22.9,
    "usd": 67535
  },
  "ath_change_percentage": {
    "native_currency": -59.825327510917,
    "usd": -64.3396788440525
  },
  "ath_date": {
    "native_currency": "2024-02-17T09:25:05.056Z",
    "usd": "2024-02-29T11:45:08.150Z"
}
```