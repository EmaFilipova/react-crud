
import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-[18px] w-[18px] shrink-0 rounded-[3px] border-[1.5px] border-[#3B3B3B] bg-white shadow-[0px_2px_2px_0px_rgba(0,0,0,0.10)_inset,0px_0px_2px_0px_rgba(0,0,0,0.10)_inset] ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:border-[rgba(0,0,0,0.12)] disabled:bg-[rgba(0,0,0,0.12)] disabled:shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)_inset,0px_0px_2px_0px_rgba(0,0,0,0.05)_inset] hover:border-[#0967D2] hover:shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)_inset,0px_0px_2px_0px_rgba(0,0,0,0.10)_inset] data-[state=checked]:border-transparent data-[state=checked]:bg-[#0552B5] data-[state=checked]:shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)_inset,0px_0px_2px_0px_rgba(0,0,0,0.10)_inset] data-[state=checked]:filter-[drop-shadow(0px_1px_2.5px_rgba(5,82,181,0.24))_drop-shadow(0px_0px_0px_rgba(5,82,181,0.12))] data-[state=checked]:hover:bg-[#0967D2] data-[state=checked]:hover:filter-[drop-shadow(0px_1px_2.5px_rgba(9,103,210,0.24))_drop-shadow(0px_0px_0px_rgba(9,103,210,0.12))] data-[state=checked]:disabled:bg-[rgba(0,0,0,0.12)] data-[state=checked]:disabled:shadow-[0px_0px_2px_0px_rgba(0,0,0,0.10)_inset] data-[state=checked]:disabled:filter-[drop-shadow(0px_0.5px_2.5px_rgba(0,0,0,0.15))_drop-shadow(0px_0px_0px_rgba(0,0,0,0.03))]",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-white data-[state=checked]:disabled:text-black/12")}
    >
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
