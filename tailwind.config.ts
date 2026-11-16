import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        forest: "#052E15",
        corporate: "#0B3024",
        midgreen: "#124334",
        accentgreen: "#174F3E",
        copper: "#9B521A",
        copperlight: "#E2BD9D",
        ivory: "#FCFBF8",
        sand: "#F6F4EF",
        ink: "#19342B",
        muted: "#687770",
        line: "#DDDCD3",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"],
        heading: ["var(--font-manrope)", "sans-serif"],
        editorial: ["var(--font-instrument-serif)", "serif"],
      },
      letterSpacing: {
        institutional: "0.12em",
      },
    },
  },
};

export default config;
