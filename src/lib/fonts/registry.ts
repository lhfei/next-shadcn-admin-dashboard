import {
  DM_Sans,
  Gabriela,
  Geist,
  Geist_Mono,
  Great_Vibes,
  Inter,
  Manrope,
  Nunito,
  Outfit,
  Plus_Jakarta_Sans,
  Poppins,
  Roboto,
} from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const gabriela = Gabriela({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gabriela",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
});

const alibaba = localFont({
  src: [
    {
      path: "../../../public/assets/fonts/AlibabaPuHuiTi-3-35-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../../public/assets/fonts/AlibabaPuHuiTi-3-45-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/assets/fonts/AlibabaPuHuiTi-3-55-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/assets/fonts/AlibabaPuHuiTi-3-65-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/assets/fonts/AlibabaPuHuiTi-3-75-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../../public/assets/fonts/AlibabaPuHuiTi-3-85-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/assets/fonts/AlibabaPuHuiTi-3-95-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../../public/assets/fonts/AlibabaPuHuiTi-3-105-Heavy.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../../public/assets/fonts/AlibabaPuHuiTi-3-115-Black.ttf",
      weight: "950",
      style: "normal",
    },
  ],
  variable: "--font-alibaba",
});

export const fontRegistry = {
  inter: {
    label: "Inter",
    font: inter,
  },
  alibaba: {
    label: "Alibaba PuHuiTi",
    font: alibaba,
  },
  roboto: {
    label: "Roboto",
    font: roboto,
  },
  poppins: {
    label: "Poppins",
    font: poppins,
  },
  geist: {
    label: "Geist",
    font: geist,
  },
  geistMono: {
    label: "Geist Mono",
    font: geistMono,
  },
  jakarta: {
    label: "Plus Jakarta Sans",
    font: jakarta,
  },
  nunito: {
    label: "Nunito",
    font: nunito,
  },
  gabriela: {
    label: "Gabriela",
    font: gabriela,
  },
  outfit: {
    label: "Outfit",
    font: outfit,
  },
  manrope: {
    label: "Manrope",
    font: manrope,
  },
  dmSans: {
    label: "DM Sans",
    font: dmSans,
  },
  greatVibes: {
    label: "Great Vibes",
    font: greatVibes,
  },
} as const;

export type FontKey = keyof typeof fontRegistry;

export const fontVars = (Object.values(fontRegistry) as Array<(typeof fontRegistry)[FontKey]>)
  .map((f) => f.font.variable)
  .join(" ");

export const fontOptions = (Object.entries(fontRegistry) as Array<[FontKey, (typeof fontRegistry)[FontKey]]>).map(
  ([key, f]) => ({
    key,
    label: f.label,
    variable: f.font.variable,
  }),
);
