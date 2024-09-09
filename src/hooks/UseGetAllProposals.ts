import { getGovernanceContract } from "@/utils/constants/contracts";
import { Status } from "@/utils/constants/enums";
import { readOnlyProvider } from "@/utils/constants/provider";
import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers/react"
import { useEffect, useState } from "react";

export interface Proposal {
    amountRequested : 1000
        title : string
        description : string
        institution : string
        imageIPFSHash : string
        student : string
        requestDate : number
        grantID : number
        status : Status
        membersVoted : [string]
        totalVote : 0
        claimable : boolean
  }

const UseGetAllProposals = () => {
    const [proposals, setProposals] = useState<Proposal[]>([]);
    const { chainId, isConnected } = useWeb3ModalAccount();

    useEffect(() => {
        const viewAllGrantRequest = async () => {
        try{
            if(isConnected){

                const contract = getGovernanceContract(readOnlyProvider);
                const transaction = await contract.viewAllGrantRequests();
                const result: any[] = [];
    
                transaction.forEach((listing: any) => {
                    result.push(listing);
                });
    
                setProposals(result);
                console.log( 'list' ,proposals);
            }

        }
        catch(err){
            console.log(err)
        }
    };
    viewAllGrantRequest();
    }, [chainId, proposals, isConnected]);
    return proposals;
}

export default UseGetAllProposals;