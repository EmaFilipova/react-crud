import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  TypographyH1,
  TypographyLead,
  TypographyH3,
  TypographyP,
} from "@/components/ui/typography";
import { ArrowRight } from "lucide-react";

export default function ButtonPage() {
  return (
    <div className="container max-w-7xl py-10">
      <div className="space-y-8">
        <div>
          <TypographyH1>Button</TypographyH1>
          <TypographyLead>
            A button component for triggering actions.
          </TypographyLead>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Button Variants</CardTitle>
            <CardDescription>
              Explore different button styles with interactive states (hover and
              active).
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Primary Button Group */}
              <div className="flex flex-col gap-2 items-center">
                <div className="w-full text-center mb-2">
                  <h3 className="font-semibold">Primary Button</h3>
                  <p className="text-sm text-gray-500">Main call to action</p>
                </div>
                <div className="inline-flex min-w-64 p-8 flex-col justify-center items-center gap-10">
                  <Button variant="default" className="w-full">
                    Primary Button <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <div className="space-y-2 text-center">
                    <p className="text-xs text-gray-500 font-mono">
                      Default: #0552B5
                    </p>
                    <p className="text-xs text-gray-500 font-mono">
                      Hover: #0967D2
                    </p>
                    <p className="text-xs text-gray-500 font-mono">
                      Active: #03449E
                    </p>
                  </div>
                </div>
              </div>

              {/* Secondary/Outline Button Group */}
              <div className="flex flex-col gap-2 items-center">
                <div className="w-full text-center mb-2">
                  <h3 className="font-semibold">Secondary Button</h3>
                  <p className="text-sm text-gray-500">Alternative action</p>
                </div>
                <div className="inline-flex min-w-64 p-8 flex-col justify-center items-center gap-10">
                  <Button variant="outline" className="w-full">
                    Secondary Button
                  </Button>
                  <div className="space-y-2 text-center">
                    <p className="text-xs text-gray-500 font-mono">
                      Border: #E3E3E3
                    </p>
                    <p className="text-xs text-gray-500 font-mono">
                      Hover Border: #828282
                    </p>
                    <p className="text-xs text-gray-500 font-mono">
                      Active Border: #515151
                    </p>
                  </div>
                </div>
              </div>

              {/* Ghost/Tertiary Button Group */}
              <div className="flex flex-col gap-2 items-center">
                <div className="w-full text-center mb-2">
                  <h3 className="font-semibold">Ghost Button</h3>
                  <p className="text-sm text-gray-500">Subtle action</p>
                </div>
                <div className="inline-flex min-w-64 p-8 flex-col justify-center items-center gap-10">
                  <Button variant="ghost" className="w-full">
                    Ghost Button
                  </Button>
                  <div className="space-y-2 text-center">
                    <p className="text-xs text-gray-500 font-mono">
                      Default: Transparent
                    </p>
                    <p className="text-xs text-gray-500 font-mono">
                      Hover: rgba(0,0,0,0.04)
                    </p>
                    <p className="text-xs text-gray-500 font-mono">
                      Active: rgba(0,0,0,0.12)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Button Sizes</CardTitle>
            <CardDescription>
              Buttons come in different sizes to fit various UI needs.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4 items-center">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">
                <ArrowRight />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Additional Variants</CardTitle>
            <CardDescription>
              Other button styles for specific use cases.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button variant="destructive">Destructive</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
