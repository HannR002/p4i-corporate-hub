import React from 'react';
import Image from 'next/image';
import SmartLink from '../ui/SmartLink';
import { Phone, Video } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <SmartLink href="/" className="flex-shrink-0 flex items-center gap-2">
            <Image src="/p4i-logo.png" alt="P4I Logo" width={48} height={48} className="object-contain" priority />
            <span className="font-bold text-xl tracking-tight text-slate-800">Corporate Hub</span>
          </SmartLink>
          <div className="hidden md:flex space-x-8 items-center">
            {[
              { name: 'Home', href: '/' },
              { name: 'About P4I', href: '/#about' },
              { name: 'Editorial Board', href: 'https://journal.p4ijournal.org/index.php/journal/about/editorialTeam' },
              { name: 'Contact', href: '#contact' }
            ].map((item) => (
              <SmartLink
                key={item.name}
                href={item.href}
                className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
              >
                {item.name}
              </SmartLink>
            ))}
            <div className="flex items-center gap-4 border-l border-slate-300 pl-4">
              <SmartLink href="https://wa.me/6289699161526" className="text-slate-500 hover:text-blue-600 transition-colors w-5 h-5 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </SmartLink>
              <SmartLink href="https://instagram.com/p4i.official" className="text-slate-500 hover:text-blue-600 transition-colors w-5 h-5 flex items-center justify-center">
                <FaInstagram className="w-5 h-5" />
              </SmartLink>
              <SmartLink href="#" className="text-slate-500 hover:text-blue-600 transition-colors w-5 h-5 flex items-center justify-center">
                <Video className="w-5 h-5" />
              </SmartLink>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-slate-600 hover:text-blue-600 font-medium">Menu</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
