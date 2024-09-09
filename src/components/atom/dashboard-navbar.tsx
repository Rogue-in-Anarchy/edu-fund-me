"use client";

import Link from "next/link";
import GetStartedButton from "./get-started";
import Logo from "./logo";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import ConnectWallet from "./connectWallet";

export default function DashboardNavBar() {
  function toggleBtn() {
    const mobileMenu = document.getElementById("mobile-menu-4");
    if (mobileMenu) {
      mobileMenu.classList.toggle("hidden");
    }
  }
  return (
    <nav className="fixed z-20 bg-white border-gray-200 py-6 w-full shadow-lg">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto w-full">
        <Logo color="#000" />
        <div className="">
          <input
            type="text"
            name=""
            id=""
            className="h-8 w-full bg-light-blue/30 rounded-md focus:border-none shadow-md"
          />
        </div>
        <div className="flex items-center gap-x-8 gap-y-2">
          <ConnectWallet />
          <div className="flex flex-col justify-center items-center gap-y-2">
            <p className="h-10 w-10 bg-black rounded-full"></p>
            <p className="text-light-black/70 text-sm">Haruna idris</p>
          </div>
          <IoIosArrowDown className="" />
        </div>
      </div>
    </nav>
  );
}
