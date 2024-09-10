"use client";
import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import CreateProposalPage from "@/components/molecules/home/dashboard/create-proposal-page";

const Page = () => {
  return (
    <div className="space-y-10 w-full md:w-[95%] mx-auto pt-7">
      <h1 className="text-bleck flex gap-x-8 items-center font-bold text-xl">
        Dashboard{" "}
        <span className="text-black">
          <MdKeyboardDoubleArrowRight size={24} />
        </span>{" "}
        <span className="text-black">Create proposal</span>
      </h1>
      <CreateProposalPage />
    </div>
  );
};

export default Page;
