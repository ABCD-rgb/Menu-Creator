/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b0f1c",
        ember: "#ff6b4a",
        gold: "#f4c95d",
        slate: "#0f172a",
        slateDark: "#111827",
        cloud: "#f7f7ff",
        sky: "#e6f4ff",
        aqua: "#38bdf8",
        lime: "#a3e635",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Space Grotesk", "sans-serif"],
      },
      boxShadow: {
        glow: "0 20px 40px rgba(255, 122, 89, 0.2)",
      },
      backgroundImage: {
        hero:
          "radial-gradient(circle at top, rgba(56, 189, 248, 0.35), transparent 60%), linear-gradient(135deg, #f7f7ff 0%, #e6f4ff 45%, #ffffff 100%)",
        highlight:
          "radial-gradient(circle at 20% 20%, rgba(244, 201, 93, 0.25), transparent 45%), radial-gradient(circle at 80% 10%, rgba(56, 189, 248, 0.2), transparent 50%)",
      },
    },
  },
  plugins: [],
};
