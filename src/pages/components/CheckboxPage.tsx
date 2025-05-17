import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  TypographyH1,
  TypographyLead,
  TypographyH3,
  TypographyP,
} from "@/components/ui/typography";
import { Label } from "@/components/ui/label";

export default function CheckboxPage() {
  return (
    <div className="container max-w-7xl py-10">
      <div className="space-y-8">
        <div>
          <TypographyH1>Checkbox</TypographyH1>
          <TypographyLead>
            A checkbox component for selecting options.
          </TypographyLead>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Checkbox Variants</CardTitle>
            <CardDescription>
              Explore different checkbox styles with interactive states
              (default, hover, checked, and disabled).
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Row One: Unchecked States */}
              <div className="flex flex-col gap-4">
                <div className="w-full text-center mb-2">
                  <h3 className="font-semibold">Default (Unchecked)</h3>
                  <p className="text-sm text-gray-500">Basic unchecked state</p>
                </div>
                <div className="inline-flex p-8 flex-col justify-center items-center gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="default" />
                    <Label htmlFor="default">Default</Label>
                  </div>
                  <div className="space-y-1 text-center mt-4">
                    <p className="text-xs text-gray-500 font-mono">
                      Border: #3B3B3B
                    </p>
                    <p className="text-xs text-gray-500 font-mono">
                      Background: #FFF
                    </p>
                    <p className="text-xs text-gray-500 font-mono">
                      Box Shadow: inset shadow
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="w-full text-center mb-2">
                  <h3 className="font-semibold">Hover (Unchecked)</h3>
                  <p className="text-sm text-gray-500">Hover over checkbox</p>
                </div>
                <div className="inline-flex p-8 flex-col justify-center items-center gap-4">
                  <div className="flex items-center space-x-2">
                    <div className="ring-2 ring-blue-100 rounded-md p-1">
                      <Checkbox
                        id="hover"
                        className="hover:border-[#0967D2] hover:shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)_inset,0px_0px_2px_0px_rgba(0,0,0,0.10)_inset]"
                      />
                    </div>
                    <Label htmlFor="hover">Hover</Label>
                  </div>
                  <div className="space-y-1 text-center mt-4">
                    <p className="text-xs text-gray-500 font-mono">
                      Border: #0967D2
                    </p>
                    <p className="text-xs text-gray-500 font-mono">
                      Background: #FFF
                    </p>
                    <p className="text-xs text-gray-500 font-mono">
                      Box Shadow: lighter inset shadow
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="w-full text-center mb-2">
                  <h3 className="font-semibold">Disabled (Unchecked)</h3>
                  <p className="text-sm text-gray-500">Unavailable option</p>
                </div>
                <div className="inline-flex p-8 flex-col justify-center items-center gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="disabled-unchecked" disabled />
                    <Label
                      htmlFor="disabled-unchecked"
                      className="text-gray-400"
                    >
                      Disabled
                    </Label>
                  </div>
                  <div className="space-y-1 text-center mt-4">
                    <p className="text-xs text-gray-500 font-mono">
                      Border: rgba(0,0,0,0.12)
                    </p>
                    <p className="text-xs text-gray-500 font-mono">
                      Background: rgba(0,0,0,0.12)
                    </p>
                    <p className="text-xs text-gray-500 font-mono">
                      Box Shadow: subtle inset shadow
                    </p>
                  </div>
                </div>
              </div>

              {/* Row Two: Checked States */}
              <div className="flex flex-col gap-4">
                <div className="w-full text-center mb-2">
                  <h3 className="font-semibold">Default (Checked)</h3>
                  <p className="text-sm text-gray-500">Selected state</p>
                </div>
                <div className="inline-flex p-8 flex-col justify-center items-center gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="checked" defaultChecked />
                    <Label htmlFor="checked">Checked</Label>
                  </div>
                  <div className="space-y-1 text-center mt-4">
                    <p className="text-xs text-gray-500 font-mono">
                      Fill: #0552B5
                    </p>
                    <p className="text-xs text-gray-500 font-mono">
                      Box Shadow: inset shadow
                    </p>
                    <p className="text-xs text-gray-500 font-mono">
                      Drop Shadow: blue glow
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="w-full text-center mb-2">
                  <h3 className="font-semibold">Hover (Checked)</h3>
                  <p className="text-sm text-gray-500">
                    Hover over selected checkbox
                  </p>
                </div>
                <div className="inline-flex p-8 flex-col justify-center items-center gap-4">
                  <div className="flex items-center space-x-2">
                    <div className="ring-2 ring-blue-100 rounded-md p-1">
                      <Checkbox id="checked-hover" defaultChecked />
                    </div>
                    <Label htmlFor="checked-hover">Hover Checked</Label>
                  </div>
                  <div className="space-y-1 text-center mt-4">
                    <p className="text-xs text-gray-500 font-mono">
                      Fill: #0967D2
                    </p>
                    <p className="text-xs text-gray-500 font-mono">
                      Box Shadow: inset shadow
                    </p>
                    <p className="text-xs text-gray-500 font-mono">
                      Drop Shadow: enhanced blue glow
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="w-full text-center mb-2">
                  <h3 className="font-semibold">Disabled (Checked)</h3>
                  <p className="text-sm text-gray-500">
                    Unavailable but selected
                  </p>
                </div>
                <div className="inline-flex p-8 flex-col justify-center items-center gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="disabled-checked" disabled defaultChecked />
                    <Label htmlFor="disabled-checked" className="text-gray-400">
                      Disabled Checked
                    </Label>
                  </div>
                  <div className="space-y-1 text-center mt-4">
                    <p className="text-xs text-gray-500 font-mono">
                      Fill: rgba(0,0,0,0.12)
                    </p>
                    <p className="text-xs text-gray-500 font-mono">
                      Box Shadow: subtle inset shadow
                    </p>
                    <p className="text-xs text-gray-500 font-mono">
                      Drop Shadow: light gray shadow
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Checkbox Usage</CardTitle>
            <CardDescription>
              Common patterns for using checkboxes in forms and interfaces.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-semibold">Form Selection</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms1" />
                    <Label htmlFor="terms1">Accept terms and conditions</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter" defaultChecked />
                    <Label htmlFor="newsletter">Subscribe to newsletter</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="marketing" />
                    <Label htmlFor="marketing">Receive marketing emails</Label>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">Multiple Selection</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="apple" defaultChecked />
                    <Label htmlFor="apple">Apple</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="orange" />
                    <Label htmlFor="orange">Orange</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="banana" defaultChecked />
                    <Label htmlFor="banana">Banana</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="grape" disabled />
                    <Label htmlFor="grape" className="text-gray-400">
                      Grape (Out of season)
                    </Label>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
