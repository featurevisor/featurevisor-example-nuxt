import FeaturevisorSDK, { FeaturevisorInstance } from "@featurevisor/sdk";
const { createInstance } = FeaturevisorSDK;

const DATAFILE_URL =
  "https://featurevisor-example-cloudflare.pages.dev/production/datafile-tag-all.json";

let instance: FeaturevisorInstance;

export async function getInstance() {
  if (instance) {
    return instance;
  }

  const f = createInstance({
    datafileUrl: DATAFILE_URL,
  });

  instance = await f.onReady();

  return instance;
}
