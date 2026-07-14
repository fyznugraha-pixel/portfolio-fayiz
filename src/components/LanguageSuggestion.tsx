"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function LanguageSuggestion() {
  const [isVisible, setIsVisible] = useState(false);
  const { setLanguage } = useLanguage();

  useEffect(() => {
    const checkLanguage = () => {
      const hasChosenLang = localStorage.getItem("language");
      const hasDismissed = localStorage.getItem("lang_suggestion_dismissed");
      
      if (!hasChosenLang && !hasDismissed) {
        const userLang = navigator.language || (navigator as any).userLanguage;
        if (userLang && userLang.toLowerCase().startsWith('id')) {
          setIsVisible(true);
        }
      }
    };

    const timer = setTimeout(checkLanguage, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleSwitch = () => {
    setLanguage("id");
    localStorage.setItem("lang_suggestion_dismissed", "true");
    setIsVisible(false);
  };

  const handleDismiss = () => {
    localStorage.setItem("lang_suggestion_dismissed", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-6 right-6 z-[100] max-w-sm w-[calc(100%-3rem)] md:w-auto"
        >
          <div className="glass-panel border border-white/10 p-5 rounded-2xl flex flex-col gap-4 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#E9333A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <button 
              onClick={handleDismiss}
              className="absolute top-3 right-3 text-secondary hover:text-white transition-colors z-10"
              aria-label="Tutup saran bahasa"
            >
              <X size={16} />
            </button>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">🇮🇩</span>
                <h3 className="font-headline-lg text-lg font-bold text-white uppercase">Saran Bahasa</h3>
              </div>
              <p className="font-body text-sm text-secondary leading-relaxed pr-6">
                Kami mendeteksi Anda mengakses dari Indonesia. Ingin beralih ke Bahasa Indonesia untuk pengalaman yang lebih baik?
              </p>
            </div>

            <div className="flex items-center gap-3 mt-1 relative z-10">
              <button
                onClick={handleSwitch}
                className="flex-1 bg-[#E9333A] hover:bg-[#FF4D55] text-white font-label-mono text-xs uppercase px-4 py-2.5 rounded-full transition-colors"
              >
                Ganti ke ID
              </button>
              <button
                onClick={handleDismiss}
                className="flex-1 border border-white/10 hover:border-white/30 text-zinc-300 font-label-mono text-xs uppercase px-4 py-2.5 rounded-full transition-colors"
              >
                Tetap EN
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
