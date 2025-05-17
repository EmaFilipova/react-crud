import React from "react";
import {
  Check,
  ChevronRight,
  CreditCard,
  LogOut,
  PlusCircle,
  Settings,
  Trash,
  User,
} from "lucide-react";
import {
  TypographyH1,
  TypographyH2,
  TypographyP,
} from "@/components/ui/typography";
import { MeatballMenu, MeatballMenuItem } from "@/components/ui/meatball-menu";

export default function MeatballMenuPage() {
  return (
    <div className="container py-10">
      <TypographyH1>Meatball Menu</TypographyH1>
      <TypographyP className="text-muted-foreground mt-2 mb-8">
        A versatile menu component for actions and options.
      </TypographyP>

      <div className="grid gap-8">
        <BasicExample />
        <AdvancedExample />
      </div>
    </div>
  );
}

function BasicExample() {
  const menuItems: MeatballMenuItem[] = [
    {
      label: "Edit",
      onClick: () => console.log("Edit clicked"),
      icon: <Settings size={16} />,
    },
    {
      label: "Duplicate",
      onClick: () => console.log("Duplicate clicked"),
      icon: <PlusCircle size={16} />,
    },
    {
      label: "Archive",
      onClick: () => console.log("Archive clicked"),
      disabled: true,
    },
    {
      type: "separator",
      label: "-",
    },
    {
      label: "Delete",
      onClick: () => console.log("Delete clicked"),
      icon: <Trash size={16} className="text-red-500" />,
    },
  ];

  return (
    <div className="border rounded-lg p-6">
      <TypographyH2>Basic Usage</TypographyH2>
      <TypographyP className="text-muted-foreground mt-2 mb-4">
        A simple menu with icons and a separator.
      </TypographyP>

      <div className="flex justify-end mt-4 border rounded p-4">
        <MeatballMenu items={menuItems} />
      </div>
    </div>
  );
}

function AdvancedExample() {
  const menuItems: MeatballMenuItem[] = [
    {
      label: "Profile",
      icon: <User size={16} />,
      type: "submenu",
      subItems: [
        {
          label: "View Profile",
          onClick: () => console.log("View Profile clicked"),
        },
        {
          label: "Edit Profile",
          onClick: () => console.log("Edit Profile clicked"),
        },
      ],
    },
    {
      label: "Status",
      type: "checkbox",
      checked: true,
      onClick: () => console.log("Status toggled"),
    },
    {
      type: "separator",
      label: "-",
    },
    {
      label: "Theme",
      type: "radio",
      value: "light",
      radioGroup: "theme",
      onClick: () => console.log("Light theme selected"),
    },
    {
      label: "Dark",
      type: "radio",
      value: "dark",
      radioGroup: "theme",
      onClick: () => console.log("Dark theme selected"),
    },
    {
      label: "System",
      type: "radio",
      value: "system",
      radioGroup: "theme",
      onClick: () => console.log("System theme selected"),
    },
    {
      type: "separator",
      label: "-",
    },
    {
      label: "Logout",
      icon: <LogOut size={16} />,
      onClick: () => console.log("Logout clicked"),
    },
  ];

  return (
    <div className="border rounded-lg p-6">
      <TypographyH2>Advanced Usage</TypographyH2>
      <TypographyP className="text-muted-foreground mt-2 mb-4">
        A complex menu with submenu, checkboxes, and radio buttons.
      </TypographyP>

      <div className="flex justify-end mt-4 border rounded p-4">
        <MeatballMenu items={menuItems} />
      </div>
    </div>
  );
}
