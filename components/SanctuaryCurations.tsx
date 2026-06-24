"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const curationData = [
  {
    id: 1,
    image: "/h3.jpg", // දැනට ඔයා ළඟ තියෙන පින්තූරයම දැම්මා, පස්සේ වෙනස් කරන්න පුළුවන්
    location: "GALALARI ELITE, COLOMBO",
    title: "The Sovereign Suite",
    duration: "03 - 07 Days Immersion",
  },
  {
    id: 2,
    image: "/h1.jpg",
    location: "AMANGALLA PRIVATE RESERVES",
    title: "The Fortress Stillness",
    duration: "05 Days Reset",
  },
  {
    id: 3,
    image: "/h2.jpg",
    location: "THE SOBER RECOVERY RESORT",
    title: "Cellular Realignment",
    duration: "07 Days Protocol",
  },
];

export default function SanctuaryCurations() {
  return (
    <section className="w-full bg-[--color-alabaster] text-[--color-midnight] py-24">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[--color-midnight]/10 pb-8">
          <div className="max-w-xl space-y-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[--color-champagne] font-semibold">
              EXCLUSIVE PARTNERSHIPS
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-normal tracking-wide leading-tight">
              The Sanctuary Curations.
            </h2>
          </div>
          <p className="text-sm font-light text-[--color-midnight]/60 max-w-sm mt-4 md:mt-0 leading-relaxed">
            Architecturally optimized environments designed to enforce total cognitive deceleration and strategic re-alignment.
          </p>
        </div>

        {/* 3-Column Immersive Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {curationData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              className="group relative flex flex-col space-y-6 cursor-pointer"
            >
              {/* Image Wrapper with Luxury Zoom Animation */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[--color-midnight]/5">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Immersive Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[--color-midnight]/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                
                {/* Floating Top-Right Arrow Indicator */}
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="absolute top-6 right-6 p-3 bg-[--color-alabaster]/90 backdrop-blur-md rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                >
                  <ArrowUpRight className="w-4 h-4 text-[--color-midnight]" />
                </motion.div>
              </div>

              {/* Meta Data Content */}
              <div className="space-y-2 px-2">
                <p className="text-[10px] font-mono tracking-[0.2em] text-[--color-champagne] font-bold">
                  {item.location}
                </p>
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl font-normal tracking-wide transition-colors duration-300 group-hover:text-[--color-champagne]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs font-light text-[--color-midnight]/50">
                  {item.duration}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}