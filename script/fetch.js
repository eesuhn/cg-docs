import { promises as fs } from 'fs';
import { dump } from 'js-yaml';

const apiMap = {
  '6584ea6ce07e130056b1af99': 'coingecko-pro.yml',
  '65bf9cabb0951b0072e2cade': 'coingecko-public.yml',
  '6585013ec2907b0031346aa4': 'geckoterminal.yml'
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

const BASE_URL = 'https://docs.coingecko.com/openapi/';

(async () => {
  try {
    for (const [apiId, outputFile] of Object.entries(apiMap)) {
      await fetchAndConvert(
        `${BASE_URL}${apiId}`,
        outputFile
      );
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
})();
