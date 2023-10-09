/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('./images/background.gif')",
        "lynx-image": "url('./images/lynx.png')",
        "lynx-landing-image": "url('./images/lynxlanding.png')",
        "gif-editor": "url('./images/codeeditor.gif)",
        "workspace-img": "url('./images/spacesimages/workspace.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
