import { Playfair_Display, Inter, Hind_Siliguri } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const hindSiliguri = Hind_Siliguri({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["bengali"],
  variable: "--font-bn",
});

export const metadata = {
  title: "Chaity & Joy's Wedding | 🕉️",
  description: "A celebration of love and tradition. You are cordially invited to the wedding of Chaity and Joy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} ${hindSiliguri.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

