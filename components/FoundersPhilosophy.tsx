"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FoundersPhilosophy() {
  return (
    // 🛠️ Specificity ප්‍රශ්නය මඟහරවා ගන්න inline style එකක් ලෙස background එක hardcode කළා
    <section 
      style={{ backgroundColor: '#1B263B' }} 
      className="w-full text-white py-24 border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Immersive Portrait Image Area (5 Columns) */}
          <div className="lg:col-span-5 relative w-full aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] rounded-2xl overflow-hidden bg-white/5 group">
            <Image
              src="/me.jpg" 
              alt="Founder of The Art of Life"
              fill
              sizes="(max-w-1024px) 100vw, 40vw"
              className="object-cover object-center grayscale contrast-115 transition-transform duration-700 ease-out group-hover:scale-103 group-hover:grayscale-0"
            />
            {/* Dark Premium Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B263B] via-transparent to-transparent opacity-50" />
            
            {/* Subtle Text Over the Image */}
            <div className="absolute bottom-6 left-6 z-10">
              <p className="text-[10px] font-mono tracking-[0.3em] text-[#C5A880]">
                FOUNDER & ARCHITECT
              </p>
            </div>
          </div>

          {/* Right Side: High-End Narrative Content (7 Columns) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#C5A880] font-semibold">
                THE FOUNDER&apos;S VISION
              </p>
              {/* text-white class එක සෘජුවම ලබා දුන්නා */}
              <h2 className="font-serif text-3xl md:text-5xl font-normal tracking-wide leading-tight text-white">
                &quot;Stillness is not the absence of storm. It is the mastery within it.&quot;
              </h2>
            </div>

            {/* අකුරු පැහැදිලිව පෙනෙන්න text-white/80 වෙනුවට text-slate-200 හෝ direct white ලබා දුන්නා */}
            <div className="space-y-6 text-slate-200 font-light text-base md:text-lg leading-relaxed">
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                In an era dominated by hyper-connectivity, the ultimate luxury is no longer access—it is exclusion. The modern sovereign commander does not need more data; they require the raw cognitive vacuum necessary to synthesize it.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                We built <span className="text-[#C5A880] font-medium">The Art of Life</span> not as a escape from reality, but as a structural upgrade to it. By merging ancient neuro-deceleration protocols with bespoke 5-star spatial architecture, we isolate your focus until your vision achieves absolute, unshakeable alignment.
              </motion.p>
            </div>

            {/* Premium Signature Area */}
            <div className="pt-6 border-t border-white/5 flex flex-col space-y-2">
              <span className="font-serif text-2xl font-light text-[#C5A880] tracking-wider italic">
                Hirusha
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-white/40 font-mono">
                Managing Director, The Art of Life
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}