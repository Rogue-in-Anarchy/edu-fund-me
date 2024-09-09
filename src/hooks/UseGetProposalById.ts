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

const UseGetProposalById = (id: number) => {
    const [proposal, setProposal] = useState<any>();
    const { chainId, isConnected } = useWeb3ModalAccount();

    useEffect(() => {
        const viewGrantRequest = async () => {
        try{
            if(isConnected){
                console.log( 'transacting');

                const contract = getGovernanceContract(readOnlyProvider);
                const transaction = await contract.viewIndividualClaim(id);
    
                setProposal(transaction);
                console.log( 'list' ,proposal);
            }

        }
        catch(err){
            console.log(err)
        }
    };
    viewGrantRequest();
    }, [chainId, isConnected, id, proposal]);
    return proposal;
}

export default UseGetProposalById;