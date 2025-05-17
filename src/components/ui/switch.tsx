import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & {
    label?: string;
  }
>(({ className, label, ...props }, ref) => (
  <div className="flex items-center gap-2">
    <SwitchPrimitives.Root
      className={cn(
        "relative inline-flex h-[15px] w-[40px] shrink-0 cursor-pointer items-center rounded-full border-[0.5px] border-transparent px-[1px] py-[1px] pl-[12px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed",
        "data-[state=checked]:bg-[#43a047] data-[state=unchecked]:bg-[#B3B3B3]",
        "data-[state=checked]:shadow-none data-[state=unchecked]:shadow-[inset_0px_0px_1px_0px_rgba(0,0,0,0.02),inset_0px_0.5px_1.5px_2px_rgba(0,0,0,0.12)]",
        "data-[disabled]:bg-[#E3E3E3] data-[disabled]:shadow-[inset_0px_0px_2px_2px_rgba(0,0,0,0.02),inset_0px_0px_1.5px_0.35px_rgba(0,0,0,0.12)]",
        "group",
        className
      )}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          "pointer-events-none block h-[13px] w-[13px] rounded-full border-[0.5px] border-[rgba(0,0,0,0.02)] bg-[#F7F7F7] shadow-[0px_0.2px_0.25px_0px_rgba(0,0,0,0.12)] transition-transform",
          "data-[state=checked]:translate-x-[13px] data-[state=unchecked]:translate-x-0",
          "group-hover:data-[state=checked]:bg-white group-hover:data-[state=unchecked]:bg-white"
        )}
      />
    </SwitchPrimitives.Root>
    {label && <span className="text-sm">{label}</span>}
  </div>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }