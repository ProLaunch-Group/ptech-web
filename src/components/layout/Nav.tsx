'use client';

import { useState, useEffect, useSyncExternalStore } from 'react';
import Image from 'next/image';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { navbarLinks } from '@/constants/constants';
import { usePathname } from 'next/navigation';

const emptySubscribe = () => () => {};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const { theme, setTheme, resolvedTheme } = useTheme();
  const pathName = usePathname();

  // Escape key handler to close mobile menu
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  // Smart scroll handler to hide on scroll down & show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (menuOpen) {
        setVisible(true);
        return;
      }

      // Hide when scrolling down past 50px threshold, show when scrolling up
      if (currentScrollY > 50 && currentScrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, menuOpen]);

  const isDark = mounted && (resolvedTheme === 'dark' || theme === 'dark');

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full bg-white/90 dark:bg-[#070f1e]/95 backdrop-blur-md shadow-sm dark:shadow-[0_10px_30px_rgba(2,12,24,0.45)] border-b border-slate-200/80 dark:border-slate-800/80 transition-all duration-300 ease-in-out ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            aria-label="ProLaunch Technologies Home"
          >
            <div className="relative p-1 rounded-xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 transition-transform duration-300 group-hover:scale-105">
              <Image
                src={
                  isDark
                    ? '/images/prolaunch-logo2.png'
                    : '/images/ProLaunch_Technologies_Logo_Light_HQ.png'
                }
                alt="ProLaunch Technologies logo"
                width={120}
                height={40}
                className="object-contain h-9 md:h-10 w-auto rounded-lg"
                priority
              />
            </div>
            <span className="font-bold text-[17px] md:text-18 text-slate-900 dark:text-white tracking-tight font-sora transition-colors duration-200">
              ProLaunch
              <span className="text-electricBlue font-sans">
                {' '}
                Technologies
              </span>
            </span>
          </Link>

          {/* Right Section: Desktop Navigation & Theme Switcher */}
          <div className="hidden lg:flex items-center gap-8">
            <section aria-label="Main navigation">
              <ul className="flex items-center gap-8 list-none m-0 p-0">
                {navbarLinks.map((link) => {
                  const href = link === 'Home' ? '/' : `/${link.toLowerCase()}`;
                  const isActive = pathName === href;

                  return (
                    <li key={link}>
                      <Link
                        href={href}
                        className={`relative text-sm font-semibold font-sora transition-colors duration-200 ${
                          isActive
                            ? 'text-amberGold dark:text-amberGold'
                            : 'text-slate-700 hover:text-amberGold dark:text-slate-200 dark:hover:text-amberGold'
                        }`}
                      >
                        {link}
                        {isActive && (
                          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-amberGold rounded-full animate-in fade-in zoom-in duration-200" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>

            {/* Theme Toggle Button */}
            <button
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className="relative p-2 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 hover:text-amberGold dark:hover:text-amberGold hover:border-amberGold/50 dark:hover:border-amberGold/50 transition-all duration-200 cursor-pointer"
              aria-label={
                isDark ? 'Switch to light mode' : 'Switch to dark mode'
              }
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {mounted ? (
                isDark ? (
                  <Sun
                    size={19}
                    className="text-amber-400 transition-transform duration-300 rotate-0 hover:rotate-45"
                  />
                ) : (
                  <Moon
                    size={19}
                    className="text-slate-700 transition-transform duration-300 -rotate-12 hover:rotate-0"
                  />
                )
              ) : (
                <div className="w-[19px] h-[19px]" />
              )}
            </button>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className="p-2 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-200 cursor-pointer"
              aria-label={
                isDark ? 'Switch to light mode' : 'Switch to dark mode'
              }
            >
              {mounted && isDark ? (
                <Sun size={19} className="text-amber-400" />
              ) : (
                <Moon size={19} className="text-slate-700" />
              )}
            </button>

            <button
              className="text-slate-800 dark:text-white p-2 cursor-pointer rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={
                menuOpen ? 'Close navigation menu' : 'Open navigation menu'
              }
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <X size={22} aria-hidden="true" />
              ) : (
                <Menu size={22} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {menuOpen && (
          <div
            className="lg:hidden bg-white/95 dark:bg-[#070f1e]/98 border-t border-slate-200 dark:border-slate-800/80 animate-in slide-in-from-top-2 duration-200"
            aria-label="Mobile navigation"
          >
            <ul className="px-6 py-5 flex flex-col gap-4 list-none m-0">
              {navbarLinks.map((link) => {
                const href = link === 'Home' ? '/' : `/${link.toLowerCase()}`;
                const isActive = pathName === href;

                return (
                  <li key={link}>
                    <Link
                      href={href}
                      className={`text-sm font-semibold font-sora transition-colors duration-200 block py-1.5 ${
                        isActive
                          ? 'text-amberGold font-bold'
                          : 'text-slate-800 dark:text-slate-200 hover:text-amberGold'
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
