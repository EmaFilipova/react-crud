import React, { useState } from "react";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { SegmentedControl } from "@/components/ui/segmented-control";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function BasicUsageExample() {
  const [viewValue, setViewValue] = useState("day");

  // View options - Simple example
  const viewOptions = [
    { value: "day", label: "Day" },
    { value: "week", label: "Week" },
    { value: "month", label: "Month" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Basic Usage</CardTitle>
        <CardDescription>
          A simple segmented control with basic options.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="space-y-2">
          <TypographyH3 className="text-base">
            Simple Segmented Control
          </TypographyH3>
          <SegmentedControl
            items={viewOptions}
            value={viewValue}
            onValueChange={(value) => setViewValue(value as string)}
            itemVariant="blue"
          />
          <TypographyP className="text-sm text-gray-500 mt-2">
            Selected value: {viewValue}
          </TypographyP>
        </div>
      </CardContent>
    </Card>
  );
}
