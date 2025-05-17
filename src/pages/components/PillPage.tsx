import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  TypographyH1,
  TypographyLead,
  TypographyH3,
  TypographyP,
} from "@/components/ui/typography";
import { Pill } from "@/components/ui/pill";
import { useState } from "react";

export default function PillPage() {
  const [pills, setPills] = useState({
    default: true,
    warning: true,
    error: true,
    success: true,
    neutral: true,
    withPath: true,
  });

  const handleDismiss = (key: keyof typeof pills) => {
    setPills((prev) => ({ ...prev, [key]: false }));
  };

  return (
    <div className="container max-w-7xl py-10">
      <div className="space-y-8">
        <div>
          <TypographyH1>Pill</TypographyH1>
          <TypographyLead>
            A pill component for displaying labels with optional dismiss
            functionality.
          </TypographyLead>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Pill Variants</CardTitle>
            <CardDescription>
              Different pill styles for various use cases. Click the X to
              dismiss.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              {pills.default && (
                <Pill
                  variant="default"
                  onDismiss={() => handleDismiss("default")}
                >
                  Text
                </Pill>
              )}
              {pills.warning && (
                <Pill
                  variant="warning"
                  onDismiss={() => handleDismiss("warning")}
                >
                  Text
                </Pill>
              )}
              {pills.error && (
                <Pill variant="error" onDismiss={() => handleDismiss("error")}>
                  Text
                </Pill>
              )}
              {pills.success && (
                <Pill
                  variant="success"
                  onDismiss={() => handleDismiss("success")}
                >
                  Text
                </Pill>
              )}
              {pills.neutral && (
                <Pill
                  variant="neutral"
                  onDismiss={() => handleDismiss("neutral")}
                >
                  Text
                </Pill>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pills with Path</CardTitle>
            <CardDescription>
              Pills can include a path component for hierarchical information.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              {pills.withPath && (
                <>
                  <Pill
                    variant="default"
                    path="Path"
                    onDismiss={() => handleDismiss("withPath")}
                  >
                    Text
                  </Pill>
                  <Pill variant="warning" path="Path">
                    Text
                  </Pill>
                  <Pill variant="error" path="Path">
                    Text
                  </Pill>
                  <Pill variant="success" path="Path">
                    Text
                  </Pill>
                  <Pill variant="neutral" path="Path">
                    Text
                  </Pill>
                </>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Non-dismissible Pills</CardTitle>
            <CardDescription>
              Pills without the dismiss button option.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Pill variant="default" dismissible={false}>
                Text
              </Pill>
              <Pill variant="warning" dismissible={false}>
                Text
              </Pill>
              <Pill variant="error" dismissible={false}>
                Text
              </Pill>
              <Pill variant="success" dismissible={false}>
                Text
              </Pill>
              <Pill variant="neutral" dismissible={false}>
                Text
              </Pill>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
