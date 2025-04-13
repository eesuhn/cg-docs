import { promises as fs } from 'fs';
import { dump } from 'js-yaml';

const BASE_URL =
  'https://raw.githubusercontent.com/cg-eesuhn/docs-coingecko/refs/heads';

const apiMap = {
  'v3.1.1/reference/coingecko-pro-api-v3': 'coingecko-pro.yml',
  'v3.0.1/reference/coingecko-public-api-v3': 'coingecko-public.yml',
  'v3.1.1/reference/on-chain-dex-api-beta': 'geckoterminal.yml'
};

async function fetchAndConvert(url, outputFile) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}: ${res.statusText}`);
  }
  const json = await res.json();
  const yml = dump(json);
  await fs.writeFile(outputFile, yml, 'utf8');
  console.log(`Updated ${outputFile}`);
}

(async () => {
  try {
    for (const [apiId, outputFile] of Object.entries(apiMap)) {
      await fetchAndConvert(
        `${BASE_URL}/${apiId}.json`,
        outputFile
      );
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
})();
