
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

const pillVariants = cva(
  "inline-flex items-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-[#E6F6FF] text-[#03449E]", // Blue
        warning: "bg-[#FFF8E6] text-[#946300]",  // Orange
        error: "bg-[#FFE6E6] text-[#BA0000]",    // Red
        success: "bg-[#E7F9E9] text-[#097A29]",  // Green
        neutral: "bg-[#F1F1F1] text-[#3F3F3F]",  // Gray
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface PillProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pillVariants> {
  onDismiss?: () => void
  dismissible?: boolean
  path?: string
}

const Pill = React.forwardRef<HTMLDivElement, PillProps>(
  ({ className, variant, children, onDismiss, dismissible = true, path, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          pillVariants({ variant }), 
          "pill",
          path && "pill-with-path",
          className
        )}
        style={{
          padding: dismissible ? "2px 2px 2px 10px" : "4px 10px",
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
        }}
        {...props}
      >
        {path && <span className="pill-path text-sm opacity-80">{path}</span>}
        <span className="pill-content text-sm">{children}</span>
        {dismissible && onDismiss && (
          <button
            type="button"
            onClick={onDismiss}
            aria-label="Dismiss"
            className={cn(
              "pill-dismiss flex h-[15px] w-[15px] items-center justify-center rounded-full flex-shrink-0 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              variant === "default" && "bg-[#C6E5FF] text-[#03449E] hover:bg-[#A1D2FF]",
              variant === "warning" && "bg-[#FFE8B2] text-[#946300] hover:bg-[#FFD980]",
              variant === "error" && "bg-[#FFB2B2] text-[#BA0000] hover:bg-[#FF8080]",
              variant === "success" && "bg-[#C6F0CC] text-[#097A29] hover:bg-[#A1E5AD]",
              variant === "neutral" && "bg-[#DDDDDD] text-[#3F3F3F] hover:bg-[#CCCCCC]"
            )}
          >
            <X className="h-3 w-3" />
          </button>
        )}
      </div>
    )
  }
)
Pill.displayName = "Pill"

export { Pill, pillVariants }