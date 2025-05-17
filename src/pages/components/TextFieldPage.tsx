import React, { useState } from "react";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyP,
} from "@/components/ui/typography";
import { TextField } from "@/components/ui/text-field";
import { Button } from "@/components/ui/button";
import { Search, Check, AlertTriangle } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const TextFieldPage = () => {
  const [feedback, setFeedback] = useState("");

  // Form validation schema
  const formSchema = z.object({
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
  });

  // Initialize form with react-hook-form and zod resolver
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Form submission handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setFeedback("Form submitted successfully!");
  }

  return (
    <div className="container py-10">
      <TypographyH1>Text Field</TypographyH1>
      <TypographyP className="text-muted-foreground mt-2 mb-8">
        Text Fields are input components that allow users to enter and edit
        text. They are commonly used in forms, settings, and search interfaces.
        Text fields should be clearly labeled, provide placeholder text when
        needed, and support different states like focus, error, and disabled.
      </TypographyP>

      {/* Basic Usage */}
      <section className="mb-12">
        <TypographyH2 className="mb-4">Basic Usage</TypographyH2>
        <div className="p-6 border rounded-lg bg-gray-50">
          <div className="mb-8 max-w-lg">
            <TextField label="Label" placeholder="Text" />
          </div>
        </div>
      </section>

      {/* With Helper Text */}
      <section className="mb-12">
        <TypographyH2 className="mb-4">With Helper Text</TypographyH2>
        <div className="p-6 border rounded-lg bg-gray-50">
          <div className="mb-8 max-w-lg">
            <TextField
              label="Label (optional)"
              placeholder="Text"
              helperText="Helper text (description or error message)(optional)"
            />
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section className="mb-12">
        <TypographyH2 className="mb-4">Sizes</TypographyH2>
        <div className="p-6 border rounded-lg bg-gray-50">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <TypographyH3 className="mb-4">Small</TypographyH3>
              <TextField label="Label" placeholder="Text" size="small" />
            </div>
            <div>
              <TypographyH3 className="mb-4">Default</TypographyH3>
              <TextField label="Label" placeholder="Text" />
            </div>
            <div>
              <TypographyH3 className="mb-4">Large</TypographyH3>
              <TextField label="Label" placeholder="Text" size="large" />
            </div>
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
              <TextField label="Normal" placeholder="Text" />
            </div>
            <div>
              <TextField label="Valid" placeholder="Text" valid />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div>
              <TextField label="Required" placeholder="Text" required />
            </div>
            <div>
              <TextField
                label="Invalid"
                placeholder="Text"
                error="Error message"
              />
            </div>
          </div>
        </div>

        {/* Hover States */}
        <TypographyH3 className="mb-4">Hover</TypographyH3>
        <div className="p-6 border rounded-lg bg-gray-50 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <TextField
                label="Normal"
                placeholder="Text"
                className="hover:bg-gray-100"
              />
            </div>
            <div>
              <TextField
                label="Valid"
                placeholder="Text"
                valid
                className="hover:bg-gray-100"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div>
              <TextField
                label="Required"
                placeholder="Text"
                required
                className="hover:bg-gray-100"
              />
            </div>
            <div>
              <TextField
                label="Invalid"
                placeholder="Text"
                error="Error message"
                className="hover:bg-gray-100"
              />
            </div>
          </div>
        </div>

        {/* Active States */}
        <TypographyH3 className="mb-4">Active</TypographyH3>
        <div className="p-6 border rounded-lg bg-gray-50 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <TextField label="Normal" placeholder="Text" autoFocus />
            </div>
            <div>
              <TextField label="Valid" placeholder="Text" valid />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div>
              <TextField label="Required" placeholder="Text" required />
            </div>
            <div>
              <TextField
                label="Invalid"
                placeholder="Text"
                error="Error message"
              />
            </div>
          </div>
        </div>

        {/* Disabled States */}
        <TypographyH3 className="mb-4">Disabled</TypographyH3>
        <div className="p-6 border rounded-lg bg-gray-50">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <TextField label="Normal" placeholder="Text" disabled />
            </div>
            <div>
              <TextField
                label="Required"
                placeholder="Text"
                disabled
                required
              />
            </div>
          </div>
        </div>
      </section>

      {/* With Icons */}
      <section className="mb-12">
        <TypographyH2 className="mb-4">With Icons</TypographyH2>
        <div className="p-6 border rounded-lg bg-gray-50">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <TextField
                label="Search"
                placeholder="Search..."
                leftIcon={<Search className="h-4 w-4 text-gray-500" />}
              />
            </div>
            <div>
              <TextField
                label="With Validation"
                placeholder="Text"
                rightIcon={<Check className="h-4 w-4 text-green-500" />}
              />
            </div>
          </div>
        </div>
      </section>

      {/* With Prefix/Suffix Text */}
      <section className="mb-12">
        <TypographyH2 className="mb-4">With Prefix/Suffix</TypographyH2>
        <div className="p-6 border rounded-lg bg-gray-50">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <TextField label="Amount" placeholder="0.00" prefixText="$" />
            </div>
            <div>
              <TextField label="Weight" placeholder="150" suffixText="kg" />
            </div>
          </div>
        </div>
      </section>

      {/* Password Toggle */}
      <section className="mb-12">
        <TypographyH2 className="mb-4">Password Field</TypographyH2>
        <div className="p-6 border rounded-lg bg-gray-50">
          <div className="mb-8 max-w-lg">
            <TextField
              label="Password"
              placeholder="Enter password"
              type="password"
              showPasswordToggle={true}
            />
          </div>
        </div>
      </section>

      {/* Character Limit */}
      <section className="mb-12">
        <TypographyH2 className="mb-4">Character Limit</TypographyH2>
        <div className="p-6 border rounded-lg bg-gray-50">
          <div className="mb-8 max-w-lg">
            <TextField
              label="Username"
              placeholder="Type here to see character count..."
              characterLimit={20}
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
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <TextField
                        placeholder="Enter your email"
                        leftIcon={<Search className="h-4 w-4 text-gray-500" />}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      We'll never share your email with anyone.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <TextField
                        placeholder="Enter your password"
                        type="password"
                        showPasswordToggle={true}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Password must be at least 8 characters.
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

      {/* Input Types */}
      <section className="mb-12">
        <TypographyH2 className="mb-4">Input Types</TypographyH2>
        <div className="p-6 border rounded-lg bg-gray-50">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <TextField label="Number" placeholder="0" type="number" />
            </div>
            <div>
              <TextField label="Date" type="date" />
            </div>
            <div>
              <TextField
                label="Email"
                placeholder="user@example.com"
                type="email"
              />
            </div>
            <div>
              <TextField
                label="URL"
                placeholder="https://example.com"
                type="url"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TextFieldPage;
