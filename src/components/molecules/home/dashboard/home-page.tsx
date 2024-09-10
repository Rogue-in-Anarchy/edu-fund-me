import React from "react";
import sideimage from "@/assets/banner.svg";
import Image from "next/image";
import { Nunito } from "next/font/google";
import { Lora } from "next/font/google";
import Link from "next/link";
import proposal from "@/data/proposal";
import ProposalCard from "@/components/atom/cards/proposal-card";
import { LoanHistoryTable } from "@/components/atom/tables/loanhistory";
import loan from "@/data/loan.json";

import TopProposalCard from "@/components/atom/cards/top-proposal-card";
import proposals from "@/data/myproposal";

const nunito = Nunito({ subsets: ["latin"], weight: ["400"] });
const lora = Nunito({ subsets: ["latin"], weight: ["600"] });

const HomePage = () => {
  return (
    <div className="w-full h-full space-y-11">
      <h1 className="text-bleck font-bold text-xl" style={lora.style}>
        Dashboard
      </h1>

      <div className="flex jsutify-between items-start w-full">
        <div className="w-3/5 space-y-14">
          <div className="space-y-4">
            <div className="flex items-center py-4 px-5 h-52 bg-gradient-to-r from-[#00D3D3] via-[#00A0A0]/70 to-[#006D6D]/30 rounded-md">
              <div className="space-y-4">
                <h2
                  className="text-primary-3 font-bold text-xl"
                  style={lora.style}
                >
                  Welcome, Hroon
                </h2>
                <p
                  className="text-sm font-medium text-white"
                  style={nunito.style}
                >
                  Welcome to your LearnFi Student Dashboard, Haroon! Here, you
                  can manage your proposals, loans, and resources to support
                  your educational journey
                </p>
                <div className=""></div>
              </div>

              {/* Side Image */}
              <Image src={sideimage} alt="sideimage" />
            </div>

            <div
              className="flex justify-between w-3/5 items-center"
              style={nunito.style}
            >
              <Link href="/dashboard/create-proposal">
                <button className="bg-primary-3 text-sm rounded-lg px-4 py-2 text-white">
                  Create proposal
                </button>
              </Link>
              <Link href="/dashboard/my-proposal">
                <button className="bg-primary-2 text-sm rounded-lg px-4 py-2 text-primary-1">
                  View loan schedule
                </button>
              </Link>
            </div>
          </div>

          <div className="grid gap-x-4 gap-y-6 grid-cols-2 md:grid-cols-3 justify-between">
            {proposal.map((item) => (
              <ProposalCard
                key={item.id}
                icon={item.image}
                value={item.value}
                title={item.title}
                yields={item.yields}
                iconYield={item.iconYield}
              />
            ))}
          </div>

          <div className="">
            <LoanHistoryTable loans={loan} />
          </div>
        </div>
        <div className="w-2/5 bg-primary-2">
          <div className="">
            <h1 className="text-bleck font-bold text-xl" style={lora.style}>
              Community forum
            </h1>

            <div className=""></div>
          </div>

          <div className="">
            <h1 className="text-bleck font-bold text-xl" style={lora.style}>
              Notifications
            </h1>

            <div className=""></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-6">Top Proposals</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {proposals.slice(0, 3).map((proposal, index) => (
            <TopProposalCard
              key={index}
              id={index + 1}
              title={proposal.title}
              status={Number(proposal.status)}
              dateSubmitted={proposal.dateSubmitted}
              requestedAmount={Number(proposal.requestedAmount)}
              allocatedAmount={Number(proposal.allocatedAmount)}
            />
          ))}
        </div>
        <div className="text-right mt-4">
          <Link href="/dashboard/my-proposal" className="text-black font-bold">
            All Proposals
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
