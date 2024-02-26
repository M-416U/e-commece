import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        className={cn(
          "w-auto rounded-full bg-black border-transparent px-5 py-3 disabled:cursor-auto disabled:opacity-50 hover:opacity-75 transition text-white",
          className
        )}
        ref={ref}
        {...props}
        disabled={disabled}
        type={type}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
