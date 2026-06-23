"use client";

import { motion } from "framer-motion";
import { Brain, ShieldAlert, Activity } from "lucide-react";

// කාඩ්ස් 3ට අවශ්‍ය දත්ත (Metrics & Icons)
const matrixData = [
  {
    id: 1,
    icon: <ShieldAlert className="w-6 h-6 text-champagne" />,
    tag: "DEFICIT TAX",
    title: "Decision Fatigue",
    desc: "Continuous high-stakes choices deplete cognitive reserves, leading to conservative or compromised leadership execution.",
    metric: "88% Mitigation",
  },
  {
    id: 2,
    icon: <Brain className="w-6 h-6 text-champagne" />,
    tag: "COGNITIVE ROI",
    title: "Quantum Clarity",
    desc: "Bespoke neuro-reset protocols designed to expand lateral thinking, restoring raw vision and strategic precision.",
    metric: "94% Activation",
  },
  {
    id: 3,
    icon: <Activity className="w-6 h-6 text-champagne" />,
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
          <p className="text-[10px] uppercase tracking-[0.3em] text-champagne font-semibold">
            THE ANATOMY OF EXCELLENCE
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-normal tracking-wide leading-tight">
            Quantifying the Immeasurable.
          </h2>
        </div>

        {/* Asymmetric Cards Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {matrixData.map((item, index) => (
            <motion.div
              key={item.id}
              // යූසර් ස්ක්‍රෝල් කරන් එද්දී එකින් එක ලස්සනට පාවෙලා මතු වෙන්න
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              // Ultra-luxury glassmorphism hover effects සහ රන්වන් බෝඩර්ස්
              className="group relative flex flex-col justify-between bg-white/2 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:border-champagne/40 hover:bg-white/0.04 transition-all duration-500 cursor-default overflow-hidden min-h-350px"
            >
              {/* Hover එකේදී කාඩ් එක ඇතුළෙන් එන සියුම් රන්වන් ආලෝකය (Ambient Glow) */}
              <div className="absolute inset-0 bg-linear-to-br from-champagne/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="space-y-6 relative z-10">
                {/* Icon & Mini Tag */}
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5 group-hover:border-champagne/30 transition-colors duration-500">
                    {item.icon}
                  </div>
                  <span className="text-[9px] uppercase tracking-[0.25em] text-white/40 font-mono">
                    {item.tag}
                  </span>
                </div>

                {/* Card Title & Desc */}
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl font-normal tracking-wide group-hover:text-champagne transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* High-Ticket Data Metric Footer */}
              <div className="pt-6 border-t border-white/5 mt-6 relative z-10">
                <span className="font-serif text-3xl font-light text-champagne tracking-wide">
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