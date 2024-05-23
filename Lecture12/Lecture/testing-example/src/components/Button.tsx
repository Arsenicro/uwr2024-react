import React from "react";
import { twMerge } from "tailwind-merge";

type IProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

function Button({ className, ...props }: IProps) {
  return (
    <button
      className={twMerge(
        "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
        className
      )}
      {...props}
    >
      {props.children}
    </button>
  );
}

export default Button;
