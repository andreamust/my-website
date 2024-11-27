import { useState, useEffect } from "react";

export default function useMobile() {
  const [isMobile, setIsMobile] = useState(false); // Default to desktop view

  useEffect(() => {
    // Detect screen size on client-side only
    const handleResize = () => {
      setIsMobile(window.innerWidth < 720);
    };

    handleResize(); // Run on mount to initialize state

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
}
