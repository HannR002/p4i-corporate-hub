'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { MessageSquare, X, Mail, MapPin, ExternalLink, MessageCircle } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import { siteConfig } from '@/lib/site-config';

export default function ContactLauncher() {
  const [isOpen, setIsOpen] = useState(false);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        launcherRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      panelRef.current?.focus();
    }
  }, [isOpen]);

  // Trap focus roughly
  const handleTab = (e: React.KeyboardEvent) => {
    if (!panelRef.current) return;
    const focusableElements = panelRef.current.querySelectorAll(
      'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusableElements[0] as HTMLElement;
    const last = focusableElements[focusableElements.length - 1] as HTMLElement;

    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === first) {
          last.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === last) {
          first.focus();
          e.preventDefault();
        }
      }
    }
  };

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    'admin@p4ijournal.org'
  )}&su=${encodeURIComponent('Permohonan Informasi P4I')}&body=${encodeURIComponent(
    'Yth. P4I,\n\nSaya ingin memperoleh informasi mengenai ...'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div
          ref={panelRef}
          tabIndex={-1}
          onKeyDown={handleTab}
          role="dialog"
          aria-modal="true"
          aria-label="Menu Bantuan P4I"
          className="mb-4 w-[calc(100vw-3rem)] max-w-sm bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden outline-none animate-in fade-in slide-in-from-bottom-5 duration-200"
        >
          <div className="bg-slate-900 px-6 py-4 flex justify-between items-center">
            <h3 className="text-white font-bold text-sm tracking-widest uppercase">
              Butuh Bantuan?
            </h3>
            <button
              onClick={() => {
                setIsOpen(false);
                launcherRef.current?.focus();
              }}
              className="text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
              aria-label="Tutup menu bantuan"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-6 overflow-y-auto max-h-[70vh] space-y-6">
            <p className="text-sm text-slate-500 font-medium">
              Hubungi P4I melalui kanal berikut.
            </p>

            {/* WhatsApp */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp
              </div>
              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-green-50 border border-slate-100 hover:border-green-200 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
              >
                <span className="text-sm font-semibold text-slate-700 group-hover:text-green-700">
                  Chat Langsung
                </span>
                <span className="text-xs text-slate-400 group-hover:text-green-600">
                  wa.me/{siteConfig.contact.whatsappNumber}
                </span>
              </a>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                <Mail className="w-3.5 h-3.5" />
                Email
              </div>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={siteConfig.contact.emailLink}
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-200 transition-colors group text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <span className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">
                    Aplikasi Email
                  </span>
                </a>
                <a
                  href={gmailComposeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-50 hover:bg-red-50 border border-slate-100 hover:border-red-200 transition-colors group text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                >
                  <span className="text-sm font-semibold text-slate-700 group-hover:text-red-700 flex items-center gap-1">
                    Buka Gmail
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </a>
              </div>
            </div>

            {/* Instagram */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                <FaInstagram className="w-3.5 h-3.5" />
                Instagram
              </div>
              <a
                href={siteConfig.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-pink-50 border border-slate-100 hover:border-pink-200 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
              >
                <span className="text-sm font-semibold text-slate-700 group-hover:text-pink-700">
                  @{siteConfig.social.instagram.handle}
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-pink-500" />
              </a>
            </div>

            {/* Kantor */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                Kantor
              </div>
              <Link
                href="/kontak"
                onClick={() => setIsOpen(false)}
                className="flex flex-col gap-2 p-3 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-200 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">
                    Kantor Pusat — Bogor
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">
                    Kantor Cabang — Jambi
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-500" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}

      <button
        ref={launcherRef}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="contact-panel"
        aria-label="Hubungi P4I"
        className="flex items-center gap-3 bg-slate-900 hover:bg-blue-700 text-white px-5 py-3.5 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      >
        {isOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <MessageSquare className="w-5 h-5" />
        )}
        <span className="font-semibold text-sm">
          {isOpen ? 'Tutup' : 'Hubungi P4I'}
        </span>
      </button>
    </div>
  );
}
