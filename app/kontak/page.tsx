import React from 'react';
import { siteConfig } from '@/lib/site-config';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontak',
  description: `Hubungi ${siteConfig.fullName} — alamat, WhatsApp, email, dan media sosial.`,
};

export default function KontakPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase mb-4">
            Hubungi Kami
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
            Kontak P4I
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Kami siap membantu Anda. Hubungi kami melalui salah satu kanal di
            bawah ini.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Address */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 sm:col-span-2">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    Alamat
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {siteConfig.contact.address}
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-green-200 hover:shadow-md transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <FaWhatsapp className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    WhatsApp
                  </h3>
                  <p className="text-sm text-slate-500">
                    {siteConfig.contact.whatsappDisplay}
                  </p>
                </div>
              </div>
            </a>

            {/* Email */}
            <a
              href={siteConfig.contact.emailLink}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    Email
                  </h3>
                  <p className="text-sm text-slate-500">
                    {siteConfig.contact.email}
                  </p>
                </div>
              </div>
            </a>

            {/* Instagram */}
            <a
              href={siteConfig.social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-pink-200 hover:shadow-md transition-all group sm:col-span-2"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-pink-100 text-pink-600 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                  <FaInstagram className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    Instagram
                  </h3>
                  <p className="text-sm text-slate-500">
                    @{siteConfig.social.instagram.handle}
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
