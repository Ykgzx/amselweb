// app/products/pelicoat/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, SprayCan, Wrench, AlertTriangle, Sparkles } from 'lucide-react';

export default function PelicoatSeries() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 font-sans text-orange-900 pt-24 pb-16">

      {/* Hero Header */}
      <section className="text-center py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 text-orange-600 mb-6 animate-fadeIn animation-delay-200">
            <Link href="/#product" className="flex items-center gap-1 hover:text-orange-500 transition">
              <ChevronLeft className="w-5 h-5" />
              Back to Products
            </Link>
          </div>
          <h1 className="font-poppins font-bold text-5xl md:text-6xl text-orange-900 mb-4 animate-fadeIn animation-delay-400">
            LubricantandOthers
          </h1>
          <p className="font-jakarta text-xl text-orange-700 max-w-3xl mx-auto animate-fadeIn animation-delay-600">
            For molding
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="space-y-24">

          {/* 1. Vegetable Oil-Based */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fadeIn animation-delay-800">
            <div className="flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-orange-300 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                <Image
                  src="vercel.svg"
                  alt="Pelicoat Vegetable Oil"
                  width={320}
                  height={320}
                  className="relative rounded-full border-8 border-white shadow-2xl object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl border border-orange-200 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300">

              <div className="space-y-6">
                <div>
                  <h2 className="font-poppins font-bold text-2xl text-orange-800 mb-6">
                    Metal Protect Dry
                  </h2>
                  <h3 className="font-poppins font-semibold text-lg text-orange-700 mb-3 flex items-center gap-2">PTFE/thin coating and dry type</h3>

                </div>
                <p className="font-jakarta text-orange-700 leading-relaxed">
                  <strong>Features:</strong> This thin-coating, dry-type lubricant forms a special lubricating PTFE coating over a
                  metal surface. With the excellent heat resistance, adhesiveness and thinness, the
                  lubricant is appropriate for use where dirt should be avoided.<br></br> <br></br>
                  <strong>Application:</strong> Maintenance of the mold ejector pins and sliding parts of a molding machine, the
                  rotating and sliding parts of precision machines and equipment.
                </p>
              </div>
            </div>
          </div>

          {/* 2. Fluorine-Based */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fadeIn animation-delay-1000">
            <div className="flex justify-center lg:order-2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                <Image
                  src="vercel.svg"
                  alt="Pelicoat Fluorine"
                  width={320}
                  height={320}
                  className="relative rounded-full border-8 border-white shadow-2xl object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl border border-orange-200 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 lg:order-1">
              <h2 className="font-poppins font-bold text-2xl text-orange-800 mb-6">
                Lubriflow
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-poppins font-semibold text-lg text-orange-700 mb-3 flex items-center gap-2">

                    PTFE/oil-based and enduring type
                  </h3>

                </div>
                <p className="font-jakarta text-orange-700 leading-relaxed text-sm">
                  <strong>Features:</strong> Ultra-fine PTFE particles form a smooth covering over a metal surface for outstanding
                  lubricity and abrasive resistance. The lubricant also offers high permeating capacity
                  and detergency and removes water from the surface with its excellent water
                  displacement capability, which results in an antirust effect.<br></br> <br></br>
                  <strong>Application:</strong>Maintenance of the mold ejector pins and sliding parts of a molding machine, the
                  rotating and sliding parts of precision machines and equipment.
                </p>
              </div>
            </div>
          </div>

          {/* 3. Silicone-Based (Not Suitable) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fadeIn animation-delay-1200">
            <div className="flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-400 to-red-300 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative rounded-full border-8 border-white shadow-2xl bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center w-80 h-80 p-8">

                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl border border-red-200 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h2 className="font-poppins font-bold text-2xl text-red-800 mb-6">
                Bearlex FX-C
              </h2>
              <h3 className="font-poppins font-semibold text-lg text-red-700 mb-3 flex items-center gap-2">

                    PTFE/oil-based and enduring type
                  </h3>

              <div className="space-y-6">
                <div>


                </div>
                <p className="font-jakarta text-red-700 leading-relaxed">
                  <strong>Features:</strong> This fluorine lubricant is designed to minimize the influence on molded
                  articles. The special lubricating coating has a wide service temperature
                  range and allows application on a variety of surfaces. The thin coating is
                  appropriate for use where dirt should be avoided and has a wide variety
                  of uses as lubricant.<br /><br />
                  <strong>Application:</strong> The mold ejector pins and sliding parts of a molding machine and the
                  rotating and sliding parts of precision machines

                </p>
              </div>
            </div>
          </div>

          {/* 4. Special Purposes – Fatty Acid Soap */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fadeIn animation-delay-1400">
            <div className="flex justify-center lg:order-2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-300 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative rounded-full border-8 border-white shadow-2xl bg-gradient-to-br from-emerald-50 to-teal-100 flex items-center justify-center w-80 h-80 p-8">

                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl border border-emerald-200 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 lg:order-1">
              <h2 className="font-poppins font-bold text-2xl text-emerald-800 mb-6">
                Grease Keeper White
              </h2>
              <h3 className="font-poppins font-semibold text-lg text-green-700 mb-3 flex items-center gap-2">

                   Urea/Grease type
                  </h3>


              <div className="space-y-6">
                <div>

                  <p className="font-jakarta text-emerald-700 leading-relaxed">
                    <strong>Features:</strong> his special urea grease contains carefully selected thickeners and
                    extreme-pressure additives to achieve high-level heat resistance and
                    lubricity. The grease has a wide service temperature range, allows
                    application on a variety of surfaces and reduces the frequency of
                    greasing when servicing molds.<br /><br />
                    <strong>Application:</strong> Mold guide pins, sliding parts of a molding machine and parts where
                    load bearing capacity and the prevention of seizure and adhesion and
                    long product life are required.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 5. Special Purposes – Modified Silicone */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fadeIn animation-delay-1600">
            <div className="flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-purple-300 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative rounded-full border-8 border-white shadow-2xl bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center w-80 h-80 p-8">

                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl border border-indigo-200 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h2 className="font-poppins font-bold text-2xl text-indigo-800 mb-6">
                Special Purposes – Stress-crack Resistant
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-poppins font-semibold text-lg text-indigo-700 mb-3">Pelicoat K Series</h3>

                </div>
                <p className="font-jakarta text-indigo-700 leading-relaxed">
                  <strong>Features:</strong> This release agent that contains modified silicone oil as the main ingredient offers outstanding release performance and minimizes stress-cracks. This general-purpose agent is resistant to heat and static and is appropriate for transparent resins and engineering plastics.
                </p>
              </div>
            </div>
          </div>

          {/* 6. Automatic Sprayer */}


        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 px-6 animate-fadeIn animation-delay-2000">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/law"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-jakarta font-medium px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            View Safety Data (SDS)
            <ChevronLeft className="w-5 h-5 rotate-180" />
          </Link>
        </div>
      </section>

      {/* Back to Top */}
      <div className="text-center mt-12 animate-fadeIn animation-delay-2200">
        <Link
          href="/"
          className="text-orange-600 hover:text-orange-500 font-jakarta text-sm flex items-center justify-center gap-1"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}