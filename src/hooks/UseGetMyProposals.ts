import { getGovernanceContract } from "@/utils/constants/contracts";
import { Status } from "@/utils/constants/enums";
import { readOnlyProvider } from "@/utils/constants/provider";
import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers/react"
import { useEffect, useState } from "react";

export interface Proposal {
        amountRequested : number
        title : string
        description : string
        institution : string
        imageIPFSHash : string
        student : string
        requestDate : number
        grantID : number
        status : Status
        membersVoted : [string]
        totalVote : number
        claimable : boolean
  }

const UseGetMyProposals = () => {
    const [proposals, setProposals] = useState<any[]>([]);
    const { address, isConnected } = useWeb3ModalAccount();

    useEffect(() => {
        const viewAllGrantRequest = async () => {
        try{
            if(isConnected){

                const contract = getGovernanceContract(readOnlyProvider);
                const transaction = await contract.viewAllGrantRequests();
                const result: any[] = [];
    
                transaction.forEach((listing: any) => {
                    if(listing.student == address ){
                        console.log( "Ahaaaaaa!" ,listing)
                        result.push({...listing});
                    }
                });
    
                setProposals(result);
            }

        }
        catch(err){
            console.log(err)
        }
    };
    viewAllGrantRequest();
    }, [address, isConnected]);
    return proposals;
}

export default UseGetMyProposals;