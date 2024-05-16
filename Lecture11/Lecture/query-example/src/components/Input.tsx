import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

function Input({ className, ...rest }: ComponentProps<"input">) {
  return <input className={twMerge(className)} {...rest} />;
}

export default Input;
