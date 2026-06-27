/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#0A0E14",
          panel: "#0F1620",
          raised: "#141C28",
          line: "#1E2A38",
        },
        signal: {
          DEFAULT: "#00FF9C",
          dim: "#00C97C",
          glow: "#00FFB0",
        },
        amber: {
          DEFAULT: "#FFB454",
          dim: "#D99644",
        },
        ice: {
          DEFAULT: "#5CC8FF",
          dim: "#3FA3D9",
        },
        ink: {
          DEFAULT: "#E6EDF3",
          dim: "#8B9AAE",
          faint: "#56657A",
        },
        light: {
          bg: "#F7F8FA",
          panel: "#FFFFFF",
          line: "#E2E6EB",
          ink: "#0F1620",
          dim: "#54606E",
        },
      },
      fontFamily: {
        display: ["JetBrains Mono", "ui-monospace", "monospace"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(94,200,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(94,200,255,0.06) 1px, transparent 1px)",
        "noise": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      boxShadow: {
        glow: "0 0 30px rgba(0,255,156,0.25)",
        "glow-sm": "0 0 12px rgba(0,255,156,0.3)",
        "ice-glow": "0 0 30px rgba(92,200,255,0.25)",
        panel: "0 8px 40px rgba(0,0,0,0.45)",
      },
      animation: {
        blink: "blink 1.1s step-end infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        marquee: "marquee 28s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        blink: {
          "0%, 50%": { opacity: "1" },
          "50.01%, 100%": { opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
