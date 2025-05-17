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

export default function DesignExamplesSection() {
  // Equal width options
  const equalOptions = [
    { value: "label1", label: "Label" },
    { value: "label2", label: "Label" },
    { value: "label3", label: "Label" },
    { value: "label4", label: "Label" },
    { value: "label5", label: "Label" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Design Examples</CardTitle>
        <CardDescription>
          Examples matching the design in the documentation.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <TypographyH3 className="text-base">Standard Layout</TypographyH3>
            <SegmentedControl
              items={equalOptions}
              defaultValue={equalOptions[0].value}
              className="segmented-control"
              itemVariant="blue"
            />
          </div>

          <div className="space-y-2">
            <TypographyH3 className="text-base">
              Selected State (Blue Background)
            </TypographyH3>
            <SegmentedControl
              items={[
                { value: "label1", label: "Label" },
                { value: "label2", label: "Label" },
              ]}
              defaultValue="label1"
              className="w-[328px]"
              itemVariant="blue"
            />
          </div>

          <div className="space-y-2">
            <TypographyH3 className="text-base">
              Full Width Equal Segments
            </TypographyH3>
            <SegmentedControl
              items={[
                { value: "label1", label: "Label" },
                { value: "label2", label: "Label" },
                { value: "label3", label: "Label" },
              ]}
              defaultValue="label1"
              fullWidth
              equal
              itemVariant="blue"
            />
          </div>

          <div className="space-y-2">
            <TypographyH3 className="text-base">
              Equal Width with Multiple Items
            </TypographyH3>
            <SegmentedControl
              items={equalOptions}
              defaultValue="label1"
              fullWidth
              equal
              itemVariant="blue"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
