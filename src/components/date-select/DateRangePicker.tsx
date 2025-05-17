
import React, { useState } from "react";
import { DateSelect } from "./DateSelect";
import { cn } from "@/lib/utils";

export interface DateRangePickerProps {
  startDate?: Date;
  endDate?: Date;
  onStartDateChange?: (date: Date | undefined) => void;
  onEndDateChange?: (date: Date | undefined) => void;
  startLabel?: string;
  endLabel?: string;
  className?: string;
}

export const DateRangePicker: React.FC<DateRangePickerProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  startLabel = "Start Date",
  endLabel = "End Date",
  className,
}) => {
  const [start, setStart] = useState<Date | undefined>(startDate);
  const [end, setEnd] = useState<Date | undefined>(endDate);

  const handleStartDateChange = (date: Date | undefined) => {
    setStart(date);
    if (onStartDateChange) {
      onStartDateChange(date);
    }
  };

  const handleEndDateChange = (date: Date | undefined) => {
    setEnd(date);
    if (onEndDateChange) {
      onEndDateChange(date);
    }
  };

  return (
    <div className={cn("flex flex-col space-y-4", className)}>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{startLabel}</label>
        <DateSelect 
          value={start} 
          onChange={handleStartDateChange} 
          label={startLabel}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{endLabel}</label>
        <DateSelect 
          value={end} 
          onChange={handleEndDateChange} 
          label={endLabel}
        />
      </div>
    </div>
  );
};