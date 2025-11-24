const chainContracts = {
    bsc: {
      issued: ["0x734d66f635523d7ddb7d2373c128333da313041b"],
    },
  };
  
  import { addChainExports } from "../helper/getSupply";
  const adapter = addChainExports(chainContracts);
  export default adapter;