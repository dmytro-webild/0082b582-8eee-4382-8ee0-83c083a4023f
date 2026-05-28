import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Open_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Pizzería Nueva Italia | Sabor Auténtico en Lourdes',
  description: 'Descubre Pizzería Nueva Italia en Lourdes, El Salvador. Pizzas artesanales, ingredientes frescos, y el auténtico sabor italiano. ¡Ordena online o visítanos!',
  keywords: ["pizzería Lourdes, pizzas El Salvador, Nueva Italia pizza, pizza artesanal, menú de pizza, delivery pizza Lourdes"],
  openGraph: {
    "title": "Pizzería Nueva Italia",
    "description": "Sabor auténtico en cada rebanada. Tu pizzería favorita en Lourdes, El Salvador.",
    "url": "https://www.pizzerianuevaitalia.com",
    "siteName": "Pizzería Nueva Italia",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/delicious-pizza-traditional-italian-pizza_1328-3980.jpg",
        "alt": "Delicious pepperoni pizza"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Pizzería Nueva Italia",
    "description": "Sabor auténtico en cada rebanada. Tu pizzería favorita en Lourdes, El Salvador.",
    "images": [
      "http://img.b2bpic.net/free-photo/delicious-pizza-traditional-italian-pizza_1328-3980.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const inter = Inter({
  variable: "--font-inter",  subsets: ["latin"],
});
const openSans = Open_Sans({
  variable: "--font-open-sans",  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${inter.variable} ${openSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
