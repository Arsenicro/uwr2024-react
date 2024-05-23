import React from "react";
import { twMerge } from "tailwind-merge";

type IProps = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

function Select({ className, ...props }: IProps) {
  return (
    <select
      className={twMerge(
        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
        className
      )}
      {...props}
    >
      {props.children}
    </select>
  );
}

export default Select;
