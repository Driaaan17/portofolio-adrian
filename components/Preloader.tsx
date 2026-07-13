'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    // Check if already shown this session
    const hasShown = sessionStorage.getItem('preloader-shown');
    if (hasShown) {
      setHidden(true);
      setRemoved(true);
      return;
    }

    // Show preloader for a brief moment then fade out
    const timer = setTimeout(() => {
      setHidden(true);
      sessionStorage.setItem('preloader-shown', 'true');
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (hidden) {
      const removeTimer = setTimeout(() => setRemoved(true), 500);
      return () => clearTimeout(removeTimer);
    }
  }, [hidden]);

  if (removed) return null;

  return (
    <div className={`preloader ${hidden ? 'hidden' : ''}`} aria-hidden="true">
      <div className="flex flex-col items-center gap-6">
        <div 
          className="preloader-logo"
          style={{ animation: 'preloader-pulse 1.5s ease-in-out infinite' }}
        >
          &lt;/&gt;
        </div>
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full"
              style={{
                backgroundColor: 'var(--text-muted)',
                animation: `preloader-pulse 1.2s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
