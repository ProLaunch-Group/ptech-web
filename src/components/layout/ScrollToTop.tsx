'use client';
import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top of page"
      className={`group fixed bottom-14 lg:bottom-16 right-10 lg:right-15 z-40 w-16 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer focus:outline-none ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      {/* Cloud Background SVG */}
      <svg
        viewBox="0 0 64 48"
        className="absolute inset-0 w-full h-full text-[#f5a623] group-hover:text-slate-800 transition-colors duration-300 drop-shadow-lg"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18.5 42 C11.5 42 6 36.5 6 29.5 C6 23.5 10 18.5 15.5 17.5 C17.5 10.5 24 5.5 32 5.5 C39.5 5.5 46 10 48 16.5 C54 17 58.5 22 58.5 28 C58.5 35.5 52.5 42 45 42 Z" />
      </svg>

      <ChevronUp
        className="relative z-10 w-5 h-5 text-slate-900 group-hover:text-[#f5a623] transition-colors duration-300"
        aria-hidden="true"
      />
    </button>
  );
}
