// app/products/CleaningAgents/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, AlertTriangle, Sparkles } from 'lucide-react';

export default function LubricantandOthers() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-white to-sky-400 font-sans text-blue-900 pt-24 pb-16">

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
            LubricantandOthers
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="font-bold text-5xl md:text-6xl">
          Mold cleaner
        </h1>
        <p className="font-bold text-xl md:text-xl mt-2">
          (multipurpose agent for molds)
        </p>
        <div className="space-y-24">

          {/* 1. Mold cleaner (multipurpose agent for molds) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative group w-80 h-80">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-300 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                <Image
                  src="/images/categories/CleaningAgents.png"
                  alt="Pelicoat Vegetable Oil"
                  width={320}
                  height={320}
                  className="relative rounded-full border-8 border-white shadow-2xl object-cover w-full h-full group-hover:scale-105 transition duration-300"
                  priority
                />
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl border border-green-200 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="space-y-6">
                <ul className="font-jakarta text-green-700 space-y-2 list-disc list-inside">
                  <li>
                    <strong>GP Cleaner – Standard Type</strong><br />
                    <span className="text-green-600">(*An undiluted solution is also available.)</span>
                  </li>
                  <li>
                    <strong>GP Cleaner C-Y – Chemical Attack-Resistant Type</strong><br />
                    <span className="text-green-600">(*An undiluted solution is also available.)</span>
                  </li>
                  <li>
                    <strong>GP Cleaner C-Y2 – Good Release Performance, Chemical Attack-Resistant Type</strong><br />
                    <span className="text-green-600">(*An undiluted solution is also available.)</span>
                  </li>
                </ul>
                <p className="font-jakarta text-green-700 leading-relaxed">
                  <strong>Features:</strong>
                  Multipurpose cleaning agents remove grease, oil and dirt on
                  molds for plastics or molded articles. The agents have
                  almost no influence on molded articles and dry quickly.
                </p>
              </div>
            </div>
          </div>

          {/* 2. Ace Cleaner C3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:order-2">
              <div className="relative group w-80 h-80">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-amber-300 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                <Image
                  src="/images/CleaningAgents/AceCleanerC3.jpg"
                  alt="Ace Cleaner C3"
                  width={320}
                  height={320}
                  className="relative rounded-full border-8 border-white shadow-2xl object-contain bg-white w-full h-full group-hover:scale-105 transition duration-300"
                />
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl border border-yellow-200 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 lg:order-1">
              <h2 className="font-poppins font-bold text-2xl text-yellow-800 mb-6">
                Ace Cleaner C3
              </h2>
              <p className="font-jakarta text-yellow-700 leading-relaxed text-md">
                <strong>Features:</strong>
                A cleaning agent suitable for the removal of
                antirust agents, grease, oil and release
                agents on molds for plastics. This is also for
                cleaning machines and is an outstanding
                degreasing agent
              </p>
            </div>
          </div>

          {/* 3. Mold Cleaner */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative group w-80 h-80">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-400 to-pink-300 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                <Image
                  src="/images/CleaningAgents/MoldCleaner.jpg"
                  alt="Mold Cleaner"
                  width={320}
                  height={320}
className="relative rounded-full border-8 border-white shadow-2xl object-contain bg-white w-full h-full group-hover:scale-105 transition duration-300"
                />
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl border border-red-200 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h2 className="font-poppins font-bold text-2xl text-red-800 mb-6">
                Mold Cleaner
              </h2>
              <p className="font-jakarta text-red-700 leading-relaxed">
                <strong>Features:</strong> This cleaning agent will dissolve and remove resin from molds for plastics.
                * Spray the agent thoroughly on the contaminated surface, leave for a while until it
                penetrates enough and then wipe off with a cloth or remove with a tool. Using the GP
                Cleaner is also effective.<br /><br />
                <strong>Application:</strong>Cleaning molds for plastics
              </p>
            </div>
          </div>

          <div className="font-poppins text-blue-900 mb-8">
            <h1 className="font-bold text-5xl md:text-6xl">
              Cleaner for mold deposit
            </h1>
            <p className="font-bold text-xl md:text-xl mt-2">
              Resin dissolution type
            </p>
          </div>

          {/* 4. Depo Cleaner */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:order-2">
              <div className="relative group w-80 h-80">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-cyan-300 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                <Image
                  src="/images/CleaningAgents/DepoCleaner.jpg"
                  alt="Depo Cleaner"
                  width={320}
                  height={320}
className="relative rounded-full border-8 border-white shadow-2xl object-contain bg-white w-full h-full group-hover:scale-105 transition duration-300"
                />
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl border border-teal-200 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 lg:order-1">
              <div className="space-y-6">
                <h3 className="font-poppins font-semibold text-lg text-teal-700 mb-3">Depo Cleaner</h3>
                <p className="font-jakarta text-teal-700 leading-relaxed">
                  <strong>Features:</strong>
                  Spray the agent thoroughly onto the contaminated part of a mold surface and
                  wait three to five minutes until the agent penetrates. While the surface is still
                  wet, give preliminary shots. The agent may remain on the surface after use, so
                  wash it off with a solvent like the GP Cleaner. The ideal temperature of the mold
                  is between 40 and 80°C. <br /><br />
                  <strong>Application:</strong>
                  For gas burns on molds for plastics and removal of deposits
                </p>
              </div>
            </div>
          </div>

          {/* 5. General cleaner */}
          <div className="font-poppins text-blue-900 mb-8">
            <h1 className="font-bold text-5xl md:text-6xl">
              General cleaner
            </h1>
            <p className="font-bold text-xl md:text-xl mt-2">
              (multipurpose agent for parts)
            </p>
          </div>

          {/* Brake & Parts Cleaner C5 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:order-2">
              <div className="relative group w-80 h-80">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-cyan-300 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                <Image
                  src="/images/CleaningAgents/Brake&PartsCleanerC5.jpg"
                  alt="Brake & Parts Cleaner C5"
                  width={320}
                  height={320}
                  className="relative rounded-full border-8 border-white shadow-2xl object-contain bg-white w-full h-full group-hover:scale-105 transition duration-300"
                />
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl border border-teal-200 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 lg:order-1">
              <div className="space-y-6">
                <h3 className="font-poppins font-semibold text-lg text-teal-700 mb-3">Brake & Parts Cleaner C5</h3>
                <p className="font-jakarta text-teal-700 leading-relaxed">
                  <strong>Features:</strong>
                  These are designed to cleanse resin or metal powder from a brake drum and lining
                  instead of blowing the powder or resin off. The cleaner offers high spray pressure
                  and excellent degreasing effects as an outstanding oil and grease remover. <br /><br />
                  <strong>Application:</strong>
                  Degreasing and cleansing of general machine parts
                  as well as brake drums, lining and disk pads
                </p>
              </div>
            </div>
          </div>

          {/* Brake & Parts Cleaner Jumbo A */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:order-2">
              <div className="relative group w-80 h-80">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-cyan-300 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                <Image
                  src="/images/CleaningAgents/Brake&PartsCleanerJumboA.jpg"
                  alt="Brake & Parts Cleaner Jumbo A"
                  width={320}
                  height={320}
                  className="relative rounded-full border-8 border-white shadow-2xl object-contain bg-white w-full h-full group-hover:scale-105 transition duration-300"
                />
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl border border-teal-200 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 lg:order-1">
              <div className="space-y-6">
                <h3 className="font-poppins font-semibold text-lg text-teal-700">Brake & Parts Cleaner Jumbo A</h3>
                {/* เนื้อหาเพิ่มเติมถ้ามี */}
              </div>
            </div>
          </div>

          {/* Parts Cleaner C7 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative group w-80 h-80">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-400 to-pink-300 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                <Image
                  src="/images/CleaningAgents/PartsCleanerC7.jpg"
                  alt="Parts Cleaner C7"
                  width={320}
                  height={320}
                  className="relative rounded-full border-8 border-white shadow-2xl object-contain bg-white w-full h-full group-hover:scale-105 transition duration-300"
                />
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl border border-red-200 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h2 className="font-poppins font-bold text-2xl text-red-800 mb-6">
                Parts Cleaner C7
              </h2>
              <p className="font-jakarta text-red-700 leading-relaxed">
                <strong>Features:</strong> With the strong dissolving power, high spray pressure and degreasing
                effect, this can clean tough dirt that has accumulated for a long period of
                time.<br /><br />
                <strong>Application:</strong>Cleansing parts when an engine is dismantled or machine parts with
                tough dirt
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Summary Table Section */}
      <div className="pt-12 px-5 md:px-20">
        <h2 className="font-poppins font-bold text-4xl md:text-5xl text-blue-900 mb-12 text-center">
          Product Comparison
        </h2>
        
        <div className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 md:p-10 shadow-xl overflow-x-auto">
          <table className="w-full min-w-[900px] text-left table-auto">
            <thead className="border-b-2 border-blue-200">
              <tr className="text-blue-800 font-semibold uppercase text-sm">
                <th className="py-4 px-3">Product name</th>
                <th className="py-4 px-3 text-center">Cleansing effectiveness *1</th>
                <th className="py-4 px-3">Odor</th>
                <th className="py-4 px-3">Drying speed</th>
                <th className="py-4 px-3">Major application</th>
              </tr>
            </thead>
            <tbody className="font-jakarta text-blue-900 divide-y divide-blue-100">
              <tr className="hover:bg-green-50 transition-colors">
                <td className="py-4 px-3 font-medium">GP Cleaner</td>
                <td className="py-4 px-3 text-center">7</td>
                <td className="py-4 px-3">Weak</td>
                <td className="py-4 px-3">Fast</td>
                <td className="py-4 px-3">Multipurpose</td>
              </tr>
              <tr className="hover:bg-green-50 transition-colors">
                <td className="py-4 px-3 font-medium">GP Cleaner C-Y</td>
                <td className="py-4 px-3 text-center">7</td>
                <td className="py-4 px-3">Weak</td>
                <td className="py-4 px-3">Fast</td>
                <td className="py-4 px-3">Multipurpose (chemical attack resistant)</td>
              </tr>
              <tr className="hover:bg-green-50 transition-colors">
                <td className="py-4 px-3 font-medium">GP Cleaner C-Y2</td>
                <td className="py-4 px-3 text-center">7</td>
                <td className="py-4 px-3">Weak</td>
                <td className="py-4 px-3">Fast</td>
                <td className="py-4 px-3">Multipurpose (chemical attack resistant)</td>
              </tr>
              <tr className="hover:bg-yellow-50 transition-colors">
                <td className="py-4 px-3 font-medium">Ace Cleaner C3</td>
                <td className="py-4 px-3 text-center">8</td>
                <td className="py-4 px-3">Middle</td>
                <td className="py-4 px-3">Middle</td>
                <td className="py-4 px-3">Degreasing and cleansing molds and other general parts</td>
              </tr>
              <tr className="hover:bg-red-50 transition-colors">
                <td className="py-4 px-3 font-medium">Mold Cleaner</td>
                <td className="py-4 px-3 text-center">-</td>
                <td className="py-4 px-3">Weak</td>
                <td className="py-4 px-3">Extremely slow</td>
                <td className="py-4 px-3">Cleansing plastic dirt on molds</td>
              </tr>
              <tr className="hover:bg-teal-50 transition-colors">
                <td className="py-4 px-3 font-medium">Depo Cleaner</td>
                <td className="py-4 px-3 text-center">-</td>
                <td className="py-4 px-3">Strong</td>
                <td className="py-4 px-3">Extremely slow</td>
                <td className="py-4 px-3">Cleansing mold deposit and plastic dirt</td>
              </tr>
              <tr className="hover:bg-teal-50 transition-colors">
                <td className="py-4 px-3 font-medium">Brake & Parts Cleaner C5</td>
                <td className="py-4 px-3 text-center">8</td>
                <td className="py-4 px-3">Middle</td>
                <td className="py-4 px-3">Fast</td>
                <td className="py-4 px-3">For break and other general parts</td>
              </tr>
              <tr className="hover:bg-teal-50 transition-colors">
                <td className="py-4 px-3 font-medium">Brake & Parts Cleaner Jumbo A</td>
                <td className="py-4 px-3 text-center">8</td>
                <td className="py-4 px-3">Middle</td>
                <td className="py-4 px-3">Fast</td>
                <td className="py-4 px-3">For break and other general parts</td>
              </tr>
              <tr className="hover:bg-red-50 transition-colors">
                <td className="py-4 px-3 font-medium">Parts Cleaner C7 10</td>
                <td className="py-4 px-3 text-center">10</td>
                <td className="py-4 px-3">Strong</td>
                <td className="py-4 px-3">Slow</td>
                <td className="py-4 px-3">For general parts (powerful type)</td>
              </tr>
            </tbody>
          </table>
          <p className="font-jakarta text-blue-700 text-sm mt-6">
            *1. Relative comparison with our products on a scale of one (weakest) to ten (strongest)
          </p>
        </div>
      </div>

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
  );
}