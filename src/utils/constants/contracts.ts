import { ethers } from "ethers";
import governanceAbi from "./ABIs/Governance.json"
import eduFundMeAbi from "./ABIs/EduFundMe.json"

export const getGovernanceContract= (providerOrSigner: any) =>
    new ethers.Contract(
        process.env.NEXT_PUBLIC_EduFundMeGovernance  || "",
        governanceAbi,
        providerOrSigner
    )

export const getEduFundMeContract= (providerOrSigner: any) =>
        new ethers.Contract(
        process.env.NEXT_PUBLIC_EduFundMe || "",
        eduFundMeAbi,
        providerOrSigner
    )

