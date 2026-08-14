"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import Hero from "./components/sections/Hero";
import BentoGrid from "./components/sections/BentoGrid";

export default function P4ICorporateHub() {
  return (
    <div className="bg-slate-50 font-sans text-slate-900 selection:bg-blue-200">
      <Hero />
      <BentoGrid />

      {/* FLOATING ACTION BUTTON (FAB) */}
      <a 
        href="https://wa.me/6289699161526" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-2xl flex items-center justify-center transition-all hover:-translate-y-1 group"
        aria-label="Chat WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-16 bg-white text-slate-800 px-3 py-1.5 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none border border-slate-100">
          Hubungi Kami
        </span>
      </a>
    </div>
  );
}
