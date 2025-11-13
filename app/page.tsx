// app/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Handshake, Package, Leaf, Phone, Mail, MapPin, ChevronRight, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 font-sans text-orange-900 overflow-x-hidden">

      {/* ==========================================
          HERO - ส้ม-ขาว ลอย ๆ (CSS Animation)
      ========================================== */}
      <section className="relative overflow-hidden pt-10 pb-15">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/30 via-white to-orange-50/30"></div>
        <div className="absolute top-20 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-orange-300/40 to-orange-500/20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-orange-200/30 to-transparent blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Card */}
            <div className="order-2 lg:order-1 animate-fadeIn animation-delay-200">
              <div className="backdrop-blur-xl bg-white/80 border border-orange-100 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-300">
                <h1 className="text-5xl lg:text-6xl font-black text-orange-900 leading-tight mb-6">
                  We deliver <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">perfect technology</span>
                </h1>
                <p className="text-xl text-orange-700 font-medium">
                  Solving customer challenges with innovative release agents.
                </p>
              </div>
            </div>

            {/* Mascot */}
            <div className="flex justify-center order-1 lg:order-2">
              <div className="relative">
                <div className="animate-float">
                  <div className="p-6 bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-orange-100">
                    <Image
                      src="/images/mascot.png"
                      alt="Mascot"
                      width={360}
                      height={360}
                      className="object-contain drop-shadow-xl hover:scale-105 transition duration-300"
                      priority
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-orange-300/40 to-transparent blur-3xl scale-110 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          FEATURES
      ========================================== */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {[
            { icon: Sparkles, title: "Customer-Driven Innovation", desc: "Developed from real feedback to boost yield." },
            { icon: Handshake, title: "Tailored Collaboration", desc: "Custom solutions with in-house testing." }
          ].map((f, i) => (
            <div
              key={i}
              className={`group animate-fadeIn animation-delay-${400 + i * 200}`}
            >
              <div className="bg-white/80 backdrop-blur-lg border border-orange-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-start gap-5">
                  <div className="p-4 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl group-hover:from-orange-500 group-hover:to-orange-400 transition-all duration-300">
                    <f.icon className="w-9 h-9 text-orange-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-orange-900 mb-3 group-hover:text-orange-600 transition">
                      {f.title}
                    </h2>
                    <p className="text-orange-700">{f.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==========================================
          PRODUCTS
      ========================================== */}
      <section id="product" className="scroll-mt-24 py-24 bg-gradient-to-t from-white to-orange-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn animation-delay-800">
            <h2 className="text-4xl lg:text-5xl font-black text-orange-900 mb-4">
              Our <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">Product Line</span>
            </h2>
            <p className="text-lg text-orange-700 max-w-2xl mx-auto">
              Premium solutions trusted worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { img: "/images/categories/Pelicoat.jpg", title: "Pelicoat", sub: "Release Agents", desc: "For thermoplastic resin" },
              { img: "/images/categories/AntirustAgents.webp", title: "Antirust", sub: "Agents", desc: "Protection & Care" },
              { img: "/images/categories/CleaningAgents.png", title: "Cleaning", sub: "Agents", desc: "High efficiency" },
              { img: "/images/categories/Lubricant.png", title: "Lubricants", sub: "& Others", desc: "Specialized solutions" }
            ].map((p, i) => (
              <div
                key={i}
                className={`group animate-fadeIn animation-delay-${900 + i * 100}`}
              >
                <div className="bg-white/80 backdrop-blur-xl border border-orange-100 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col transform hover:-translate-y-2">
                  <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 mb-6 shadow-inner group-hover:shadow-orange-100 transition-all flex items-center justify-center h-48 overflow-hidden">
                    <Image 
                      src={p.img} 
                      alt={p.title} 
                      width={220} 
                      height={220} 
                      className="object-contain group-hover:scale-110 transition duration-300" 
                    />
                  </div>
                  <h3 className="text-xl font-bold text-orange-900 group-hover:text-orange-600 text-center transition">
                    {p.title} <span className="text-orange-600">{p.sub}</span>
                  </h3>
                  <p className="text-sm text-orange-600 mt-2 text-center">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          FOOTER - ส้ม-ขาว + Amsel Contact
      ========================================== */}
      <footer className="bg-gradient-to-t from-orange-50 via-white to-orange-50 py-20 border-t border-orange-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            {/* ISO & Brand */}
            <div className="text-center md:text-left animate-fadeIn animation-delay-1400">
              <div className="inline-flex p-4 bg-orange-100 rounded-full mb-6">
                <Leaf className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-4">
                Quality & Environment
              </h3>
              <p className="text-orange-700 text-sm mb-6">
                ISO 9001 (1999) • ISO 14001 (2004)<br />
                Eco-friendly, high-performance solutions.
              </p>
            </div>

            {/* Amsel Contact */}
            <div className="bg-white/80 backdrop-blur-xl border border-orange-200 rounded-3xl p-8 shadow-xl animate-fadeIn animation-delay-1500">
              <h4 className="text-xl font-bold text-orange-600 mb-6 text-center md:text-left">
                Contact Amsel
              </h4>
              <div className="space-y-4 text-sm">
                <a href="tel:+6627362096" className="flex items-center justify-center md:justify-start gap-3 text-orange-700 hover:text-orange-500 group">
                  <div className="p-2 bg-orange-100 rounded-lg group-hover:bg-orange-200 transition"><Phone className="w-4 h-4" /></div>
                  <span>02-736-2096-7</span>
                </a>
                <a href="mailto:info@amsel.co.th" className="flex items-center justify-center md:justify-start gap-3 text-orange-700 hover:text-orange-500 group">
                  <div className="p-2 bg-orange-100 rounded-lg group-hover:bg-orange-200 transition"><Mail className="w-4 h-4" /></div>
                  <span>info@amsel.co.th</span>
                </a>
                <a href="https://maps.google.com/?q=14+ซอยกรุงเทพกรีฑา+31+ทับช้าง+สะพานสูง+กรุงเทพ" target="_blank" rel="noopener" className="flex items-center justify-center md:justify-start gap-3 text-orange-700 hover:text-orange-500 group">
                  <div className="p-2 bg-orange-100 rounded-lg group-hover:bg-orange-200 transition"><MapPin className="w-4 h-4" /></div>
                  <span>14 ซอยกรุงเทพกรีฑา 31 แขวงทับช้าง เขตสะพานสูง กรุงเทพฯ 10250</span>
                </a>
              </div>
              <div className="mt-6 pt-6 border-t border-orange-200 text-center">
                <Link href="/law" className="inline-flex items-center gap-2 text-sm text-orange-600 hover:text-orange-500 transition">
                  Law & Safety <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Company */}
            <div className="text-center md:text-right animate-fadeIn animation-delay-1600">
              <h4 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-4">
                Chukyo Kasei Kogyo
              </h4>
              <p className="text-orange-700 text-sm mb-6">
                Innovating since 1950.<br />
                Trusted globally.
              </p>
              <p className="text-xs text-orange-600">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}