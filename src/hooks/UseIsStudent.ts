import { getLearningContract } from "@/utils/constants/contracts"
import { readOnlyProvider } from "@/utils/constants/provider"
import { useWeb3ModalAccount } from "@web3modal/ethers/react"
import { useEffect, useState } from "react"

const useIsStudent = () =>{
    const [isStudent, setIsStudent] = useState(true)
    const {address} = useWeb3ModalAccount();
    useEffect(() => {
        const check = async() => {
            try{
                const LearningContract = getLearningContract(readOnlyProvider);
                const registered = await LearningContract.isStudent(address);
                setIsStudent(registered);
                console.log(registered);
            }
            catch(err) {
                console.log(err);
        }
    };
    check()
}, [address]);
return isStudent;
};

export default useIsStudent;