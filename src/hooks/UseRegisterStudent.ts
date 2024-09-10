import { getEduFundMeContract } from "@/utils/constants/contracts";
import { getProvider, isSupportedChain } from "@/utils/constants/provider";
import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers/react"
import { useCallback } from "react";

const UseRegisterStudent = () => {
    const {walletProvider} = useWeb3ModalProvider();
    const {address, chainId, isConnected} = useWeb3ModalAccount();

    return useCallback(async (IPFSHash: string) => {
        const readWriteProvider = getProvider(walletProvider);
        const signer = await readWriteProvider.getSigner();

        console.log(signer)

        const contract = getEduFundMeContract(signer)

        try {
            if(!isSupportedChain(chainId) || !isConnected) return console.log("Not supported");
            console.log(address, IPFSHash)
            const transaction = await contract.registerStudent(address, IPFSHash);
            console.log(transaction);
            const receipt = await transaction.wait();

            if (receipt.status){
                console.log('registered');
            }
            console.log("error Registering")
    } catch (err) {
        console.log('error writing ' + address +' to contract ' + contract +' : ', err);
    }
}, [address, chainId, walletProvider, isConnected])
}

export default UseRegisterStudent;