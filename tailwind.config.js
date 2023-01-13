/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      "white": "#FFFFFF",
      "gray": "#DDDDDD",
      "primary": "#8E00FE",
      "black": "#000000",
      "lightGray": "#BCB7B7",
      "backgroundGray": "#FAFAFA",
      "authPageButtonsBorder": "#BFBFBF",
      "loginLinkPartition": "#D4D4D4",
      "authMethodSwitch": "#F4F5FA",
      "rightSectionGradientBottomColor": "#00224B",
      "red":"red",
      
    }
  },
  plugins: [],
}
