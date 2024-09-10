import React, { useState } from "react";
import TopProposalCard from "@/components/atom/cards/top-proposal-card";
import UseGetMyProposals from "@/hooks/UseGetMyProposals";
import { Status } from "@/utils/constants/enums";

interface MyProposalProps {
  statusFilter: Status;
}

const MyProposal: React.FC<MyProposalProps> = ({ statusFilter }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const proposals = UseGetMyProposals();

  // Filter proposals by status
  const filteredProposals =
    statusFilter === 5
      ? proposals
      : proposals.filter((proposal) => Number(proposal[8]) == statusFilter);

  // Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProposals = filteredProposals.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalPages = Math.ceil(filteredProposals.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="space-y-32">
      {proposals.length !== 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentProposals.map((proposal, index) => (
            <TopProposalCard
              key={index}
              id={Number(proposal[7])}
              title={proposal[1]}
              subTitle={proposal[2]}
              status={proposal[8] as Status}
              dateSubmitted={new Date(
                parseInt(proposal[6]) * 1000
              ).toLocaleString()}
              requestedAmount={Number(proposal[0])}
              allocatedAmount={proposal.totalVote}
            />
          ))}
        </div>
      ) : (
        <div className="text-xl text-center">No Proposals Yet</div>
      )}
      <div className="flex justify-center mt-4 gap-x-3">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-1 px-3 py-1 border rounded ${
              currentPage === index + 1
                ? "bg-primary-2 text-white"
                : "border-primary-2 text-black"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MyProposal;
