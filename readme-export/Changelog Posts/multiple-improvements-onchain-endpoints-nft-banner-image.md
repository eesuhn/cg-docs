---
title: "Multiple Improvements: Onchain Simple Price, Onchain Recently Updated Info, NFT Collection Data"
slug: "multiple-improvements-onchain-endpoints-nft-banner-image"
type: "improved"
createdAt: "Wed Oct 09 2024 09:59:34 GMT+0000 (Coordinated Universal Time)"
hidden: false
---
## Onchain: Simple Price - Increased Token Address Limit from 30 to 100

[Token Price by Token Addresses](/reference/onchain-simple-price) now allows to input up to 100 contract addresses, instead of 30. 

- You may now retrieve data of up to 100 token prices of a specific network, in one single request.
- Available exclusively to Pro API paid plan subscribers.

<br />

## Onchain: Recently Updated Info - Added Filter by Network

[Most Recently Updated Token List](/reference/tokens-info-recent-updated) now allows to filter by blockchain network, by flagging the `network` parameter. e.g. `network=eth`. 

- You can use the `network` parameter to retrieve the 100 most recently updated token info of a specific network. 
- View list of supported network via [Supported Networks List](https://docs.coingecko.com/reference/networks-list) endpoint.

<br />

## NFT Collection Data  - Included Banner Image

[NFTs Collection Data by ID](/reference/nfts-id) now provides banner image of a NFT collection. 

View banner image [example](https://coin-images.coingecko.com/nft_contracts/images/38/pudgy-penguins-banner.png?1708416126) on: <https://www.coingecko.com/en/nft/pudgy-penguins> 

```json
{
  "symbol": "PPG",
  "image": {
    "small": "https://coin-images.coingecko.com/nft_contracts/images/38/small/da64989d9762c8a61b3c65917edfdf97.png?1707287183"
  },
  "banner_image": "https://coin-images.coingecko.com/nft_contracts/images/38/pudgy-penguins-banner.png?1708416126",
..
```