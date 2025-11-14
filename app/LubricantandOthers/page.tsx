'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { useState } from 'react';

// ข้อความแนะนำแต่ละสินค้า
const recommendations: Record<string, string> = {
  'Metal Protect Dry': 'Ideal for mold nozzles, reduces dust adhesion, perfect for high-cleanliness environments!',
  'Lubriflow': 'Excellent for frequently sliding parts, reduces wear, provides rust protection!',
  'Bearlex FX-C': 'Works on all surfaces, leaves no residue, ideal for delicate and transparent work!',
  'Grease Keeper White': 'Withstands high temperatures up to 220°C, suitable for guide pins and sliding parts!',
  'MO Super Grease': 'Heavy-duty spray grease, resists high pressure and heat!',
  'MO Super Paste': 'Dense texture, long-lasting adhesion, perfect for load-bearing points!',
  'Super Grease Spray No. 1': 'Easy to spray, protects against rust, versatile for general use!',
  'Antistatic agent * Inaguard': 'Prevents static electricity in plastics, films, and electronics!',
  'Surface treatment agent * Restore': 'Repairs weld lines, restores surface to a beautiful finish!',
  'BN Spray': 'Withstands temperatures up to 900°C, ideal for aluminum casting and extrusion!'
};

// Component สำหรับ Mascot + ฟองคำพูด (ปรับแล้ว: ไม่ทับกัน)
const MascotBubble = ({
  productKey,
  show,
  imageOnRight,
  borderColor,
  textColor = 'text-green-800',
}: {
  productKey: string;
  show: boolean;
  imageOnRight: boolean;
  borderColor: string;
  textColor?: string;
}) => {
  if (!show) return null;

  return (
    <div
      className={`absolute top-0 ${
        imageOnRight ? 'left-0 -translate-x-1/2' : 'right-0 translate-x-1/2'
      } -translate-y-1/2 z-20`}
    >
      <div className="relative">
        {/* mascot ยกแขน */}
        <div className="relative inline-block">
          <Image
            src="/images/mascot.png"
            alt="Mascot"
            width={250}
            height={250}
            className="animate-float"
          />
          
        </div>

        {/* ฟองคำพูด - ปรับตำแหน่งให้ไม่ทับ mascot */}
        <div
          className={`absolute bg-white rounded-2xl px-5 py-3 shadow-xl border min-w-56
            ${
              imageOnRight
                ? '-top-16 -left-24'   // ฟองอยู่บน-ซ้ายของ mascot
                : '-top-16 -right-24'  // ฟองอยู่บน-ขวาของ mascot
            }`}
          style={{ borderColor }}
        >
          <p className={`font-jakarta font-bold text-sm text-center leading-tight ${textColor}`}>
            {recommendations[productKey]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function LubricantandOthers() {
  const [showMascot, setShowMascot] = useState<Record<string, boolean>>({
    'Metal Protect Dry': false,
    'Lubriflow': false,
    'Bearlex FX-C': false,
    'Grease Keeper White': false,
    'MO Super Grease': false,
    'MO Super Paste': false,
    'Super Grease Spray No. 1': false,
    'Antistatic agent * Inaguard': false,
    'Surface treatment agent * Restore': false,
    'BN Spray': false,
  });

  const toggleMascot = (key: string) => {
    setShowMascot(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-500 via-white to-sky-400 font-sans text-blue-900 pt-24 pb-16 relative">

        {/* Hero Header */}
        <section className="text-center py-12 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 text-blue-600 mb-6">
              <Link href="/#product" className="flex items-center gap-1 hover:text-blue-500 transition">
                <ChevronLeft className="w-5 h-5" />
                Back to Products
              </Link>
            </div>
            <h1 className="font-poppins font-bold text-5xl md:text-6xl text-blue-900 mb-4">
              Lubricant and Others
            </h1>
          </div>
        </section>

        {/* Main Content */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <h3 className="font-bold text-5xl md:text-6xl mb-15">
            Lubricant for mold ejector pins
          </h3>

          <div className="space-y-24">

            {/* 1. Metal Protect Dry - ภาพซ้าย */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
              <div className="flex justify-center">
                <div
                  className="relative group w-80 h-80 cursor-pointer"
                  onClick={() => toggleMascot('Metal Protect Dry')}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-300 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                  <Image
                    src="/images/categories/Lubricant.png"
                    alt="Metal Protect Dry"
                    width={320}
                    height={320}
                    className="relative rounded-full border-8 border-white shadow-2xl object-contain bg-white w-full h-full group-hover:scale-105 transition duration-300"
                    priority
                  />
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-xl border border-green-200 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="space-y-6">
                  <h3 className="font-poppins font-semibold text-lg text-green-700 mb-3">Metal Protect Dry</h3>
                  <div>
                    <p>PTFE/thin coating and dry type</p>
                    <p>(Service temperature: room temperature to 250°C)</p>
                  </div>
                  <p className="font-jakarta text-green-700 leading-relaxed">
                    <strong>Features:</strong>
                    This thin-coating, dry-type lubricant forms a special lubricating PTFE coating over a
                    metal surface. With the excellent heat resistance, adhesiveness and thinness, the
                    lubricant is appropriate for use where dirt should be avoided<br /><br />
                    <strong>Application:</strong>
                    Maintenance of the mold ejector pins and sliding parts of a molding machine, the
                    rotating and sliding parts of precision machines and equipment.
                  </p>
                </div>
              </div>

              <MascotBubble
                productKey="Metal Protect Dry"
                show={showMascot['Metal Protect Dry']}
                imageOnRight={false}
                borderColor="#10B981"
                textColor="text-green-800"
              />
            </div>

            {/* 2. Lubriflow - ภาพขวา */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
              <div className="flex justify-center lg:order-2">
                <div
                  className="relative group w-80 h-80 cursor-pointer"
                  onClick={() => toggleMascot('Lubriflow')}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-amber-300 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                  <Image
                    src="/images/LubricantandOthers/LubricantandOthers-lubriflow.png"
                    alt="Lubriflow"
                    width={320}
                    height={320}
                    className="relative rounded-full border-8 border-white shadow-2xl object-contain bg-white w-full h-full group-hover:scale-105 transition duration-300"
                  />
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-xl border border-yellow-200 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 lg:order-1">
                <h2 className="font-poppins font-bold text-2xl text-yellow-800 mb-6">
                  Lubriflow
                </h2>
                <div>
                  <p>PTFE/oil-based and enduring type</p>
                  <p>(Service temperature: room temperature to 250°C)</p>
                </div>
                <p className="font-jakarta text-yellow-700 leading-relaxed text-md mt-2">
                  <strong>Features:</strong>
                  Ultra-fine PTFE particles form a smooth covering over a metal surface for outstanding
                  lubricity and abrasive resistance. The lubricant also offers high permeating capacity
                  and detergency and removes water from the surface with its excellent water
                  displacement capability, which results in an antirust effect.<br /><br />
                  <strong>Application:</strong>
                  Maintenance of the mold ejector pins and sliding parts of a molding machine, the
                  rotating and sliding parts of precision machines and equipment.
                </p>
              </div>

              <MascotBubble
                productKey="Lubriflow"
                show={showMascot['Lubriflow']}
                imageOnRight={true}
                borderColor="#F59E0B"
                textColor="text-amber-800"
              />
            </div>

            {/* 3. Bearlex FX-C - ภาพซ้าย */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
              <div className="flex justify-center">
                <div
                  className="relative group w-80 h-80 cursor-pointer"
                  onClick={() => toggleMascot('Bearlex FX-C')}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-400 to-pink-300 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                  <Image
                    src="/images/LubricantandOthers/BEARLEX_FX-C.png"
                    alt="Bearlex FX-C"
                    width={320}
                    height={320}
                    className="relative rounded-full border-8 border-white shadow-2xl object-contain bg-white w-full h-full group-hover:scale-105 transition duration-300"
                  />
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-xl border border-red-200 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300">
                <h2 className="font-poppins font-bold text-2xl text-red-800 mb-6">
                  Bearlex FX-C
                </h2>
                <p className="font-jakarta text-red-700 leading-relaxed">
                  <strong>Features:</strong> This fluorine lubricant is designed to minimize the influence on molded
                  articles. The special lubricating coating has a wide service temperature
                  range and allows application on a variety of surfaces. The thin coating is
                  appropriate for use where dirt should be avoided and has a wide variety
                  of uses as lubricant.<br /><br />
                  <strong>Application:</strong>The mold ejector pins and sliding parts of a molding machine and the
                  rotating and sliding parts of precision machines
                </p>
              </div>

              <MascotBubble
                productKey="Bearlex FX-C"
                show={showMascot['Bearlex FX-C']}
                imageOnRight={false}
                borderColor="#EF4444"
                textColor="text-red-800"
              />
            </div>

            {/* 4. Grease Keeper White - ภาพขวา */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
              <div className="flex justify-center lg:order-2">
                <div
                  className="relative group w-80 h-80 cursor-pointer"
                  onClick={() => toggleMascot('Grease Keeper White')}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-amber-300 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                  <Image
                    src="/images/LubricantandOthers/Grease_Keeper_White.png"
                    alt="Grease Keeper White"
                    width={320}
                    height={320}
                    className="relative rounded-full border-8 border-white shadow-2xl object-contain bg-white w-full h-full group-hover:scale-105 transition duration-300"
                  />
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-xl border border-yellow-200 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 lg:order-1">
                <h2 className="font-poppins font-bold text-2xl text-yellow-800 mb-6">
                  Grease Keeper White
                </h2>
                <div>
                  <p>Urea/Grease type</p>
                  <p>(Service temperature: -20 to 220°C)</p>
                </div>
                <p className="font-jakarta text-yellow-700 leading-relaxed text-md mt-2">
                  <strong>Features:</strong>
                  This special urea grease contains carefully selected thickeners and
                  extreme-pressure additives to achieve high-level heat resistance and
                  lubricity. The grease has a wide service temperature range, allows
                  application on a variety of surfaces and reduces the frequency of
                  greasing when servicing molds.<br /><br />
                  <strong>Application:</strong>
                  Mold guide pins, sliding parts of a molding machine and parts where
                  load bearing capacity and the prevention of seizure and adhesion and
                  long product life are required.
                </p>
              </div>

              <MascotBubble
                productKey="Grease Keeper White"
                show={showMascot['Grease Keeper White']}
                imageOnRight={true}
                borderColor="#F59E0B"
                textColor="text-amber-800"
              />
            </div>

            {/* หัวข้อใหม่ */}
            <div className="font-poppins text-blue-900 mb-15">
              <h1 className="font-bold text-5xl md:text-6xl">
                Lubricant for sliding surfaces and bearings
              </h1>
            </div>

            {/* High-Performance Grease Series */}
            <div className="bg-gradient-to-b from-white/50 to-white/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-teal-800 text-center mb-6">
                High-Performance Grease Series
              </h2>

              <p className="font-jakarta text-teal-700 text-center max-w-4xl mx-auto mb-10 leading-relaxed">
                <strong>Features and application:</strong><br />
                This spray grease contains extreme-pressure additives and lasts for a long period of
                time, demonstrating outstanding abrasion, heat and pressure resistance. The grease
                has a wide service temperature range and produces a long-term effect as lubricant,
                antirust and moisture barrier on rotating and sliding metal parts.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { key: 'MO Super Grease', src: 'mo-grease' },
                  { key: 'MO Super Paste', src: 'mo-paste' },
                  { key: 'Super Grease Spray No. 1', src: 'spray-No.1' }
                ].map(({ key, src }) => (
                  <div key={key} className="flex flex-col items-center text-center group relative">
                    <div
                      className="relative w-64 h-64 mb-4 cursor-pointer"
                      onClick={() => toggleMascot(key)}
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-cyan-300 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                      <Image
                        src={`/images/LubricantandOthers/LubricantandOthers-${src}.png`}
                        alt={key}
                        width={256}
                        height={256}
                        className="relative rounded-full border-8 border-white shadow-2xl object-contain bg-white w-full h-full group-hover:scale-105 transition duration-300"
                      />
                    </div>
                    <h3 className="font-poppins font-semibold text-xl text-teal-700">{key}</h3>

                    {/* Mascot สำหรับ 3 อันนี้ (อยู่ด้านบนของภาพ) */}
                    {showMascot[key] && (
                      <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 z-20">
                        <div className="relative">
                          <div className="relative inline-block">
                            <Image src="/images/mascot.png" alt="Mascot" width={80} height={80} className="rounded-full shadow-xl animate-float" />
                            
                          </div>
                          <div className="absolute -top-11 -right-14 bg-white rounded-2xl px-4 py-2.5 shadow-xl border border-teal-200 min-w-48">
                            <p className="font-jakarta font-bold text-teal-800 text-xs text-center leading-tight">
                              {recommendations[key]}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Antistatic & Surface Treatment */}
            <div className="font-poppins text-blue-900 mt-24 mb-15">
              <h1 className="font-bold text-5xl md:text-6xl">
                Antistatic & Surface Treatment
              </h1>
            </div>

            {/* Inaguard - ภาพซ้าย */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
              <div className="flex justify-center">
                <div
                  className="relative group w-80 h-80 cursor-pointer"
                  onClick={() => toggleMascot('Antistatic agent * Inaguard')}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-300 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                  <Image
                    src="/images/LubricantandOthers/LubricantandOthers-Antistatic.png"
                    alt="Inaguard"
                    width={320}
                    height={320}
                    className="relative rounded-full border-8 border-white shadow-2xl object-contain bg-white w-full h-full group-hover:scale-105 transition duration-300"
                  />
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-xl border border-purple-200 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300">
                <h3 className="font-poppins font-semibold text-lg text-purple-700 mb-3">Antistatic agent * Inaguard</h3>
                <p className="font-jakarta text-purple-700 leading-relaxed">
                  <strong>Features:</strong>
                  This spray prevents static electricity on plastic molded articles, electronic parts, films and automobile parts. Simply with a light spray, it prevents accidents, declines in production efficiency and dirt caused by static electricity.<br /><br />
                  <strong>Application:</strong>
                  Plastics in general, electronic parts, film and automobile parts<br />
                  <span className="text-sm italic">*May be applied to transparent resin.</span>
                </p>
              </div>

              <MascotBubble
                productKey="Antistatic agent * Inaguard"
                show={showMascot['Antistatic agent * Inaguard']}
                imageOnRight={false}
                borderColor="#8B5CF6"
                textColor="text-purple-800"
              />
            </div>

            {/* Restore - ภาพขวา */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
              <div className="flex justify-center lg:order-2">
                <div className="grid grid-cols-2 gap-6 w-full max-w-lg">
                  <div
                    className="relative group w-full h-64 cursor-pointer"
                    onClick={() => toggleMascot('Surface treatment agent * Restore')}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                    <Image
                      src="/images/LubricantandOthers/LubricantandOthers-surface.png"
                      alt="Restore"
                      width={256}
                      height={256}
                      className="relative rounded-full border-8 border-white shadow-2xl object-contain bg-white w-full h-full group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="relative group w-full h-64">
                    <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                    <Image
                      src="/images/LubricantandOthers/LubricantandOthers-surface2.png"
                      alt="Restore PP (Black)"
                      width={256}
                      height={256}
                      className="relative rounded-full border-8 border-white shadow-2xl object-contain bg-white w-full h-full group-hover:scale-105 transition duration-300"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-xl border border-gray-300 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 lg:order-1">
                <h3 className="font-poppins font-semibold text-lg text-gray-700 mb-3">
                  Surface treatment agent * Restore and Restore PP (Black)
                </h3>
                <p className="font-jakarta text-gray-700 leading-relaxed">
                  <strong>Features:</strong>
                  This surface treatment agent is designed to diluter or improve the appearance of molded articles. A light application hides welds lines on a pear-skin finished and grained surface or diluters the surface.<br /><br />
                  <strong>Application:</strong>
                  Restore and Restore PP (Black) for PP and PE
                </p>
              </div>

              <MascotBubble
                productKey="Surface treatment agent * Restore"
                show={showMascot['Surface treatment agent * Restore']}
                imageOnRight={true}
                borderColor="#6B7280"
                textColor="text-gray-800"
              />
            </div>

            {/* Special release agent */}
            <div className="font-poppins text-blue-900 mt-24 mb-15">
              <h1 className="font-bold text-5xl md:text-6xl">
                Special release agent
              </h1>
            </div>

            {/* BN Spray - ภาพซ้าย */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
              <div className="flex justify-center">
                <div
                  className="relative group w-80 h-80 cursor-pointer"
                  onClick={() => toggleMascot('BN Spray')}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                  <Image
                    src="/images/LubricantandOthers/LubricantandOthers-special-release.png"
                    alt="BN Spray"
                    width={320}
                    height={320}
                    className="relative rounded-full border-8 border-white shadow-2xl object-contain bg-white w-full h-full group-hover:scale-105 transition duration-300"
                  />
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-xl border border-orange-200 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300">
                <h3 className="font-poppins font-semibold text-lg text-orange-700 mb-3">
                  BN Spray
                </h3>
                <p className="text-sm text-orange-600 mb-2">
                  (Service temperature: room temperature to 900°C)
                </p>
                <p className="font-jakarta text-orange-700 leading-relaxed">
                  <strong>Features:</strong>
                  The agent contains boron nitride (BN) for excellent lubricity and release performance. With outstanding spreading capability and adhesiveness over a sliding surface and base material, the agent offers excellent lubricity in an environment of high loads.<br /><br />
                  <strong>Application:</strong>
                  Can be used as a release agent for molding diamond tools, and lubricant and release agent for aluminum window frame molding, aluminum extruding machines and other conditions under high temperature.
                </p>
              </div>

              <MascotBubble
                productKey="BN Spray"
                show={showMascot['BN Spray']}
                imageOnRight={false}
                borderColor="#F97316"
                textColor="text-orange-800"
              />
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/law"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-jakarta font-medium px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              View Safety Data (SDS)
              <ChevronLeft className="w-5 h-5 rotate-180" />
            </Link>
          </div>
        </section>

        {/* Back to Top */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-500 font-jakarta text-sm flex items-center justify-center gap-1"
          >
            Back to Home
          </Link>
        </div>
      </div>

      {/* Animation ลอยเบา ๆ */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}