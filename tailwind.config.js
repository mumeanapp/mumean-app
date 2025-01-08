/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Nunito", "sans-serif"]
      },
      colors: {
        primary: {
          50: "#e6f4e6",
          100: "#b0ddb0",
          200: "#8acc8a",
          300: "#54b554",
          400: "#33a633",
          500: "#009000",
          600: "#008300",
          700: "#006600",
          800: "#004f00",
          900: "#003c00",
        },
        grey: {
          50: "#f2f2f2",
          100: "#d8d8d8",
          200: "#c5c5c5",
          300: "#aaaaaa",
          400: "#999999",
          500: "#808080",
          600: "#747474",
          700: "#5b5b5b",
          800: "#464646",
          900: "#363636",
        },
        base: {
          yellow: "#fffbe3",
          green: "#f6ffe3",
          black: "#1e1e1e"
        },
        orange: {
          50: "#fdf6e6",
          200: "#f6d48b",
          400: "#efb535",
          500: "#eba202",
          700: "#a77301",
          900: "#634401",
        },
        red: {
          50: "#f4e6e6",
          200: "#cc8a8a",
          400: "#a63333",
          500: "#900000",
          700: "#660000",
          900: "#3c0000",
        },
      },
      fontSize: {
        "8xl": ["32px", {
          lineHeight: "38px",
          letterSpacing: "-0.025em",
          fontWeight: "800"
        }],
        "7xl": ["24px", {
          lineHeight: "30px",
          letterSpacing: "-0.025em",
          fontWeight: "800"
        }],
        "6xl": ["24px", {
          lineHeight: "28px",
          letterSpacing: "-0.02em",
          fontWeight: "700"
        }],
        "5xl": ["20px", {
          lineHeight: "28px",
          letterSpacing: "-0.015em",
          fontWeight: "700"
        }],
        "4xl": ["20px", {
          lineHeight: "26px",
          letterSpacing: "-0.015em",
          fontWeight: "600"
        }],
        "3xl": ["16px", {
          lineHeight: "20px",
          letterSpacing: "-0.02em",
          fontWeight: "700"
        }],
        "2xl": ["16px", {
          lineHeight: "18px",
          letterSpacing: "-0.01em",
          fontWeight: "500"
        }],
        "xl": ["14px", {
          lineHeight: "16px",
          letterSpacing: "0em",
          fontWeight: "400"
        }],
      },
    },
  },
  plugins: [],
}

