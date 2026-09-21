import React from 'react';
import { organizationStructure2014, OrgMember } from '@/data/organization';
import Image from 'next/image';

function getInitials(name: string) {
  return name.replace(/^(Dr\.|Drs\.|dr\.|Ir\.|AKBP\.)\s*/i, '')
             .split(' ')
             .slice(0, 2)
             .map(n => n[0])
             .join('')
             .toUpperCase();
}

function MemberCard({ member, accent, avatarSize = 48 }: { member: OrgMember; accent: 'purple' | 'blue' | 'green' | 'slate'; avatarSize?: number }) {
  const accentClasses = {
    purple: 'border-purple-200 bg-purple-50',
    blue: 'border-blue-200 bg-blue-50',
    green: 'border-green-200 bg-green-50',
    slate: 'border-slate-200 bg-slate-50',
  };
  
  const textClasses = {
    purple: 'text-purple-900',
    blue: 'text-blue-900',
    green: 'text-green-900',
    slate: 'text-slate-900',
  };

  const hasPortrait = member.portraitVerified && member.portrait;

  return (
    <div className={`p-4 rounded-xl border ${accentClasses[accent]} shadow-sm flex items-center gap-4`}>
      <div 
        className="shrink-0 rounded-full bg-white border-2 border-white shadow-sm flex items-center justify-center overflow-hidden relative"
        style={{ width: avatarSize, height: avatarSize }}
      >
        {hasPortrait ? (
          <Image
            src={member.portrait!}
            alt={member.name}
            fill
            className="object-cover"
            sizes={`${avatarSize}px`}
          />
        ) : (
          <span className="font-bold text-slate-400" style={{ fontSize: avatarSize * 0.4 }}>
            {getInitials(member.name)}
          </span>
        )}
      </div>
      <div>
        <p className={`font-bold ${textClasses[accent]}`}>
          {member.name}
        </p>
        {member.title && (
          <p className="text-xs text-slate-500 font-semibold mt-0.5">
            {member.title}
          </p>
        )}
      </div>
    </div>
  );
}

export function OrganizationChart() {
  const data = organizationStructure2014;

  return (
    <div className="bg-white rounded-3xl border border-slate-100 p-6 md:p-10 shadow-sm overflow-hidden relative">
      {/* Historical Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-10">
        <p className="text-sm text-amber-900 font-medium">
          <strong>Periode / Sumber: {data.period} ({data.source})</strong>
        </p>
        <p className="text-sm text-amber-800 mt-1">
          Struktur berikut merupakan dokumentasi susunan kelembagaan P4I pada masa pendirian tahun 2014. Struktur terkini akan diperbarui setelah data kelembagaan terbaru diverifikasi.
        </p>
      </div>

      <div className="flex flex-col items-center max-w-5xl mx-auto space-y-12">
        
        {/* TOP LEVEL: Pembina & Pengawas */}
        <div className="flex flex-col md:flex-row justify-center items-start gap-8 w-full">
          {/* Pembina */}
          <div className="w-full md:w-auto flex flex-col items-center text-center relative z-10">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-3">
              Pembina
            </h3>
            <div className="flex flex-col gap-3 w-full md:w-64">
              {data.pembina.map((m, i) => (
                <MemberCard key={i} member={m} accent="purple" avatarSize={80} />
              ))}
            </div>
            {/* Connector Line (Desktop Only) */}
            <div className="hidden md:block w-px h-12 bg-slate-300 mx-auto" />
          </div>

          {/* Pengawas */}
          <div className="w-full md:w-auto flex flex-col items-center text-center md:absolute md:right-10 md:top-36 relative z-10">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-3">
              Pengawas
            </h3>
            <div className="flex flex-col gap-3 w-full md:w-64">
              {data.pengawas.map((m, i) => (
                <MemberCard key={i} member={m} accent="green" avatarSize={64} />
              ))}
            </div>
          </div>
        </div>

        {/* MIDDLE LEVEL: Pengurus */}
        <div className="w-full relative z-10">
          <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4 text-center">
            Pengurus
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <div className="flex flex-col items-center text-center">
              <span className="text-xs font-semibold text-slate-400 mb-2 uppercase">Ketua</span>
              <div className="w-full">
                <MemberCard member={data.pengurus.ketua} accent="blue" avatarSize={72} />
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-xs font-semibold text-slate-400 mb-2 uppercase">Sekretaris</span>
              <div className="w-full">
                <MemberCard member={data.pengurus.sekretaris} accent="blue" avatarSize={72} />
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-xs font-semibold text-slate-400 mb-2 uppercase">Bendahara</span>
              <div className="w-full">
                <MemberCard member={data.pengurus.bendahara} accent="blue" avatarSize={72} />
              </div>
            </div>
          </div>
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block w-px h-12 bg-slate-300 mx-auto mt-6" />
        </div>

        {/* BOTTOM LEVEL: Bidang-Bidang */}
        <div className="w-full relative z-10">
          <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6 text-center">
            Bidang Operasional
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {data.bidang.map((bidang, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-5 border border-slate-200 flex flex-col h-full">
                <h4 className="text-sm font-bold text-slate-800 mb-4 text-center leading-relaxed h-10 flex items-center justify-center">
                  {bidang.name}
                </h4>
                <div className="space-y-3 mt-auto">
                  {bidang.members.map((m, j) => (
                    <MemberCard key={j} member={m} accent="slate" avatarSize={48} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
