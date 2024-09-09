import { PinataSDK } from "pinata";

const pinata = new PinataSDK({
  pinataJwt: process.env.NEXT_PUBLIC_IPFSH_JWT,
  pinataGateway: process.env.NEXT_PUBLIC_gateway,
});
export default pinata;