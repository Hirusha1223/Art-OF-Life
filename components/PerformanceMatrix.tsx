"use client";

import { motion } from "framer-motion";
import { Brain, ShieldAlert, Activity } from "lucide-react";

const matrixData = [
  {
    id: 1,
    icon: <ShieldAlert className="w-6 h-6 text-[--color-champagne]" />,
    tag: "DEFICIT TAX",
    title: "Decision Fatigue",
    desc: "Continuous high-stakes choices deplete cognitive reserves, leading to conservative or compromised leadership execution.",
    metric: "88% Mitigation",
  },
  {
    id: 2,
    icon: <Brain className="w-6 h-6 text-[--color-champagne]" />,
    tag: "COGNITIVE ROI",
    title: "Quantum Clarity",
    desc: "Bespoke neuro-reset protocols designed to expand lateral thinking, restoring raw vision and strategic precision.",
    metric: "94% Activation",
  },
  {
    id: 3,
    icon: <Activity className="w-6 h-6 text-[--color-champagne]" />,
    tag: "VITAL SIGN",
    title: "Sovereign Health",
    desc: "Reversing physical and cellular burnout markers by structurally realigning the nervous system under 5-star curation.",
    metric: "12x Retention",
  },
];

export default function PerformanceMatrix() {
  return (
    <section className="w-full bg-midnight text-white py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[--color-champagne] font-semibold">
            THE ANATOMY OF EXCELLENCE
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-normal tracking-wide leading-tight text-white">
            Quantifying the Immeasurable.
          </h2>
        </div>

        {/* Asymmetric Cards Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {matrixData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              
              // 🛠️ මෙතනදී Framer Motion එකෙන්ම Hover එක JavaScript මට්ටමින් Control කරනවා
              whileHover={{ 
                borderColor: "#C5A880", // #C5A880 = champagne color
                scale: 1.02,
                boxShadow: "0px 0px 25px rgba(197, 168, 128, 0.2)"
              }}
              
              className="group relative flex flex-col justify-between bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl transition-all duration-300 cursor-default overflow-hidden min-h-[350px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[--color-champagne]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="space-y-6 relative z-10">
                {/* Icon & Mini Tag */}
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5 group-hover:border-[--color-champagne]/30 transition-colors duration-500">
                    {item.icon}
                  </div>
                  <span className="text-[9px] uppercase tracking-[0.25em] text-white/40 font-mono">
                    {item.tag}
                  </span>
                </div>

                {/* Card Title & Desc */}
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl font-normal tracking-wide text-white group-hover:text-[--color-champagne] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* High-Ticket Data Metric Footer */}
              <div className="pt-6 border-t border-white/5 mt-6 relative z-10">
                <span className="font-serif text-3xl font-light text-[--color-champagne] tracking-wide">
                  {item.metric}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}