import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],

  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1300px",
      },
      colors: {
        main: "#028a8a",
        main2: "#1a5555",
        "body-bg": "#0d1117",
        "body-bg2": "#1b1f2a",
        "white-text": "#c6d2e0",
        "white-text2": "#eef6fe",
      },
      keyframes: {
        "move-up-right": {
          "0%": { translate: "0 0" },
          "100%": { translate: "5px -3px" },
        },
        "move-up-down": {
          "0%": { translate: "0 -3px" },
          "100%": { translate: "0 3px" },
        },
        move: {
          "0%": { translate: "0 0px" },
          "33%": { translate: "0 -15px" },
          "66%": { translate: "0 15px" },
          "100%": { translate: "0 0px" },
        },
        rotate: {
          "0%": { transform: "translate(-50%, -50%) rotate(0deg)" },
          "100%": { transform: "translate(-50%, -50%) rotate(360deg)" },
        },
        "show-nav": {
          "0%": { bottom: "-180px", opacity: "0" },
          "100%": { bottom: "20px", opacity: "1" },
        },
        "hide-nav": {
          "0%": { bottom: "20px", opacity: "1" },
          "100%": { bottom: "-180px", opacity: "0" },
        },
        modal: {
          "0%": { translate: "0 -60px" },
          "100%": { translate: "0 0px" },
        },
        shape: {
          "0%": { translate: "0 -10px", rotate: "0deg", scale: ".8" },
          "25%": { translate: "-10px 0" },
          "50%": { translate: "0 10px" },
          "75%": { translate: "10px 0" },
          "100%": { translate: "0 -10px", rotate: "360deg", scale: "1" },
        },
      },
      animation: {
        "move-up-right": "move-up-right 0.6s infinite",
        "move-up-down": "move-up-down 0.6s infinite",
        move: "move 8s linear infinite",
        rotate: "rotate 25s linear infinite",
        rotate2: "rotate 50s linear infinite",
        "show-nav": "show-nav .5s ease-out",
        "hide-nav": "hide-nav .5s ease-out",
        modal: "modal .3s ease-in-out",
        shape: "shape 50s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
