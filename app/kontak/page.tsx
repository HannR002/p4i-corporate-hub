import React from 'react';
import { siteConfig } from '@/lib/site-config';
import { MapPin, Mail, ExternalLink } from 'lucide-react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontak',
  description: `Hubungi ${siteConfig.fullName} — alamat, WhatsApp, email, dan media sosial.`,
};

import PageHero from '@/app/components/layout/PageHero';

export default function KontakPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <PageHero
        eyebrow="Hubungi Kami"
        title="Kontak P4I"
        description="Kami siap membantu Anda. Hubungi kami melalui salah satu kanal di bawah ini."
        compact={true}
      />

      {/* Contact Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Left Column: Office Locations & Maps */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-4">
                Lokasi Kantor
              </h2>
              {siteConfig.locations.map((location) => {
                const mapSearchQuery = encodeURIComponent(location.mapQuery || location.address);
                const mapIframeUrl = `https://maps.google.com/maps?q=${mapSearchQuery}&output=embed`;
                const mapExternalUrl = `https://maps.google.com/maps?q=${mapSearchQuery}`;

                return (
                  <div
                    key={location.id}
                    className="bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm flex flex-col"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1 uppercase tracking-wide">
                          {location.label}
                        </h3>
                        <p className="text-sm font-semibold text-slate-700 mb-2">
                          {location.city}
                        </p>
                        <p className="text-sm text-slate-500 leading-relaxed">
                          {location.address}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <div className="w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-200 relative mb-4 border border-slate-200">
                        <iframe
                          title={`Peta ${location.label} P4I — ${location.city}`}
                          src={mapIframeUrl}
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          loading="lazy"
                          allowFullScreen
                          referrerPolicy="no-referrer-when-downgrade"
                          className="absolute inset-0"
                        />
                      </div>
                      <a
                        href={mapExternalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex justify-center items-center w-full py-3 px-4 rounded-xl bg-white border border-slate-200 text-sm font-bold text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                      >
                        Buka di Google Maps
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Digital Contacts */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-4">
                Layanan Informasi
              </h2>
              
              <div className="space-y-6">
                {/* WhatsApp */}
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Hubungi P4I via WhatsApp"
                  className="block bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-100 hover:border-green-200 hover:shadow-md transition-all group focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-green-600 group-hover:text-white transition-colors">
                      <FaWhatsapp className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">
                        WhatsApp
                      </h3>
                      <p className="text-base text-slate-500">
                        {siteConfig.contact.whatsappDisplay}
                      </p>
                    </div>
                  </div>
                </a>

                {/* Email */}
                <div className="bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-100 hover:shadow-md transition-all">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                      <Mail className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">
                        Email
                      </h3>
                      <p className="text-base text-slate-500">
                        {siteConfig.contact.email}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href={siteConfig.contact.emailLink}
                      className="flex justify-center items-center py-3 px-4 rounded-xl bg-white border border-slate-200 text-sm font-bold text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      Aplikasi Email
                    </a>
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                        siteConfig.contact.email
                      )}&su=${encodeURIComponent('Permohonan Informasi P4I')}&body=${encodeURIComponent(
                        'Yth. P4I,\n\nSaya ingin memperoleh informasi mengenai ...'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center py-3 px-4 rounded-xl bg-white border border-slate-200 text-sm font-bold text-slate-700 hover:border-red-300 hover:text-red-700 hover:bg-red-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                    >
                      Buka Gmail
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <a
                  href={siteConfig.social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Kunjungi Instagram P4I"
                  className="block bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-100 hover:border-pink-200 hover:shadow-md transition-all group focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-pink-100 text-pink-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                      <FaInstagram className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">
                        Instagram
                      </h3>
                      <p className="text-base text-slate-500">
                        @{siteConfig.social.instagram.handle}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
