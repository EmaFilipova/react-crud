import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TypographyH1, TypographyLead } from "@/components/ui/typography";

export default function AccordionPage() {
  return (
    <div className="container max-w-7xl py-10">
      <div className="space-y-8">
        <div>
          <TypographyH1>Accordion</TypographyH1>
          <TypographyLead>
            A vertically stacked set of interactive headings that each reveal a
            section of content.
          </TypographyLead>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Default Accordion</CardTitle>
            <CardDescription>
              Click on the items to expand/collapse the content.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="w-full max-w-[592px]">
              <Accordion
                type="single"
                collapsible
                className="w-full border border-dashed border-purple-300 p-4 rounded-md"
              >
                <AccordionItem value="item-1" className="mb-2 border-none">
                  <AccordionTrigger className="text-left">
                    Accordion title
                  </AccordionTrigger>
                </AccordionItem>

                <AccordionItem value="item-2" className="mb-2 border-none">
                  <AccordionTrigger className="text-left data-[state=open]:bg-white">
                    Accordion title
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="border border-[#E3E3E3] rounded-[4px] p-4 mt-2 bg-white">
                      Content for this accordion item goes here. You can add any
                      content you want.
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="mb-2 border-none">
                  <AccordionTrigger className="text-left">
                    Accordion title
                  </AccordionTrigger>
                </AccordionItem>

                <AccordionItem value="item-4" className="mb-2 border-none">
                  <AccordionTrigger className="text-left">
                    Accordion title
                  </AccordionTrigger>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-none">
                  <AccordionTrigger className="text-left">
                    Accordion title
                  </AccordionTrigger>
                </AccordionItem>
              </Accordion>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Multiple Expanded Items</CardTitle>
            <CardDescription>
              Configure the accordion to allow multiple items to be expanded
              simultaneously.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="w-full max-w-[592px]">
              <Accordion
                type="multiple"
                className="w-full border border-dashed border-purple-300 p-4 rounded-md"
              >
                <AccordionItem value="item-1" className="mb-2 border-none">
                  <AccordionTrigger className="text-left">
                    Accordion title
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="border border-[#E3E3E3] rounded-[4px] p-4 mt-2 bg-white">
                      This accordion can have multiple sections open at the same
                      time.
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="mb-2 border-none">
                  <AccordionTrigger className="text-left">
                    Accordion title
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="border border-[#E3E3E3] rounded-[4px] p-4 mt-2 bg-white">
                      By setting the type prop to "multiple", we allow users to
                      expand multiple sections simultaneously.
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-none">
                  <AccordionTrigger className="text-left">
                    Accordion title
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="border border-[#E3E3E3] rounded-[4px] p-4 mt-2 bg-white">
                      This is useful for interfaces where users might want to
                      compare content across multiple sections.
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
