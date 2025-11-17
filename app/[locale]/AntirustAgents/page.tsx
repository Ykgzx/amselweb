// app/products/AntirustAgents/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';

export default function AntirustAgents() {
  const t = useTranslations('antirust');
  const tn = useTranslations('Navbar');

  // --- Mascot State & Logic ---
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
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-white to-sky-400 font-sans text-blue-900 pt-24 pb-16 relative overflow-x-hidden">

      {/* Header */}
      <section className="text-center py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 text-blue-600 mb-6">
            <Link href="/#product" className="flex items-center gap-1 hover:text-blue-500 transition">
              <ChevronLeft className="w-5 h-5" />
              {t('backToProducts')}
            </Link>
          </div>
          <h1 className="font-poppins font-bold text-5xl md:text-6xl text-blue-900 mb-4">
            {t('title')}
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="space-y-24">

          {/* 1. Volatile (Efflux Series) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative group w-80 h-80 cursor-pointer" onClick={() => callMascot('Volatile')}>
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-amber-300 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                <Image src="/images/product/AntirustAgents.png" alt="Efflux Series" width={320} height={320}
                  className="relative rounded-full border-8 border-white shadow-2xl object-contain bg-white w-full h-full group-hover:scale-105 transition duration-300" />
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-xl border border-green-200 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h2 className="font-poppins font-bold text-2xl text-green-800 mb-6">{t('volatile.title')}</h2>
              <div className="space-y-6">
                <div>
                  <h4 className="font-jakarta font-medium text-green-800 mb-2">{t('volatile.subtitle')}</h4>
                  <ul className="font-jakarta text-green-700 space-y-1 list-disc list-inside">
                    {t.raw('volatile.products').map((p: string) => <li key={p}>{p}</li>)}
                  </ul>
                </div>
                <p className="font-jakarta text-green-700 leading-relaxed">
                  <strong>Features:</strong> {t('volatile.features')}<br />
                  <strong>Application:</strong> {t('volatile.application')}
                </p>
              </div>
            </div>
          </div>

          {/* 2. Sabicro */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:order-2">
              <div className="relative group w-80 h-80 cursor-pointer" onClick={() => callMascot('Sabicro')}>
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-amber-300 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                <Image src="/images/product/AntirustAgents-sabicro.png" alt="Sabicro" width={320} height={320}
                  className="relative rounded-full border-8 border-white shadow-2xl object-contain bg-white w-full h-full group-hover:scale-105 transition duration-300" />
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-xl border border-yellow-200 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 lg:order-1">
              <h2 className="font-poppins font-bold text-2xl text-yellow-800 mb-6">{t('sabicro.title')}</h2>
              <h3 className="font-poppins font-semibold text-lg text-yellow-700 mb-3">{t('sabicro.name')}</h3>
              <p className="font-jakarta text-yellow-700 leading-relaxed text-sm">
                <strong>Features:</strong> {t('sabicro.features')}<br />
                <strong>Application:</strong> {t('sabicro.application')}
              </p>
            </div>
          </div>

          {/* 3. Rakutoreru */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative group w-80 h-80 cursor-pointer" onClick={() => callMascot('Rakutoreru')}>
                <div className="absolute -inset-1 bg-gradient-to-r from-red-400 to-pink-300 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                <Image src="/images/product/AntirustAgents-raku.png" alt="Rakutoreru" width={320} height={320}
                  className="relative rounded-full border-8 border-white shadow-2xl object-contain bg-white w-full h-full group-hover:scale-105 transition duration-300" />
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-xl border border-red-200 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h2 className="font-poppins font-bold text-2xl text-red-800 mb-6">{t('rakutoreru.title')}</h2>
              <h3 className="font-poppins font-semibold text-lg text-red-700 mb-3">{t('rakutoreru.name')}</h3>
              <p className="font-jakarta text-red-700 leading-relaxed">
                <strong>Features:</strong> {t('rakutoreru.features')}<br />
                <strong>Application:</strong> {t('rakutoreru.application')}
              </p>
            </div>
          </div>

          {/* 4. Hi-Guard DK-5 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:order-2">
              <div className="relative group w-80 h-80 cursor-pointer" onClick={() => callMascot('Hi-Guard DK-5')}>
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-cyan-300 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                <Image src="/images/product/AntirustAgents-dk5.png" alt="Hi-Guard DK-5" width={320} height={320}
                  className="relative rounded-full border-8 border-white shadow-2xl object-contain bg-white w-full h-full group-hover:scale-105 transition duration-300" />
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-xl border border-teal-200 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 lg:order-1">
              <h2 className="font-poppins font-bold text-2xl text-teal-800 mb-6">{t('hiGuard.title')}</h2>
              <h3 className="font-poppins font-semibold text-lg text-teal-700 mb-3">{t('hiGuard.name')}</h3>
              <p className="font-jakarta text-teal-700 leading-relaxed">
                <strong>Features:</strong> {t('hiGuard.features')}<br />
                <strong>Application:</strong> {t('hiGuard.application')}
              </p>
            </div>
          </div>

          {/* 5. Pelicoat 12 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative group w-80 h-80 cursor-pointer" onClick={() => callMascot('Pelicoat 12')}>
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-purple-300 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                <Image src="/images/product/AntirustAgents-pelicoat12.png" alt="Pelicoat 12" width={320} height={320}
                  className="relative rounded-full border-8 border-white shadow-2xl object-contain bg-white w-full h-full group-hover:scale-105 transition duration-300" />
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-xl border border-indigo-200 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h2 className="font-poppins font-bold text-2xl text-indigo-800 mb-6">{t('pelicoat12.title')}</h2>
              <h3 className="font-poppins font-semibold text-lg text-indigo-700 mb-3">{t('pelicoat12.name')}</h3>
              <p className="font-jakarta text-indigo-700 leading-relaxed">
                <strong>Features:</strong> {t('pelicoat12.features')}<br />
                <strong>Application:</strong> {t('pelicoat12.application')}
              </p>
            </div>
          </div>

          {/* 6. Legato */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:order-2">
              <div className="relative group w-80 h-80 cursor-pointer" onClick={() => callMascot('Legato')}>
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-cyan-300 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                <Image src="/images/product/AntirustAgents-legato.png" alt="Legato" width={320} height={320}
                  className="relative rounded-full border-8 border-white shadow-2xl object-contain bg-white w-full h-full group-hover:scale-105 transition duration-300" />
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-xl border border-teal-200 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 lg:order-1">
              <h2 className="font-poppins font-bold text-2xl text-teal-800 mb-6">{t('legato.title')}</h2>
              <h3 className="font-poppins font-semibold text-lg text-teal-700 mb-3">{t('legato.name')}</h3>
              <p className="font-jakarta text-teal-700 leading-relaxed">
                <strong>Features:</strong> {t('legato.features')}<br />
                <strong>Application:</strong> {t('legato.application')}
              </p>
            </div>
          </div>

        
          
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 px-6">
        <Link href="/law" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-jakarta font-medium px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
          {t('cta')} <ChevronLeft className="w-5 h-5 rotate-180" />
        </Link>
      </section>

      {/* Back to Home */}
      <div className="text-center mt-12 pb-20">
        <Link href="/" className="text-blue-600 hover:text-blue-500 font-jakarta text-sm flex items-center justify-center gap-1">
          {t('backToHome')}
        </Link>
      </div>

      {/* Mascot */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <div className={`relative transition-all duration-700 ease-in-out transform-gpu ${showMascot.any ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-32 opacity-0 scale-90 pointer-events-none'}`}>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-80">
            <div className="bg-white rounded-3xl px-6 py-4 shadow-2xl border-4 border-blue-400">
              <p className="font-jakarta font-bold text-center text-blue-900 leading-tight">{displayedText}</p>
            </div>
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1">
              <div className="w-8 h-8 bg-white rotate-45 border-r-4 border-b-4 border-blue-400"></div>
            </div>
          </div>
          <Image src="/images/mascot.png" alt="Mascot" width={280} height={280}
            className="drop-shadow-2xl cursor-pointer animate-float" onClick={hideMascot} />
        </div>
      </div>

      {/* Floating Animation */}
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