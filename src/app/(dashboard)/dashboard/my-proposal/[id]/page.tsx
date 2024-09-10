"use client";
import MyProPosalDetails from "@/components/atom/tables/my-proposal-details";
import UseGetProposalById from "@/hooks/UseGetProposalById";
import { useParams } from "next/navigation";
import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Page = () => {
  const { id } = useParams();
  const selectedProposal: any = UseGetProposalById(Number(id));
  return (
    <div className="">
      <div className="flex items-start justify-between">
        <h1 className="text-bleck flex gap-x-4 items-center font-bold text-xl">
          Dashboard{" "}
          <span className="text-black">
            <MdKeyboardDoubleArrowRight size={24} />
          </span>{" "}
          <span className="text-bleck">My Proposal</span>{" "}
          <span className="text-black">
            <MdKeyboardDoubleArrowRight size={24} />
          </span>{" "}
          <span className="text-black">proposal</span>
        </h1>
        <div className="space-y-5">
          <p className="text-black text-lg font-bold">Proposal status</p>
          <select
            name="status"
            id="status"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-3 focus:border-primary-3 sm:text-sm"
            // value={statusFilter}
            // onChange={handleStatusChange}
          >
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>

      <MyProPosalDetails />
    </div>
  );
};

export default Page;
