'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';
import { Expert, experts, ExpertCategory } from '@/data/experts';

const categories: ExpertCategory[] = [
  'Semua',
  'Wilayah & Tata Ruang',
  'GIS & Teknologi',
  'Lingkungan & SDA',
  'Sosial & Pemerintahan',
  'Infrastruktur',
  'Sistem Informasi & Digital',
];

export default function ExpertCarousel() {
  const [activeCategory, setActiveCategory] = useState<ExpertCategory>('Semua');
  const [filteredExperts, setFilteredExperts] = useState<Expert[]>(experts);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Filter logic
  useEffect(() => {
    if (activeCategory === 'Semua') {
      setFilteredExperts(experts);
    } else {
      setFilteredExperts(experts.filter((e) => e.category === activeCategory));
    }
    // Reset scroll position on filter change
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [activeCategory]);

  // Autoplay logic
  const scrollNext = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const cardWidth = scrollRef.current.children[0]?.clientWidth || 300;
      
      // If reached the end, go back to start
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: cardWidth + 16, behavior: 'smooth' }); // 16 is gap
      }
    }
  }, []);

  const scrollPrev = useCallback(() => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0]?.clientWidth || 300;
      scrollRef.current.scrollBy({ left: -(cardWidth + 16), behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    if (isPaused) return;

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const interval = setInterval(scrollNext, 5000);
    return () => clearInterval(interval);
  }, [scrollNext, isPaused]);

  return (
    <div className="w-full">
      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center max-w-4xl mx-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
              activeCategory === cat
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:border-blue-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Carousel Container */}
      <div 
        className="relative group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 lg:-translate-x-4 z-10 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-600 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0 hidden md:flex"
          aria-label="Previous expert"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 snap-x snap-mandatory scrollbar-hide py-4 px-2 -mx-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filteredExperts.map((expert) => (
            <div
              key={expert.id}
              className="snap-start shrink-0 w-[85vw] sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] xl:w-[calc(25%-12px)] bg-white rounded-2xl border border-slate-100 p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col h-44 focus-within:ring-2 focus-within:ring-blue-500 focus-within:outline-none"
            >
              <div className="flex items-start gap-4 h-full">
                <div className="w-16 h-16 shrink-0 rounded-full bg-slate-100 border-2 border-white shadow-sm overflow-hidden relative flex items-center justify-center">
                  {expert.portrait ? (
                    <Image
                      src={expert.portrait}
                      alt={expert.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-100 text-slate-400 flex items-center justify-center font-bold text-xl uppercase">
                      {expert.name.charAt(0)}
                    </div>
                  )}
                </div>
                
                <div className="flex flex-col flex-grow min-w-0 h-full">
                  <h3 className="font-bold text-slate-900 truncate" title={expert.name}>
                    {expert.name}
                  </h3>
                  <p className="text-xs text-slate-500 mb-2 truncate" title={expert.qualification}>
                    {expert.qualification}
                  </p>
                  
                  <div className="mt-auto">
                    <span className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-wider rounded-md truncate max-w-full" title={expert.expertise}>
                      {expert.expertise}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 lg:translate-x-4 z-10 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-600 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0 hidden md:flex"
          aria-label="Next expert"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
