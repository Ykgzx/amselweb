
'use client';

import Image from 'next/image';
import { Sparkles, Handshake, Package, Leaf, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 font-sans text-slate-800 overflow-x-hidden">
      
      {/* ==========================================
          1. HERO SECTION - Modern Glassmorphism
      ========================================== */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/20 via-transparent to-orange-50/30"></div>
        <div className="absolute top-20 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-orange-400/30 to-orange-600/20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-orange-300/20 to-transparent blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1"
            >
              <div className="backdrop-blur-xl bg-white/70 border border-white/30 rounded-3xl p-10 shadow-2xl shadow-orange-100/50">
                <h1 className="text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6">
                  We deliver <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">perfect technology</span>
                </h1>
                <p className="text-xl text-slate-600 font-medium leading-relaxed">
                  Solving customer challenges with cutting-edge release agents and innovative solutions.
                </p>
                
              </div>
            </motion.div>

            {/* Mascot with floating effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center order-1 lg:order-2"
            >
              <div className="relative">
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <div className="p-6 bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-orange-100">
                    <Image
                      src="/images/mascot.png"
                      alt="Mascot"
                      width={360}
                      height={360}
                      className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                      priority
                    />
                  </div>
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-orange-300/40 to-transparent blur-3xl scale-110 -z-10"></div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ==========================================
          2. FEATURES SECTION - Card with Depth
      ========================================== */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {[
            {
              icon: Sparkles,
              title: "Customer-Driven Innovation",
              desc: "Our release agents are developed based on real on-site feedback, ensuring maximum yield and efficiency."
            },
            {
              icon: Handshake,
              title: "Tailored Collaboration",
              desc: "We co-develop custom solutions with in-house testing and on-site validation for guaranteed performance."
            }
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/80 backdrop-blur-lg border border-slate-200/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-start gap-5">
                  <div className="p-4 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl group-hover:from-orange-600 group-hover:to-orange-500 transition-all duration-500">
                    <feature.icon className="w-9 h-9 text-orange-600 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                      {feature.title}
                    </h2>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ==========================================
          3. PRODUCTS SECTION - Modern Grid
      ========================================== */}
      <section className="py-24 bg-gradient-to-t from-white to-orange-50/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              Our <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">Product Line</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Premium solutions trusted by industry leaders worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { img: "/images/categories/Pelicoat.jpg", title: "Pelicoat", subtitle: "Release Agents", desc: "For thermoplastic resin" },
              { img: "/images/categories/AntirustAgents.webp", title: "Antirust", subtitle: "Agents", desc: "Protection & Care" },
              { img: "/images/categories/CleaningAgents.png", title: "Cleaning", subtitle: "Agents", desc: "High efficiency" },
              { img: "/images/categories/Lubricant.png", title: "Lubricants", subtitle: "& Others", desc: "Specialized solutions" }
            ].map((product, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <div className="bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 mb-6 shadow-inner group-hover:shadow-orange-100 transition-all duration-300 flex items-center justify-center h-48 overflow-hidden">
                    <Image 
                      src={product.img} 
                      alt={product.title}
                      width={220} 
                      height={220} 
                      className="object-contain max-h-full group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-orange-600 transition-colors text-center">
                    {product.title} <span className="text-orange-600">{product.subtitle}</span>
                  </h3>
                  <p className="text-sm text-slate-500 mt-2 text-center">{product.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          4. FOOTER - Eco & Certification
      ========================================== */}
      <footer className="bg-gradient-to-t from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center p-5 bg-green-500/20 rounded-full mb-8"
          >
            <Leaf className="w-12 h-12 text-green-400" />
          </motion.div>

          <h3 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Committed to Quality & Environment
          </h3>
          <p className="text-slate-300 leading-relaxed max-w-3xl mx-auto mb-8">
            Certified with <strong>ISO 9001 (1999)</strong> and <strong>ISO 14001 (2004)</strong>. 
            We pioneer eco-friendly, high-performance solutions that set industry standards.
          </p>

          <div className="flex justify-center gap-8 mt-12 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span>ISO 9001 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
              <span>ISO 14001 Certified</span>
            </div>
          </div>

          <div className="mt-16 text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} Chukyo Kasei Kogyo Co., Ltd. All rights reserved.
          </div>
        </div>
      </footer>
    </div>

  );
}