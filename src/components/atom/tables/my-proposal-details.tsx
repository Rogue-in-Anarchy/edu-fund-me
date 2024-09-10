import React from "react";

const proposalData = [
  {
    title: "Blockchain for Education",
    status: "Approved",
    submittedOn: "July 15, 2024",
    requestedAmount: "$5,000",
    allocatedAmount: "$3,000",
    votingResults: "75% Approved, 25% Denied",
  },
];

const ProposalRow = ({ proposal }: { proposal: any }) => {
  const statusClass =
    proposal.status === "Approved"
      ? "text-green-600"
      : proposal.status === "Pending"
      ? "text-yellow-600"
      : "text-red-600";

  return (
    <tr className="text-center text-sm">
      <td className="py-2 px-4 border-b">{proposal.title}</td>
      <td className={`py-2 px-4 border-b ${statusClass}`}>{proposal.status}</td>
      <td className="py-2 px-4 border-b">{proposal.submittedOn}</td>
      <td className="py-2 px-4 border-b">{proposal.requestedAmount}</td>
      <td className="py-2 px-4 border-b">{proposal.allocatedAmount}</td>
      <td className="py-2 px-4 border-b">{proposal.votingResults}</td>
      {/* <td className="py-2 px-4 border-b">
                <button className="bg-blue-500 text-white px-4 py-1 rounded">View</button>
            </td> */}
    </tr>
  );
};

const Pagination = () => {
  return (
    <div className="flex justify-center items-center mt-8">
      <button className="mx-2 px-3 py-1 bg-primary-2 text-gray-700 rounded">
        1
      </button>
      <button className="mx-2 px-3 py-1 border border-primary-2 text-gray-700 rounded">
        2
      </button>
      <button className="mx-2 px-3 py-1 border border-primary-2 text-gray-700 rounded">
        3
      </button>
      <span className="mx-2 px-3 py-1 text-primary-2">Next</span>
    </div>
  );
};

const MyProPosalDetails = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full bg-white border border-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Submitted On</th>
            <th className="py-2 px-4 border-b">Requested Amount</th>
            <th className="py-2 px-4 border-b">Allocated Amount</th>
            <th className="py-2 px-4 border-b">Voting Results</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {proposalData.map((proposal, index) => (
            <ProposalRow key={index} proposal={proposal} />
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default MyProPosalDetails;
