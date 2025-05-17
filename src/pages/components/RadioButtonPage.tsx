import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";

const RadioButtonPage = () => {
  const [selectedValue, setSelectedValue] = useState("option1");
  const [multipleValues, setMultipleValues] = useState({
    group1: "option1",
    group2: "option1",
  });

  const form = useForm({
    defaultValues: {
      featureToggle: "option1",
      radioSelection: "option1",
      desktopOption: "option1",
      mobileOption: "option1",
    },
  });

  return (
    <div className="container max-w-4xl py-10">
      <h1 className="text-3xl font-bold mb-8">Radio Button</h1>

      {/* Basic Radio Buttons */}
      <section className="radio-group-demo-section">
        <h2 className="text-xl font-semibold mb-4">Basic Radio Button</h2>
        <RadioGroup defaultValue="option1" className="gap-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option1" id="option1" />
          </div>
        </RadioGroup>
      </section>

      {/* Radio Button with Label */}
      <section className="radio-group-demo-section">
        <h2 className="text-xl font-semibold mb-4">Radio Button with Label</h2>
        <RadioGroup defaultValue="option1" className="gap-4">
          <div className="flex items-center space-x-2">
            <span className="text-pink-500">icon</span>
            <RadioGroupItem value="option1" id="r-option1" />
          </div>
        </RadioGroup>
      </section>

      {/* Selected & Not Selected Radio Buttons */}
      <section className="radio-group-demo-section">
        <h2 className="text-xl font-semibold mb-4">
          Selected & Not Selected States
        </h2>
        <RadioGroup value={selectedValue} onValueChange={setSelectedValue}>
          <div className="flex flex-col gap-4">
            <div className="radio-group-with-text">
              <RadioGroupItem value="option1" id="r-option2" />
              <Label htmlFor="r-option2" className="text-gray-500">
                not selected
              </Label>
            </div>
            <div className="radio-group-with-text">
              <RadioGroupItem value="option2" id="r-option3" />
              <Label htmlFor="r-option3" className="text-pink-500">
                selected (checked)
              </Label>
            </div>
          </div>
        </RadioGroup>
      </section>

      {/* Radio Button Group */}
      <section className="radio-group-demo-section">
        <h2 className="text-xl font-semibold mb-4">Radio Button Group</h2>
        <RadioGroup defaultValue="option2" className="flex gap-8">
          <div className="flex items-center">
            <RadioGroupItem value="option1" id="r-option4" />
          </div>
          <div className="flex items-center">
            <RadioGroupItem value="option2" id="r-option5" />
          </div>
        </RadioGroup>
      </section>

      {/* Different Sizes */}
      <section className="radio-group-demo-section">
        <h2 className="text-xl font-semibold mb-4">Different Sizes</h2>
        <div className="flex gap-8">
          <RadioGroup defaultValue="option1">
            <div className="flex items-center">
              <RadioGroupItem
                value="option1"
                id="r-option6"
                className="h-5 w-5"
              />
            </div>
          </RadioGroup>
          <RadioGroup defaultValue="option1">
            <div className="flex items-center">
              <RadioGroupItem
                value="option1"
                id="r-option7"
                className="h-4 w-4"
              />
            </div>
          </RadioGroup>
        </div>
      </section>

      {/* Disabled State */}
      <section className="radio-group-demo-section">
        <h2 className="text-xl font-semibold mb-4">Disabled State</h2>
        <RadioGroup defaultValue="option1">
          <div className="flex items-center opacity-50">
            <RadioGroupItem value="option1" id="r-option8" disabled />
          </div>
        </RadioGroup>
      </section>

      {/* With Number Value */}
      <section className="radio-group-demo-section">
        <h2 className="text-xl font-semibold mb-4">With Number</h2>
        <RadioGroup defaultValue="option1">
          <div className="radio-group-with-number">
            <span className="radio-number">24</span>
            <RadioGroupItem value="option1" id="r-option9" />
            <span className="radio-number ml-2">20</span>
          </div>
        </RadioGroup>
      </section>

      {/* Multi-line Label */}
      <section className="radio-group-demo-section">
        <h2 className="text-xl font-semibold mb-4">Multiline Label</h2>
        <div className="flex">
          <div className="flex flex-col">
            <RadioGroup defaultValue="option1">
              <div className="flex items-center mb-1">
                <RadioGroupItem value="option1" id="r-multiline1" />
                <Label htmlFor="r-multiline1" className="ml-2">
                  Label
                </Label>
              </div>
            </RadioGroup>
            <div className="text-pink-500 text-sm ml-6">4</div>
          </div>

          <div className="border border-dashed border-pink-500 ml-4 p-4 max-w-sm relative">
            <span className="absolute -top-2 bg-[#f9f9f9] px-1 text-pink-500 text-sm">
              Label so long that goes not only on two lines but 3!
            </span>
          </div>
        </div>
      </section>

      {/* Feature Toggle */}
      <section className="radio-group-demo-section">
        <h2 className="text-xl font-semibold mb-4">Feature Toggle</h2>
        <RadioGroup defaultValue="enabled">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="enabled" id="feature-toggle" />
            <Label htmlFor="feature-toggle">Enable feature</Label>
          </div>
        </RadioGroup>
      </section>

      {/* Radio Items Group */}
      <section className="radio-group-demo-section">
        <h2 className="text-xl font-semibold mb-4">Radio Items Group</h2>
        <div className="relative">
          <RadioGroup defaultValue="enabled" className="radio-items-container">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="enabled" id="feature-toggle-1" />
              <Label htmlFor="feature-toggle-1">Enable feature</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="disabled-1" id="feature-toggle-2" />
              <Label htmlFor="feature-toggle-2">Enable feature</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="disabled-2" id="feature-toggle-3" />
              <Label htmlFor="feature-toggle-3">Enable feature</Label>
            </div>
          </RadioGroup>
        </div>
      </section>

      {/* Standalone Feature Toggle */}
      <section className="radio-group-demo-section">
        <h2 className="text-xl font-semibold mb-4">
          Standalone Feature Toggle
        </h2>
        <RadioGroup defaultValue="enabled">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="enabled" id="standalone-toggle" />
            <Label htmlFor="standalone-toggle">Enable feature</Label>
          </div>
        </RadioGroup>
      </section>

      {/* Horizontal Radio Group */}
      <section className="radio-group-demo-section">
        <h2 className="text-xl font-semibold mb-4">Horizontal Radio Group</h2>
        <RadioGroup className="radio-group-horizontal" defaultValue="option1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option1" id="horizontal-1" />
            <Label htmlFor="horizontal-1">Enable feature</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option2" id="horizontal-2" />
            <Label htmlFor="horizontal-2">Enable feature</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option3" id="horizontal-3" />
            <Label htmlFor="horizontal-3">Enable feature</Label>
          </div>
        </RadioGroup>
      </section>

      {/* Desktop Radio Group */}
      <section className="radio-group-demo-section">
        <h2 className="text-xl font-semibold mb-4">Responsive Radio Groups</h2>
        <div className="flex mb-8">
          <RadioGroup defaultValue="desktop-1" className="flex flex-col gap-3">
            {[1, 2, 3].map((item) => (
              <div key={`desktop-${item}`} className="flex items-center">
                <div className="text-pink-500 mr-1">4</div>
                <RadioGroupItem
                  value={`desktop-${item}`}
                  id={`desktop-${item}`}
                />
                <Label htmlFor={`desktop-${item}`} className="ml-2">
                  Label
                </Label>
              </div>
            ))}
          </RadioGroup>
          <span className="section-label">desktop</span>
        </div>

        <div className="flex">
          <RadioGroup defaultValue="mobile-1" className="flex flex-col gap-3">
            {[1, 2, 3].map((item) => (
              <div key={`mobile-${item}`} className="flex items-center">
                <div className="text-pink-500 mr-1">8</div>
                <RadioGroupItem
                  value={`mobile-${item}`}
                  id={`mobile-${item}`}
                />
                <Label htmlFor={`mobile-${item}`} className="ml-2">
                  Label
                </Label>
              </div>
            ))}
          </RadioGroup>
          <span className="section-label">mobile</span>
        </div>
      </section>

      {/* Multi-select Groups */}
      <section className="radio-group-demo-section">
        <h2 className="text-xl font-semibold mb-4">Multi-select Groups</h2>

        {/* Desktop Multi-select */}
        <div className="multi-select-group mb-8">
          <RadioGroup
            defaultValue="multi-desktop-1"
            className="flex flex-col gap-3"
          >
            {[1, 2, 3].map((item) => (
              <div key={`multi-desktop-${item}`} className="flex items-center">
                <div className="text-pink-500 mr-1">4</div>
                <RadioGroupItem
                  value={`multi-desktop-${item}`}
                  id={`multi-desktop-${item}`}
                />
                <Label htmlFor={`multi-desktop-${item}`} className="ml-2">
                  Label
                </Label>
              </div>
            ))}
          </RadioGroup>
          <span className="section-label">desktop</span>
        </div>

        {/* Mobile Multi-select */}
        <div className="multi-select-group">
          <RadioGroup
            defaultValue="multi-mobile-1"
            className="flex flex-col gap-3"
          >
            {[1, 2, 3].map((item) => (
              <div key={`multi-mobile-${item}`} className="flex items-center">
                <div className="text-pink-500 mr-1">4</div>
                <RadioGroupItem
                  value={`multi-mobile-${item}`}
                  id={`multi-mobile-${item}`}
                />
                <Label htmlFor={`multi-mobile-${item}`} className="ml-2">
                  Label
                </Label>
              </div>
            ))}
          </RadioGroup>
          <span className="section-label">mobile</span>
        </div>
      </section>

      {/* Hit Area Example */}
      <section className="radio-group-demo-section">
        <h2 className="text-xl font-semibold mb-4">Hit Area Example</h2>
        <div className="checkbox-group-area">
          <RadioGroup defaultValue="hit-area-1" className="flex flex-col gap-4">
            {[1, 2, 3].map((item) => (
              <div
                key={`hit-area-${item}`}
                className="checkbox-item-hit-area flex items-center"
              >
                <RadioGroupItem
                  value={`hit-area-${item}`}
                  id={`hit-area-${item}`}
                />
                <Label htmlFor={`hit-area-${item}`} className="ml-2">
                  {item === 1
                    ? "Label"
                    : `Label for this ${item === 3 ? "next line" : "this"}`}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </section>
    </div>
  );
};

export default RadioButtonPage;
