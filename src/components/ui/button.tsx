"use client";

import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-white hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-md active:translate-y-0",
        secondary:
          "bg-transparent text-brand-800 border-[1.5px] border-brand-300 hover:border-brand-800 hover:bg-brand-100",
        ghost:
          "bg-transparent text-accent hover:bg-accent-light",
        white:
          "bg-white text-brand-800 hover:bg-brand-100 hover:-translate-y-0.5 hover:shadow-md",
        outline_white:
          "bg-transparent text-white border-[1.5px] border-white/40 hover:bg-white/10 hover:border-white",
      },
      size: {
        sm: "px-5 py-2.5 text-sm rounded-md",
        default: "px-8 py-3.5 text-base rounded-md",
        lg: "px-10 py-[18px] text-lg rounded-md",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
