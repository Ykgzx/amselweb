import type { Metadata } from "next";
import { Poppins, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-poppins",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Chukyo Kasei Kogyo - Perfect Technology Solutions",
  description: "Cutting-edge release agents and innovative solutions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html  className={`${poppins.variable} ${jakarta.variable}`}>
      <body className={`${jakarta.className} font-sans bg-orange-50 min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
