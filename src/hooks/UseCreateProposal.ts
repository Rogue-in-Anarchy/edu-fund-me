import { SUPPORTED_CHAIN } from "@/connection";
import { getEduFundMeContract } from "@/utils/constants/contracts";
import { getProvider } from "@/utils/constants/provider";
import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers/react";
import { useCallback } from "react";

const UseCreateProposal = () => {
    const {walletProvider} = useWeb3ModalProvider();
    const {isConnected, address} = useWeb3ModalAccount();

    return useCallback(async (title: string, description: string, amount: number, institution: string) => {

        const readWriteProvider = getProvider(walletProvider);
        const signer = await readWriteProvider.getSigner();

        const contract = getEduFundMeContract(signer);

        try{

            if(!SUPPORTED_CHAIN || !isConnected) console.log("Not supported");
            const students = await contract.getStudents();
            const student = students.find((student: any) => student.student === address);
            console.log(student,)
            const IPFSHash = student.transcript;
            const transaction = await contract.createProposal(title, description, amount, IPFSHash, institution);
            console.log("transacted")

            const receipt = await transaction.wait();

            if(receipt.status){
                console.log("Proposal Created")
            }
            else{console.log("An error occurred")}

        } catch(err) {
            console.log(err)
        }

    },
[walletProvider, isConnected, address]);
}

export default UseCreateProposal;