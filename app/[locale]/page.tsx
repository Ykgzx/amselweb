'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ChevronLeft, Leaf, Phone, Mail, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';

export default function Home() {
  const t = useTranslations();
  const locale = useLocale();
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = t.raw('banner.slides') as Array<{
    title: string;
    subtitle: string;
    cta: string;
    href: string;
  }>;

  const bannerImages = [
    "/images/banner1.jpg",
    "/images/banner2.png",
    "/images/banner3.png",
    "/images/banner4.png",
    "/images/banner5.png"
  ];

  const bannersWithImages = banners.map((item, i) => ({
    ...item,
    img: bannerImages[i]
  }));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannersWithImages.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [bannersWithImages.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % bannersWithImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + bannersWithImages.length) % bannersWithImages.length);

  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="h-full md:h-screen max-h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">

        {/* BANNER */}
        <section className="h-screen snap-start relative overflow-hidden">
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
                src={bannersWithImages[currentSlide].img}
                alt={bannersWithImages[currentSlide].title}
                fill
                className="object-cover"
                priority
                quality={92}
                sizes="100vw"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-transparent" />

              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="max-w-xl text-white"
                  >
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight mb-3 md:mb-4">
                      {bannersWithImages[currentSlide].title}
                    </h1>
                    <p className="text-sm sm:text-base md:text-xl mb-6 md:mb-8 text-sky-100">
                      {bannersWithImages[currentSlide].subtitle}
                    </p>
                    <Link
                      href={bannersWithImages[currentSlide].href}
                      className="inline-flex items-center gap-2 sm:gap-3 bg-white text-blue-600 px-5 sm:px-8 py-3 sm:py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-sky-50 transition-all"
                    >
                      {bannersWithImages[currentSlide].cta}
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows & Dots */}
          <button onClick={prevSlide} className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition z-10">
            <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
          </button>
          <button onClick={nextSlide} className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition z-10">
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
          </button>
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-10">
            {bannersWithImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-2 w-2 sm:w-3 sm:h-3 rounded-full transition-all ${i === currentSlide ? "bg-white w-5 sm:w-8" : "bg-white/50"}`}
              />
            ))}
          </div>
        </section>

        {/* HERO */}
        <section className="h-screen snap-start relative flex items-center bg-gradient-to-br from-blue-500 via-sky-200 to-sky-400 px-4">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center py-10 lg:py-20">
              <div className="order-2 lg:order-1">
                <div className="backdrop-blur-xl bg-white/85 border border-blue-100/50 rounded-3xl p-6 sm:p-10 shadow-2xl">
                  <h1 
                    className="text-4xl sm:text-5xl lg:text-6xl font-black text-blue-900 leading-tight mb-4 sm:mb-6"
                    dangerouslySetInnerHTML={{ __html: t('hero.title') }}
                  />
                  <p className="text-base sm:text-lg lg:text-xl text-blue-700 font-medium">
                    {t('hero.description')}
                  </p>
                </div>
              </div>
              <div className="flex justify-center order-1 lg:order-2">
                <motion.div
                  animate={{ y: [0, -15, 0], rotate: [0, -20, 20, -20, 0], scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Image src="/images/mascot.png" alt="Mascot" width={260} height={260} className="object-contain drop-shadow-xl" priority />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        

<section id="product" className="h-full snap-start flex items-center py-16 sm:py-24 bg-gradient-to-t from-sky-20 via-white/50 to-sky-400 border-t">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
    <div className="text-center mb-12 sm:mb-16">
      <h2
        className="text-3xl sm:text-4xl lg:text-5xl font-black text-blue-900 mb-3 sm:mb-4"
        dangerouslySetInnerHTML={{ __html: t('products.title') }}
      />
      <p className="text-sm sm:text-lg text-blue-700 max-w-2xl mx-auto">
        {t('products.subtitle')}
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
      {(t.raw('products.items') as Array<{ title: string; sub: string; desc: string }>).map((p, i) => {
        const hrefs = [
          "/PelicoatSeries",
          "/AntirustAgents",
          "/CleaningAgents",
          "/LubricantandOthers"
        ];
        return (
          <Link key={i} href={hrefs[i]} className="group cursor-pointer">
            <div className="bg-white/85  backdrop-blur-xl border border-blue-100/50 rounded-3xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition duration-300 flex flex-col h-full">
              <div className="bg-gradient-to-br from-sky-50 to-white rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 shadow-inner flex items-center justify-center h-36 sm:h-48 overflow-hidden">
                <Image
                  src={["/images/categories/Pelicoat.jpg", "/images/categories/AntirustAgents.webp", "/images/categories/CleaningAgents.png", "/images/categories/Lubricant.png"][i]}
                  alt={p.title}
                  width={200}
                  height={200}
                  className="object-contain group-hover:scale-110 transition rounded-full"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-blue-900 group-hover:text-blue-600 text-center">
                {p.title} <span className="text-blue-600">{p.sub}</span>
              </h3>
              <p className="text-xs sm:text-sm text-blue-600 mt-1 text-center">{p.desc}</p>
            </div>
          </Link>
        );
      })}
    </div>
  </div>
</section>


        {/* FOOTER */}
        <footer className="h-full snap-start flex items-center bg-gradient-to-t from-sky-100/50 via-white/50 to-sky-50 border-t border-blue-200/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 py-12 sm:py-0">
              <div className="text-center md:text-left">
                <div className="inline-flex p-4 bg-blue-100 rounded-full mb-4 sm:mb-6">
                  <Leaf className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent mb-3 sm:mb-4">
                  {t('footer.quality')}
                </h3>
                <p className="text-blue-700 text-xs sm:text-sm mb-4 sm:mb-6" dangerouslySetInnerHTML={{ __html: t('footer.iso') }} />
              </div>

              <div className="bg-white/85 backdrop-blur-xl border border-blue-200/50 rounded-3xl p-6 sm:p-8 shadow-xl">
                <h4 className="text-lg sm:text-xl font-bold text-blue-600 mb-4 sm:mb-6 text-center md:text-left">
                  {t('footer.contact')}
                </h4>
                <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
                  <a href="tel:+6627362096" className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 text-blue-700 hover:text-blue-500">
                    <Phone className="w-4 h-4" /> <span>{t('footer.phone')}</span>
                  </a>
                  <a href="mailto:info@amsel.co.th" className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 text-blue-700 hover:text-blue-500">
                    <Mail className="w-4 h-4" /> <span>{t('footer.email')}</span>
                  </a>
                  <a href="https://maps.google.com/?q=14+ซอยกรุงเทพกรีฑา+31+ทับช้าง+สะพานสูง+กรุงเทพ" target="_blank" rel="noopener" className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 text-blue-700 hover:text-blue-500">
                    <MapPin className="w-4 h-4" />
                    <span className="max-w-[200px] sm:max-w-none text-center md:text-left">
                      {t('footer.address')}
                    </span>
                  </a>
                </div>
                <div className="mt-4 sm:mt-6 pt-4 sm:pt- 6 border-t border-blue-200/50 text-center">
                  <Link href="/law" className="inline-flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-blue-600 hover:text-blue-500 transition">
                    {t('footer.law')} <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Link>
                </div>
              </div>

              <div className="text-center md:text-right">
                <h4 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent mb-3 sm:mb-4">
                  {t('footer.company')}
                </h4>
                <p className="text-blue-700 text-xs sm:text-sm mb-4 sm:mb-6" dangerouslySetInnerHTML={{ __html: t('footer.companyDesc') }} />
                <p className="text-[10px] sm:text-xs text-blue-600">
                  {t('footer.copyright', { year: currentYear })}
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}