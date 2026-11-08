import type { Config } from "tailwindcss";

// Палитра «Пахта»: кобальт узбекского фарфора, шафран и тёплый крем
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0E1B4D",
        cobalt: "#2340B8",
        saffron: "#F5A524",
        sky: "#DCE5FF",
        cream: "#FFF8EC",
        muted: "#4B5378",
        line: "#4B5A99",
        mist: "#C9D2F2",
      },
      fontFamily: {
        sans: ["var(--font-rubik)", "system-ui", "sans-serif"],
        hand: ["var(--font-caveat)", "cursive"],
      },
      boxShadow: {
        sticker: "4px 4px 0 #0E1B4D",
        "sticker-sm": "3px 3px 0 #0E1B4D",
        "sticker-md": "5px 5px 0 #0E1B4D",
        "sticker-lg": "6px 6px 0 #0E1B4D",
        "sticker-hover": "6px 6px 0 #0E1B4D",
        cobalt: "8px 8px 0 #2340B8",
      },
    },
  },
  plugins: [],
};

export default config;
