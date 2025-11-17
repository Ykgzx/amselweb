"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';

// ภาษาที่รองรับ
const SUPPORTED_LOCALES = ['en', 'th', 'jp'] as const;
type Locale = typeof SUPPORTED_LOCALES[number];

// ธงชาติ
const FLAGS: Record<Locale, string> = {
  en: '🇬🇧',
  th: '🇹🇭',
  jp: '🇯🇵',
};

// ชื่อภาษาเต็ม
const LANGUAGE_NAMES: Record<Locale, string> = {
  en: 'English',
  th: 'ไทย',
  jp: '日本語',
};

export default function Navbar() {
  const t = useTranslations('Navbar');
  const locale = useLocale() as Locale;
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isMobileProductOpen, setIsMobileProductOpen] = useState(false);

  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);
  const langDropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  const productCategories = [
    { href: `/${locale}/PelicoatSeries`, label: t('pelicoat') },
    { href: `/${locale}/AntirustAgents`, label: t('antirust') },
    { href: `/${locale}/CleaningAgents`, label: t('cleaning') },
    { href: `/${locale}/LubricantandOthers`, label: t('lubricant') }
  ];

  const scrollToProduct = () => {
    const element = document.getElementById('product');
    if (!element) return;

    element.scrollIntoView({ behavior: 'smooth', block: 'start' });

    setTimeout(() => {
      const yOffset = -96;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }, 300);
  };

  // สร้าง href สำหรับเปลี่ยนภาษา
  const getLocaleHref = (newLocale: Locale) => {
    const cleanPath = pathname.replace(new RegExp(`^/${locale}`), '');
    return `/${newLocale}${cleanPath || ''}`;
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed inset-x-0 top-0 z-50 h-24 backdrop-blur-xl bg-white/90 border-b border-blue-100/50 shadow-lg"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-sky-300/5 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/5 to-transparent pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
              <Image
                src="/logo-amsel.png"
                alt="Amsel - Chukyo Kasei Kogyo"
                width={100}
                height={100}
                className="relative rounded-full group-hover:scale-110 transition duration-300"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-poppins font-bold text-xl bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                Chukyo Kasei Kogyo
              </h1>
              <p className="font-jakarta text-xs bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                Perfect Technology Solutions
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">

            {/* เมนูหลัก */}
            <Link href={`/${locale}`} className="text-blue-800 font-medium hover:text-blue-600 transition relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-sky-400 after:transition-all hover:after:w-full">
              {t('home')}
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
                setIsDropdownOpen(true);
              }}
              onMouseLeave={() => {
                dropdownTimeout.current = setTimeout(() => setIsDropdownOpen(false), 150);
              }}
            >
              <button
                onClick={scrollToProduct}
                className="flex items-center gap-1 text-blue-800 font-medium hover:text-blue-600 transition"
              >
                {t('products')}
                <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-white/95 backdrop-blur-xl border border-blue-200/50 rounded-2xl shadow-2xl overflow-hidden"
                >
                  <div className="py-3">
                    {productCategories.map((cat) => (
                      <Link
                        key={cat.href}
                        href={cat.href}
                        className="block px-5 py-3 text-blue-700 hover:bg-blue-50 hover:text-blue-600 transition font-jakarta text-sm"
                      >
                        {cat.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            <Link href={`/${locale}/law`} className="text-blue-800 font-medium hover:text-blue-600 transition relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-sky-400 after:transition-all hover:after:w-full">
              {t('law')}
            </Link>

            <a
              href="https://forms.gle/Ha79ggDGBAYiquuc8"
              target="_blank"
              rel="noopener"
              className="text-blue-800 font-medium hover:text-blue-600 transition relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-sky-400 after:transition-all hover:after:w-full"
            >
              {t('contact')}
            </a>

            {/* Language Dropdown (Desktop) */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (langDropdownTimeout.current) clearTimeout(langDropdownTimeout.current);
                setIsLangDropdownOpen(true);
              }}
              onMouseLeave={() => {
                langDropdownTimeout.current = setTimeout(() => setIsLangDropdownOpen(false), 150);
              }}
            >
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold hover:from-blue-700 hover:to-sky-600 transition shadow-md">
                <Globe className="w-4 h-4" />
                <span className="text-sm">{FLAGS[locale]} {locale.toUpperCase()}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLangDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="absolute right-0 mt-2 w-48 bg-white/95 backdrop-blur-xl border border-blue-200/50 rounded-xl shadow-xl overflow-hidden"
                >
                  {SUPPORTED_LOCALES.map((lang) => (
                    <Link
                      key={lang}
                      href={getLocaleHref(lang)}
                      className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition ${
                        lang === locale
                          ? 'bg-blue-50 text-blue-700'
                          : 'text-blue-800 hover:bg-blue-50 hover:text-blue-600'
                      }`}
                    >
                      <span className="text-lg">{FLAGS[lang]}</span>
                      <span>{LANGUAGE_NAMES[lang]}</span>
                      {lang === locale && <span className="ml-auto text-xs">✓</span>}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-blue-100 hover:bg-blue-200 transition"
          >
            {isOpen ? <X className="w-6 h-6 text-blue-700" /> : <Menu className="w-6 h-6 text-blue-700" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-x-0 top-24 z-40 bg-white/95 backdrop-blur-xl border-b border-blue-100/50 shadow-2xl md:hidden"
        >
          <div className="relative px-6 py-6 space-y-4">

            <Link href={`/${locale}`} onClick={() => setIsOpen(false)} className="block text-lg font-medium text-blue-800 hover:text-blue-600">
              {t('home')}
            </Link>

            <div>
              <button
                onClick={() => {
                  scrollToProduct();
                  setIsMobileProductOpen(!isMobileProductOpen);
                  setTimeout(() => setIsOpen(false), 500);
                }}
                className="flex w-full items-center justify-between text-lg font-medium text-blue-800 hover:text-blue-600"
              >
                {t('products')}
                <ChevronDown className={`w-5 h-5 transition-transform ${isMobileProductOpen ? 'rotate-180' : ''}`} />
              </button>

              {isMobileProductOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  className="mt-2 pl-4 space-y-2 border-l-2 border-blue-300"
                >
                  {productCategories.map((cat) => (
                    <Link
                      key={cat.href}
                      href={cat.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 text-blue-700 hover:text-blue-500 font-jakarta text-sm"
                    >
                      {cat.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>

            <Link href={`/${locale}/law`} onClick={() => setIsOpen(false)} className="block text-lg font-medium text-blue-800 hover:text-blue-600">
              {t('law')}
            </Link>

            <a
              href="https://forms.gle/Ha79ggDGBAYiquuc8"
              target="_blank"
              rel="noopener"
              className="block text-lg font-medium text-blue-800 hover:text-blue-600"
            >
              {t('contact')}
            </a>

            {/* Mobile Language Selector */}
            <div className="pt-4 border-t border-blue-100">
              <p className="text-sm font-medium text-blue-700 mb-2">เปลี่ยนภาษา</p>
              <div className="grid grid-cols-1 gap-2">
                {SUPPORTED_LOCALES.map((lang) => (
                  <Link
                    key={lang}
                    href={getLocaleHref(lang)}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition ${
                      lang === locale
                        ? 'bg-gradient-to-r from-blue-600 to-sky-500 text-white'
                        : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                    }`}
                  >
                    <span className="text-xl">{FLAGS[lang]}</span>
                    <span>{LANGUAGE_NAMES[lang]}</span>
                    {lang === locale && <span className="ml-auto">✓</span>}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}