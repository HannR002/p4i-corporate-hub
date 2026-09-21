'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export interface PageHeroProps {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  description?: string;
  backgroundImage?: string;
  backgroundPosition?: 'center' | 'top' | 'bottom';
  overlayVariant?: 'light' | 'medium' | 'heavy' | 'gradient';
  compact?: boolean;
  children?: React.ReactNode;
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function PageHero({
  eyebrow,
  title,
  titleAccent,
  description,
  backgroundImage,
  backgroundPosition = 'center',
  overlayVariant = 'light',
  compact = false,
  children,
}: PageHeroProps) {
  
  // Overlay styles map
  const overlays = {
    light: 'bg-white/80',
    medium: 'bg-white/90',
    heavy: 'bg-white/95',
    gradient: 'bg-gradient-to-t from-white via-white/80 to-white/40',
  };

  return (
    <section className={`relative overflow-hidden ${compact ? 'pt-24 pb-12 lg:pt-28 lg:pb-16' : 'pt-24 pb-20 lg:pt-36 lg:pb-28'}`}>
      
      {/* Background Layer */}
      <div className="absolute inset-0 -z-20 bg-slate-50">
        {backgroundImage ? (
          <Image
            src={backgroundImage}
            alt="Hero Background"
            fill
            className={`object-cover ${backgroundPosition === 'top' ? 'object-top' : backgroundPosition === 'bottom' ? 'object-bottom' : 'object-center'}`}
            priority
            quality={80}
            sizes="100vw"
          />
        ) : (
          <div className="absolute inset-0 p4i-signature-bg opacity-70" />
        )}
      </div>

      {/* Overlay Layer */}
      <div className={`absolute inset-0 -z-10 ${overlays[overlayVariant]} backdrop-blur-[2px]`} />

      {/* Bottom Fade Gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent -z-10" />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {eyebrow && (
          <motion.p
            {...fadeUp}
            className="text-sm font-semibold tracking-widest text-blue-600 uppercase mb-4"
          >
            {eyebrow}
          </motion.p>
        )}
        
        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.15]"
        >
          {title}
          {titleAccent && (
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              {titleAccent}
            </span>
          )}
        </motion.h1>
        
        {description && (
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`mt-6 text-lg text-slate-600 mx-auto leading-relaxed ${compact ? 'max-w-2xl' : 'max-w-3xl'}`}
          >
            {description}
          </motion.p>
        )}

        {children && (
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-10"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
