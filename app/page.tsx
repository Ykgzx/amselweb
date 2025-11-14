'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Handshake, Leaf, Phone, Mail, MapPin, ChevronRight, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Home() {
  // === สไลด์แบนเนอร์ ===
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    {
      img: "/images/banner1.jpg",
      title: "Innovative Mold Release Agents",
      subtitle: "Boost production efficiency, reduce waste",
      cta: "View Products",
      href: "/#product"
    },
    {
      img: "/images/banner2.png",
      title: "High-Quality Rust Preventives",
      subtitle: "Long-lasting protection for your workpieces",
      cta: "Contact Us",
      href: "mailto:info@amsel.co.th"
    },
    {
      img: "/images/banner3.png",
      title: "Special Formula Cleaning Agents",
      subtitle: "Deep clean, safe for machinery",
      cta: "Learn More",
      href: "/law"
    },
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [banners.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % banners.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-sky-200 via-40% to-sky-400 font-sans text-blue-900 overflow-x-hidden relative">

      {/* ==========================================
          1. GRADIENT ลอย ๆ
      ========================================== */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400/20 via-transparent to-sky-300/20"></div>
        <div className="absolute top-0 -left-40 w-96 h-96 rounded-full bg-gradient-to-br from-blue-300/30 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 -right-40 w-96 h-96 rounded-full bg-gradient-to-tl from-sky-400/30 to-transparent blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-white/10 to-transparent blur-3xl"></div>
      </div>

      {/* ==========================================
          SLIDE BANNER (เพิ่มใหม่)
      ========================================== */}
      <section className="relative h-screen md:h-[400px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <Image
              src={banners[currentSlide].img}
              alt={banners[currentSlide].title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-transparent to-transparent" />
            
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="max-w-2xl text-white"
                >
                  <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
                    {banners[currentSlide].title}
                  </h1>
                  <p className="text-lg md:text-xl mb-8 text-sky-100">
                    {banners[currentSlide].subtitle}
                  </p>
                  <Link
                    href={banners[currentSlide].href}
                    className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-sky-50 transition-all duration-300"
                  >
                    {banners[currentSlide].cta}
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === currentSlide ? "bg-white w-8" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ==========================================
          HERO (เลื่อนลงมาเล็กน้อย)
      ========================================== */}
      <section className="relative pt-10 pb-15">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Text Card */}
            <div className="order-2 lg:order-1">
              <div className="backdrop-blur-xl bg-white/85 border border-blue-100/50 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-300">
                <h1 className="text-5xl lg:text-6xl font-black text-blue-900 leading-tight mb-6">
                  We deliver <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">perfect technology</span>
                </h1>
                <p className="text-xl text-blue-700 font-medium">
                  Solving customer challenges with innovative release agents.
                </p>
              </div>
            </div>

            {/* Mascot */}
            <div className="flex justify-center order-1 lg:order-2">
              <div className="relative">
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, -20, 20, -20, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="p-6 rounded-3xl hover:shadow-3xl transition-shadow"
                >
                  <Image
                    src="/images/mascot.png"
                    alt="Mascot"
                    width={360}
                    height={360}
                    className="object-contain drop-shadow-xl"
                    priority
                  />
                </motion.div>

                <motion.div
                  className="absolute top-24 right-8 w-20 h-20 bg-[url('/images/mascot-arm.png')] bg-contain bg-no-repeat origin-bottom-left"
                  animate={{ rotate: [0, -30, 0, -30, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-blue-300/40 to-transparent blur-3xl scale-110 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ส่วนที่เหลือ (Features, Products, Footer) ยังเหมือนเดิม */}
      {/* ... (คัดลอกส่วนอื่น ๆ ต่อจากโค้ดเดิม) ... */}

      {/* ==========================================
          FEATURES
      ========================================== */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {[
            { icon: Sparkles, title: "Customer-Driven Innovation", desc: "Developed from real feedback to boost yield." },
            { icon: Handshake, title: "Tailored Collaboration", desc: "Custom solutions with in-house testing." }
          ].map((f, i) => (
            <div key={i} className="group">
              <div className="bg-white/85 backdrop-blur-lg border border-blue-100/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-start gap-5">
                  <div className="p-4 bg-gradient-to-br from-blue-100 to-sky-50 rounded-2xl group-hover:from-blue-500 group-hover:to-sky-400 transition-all duration-300">
                    <f.icon className="w-9 h-9 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-blue-900 mb-3 group-hover:text-blue-600 transition">
                      {f.title}
                    </h2>
                    <p className="text-blue-700">{f.desc}</p>
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
      <section id="product" className="scroll-mt-24 py-24 bg-gradient-to-t from-transparent to-sky-50/30 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-blue-900 mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">Product Line</span>
            </h2>
            <p className="text-lg text-blue-700 max-w-2xl mx-auto">
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
              <div key={i} className="group cursor-pointer">
                <div className="bg-white/85 backdrop-blur-xl border border-blue-100/50 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  <div className="bg-gradient-to-br from-sky-50 to-white rounded-2xl p-6 mb-6 shadow-inner group-hover:shadow-blue-100 transition flex items-center justify-center h-48 overflow-hidden">
                    <Image
                      src={p.img}
                      alt={p.title}
                      width={220}
                      height={220}
                      className="object-contain group-hover:scale-110 transition duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 group-hover:text-blue-600 text-center transition">
                    {p.title} <span className="text-blue-600">{p.sub}</span>
                  </h3>
                  <p className="text-sm text-blue-600 mt-2 text-center">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          FOOTER
      ========================================== */}
      <footer className="bg-gradient-to-t from-sky-100/50 via-white/50 to-sky-50 py-20 border-t border-blue-200/50 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center md:text-left">
              <div className="inline-flex p-4 bg-blue-100 rounded-full mb-6">
                <Leaf className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent mb-4">
                Quality & Environment
              </h3>
              <p className="text-blue-700 text-sm mb-6">
                ISO 9001 (1999) • ISO 14001 (2004)<br />
                Eco-friendly, high-performance solutions.
              </p>
            </div>

            <div className="bg-white/85 backdrop-blur-xl border border-blue-200/50 rounded-3xl p-8 shadow-xl">
              <h4 className="text-xl font-bold text-blue-600 mb-6 text-center md:text-left">
                Contact Amsel
              </h4>
              <div className="space-y-4 text-sm">
                <a href="tel:+6627362096" className="flex items-center justify-center md:justify-start gap-3 text-blue-700 hover:text-blue-500 group">
                  <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition"><Phone className="w-4 h-4" /></div>
                  <span>02-736-2096-7</span>
                </a>
                <a href="mailto:info@amsel.co.th" className="flex items-center justify-center md:justify-start gap-3 text-blue-700 hover:text-blue-500 group">
                  <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition"><Mail className="w-4 h-4" /></div>
                  <span>info@amsel.co.th</span>
                </a>
                <a href="https://maps.google.com/?q=14+ซอยกรุงเทพกรีฑา+31+ทับช้าง+สะพานสูง+กรุงเทพ" target="_blank" rel="noopener" className="flex items-center justify-center md:justify-start gap-3 text-blue-700 hover:text-blue-500 group">
                  <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition"><MapPin className="w-4 h-4" /></div>
                  <span>14 Soi Krungthep Kreetha 31, Thap Chang Subdistrict, Saphan Sung District, Bangkok 10250, Thailand</span>
                </a>
              </div>
              <div className="mt-6 pt-6 border-t border-blue-200/50 text-center">
                <Link href="/law" className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-500 transition">
                  Law & Safety <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="text-center md:text-right">
              <h4 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent mb-4">
                Chukyo Kasei Kogyo
              </h4>
              <p className="text-blue-700 text-sm mb-6">
                Innovating since 1950.<br />
                Trusted globally.
              </p>
              <p className="text-xs text-blue-600">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}