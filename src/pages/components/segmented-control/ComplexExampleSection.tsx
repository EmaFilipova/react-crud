import React, { useState } from "react";
import { TypographyP } from "@/components/ui/typography";
import { SegmentedControl } from "@/components/ui/segmented-control";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function ComplexExampleSection() {
  const [timeValue, setTimeValue] = useState("1d");

  // Time options - Complex example
  const timeOptions = [
    { value: "1d", label: "1D" },
    { value: "5d", label: "5D" },
    { value: "1m", label: "1M" },
    { value: "3m", label: "3M" },
    { value: "6m", label: "6M" },
    { value: "ytd", label: "YTD" },
    { value: "1y", label: "1Y" },
    { value: "5y", label: "5Y" },
    { value: "all", label: "View All" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Complex Example</CardTitle>
        <CardDescription>
          A more complex segmented control with multiple options, ideal for time
          range selection.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <SegmentedControl
          items={timeOptions}
          value={timeValue}
          onValueChange={(value) => setTimeValue(value as string)}
          className="w-full overflow-x-auto segmented-control-scrollable"
          size="sm"
          itemVariant="blue"
        />
        <TypographyP className="text-sm text-gray-500">
          Selected time range: {timeValue}
        </TypographyP>

        <div className="p-4 bg-gray-100 rounded-lg mt-4">
          <div className="text-sm text-gray-600">
            This example demonstrates how segmented controls can be used for
            time range selection in charts, analytics dashboards, and data
            visualization tools.
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
