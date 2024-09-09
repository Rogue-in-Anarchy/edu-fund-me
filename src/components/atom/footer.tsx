import Link from "next/link";
import Logo from "./logo";
import React from "react";

export default function Footer() {
  const today = new Date();
  return (
    <div className="h-full bg-[#008080]">
      <footer className="h-full flex flex-col text-[#FFF] px-4 mx-auto max-w-screen-xl py-5">
        <section className="flex flex-col justify-between sm:items-start md:flex-row  p-4  text-sm">
          <div className="my-4 p-2">
            <Logo color="#FFF" />
          </div>

          <div className="flex flex-wrap gap-4 sm:gap-10">
            <div className="flex flex-col gap-2 sm:gap-5 p-2">
              <h1 className="text-lg">PRODUCT</h1>
              <ul className="flex flex-col gap-3 items-start sm:gap-5 text-xs ">
                <Link href="/" className="hover:underline duration-300">
                  Home
                </Link>
                <Link href="/work" className="hover:underline duration-300">
                  How It Works
                </Link>
                <Link href="/features" className="hover:underline duration-300">
                  Features
                </Link>
                <Link href="/about" className="hover:underline duration-300">
                  About Us
                </Link>
                <Link href="/map" className="hover:underline duration-300">
                  Road Map
                </Link>
                <Link href="/contact" className="hover:underline duration-300">
                  Contact
                </Link>
              </ul>
            </div>
            <div className="flex flex-col gap-2 sm:gap-5 p-2">
              <h1 className="text-lg">SOCIAL MEDIA</h1>
              <ul className="flex flex-col gap-3 items-start sm:gap-5 text-xs ">
                <Link href="" className="hover:underline duration-300">
                  Twitter
                </Link>
                <Link href="" className="hover:underline duration-300">
                  Facebook
                </Link>
                <Link href="" className="hover:underline duration-300">
                  LinkedIn
                </Link>
                <Link href="" className="hover:underline duration-300">
                  Instagram
                </Link>
              </ul>
            </div>
            <div className="flex flex-col gap-2 sm:gap-5 p-2">
              <h1 className=" text-lg">RESOURCES</h1>
              <ul className="flex flex-col gap-3 items-start sm:gap-5 text-xs ">
                <Link href="" className="hover:underline duration-300">
                  Community
                </Link>
                <Link href="" className="hover:underline duration-300">
                  FAQs
                </Link>
                <Link href="" className="hover:underline duration-300">
                  Blogs
                </Link>
                <Link href="" className="hover:underline duration-300">
                  Whitepaper
                </Link>
              </ul>
            </div>
            <div className="flex flex-col gap-2 sm:gap-5 p-2">
              <h1 className="text-lg">CONTACT US</h1>
              <div className="flex flex-col items-start gap-3 sm:gap-5 text-xs">
                <div>
                  <p>Email</p>
                  <p>learnfi@gmail.com</p>
                </div>
                <div>
                  <p>phone</p>
                  <p>+123-4567-890</p>
                </div>
                <div>
                  <p>phone</p>
                  <p>+123-4567-890</p>
                </div>

                <div>
                  <p>Address</p>
                  <p>123 Blockchain Avenue, Crypto City, DeFi Land</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <p className="w-[100%] border-t p-0.5 text-center text-white font-semibold "></p>
        <section className="flex flex-col sm:flex-row justify-center items-start gap-10 text-xs pt-6">
          <p className="sm:w-1/2">
            {" "}
            LearnFi is dedicated to transforming education financing through a
            decentralized, transparent, and community-driven platform, enabling
            students worldwide to achieve their academic dreams without
            financial barriers.
          </p>
          <p>© {today.getFullYear()} LearnFi. All Rights Reserved.</p>
        </section>
      </footer>
    </div>
  );
}
