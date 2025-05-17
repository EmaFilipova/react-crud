import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { User } from "lucide-react"

import { cn } from "@/lib/utils"

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & {
    size?: "small" | "medium" | "large" | "extra-large"
    variant?: "default" | "outline"
    showOutline?: boolean
  }
>(({ className, size = "medium", variant = "default", showOutline = false, ...props }, ref) => {
  const sizeClasses = {
    "small": "h-6 w-6", // 24px
    "medium": "h-8 w-8", // 32px
    "large": "h-16 w-16", // 64px
    "extra-large": "h-64 w-64" // 256px
  }

  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex shrink-0 overflow-hidden rounded-full",
        sizeClasses[size],
        variant === "outline" || showOutline ? "ring-1 ring-white/20" : "",
        className
      )}
      {...props}
    />
  )
})
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> & {
    delayMs?: number
    theme?: "light" | "dark"
  }
>(({ className, theme = "light", delayMs, ...props }, ref) => {
  const themeClasses = {
    "light": "bg-gray-100 text-gray-800",
    "dark": "bg-gray-700 text-gray-200"
  }
  
  return (
    <AvatarPrimitive.Fallback
      ref={ref}
      delayMs={delayMs}
      className={cn(
        "flex h-full w-full items-center justify-center rounded-full",
        themeClasses[theme],
        className
      )}
      {...props}
    />
  )
})
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

const AvatarIcon = () => {
  return <User className="w-4 h-4" />
}

export { Avatar, AvatarImage, AvatarFallback, AvatarIcon }
