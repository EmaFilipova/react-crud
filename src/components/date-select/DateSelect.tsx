import React, { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export type DateSelectSize = "sm" | "md" | "lg";
export type DateSelectState = "default" | "valid" | "error";

export interface DateSelectProps {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  size?: DateSelectSize;
  state?: DateSelectState;
  disabled?: boolean;
  placeholder?: string;
  dateFormat?: string;
  label?: string;
  errorMessage?: string;
  showTimeSelect?: boolean;
  showMonthYearPicker?: boolean;
  className?: string;
}

export const DateSelect: React.FC<DateSelectProps> = ({
  value,
  onChange,
  size = "md",
  state = "default",
  disabled = false,
  placeholder = "Select date",
  dateFormat = "d MMM yyyy",
  label,
  errorMessage,
  showTimeSelect = false,
  showMonthYearPicker = false,
  className,
}) => {
  const [date, setDate] = useState<Date | undefined>(value);

  const handleDateChange = (newDate: Date | undefined) => {
    setDate(newDate);
    if (onChange) {
      onChange(newDate);
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "h-8 text-sm";
      case "lg":
        return "h-12 text-lg";
      default:
        return "h-10 text-base";
    }
  };

  const getStateClasses = () => {
    switch (state) {
      case "valid":
        return "border-green-500 focus:ring-green-500";
      case "error":
        return "border-red-500 focus:ring-red-500";
      default:
        return "";
    }
  };

  return (
    <div className={cn("relative", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-full justify-between font-normal",
              getSizeClasses(),
              getStateClasses(),
              disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
              !date && "text-muted-foreground"
            )}
            disabled={disabled}
          >
            {date ? format(date, dateFormat) : placeholder}
            <CalendarIcon className="ml-2 h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent 
          className="w-auto p-0 custom-calendar-popover" 
          align="start"
        >
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDateChange}
            initialFocus
            className="custom-calendar p-3 pointer-events-auto"
          />
        </PopoverContent>
      </Popover>
      
      {state === "error" && errorMessage && (
        <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
      )}
    </div>
  );
};
