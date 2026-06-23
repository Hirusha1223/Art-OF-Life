"use client";

import { motion } from "framer-motion";

// අපේ පාට්නර්ස්ලාගේ නම් ටික Array එකක් විදිහට (ඉදිරියේදී ලෝගෝස් SVG/Image ආවම රීප්ලේස් කරන්න පුළුවන්)
const luxuryPartners = [
  { id: 1, name: "THE HILTON LUXURY COLLECTION" },
  { id: 2, name: "GALADARI ELITE SANCTUARIES" },
  { id: 3, name: "AMANGALLA PRIVATE RESERVES" },
  { id: 4, name: "THE SOBER RECOVERY RESORT" },
];

export default function TrustBar() {
  return (
    <section className="w-full bg-alabaster py-12 border-b border-midnight/5">
      <div className="max-w-7xl mx-auto px-8">
        {/* කුඩා සිරස්තලය */}
        <p className="text-center text-[10px] uppercase tracking-[0.3em] text-midnight/40 mb-8 font-sans">
          In Partnership with World-Class Sanctuaries
        </p>

        {/* ලෝගෝස් ටික එක පෙළට පෙන්වන Flexbox එක */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 opacity-75">
          {luxuryPartners.map((partner, index) => (
            <motion.div
              key={partner.id}
              // යූසර් ස්ක්‍රෝල් කරන් එද්දී එකින් එක හෙමින් මතු වන ඇනිමේෂන් එක (Staggered Fade-in)
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              className="text-center"
            >
              <span className="font-serif text-sm md:text-base font-medium tracking-[0.25em] text-champagne hover:text-midnight transition-colors duration-500 cursor-default">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}