import type { Metadata, Viewport } from "next";
import { Brygada_1918, Figtree } from "next/font/google";
import { asset } from "./asset";
import "./globals.css";

const f_bry = Brygada_1918({ variable: "--f-bry", subsets: ["latin"], weight: ["400", "500"], style: ["normal", "italic"], display: "swap" });
const f_fig = Figtree({ variable: "--f-fig", subsets: ["latin"], weight: ["400", "500", "600"], display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Shizuka Luxury | Sell your luxury pieces privately in Dubai",
  description:
    "Get cash for your handbags, watches and jewellery within 72 hours. Shizuka collects, authenticates and gathers private offers on your behalf.",
  openGraph: {
    title: "Shizuka Luxury",
    description: "A private way to sell your handbags, watches and jewellery in Dubai. Cash within 72 hours.",
    images: [{ url: asset("/images/cat-watches-sq.jpg"), width: 1000, height: 1000, alt: "A steel chronograph with a white dial on a wrist, resting on dark marble" }],
    locale: "en_GB",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#4A0F17",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${f_bry.variable} ${f_fig.variable}`}>
      <body>{children}</body>
    </html>
  );
}
