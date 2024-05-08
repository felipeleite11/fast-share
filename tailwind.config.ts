import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: '0.75rem',
        md: '0.81rem',
        lg: '1rem',
        xl: '1.25rem',
        '2xl': '1.5rem'
      }
    },
  },
  plugins: [],
};
export default config;
