"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, LineChart, GraduationCap, ArrowRight, Settings, Activity, Lightbulb, Globe, Users, Layout, Languages } from 'lucide-react';
import SmartLink from '../ui/SmartLink';

export default function BentoGrid() {
  return (
    <>
      <section id="layanan" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Tiga Pilar Utama Kami</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Solusi terintegrasi untuk kebutuhan akademik, bisnis, dan pengembangan SDM.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* KARTU 1: P4I Publishing */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col h-full"
            >
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">P4I Publishing</h3>
              <p className="text-slate-600 mb-6 flex-grow">
                Fokus pada Publikasi Jurnal Ilmiah (Open Access, Fast Peer-Review, Indexing SINTA/Scholar).
              </p>
              <SmartLink href="/publisher" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 group mt-auto">
                Submit Jurnal <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </SmartLink>
            </motion.div>

            {/* KARTU 2: P4I Consulting */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-slate-900 text-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all flex flex-col h-full lg:col-span-2 relative overflow-hidden group"
            >
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                  <LineChart className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">P4I Consulting</h3>
                <p className="text-slate-300 mb-6 max-w-lg">
                  Layanan Konsultan ERP, Analisis Proses Bisnis, IT Master Plan, dan Transformasi Digital untuk efisiensi enterprise skala besar.
                </p>
                <SmartLink href="/layanan/konsultasi" className="inline-flex items-center text-white font-semibold hover:text-blue-300 group-hover:underline mt-auto">
                  Konsultasi Bisnis <ArrowRight className="ml-2 w-4 h-4" />
                </SmartLink>
              </div>
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-500/30 transition-colors"></div>
            </motion.div>

            {/* KARTU 3: P4I Academy */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col h-full md:col-span-2 lg:col-span-3"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">P4I Academy</h3>
                  <p className="text-slate-600">
                    Layanan Edukasi Profesional, Manajemen, Tata Kelola Ruang, dan Kursus Bahasa Inggris (English Course) yang dirancang untuk meningkatkan kompetensi sumber daya manusia di era global.
                  </p>
                </div>
                <SmartLink href="#academy" className="inline-flex items-center justify-center px-6 py-3 shrink-0 rounded-full text-blue-600 bg-blue-50 hover:bg-blue-100 font-medium transition-colors">
                  Daftar Sekarang
                </SmartLink>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* KATALOG LAYANAN SPESIFIK */}
      <section id="katalog-layanan" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Katalog Layanan Terintegrasi</h2>
            <p className="text-lg text-slate-600">Solusi spesifik yang dirancang untuk menjawab tantangan operasional dan akademik Anda.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Kolom Kiri */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <LineChart className="w-6 h-6 text-blue-600" />
                P4I Consulting
              </h3>
              <div className="space-y-4">
                {[
                  { title: "Konsultan ERP", icon: Settings },
                  { title: "Analisis Proses Bisnis", icon: Activity },
                  { title: "Konsultan IT Strategis", icon: Lightbulb },
                  { title: "Konsultan Transformasi Digital", icon: Globe }
                ].map((service, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex items-center gap-4 border border-slate-100">
                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                      <service.icon className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-slate-800">{service.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Kolom Kanan */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-blue-600" />
                P4I Academy
              </h3>
              <div className="space-y-4">
                {[
                  { title: "Pelatihan Manajemen", icon: Users },
                  { title: "Tata Kelola Ruang", icon: Layout },
                  { title: "English Course", icon: Languages }
                ].map((service, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex items-center gap-4 border border-slate-100">
                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                      <service.icon className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-slate-800">{service.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
