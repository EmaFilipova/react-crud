
import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"

import { cn } from "@/lib/utils"
import "./radio-group.css"

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-[#3B3B3B] bg-white text-[#0552B5] ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0552B5] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 hover:border-[#0967D2]",
        "shadow-[0px_2px_2px_0px_rgba(0,0,0,0.10)_inset,0px_0px_2px_0px_rgba(0,0,0,0.10)_inset]",
        "data-[state=checked]:bg-white data-[state=checked]:border-[#0552B5] data-[state=checked]:border-[1.5px]",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-[#0552B5] text-[#0552B5]" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }