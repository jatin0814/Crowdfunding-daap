import web3 from "./web3";

import campaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(campaignFactory.interface),
  "0x3D241488E6D961014e461E79e2fEbF2f5387f726"
);

export default instance;
