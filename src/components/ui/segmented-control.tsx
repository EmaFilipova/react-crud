import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import type { ToggleGroupSingleProps, ToggleGroupMultipleProps } from "@radix-ui/react-toggle-group"

const segmentedControlVariants = cva(
  "inline-flex rounded-md border p-1 bg-white shadow-sm",
  {
    variants: {
      variant: {
        default: "border-[#E3E3E3]",
        outline: "border-gray-300",
        pill: "rounded-full",
        elevated: "border-[#E3E3E3] shadow-md",
      },
      size: {
        default: "h-10",
        sm: "h-9 text-sm",
        lg: "h-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const segmentItemVariants = cva(
  "inline-flex items-center justify-center rounded px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-[#0552B5] data-[state=on]:text-white data-[state=off]:bg-transparent data-[state=off]:text-gray-700 data-[state=off]:hover:bg-gray-100 relative",
  {
    variants: {
      variant: {
        default: "",
        pill: "rounded-full",
        subtle: "data-[state=on]:bg-gray-200 data-[state=on]:text-gray-900",
        blue: "data-[state=on]:bg-[#0552B5] data-[state=on]:text-white",
      },
      size: {
        default: "h-8",
        sm: "h-7 text-xs px-2.5",
        lg: "h-9 text-base px-4",
      },
      fullWidth: {
        true: "flex-1",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      fullWidth: false,
    },
  }
)

export interface SegmentedControlProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof segmentedControlVariants> {
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  defaultValue?: string | string[];
  type?: "single" | "multiple";
  items?: Array<{ value: string; label: string; disabled?: boolean }>;
  itemVariant?: VariantProps<typeof segmentItemVariants>["variant"];
  itemSize?: VariantProps<typeof segmentItemVariants>["size"];
  fullWidth?: boolean;
  equal?: boolean;
}

const SegmentedControl = React.forwardRef<HTMLDivElement, SegmentedControlProps>(
  ({ 
    className, 
    variant, 
    size, 
    items = [], 
    value, 
    onValueChange, 
    defaultValue, 
    type = "single", 
    itemVariant = "default",
    itemSize = "default",
    fullWidth = false,
    equal = false,
    ...props 
  }, ref) => {
    // Create type-specific props based on the type (single or multiple)
    const typeSpecificProps = React.useMemo(() => {
      if (type === "multiple") {
        return {
          type: "multiple" as const,
          value: Array.isArray(value) ? value : value ? [value] : undefined,
          onValueChange: onValueChange as ((value: string[]) => void) | undefined,
          defaultValue: Array.isArray(defaultValue) ? defaultValue : defaultValue ? [defaultValue] : undefined,
        } as ToggleGroupMultipleProps;
      } else {
        return {
          type: "single" as const,
          value: Array.isArray(value) ? value[0] : value,
          onValueChange: onValueChange as ((value: string) => void) | undefined,
          defaultValue: Array.isArray(defaultValue) ? defaultValue[0] : defaultValue,
        } as ToggleGroupSingleProps;
      }
    }, [type, value, onValueChange, defaultValue]);

    return (
      <ToggleGroup
        ref={ref}
        className={cn(
          segmentedControlVariants({ variant, size }), 
          fullWidth && "w-full",
          equal && "grid",
          equal && items.length > 0 && `grid-cols-${Math.min(items.length, 12)}`,
          className
        )}
        {...typeSpecificProps}
        {...props}
      >
        {items.map((item) => (
          <ToggleGroupItem 
            key={item.value} 
            value={item.value}
            disabled={item.disabled}
            className={cn(
              segmentItemVariants({ 
                variant: itemVariant, 
                size: itemSize,
                fullWidth: fullWidth || equal
              })
            )}
            aria-label={item.label}
          >
            {item.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    )
  }
)

SegmentedControl.displayName = "SegmentedControl"

export { SegmentedControl, segmentedControlVariants, segmentItemVariants }