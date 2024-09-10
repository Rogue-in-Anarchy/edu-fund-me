"use client";

import React, { useState } from "react";
import MyProposal from "@/components/molecules/home/dashboard/my-proposal-page";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Status } from "@/utils/constants/enums";

const Page = () => {
  const [statusFilter, setStatusFilter] = useState(5); // State for filtering proposals by status

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatusFilter(Number(e.target.value));
  };

  return (
    <div className="space-y-10 w-full md:w-[95%] mx-auto pt-7">
      <div className="flex items-start justify-between">
        <h1 className="text-bleck flex gap-x-8 items-center font-bold text-xl">
          Dashboard{" "}
          <span className="text-black">
            <MdKeyboardDoubleArrowRight size={24} />
          </span>{" "}
          <span className="text-black">My Proposal</span>
        </h1>
        <div className="space-y-5">
          <p className="text-black text-lg font-bold">Proposal status</p>
          <select
            name="status"
            id="status"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-3 focus:border-primary-3 sm:text-sm"
            value={statusFilter}
            onChange={handleStatusChange}
          >
            <option value={Status.All}>All</option>
            <option value={Status.Pending}>Pending</option>
            <option value={Status.Approved}>Approved</option>
            <option value={Status.Denied}>Rejected</option>
            <option value={Status.Closed}>closed</option>
            <option value={Status.Executed}>Completed</option>
          </select>
        </div>
      </div>
      <MyProposal statusFilter={statusFilter} />
    </div>
  );
};

export default Page;
