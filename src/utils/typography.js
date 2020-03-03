import Typography from "typography"
import fontSize from "./font-sizes"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  blockMarginBottom: 0,
  padding: 0,
  googleFonts: [
    {
      name: "PT Sans",
      styles: ["400", "700"],
    },
  ],
  headerFontFamily: ["PT Sans"],
  bodyFontFamily: ["PT Sans"],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    p: {
      fontWeight: 400,
    },
    h2: {
      fontSize: fontSize.h1,
      fontWeight: 700,
    },

    h1: {
      // fontSize: fontSize.display4,
      fontWeight: 700,
    },
  }),
})

export default typography
