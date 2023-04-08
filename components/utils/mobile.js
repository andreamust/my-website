'use client';

import { useState, useEffect } from 'react';

export default function useMobile() {
  const [useMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 720) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener('resize', handleResize);
  }, []);

  return useMobile;
}
