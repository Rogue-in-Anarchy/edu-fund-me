import Image from "next/image";
import Link from "next/link";
import React from "react";
type Props = { color: string };
const Logo = ({ color }: Props) => {
  return (
    <Link href="/" className="flex items-center gap-1">
      <Image
        className={`object-cover rounded-full h-7 w-7 ${color}`}
        src="https://cdn.hashnode.com/res/hashnode/image/upload/v1722351207248/005e78ee-15e5-4a4b-9b9f-91f6e505f9ba.png"
        alt="logo"
        width={50}
        height={50}
      />
      <p className="font-extrabold text-xl">LearnFi</p>
    </Link>
  );
};

export default Logo;
