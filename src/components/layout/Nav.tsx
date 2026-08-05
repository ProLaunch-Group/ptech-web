'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { navbarLinks } from '@/constants/constants';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full bg-deepNavy backdrop-blur-md shadow-[0_10px_30px_rgba(2,12,24,0.35)] transition-transform duration-300 ease-in-out ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <section className="max-w-7xl w-full mx-auto px-6 lg:px-8">
        <div className="">
          <div className="flex items-center justify-between h-18 py-4">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5"
              aria-label="ProLaunch Technologies Home"
            >
              <Image
                src="/prolaunch-logo2.png"
                alt="ProLaunch Technologies logo"
                width={48}
                height={48}
                className="rounded-xl object-contain w-11 h-11 md:w-12 md:h-12"
                priority
              />
              <span className="font-bold text-[17px] text-white tracking-tight font-sora">
                ProLaunch
                <span className="text-[#0a84ff] font-sans"> Technologies</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <section
              className="hidden lg:flex items-center gap-8"
              aria-label="Main navigation"
            >
              <ul className="flex items-center gap-8 list-none m-0 p-0">
                {navbarLinks.map((link) => {
                  const href = link === 'Home' ? '/' : `/${link.toLowerCase()}`;
                  const isActive = pathName === href;

                  return (
                    <li key={link}>
                      <Link
                        href={href}
                        className={`hover:text-amberGold text-sm font-bold font-sora transition-colors duration-200 ${isActive ? 'text-[#f5a623]' : 'text-[#ffffff] '}`}
                      >
                        {link}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>

            {/* Mobile Menu Toggle Button */}
            <button
              className="lg:hidden text-white p-2 cursor-pointer"
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

        {/* Mobile Menu */}
        {menuOpen && (
          <nav
            className="lg:hidden bg-deepNavy border-t border-[rgba(46,123,247,0.2)]"
            aria-label="Mobile navigation"
          >
            <ul className="px-6 py-4 flex flex-col gap-4 list-none m-0 p-4">
              {navbarLinks.map((link) => {
                const href = link === 'Home' ? '/' : `/${link.toLowerCase()}`;
                const isActive = pathName === href;

                return (
                  <li key={link}>
                    <Link
                      href={href}
                      className={`hover:text-amberGold text-sm font-bold font-sora transition-colors duration-200 ${isActive ? 'text-[#f5a623]' : 'text-[#ffffff] '}`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </section>
    </nav>
  );
};

export default Navbar;
