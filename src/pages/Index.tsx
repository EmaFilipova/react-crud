import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

const components = [
  { name: "Accordion", path: "/components/accordion" },
  { name: "Accordion Toolbar", path: "/components/accordion-toolbar" },
  { name: "Avatar", path: "/components/avatar" },
  { name: "Button", path: "/components/button" },
  { name: "Content cards", path: "/components/content-cards" },
  { name: "Context menu", path: "/components/context-menu" },
  { name: "Check box", path: "/components/checkbox" }, // Changed from check-box to checkbox
  { name: "Combo-box", path: "/components/combo-box" },
  { name: "Date select", path: "/components/date-select" },
  { name: "Dropdown", path: "/components/dropdown" },
  { name: "Inline info", path: "/components/inline-info" },
  { name: "Main navigation", path: "/components/main-navigation" },
  { name: "Metadata panel", path: "/components/metadata-panel" },
  { name: "Modal", path: "/components/modal" },
  { name: "Notifications", path: "/components/notifications" },
  { name: "Password", path: "/components/password" },
  { name: "Phone number", path: "/components/phone-number" },
  { name: "Pill", path: "/components/pill" },
  { name: "Radio button", path: "/components/radio-button" },
  { name: "Search field", path: "/components/search-field" },
  { name: "Segmented control", path: "/components/segmented-control" },
  { name: "Select box", path: "/components/select-box" },
  { name: "Table", path: "/components/table" },
  { name: "Text area", path: "/components/text-area" },
  { name: "Text field", path: "/components/text-field" },
  { name: "Meatball menu", path: "/components/meatball-menu" },
  { name: "Time select", path: "/components/time-select" },
  { name: "Toast", path: "/components/toast" },
  { name: "Toggle button", path: "/components/toggle-button" },
  { name: "Toggle switch", path: "/components/toggle-switch" },
  { name: "Tooltip", path: "/components/tooltip" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200/80 py-12">
        <div className="container max-w-7xl">
          <h1 className="font-display text-4xl font-semibold text-gray-900 mb-2">
            CUE 5 Design System
          </h1>
          <p className="text-gray-500 text-lg">
            A comprehensive collection of reusable components
          </p>
        </div>
      </header>

      <main className="container max-w-7xl py-16">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {components.map((component) => (
            <Card
              key={component.path}
              className="hover:shadow-md transition-shadow rounded-lg"
              style={{ backgroundColor: "#0552B5", borderRadius: "8px" }}
            >
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  {component.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button
                  asChild
                  className="w-full bg-white text-[#0552B5] hover:bg-gray-100"
                >
                  <Link to={component.path}>View Component</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
