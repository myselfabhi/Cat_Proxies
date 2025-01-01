import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        giest: ["Giest", "sans-serif"],
        sora: ["Sora", "sans-serif"],
        satoshi: ['"Satoshi Variable"', "sans-serif"],
      },
      boxShadow: {
        soft: "0px 3px 8px -1px #0000000D",
        extrasoft: "4px 4px 16px 2px #00000014",
        mid: "6px 6px 10.9px 0px #0A0A0A1F",
        deep: "0px 4px 16px 2px #00000014",
        deepest: "0px 4.87px 6.82px 0px rgba(0, 0, 0, 0.14)",
        custom: "-2px 4px 20px 0px rgba(0, 0, 0, 0.12)",
        outline:
          "0px -8px 20.6px 0px rgba(0, 0, 0, 0.02) inset, 0px 2px 7px 0px rgba(0, 0, 0, 0.15)",
        flag: "-304.124px 4.158px 2.027px 0px #FFF inset, 0px 5.198px 7.277px 0px rgba(0, 0, 0, 0.14)",
        pricingCard:
          "0px 5.198px 7.277px 0px rgba(0, 0, 0, 0.14), -10px 4.158px 2.027px 0px #FFF inset",
      },
      gradient: {
        neon: "linear-gradient(286.17deg, #019B83 0%, #18C6AB 100%)",
      },
      cream: {
        "800": "#fdfcfd",
        "900": "#f8fbf9",
      },
      subtitle: {
        500: "#525252",
      },
      color: {
        customDark: "#121118",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
