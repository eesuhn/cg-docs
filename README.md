# `cg-docs` — CoinGecko OpenAPI Docs

This repository houses three OpenAPI specifications:

1. [CoinGecko Pro API](https://docs.coingecko.com/openapi/6584ea6ce07e130056b1af99) (`coingecko-pro.yml`)
2. [CoinGecko Public/Demo API](https://docs.coingecko.com/openapi/65bf9cabb0951b0072e2cade) (`coingecko-public.yml`)
3. [GeckoTerminal Onchain API](https://docs.coingecko.com/openapi/6585013ec2907b0031346aa4) (`geckoterminal.yml`)

## Usage

- **Fetch latest specs from ReadMe**

    ```bash
    make fetch
    ```

- **Linting with [`Redocly`](https://redocly.com/docs/cli/commands/lint)**

    ```bash
    make lint
    ```

    ⚠️ Configure linting rules in [`.config/redocly.yaml`](./.config/redocly.yaml)

## Structure

```sh
.
├── .config
│   └── redocly.yaml      # 👈 Redocly configuration
├── script                # Helper scripts
├── Makefile
├── README.md
├── coingecko-pro.yml     # CoinGecko Pro API
├── coingecko-public.yml  # CoinGecko Public/Demo API
├── geckoterminal.yml     # GeckoTerminal Onchain API
└── readme-export         # Export sync'd with ReadMe
```

## Read More

- Edit OpenAPI specs locally with [swagger-editor@next](https://github.com/swagger-api/swagger-editor/tree/next) or use the [online editor](https://editor-next.swagger.io/)
- [Redocly | Rulesets and Configuration](https://redocly.com/docs/cli/rules)
