// app/law/page.tsx
'use client';

import { AlertTriangle, Flame, Droplet, Skull, Beaker } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function LawAndSafety() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-sky-200 via-40% to-sky-400 font-sans text-blue-900 pt-24 relative overflow-hidden">

      {/* Gradient ลอย ๆ ช่วยเชื่อมสี (เนียนสุด) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400/20 via-transparent to-sky-300/20"></div>
        <div className="absolute top-0 -left-40 w-96 h-96 rounded-full bg-gradient-to-br from-blue-300/30 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 -right-40 w-96 h-96 rounded-full bg-gradient-to-tl from-sky-400/30 to-transparent blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-white/10 to-transparent blur-3xl"></div>
      </div>

      {/* Hero Title */}
      <section className="py-16 px-6 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-poppins font-bold text-5xl md:text-6xl text-blue-900 mb-4"
        >
          Regulations & Safety
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-jakarta text-lg text-blue-700 max-w-3xl mx-auto"
        >
          We strictly comply with global safety and environmental regulations to ensure product safety and sustainability.
        </motion.p>
      </section>

      {/* Regulations Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "PRTR",
              desc: "<strong>Pollutant Release and Transfer Registers (PRTR)</strong> are systems to collect and disseminate data on how many toxic chemicals from which source are released into the environment or disposed of as waste. The system calculates the type and volume of chemical substances released into the environment.",
              delay: 0.3
            },
            {
              title: "Ordinance on Prevention of Organic Solvent Poisoning",
              desc: "Organic solvents are volatile and can be taken into the human body by inhalation. The solvents are also absorbed through the skin. If large volumes of such solvents are absorbed, they can cause acute poisoning. To prevent accidental poisoning, the Ordinance on Prevention of Organic Solvent Poisoning was established under the Industrial Safety and Health Act. Substances that need special attention out of all organic solvents are listed and classified into classes 1 to 3.",
              delay: 0.4
            },
            {
              title: "RoHS",
              desc: "<strong>Restriction of Hazardous Substances</strong> is a directive restricting the use of specific hazardous materials in the production of electric and electronic equipment. The directive applies to all components used in the law governing electric and electronic equipment and mandates that companies must not use any harmful substances in every stage from production to disposal. The directive restricts the use of the following 6 substances used in every operation: hexavalent chromium, polybrominated biphenyls (PBB), and polybrominated diphenyl ethers (PBDE). <strong>No RoHS-restricted substance is used in our products.</strong>",
              delay: 0.5
            },
            {
              title: "PFOS and PFOA",
              desc: "Around 1990, perfluorochemicals (PFC), which were thought to be safe, were found to contaminate human and animal blood. Based on this discovery, the US Environmental Protection Agency prohibited the use of perfluorooctane sulfonates (PFOS) out of all PFCs in 2000, which has been used in stain and waterproof coatings. It also prohibited the use of perfluorooctanoic acid (PFOA) for the same reason. <strong>No PFOS and PFOA are used in our products intentionally.</strong>",
              delay: 0.6
            },
            {
              title: "GHS",
              desc: "The <strong>United Nations recommended</strong> is to use the <strong>Globally Harmonized System of Classification and Labelling of Chemicals (GHS)</strong>. The objective is to provide data of the kind and degree of hazard and toxicity for the chemical substance in the form of a label that helps understanding of a safety data sheet according to a globally unified rule.",
              delay: 0.7,
              colSpan: "md:col-span-2"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: item.delay }}
              viewport={{ once: true }}
              className={`bg-white/85 backdrop-blur-lg border border-blue-100/50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${item.colSpan || ''}`}
            >
              <h3 className="font-poppins font-bold text-2xl text-blue-800 mb-4">{item.title}</h3>
              <p
                className="font-jakarta text-blue-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: item.desc }}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Safety Symbols */}
      <section className="bg-white/70 py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-poppins font-bold text-4xl text-center text-blue-900 mb-12"
          >
            Hazard Symbols
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Flame, label: "Combustible and Inflammable", color: "text-red-600" },
              { icon: Droplet, label: "Harmful to health", color: "text-blue-600" },
              { icon: AlertTriangle, label: "Irritant", color: "text-yellow-600" },
              { icon: Skull, label: "Toxic", color: "text-purple-600" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
>
  <div className="p-6 bg-white rounded-3xl shadow-lg border border-blue-100/50 mb-4 transition-transform duration-300 hover:scale-105">
                  <item.icon className={`w-16 h-16 mx-auto ${item.color}`} />
                </div>
                <p className="font-jakarta text-sm text-blue-800 font-medium">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Instructions */}
      <section className="py-16 px-6 max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-100 to-sky-50 rounded-3xl p-10 shadow-xl border border-blue-200/50"
        >
          <h3 className="font-poppins font-bold text-2xl text-blue-900 mb-6 flex items-center gap-3">
            <Beaker className="w-8 h-8 text-blue-600" />
            Instructions for the Use of Aerosol Cans
          </h3>
          <ul className="font-jakarta text-blue-800 space-y-3 list-disc list-inside">
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
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                {text}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Back to Home */}
      <section className="text-center py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-jakarta font-medium text-blue-700 hover:text-blue-500 transition"
          >
            Back to Home
          </Link>
        </motion.div>
      </section>
    </div>
  );
}