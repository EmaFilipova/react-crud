import React, { useState } from "react";
import { TypographyH3 } from "@/components/ui/typography";
import { SegmentedControl } from "@/components/ui/segmented-control";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function VariantsSection() {
  const [layoutValue, setLayoutValue] = useState("label1");

  // Layout options - Regular example
  const layoutOptions = [
    { value: "label1", label: "Label 1" },
    { value: "label2", label: "Label 2" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Variants</CardTitle>
        <CardDescription>
          Different styles of segmented controls.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <TypographyH3 className="text-base">Default Variant</TypographyH3>
            <SegmentedControl
              items={layoutOptions}
              value={layoutValue}
              onValueChange={(value) => setLayoutValue(value as string)}
            />
          </div>
          <div className="space-y-2">
            <TypographyH3 className="text-base">Pill Variant</TypographyH3>
            <SegmentedControl
              items={layoutOptions}
              value={layoutValue}
              onValueChange={(value) => setLayoutValue(value as string)}
              itemVariant="pill"
              variant="pill"
            />
          </div>
          <div className="space-y-2">
            <TypographyH3 className="text-base">Subtle Variant</TypographyH3>
            <SegmentedControl
              items={layoutOptions}
              value={layoutValue}
              onValueChange={(value) => setLayoutValue(value as string)}
              itemVariant="subtle"
            />
          </div>
          <div className="space-y-2">
            <TypographyH3 className="text-base">Elevated Variant</TypographyH3>
            <SegmentedControl
              items={layoutOptions}
              value={layoutValue}
              onValueChange={(value) => setLayoutValue(value as string)}
              variant="elevated"
              itemVariant="blue"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
