import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import  Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chukyo Kasei Kogyo - Modern Solutions", // ปรับ Title 
  description: "We provide demanding technologies to solve customer problems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* ใช้ bg-slate-50 เป็นสีพื้นหลังหลัก (สีขาวนวลๆ) 
        เพื่อให้ Card ที่เป็นสีขาว (bg-white) ลอยเด่นขึ้นมา 
      */}
      <body className={`${inter.className} bg-slate-50`}><Navbar></Navbar>{children}</body>
    </html>
  );
}