"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";
import TrustBar from "../components/TrustBar"; 
import PerformanceMatrix from "../components/PerformanceMatrix";
import SanctuaryCurations from "../components/SanctuaryCurations";
import FoundersPhilosophy from "../components/FoundersPhilosophy";
import InvitationFooter from "../components/InvitationFooter";

export default function Home() {
  // 🛠️ බටන් එක ක්ලික් කළාම ස්මූත් විදිහට ඉන්විටේෂන් ෆෝම් එකට ස්ක්‍රෝල් කරවන ෆන්ක්ෂන් එක
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 🛠️ Tailwind v4 Specificity ගැටලුව මඟහරවා ගන්න main එකට සෘජුවම inline style පසුබිම දුන්නා */}
      <main style={{ backgroundColor: '#1B263B' }} className="relative min-h-screen w-full overflow-hidden">
        {/* 1. Immersive Hero Image Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero2.jpg" 
            alt="Tranquil forest stream sanctuary"
            fill
            priority
            className="object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-[#1B263B]/35 backdrop-blur-[1px]" />
        </div>

        {/* 2. Floating Luxury Navbar Layout */}
        <header className="relative z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto backdrop-blur-sm bg-white/10 mt-4 rounded-full border border-white/10">
          <div className="font-serif text-xl font-bold tracking-wider text-white cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            ∞ The Art of Life
          </div>
          
          {/* 🛠️ මෙතන තියෙන හැම ලින්ක් එකකටම ස්මූත් ස්ක්‍රෝල් ඇඩ් කළා */}
          <nav className="hidden md:flex items-center space-x-12 text-xs uppercase tracking-[0.2em] text-white/80">
            <button onClick={() => scrollToSection("philosophy")} className="hover:text-[#C5A880] transition-colors cursor-pointer bg-transparent border-none outline-none">Philosophy</button>
            <button onClick={() => scrollToSection("curations")} className="hover:text-[#C5A880] transition-colors cursor-pointer bg-transparent border-none outline-none">Curations</button>
            <button onClick={() => scrollToSection("founders")} className="hover:text-[#C5A880] transition-colors cursor-pointer bg-transparent border-none outline-none">Founders</button>
            <button onClick={() => scrollToSection("invitation")} className="hover:text-[#C5A880] transition-colors cursor-pointer bg-transparent border-none outline-none">Sanctuary</button>
          </nav>
          
          <button 
            onClick={() => scrollToSection("invitation")}
            className="text-xs uppercase tracking-widest text-white border border-[#C5A880] px-6 py-2.5 rounded-full bg-[#1B263B]/40 hover:bg-[#C5A880] hover:text-[#1B263B] transition-all duration-300 cursor-pointer"
          >
            Request Private Invitation
          </button>
        </header>

        {/* 3. Left-Heavy Main Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 min-h-[calc(100vh-120px)] flex flex-col justify-center items-start">
          <div className="max-w-3xl space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="font-serif text-5xl md:text-7xl font-normal leading-[1.15] text-white tracking-wide"
            >
              WHERE EMPIRES PAUSE.<br />
              <span className="italic font-light text-white/90">WHERE MINDS AWAKEN.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              className="text-white/80 text-lg md:text-xl font-light leading-relaxed max-w-2xl"
            >
              Bespoke meditation architecture for the architects of the future. 
              Access the stillness required for world-shaping clarity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="pt-4"
            >
              <button 
                onClick={() => scrollToSection("philosophy")}
                className="group flex items-center space-x-4 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl hover:border-[#C5A880]/60 transition-all duration-500 cursor-pointer"
              >
                <div className="w-12 h-12 bg-[#C5A880] rounded-full flex items-center justify-center p-3.5 group-hover:scale-110 transition-transform duration-300">
                  <Play className="fill-[#1B263B] text-[#1B263B] w-5 h-5" />
                </div>
                <div className="text-left pr-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#C5A880] font-semibold">Begin Immersion</p>
                  <p className="text-xs text-white/60 font-light mt-0.5">60-Second Pause Protocol</p>
                </div>
              </button>
            </motion.div>
          </div>
        </div>

        {/* 4. Scroll Decelerator Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">Scroll to Decelerate</span>
          <div className="w-px h-12 bg-linear-to-b from-white/50 to-transparent" />
        </div>
      </main>

      <TrustBar />

      {/* 🛠️ ID එකතු කරමින් සෙක්ෂන්ස් ටික වට කළා */}
      <div id="philosophy">
        <PerformanceMatrix />
      </div>

      <div id="curations">
        <SanctuaryCurations />
      </div>

      <div id="founders">
        <FoundersPhilosophy />
      </div>

      <div id="invitation">
        <InvitationFooter />
      </div>
    </>
  );
}