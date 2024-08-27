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
        'custom-purple': '#9984d9',
        'custom-hover-purple': '#7356cc',
        'custom-accordion-purple': '#e9d7fa',
        'border-colour': '##d1d5db'
      },
      backgroundColor: {
          'primary': '#e8f4fc',
          
      },
      fontFamily: {
        serif: ['Noto Serif Display', 'serif'],
        sansSerif: ['Moderustic', 'sans-serif']
      },
      animation: {
        "text-reveal": "text-reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s",
      },
      keyframes: {
        "text-reveal": {
          "0%": {
            transform: "translate(0, 100%)",
          },
          "100%": {
            transform: "translate(0, 0)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
