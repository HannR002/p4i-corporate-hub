import React from 'react';
import SmartLink from '../ui/SmartLink';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Kolom 1: Tentang Yayasan P4I */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Tentang Yayasan P4I</h4>
            <p className="text-slate-400 leading-relaxed mb-6">
              Pusat Pendidikan dan Penelitian Pembangunan Indonesia (P4I) berdedikasi untuk memajukan riset, teknologi, dan edukasi tingkat enterprise di Indonesia secara holistik.
            </p>
          </div>

          {/* Kolom 2: Tautan Cepat */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Tautan Cepat</h4>
            <ul className="space-y-4 text-slate-400">
              <li>
                <SmartLink href="/publisher" className="hover:text-blue-400 transition-colors">
                  P4I Publishing
                </SmartLink>
              </li>
              <li>
                <SmartLink href="/layanan/konsultasi" className="hover:text-blue-400 transition-colors">
                  P4I Consulting
                </SmartLink>
              </li>
              <li>
                <SmartLink href="#academy" className="hover:text-blue-400 transition-colors">
                  P4I Academy
                </SmartLink>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Kontak */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Kontak</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-blue-500 shrink-0" />
                <span>Jl. TP. Sriwijaya, Beliung, Kec. Kota Baru, Kota Jambi, Jambi 36361</span>
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
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-slate-800 pt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-500">
          <p>Copyright &copy; 2026 Yayasan P4I (Pusat Pendidikan dan Penelitian Pembangunan Indonesia). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
