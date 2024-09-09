"use client";
import Image from "next/image";
import Link from "next/link";
// import { FaHandshake } from "react-icons/fa";

export default function KeyFeatures() {
  return (
    <div className="bg-[#F2F2F2] min-h-screen py-10">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center">
        <section className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:w-[60%] md:w-[100%]">
          <div className="">
            <h1 className="font-semibold opacity-60 text-2xl sm:text-7xl md:w-5/6 lg:w-3/5">
              Key Features of Learn Fi
            </h1>
          </div>
          <div className="mb-4">
            <div className="bg-[#FFF] p-3 rounded-md flex flex-col justify-between h-[28vh]">
              <div className="flex justify-between">
                <h2 className="sm:text-2xl text-lg text-[#00D3D3] font-medium w-1/2">
                  Smart Contracts
                </h2>
                <Image src={"/handshake.svg"} alt="" width={30} height={30} />
              </div>
              <p>
                Automate and secure loan agreements and repayments using smart
                contracts.
              </p>
              <Link
                href=""
                className="text-[#005A5A] hover:text-[#00D3D3] duration-150"
              >
                View more
              </Link>
            </div>
          </div>
        </section>
        <div className="md:flex justify-between w-full flex-row mt-4 gap-4">
          <div className="mb-4">
            <div className="bg-[#FFF] p-3 rounded-md flex flex-col justify-between gap-4  h-[28vh]">
              <div className="flex justify-between">
                <h2 className="sm:text-2xl text-lg text-[#00D3D3] font-medium w-1/2">
                  Dashboards
                </h2>
                <Image src={"/stat.svg"} alt="" width={30} height={30} />
              </div>
              <p>User friendly Dashboard for both Students and lenders.</p>
              <Link
                href=""
                className="text-[#005A5A] hover:text-[#00D3D3] duration-150"
              >
                View more
              </Link>
            </div>
          </div>

          <div className="mb-4">
            <div className="bg-[#FFF] p-3 rounded-md flex flex-col justify-between gap-4  h-[28vh]">
              <div className="flex justify-between">
                <h2 className="sm:text-2xl text-lg text-[#00D3D3] font-medium w-1/2">
                  Landing and Borrowing
                </h2>
                <Image src={"/exchange.svg"} alt="" width={30} height={30} />
              </div>
              <p>
                Facilitate lending and borrowing of native tokens for education
                purposes.
              </p>
              <Link
                href=""
                className="text-[#005A5A] hover:text-[#00D3D3] duration-150"
              >
                View more
              </Link>
            </div>
          </div>

          <div className="mb-4">
            <div className="bg-[#FFF] p-3 rounded-md flex flex-col justify-between gap-4  h-[28vh]">
              <div className="flex justify-between">
                <h2 className="sm:text-2xl text-lg text-[#00D3D3] font-medium w-1/2">
                  KYC/AML Compliance
                </h2>
                <Image src={"/lightbulb.svg"} alt="" width={30} height={30} />
              </div>
              <p>
                Implement protocols to ensure regulatory compliance and
                secure platform usage.
              </p>
              <Link
                href=""
                className="text-[#005A5A] hover:text-[#00D3D3] duration-150"
              >
                View more
              </Link>
            </div>
          </div>
        </div>

        <div className="md:flex justify-between w-full flex-row mt-4">
          <div className="mb-4">
            <div className="bg-[#FFF] p-3 rounded-md flex flex-col justify-between gap-4  h-[28vh]">
              <div className="flex justify-between">
                <h2 className="sm:text-2xl text-lg text-[#00D3D3] font-medium w-1/2">
                  Proposal System
                </h2>
                <Image src={"/proposal.svg"} alt="" width={30} height={30} />
              </div>
              <p>
                Students and stakeholders submit funding proposals for community
                voting.
              </p>
              <Link
                href=""
                className="text-[#005A5A] hover:text-[#00D3D3] duration-150"
              >
                View more
              </Link>
            </div>
          </div>

          <div className="mb-4">
            <div className="bg-[#FFF] p-3 rounded-md flex flex-col justify-between gap-4  h-[28vh]">
              <div className="flex justify-between">
                <h2 className="sm:text-2xl text-lg text-[#00D3D3] font-medium w-1/2">
                  DOA Governance
                </h2>
                <Image src={"/keychain.svg"} alt="" width={30} height={30} />
              </div>
              <p>
                Members vote on key decisions, including interest rates and loan
                terms.
              </p>
              <Link
                href=""
                className="text-[#005A5A] hover:text-[#00D3D3] duration-150"
              >
                View more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
