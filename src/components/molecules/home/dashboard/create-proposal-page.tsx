import React from "react";
import ProposalForm from "../../forms/create-proposal";
import UseIsStudent from "@/hooks/UseIsStudent";
import StudentForm from "../../forms/register-student-form";
import useIsStudent from "@/hooks/UseIsStudent";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";

const CreateProposalPage = () => {
  const registered = useIsStudent();
  const { isConnected } = useWeb3ModalAccount();
  return (
    <div className="">
      {registered && isConnected ? <ProposalForm /> : <StudentForm />}
    </div>
  );
};

export default CreateProposalPage;
