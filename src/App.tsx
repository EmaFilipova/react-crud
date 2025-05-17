import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AccordionPage from "./components/AccordionPage";
import ButtonPage from "./components/ButtonPage";
import CheckboxPage from "./components/CheckboxPage";
import DateSelectPage from "./components/DateSelectPage";
import AvatarPage from "./components/AvatarPage";
import TooltipPage from "./components/TooltipPage";
import ToggleSwitchPage from "./components/ToggleSwitchPage";
import ToastPage from "./components/ToastPage";
import RadioButtonPage from "./components/RadioButtonPage";
import ModalPage from "./components/ModalPage";
import InlineInfoPage from "./components/InlineInfoPage";
import PillPage from "./components/PillPage";
import SegmentedControlPage from "./components/SegmentedControlPage";
import TextAreaPage from "./components/TextAreaPage";
import TextFieldPage from "./components/TextFieldPage";
import MeatballMenuPage from "./components/meatball-menu";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/components/accordion" element={<AccordionPage />} />
          <Route path="/components/button" element={<ButtonPage />} />
          <Route path="/components/checkbox" element={<CheckboxPage />} />
          <Route path="/components/check-box" element={<CheckboxPage />} />{" "}
          {/* Added this route as an alternative */}
          <Route path="/components/date-select" element={<DateSelectPage />} />
          <Route path="/components/avatar" element={<AvatarPage />} />
          <Route path="/components/tooltip" element={<TooltipPage />} />
          <Route path="/components/toggle" element={<ToggleSwitchPage />} />
          <Route
            path="/components/toggle-switch"
            element={<ToggleSwitchPage />}
          />{" "}
          {/* Alternative route */}
          <Route path="/components/toast" element={<ToastPage />} />
          <Route
            path="/components/radio-button"
            element={<RadioButtonPage />}
          />
          <Route path="/components/radio" element={<RadioButtonPage />} />{" "}
          {/* Alternative route */}
          <Route path="/components/modal" element={<ModalPage />} />
          <Route
            path="/components/inline-info"
            element={<InlineInfoPage />}
          />{" "}
          {/* Added new inline-info route */}
          <Route path="/components/pill" element={<PillPage />} />{" "}
          {/* Added new pill route */}
          <Route
            path="/components/segmented-control"
            element={<SegmentedControlPage />}
          />{" "}
          {/* Added new segmented control route */}
          <Route path="/components/textarea" element={<TextAreaPage />} />{" "}
          {/* Added new textarea route */}
          <Route path="/components/text-area" element={<TextAreaPage />} />{" "}
          {/* Adding hyphenated version of the route */}
          <Route
            path="/components/text-field"
            element={<TextFieldPage />}
          />{" "}
          {/* Added new text field route */}
          <Route
            path="/components/textfield"
            element={<TextFieldPage />}
          />{" "}
          {/* Adding non-hyphenated version of the route */}
          <Route
            path="/components/meatball-menu"
            element={<MeatballMenuPage />}
          />{" "}
          {/* Added meatball menu route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
