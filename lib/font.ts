import { Karla, Space_Grotesk } from "next/font/google";

export const KarlaFont = Karla({
  weight: ["200", "400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-Karla",
});
export const Space_GroteskFont = Space_Grotesk({
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-Space_Grotesk",
});
