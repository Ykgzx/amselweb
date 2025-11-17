// app/products/LubricantandOthers/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';

export default function LubricantandOthers() {
  const t = useTranslations('lubricant');

  // Mascot
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

          {/* Ejector Pin Lubricants */}
          <div>
            <h2 className="font-poppins font-bold text-5xl md:text-6xl text-blue-900 mb-12">
              {t('ejectorSection')}
            </h2>

            {/* Metal Protect Dry */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <div className="relative group w-80 h-80 cursor-pointer" onClick={() => callMascot('Metal Protect Dry')}>
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-300 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                  <Image src="/images/categories/Lubricant.png" alt={t('metalProtect.title')} width={320} height={320}
                    className="relative rounded-full border-8 border-white shadow-2xl object-contain bg-white w-full h-full group-hover:scale-105 transition" />
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-xl border border-green-200 rounded-3xl p-10 shadow-xl">
                <h3 className="font-poppins font-bold text-2xl text-green-800 mb-4">{t('metalProtect.title')}</h3>
                <p className="text-green-700">{t('metalProtect.type')}<br/>{t('metalProtect.temp')}</p>
                <p className="font-jakarta text-green-700 leading-relaxed mt-4">
                  <strong>Features:</strong> {t('metalProtect.features')}<br/><br/>
                  <strong>Application:</strong> {t('metalProtect.application')}
                </p>
              </div>
            </div>

            {/* Lubriflow */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center lg:order-2">
                <div className="relative group w-80 h-80 cursor-pointer" onClick={() => callMascot('Lubriflow')}>
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-amber-300 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                  <Image src="/images/LubricantandOthers/LubricantandOthers-lubriflow.png" alt={t('lubriflow.title')} width={320} height={320}
                    className="relative rounded-full border-8 border-white shadow-2xl object-contain bg-white w-full h-full group-hover:scale-105 transition" />
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-xl border border-yellow-200 rounded-3xl p-10 shadow-xl lg:order-1">
                <h3 className="font-poppins font-bold text-2xl text-yellow-800 mb-4">{t('lubriflow.title')}</h3>
                <p className="text-yellow-700">{t('lubriflow.type')}<br/>{t('lubriflow.temp')}</p>
                <p className="font-jakarta text-yellow-700 leading-relaxed mt-4">
                  <strong>Features:</strong> {t('lubriflow.features')}<br/><br/>
                  <strong>Application:</strong> {t('lubriflow.application')}
                </p>
              </div>
            </div>

            {/* Bearlex FX-C & Grease Keeper White */}
            {['bearlex', 'greaseKeeper'].map((key, i) => (
              <div key={key} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={`flex justify-center ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative group w-80 h-80 cursor-pointer" onClick={() => callMascot(key === 'bearlex' ? 'Bearlex FX-C' : 'Grease Keeper White')}>
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-400 to-pink-300 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                    <Image src={`/images/LubricantandOthers/${key === 'bearlex' ? 'BEARLEX_FX-C' : 'Grease_Keeper_White'}.png`} alt={t(`${key}.title`)} width={320} height={320}
                      className="relative rounded-full border-8 border-white shadow-2xl object-contain bg-white w-full h-full group-hover:scale-105 transition" />
                  </div>
                </div>
                <div className={`bg-white/80 backdrop-blur-xl border ${i % 2 === 1 ? 'border-yellow-200' : 'border-red-200'} rounded-3xl p-10 shadow-xl ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className={`font-poppins font-bold text-2xl mb-4 ${i % 2 === 1 ? 'text-yellow-800' : 'text-red-800'}`}>
                    {t(`${key}.title`)}
                  </h3>
                  {t.raw(`${key}.type`) && <p className={`${i % 2 === 1 ? 'text-yellow-700' : 'text-red-700'}`}>{t(`${key}.type`)}<br/>{t(`${key}.temp`)}</p>}
                  <p className={`font-jakarta leading-relaxed mt-4 ${i % 2 === 1 ? 'text-yellow-700' : 'text-red-700'}`}>
                    <strong>Features:</strong> {t(`${key}.features`)}<br/><br/>
                    <strong>Application:</strong> {t(`${key}.application`)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Sliding & Bearing Lubricants */}
          <div>
            <h2 className="font-poppins font-bold text-5xl md:text-6xl text-blue-900 mb-12">{t('slidingSection')}</h2>
            <div className="bg-gradient-to-b from-white/50 to-white/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
              <h3 className="font-poppins font-bold text-3xl md:text-4xl text-teal-800 text-center mb-6">{t('highPerfTitle')}</h3>
              <p className="font-jakarta text-teal-700 text-center max-w-4xl mx-auto mb-10 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('highPerfDesc') }} />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
  { name: 'MO Super Grease', key: 'MO Super Grease' },
  { name: 'MO Super Paste', key: 'MO Super Paste' },
  { name: 'Super Grease Spray No. 1', key: 'SuperGreaseSprayNo1' }
].map(({ name, key }) => (
  <div key={name} className="flex flex-col items-center text-center group">
    <div className="relative w-64 h-64 mb-4 cursor-pointer" onClick={() => callMascot(key as any)}>
      <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-cyan-300 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
      <Image 
        src={`/images/LubricantandOthers/LubricantandOthers-${name === 'MO Super Grease' ? 'mo-grease' : name === 'MO Super Paste' ? 'mo-paste' : 'spray-No.1'}.png`} 
        alt={name} 
        width={256} 
        height={256}
        className="relative rounded-full border-8 border-white shadow-2xl object-contain bg-white w-full h-full group-hover:scale-105 transition" 
      />
    </div>
    <h4 className="font-poppins font-semibold text-xl text-teal-700">{name}</h4>
  </div>
))}
              </div>
            </div>
          </div>

          {/* Antistatic & Surface Treatment */}
          <div>
            <h2 className="font-poppins font-bold text-5xl md:text-6xl text-blue-900 mb-12">{t('antistaticSection')}</h2>
            {['inaguard', 'restore'].map((key, i) => (
              <div key={key} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
                <div className={`flex justify-center ${i === 1 ? 'lg:order-2' : ''}`}>
                  {key === 'restore' ? (
                    <div className="grid grid-cols-2 gap-6 w-full max-w-lg">
                      {[1, 2].map(n => (
                        <div key={n} className="relative group w-full h-64 cursor-pointer" onClick={() => callMascot('Surface treatment agent * Restore')}>
                          <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                          <Image src={`/images/LubricantandOthers/LubricantandOthers-surface${n === 2 ? '2' : ''}.png`} alt={t('restore.title')} width={256} height={256}
                            className="relative rounded-full border-8 border-white shadow-2xl object-contain bg-white w-full h-full group-hover:scale-105 transition" />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="relative group w-80 h-80 cursor-pointer" onClick={() => callMascot('Antistatic agent * Inaguard')}>
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-300 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                      <Image src="/images/LubricantandOthers/LubricantandOthers-Antistatic.png" alt={t('inaguard.title')} width={320} height={320}
                        className="relative rounded-full border-8 border-white shadow-2xl object-contain bg-white w-full h-full group-hover:scale-105 transition" />
                    </div>
                  )}
                </div>
                <div className={`bg-white/80 backdrop-blur-xl border ${key === 'restore' ? 'border-gray-300' : 'border-purple-200'} rounded-3xl p-10 shadow-xl ${i === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className={`font-poppins font-bold text-2xl mb-4 ${key === 'restore' ? 'text-gray-800' : 'text-purple-800'}`}>
                    {t(`${key}.title`)}
                  </h3>
                  <p className={`font-jakarta leading-relaxed ${key === 'restore' ? 'text-gray-700' : 'text-purple-700'}`}>
                    <strong>Features:</strong> {t(`${key}.features`)}<br/><br/>
                    <strong>Application:</strong> {t(`${key}.application`)}
                    {t.raw(`${key}.note`) && <><br/><span className="text-sm italic">{t(`${key}.note`)}</span></>}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Special Release Agent */}
          <div>
            <h2 className="font-poppins font-bold text-5xl md:text-6xl text-blue-900 mb-12">{t('specialSection')}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <div className="relative group w-80 h-80 cursor-pointer" onClick={() => callMascot('BN Spray')}>
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                  <Image src="/images/LubricantandOthers/LubricantandOthers-special-release.png" alt={t('bnSpray.title')} width={320} height={320}
                    className="relative rounded-full border-8 border-white shadow-2xl object-contain bg-white w-full h-full group-hover:scale-105 transition" />
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-xl border border-orange-200 rounded-3xl p-10 shadow-xl">
                <h3 className="font-poppins font-bold text-2xl text-orange-800 mb-4">{t('bnSpray.title')}</h3>
                <p className="text-orange-700">{t('bnSpray.temp')}</p>
                <p className="font-jakarta text-orange-700 leading-relaxed mt-4">
                  <strong>Features:</strong> {t('bnSpray.features')}<br/><br/>
                  <strong>Application:</strong> {t('bnSpray.application')}
                </p>
              </div>
            </div>
          </div>

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