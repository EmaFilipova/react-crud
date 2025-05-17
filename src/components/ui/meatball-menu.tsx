
import * as React from "react"
import { MoreHorizontal } from "lucide-react"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

export interface MeatballMenuProps {
  items?: MeatballMenuItem[]
  className?: string
  triggerClassName?: string
  align?: "start" | "center" | "end"
  side?: "top" | "right" | "bottom" | "left"
  sideOffset?: number
}

export interface MeatballMenuItem {
  label: string
  onClick?: () => void
  disabled?: boolean
  icon?: React.ReactNode
  type?: "item" | "checkbox" | "radio" | "submenu" | "separator" | "label"
  checked?: boolean
  value?: string
  subItems?: MeatballMenuItem[]
  radioGroup?: string
}

export function MeatballMenu({
  items = [],
  className,
  triggerClassName,
  align = "end",
  side = "bottom",
  sideOffset = 4,
}: MeatballMenuProps) {
  const [open, setOpen] = React.useState(false)
  const [radioValues, setRadioValues] = React.useState<Record<string, string>>({})

  const renderMenuItem = (item: MeatballMenuItem, index: number | string) => {
    if (item.type === "separator") {
      return <DropdownMenuSeparator key={index} />
    }

    if (item.type === "label") {
      return <DropdownMenuLabel key={index}>{item.label}</DropdownMenuLabel>
    }

    if (item.type === "checkbox") {
      return (
        <DropdownMenuCheckboxItem
          key={index}
          checked={item.checked}
          onCheckedChange={() => {
            if (item.onClick) item.onClick()
          }}
          disabled={item.disabled}
        >
          {item.icon && <span className="mr-2">{item.icon}</span>}
          {item.label}
        </DropdownMenuCheckboxItem>
      )
    }

    if (item.type === "radio" && item.radioGroup) {
      const currentValue = radioValues[item.radioGroup] || ""
      
      return (
        <DropdownMenuRadioItem
          key={index}
          value={item.value || item.label}
          disabled={item.disabled}
          onSelect={() => {
            setRadioValues({
              ...radioValues,
              [item.radioGroup!]: item.value || item.label,
            })
            if (item.onClick) item.onClick()
          }}
        >
          {item.icon && <span className="mr-2">{item.icon}</span>}
          {item.label}
        </DropdownMenuRadioItem>
      )
    }

    if (item.type === "submenu" && item.subItems) {
      return (
        <DropdownMenuSub key={index}>
          <DropdownMenuSubTrigger disabled={item.disabled}>
            {item.icon && <span className="mr-2">{item.icon}</span>}
            {item.label}
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            {item.subItems.map((subItem, subIndex) => renderMenuItem(subItem, `${index}-${subIndex}`))}
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      )
    }

    // Default to regular item
    return (
      <DropdownMenuItem
        key={index}
        disabled={item.disabled}
        onClick={() => {
          if (item.onClick) item.onClick()
          setOpen(false)
        }}
      >
        {item.icon && <span className="mr-2">{item.icon}</span>}
        {item.label}
      </DropdownMenuItem>
    )
  }

  const renderItems = () => {
    // Group radio items by their radioGroup
    const radioGroups: Record<string, MeatballMenuItem[]> = {}
    
    const regularItems = items.filter(item => {
      if (item.type === "radio" && item.radioGroup) {
        if (!radioGroups[item.radioGroup]) {
          radioGroups[item.radioGroup] = []
        }
        radioGroups[item.radioGroup].push(item)
        return false
      }
      return true
    })

    return (
      <>
        {regularItems.map(renderMenuItem)}
        
        {Object.entries(radioGroups).map(([groupName, groupItems]) => (
          <DropdownMenuRadioGroup
            key={groupName}
            value={radioValues[groupName] || ""}
            onValueChange={(value) => {
              setRadioValues({
                ...radioValues,
                [groupName]: value,
              })
            }}
          >
            {groupItems.map(renderMenuItem)}
          </DropdownMenuRadioGroup>
        ))}
      </>
    )
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger 
        className={cn(
          "inline-flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none", 
          triggerClassName
        )}
      >
        <MoreHorizontal className="h-4 w-4" />
        <span className="sr-only">Open menu</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align={align} 
        side={side} 
        sideOffset={sideOffset} 
        className={cn("w-56", className)}
      >
        {renderItems()}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
