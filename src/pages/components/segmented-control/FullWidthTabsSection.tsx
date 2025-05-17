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

export default function FullWidthTabsSection() {
  const [tabValue, setTabValue] = useState("all");

  // Tab options - For equal width example
  const tabOptions = [
    { value: "all", label: "All" },
    { value: "active", label: "Active" },
    { value: "completed", label: "Completed" },
    { value: "archived", label: "Archived" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Full Width Tabs</CardTitle>
        <CardDescription>
          A segmented control that expands to fill the available width, useful
          for tabs.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <SegmentedControl
          items={tabOptions}
          value={tabValue}
          onValueChange={(value) => setTabValue(value as string)}
          fullWidth
          itemVariant="blue"
        />
        <TypographyP className="text-sm text-gray-500">
          Active tab: {tabValue}
        </TypographyP>

        <div className="p-4 bg-gray-100 rounded-lg mt-4">
          <div className="text-sm text-gray-600">
            Full width segmented controls are ideal for tab navigation systems
            where each option should have equal prominence.
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
