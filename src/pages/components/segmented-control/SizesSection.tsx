import React from "react";
import { TypographyH3 } from "@/components/ui/typography";
import { SegmentedControl } from "@/components/ui/segmented-control";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function SizesSection() {
  // Layout options - Regular example
  const layoutOptions = [
    { value: "label1", label: "Label 1" },
    { value: "label2", label: "Label 2" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sizes</CardTitle>
        <CardDescription>
          Segmented controls come in different sizes.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <TypographyH3 className="text-base">Small</TypographyH3>
            <SegmentedControl
              items={layoutOptions}
              itemSize="sm"
              size="sm"
              defaultValue={layoutOptions[0].value}
              itemVariant="blue"
            />
          </div>
          <div className="space-y-2">
            <TypographyH3 className="text-base">Default</TypographyH3>
            <SegmentedControl
              items={layoutOptions}
              defaultValue={layoutOptions[0].value}
              itemVariant="blue"
            />
          </div>
          <div className="space-y-2">
            <TypographyH3 className="text-base">Large</TypographyH3>
            <SegmentedControl
              items={layoutOptions}
              itemSize="lg"
              size="lg"
              defaultValue={layoutOptions[0].value}
              itemVariant="blue"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
