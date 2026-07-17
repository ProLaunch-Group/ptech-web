'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { navbarLinks } from '@/constants/constants';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="max-w-7xl w-full mx-auto bg-[#fcfeff] border-b border-[#eaf5ff] shadow-[0_1px_8px_rgba(37,99,235,0.05)] sticky top-0 z-50">
      <section className="px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5"
            aria-label="ProLaunch Technologies Home"
          >
            <Image
              src="/Navbar-Images/Prolaunch-logo.png"
              alt="ProLaunch Technologies logo"
              width={48}
              height={48}
              className="rounded-xl object-contain w-11 h-11 md:w-12 md:h-12"
              priority
            />
            <span className="font-bold text-[17px] text-[#0f172a] font-sans tracking-tight">
              ProLaunch
              <span className="text-electricBlue font-sans"> Technologies</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <section
            className="hidden lg:flex items-center gap-8"
            aria-label="Main navigation"
          >
            <ul className="flex items-center gap-8 list-none m-0 p-0">
              {navbarLinks.map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link.toLowerCase()}`}
                    className="text-[#334155] hover:text-amberGold font-sans text-sm font-medium"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden text-[#2563eb] p-2"
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
      </section>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="lg:hidden bg-[#fcfeff] border-t border-[#eaf5ff]"
          aria-label="Mobile navigation"
        >
          <ul className="px-6 py-4 flex flex-col gap-4 list-none m-0 p-4">
            {navbarLinks.map((link) => (
              <li key={link}>
                <Link
                  href={`/${link.toLowerCase()}`}
                  className="text-[#334155] hover:text-amberGold font-sans text-sm font-medium py-1 block"
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
