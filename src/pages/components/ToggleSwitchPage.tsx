import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import {
  TypographyH1,
  TypographyLead,
  TypographyH3,
} from "@/components/ui/typography";

const ToggleSwitchPage = () => {
  return (
    <div className="container max-w-7xl py-10">
      <div className="space-y-8">
        <div>
          <TypographyH1>Toggle Switch</TypographyH1>
          <TypographyLead>
            A control that allows users to switch between two states.
          </TypographyLead>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Toggle Switch States</CardTitle>
            <CardDescription>
              Different states of the toggle switch component.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border border-dashed border-purple-300 p-6 rounded-lg">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="space-y-6">
                  <TypographyH3 className="text-base">Default</TypographyH3>
                  <div className="space-y-4">
                    <div>
                      <Switch label="Label" />
                      <div className="mt-2 text-xs text-gray-500">
                        Unchecked
                      </div>
                    </div>
                    <div>
                      <Switch defaultChecked label="Label" />
                      <div className="mt-2 text-xs text-gray-500">Checked</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <TypographyH3 className="text-base">Hover</TypographyH3>
                  <div className="space-y-4">
                    <div>
                      <Switch label="Label" className="hover:bg-[#a1a1a1]" />
                      <div className="mt-2 text-xs text-gray-500">
                        Hover Unchecked
                      </div>
                    </div>
                    <div>
                      <Switch
                        defaultChecked
                        label="Label"
                        className="hover:bg-[#2e7d32]"
                      />
                      <div className="mt-2 text-xs text-gray-500">
                        Hover Checked
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <TypographyH3 className="text-base">Focus</TypographyH3>
                  <div className="space-y-4">
                    <div>
                      <Switch
                        label="Label"
                        className="ring-2 ring-offset-2 ring-gray-400"
                      />
                      <div className="mt-2 text-xs text-gray-500">
                        Focus Unchecked
                      </div>
                    </div>
                    <div>
                      <Switch
                        defaultChecked
                        label="Label"
                        className="ring-2 ring-offset-2 ring-green-600"
                      />
                      <div className="mt-2 text-xs text-gray-500">
                        Focus Checked
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <TypographyH3 className="text-base">Disabled</TypographyH3>
                  <div className="space-y-4">
                    <div>
                      <Switch disabled label="Label" />
                      <div className="mt-2 text-xs text-gray-500">
                        Disabled Unchecked
                      </div>
                    </div>
                    <div>
                      <Switch disabled defaultChecked label="Label" />
                      <div className="mt-2 text-xs text-gray-500">
                        Disabled Checked
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Interactive Examples</CardTitle>
            <CardDescription>
              Experiment with the toggle switches below.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between max-w-md">
                <span>Notifications</span>
                <Switch />
              </div>
              <div className="flex items-center justify-between max-w-md">
                <span>Dark Mode</span>
                <Switch />
              </div>
              <div className="flex items-center justify-between max-w-md">
                <span>Email Updates</span>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between max-w-md">
                <span>Account Settings (Disabled)</span>
                <Switch disabled />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Usage Examples</CardTitle>
            <CardDescription>
              Common use cases for toggle switches.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-4 space-y-4">
                <h3 className="font-medium">Settings Panel</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Allow Notifications</div>
                      <div className="text-sm text-gray-500">
                        Receive alerts for new messages and updates
                      </div>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Dark Mode</div>
                      <div className="text-sm text-gray-500">
                        Use dark theme for the interface
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Auto-save</div>
                      <div className="text-sm text-gray-500">
                        Automatically save changes
                      </div>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ToggleSwitchPage;
