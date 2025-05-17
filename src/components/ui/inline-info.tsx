import React from "react"
import { cn } from "@/lib/utils"
import { Info, AlertTriangle, Check, X } from "lucide-react"
import { Button } from "./button"

type InlineInfoVariant = "info" | "error" | "warning" | "success"

interface InlineInfoProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: InlineInfoVariant
  title?: string
  description?: string
  showIcon?: boolean
  showCloseButton?: boolean
  onClose?: () => void
  actions?: React.ReactNode
}

const getIcon = (variant: InlineInfoVariant) => {
  switch (variant) {
    case "info":
      return <Info className="h-5 w-5" />
    case "error":
      return <AlertTriangle className="h-5 w-5" />
    case "warning":
      return <AlertTriangle className="h-5 w-5" />
    case "success":
      return <Check className="h-5 w-5" />
  }
}

const getStyles = (variant: InlineInfoVariant) => {
  switch (variant) {
    case "info":
      return "bg-blue-50 border-blue-200 text-blue-800"
    case "error":
      return "bg-[#FFBDBD] border-[#AB091E] border-solid text-[#AB091E]"
    case "warning":
      return "bg-yellow-50 border-yellow-200 text-yellow-800"
    case "success":
      return "bg-green-50 border-green-200 text-green-800"
  }
}

const InlineInfo = React.forwardRef<HTMLDivElement, InlineInfoProps>(
  ({ 
    className, 
    variant = "info", 
    title, 
    description, 
    showIcon = true, 
    showCloseButton = false,
    onClose,
    actions,
    children,
    ...props 
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-start gap-3 rounded-md border p-4",
          getStyles(variant),
          className
        )}
        {...props}
      >
        {showIcon && (
          <div className="flex-shrink-0">
            {getIcon(variant)}
          </div>
        )}
        <div className="flex-1">
          {title && <div className="font-medium">{title}</div>}
          {description && <div className="text-sm">{description}</div>}
          {children}
        </div>
        {actions && (
          <div className="flex gap-2 ml-2">
            {actions}
          </div>
        )}
        {showCloseButton && (
          <button 
            onClick={onClose} 
            className="flex-shrink-0 hover:bg-gray-100 hover:bg-opacity-30 p-1 rounded-full"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    )
  }
)
InlineInfo.displayName = "InlineInfo"

export { InlineInfo }
