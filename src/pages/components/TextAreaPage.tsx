import React, { useState } from "react";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyP,
} from "@/components/ui/typography";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckIcon, AlertTriangle } from "lucide-react";

const TextAreaPage = () => {
  const [feedback, setFeedback] = useState("");

  // Form validation schema
  const formSchema = z.object({
    comment: z
      .string()
      .min(10, { message: "Comment must be at least 10 characters." })
      .max(200, { message: "Comment must not exceed 200 characters." }),
  });

  // Initialize form with react-hook-form and zod resolver
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      comment: "",
    },
  });

  // Form submission handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setFeedback("Form submitted successfully!");
  }

  return (
    <div className="container py-10">
      <TypographyH1>Text Area</TypographyH1>
      <TypographyP className="text-muted-foreground mt-2 mb-8">
        Text Areas are multi-line input fields designed for entering longer
        blocks of text, such as comments, messages, or descriptions. They
        provide users with the space and flexibility needed to input text
        without character limits.
      </TypographyP>

      {/* Basic Usage */}
      <section className="mb-12">
        <TypographyH2 className="mb-4">Basic Usage</TypographyH2>
        <div className="p-6 border rounded-lg bg-gray-50">
          <div className="mb-8 max-w-lg">
            <Label htmlFor="basic-textarea">Label</Label>
            <Textarea id="basic-textarea" placeholder="Text" className="mt-2" />
          </div>
        </div>
      </section>

      {/* With Helper Text */}
      <section className="mb-12">
        <TypographyH2 className="mb-4">With Helper Text</TypographyH2>
        <div className="p-6 border rounded-lg bg-gray-50">
          <div className="mb-8 max-w-lg">
            <Label htmlFor="helper-textarea">Label (optional)</Label>
            <Textarea
              id="helper-textarea"
              placeholder="Text"
              className="mt-2"
              helperText="Helper text (description or error message)(optional)"
            />
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section className="mb-12">
        <TypographyH2 className="mb-4">Sizes</TypographyH2>
        <div className="p-6 border rounded-lg bg-gray-50">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <TypographyH3 className="mb-4">Small</TypographyH3>
              <Label htmlFor="small-textarea">Label</Label>
              <Textarea
                id="small-textarea"
                placeholder="Text"
                size="small"
                className="mt-2"
              />
            </div>
            <div>
              <TypographyH3 className="mb-4">Large</TypographyH3>
              <Label htmlFor="large-textarea">Label</Label>
              <Textarea
                id="large-textarea"
                placeholder="Text"
                size="large"
                className="mt-2"
              />
            </div>
          </div>

          <div className="mt-8">
            <TypographyH3 className="mb-4">Flexible</TypographyH3>
            <Label htmlFor="flexible-textarea">Label</Label>
            <Textarea
              id="flexible-textarea"
              placeholder="Text"
              rows={6}
              className="mt-2"
            />
          </div>
        </div>
      </section>

      {/* States */}
      <section className="mb-12">
        <TypographyH2 className="mb-4">States</TypographyH2>

        {/* Default States */}
        <TypographyH3 className="mb-4">Default</TypographyH3>
        <div className="p-6 border rounded-lg bg-gray-50 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Label htmlFor="default-normal">Normal</Label>
              <Textarea
                id="default-normal"
                placeholder="Text"
                className="mt-2"
              />
            </div>
            <div>
              <Label
                htmlFor="default-valid"
                className="flex items-center gap-2"
              >
                <span>Valid</span>
                <CheckIcon className="h-4 w-4 text-green-500" />
              </Label>
              <Textarea
                id="default-valid"
                placeholder="Text"
                valid
                className="mt-2"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div>
              <Label
                htmlFor="default-required"
                className="flex items-center gap-2"
              >
                <span>Required</span>
                <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="default-required"
                placeholder="Text"
                required
                className="mt-2"
              />
            </div>
            <div>
              <Label
                htmlFor="default-invalid"
                className="flex items-center gap-2"
              >
                <span>Invalid</span>
                <AlertTriangle className="h-4 w-4 text-red-500" />
              </Label>
              <Textarea
                id="default-invalid"
                placeholder="Text"
                error
                helperText="Error message"
                className="mt-2"
              />
            </div>
          </div>
        </div>

        {/* Disabled States */}
        <TypographyH3 className="mb-4">Disabled</TypographyH3>
        <div className="p-6 border rounded-lg bg-gray-50">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Label htmlFor="disabled-normal" className="text-gray-500">
                Normal
              </Label>
              <Textarea
                id="disabled-normal"
                placeholder="Text"
                disabled
                className="mt-2"
              />
            </div>
            <div>
              <Label
                htmlFor="disabled-required"
                className="flex items-center gap-2 text-gray-500"
              >
                <span>Required</span>
                <span className="text-red-300">*</span>
              </Label>
              <Textarea
                id="disabled-required"
                placeholder="Text"
                disabled
                required
                className="mt-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Character Limit */}
      <section className="mb-12">
        <TypographyH2 className="mb-4">Character Limit</TypographyH2>
        <div className="p-6 border rounded-lg bg-gray-50">
          <div className="mb-8 max-w-lg">
            <Label htmlFor="limit-textarea">Label</Label>
            <Textarea
              id="limit-textarea"
              placeholder="Type here to see character count..."
              characterLimit={100}
              className="mt-2"
            />
          </div>
        </div>
      </section>

      {/* Form Integration */}
      <section className="mb-12">
        <TypographyH2 className="mb-4">Form Integration</TypographyH2>
        <div className="p-6 border rounded-lg bg-gray-50">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 max-w-lg"
            >
              <FormField
                control={form.control}
                name="comment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Comment</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Share your thoughts..."
                        characterLimit={200}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Your comment will be visible to other users.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
              {feedback && (
                <div className="p-3 bg-green-100 text-green-800 rounded">
                  {feedback}
                </div>
              )}
            </form>
          </Form>
        </div>
      </section>

      {/* With Resizing */}
      <section className="mb-12">
        <TypographyH2 className="mb-4">Resize Options</TypographyH2>
        <div className="p-6 border rounded-lg bg-gray-50">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <Label htmlFor="resize-both">Resize (both directions)</Label>
              <Textarea
                id="resize-both"
                placeholder="Resize from any corner"
                className="mt-2"
                resize={true}
              />
            </div>
            <div>
              <Label htmlFor="resize-vertical">Resize Vertical Only</Label>
              <Textarea
                id="resize-vertical"
                placeholder="Resize vertically"
                className="mt-2"
                resize="vertical"
              />
            </div>
            <div>
              <Label htmlFor="resize-horizontal">Resize Horizontal Only</Label>
              <Textarea
                id="resize-horizontal"
                placeholder="Resize horizontally"
                className="mt-2"
                resize="horizontal"
              />
            </div>
            <div>
              <Label htmlFor="resize-none">No Resizing</Label>
              <Textarea
                id="resize-none"
                placeholder="Cannot be resized"
                className="mt-2"
                resize="none"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TextAreaPage;
