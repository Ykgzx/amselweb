// app/law/page.tsx
'use client';

import { AlertTriangle, Flame, Droplet, Skull, Beaker } from 'lucide-react';
import Link from 'next/link';

export default function LawAndSafety() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 font-sans text-orange-900 pt-24">

      {/* Hero Title */}
      <section className="py-16 px-6 text-center">
        <h1 className="font-poppins font-bold text-5xl md:text-6xl text-orange-900 mb-4 animate-fadeIn">
          Law, Regulations & Safety
        </h1>
        <p className="font-jakarta text-lg text-orange-700 max-w-3xl mx-auto animate-fadeIn animation-delay-200">
          We strictly comply with global safety and environmental regulations to ensure product safety and sustainability.
        </p>
      </section>

      {/* Regulations Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* PRTR */}
          <div className="bg-white/80 backdrop-blur-xl border border-orange-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fadeIn animation-delay-300">
            <h3 className="font-poppins font-bold text-2xl text-orange-800 mb-4">PRTR</h3>
            <p className="font-jakarta text-orange-700 leading-relaxed">
              <strong>Pollutant Release and Transfer Registers (PRTR)</strong> are systems to collect and disseminate data on how many toxic chemicals from which source are released into the environment or disposed of as waste. The system calculates the type and volume of chemical substances released into the environment.
            </p>
          </div>

          {/* Organic Solvent Poisoning */}
          <div className="bg-white/80 backdrop-blur-xl border border-orange-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fadeIn animation-delay-400">
            <h3 className="font-poppins font-bold text-2xl text-orange-800 mb-4">Ordinance on Prevention of Organic Solvent Poisoning</h3>
            <p className="font-jakarta text-orange-700 leading-relaxed">
              Organic solvents are volatile and can be taken into the human body by inhalation. The solvents are also absorbed through the skin. If large volumes of such solvents are absorbed, they can cause acute poisoning. To prevent accidental poisoning, the Ordinance on Prevention of Organic Solvent Poisoning was established under the Industrial Safety and Health Act. Substances that need special attention out of all organic solvents are listed and classified into classes 1 to 3.
            </p>
          </div>

          {/* RoHS */}
          <div className="bg-white/80 backdrop-blur-xl border border-orange-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fadeIn animation-delay-500">
            <h3 className="font-poppins font-bold text-2xl text-orange-800 mb-4">RoHS</h3>
            <p className="font-jakarta text-orange-700 leading-relaxed">
              <strong>Restriction of Hazardous Substances</strong> is a directive restricting the use of specific hazardous materials in the production of electric and electronic equipment. The directive applies to all components used in the law governing electric and electronic equipment and mandates that companies must not use any harmful substances in every stage from production to disposal. The directive restricts the use of the following 6 substances used in every operation: hexavalent chromium, polybrominated biphenyls (PBB), and polybrominated diphenyl ethers (PBDE). No RoHS-restricted substance is used in our products.
            </p>
          </div>

          {/* PFOS and PFOA */}
          <div className="bg-white/80 backdrop-blur-xl border border-orange-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fadeIn animation-delay-600">
            <h3 className="font-poppins font-bold text-2xl text-orange-800 mb-4">PFOS and PFOA</h3>
            <p className="font-jakarta text-orange-700 leading-relaxed">
              Around 1990, perfluorochemicals (PFC), which were thought to be safe, were found to contaminate human and animal blood. Based on this discovery, the US Environmental Protection Agency prohibited the use of perfluorooctane sulfonates (PFOS) out of all PFCs in 2000, which has been used in stain and waterproof coatings. It also prohibited the use of perfluorooctanoic acid (PFOA) for the same reason. <strong>No PFOS and PFOA are used in our products intentionally.</strong>
            </p>
          </div>

          {/* GHS */}
          <div className="bg-white/80 backdrop-blur-xl border border-orange-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fadeIn animation-delay-700 md:col-span-2">
            <h3 className="font-poppins font-bold text-2xl text-orange-800 mb-4">GHS</h3>
            <p className="font-jakarta text-orange-700 leading-relaxed">
              The <strong>United Nations recommended</strong> is to use the <strong>Globally Harmonized System of Classification and Labelling of Chemicals (GHS)</strong>. The objective is to provide data of the kind and degree of hazard and toxicity for the chemical substance in the form of a label that helps understanding of a safety data sheet according to a globally unified rule.
            </p>
          </div>
        </div>
      </section>

      {/* Safety Symbols */}
      <section className="bg-white/60 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-poppins font-bold text-4xl text-center text-orange-900 mb-12 animate-fadeIn animation-delay-800">
            Hazard Symbols
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Flame, label: "Combustible and Inflammable", color: "text-red-600" },
              { icon: Droplet, label: "Harmful to health", color: "text-orange-600" },
              { icon: AlertTriangle, label: "Harmful to health", color: "text-yellow-600" },
              { icon: Skull, label: "Harmful to aquatic environment", color: "text-blue-600" },
            ].map((item, i) => (
              <div
                key={i}
                className={`text-center animate-fadeIn animation-delay-${900 + i * 100}`}
              >
                <div className="p-6 bg-white rounded-3xl shadow-lg border border-orange-100 mb-4 transition-transform duration-300 hover:scale-105">
                  <item.icon className={`w-16 h-16 mx-auto ${item.color}`} />
                </div>
                <p className="font-jakarta text-sm text-orange-800 font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Instructions */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-orange-100 to-orange-50 rounded-3xl p-10 shadow-xl border border-orange-200 animate-fadeIn animation-delay-1300">
          <h3 className="font-poppins font-bold text-2xl text-orange-900 mb-6 flex items-center gap-3">
            <Beaker className="w-8 h-8 text-orange-600" />
            Instructions for the Use of Aerosol Cans
          </h3>
          <ul className="font-jakarta text-orange-800 space-y-3 list-disc list-inside">
            {[
              "Read carefully before use.",
              "Mistake may cause poisoning, fire, and explosion of cans. Read carefully and understand the cautions and MSDS before use.",
              "It is harmful to the human body if you inhale the spray. Use in a well-ventilated place.",
              "If you inhaled large volumes of the agent or if you feel sick, move to fresh air. If you do not recover, consult a physician.",
              "Do not spray toward eyes, nose, mouth, or skin. If the agent gets into the eyes, wash thoroughly with water.",
              "Do not use near fire, heat, or sparks. The agent is combustible.",
              "Do not store in places with a temperature above 40°C. Do not expose to direct sunlight because doing so may cause an explosion or leak.",
              "After use, dispose of the can by piercing the spray button outward, away from open flames until the spray sound ceases. Discarded the disposal of the emptied can to specialist waste treatment service approved by the prefectural governor."
            ].map((text, i) => (
              <li key={i} className={`animate-fadeIn animation-delay-${1400 + i * 50}`}>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Back to Home */}
      <section className="text-center py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-jakarta font-medium text-orange-700 hover:text-orange-500 transition animate-fadeIn animation-delay-1800"
        >
          Back to Home
        </Link>
      </section>
    </div>
  );
}