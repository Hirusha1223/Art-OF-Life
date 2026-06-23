"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";


export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* 1. Fully Covered Immersive Hero Video/Image Layer */}
      {/* 1. Fully Covered Immersive Hero Video/Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg" 
          alt="Tranquil forest stream sanctuary"
          fill
          priority
          className="object-cover object-center scale-105"
        />
        {/* Text contrast එක රැකගන්න දාන 35% Premium Overlay එක */}
        <div className="absolute inset-0 bg-midnight/35 backdrop-blur-[1px]" />
      </div>

      {/* 2. Floating Luxury Navbar Layout */}
      <header className="relative z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto backdrop-blur-sm bg-alabaster/10 mt-4 rounded-full border border-white/10">
        <div className="font-serif text-xl font-bold tracking-wider text-white">
          ∞ The Art of Life
        </div>
        <nav className="hidden md:flex items-center space-x-12 text-xs uppercase tracking-[0.2em] text-white/80">
          <a href="#" className="hover:text-champagne transition-colors">Philosophy</a>
          <a href="#" className="hover:text-champagne transition-colors">Curations</a>
          <a href="#" className="hover:text-champagne transition-colors">Founders</a>
          <a href="#" className="hover:text-champagne transition-colors">Sanctuary</a>
        </nav>
        <button className="text-xs uppercase tracking-widest text-white border border-champagne px-6 py-2.5 rounded-full bg-midnight/40 hover:bg-champagne hover:text-midnight transition-all duration-300">
          Request Private Invitation
        </button>
      </header>

      {/* 3. Left-Heavy Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 min-h-[calc(100vh-120px)] flex flex-col justify-center items-start">
        <div className="max-w-3xl space-y-8">
          {/* Main Headline Fade-in with Letter Spacing Dilation */}
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

          {/* Luxury Glassmorphic 60-Second Pause Action Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="pt-4"
          >
            <button className="group flex items-center space-x-4 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl hover:border-champagne/60 transition-all duration-500">
              <div className="w-12 h-12 bg-champagne rounded-full flex items-center justify-between p-3.5 group-hover:scale-110 transition-transform duration-300">
                <Play className="fill-midnight text-midnight w-5 h-5" />
              </div>
              <div className="text-left pr-4">
                <p className="text-xs uppercase tracking-[0.2em] text-champagne font-semibold">Begin Immersion</p>
                <p className="text-xs text-white/60 font-light mt-0.5">60-Second Pause Protocol</p>
              </div>
            </button>
          </motion.div>
        </div>
      </div>

      {/* 4. Scroll Decelerator Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-2">
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">Scroll to Decelerate</span>
        <div className="w-1px h-12 bg-linear-to-b from-white/50 to-transparent" />
      </div>
    </main>
  );
}