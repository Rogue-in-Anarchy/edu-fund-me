import Button from "@/components/atom/button";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="bg-[#FFFFFF]">
      <section className="max-w-screen-xl sm:flex-row justify-between items-center px-4 mx-auto py-5 w-full lg:px-10">
        <div className=" h-[24vh]">
          <div className="text-sm text-center lg:text-xl">
            LearnFi is transforming education financing through decentralized
            technology. We provide students worldwide with seamless access to
            education loans and grants, ensuring transparency and fairness
            through blockchain and community governance. With our native token,
            LearnToken, we empower financial inclusion and eliminate traditional
            barriers, making education accessible to all. Join us in
            revolutionizing education funding.
          </div>
          <div className="text-center my-10">
            <Button
              title="Join Now"
              backgroundColor="#005A5A"
              textColor="#FFF"
              link="#"
            />
          </div>
        </div>
        <div className="my-32">
          <div className="lg:text-5xl text-2xl text-center font-bold text-[#005A5A]">
            ABOUT US
          </div>
          <div className="text-start bg-[#00D3D3] p-16 pb-32 rounded-xl">
            <div className="md:flex h-full items-center">
              <div className="text-white text-2xl md:w-4/5 lg:w-2/3 text-center md:text-start mx-auto">
                To create a decentralized application (dApp) leveraging
                Decentralized Finance (DeFi) and a Decentralized Autonomous
                Organization (DAO) to provide accessible and fair education
                loans and grants using a native token.
              </div>
              <div>
                <Image
                  src={"/mission.svg"}
                  alt="mission"
                  width={900}
                  height={900}
                />
              </div>
            </div>
            <div className="md:flex h-full items-center">
              <div>
                <Image
                  src={"/vision.svg"}
                  alt="mission"
                  width={900}
                  height={900}
                />
              </div>
              <div className="text-white text-2xl md:w-4/5 lg:w-2/3 text-center md:text-start mx-auto lg:mt-32">
                Transforming education financing through a decentralized,
                transparent, and community-driven platform that empowers
                students worldwide to achieve their academic dreams without
                financial barriers.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
