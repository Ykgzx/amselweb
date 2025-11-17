// app/[locale]/law/page.tsx
'use client';

import { AlertTriangle, Flame, Droplet, Skull, Beaker } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function LawAndSafety() {
  const t  = useTranslations('law');
  const tr = useTranslations('law.regulations');
  const ts = useTranslations('law.symbols');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-sky-200 via-40% to-sky-400 font-sans text-blue-900 pt-24 relative overflow-hidden">

      {/* พื้นหลังลอย ๆ */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400/20 via-transparent to-sky-300/20"></div>
        <div className="absolute top-0 -left-40 w-96 h-96 rounded-full bg-gradient-to-br from-blue-300/30 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 -right-40 w-96 h-96 rounded-full bg-gradient-to-tl from-sky-400/30 to-transparent blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-white/10 to-transparent blur-3xl"></div>
      </div>

      {/* Hero */}
      <section className="py-16 px-6 text-center relative z-10">
        <h1 className="font-poppins font-bold text-5xl md:text-6xl text-blue-900 mb-4">
          {t('title')}
        </h1>
        <p className="font-jakarta text-lg text-blue-700 max-w-3xl mx-auto">
          {t('heroDesc')}
        </p>
      </section>

      {/* Regulations Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { key: 'prtr' },
            { key: 'organicSolvent' },
            { key: 'rohs' },
            { key: 'pfos' },
            { key: 'ghs', colSpan: 'md:col-span-2 lg:col-span-2' },
          ].map((item) => (
            <div
              key={item.key}
              className={`bg-white/85 backdrop-blur-lg border border-blue-100/50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${item.colSpan || ''}`}
            >
              <h3 className="font-poppins font-bold text-2xl text-blue-800 mb-4">
                {tr(`${item.key}.title`)}
              </h3>
              <p
                className="font-jakarta text-blue-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: tr.raw(`${item.key}.desc`) }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Hazard Symbols */}
      <section className="bg-white/70 py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-poppins font-bold text-4xl text-center text-blue-900 mb-12">
            {t('hazardSymbols')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Flame,       label: ts('flammable'), color: 'text-red-600' },
              { icon: Droplet,     label: ts('harmful'),   color: 'text-blue-600' },
              { icon: AlertTriangle, label: ts('irritant'), color: 'text-yellow-600' },
              { icon: Skull,       label: ts('toxic'),     color: 'text-purple-600' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="p-6 bg-white rounded-3xl shadow-lg border border-blue-100/50 mb-4">
                  <item.icon className={`w-16 h-16 mx-auto ${item.color}`} />
                </div>
                <p className="font-jakarta text-sm text-blue-800 font-medium">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aerosol Instructions */}
      <section className="py-16 px-6 max-w-5xl mx-auto relative z-10">
        <div className="bg-gradient-to-r from-blue-100 to-sky-50 rounded-3xl p-10 shadow-xl border border-blue-200/50">
          <h3 className="font-poppins font-bold text-2xl text-blue-900 mb-6 flex items-center gap-3">
            <Beaker className="w-8 h-8 text-blue-600" />
            {t('aerosolInstructions')}
          </h3>
          <ul className="font-jakarta text-blue-800 space-y-3 list-disc list-inside">
            {t.raw('instructions').map((text: string, i: number) => (
              <li key={i}>{text}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Back to Home */}
      <section className="text-center py-12 relative z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-jakarta font-medium text-blue-700 hover:text-blue-500 transition"
        >
          ← {t('backToHome')}
        </Link>
      </section>
    </div>
  );
}