const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  jit: true,
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Be Vietnam Pro", ...defaultTheme.fontFamily.sans],
        body: ["Roboto", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
}
