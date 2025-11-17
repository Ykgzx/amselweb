// app/products/pelicoat/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, AlertTriangle, Sparkles } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';

export default function PelicoatSeries() {
  const t = useTranslations('pelicoat');
  const tn = useTranslations('Navbar');

  // --- Mascot Logic ---
  const [showMascot, setShowMascot] = useState<{ any: boolean; currentMessage: string }>({
    any: false,
    currentMessage: '',
  });

  const [displayedText, setDisplayedText] = useState('');
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (showMascot.any && showMascot.currentMessage) {
      const message = showMascot.currentMessage;
      let i = 0;
      setDisplayedText('');

      intervalRef.current = setInterval(() => {
        if (i < message.length) {
          setDisplayedText(message.slice(0, i + 1));
          i++;
        } else {
          clearInterval(intervalRef.current!);
          timeoutRef.current = setTimeout(() => hideMascot(), 5000);
        }
      }, 30);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [showMascot.any, showMascot.currentMessage]);

  const callMascot = (key: string) => {
    const message = t(`recommendations.${key}`);
    setShowMascot({ any: true, currentMessage: message });
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const hideMascot = () => {
    setShowMascot(prev => ({ ...prev, any: false }));
    setDisplayedText('');
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  // --- Table Data ---
  const tableData = [
    {
      category: 'Vegetable oil',
      colorClass: 'bg-green-50 text-green-900',
      items: [
        { name: 'S', perf: 'Excellent', dirt: 'Good', sec: ['Good', 'Excellent', 'Good', 'Good'] },
        { name: 'S3-5', perf: 'Good', dirt: 'Good', sec: ['Good', 'Excellent', 'Excellent', 'Excellent'] },
        { name: 'S6', perf: 'Good', dirt: 'Good', sec: ['Excellent', 'Excellent', 'Excellent', 'Excellent'] },
        { name: 'F', perf: 'Good', dirt: 'Good', sec: ['Excellent', 'Excellent', 'Excellent', 'Excellent'] },
      ]
    },
    {
      category: 'Fluorine',
      colorClass: 'bg-blue-50 text-blue-900',
      items: [
        { name: 'RF-1', perf: 'Excellent', dirt: 'Excellent', sec: ['Conditional', 'Conditional', 'Conditional', 'Conditional'] },
        { name: 'FF', perf: 'Excellent', dirt: 'Excellent', sec: ['Conditional', 'Conditional', 'Conditional', 'Conditional'] },
        { name: 'PV', perf: 'Good', dirt: 'Excellent', sec: ['Not Suitable', 'Not Suitable', 'Not Suitable', 'Not Suitable'] },
      ]
    },
    {
      category: 'Silicone α',
      colorClass: 'bg-gray-50 text-gray-900',
      items: [
        { name: 'α', perf: 'Excellent', dirt: 'Good', sec: ['Not Suitable', 'Not Suitable', 'Not Suitable', 'Not Suitable'] },
        { name: 'A', perf: 'Excellent', dirt: 'Good', sec: ['Not Suitable', 'Not Suitable', 'Not Suitable', 'Not Suitable'] },
        { name: 'BX-2', perf: 'Excellent', dirt: 'Good', sec: ['Not Suitable', 'Not Suitable', 'Not Suitable', 'Not Suitable'] },
      ]
    },
    {
      category: 'Fatty acid soap',
      colorClass: 'bg-teal-50 text-teal-900',
      items: [
        { name: 'Z', perf: 'Good', dirt: 'Good', sec: ['Good', 'Good', 'Good', 'Good'] },
      ]
    },
    {
      category: 'Modified silicone',
      colorClass: 'bg-indigo-50 text-indigo-900',
      items: [
        { name: 'K', perf: 'Excellent', dirt: 'Excellent', sec: ['Conditional', 'Not Suitable', 'Not Suitable', 'Not Suitable'] },
        { name: 'KP', perf: 'Good', dirt: 'Excellent', sec: ['Not Suitable', 'Not Suitable', 'Not Suitable', 'Not Suitable'] },
        { name: 'GT-1', perf: 'Good', dirt: 'Excellent', sec: ['Conditional', 'Not Suitable', 'Not Suitable', 'Not Suitable'] },
        { name: 'GT-3', perf: 'Good', dirt: 'Excellent', sec: ['Conditional', 'Not Suitable', 'Not Suitable', 'Not Suitable'] },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-white to-sky-400 font-sans text-blue-900 pt-24 pb-16 relative">

      {/* Hero Header */}
      <section className="text-center py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 text-blue-600 mb-6">
            <Link href="/#product" className="flex items-center gap-1 hover:text-blue-500 transition">
              <ChevronLeft className="w-5 h-5" />
              {tn('products')}
            </Link>
          </div>
          <h1 className="font-poppins font-bold text-5xl md:text-6xl text-blue-900 mb-4">
            {t('title')}
          </h1>
          <p className="font-jakarta text-xl text-blue-700 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="space-y-24">

          {/* 1. Vegetable Oil-Based */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative group cursor-pointer" onClick={() => callMascot('Vegetable Oil-Based')}>
                <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-300 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                <Image
                  src="/images/categories/Pelicoat.jpg"
                  alt="Pelicoat Vegetable Oil"
                  width={320}
                  height={320}
                  className="relative rounded-full border-8 border-white shadow-2xl object-cover group-hover:scale-105 transition duration-300"
                  priority
                />
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl border border-green-200 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h2 className="font-poppins font-bold text-2xl text-green-800 mb-6">
                {t('section1.title')}
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-poppins font-semibold text-lg text-green-700 mb-3 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-green-600" />
                    {t('section1.suitable')}
                  </h3>
                  <h4 className="font-jakarta font-medium text-green-800 mb-2">{t('section1.type')}</h4>
                  <ul className="font-jakarta text-green-700 space-y-1 list-disc list-inside">
                    {t.raw('section1.items').map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <p className="font-jakarta text-green-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw('section1.features') }} />
              </div>
            </div>
          </div>

          {/* 2. Fluorine-Based */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:order-2">
              <div className="relative group cursor-pointer" onClick={() => callMascot('Fluorine-Based')}>
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-amber-300 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                <Image
                  src="/images/pelicoat/image 14.png"
                  alt="Pelicoat Fluorine"
                  width={320}
                  height={320}
                  className="relative rounded-full border-8 border-white shadow-2xl object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl border border-yellow-200 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 lg:order-1">
              <h2 className="font-poppins font-bold text-2xl text-yellow-800 mb-6">
                {t('section2.title')}
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-poppins font-semibold text-lg text-yellow-700 mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    {t('section2.partlySuitable')}
                  </h3>
                  <ul className="font-jakarta text-yellow-700 space-y-1 list-disc list-inside">
                    {t.raw('section2.items').map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <p className="font-jakarta text-yellow-700 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: t.raw('section2.features') }} />
              </div>
            </div>
          </div>

          {/* 3. Silicone-Based */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative group cursor-pointer" onClick={() => callMascot('Silicone-Based')}>
                <div className="absolute -inset-1 bg-gradient-to-r from-red-400 to-pink-300 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                <Image
                  src="/images/pelicoat/image 15.png"
                  alt="Pelicoat Silicone"
                  width={320}
                  height={320}
                  className="relative rounded-full border-8 border-white shadow-2xl object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl border border-red-200 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h2 className="font-poppins font-bold text-2xl text-red-800 mb-6">
                {t('section3.title')}
              </h2>
              <div className="space-y-6">
                <ul className="font-jakarta text-red-700 space-y-1 list-disc list-inside">
                  {t.raw('section3.items').map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p className="font-jakarta text-red-700 leading-relaxed">
                  {t('section3.features')}
                </p>
              </div>
            </div>
          </div>

          {/* 4. Fatty Acid Soap */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:order-2">
              <div className="relative group cursor-pointer" onClick={() => callMascot('Fatty Acid Soap')}>
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-cyan-300 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                <Image
                  src="/images/pelicoat/peli2.png"
                  alt="Pelicoat Fatty Acid"
                  width={320}
                  height={320}
                  className="relative rounded-full border-8 border-white shadow-2xl object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl border border-teal-200 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 lg:order-1">
              <h2 className="font-poppins font-bold text-2xl text-teal-800 mb-6">
                {t('section4.title')}
              </h2>
              <div className="space-y-6">
                <h3 className="font-poppins font-semibold text-lg text-teal-700 mb-3">{t('section4.product')}</h3>
                <p className="font-jakarta text-teal-700 leading-relaxed">
                  {t('section4.features')}
                </p>
              </div>
            </div>
          </div>

          {/* 5. Modified Silicone */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative group cursor-pointer" onClick={() => callMascot('Modified Silicone')}>
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-purple-300 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                <Image
                  src="/images/pelicoat/peli2.png"
                  alt="Pelicoat Modified Silicone"
                  width={320}
                  height={320}
                  className="relative rounded-full border-8 border-white shadow-2xl object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl border border-indigo-200 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h2 className="font-poppins font-bold text-2xl text-indigo-800 mb-6">
                {t('section5.title')}
              </h2>
              <div className="space-y-6">
                <h3 className="font-poppins font-semibold text-lg text-indigo-700 mb-3">{t('section5.product')}</h3>
                <ul className="font-jakarta text-indigo-700 space-y-1 list-disc list-inside">
                  {t.raw('section5.items').map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p className="font-jakarta text-indigo-700 leading-relaxed">
                  {t('section5.features')}
                </p>
              </div>
            </div>
          </div>

          {/* 6. Automatic Sprayer */}
          <div className="bg-gradient-to-r from-blue-100 to-cyan-50 rounded-3xl p-12 shadow-2xl border border-blue-200 cursor-pointer"
               onClick={() => callMascot('Autoben AS983')}>
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="flex-shrink-0">
                <Image
                  src="/images/pelicoat/image 20.png"
                  alt="Autoben AS983"
                  width={320}
                  height={320}
                  className="rounded-[20px] border-8 border-white shadow-2xl object-cover"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="font-poppins font-bold text-3xl text-blue-900 mb-4">
                  {t('section6.title')}
                </h2>
                <h3 className="font-jakarta font-semibold text-xl text-blue-700 mb-3">
                  {t('section6.product')}
                </h3>
                <p className="font-jakarta text-blue-700 leading-relaxed max-w-3xl">
                  <strong>Note:</strong> {t('section6.note')}
                </p>
              </div>
            </div>
          </div>

          {/* Product List Table */}
          <section className="py-12">
            <h2 className="font-poppins font-bold text-4xl text-blue-900 mb-8 text-center">
              {t('productList')}
            </h2>

            <div className="bg-white rounded-3xl shadow-xl border border-blue-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[800px] border-collapse text-center font-jakarta">
                  <thead>
                    <tr className="bg-slate-200 text-slate-700 text-sm uppercase tracking-wider">
                      <th rowSpan={2} className="p-4 border-b border-r border-slate-300 w-1/6">{t('table.mainIngredient')}</th>
                      <th rowSpan={2} className="p-4 border-b border-r border-slate-300">{t('table.productName')}</th>
                      <th rowSpan={2} className="p-4 border-b border-r border-slate-300">{t('table.releasePerformance')}</th>
                      <th rowSpan={2} className="p-4 border-b border-r border-slate-300">{t('table.dirtOnMold')}</th>
                      <th colSpan={4} className="p-3 border-b border-slate-300 bg-slate-300/50">{t('table.secondaryProcessing')}</th>
                    </tr>
                    <tr className="bg-slate-200 text-slate-700 text-xs uppercase tracking-wider font-bold">
                      <th className="p-2 border-b border-r border-slate-300">{t('table.coating')}</th>
                      <th className="p-2 border-b border-r border-slate-300">{t('table.plating')}</th>
                      <th className="p-2 border-b border-r border-slate-300">{t('table.hotStamping')}</th>
                      <th className="p-2 border-b border-slate-300">{t('table.silkScreen')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((group, gIndex) => (
                      group.items.map((item, iIndex) => (
                        <tr key={`${group.category}-${item.name}`} className="hover:bg-slate-50 transition-colors">
                          {iIndex === 0 && (
                            <td rowSpan={group.items.length} className={`p-4 font-bold text-left border-r border-b border-slate-200 ${group.colorClass}`}>
                              {group.category}
                            </td>
                          )}
                          <td className="p-3 border-r border-b border-slate-200 font-semibold text-blue-900">{item.name}</td>
                          <td className="p-3 border-r border-b border-slate-200 text-lg">{item.perf}</td>
                          <td className="p-3 border-r border-b border-slate-200 text-lg">{item.dirt}</td>
                          {item.sec.map((val: string, idx: number) => (
                            <td key={idx} className={`p-3 border-b border-slate-200 text-lg ${idx < 3 ? 'border-r' : ''}`}>
                              <span className={
                                val === 'Excellent' ? 'text-green-600 font-bold' :
                                val === 'Good' ? 'text-green-500' :
                                val === 'Conditional' ? 'text-yellow-500' :
                                'text-red-400'
                              }>
                                {val === 'Excellent' ? 'Excellent' : val === 'Good' ? 'Good' : val === 'Conditional' ? 'Conditional' : 'Not Suitable'}
                              </span>
                            </td>
                          ))}
                        </tr>
                      ))
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-slate-50 p-4 text-sm text-slate-500 flex flex-wrap gap-6 justify-center border-t border-slate-200">
                <span className="flex items-center gap-1"><span className="text-green-600 font-bold text-lg">Excellent</span> {t('legend.excellent')}</span>
                <span className="flex items-center gap-1"><span className="text-green-500 text-lg">Good</span> {t('legend.good')}</span>
                <span className="flex items-center gap-1"><span className="text-yellow-500 text-lg">Conditional</span> {t('legend.conditional')}</span>
                <span className="flex items-center gap-1"><span className="text-red-400 text-lg">Not Suitable</span> {t('legend.notSuitable')}</span>
              </div>
            </div>
          </section>

        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/law"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-jakarta font-medium px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            {t('cta')}
            <ChevronLeft className="w-5 h-5 rotate-180" />
          </Link>
        </div>
      </section>

      {/* Back to Home */}
      <div className="text-center mt-12">
        <Link href="/" className="text-blue-600 hover:text-blue-500 font-jakarta text-sm flex items-center justify-center gap-1">
          {t('backToHome')}
        </Link>
      </div>

      {/* Mascot */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <div className={`relative transition-all duration-700 ease-in-out transform-gpu ${showMascot.any ? 'translate-y-0 opacity-100 scale-100 pointer-events-auto' : 'translate-y-32 opacity-0 scale-90 pointer-events-none'}`}>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-80">
            <div className="bg-white rounded-3xl px-6 py-4 shadow-2xl border-4 border-blue-400">
              <p className="font-jakarta font-bold text-center text-blue-900 leading-tight">
                {displayedText}
              </p>
            </div>
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1">
              <div className="w-8 h-8 bg-white rotate-45 border-r-4 border-b-4 border-blue-400"></div>
            </div>
          </div>

          <Image
            src="/images/mascot.png"
            alt="Mascot"
            width={280}
            height={280}
            className="drop-shadow-2xl cursor-pointer animate-float"
            onClick={hideMascot}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
}