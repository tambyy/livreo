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
        background: "var(--background)",
        foreground: "var(--foreground)",
        "foreground-2": "var(--foreground-2)",
        purple: "var(--purple)",
        "light-purple": "var(--light-purple)",

        "status-to-deliver": "var(--status-to-deliver)",
        "status-waiting": "var(--status-waiting)",
        "status-processing": "var(--status-processing)",
        "status-delivered": "var(--status-delivered)",
        "status-canceled": "var(--status-canceled)",

        "fg-status-to-deliver": "var(--fg-status-to-deliver)",
        "fg-status-waiting": "var(--fg-status-waiting)",
        "fg-status-processing": "var(--fg-status-processing)",
        "fg-status-delivered": "var(--fg-status-delivered)",
        "fg-status-canceled": "var(--fg-status-canceled)",
      },
    },
  },
  plugins: [],
};
export default config;
