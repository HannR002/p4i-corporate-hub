'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { experts, type ExpertCategory } from '@/data/experts';

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
  const filteredExperts =
    activeCategory === 'Semua'
      ? experts
      : experts.filter((expert) => expert.category === activeCategory);
  const scrollRef = useRef<HTMLElement>(null);

  function scroll(direction: number) {
    const element = scrollRef.current;
    if (!element) return;
    const cardWidth = element.children[0]?.clientWidth ?? 300;
    element.scrollBy({
      left: direction * (cardWidth + 16),
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'instant'
        : 'smooth',
    });
  }

  function selectCategory(category: ExpertCategory) {
    setActiveCategory(category);
    scrollRef.current?.scrollTo({ left: 0, behavior: 'instant' });
  }

  return (
    <div className="w-full">
      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center max-w-4xl mx-auto">
        {categories.map((cat) => (
          <button
            type="button"
            key={cat}
            onClick={() => selectCategory(cat)}
            aria-pressed={activeCategory === cat}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500 ${
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
      <div className="relative group">
        {filteredExperts.length > 1 && (
          <button
            type="button"
            onClick={() => scroll(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 lg:-translate-x-4 z-10 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-600 hover:text-blue-600 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500 opacity-100 transition-opacity disabled:opacity-0 hidden md:flex"
            aria-label="Ahli sebelumnya"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        <section
          ref={scrollRef}
          aria-label="Daftar ahli; gunakan tombol panah untuk menggeser"
          // biome-ignore lint/a11y/noNoninteractiveTabindex: Keyboard users must focus this scrollable region to use arrow keys.
          tabIndex={0}
          className={`flex overflow-x-auto gap-4 snap-x snap-mandatory scrollbar-hide py-4 px-2 -mx-2 ${
            filteredExperts.length === 1 ? 'justify-center' : ''
          }`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filteredExperts.map((expert) => (
            <div
              key={expert.id}
              className={`snap-start shrink-0 bg-white rounded-2xl border border-slate-100 p-5 shadow-xs hover:shadow-md transition-shadow flex flex-col min-h-52 focus-within:ring-2 focus-within:ring-blue-500 focus-within:outline-hidden ${
                filteredExperts.length === 1
                  ? 'w-[85vw] max-w-sm'
                  : 'w-[85vw] sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] xl:w-[calc(25%-12px)]'
              }`}
            >
              <div className="flex items-start gap-4 h-full">
                <div className="w-16 h-16 shrink-0 rounded-full bg-slate-100 border-2 border-white shadow-xs overflow-hidden relative flex items-center justify-center">
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
                  <h3
                    className="font-bold text-slate-900 wrap-anywhere leading-tight"
                    title={expert.name}
                  >
                    {expert.name}
                  </h3>
                  <p
                    className="text-xs text-slate-500 mb-2 mt-1 line-clamp-2"
                    title={expert.qualification}
                  >
                    {expert.qualification}
                  </p>

                  <p className="text-[10px] text-slate-500 mb-2">
                    {expert.historical ? 'Arsip 2014' : 'Jejaring digital tambahan'} ·{' '}
                    {expert.sourceLabel}
                  </p>
                  <div className="mt-auto pt-1">
                    <span
                      className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-wider rounded-md truncate max-w-full"
                      title={expert.expertise}
                    >
                      {expert.expertise}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {filteredExperts.length > 1 && (
          <button
            type="button"
            onClick={() => scroll(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 lg:translate-x-4 z-10 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-600 hover:text-blue-600 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500 opacity-100 transition-opacity disabled:opacity-0 hidden md:flex"
            aria-label="Ahli berikutnya"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
