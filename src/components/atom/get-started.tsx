import Link from "next/link";
import React from "react";

const GetStartedButton = (props: {
  title: string;
  backgroundColor: string;
  textColor: string;
}) => {
  const { title, backgroundColor, textColor } = props;
  return (
    <Link href="/signin">
      <button
        className={` font-semibold  px-4 py-2 rounded-md hover:bg-[#005a5ad4] duration-300 `}
        style={{ backgroundColor, color: textColor }}
      >
        {props.title || "Get Started"}
      </button>
    </Link>
  );
};

export default GetStartedButton;
