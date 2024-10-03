import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#154C36",
        greenP500: "#2C5D4A",
        greenP400: "#436F5E",
        greenP300: "#5B8172",
        green200: "#729386",

        grey: "#DDDDDD",
        greyP200: "#EEEEEE",
        greyP300: "#CCCCCC",
        greyP400: "#BBBBBB",
        greyP500: "#9A9A9A",

        white: "#fff",

        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
