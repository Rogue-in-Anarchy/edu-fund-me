import Link from "next/link";
import React from "react";

const Button = (props: {
  title: string;
  backgroundColor: string;
  textColor: string;
  link: string;
}) => {
  const { title, backgroundColor, textColor } = props;
  return (
    <Link href={props.link || ""}>
      <button
        className={` font-semibold  px-8 py-2 rounded-md hover:bg-[#005a5ad4] duration-300 `}
        style={{ backgroundColor, color: textColor }}
      >
        {props.title}
      </button>
    </Link>
  );
};

export default Button;
