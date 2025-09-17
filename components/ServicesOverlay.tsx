// components/ServicesOverlay.tsx
'use client';

import { useEffect } from 'react';
import Services from './services';

export default function ServicesOverlay({ onClose }: { onClose: () => void }) {
  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-white z-[9999] overflow-auto"
      onMouseLeave={onClose}
    >
      <Services />
    </div>
  );
}
