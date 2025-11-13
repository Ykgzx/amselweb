// app/layout.tsx
import type { Metadata } from "next";
import { Poppins, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

// === Google Fonts ===
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"], // ใช้ในหัวข้อ
  variable: "--font-poppins",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Chukyo Kasei Kogyo - Perfect Technology Solutions",
  description: "We deliver cutting-edge release agents and innovative solutions for modern manufacturing.",
  keywords: "release agents, pelicoat, antirust, cleaning agents, lubricant, chukyo kasei, amsel",
  openGraph: {
    title: "Chukyo Kasei Kogyo",
    description: "Perfect demanding technologies to solve customer problems.",
    images: ["/images/mascot.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${jakarta.variable}`}>
      <head>
        {/* Preload ฟอนต์สำคัญ */}
        <link
          rel="preload"
          href="/fonts/poppins-v20-latin-700.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>

      <body
        className={`
          ${jakarta.className} 
          font-sans 
          bg-gradient-to-br from-orange-50 via-white to-orange-50 
          text-orange-900 
          min-h-screen
          antialiased
        `}
        
      >
        <Navbar />
        <main className="pt-24">{children}</main>
      </body>

    </html>
  );
}