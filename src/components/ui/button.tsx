import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-polaris-purple-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-[#0552B5] text-white hover:bg-[#0967D2] active:bg-[#03449E] shadow-[inset_-2px_-1px_8px_rgba(0,0,0,0.1),inset_2px_1px_8px_rgba(0,0,0,0.1)]",
        outline: "border border-[#E3E3E3] bg-white text-gray-900 hover:border-[#828282] hover:bg-[rgba(0,0,0,0.04)] active:border-[#515151] active:bg-[rgba(0,0,0,0.12)]",
        ghost: "text-gray-900 hover:bg-[rgba(0,0,0,0.04)] active:bg-[rgba(0,0,0,0.12)]",
        destructive:
          "bg-red-500 text-white hover:bg-red-600",
        secondary:
          "bg-polaris-gray-100 text-polaris-gray-900 hover:bg-polaris-gray-200",
        link: "text-polaris-purple-500 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
