import { FaHandHoldingHand, FaPeopleLine } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import { AiFillSchedule } from "react-icons/ai";

export default function UserData() {
  return (
    <div className="mb-16 flex flex-col items-center justify-center gap-16 lg:flex-row">
      <div className=" rounded-full p-6 font-medium bg-[#F2F2F2] w-[360px] h-[360px] flex flex-col items-center justify-center gap-4">
        <p>
          <FaHandHoldingHand className="text-[4rem]" color="#008080" />
        </p>
        <p className="text-3xl">237,240</p>
        <p className="text-xl">Loans and Grants Disbursed</p>
      </div>
      <div className="flex flex-col gap-16">
        <div className=" rounded-md p-6 font-medium bg-[#F2F2F2] w-[300px] h-[300px] flex flex-col items-center justify-center gap-4">
          <p>
            <FaPeopleLine className="text-[4rem]" color="#008080" />
          </p>
          <p className="text-3xl">37,240</p>
          <p className="text-xl">Registered Users</p>
        </div>
        <div className=" rounded-md p-6 font-medium bg-[#F2F2F2] w-[300px] h-[300px] flex flex-col items-center justify-center gap-4">
          <p>
            <GiReceiveMoney className="text-[4rem]" color="#008080" />
          </p>
          <p className="text-3xl">78%</p>
          <p className="text-xl">Repayment Rate</p>
        </div>
      </div>
      <div className=" rounded-full p-6 font-medium bg-[#F2F2F2] w-[360px] h-[360px] flex flex-col items-center justify-center gap-4">
        <p>
          <AiFillSchedule className="text-[4rem]" color="#008080" />
        </p>
        <p className="text-3xl">26,915</p>
        <p className="text-xl">Active DOA Members</p>
      </div>
    </div>
  );
}
