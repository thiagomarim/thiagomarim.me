import { cn } from "@/app/lib/utils";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        "text-white text-base flex items-center justify-center gap-2 text-center bg-blue-500 hover:bg-blue-600 py-3 rounded-md mt-4 lg:mt-8 hover:scale-95 transition-all disabled:opacity-60 hover:duration-300",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
