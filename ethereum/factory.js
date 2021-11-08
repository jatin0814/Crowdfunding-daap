import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x90DfCb6Ee61367eBdA302Cb44C55a9A09724B449"
);

export default instance;
