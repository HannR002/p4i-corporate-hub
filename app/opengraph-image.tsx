import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/site-config';

export const runtime = 'edge';
export const alt = siteConfig.name;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #0f172a, #1e3a8a)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
          color: 'white',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'white',
            padding: '24px',
            borderRadius: '24px',
            marginBottom: '40px',
          }}
        >
          {/* We will use a text representation here since we can't easily fetch local images in edge runtime without reading from absolute fs or URL */}
          <div style={{ display: 'flex', color: '#0f172a', fontSize: 60, fontWeight: 900 }}>
            {siteConfig.name}
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 48, fontWeight: 800, textAlign: 'center', marginBottom: '24px' }}>
          Pusat Pendidikan dan Penelitian Pembangunan Indonesia
        </div>
        <div style={{ display: 'flex', fontSize: 32, fontWeight: 600, color: '#93c5fd', textAlign: 'center' }}>
          Pendidikan • Penelitian • Publikasi • Pengembangan
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
