import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "Source Sans Pro", "sans-serif"],
        serif: ["Merriweather", "serif"],
        display: ["Inter", "sans-serif"],
        mono: ["Geist Mono", "monospace"],
      },
      spacing: {
        "2": "2px",
        "4": "4px",
        "8": "8px",
        "12": "12px",
        "16": "16px",
        "32": "32px",
        "64": "64px",
      },
      width: {
        "320": "320px",
        "400": "400px",
        "480": "480px",
        "640": "640px",
        "720": "720px",
        "840": "840px",
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "28px",
        "4xl": "36px",
      },
      lineHeight: {
        "14": "14px",
        "16": "16px",
        "17": "17px",
        "20": "20px",
        "24": "24px",
        "26": "26px",
        "32": "32px",
        "36": "36px",
        "40": "40px",
        "44": "44px",
      },
      colors: {
        polaris: {
          purple: {
            100: "#F4F2FF",
            200: "#E3DFFF",
            300: "#B3B3FF",
            400: "#8B87F5",
            500: "#5C53F5",
            600: "#4839D4",
            700: "#3525B3",
            800: "#251992",
            900: "#1A1171",
          },
          gray: {
            100: "#F6F6F7",
            200: "#E4E5E7",
            300: "#C9CCD0",
            400: "#8C9196",
            500: "#6D7175",
            600: "#444950",
            700: "#2C3236",
            800: "#1D2124",
            900: "#0F1111",
          },
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
