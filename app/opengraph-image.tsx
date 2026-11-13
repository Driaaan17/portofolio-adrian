import { ImageResponse } from 'next/og';
import { SITE } from '@/lib/site';

export const alt = `${SITE.name} — ${SITE.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 80,
          background: '#0a0a0a',
          color: '#fafafa',
        }}
      >
        <div style={{ display: 'flex', fontSize: 28, color: '#a3a3a3', letterSpacing: 4 }}>
          PORTFOLIO
        </div>
        <div style={{ display: 'flex', fontSize: 84, fontWeight: 700, marginTop: 24, lineHeight: 1.1 }}>
          {SITE.name}
        </div>
        <div style={{ display: 'flex', fontSize: 44, color: '#d4d4d4', marginTop: 24 }}>
          {SITE.role}
        </div>
        <div style={{ display: 'flex', fontSize: 28, color: '#737373', marginTop: 48 }}>
          Next.js · React · TypeScript · Tailwind CSS
        </div>
      </div>
    ),
    { ...size }
  );
}
