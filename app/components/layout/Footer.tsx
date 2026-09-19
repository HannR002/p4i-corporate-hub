import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import { siteConfig } from '@/lib/site-config';
import { footerQuickLinks } from '@/data/navigation';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-8 mt-auto border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          {/* Column 1: About */}
          <div>
            <h4 className="text-white font-extrabold tracking-tight mb-6 text-lg">
              {siteConfig.name}
            </h4>
            <p className="text-slate-400 leading-relaxed text-sm mb-6">
              {siteConfig.fullName} — lembaga yang berdedikasi untuk memajukan
              pendidikan, penelitian, dan pembangunan Indonesia.
            </p>
            <p className="text-slate-500 text-xs font-medium tracking-wide uppercase">
              Berdiri sejak {siteConfig.established}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-base tracking-wide">Tautan</h4>
            <ul className="space-y-4">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-blue-400 transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-base tracking-wide">Kontak</h4>
            <ul className="space-y-5 text-sm">
              {siteConfig.locations.map((location) => (
                <li key={location.id} className="flex items-start">
                  <MapPin className="w-5 h-5 mr-4 mt-0.5 text-blue-500 shrink-0" />
                  <div>
                    <span className="block text-slate-300 font-semibold mb-0.5">{location.label}</span>
                    <span className="block text-slate-400">{location.city}</span>
                  </div>
                </li>
              ))}
              <li className="flex items-center pt-2">
                <Phone className="w-5 h-5 mr-4 text-blue-500 shrink-0" />
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
                >
                  {siteConfig.contact.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-4 text-blue-500 shrink-0" />
                <a
                  href={siteConfig.contact.emailLink}
                  className="text-slate-400 hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center">
                <FaInstagram className="w-5 h-5 mr-4 text-blue-500 shrink-0" />
                <a
                  href={siteConfig.social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
                >
                  @{siteConfig.social.instagram.handle}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/60 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="hover:text-slate-400 cursor-not-allowed transition-colors">Kebijakan Privasi</span>
            <span className="hover:text-slate-400 cursor-not-allowed transition-colors">Syarat & Ketentuan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
