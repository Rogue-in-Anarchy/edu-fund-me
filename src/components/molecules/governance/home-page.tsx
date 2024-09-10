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
const lora = Lora({ subsets: ["latin"], weight: ["600"] });

const HomePage = () => {
  return (
    <div className="w-[95%] h-full space-y-11">
      <h1 className="text-bleck font-bold text-xl mt-6" style={lora.style}>
        Governance Dashboard
      </h1>

      <div className="flex jsutify-between items-start w-full">
        <div className="w-full space-y-14">
          <div className="space-y-4">
            <div className="flex items-center justify-between py-4 px-5 h-52 bg-gradient-to-r from-[#00D3D3] via-[#00A0A0]/70 to-[#006D6D]/30 rounded-md">
              <div className="space-y-4 w-1/2">
                <h2
                  className="text-primary-3 font-bold text-xl"
                  style={lora.style}
                >
                  Welcome, Ade
                </h2>
                <p
                  className="text-sm font-medium text-white"
                  style={nunito.style}
                >
                  Manage your participation in the DAO" — Participate in
                  platform governance and make key decisions.
                </p>
                <div className=""></div>
              </div>

              {/* Side Image */}
              <Image src={sideimage} alt="sideimage" />
            </div>

            <div className="flex gap-x-16 items-center" style={nunito.style}>
              <Link href="/create-proposal">
                <button className="bg-primary-3 text-sm rounded-lg px-4 py-2 text-white">
                  Claim Token
                </button>
              </Link>
              <Link href="/create-proposal">
                <button className="bg-primary-2 text-sm rounded-lg px-4 py-2 text-primary-1">
                  Join DOA
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
      </div>
    </div>
  );
};

export default HomePage;
