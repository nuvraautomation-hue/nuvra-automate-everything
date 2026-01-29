import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-[hsl(48_100%_50%)] via-[hsl(43_90%_45%)] to-[hsl(38_85%_40%)] text-black shadow-[0_0_25px_-5px_hsl(48_100%_50%_/_0.6),inset_0_1px_0_hsl(48_100%_70%_/_0.4)] hover:scale-105 hover:shadow-[0_0_35px_-5px_hsl(48_100%_50%_/_0.8),inset_0_1px_0_hsl(48_100%_70%_/_0.5)]",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border-2 border-[hsl(48_100%_50%_/_0.5)] bg-transparent text-foreground hover:bg-[hsl(48_100%_50%_/_0.1)] hover:border-[hsl(48_100%_50%_/_0.8)] hover:shadow-[0_0_20px_-5px_hsl(48_100%_50%_/_0.4)]",
        secondary:
          "bg-gradient-to-r from-[hsl(0_0%_8%)] to-[hsl(0_0%_12%)] text-foreground shadow-sm border border-[hsl(48_100%_50%_/_0.3)] hover:border-[hsl(48_100%_50%_/_0.6)] hover:shadow-[0_0_20px_-8px_hsl(48_100%_50%_/_0.4)]",
        ghost: "text-foreground hover:bg-[hsl(48_100%_50%_/_0.1)] hover:text-[hsl(48_100%_55%)]",
        link: "text-[hsl(48_100%_55%)] underline-offset-4 hover:underline",
        hero: "bg-gradient-to-r from-[hsl(50_100%_55%)] via-[hsl(45_95%_50%)] to-[hsl(40_90%_42%)] text-black font-bold shadow-[0_0_40px_-8px_hsl(50_100%_55%_/_0.7),0_0_80px_-15px_hsl(45_95%_50%_/_0.4),inset_0_2px_0_hsl(50_100%_70%_/_0.5)] hover:scale-105 hover:shadow-[0_0_50px_-5px_hsl(50_100%_55%_/_0.9),0_0_100px_-20px_hsl(45_95%_50%_/_0.6),inset_0_2px_0_hsl(50_100%_75%_/_0.6)] border border-[hsl(50_100%_65%_/_0.3)]",
        heroOutline: "border-2 border-[hsl(48_100%_50%_/_0.6)] bg-transparent text-foreground font-semibold hover:bg-[hsl(48_100%_50%_/_0.1)] hover:border-[hsl(48_100%_55%)] hover:shadow-[0_0_30px_-8px_hsl(48_100%_50%_/_0.5)]",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-md px-4 text-xs",
        lg: "h-12 rounded-xl px-8 text-base",
        xl: "h-14 rounded-xl px-8 text-base md:h-16 md:px-12 md:text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
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
