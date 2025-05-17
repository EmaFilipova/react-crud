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

export default function MultipleSelectionSection() {
  const [multiValue, setMultiValue] = useState<string[]>([]);

  // Multi-select options
  const multiOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Multiple Selection</CardTitle>
        <CardDescription>
          A segmented control that allows selecting multiple options
          simultaneously.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <SegmentedControl
          type="multiple"
          items={multiOptions}
          value={multiValue}
          onValueChange={(value) => setMultiValue(value as string[])}
          itemVariant="blue"
        />
        <TypographyP className="text-sm text-gray-500">
          Selected values: {multiValue.join(", ") || "none"}
        </TypographyP>
      </CardContent>
    </Card>
  );
}
