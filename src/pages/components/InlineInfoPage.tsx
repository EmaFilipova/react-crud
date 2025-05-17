import React from "react";
import { DateSelect } from "@/components/date-select/DateSelect";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { DateRangePicker } from "@/components/date-select/DateRangePicker";
import { monthSelectOptions } from "@/components/date-select/constants";

const DateSelectPage: React.FC = () => {
  return (
    <div className="container py-10 max-w-5xl mx-auto">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Date select</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Date Select is a component used for choosing calendar dates. It
            enhances data entry by allowing users to either manually input a
            date or select one from a dropdown calendar. Date Select supports
            different use cases such as filtering and scheduling. It can
            visually indicate required formats, valid or invalid inputs, and can
            adapt to various sizes and alignments to fit different UI contexts.
          </p>
        </div>

        <Separator />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Basic Date Select</CardTitle>
              <CardDescription>
                The default date select component with a calendar dropdown.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Creation Date
                </label>
                <DateSelect label="Creation Date" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>With Month/Year Navigation</CardTitle>
              <CardDescription>
                Date select with month and year navigation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Creation Date
                </label>
                <DateSelect showMonthYearPicker label="Creation Date" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Date Range Picker</CardTitle>
              <CardDescription>
                Select a date range with start and end dates.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DateRangePicker
                startLabel="Start Date"
                endLabel="Withdrawal Date"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Validation States</CardTitle>
              <CardDescription>
                Examples of different validation states.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Valid Date
                </label>
                <DateSelect label="Creation Date" state="valid" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Invalid Date
                </label>
                <DateSelect
                  label="Creation Date"
                  state="error"
                  errorMessage="Please select a valid date"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Disabled Date
                </label>
                <DateSelect label="Creation Date" disabled />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Different Sizes</CardTitle>
              <CardDescription>
                Date select component in different sizes.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Small
                </label>
                <DateSelect label="Creation Date" size="sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Medium (Default)
                </label>
                <DateSelect label="Creation Date" size="md" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Large
                </label>
                <DateSelect label="Creation Date" size="lg" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Custom Format</CardTitle>
              <CardDescription>
                Date select with custom date formats.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date with Day
                </label>
                <DateSelect label="Creation Date" dateFormat="E, d MMM yyyy" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date with Time
                </label>
                <DateSelect
                  label="Creation Date"
                  dateFormat="d MMM yyyy, HH:mm"
                  showTimeSelect
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DateSelectPage;
