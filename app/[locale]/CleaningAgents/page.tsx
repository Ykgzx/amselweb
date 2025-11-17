// app/products/CleaningAgents/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';

export default function CleaningAgents() {
  const t = useTranslations('cleaning');

  // ──────── Mascot Logic (แก้บัค 100% – ใช้แบบ Pelicoat) ────────
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
      setDisplayedText(''); // รีเซ็ตก่อนเริ่มพิมพ์

      intervalRef.current = setInterval(() => {
        if (i < message.length) {
          // ใช้ slice แทน prev + char → แก้บัคถาวร
          setDisplayedText(message.slice(0, i + 1));
          i++;
        } else {
          clearInterval(intervalRef.current!);
          // ซ่อนอัตโนมัติหลัง 5 วินาที
          timeoutRef.current = setTimeout(() => hideMascot(), 5000);
        }
      }, 30);
    }

    // cleanup เมื่อ component unmount หรือ message เปลี่ยน
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [showMascot.any, showMascot.currentMessage]);

  const callMascot = (key: string) => {
    const message = t(`recommendations.${key}`);
    setShowMascot({ any: true, currentMessage: message });
    // เคลียร์ timeout เก่าเพื่อไม่ให้ซ่อนก่อนพิมพ์จบ
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const hideMascot = () => {
    setShowMascot(prev => ({ ...prev, any: false }));
    setDisplayedText('');
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };
  // ─────────────────────────────────────────────────────────────────────

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

          {/* Mold Cleaner Section */}
          <div>
            <h2 className="font-poppins font-bold text-5xl md:text-6xl text-blue-900 mb-2">{t('moldCleaner')}</h2>
            <p className="font-bold text-xl text-blue-700 mb-12">{t('moldCleanerSub')}</p>

            {/* GP Cleaner */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
              <div className="flex justify-center">
                <div className="relative group w-80 h-80 cursor-pointer" onClick={() => callMascot('GP Cleaner')}>
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-300 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                  <Image src="/images/categories/CleaningAgents.png" alt="GP Cleaner" width={320} height={320}
                    className="relative rounded-full border-8 border-white shadow-2xl object-cover w-full h-full group-hover:scale-105 transition" />
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-xl border border-green-200 rounded-3xl p-10 shadow-xl">
                <ul className="font-jakarta text-green-700 space-y-3 list-disc list-inside">
                  {t.raw('gp.items').map((item: string) => <li key={item} dangerouslySetInnerHTML={{ __html: item }} />)}
                </ul>
                <p className="font-jakarta text-green-700 leading-relaxed mt-6"><strong>Features:</strong> {t('gp.features')}</p>
              </div>
            </div>

            {/* Ace Cleaner C3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
              <div className="flex justify-center lg:order-2">
                <div className="relative group w-80 h-80 cursor-pointer" onClick={() => callMascot('Ace Cleaner C3')}>
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-amber-300 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                  <Image src="/images/CleaningAgents/AceCleanerC3.jpg" alt="Ace Cleaner C3" width={320} height={320}
                    className="relative rounded-full border-8 border-white shadow-2xl object-contain bg-white w-full h-full group-hover:scale-105 transition" />
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-xl border border-yellow-200 rounded-3xl p-10 shadow-xl lg:order-1">
                <h3 className="font-poppins font-bold text-2xl text-yellow-800 mb-4">{t('ace.title')}</h3>
                <p className="font-jakarta text-yellow-700 leading-relaxed"><strong>Features:</strong> {t('ace.features')}</p>
              </div>
            </div>

            {/* Mold Cleaner */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
              <div className="flex justify-center">
                <div className="relative group w-80 h-80 cursor-pointer" onClick={() => callMascot('Mold Cleaner')}>
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-400 to-pink-300 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                  <Image src="/images/CleaningAgents/MoldCleaner.jpg" alt="Mold Cleaner" width={320} height={320}
                    className="relative rounded-full border-8 border-white shadow-2xl object-contain bg-white w-full h-full group-hover:scale-105 transition" />
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-xl border border-red-200 rounded-3xl p-10 shadow-xl">
                <h3 className="font-poppins font-bold text-2xl text-red-800 mb-4">{t('mold.title')}</h3>
                <p className="font-jakarta text-red-700 leading-relaxed">
                  <strong>Features:</strong> {t('mold.features')}<br/>
                  <strong>Application:</strong> {t('mold.application')}
                </p>
              </div>
            </div>
          </div>

          {/* Deposit Cleaner Section */}
          <div>
            <h2 className="font-poppins font-bold text-5xl md:text-6xl text-blue-900 mb-2">{t('depositCleaner')}</h2>
            <p className="font-bold text-xl text-blue-700 mb-12">{t('depositCleanerSub')}</p>

            {/* Depo Cleaner */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
              <div className="flex justify-center lg:order-2">
                <div className="relative group w-80 h-80 cursor-pointer" onClick={() => callMascot('Depo Cleaner')}>
                  <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-cyan-300 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                  <Image src="/images/CleaningAgents/DepoCleaner.jpg" alt="Depo Cleaner" width={320} height={320}
                    className="relative rounded-full border-8 border-white shadow-2xl object-contain bg-white w-full h-full group-hover:scale-105 transition" />
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-xl border border-teal-200 rounded-3xl p-10 shadow-xl lg:order-1">
                <h3 className="font-poppins font-bold text-2xl text-teal-800 mb-4">{t('depo.title')}</h3>
                <p className="font-jakarta text-teal-700 leading-relaxed">
                  <strong>Features:</strong> {t('depo.features')}<br/>
                  <strong>Application:</strong> {t('depo.application')}
                </p>
              </div>
            </div>
          </div>

          {/* General Cleaner Section */}
          <div>
            <h2 className="font-poppins font-bold text-5xl md:text-6xl text-blue-900 mb-2">{t('generalCleaner')}</h2>
            <p className="font-bold text-xl text-blue-700 mb-12">{t('generalCleanerSub')}</p>

            {/* Brake C5, Jumbo A, Parts C7 */}
            {['brakeC5', 'brakeJumbo', 'partsC7'].map((key, i) => (
              <div key={key} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
                <div className={`flex justify-center ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative group w-80 h-80 cursor-pointer" onClick={() => callMascot(key === 'brakeC5' ? 'Brake & Parts Cleaner C5' : key === 'brakeJumbo' ? 'Brake & Parts Cleaner Jumbo A' : 'Parts Cleaner C7')}>
                    <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-cyan-300 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                    <Image src={`/images/CleaningAgents/${key === 'brakeC5' ? 'Brake&PartsCleanerC5' : key === 'brakeJumbo' ? 'Brake&PartsCleanerJumboA' : 'PartsCleanerC7'}.jpg`} alt={t(`${key}.title`)} width={320} height={320}
                      className="relative rounded-full border-8 border-white shadow-2xl object-contain bg-white w-full h-full group-hover:scale-105 transition" />
                  </div>
                </div>
                <div className={`bg-white/80 backdrop-blur-xl border ${i === 2 ? 'border-red-200' : 'border-teal-200'} rounded-3xl p-10 shadow-xl ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className={`font-poppins font-bold text-2xl mb-4 ${i === 2 ? 'text-red-800' : 'text-teal-800'}`}>
                    {t(`${key}.title`)}
                  </h3>
                  <p className={`font-jakarta leading-relaxed ${i === 2 ? 'text-red-700' : 'text-teal-700'}`}>
                    <strong>Features:</strong> {t(`${key}.features`)}<br/>
                    {t.raw(`${key}.application`) && <><strong>Application:</strong> {t(`${key}.application`)}</>}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <section className="py-12">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-blue-900 mb-12 text-center">
              {t('comparisonTitle')}
            </h2>
            <div className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 md:p-10 shadow-xl overflow-x-auto">
              <table className="w-full min-w-[900px] text-left">
                <thead className="border-b-2 border-blue-200">
                  <tr className="text-blue-800 font-semibold uppercase text-sm">
                    <th className="py-4 px-3">{t('table.product')}</th>
                    <th className="py-4 px-3 text-center">{t('table.strength')}</th>
                    <th className="py-4 px-3">{t('table.odor')}</th>
                    <th className="py-4 px-3">{t('table.drying')}</th>
                    <th className="py-4 px-3">{t('table.application')}</th>
                  </tr>
                </thead>
                <tbody className="font-jakarta text-blue-900 divide-y divide-blue-100">
                  {t.raw('products').map((p: any, i: number) => (
                    <tr key={i} className="hover:bg-blue-50 transition">
                      <td className="py-4 px-3 font-medium">{p.name}</td>
                      <td className="py-4 px-3 text-center">{p.strength}</td>
                      <td className="py-4 px-3">{p.odor}</td>
                      <td className="py-4 px-3">{p.drying}</td>
                      <td className="py-4 px-3">{p.app}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="font-jakarta text-blue-700 text-sm mt-6">{t('table.note')}</p>
            </div>
          </section>
        </div>
      </section>

      {/* CTA & Back */}
      <section className="text-center py-16 px-6">
        <Link href="/law" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-jakarta font-medium px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition">
          {t('cta')} <ChevronLeft className="w-5 h-5 rotate-180" />
        </Link>
      </section>

      <div className="text-center mt-12 pb-20">
        <Link href="/" className="text-blue-600 hover:text-blue-500 font-jakarta text-sm flex items-center justify-center gap-1">
          {t('backToHome')}
        </Link>
      </div>

      {/* Mascot */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <div className={`relative transition-all duration-700 ease-in-out ${showMascot.any ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-32 opacity-0 scale-90 pointer-events-none'}`}>
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

      <style jsx>{`
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .animate-float { animation: float 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
}