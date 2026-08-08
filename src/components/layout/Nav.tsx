'use client';

import { useState, useEffect, useRef, useSyncExternalStore } from 'react';
import Image from 'next/image';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { navbarLinks } from '@/constants/constants';
import { usePathname } from 'next/navigation';

const emptySubscribe = () => () => {};

const resourceLinks = [
  { label: 'FAQ', href: '/faq' },
  { label: 'Blog', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const dropdownRef = useRef<HTMLLIElement>(null);

  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const { theme, setTheme, resolvedTheme } = useTheme();
  const pathName = usePathname();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setResourcesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Escape key handler to close menus
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        setResourcesOpen(false);
      }
    };

    if (menuOpen || resourcesOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen, resourcesOpen]);

  // Smart scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (menuOpen) {
        setVisible(true);
        return;
      }

      if (currentScrollY > 50 && currentScrollY > lastScrollY) {
        setVisible(false);
        setResourcesOpen(false);
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
      className={`fixed top-0 left-0 right-0 z-50 w-full bg-white/90 dark:bg-[#1E3A6E]/95 backdrop-blur-md shadow-sm dark:shadow-[0_10px_30px_rgba(2,12,24,0.45)] border-b border-slate-200/80 dark:border-slate-800/80 transition-all duration-300 ease-in-out ${
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
              <span className="text-electricBlue font-sans"> Technologies</span>
            </span>
          </Link>

          {/* Right Section: Desktop Navigation, Dropdown, Theme Switcher & Get Started CTA */}
          <div className="hidden lg:flex items-center gap-7">
            <section aria-label="Main navigation">
              <ul className="flex items-center gap-7 list-none m-0 p-0">
                {navbarLinks.map((link) => {
                  const href = link === 'Home' ? '/' : `/${link.toLowerCase()}`;
                  const isActive = pathName === href;

                  return (
                    <li key={link}>
                      <Link
                        href={href}
                        className={`relative text-sm font-semibold font-sora transition-colors duration-200 ${
                          isActive
                            ? 'text-amberGold dark:text-amberGold font-bold'
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

                {/* Resources Dropdown */}
                <li key="Resources" className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setResourcesOpen((prev) => !prev)}
                    className="flex items-center gap-1 text-sm font-semibold font-sora text-slate-700 hover:text-amberGold dark:text-slate-200 dark:hover:text-amberGold transition-colors cursor-pointer"
                    aria-expanded={resourcesOpen}
                    aria-haspopup="true"
                  >
                    Resources
                    <ChevronDown
                      size={15}
                      className={`transition-transform duration-200 ${
                        resourcesOpen ? 'rotate-180 text-amberGold' : ''
                      }`}
                    />
                  </button>

                  {resourcesOpen && (
                    <div className="absolute top-full right-0 mt-3 w-48 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl p-2 animate-in fade-in zoom-in-95 duration-150 z-50">
                      <ul className="list-none m-0 p-0 flex flex-col gap-1">
                        {resourceLinks.map((res) => (
                          <li key={res.label}>
                            <Link
                              href={res.href}
                              onClick={() => setResourcesOpen(false)}
                              className="block px-3 py-2 text-sm font-medium font-sans rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-amberGold transition-colors"
                            >
                              {res.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              </ul>
            </section>

            {/* Theme Toggle Button */}
            <button
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className="relative p-2 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-100/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 hover:text-amberGold dark:hover:text-amberGold hover:border-amberGold/50 dark:hover:border-amberGold/50 transition-all duration-200 cursor-pointer"
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

            {/* Primary CTA Button: Get Started */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center font-sora font-bold text-sm bg-electricBlue hover:bg-amberGold text-white px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Get Started
            </Link>
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
            className="lg:hidden bg-white/95 dark:bg-[#1E3A6E]/98 border-t border-slate-200 dark:border-slate-800/80 animate-in slide-in-from-top-2 duration-200 py-5 px-6 flex flex-col gap-4"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col gap-3 list-none m-0 p-0">
              {navbarLinks.map((link) => {
                const href = link === 'Home' ? '/' : `/${link.toLowerCase()}`;
                const isActive = pathName === href;

                return (
                  <li key={link}>
                    <Link
                      href={href}
                      className={`text-base font-semibold font-sora transition-colors duration-200 block py-1 ${
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

              {/* Mobile Resources Accordion / Group */}
              <li className="pt-2 border-t border-slate-200 dark:border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-sora block mb-2">
                  Resources
                </span>
                <ul className="flex flex-col gap-2 pl-2 list-none">
                  {resourceLinks.map((res) => (
                    <li key={res.label}>
                      <Link
                        href={res.href}
                        onClick={() => setMenuOpen(false)}
                        className="text-sm font-medium font-sans text-slate-700 dark:text-slate-300 hover:text-amberGold transition-colors block py-1"
                      >
                        {res.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>

            {/* Mobile Get Started Button */}
            <div className="pt-3">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="w-full inline-flex items-center justify-center font-sora font-bold text-sm bg-electricBlue hover:bg-amberGold text-white px-5 py-3 rounded-xl shadow-md transition-colors text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
