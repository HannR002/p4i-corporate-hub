"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, LineChart, GraduationCap, ArrowRight, MessageCircle, MapPin, Mail, Phone, Video, Settings, Activity, Lightbulb, Globe, Users, Layout, Languages } from "lucide-react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function P4ICorporateHub() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200">
      {/* 1. GLASSMORPHISM NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-2">
              <Image src="/p4i-logo.png" alt="P4I Logo" width={48} height={48} className="object-contain" />
              <span className="font-bold text-xl tracking-tight text-slate-800">Corporate Hub</span>
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              {['Beranda', 'Layanan', 'OJS Jurnal', 'Kontak'].map((item) => {
                const isExternal = item === 'OJS Jurnal';
                const href = isExternal ? 'https://journal.p4ijournal.org/' : `#${item.toLowerCase().replace(' ', '-')}`;
                
                return isExternal ? (
                  <a
                    key={item}
                    href={href}
                    className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
                  >
                    {item}
                  </a>
                ) : (
                  <Link
                    key={item}
                    href={href}
                    className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
                  >
                    {item}
                  </Link>
                );
              })}
              <div className="flex items-center gap-4 border-l border-slate-300 pl-4">
                <a href="https://wa.me/6289699161526" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 transition-colors w-5 h-5 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </a>
                <a href="https://instagram.com/p4i.official" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 transition-colors w-5 h-5 flex items-center justify-center">
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 transition-colors w-5 h-5 flex items-center justify-center">
                  <Video className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button className="text-slate-600 hover:text-blue-600 font-medium">Menu</button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* 2. HERO SECTION */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
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
              <a 
                href="https://journal.p4ijournal.org/" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all hover:-translate-y-0.5"
              >
                Telusuri Jurnal
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <Link 
                href="#layanan" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-slate-700 bg-white border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all hover:-translate-y-0.5"
              >
                Layanan Konsultan
              </Link>
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

        {/* 3. BENTO GRID SECTION */}
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
                <a href="https://journal.p4ijournal.org/index.php/journal/about/submissions" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 group mt-auto">
                  Submit Jurnal <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
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
                  <Link href="#konsultasi" className="inline-flex items-center text-white font-semibold hover:text-blue-300 group-hover:underline mt-auto">
                    Konsultasi Bisnis <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
                {/* Decorative background element */}
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
                  <Link href="#academy" className="inline-flex items-center justify-center px-6 py-3 shrink-0 rounded-full text-blue-600 bg-blue-50 hover:bg-blue-100 font-medium transition-colors">
                    Daftar Sekarang
                  </Link>
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
              {/* Kolom Kiri: P4I Consulting */}
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

              {/* Kolom Kanan: P4I Academy */}
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
      </main>

      {/* 4. GLOBAL FOOTER */}
      <footer id="kontak" className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Kolom 1: Tentang */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Image src="/p4i-logo.png" alt="P4I Logo" width={48} height={48} className="object-contain" />
                <span className="font-bold text-xl text-white">Corporate Hub</span>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                Pusat Solusi Riset, Teknologi, dan Edukasi Enterprise terkemuka yang mengintegrasikan publikasi, konsultasi IT, dan akademi profesional.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors text-white" aria-label="Twitter">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors text-white" aria-label="LinkedIn">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
              </div>
            </div>

            {/* Kolom 2: Kantor Pusat */}
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Kantor Pusat</h4>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-1 text-blue-500 shrink-0" />
                  <span>Jl. TP. Sriwijaya, Beliung, <br />Kec. Kota Baru, Kota Jambi, <br />Jambi 36361 - 9HGM+84H</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-blue-500 shrink-0" />
                  <span>+62 896-9916-1526</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-blue-500 shrink-0" />
                  <span>admin@p4ijournal.org</span>
                </li>
              </ul>
            </div>

            {/* Kolom 3: Kantor Cabang */}
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Kantor Cabang</h4>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-1 text-blue-500 shrink-0" />
                  <span>Jl. Cilumbang Mekar RT 01/RW 08, <br />Kec. Situ Gede, Kota Bogor, <br />Jawa Barat</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} P4I Corporate Hub. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <span>System Architect & Designed by</span>
              <a href="#" className="font-semibold hover:text-white transition-colors">Muhammad Farhan</a>
              <div className="flex items-center gap-1.5 ml-1">
                <a href="https://www.linkedin.com/in/farhan-muhammad-b5332b40a/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <FaLinkedin className="w-4 h-4" />
                </a>
                <a href="https://github.com/HannR002" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <FaGithub className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* 5. FLOATING ACTION BUTTON (FAB) */}
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
