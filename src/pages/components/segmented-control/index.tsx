import React from "react";
import { TypographyH1, TypographyLead } from "@/components/ui/typography";
import BasicUsageExample from "./BasicUsageExample";
import DesignExamplesSection from "./DesignExamplesSection";
import VariantsSection from "./VariantsSection";
import MultipleSelectionSection from "./MultipleSelectionSection";
import FullWidthTabsSection from "./FullWidthTabsSection";
import ComplexExampleSection from "./ComplexExampleSection";
import SizesSection from "./SizesSection";

export default function SegmentedControlPage() {
  return (
    <div className="container max-w-7xl py-10">
      <div className="space-y-8">
        <div className="space-y-2">
          <TypographyH1>Segmented Control</TypographyH1>
          <TypographyLead>
            Segment control allows users to switch between multiple options
            within a compact horizontal layout. It is ideal for use in view
            toggles, widgets, and grouped navigation where quick selection is
            needed without a dropdown.
          </TypographyLead>
        </div>

        <BasicUsageExample />
        <DesignExamplesSection />
        <VariantsSection />
        <MultipleSelectionSection />
        <FullWidthTabsSection />
        <ComplexExampleSection />
        <SizesSection />
      </div>
    </div>
  );
}
