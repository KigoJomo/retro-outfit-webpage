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
        'white': 'var(--color-white)',
        'light-green': 'var(--color-light-green)',
        'black': 'var(--color-black)',
      },
    },
  },
  plugins: [],
};
export default config;
