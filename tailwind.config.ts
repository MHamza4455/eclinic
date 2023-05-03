import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        monts: ["var(--font-monts)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
