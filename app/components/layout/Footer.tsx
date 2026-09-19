import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import { siteConfig } from '@/lib/site-config';
import { footerQuickLinks } from '@/data/navigation';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: About */}
          <div>
            <h4 className="text-white font-bold mb-4 text-lg">
              {siteConfig.name}
            </h4>
            <p className="text-slate-400 leading-relaxed text-sm mb-4">
              {siteConfig.fullName} — lembaga yang berdedikasi untuk memajukan
              pendidikan, penelitian, dan pembangunan Indonesia.
            </p>
            <p className="text-slate-500 text-xs">
              Berdiri sejak {siteConfig.established}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-lg">Tautan</h4>
            <ul className="space-y-3">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 text-lg">Kontak</h4>
            <ul className="space-y-3 text-sm">
              {siteConfig.locations.map((location) => (
                <li key={location.id} className="flex items-start">
                  <MapPin className="w-4 h-4 mr-3 mt-1 text-blue-400 shrink-0" />
                  <div>
                    <span className="block text-slate-400 font-semibold">{location.label}</span>
                    <span className="block text-slate-500">{location.city}</span>
                  </div>
                </li>
              ))}
              <li className="flex items-center pt-2">
                <Phone className="w-4 h-4 mr-3 text-blue-400 shrink-0" />
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  {siteConfig.contact.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-blue-400 shrink-0" />
                <a
                  href={siteConfig.contact.emailLink}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center">
                <FaInstagram className="w-4 h-4 mr-3 text-blue-400 shrink-0" />
                <a
                  href={siteConfig.social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  @{siteConfig.social.instagram.handle}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 pt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-500">
          <p>
            &copy; {currentYear} {siteConfig.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
