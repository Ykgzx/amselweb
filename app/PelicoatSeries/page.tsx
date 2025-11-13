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
            Pelicoat Series
          </h1>
          <p className="font-jakarta text-xl text-orange-700 max-w-3xl mx-auto animate-fadeIn animation-delay-600">
            Release agents for thermoplastic resin
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
                  src="/images/categories/Pelicoat.jpg"
                  alt="Pelicoat Vegetable Oil"
                  width={320}
                  height={320}
                  className="relative rounded-full border-8 border-white shadow-2xl object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl border border-orange-200 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h2 className="font-poppins font-bold text-2xl text-orange-800 mb-6">
                Suitability For An Item That Needs Secondary Processing
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-poppins font-semibold text-lg text-orange-700 mb-3 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-green-600" />
                    Suitable
                  </h3>
                  <h4 className="font-jakarta font-medium text-orange-800 mb-2">Vegetable oil-based release agents</h4>
                  <ul className="font-jakarta text-orange-700 space-y-1 list-disc list-inside">
                    <li>Pelicoat S (Good release performance)</li>
                    <li>Pelicoat S3-5</li>
                    <li>Pelicoat S6</li>
                    <li>Pelicoat F (For film or thin-walling molding processing)</li>
                  </ul>
                </div>
                <p className="font-jakarta text-orange-700 leading-relaxed">
                  <strong>Features:</strong> This paintable release agent has vegetable oil as the main ingredient. It has superb release performance and is appropriate for secondary processing. Any residual agent on the product can be easily washed off with petroleum or alcohol-based general-purpose cleaners.
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
                  src="/images/pelicoat/image 14.png"
                  alt="Pelicoat Fluorine"
                  width={320}
                  height={320}
                  className="relative rounded-full border-8 border-white shadow-2xl object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl border border-orange-200 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 lg:order-1">
              <h2 className="font-poppins font-bold text-2xl text-orange-800 mb-6">
                Partly Suitable – Fluorine-based release agents
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-poppins font-semibold text-lg text-orange-700 mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    Partly Suitable
                  </h3>
                  <ul className="font-jakarta text-orange-700 space-y-1 list-disc list-inside">
                    <li>Pelicoat RF-1</li>
                    <li>Pelicoat FF</li>
                    <li>Pelicoat PV</li>
                  </ul>
                </div>
                <p className="font-jakarta text-orange-700 leading-relaxed text-sm">
                  <strong>Features:</strong> This release agent contains a fluorine compound as the main ingredient. It forms a uniform film on the mold surface, provides superb release performance, and prevents the mold from becoming dirty. The agent can also be applied as a mold protecting agent. <em>(The agent can be used for secondary processing (painting) only after it is applied and heated (at least 150°C).)</em>
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
                  <AlertTriangle className="w-24 h-24 text-red-600" />
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl border border-red-200 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h2 className="font-poppins font-bold text-2xl text-red-800 mb-6">
                Not Suitable – Silicone-based release agents
              </h2>
              <div className="space-y-6">
                <div>
                  
                  <ul className="font-jakarta text-red-700 space-y-1 list-disc list-inside">
                    <li>Pelicoat α (High viscosity)</li>
                    <li>Pelicoat A</li>
                    <li>Pelicoat BX-2 (Low viscosity)</li>
                  </ul>
                </div>
                <p className="font-jakarta text-red-700 leading-relaxed">
                  <strong>Features:</strong> This release agent contains silicone oil as the main ingredient. It provides high heat resistance and release performance. Depending on the molding conditions, high or low viscosity can be chosen.
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
                  <Sparkles className="w-24 h-24 text-emerald-600" />
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl border border-emerald-200 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 lg:order-1">
              <h2 className="font-poppins font-bold text-2xl text-emerald-800 mb-6">
                Special Purposes – Anti-memory & Less-sticky
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-poppins font-semibold text-lg text-emerald-700 mb-3">Pelicoat Z</h3>
                  <p className="font-jakarta text-emerald-700 leading-relaxed">
                    <strong>Features:</strong> This anti-memory and less-sticky release agent contains fatty acid soap as the main ingredient. The agent is appropriate for thermoplastic resins in general as well as transparent resins.
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
                  <Wrench className="w-24 h-24 text-indigo-600" />
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
                  <ul className="font-jakarta text-indigo-700 space-y-1 list-disc list-inside">
                    <li>Pelicoat K</li>
                    <li>Pelicoat KP</li>
                    <li>Pelicoat GT-1</li>
                    <li>Pelicoat GT-3</li>
                  </ul>
                </div>
                <p className="font-jakarta text-indigo-700 leading-relaxed">
                  <strong>Features:</strong> This release agent that contains modified silicone oil as the main ingredient offers outstanding release performance and minimizes stress-cracks. This general-purpose agent is resistant to heat and static and is appropriate for transparent resins and engineering plastics.
                </p>
              </div>
            </div>
          </div>

          {/* 6. Automatic Sprayer */}
          <div className="animate-fadeIn animation-delay-1800">
            <div className="bg-gradient-to-r from-orange-100 to-amber-50 rounded-3xl p-12 shadow-2xl border border-orange-200">
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="flex-shrink-0">
                  <div className="p-8 bg-white rounded-3xl shadow-xl border border-orange-100">
                    <SprayCan className="w-20 h-20 text-orange-600 mx-auto" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="font-poppins font-bold text-3xl text-orange-900 mb-4">
                    Automatic Release Agent Sprayer
                  </h2>
                  <h3 className="font-jakarta font-semibold text-xl text-orange-700 mb-3">
                    Autoben AS983 Type
                  </h3>
                  <p className="font-jakarta text-orange-700 leading-relaxed max-w-3xl">
                    <strong>Note:</strong> Mount this Pelicoat cans onto the Autoben. The system makes it easier to spray and set the spraying time and quantity. The device applies the agent appropriately and equally according to the number of shots specified.
                  </p>
                </div>
              </div>
            </div>
          </div>

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