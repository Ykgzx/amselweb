// app/products/AntirustAgents/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

// English recommendation messages
const recommendations: Record<string, string> = {
  'Volatile': 'Double protection with vapor layer — no oil, no stains!',
  'Sabicro': 'Semi-rigid wax coating — easy to remove, great for short-term',
  'Rakutoreru': 'Ultra-thin & quick-drying — minimal prep shots needed',
  'Hi-Guard DK-5': '6+ months outdoor rust protection — ideal for export',
  'Pelicoat 12': '5-in-1: antirust, lube, clean, penetrate, protect!',
  'Legato': 'Extreme pressure resistance + saltwater-proof — long-lasting'
};

export default function AntirustAgents() {
  // --- Mascot Logic ---
  const [showMascot, setShowMascot] = useState<{
    any: boolean;
    currentMessage: string;
  }>({
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
          timeoutRef.current = setTimeout(() => {
            hideMascot();
          }, 5000);
        }
      }, 30);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [showMascot.any, showMascot.currentMessage]);

  const callMascot = (message: string) => {
    setShowMascot({ any: true, currentMessage: message });
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const hideMascot = () => {
    setShowMascot(prev => ({ ...prev, any: false }));
    setDisplayedText('');
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  // --- Table Data Configuration ---
  
  // Table 1: Molds (Efflux, Sabicro, Rakutoreru)
  const moldTableData = [
    { 
      name: 'Efflux F', 
      color: 'bg-blue-100 border-l-4 border-blue-500',
      coating: 'Solid thin coating', 
      effective: 'Six months to one year *2', 
      easy: '◎', 
      app: 'Antirust for molds (semi-sealed) when oil should be avoided',
      rowSpan: 4 
    },
    { 
      name: 'Efflux Colored', 
      color: 'bg-blue-100 border-l-4 border-blue-500',
      coating: 'Green solid thin coating', 
      effective: 'Six months to one year *2', 
      easy: '◎', 
      app: null // Merged
    },
    { 
      name: 'Efflux C-Y', 
      color: 'bg-blue-100 border-l-4 border-blue-500',
      coating: 'Solid thin coating', 
      effective: 'Six months to one year *2', 
      easy: '◎', 
      app: null // Merged
    },
    { 
      name: 'Efflux C-Y Colored', 
      color: 'bg-blue-100 border-l-4 border-blue-500',
      coating: 'Green solid thin coating', 
      effective: 'Six months to one year *2', 
      easy: '◎', 
      app: null // Merged
    },
    { 
      name: 'Sabicro', 
      color: 'bg-yellow-100 border-l-4 border-yellow-500',
      coating: 'Semi-rigid thin film', 
      effective: 'Three to six months', 
      easy: '○', 
      app: 'Antirust for molds (for long period of time)' 
    },
    { 
      name: 'Rakutoreru', 
      color: 'bg-yellow-100 border-l-4 border-yellow-500',
      coating: 'Liquid ultra-thin coating', 
      effective: 'One to three weeks', 
      easy: '◎', 
      app: 'Antirust for molds (for short period of time)' 
    },
  ];

  // Table 2: Equipment & Multipurpose (Hi-Guard, Pelicoat 12, Legato)
  const generalTableData = [
    { 
      name: 'Hi-Guard DK-5', 
      color: 'bg-red-100 border-l-4 border-red-500',
      coating: 'Wax thick coating', 
      effective: 'Six months outdoors', 
      easy: '○', 
      app: 'Antirust for equipment' 
    },
    { 
      name: 'Pelicoat 12', 
      color: 'bg-pink-100 border-l-4 border-pink-400',
      coating: 'Liquid thin coating', 
      effective: 'Six months', 
      easy: '○', 
      app: 'Multipurpose agent for antirust and lubrication functions. Suitable for DIY' 
    },
    { 
      name: 'Legato', 
      color: 'bg-pink-100 border-l-4 border-pink-400',
      coating: 'Liquid thin coating', 
      effective: 'Six months', 
      easy: '○', 
      app: 'Multipurpose agent for antirust and lubrication functions with excellent extreme-pressure performance and abrasion resistance' 
    },
  ];

  return (
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
            Antirust Agents
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="space-y-24">

          {/* === SECTION 1: Volatile === */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div
                className="relative group w-80 h-80 cursor-pointer"
                onClick={() => callMascot(recommendations['Volatile'])}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-amber-300 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                <Image
                  src="/images/product/AntirustAgents.png"
                  alt="AntirustAgents"
                  width={320}
                  height={320}
                  className="relative rounded-full border-8 border-white shadow-2xl object-contain bg-white w-full h-full group-hover:scale-105 transition duration-300"
                />
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl border border-green-200 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h2 className="font-poppins font-bold text-2xl text-green-800 mb-6">
                Antirust Agents for Molds (Volatile)
              </h2>
              <div className="space-y-6">
                <div>
                  <h4 className="font-jakarta font-medium text-green-800 mb-2">Vegetable oil-based release agents</h4>
                  <ul className="font-jakarta text-green-700 space-y-1 list-disc list-inside">
                    <li>Efflux F</li>
                    <li>Efflux Colored</li>
                    <li>Efflux C-Y</li>
                    <li>Efflux C-Y Colored</li>
                  </ul>
                </div>
                <p className="font-jakarta text-green-700 leading-relaxed">
                  <strong>Features:</strong> The agent forms a tight, solid covering over the mold and a layer of vaporized 
                  agent over the covering for double protection. Because the agent contains no oil, 
                  it leaves almost no stains on molded articles. The agent can be removed by 
                  applying several preliminary shots<br/>
                  <strong>Application:</strong> The agent prevents rust on the molds when oil should be avoided or as a 
                  substitute for grease or antirust oil that is difficult to remove. Close the molds and 
                  then pack and seal them in a plastic bag so that the vaporized agent does not 
                  diffuse into the air but remains around the molds for the desired effect.
                </p>
              </div>
            </div>
          </div>

          {/* === SECTION 2: Sabicro === */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:order-2">
              <div
                className="relative group w-80 h-80 cursor-pointer"
                onClick={() => callMascot(recommendations['Sabicro'])}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-amber-300 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                <Image
                  src="/images/product/AntirustAgents-sabicro.png"
                  alt="AntirustAgents-sabicro"
                  width={320}
                  height={320}
                  className="relative rounded-full border-8 border-white shadow-2xl object-contain bg-white w-full h-full group-hover:scale-105 transition duration-300"
                />
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl border border-yellow-200 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 lg:order-1">
              <h2 className="font-poppins font-bold text-2xl text-yellow-800 mb-6">
                Antirust Agents for Molds (Oil-based)
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-poppins font-semibold text-lg text-yellow-700 mb-3 flex items-center gap-2">
                    Sabicro
                  </h3>
                </div>
                <p className="font-jakarta text-yellow-700 leading-relaxed text-sm">
                  <strong>Features:</strong> The antirust agent for plastic molds forms a tight, semi-rigid covering over 
                  the target. This wax-type agent is less permeable so that no oil oozes in the 
                  molding process. Removing the coating is comparatively easy.<br/>
                  <strong>Application:</strong> Antirust for plastic and precision molds (shorter period of time)
                </p>
              </div>
            </div>
          </div>

          {/* === SECTION 3: Rakutoreru === */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div
                className="relative group w-80 h-80 cursor-pointer"
                onClick={() => callMascot(recommendations['Rakutoreru'])}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-red-400 to-pink-300 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                <Image
                  src="/images/product/AntirustAgents-raku.png"
                  alt="AntirustAgents-raku.png"
                  width={320}
                  height={320}
                  className="relative rounded-full border-8 border-white shadow-2xl object-contain bg-white w-full h-full group-hover:scale-105 transition duration-300"
                />
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl border border-red-200 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h2 className="font-poppins font-bold text-2xl text-red-800 mb-6">
                Antirust Agents for Molds (Oil-based)
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-poppins font-semibold text-lg text-red-700 mb-3 flex items-center gap-2">
                    Rakutoreru
                  </h3>
                </div>
                <p className="font-jakarta text-red-700 leading-relaxed">
                  <strong>Features:</strong> This antirust agent for plastic and precision molds forms an ultra-thin, 
                  quick-drying coating. The agent is less sticky and has less oil oozing so that 
                  the coating is easy to remove in the molding process, which reduces the 
                  number of preliminary shots.<br/>
                  <strong>Application:</strong> Antirust for plastic and precision molds (shorter period of time)
                </p>
              </div>
            </div>
          </div>

          {/* === SECTION 4: Hi-Guard DK-5 === */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:order-2">
              <div
                className="relative group w-80 h-80 cursor-pointer"
                onClick={() => callMascot(recommendations['Hi-Guard DK-5'])}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-cyan-300 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                <Image
                  src="/images/product/AntirustAgents-dk5.png"
                  alt="AntirustAgents-dk5.png"
                  width={320}
                  height={320}
                  className="relative rounded-full border-8 border-white shadow-2xl object-contain bg-white w-full h-full group-hover:scale-105 transition duration-300"
                />
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl border border-teal-200 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 lg:order-1">
              <h2 className="font-poppins font-bold text-2xl text-teal-800 mb-6">
                Antirust agent for equipment (Powerful wax type)
              </h2>
              <div className="space-y-6">
                <h3 className="font-poppins font-semibold text-lg text-teal-700 mb-3">
                  Hi-Guard DK-5
                </h3>
                <p className="font-jakarta text-teal-700 leading-relaxed">
                  <strong>Features:</strong> The agent is tack-free two to three hours after application and forms a dried 
                  coat after about one day. After coat formation, no stickiness or oil seepage will 
                  be observed and the antirust function will continue for more than six months 
                  outdoors. The agent is also appropriate for application on equipment with a 
                  complex structure because it penetrates into the minute concaves while the 
                  coat is formed.<br/>
                  <strong>Application:</strong> The agent achieves the antirust effect even under the harsh conditions of high 
                  humidity indoors or outdoors for a long period of time and is appropriate for 
                  export.
                </p>
              </div>
            </div>
          </div>

          {/* === SECTION 5: Pelicoat 12 === */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div
                className="relative group w-80 h-80 cursor-pointer"
                onClick={() => callMascot(recommendations['Pelicoat 12'])}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-purple-300 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                <Image
                  src="/images/product/AntirustAgents-pelicoat12.png"
                  alt="Pelicoat 12"
                  width={320}
                  height={320}
                  className="relative rounded-full border-8 border-white shadow-2xl object-contain bg-white w-full h-full group-hover:scale-105 transition duration-300"
                />
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl border border-indigo-200 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h2 className="font-poppins font-bold text-2xl text-indigo-800 mb-6">
                Multipurpose antirust and lubricating agent
              </h2>
              <div className="space-y-6">
                <h3 className="font-poppins font-semibold text-lg text-indigo-700 mb-3">
                  Pelicoat 12
                </h3>
                <p className="font-jakarta text-indigo-700 leading-relaxed">
                  <strong>Features:</strong> This multipurpose agent features antirust, lubricating, cleaning, and penetration 
                  functions. The agent has outstanding water displacement capabilities and antirust 
                  effects on all metals. With its low surface tension and high permeating capacity, 
                  the agent serves as a lubricant for machines, equipment, and automobile 
                  components. It also prevents fingerprints and sweat from corroding the surface.<br/>
                  <strong>Application:</strong> Antirust and lubrication of metal products and loosening tightly fastened bolts and nuts
                </p>
              </div>
            </div>
          </div>

          {/* === SECTION 6: Legato === */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:order-2">
              <div
                className="relative group w-80 h-80 cursor-pointer"
                onClick={() => callMascot(recommendations['Legato'])}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-cyan-300 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                <Image
                  src="/images/product/AntirustAgents-legato.png"
                  alt="Legato"
                  width={320}
                  height={320}
                  className="relative rounded-full border-8 border-white shadow-2xl object-contain bg-white w-full h-full group-hover:scale-105 transition duration-300"
                />
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl border border-teal-200 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 lg:order-1">
              <h2 className="font-poppins font-bold text-2xl text-teal-800 mb-6">
                Multipurpose antirust and lubricating agent
              </h2>
              <div className="space-y-6">
                <h3 className="font-poppins font-semibold text-lg text-teal-700 mb-3">
                  Legato
                </h3>
                <p className="font-jakarta text-teal-700 leading-relaxed">
                  <strong>Features:</strong> This agent is an outstanding lubricant due to the special oil-based additive. The coating 
                  offers excellent extreme-pressure performance and abrasion resistance so that the 
                  effect lasts for a long time. With its high permeating capacity, the agent penetrates rust 
                  and dirt to easily loosen rusted bolts and nuts. A thin coat with less stickiness covers the 
                  metal surface to produce an outstanding antirust effect. The agent also displaces water 
                  and demonstrates excellent antirust performance against salt water.<br/>
                  <strong>Application:</strong> Maintenance of machine tools and machines for specific purposes, servicing tools, lubricating small precision equipment, 
                  loosening bolts, nuts; screws; antirust; lubrication of metal products
                </p>
              </div>
            </div>
          </div>

          {/* === SECTION 7: List of Products Tables === */}
          <section className="py-12">
            <h2 className="font-poppins font-bold text-4xl text-blue-900 mb-8 text-center">
              List of Products
            </h2>
            
            <div className="flex flex-col gap-12">
              
              {/* Table 1: Mold Agents */}
              <div className="bg-white rounded-3xl shadow-xl border border-blue-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[900px] border-collapse text-left font-jakarta">
                    <thead>
                      <tr className="bg-slate-200 text-slate-700 text-sm uppercase tracking-wider">
                        <th className="p-4 border-b border-r border-slate-300 w-[20%]">Product Name</th>
                        <th className="p-4 border-b border-r border-slate-300 w-[20%]">Coating Status</th>
                        <th className="p-4 border-b border-r border-slate-300 w-[20%]">Antirust Effective for *1</th>
                        <th className="p-4 border-b border-r border-slate-300 w-[10%] text-center">Easiness of Removing *3</th>
                        <th className="p-4 border-b border-slate-300 w-[30%]">Application</th>
                      </tr>
                    </thead>
                    <tbody>
                      {moldTableData.map((item, index) => (
                        <tr key={index} className="hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-none">
                          <td className={`p-4 font-bold text-slate-800 border-r border-slate-200 ${item.color}`}>
                            {item.name}
                          </td>
                          <td className="p-4 text-slate-700 border-r border-slate-200">{item.coating}</td>
                          <td className="p-4 text-slate-700 border-r border-slate-200">{item.effective}</td>
                          <td className="p-4 text-slate-700 border-r border-slate-200 text-center text-lg font-bold">
                            {item.easy === '◎' ? <span className="text-green-600">◎</span> : <span className="text-green-500">○</span>}
                          </td>
                          {/* Render Application cell only if it's defined (not merged) */}
                          {item.app !== null && (
                            <td 
                              className="p-4 text-slate-700 align-middle bg-slate-50/50"
                              rowSpan={item.rowSpan || 1}
                            >
                              {item.app}
                            </td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Table 2: General Purpose Agents */}
              <div className="bg-white rounded-3xl shadow-xl border border-blue-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[900px] border-collapse text-left font-jakarta">
                    <thead>
                      <tr className="bg-slate-200 text-slate-700 text-sm uppercase tracking-wider">
                        <th className="p-4 border-b border-r border-slate-300 w-[20%]">Product Name</th>
                        <th className="p-4 border-b border-r border-slate-300 w-[20%]">Coating Status</th>
                        <th className="p-4 border-b border-r border-slate-300 w-[20%]">Antirust Effective for *1</th>
                        <th className="p-4 border-b border-r border-slate-300 w-[10%] text-center">Easiness of Removing *3</th>
                        <th className="p-4 border-b border-slate-300 w-[30%]">Application</th>
                      </tr>
                    </thead>
                    <tbody>
                      {generalTableData.map((item, index) => (
                        <tr key={index} className="hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-none">
                          <td className={`p-4 font-bold text-slate-800 border-r border-slate-200 ${item.color}`}>
                            {item.name}
                          </td>
                          <td className="p-4 text-slate-700 border-r border-slate-200">{item.coating}</td>
                          <td className="p-4 text-slate-700 border-r border-slate-200">{item.effective}</td>
                          <td className="p-4 text-slate-700 border-r border-slate-200 text-center text-lg font-bold">
                            {item.easy === '◎' ? <span className="text-green-600">◎</span> : <span className="text-green-500">○</span>}
                          </td>
                          <td className="p-4 text-slate-700 bg-slate-50/50">
                            {item.app}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
            
            {/* Legend / Notes */}
            <div className="mt-6 text-sm text-slate-500 px-4 space-y-1 font-jakarta">
              <p>*1: Antirust effects varies depending on conditions of use.</p>
              <p>*2: Values when the molds are semi-sealed.</p>
              <p>*3: ◎ = Very Easy (No preliminary shots needed), ○ = Easy (Few preliminary shots needed)</p>
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

      {/* Mascot - Bottom Center */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <div
          className={`relative transition-all duration-700 ease-in-out transform-gpu ${
            showMascot.any
              ? 'translate-y-0 opacity-100 scale-100 pointer-events-auto'
              : 'translate-y-32 opacity-0 scale-90 pointer-events-none'
          }`}
        >
          {/* Speech Bubble */}
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

          {/* Mascot Image */}
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

      {/* Floating Animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}