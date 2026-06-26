"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function InvitationFooter() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setStatus("idle");

    // ⚠️ මෙතන තියෙන ACCOUNT_KEYS ටික පියවර 3 දී අපි මාරු කරමු
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",     // EmailJS සර්විස් ID එක
        "YOUR_TEMPLATE_ID",    // EmailJS ටෙම්ප්ලේට් ID එක
        formRef.current,
        "YOUR_PUBLIC_KEY"      // EmailJS පබ්ලික් කී එක
      )
      .then(
        () => {
          setLoading(false);
          setStatus("success");
          formRef.current?.reset(); // Form එක ක්ලීන් කරනවා
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setLoading(false);
          setStatus("error");
        }
      );
  };

  return (
    <section 
      style={{ backgroundColor: '#FDFBF7' }} 
      className="w-full text-[#1B263B] pt-32 pb-12 border-t border-[#1B263B]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8 flex flex-col justify-between min-h-[60vh]">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Side: CTA Header */}
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

          {/* Right Side: Form (EmailJS Integrated) */}
          <div className="lg:col-span-7 w-full pt-4">
            <form ref={formRef} onSubmit={handleSendEmail} className="space-y-8 w-full">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* ⚠️ name="" properties ටික හරියටම දාලා තියෙන්නේ EmailJS එකට කියවන්න */}
                <div className="flex flex-col space-y-2 border-b border-[#1B263B]/20 pb-2 focus-within:border-[#C5A880] transition-colors duration-300">
                  <label className="text-[9px] uppercase tracking-widest text-[#1B263B]/50 font-mono">Full Name</label>
                  <input type="text" name="user_name" required placeholder="John Doe" className="bg-transparent border-none outline-none text-base font-light placeholder-[#1B263B]/30 w-full" />
                </div>
                
                <div className="flex flex-col space-y-2 border-b border-[#1B263B]/20 pb-2 focus-within:border-[#C5A880] transition-colors duration-300">
                  <label className="text-[9px] uppercase tracking-widest text-[#1B263B]/50 font-mono">Corporate Email</label>
                  <input type="email" name="user_email" required placeholder="john@empire.com" className="bg-transparent border-none outline-none text-base font-light placeholder-[#1B263B]/30 w-full" />
                </div>
              </div>

              <div className="flex flex-col space-y-2 border-b border-[#1B263B]/20 pb-2 focus-within:border-[#C5A880] transition-colors duration-300">
                <label className="text-[9px] uppercase tracking-widest text-[#1B263B]/50 font-mono">Current Mandate / Role</label>
                <input type="text" name="user_role" required placeholder="Chief Executive Officer" className="bg-transparent border-none outline-none text-base font-light placeholder-[#1B263B]/30 w-full" />
              </div>

              <div className="flex flex-col space-y-4">
                <motion.button 
                  type="submit"
                  disabled={loading}
                  className="group flex items-center space-x-3 text-xs uppercase tracking-[0.25em] font-semibold text-[#1B263B] border border-[#1B263B] px-8 py-4 rounded-full hover:bg-[#1B263B] hover:text-white transition-all duration-300 disabled:opacity-50 cursor-pointer"
                >
                  <span>{loading ? "Sending Request..." : "Submit Request For Access"}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </motion.button>

                {/* Status Messages */}
                {status === "success" && (
                  <p className="text-xs text-green-600 font-medium">✓ Your private request has been transmitted securely. We will review it shortly.</p>
                )}
                {status === "error" && (
                  <p className="text-xs text-red-600 font-medium">✕ Transmission failed. Please check your connection or retry.</p>
                )}
              </div>

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