const chainContracts = {
    polygon: {
      issued: ["0x3a3e7650f8b9f667da98f236010fbf44ee4b2975"],
    },
    arbitrum: {
        issued: ["0x3509f19581afedeff07c53592bc0ca84e4855475"],
      },
  };
  
  import { addChainExports } from "../helper/getSupply";
  const adapter = addChainExports(chainContracts);
  export default adapter;