"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SmartLink from '../ui/SmartLink';

export default function Hero() {
  return (
    <>
      <section id="about" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6"
          >
            Pusat Solusi Riset, Teknologi,<br className="hidden md:block" /> dan Edukasi Enterprise
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10"
          >
            Mengintegrasikan keunggulan publikasi akademik dengan inovasi transformasi digital dan tata kelola profesional.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <SmartLink 
              href="https://journal.p4ijournal.org/" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all hover:-translate-y-0.5"
            >
              Telusuri Jurnal
              <ArrowRight className="ml-2 w-5 h-5" />
            </SmartLink>
            <SmartLink 
              href="#layanan" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-slate-700 bg-white border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all hover:-translate-y-0.5"
            >
              Layanan Konsultan
            </SmartLink>
          </motion.div>
        </div>
        
        {/* Subtle background gradient */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-slate-50 to-slate-50"></div>
      </section>

      {/* GLOBAL IMPACT METRICS */}
      <section className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 mb-16">
        <div className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full md:w-2/3">
            <div className="text-center md:text-left">
              <p className="text-3xl font-extrabold text-slate-900">15,000+</p>
              <p className="text-sm text-slate-500 font-medium mt-1">Riset Terpublikasi</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-3xl font-extrabold text-slate-900">50+</p>
              <p className="text-sm text-slate-500 font-medium mt-1">Klien Konsultasi Enterprise</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-3xl font-extrabold text-slate-900">99.8%</p>
              <p className="text-sm text-slate-500 font-medium mt-1">Tingkat Keberhasilan Transformasi</p>
            </div>
          </div>
          
          <div className="w-full md:w-1/3 flex items-center justify-center md:justify-end">
            <svg width="150" height="60" viewBox="0 0 150 60" className="overflow-visible">
              <defs>
                <linearGradient id="growthGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#22c55e" />
                </linearGradient>
              </defs>
              <motion.path
                d="M0 50 Q 25 50, 50 30 T 100 20 T 150 5"
                fill="none"
                stroke="url(#growthGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ strokeDasharray: 200, strokeDashoffset: 200 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
              />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}
