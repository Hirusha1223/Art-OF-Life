"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function InvitationFooter() {
  return (
    // මුළු සෙක්ෂන් එකම Luxury Alabaster (Soft Cream) පසුබිමක නිර්මාණය වේ
    <section 
      style={{ backgroundColor: '#FDFBF7' }} 
      className="w-full text-[#1B263B] pt-32 pb-12 border-t border-[#1B263B]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8 flex flex-col justify-between min-h-[60vh]">
        
        {/* Main Invitation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Side: Call to Action Header (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#C5A880] font-semibold">
              SECURE YOUR STILLNESS
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-normal tracking-wide leading-tight text-[#1B263B]">
              Begin Your Private Immersion.
            </h2>
            <p className="text-sm font-light text-[#1B263B]/70 max-w-sm leading-relaxed">
              Our retreats are highly restricted to ensure complete psychological isolation. Request an invitation to review upcoming sanctuary availability.
            </p>
          </div>

          {/* Right Side: High-End Minimalist Form (7 Columns) */}
          <div className="lg:col-span-7 w-full pt-4">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-8 w-full">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col space-y-2 border-b border-[#1B263B]/20 pb-2 focus-within:border-[#C5A880] transition-colors duration-300">
                  <label className="text-[9px] uppercase tracking-widest text-[#1B263B]/50 font-mono">Full Name</label>
                  <input type="text" placeholder="John Doe" className="bg-transparent border-none outline-none text-base font-light placeholder-[#1B263B]/30 w-full" />
                </div>
                
                <div className="flex flex-col space-y-2 border-b border-[#1B263B]/20 pb-2 focus-within:border-[#C5A880] transition-colors duration-300">
                  <label className="text-[9px] uppercase tracking-widest text-[#1B263B]/50 font-mono">Corporate Email</label>
                  <input type="email" placeholder="john@empire.com" className="bg-transparent border-none outline-none text-base font-light placeholder-[#1B263B]/30 w-full" />
                </div>
              </div>

              <div className="flex flex-col space-y-2 border-b border-[#1B263B]/20 pb-2 focus-within:border-[#C5A880] transition-colors duration-300">
                <label className="text-[9px] uppercase tracking-widest text-[#1B263B]/50 font-mono">Current Mandate / Role</label>
                <input type="text" placeholder="Chief Executive Officer" className="bg-transparent border-none outline-none text-base font-light placeholder-[#1B263B]/30 w-full" />
              </div>

              <motion.button
                className="group flex items-center space-x-3 text-xs uppercase tracking-[0.25em] font-semibold text-[#1B263B] border border-[#1B263B] px-8 py-4 rounded-full hover:bg-[#1B263B] hover:text-white transition-all duration-300"
              >
                <span>Submit Request For Access</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </motion.button>

            </form>
          </div>

        </div>

        {/* Minimalist Corporate Footer */}
        <div className="pt-24 border-t border-[#1B263B]/10 mt-24 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] uppercase tracking-widest text-[#1B263B]/50 font-mono">
          <div>
            © {new Date().getFullYear()} The Art of Life. All Sovereignty Reserved.
          </div>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-[#C5A880] transition-colors">Privacy Architecture</a>
            <a href="#" className="hover:text-[#C5A880] transition-colors">Terms of Governance</a>
          </div>
        </div>

      </div>
    </section>
  );
}