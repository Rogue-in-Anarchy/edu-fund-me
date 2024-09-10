import Image from "next/image";
import GetStartedButton from "./atom/get-started";
import React from "react";

export default function HeroSection() {
  return (
    <div className="bg-[#00D3D3]">
      <section className="max-w-screen-xl flex flex-col-reverse sm:flex-row justify-between items-center min-h-[60vh] px-4 mx-auto py-5 w-full lg:px-10">
        <div className="flex flex-col items-center sm:items-start gap-4 sm:gap-8 text-center sm:text-start sm:w-1/2">
          <h1 className="font-bold text-2xl  sm:text-7xl">
            Transforming Education Financing
          </h1>
          <p className="text-md text-[#FFF]">
            Empowering students worldwide to achieve their academic dreams
            without financial barriers. Join our decentralized, transparent, and
            community-driven platform to access fair education loans and grants.
          </p>
          <div className="flex gap-4">
            <GetStartedButton
              title="Get Started"
              backgroundColor="#005A5A"
              textColor="#FFF"
            />
            <GetStartedButton
              title="Get Started"
              backgroundColor="#FFF"
              textColor="#000"
            />
          </div>
        </div>
        <div className="sm:w-1/2 sm:h-full h-[50vh]">
          <Image
            className={`object-cover  h-full w-full`}
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1722359189209/63f6d465-a4ff-4099-a0d8-49011d4a0130.png"
            alt="logo"
            width={500}
            height={500}
          />
        </div>
      </section>
    </div>
  );
}
