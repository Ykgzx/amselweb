// components/Navbar.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileProductOpen, setIsMobileProductOpen] = useState(false);

  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  const productCategories = [
    { href: '/products/pelicoat', label: 'Pelicoat (Release Agents)' },
    { href: '/products/antirust', label: 'Antirust Agents' },
    { href: '/products/cleaning', label: 'Cleaning Agents' },
    { href: '/products/lubricant', label: 'Lubricants & Others' },
  ];

  // === ฟังก์ชันเลื่อนไป #product ===
  const scrollToProduct = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('product');
    if (element) {
      const offset = 96; // h-24 = 96px
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsDropdownOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed inset-x-0 top-0 z-50 h-24 backdrop-blur-xl bg-white/80 border-b border-orange-100 shadow-lg"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 to-transparent pointer-events-none"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r  rounded-full blur-lg opacity-70 group-hover:opacity-100 transition"></div>
              <Image
                src="/logo-amsel.png"
                alt="Amsel - Chukyo Kasei Kogyo"
                width={100}
                height={100}
                className="relative   group-hover:scale-110 transition"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-poppins font-bold text-xl bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                Chukyo Kasei
              </h1>
              <p className="font-jakarta text-xs text-orange-700">Perfect Technology Solutions</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-orange-800 font-medium hover:text-orange-600 transition relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-500 after:transition-all hover:after:w-full"
            >
              Home
            </Link>

            {/* === Products Dropdown + Scroll to #product === */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
                setIsDropdownOpen(true);
              }}
              onMouseLeave={() => {
                dropdownTimeout.current = setTimeout(() => {
                  setIsDropdownOpen(false);
                }, 150); // delay ก่อนปิด
              }}
            >
              {/* ปุ่ม Products (กดแล้วเลื่อนไป #product) */}
              <button
                onClick={scrollToProduct}
                className="flex items-center gap-1 text-orange-800 font-medium hover:text-orange-600 cursor-pointer transition"
              >
                Products
                <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown */}
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-white/95 backdrop-blur-xl border border-orange-200 rounded-2xl shadow-2xl overflow-hidden"
                  onMouseEnter={() => {
                    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
                  }}
                  onMouseLeave={() => {
                    dropdownTimeout.current = setTimeout(() => {
                      setIsDropdownOpen(false);
                    }, 150);
                  }}
                >
                  <div className="py-3">
                    {productCategories.map((cat) => (
                      <Link
                        key={cat.href}
                        href={cat.href}
                        className="block px-5 py-3 text-orange-700 hover:bg-orange-50 hover:text-orange-600 transition font-jakarta text-sm"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {cat.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            <Link
              href="/law"
              className="text-orange-800 font-medium hover:text-orange-600 transition relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-500 after:transition-all hover:after:w-full"
            >
              Law & Safety
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-orange-100 hover:bg-orange-200 transition"
          >
            {isOpen ? <X className="w-6 h-6 text-orange-700" /> : <Menu className="w-6 h-6 text-orange-700" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-x-0 top-24 z-40 bg-white/95 backdrop-blur-xl border-b border-orange-100 shadow-2xl md:hidden"
        >
          <div className="px-6 py-6 space-y-4">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block text-lg font-medium text-orange-800 hover:text-orange-600"
            >
              Home
            </Link>

            {/* Mobile: Products + Scroll + Accordion */}
            <div>
              <button
                onClick={(e) => {
                  scrollToProduct(e);
                  setIsMobileProductOpen(!isMobileProductOpen);
                }}
                className="flex w-full items-center justify-between text-lg font-medium text-orange-800 hover:text-orange-600"
              >
                Products
                {isMobileProductOpen ? <ChevronDown className="w-5 h-5 rotate-180" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {isMobileProductOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  className="mt-2 pl-4 space-y-2 border-l-2 border-orange-300"
                >
                  {productCategories.map((cat) => (
                    <Link
                      key={cat.href}
                      href={cat.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 text-orange-700 hover:text-orange-500 font-jakarta text-sm"
                    >
                      {cat.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>

            <Link
              href="/law"
              onClick={() => setIsOpen(false)}
              className="block text-lg font-medium text-orange-800 hover:text-orange-600"
            >
              Law & Safety
            </Link>
          </div>
        </motion.div>
      )}
    </>
  );
}