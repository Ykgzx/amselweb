// app/products/pelicoat/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, AlertTriangle, Sparkles } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

// English recommendation messages
const recommendations: Record<string, string> = {
  'Vegetable Oil-Based': 'Perfect for secondary processing like painting — easy to clean!',
  'Fluorine-Based': 'Partially suitable — requires heating (≥150°C) before painting',
  'Silicone-Based': 'Not suitable for painting — silicone adheres too strongly',
  'Fatty Acid Soap': 'Reduces memory marks & stickiness — great for clear resins!',
  'Modified Silicone': 'Prevents stress cracks — ideal for engineering plastics',
  'Autoben AS983': 'Automated spraying with precise control — saves time & waste!'
};

export default function PelicoatSeries() {
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

  // Typewriter + Auto-hide
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
          // Auto-hide after 5 seconds
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
            Pelicoat Series
          </h1>
          <p className="font-jakarta text-xl text-blue-700 max-w-3xl mx-auto">
            Release agents for thermoplastic resin
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="space-y-24">

          {/* 1. Vegetable Oil-Based */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div
                className="relative group cursor-pointer"
                onClick={() => callMascot(recommendations['Vegetable Oil-Based'])}
              >
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
                Suitability For An Item That Needs Secondary Processing
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-poppins font-semibold text-lg text-green-700 mb-3 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-green-600" />
                    Suitable
                  </h3>
                  <h4 className="font-jakarta font-medium text-green-800 mb-2">Vegetable oil-based release agents</h4>
                  <ul className="font-jakarta text-green-700 space-y-1 list-disc list-inside">
                    <li>Pelicoat S (Good release performance)</li>
                    <li>Pelicoat S3-5</li>
                    <li>Pelicoat S6</li>
                    <li>Pelicoat F (For film or thin-walling molding processing)</li>
                  </ul>
                </div>
                <p className="font-jakarta text-green-700 leading-relaxed">
                  <strong>Features:</strong> This paintable release agent has vegetable oil as the main ingredient. It has superb release performance and is appropriate for secondary processing. Any residual agent on the product can be easily washed off with petroleum or alcohol-based general-purpose cleaners.
                </p>
              </div>
            </div>
          </div>

          {/* 2. Fluorine-Based */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:order-2">
              <div
                className="relative group cursor-pointer"
                onClick={() => callMascot(recommendations['Fluorine-Based'])}
              >
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
                Partly Suitable – Fluorine-based release agents
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-poppins font-semibold text-lg text-yellow-700 mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    Partly Suitable
                  </h3>
                  <ul className="font-jakarta text-yellow-700 space-y-1 list-disc list-inside">
                    <li>Pelicoat RF-1</li>
                    <li>Pelicoat FF</li>
                    <li>Pelicoat PV</li>
                  </ul>
                </div>
                <p className="font-jakarta text-yellow-700 leading-relaxed text-sm">
                  <strong>Features:</strong> This release agent contains a fluorine compound as the main ingredient. It forms a uniform film on the mold surface, provides superb release performance, and prevents the mold from becoming dirty. The agent can also be applied as a mold protecting agent. <em>(The agent can be used for secondary processing (painting) only after it is applied and heated (at least 150°C).)</em>
                </p>
              </div>
            </div>
          </div>

          {/* 3. Silicone-Based */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div
                className="relative group cursor-pointer"
                onClick={() => callMascot(recommendations['Silicone-Based'])}
              >
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
                Not Suitable – Silicone-based release agents
              </h2>
              <div className="space-y-6">
                <ul className="font-jakarta text-red-700 space-y-1 list-disc list-inside">
                  <li>Pelicoat α (High viscosity)</li>
                  <li>Pelicoat A</li>
                  <li>Pelicoat BX-2 (Low viscosity)</li>
                </ul>
                <p className="font-jakarta text-red-700 leading-relaxed">
                  <strong>Features:</strong> This release agent contains silicone oil as the main ingredient. It provides high heat resistance and release performance. Depending on the molding conditions, high or low viscosity can be chosen.
                </p>
              </div>
            </div>
          </div>

          {/* 4. Fatty Acid Soap */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:order-2">
              <div
                className="relative group cursor-pointer"
                onClick={() => callMascot(recommendations['Fatty Acid Soap'])}
              >
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
                Special Purposes – Anti-memory & Less-sticky
              </h2>
              <div className="space-y-6">
                <h3 className="font-poppins font-semibold text-lg text-teal-700 mb-3">Pelicoat Z</h3>
                <p className="font-jakarta text-teal-700 leading-relaxed">
                  <strong>Features:</strong> This anti-memory and less-sticky release agent contains fatty acid soap as the main ingredient. The agent is appropriate for thermoplastic resins in general as well as transparent resins.
                </p>
              </div>
            </div>
          </div>

          {/* 5. Modified Silicone */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div
                className="relative group cursor-pointer"
                onClick={() => callMascot(recommendations['Modified Silicone'])}
              >
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
                Special Purposes – Stress-crack Resistant
              </h2>
              <div className="space-y-6">
                <h3 className="font-poppins font-semibold text-lg text-indigo-700 mb-3">Pelicoat K Series</h3>
                <ul className="font-jakarta text-indigo-700 space-y-1 list-disc list-inside">
                  <li>Pelicoat K</li>
                  <li>Pelicoat KP</li>
                  <li>Pelicoat GT-1</li>
                  <li>Pelicoat GT-3</li>
                </ul>
                <p className="font-jakarta text-indigo-700 leading-relaxed">
                  <strong>Features:</strong> This release agent that contains modified silicone oil as the main ingredient offers outstanding release performance and minimizes stress-cracks. This general-purpose agent is resistant to heat and static and is appropriate for transparent resins and engineering plastics.
                </p>
              </div>
            </div>
          </div>

          {/* 6. Automatic Sprayer */}
          <div
            className="bg-gradient-to-r from-blue-100 to-cyan-50 rounded-3xl p-12 shadow-2xl border border-blue-200 cursor-pointer"
            onClick={() => callMascot(recommendations['Autoben AS983'])}
          >
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
                  Automatic Release Agent Sprayer
                </h2>
                <h3 className="font-jakarta font-semibold text-xl text-blue-700 mb-3">
                  Autoben AS983 Type
                </h3>
                <p className="font-jakarta text-blue-700 leading-relaxed max-w-3xl">
                  <strong>Note:</strong> Mount this Pelicoat cans onto the Autoben. The system makes it easier to spray and set the spraying time and quantity. The device applies the agent appropriately and equally according to the number of shots specified.
                </p>
              </div>
            </div>
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