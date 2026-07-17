'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { navbarLinks } from '@/constants/constants';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="max-w-7xl w-full mx-auto bg-[#07152F]/95 backdrop-blur-md border-b border-[rgba(46,123,247,0.2)] shadow-[0_10px_30px_rgba(2,12,24,0.35)] sticky top-0 z-50">
      <div className="px-6 lg:px-8">
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
            <span className="font-bold text-[17px] text-white tracking-tight">
              ProLaunch<span className="text-[#2E7BF7]"> Technologies</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-8"
            aria-label="Main navigation"
          >
            <ul className="flex items-center gap-8 list-none m-0 p-0">
              {navbarLinks.map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link.toLowerCase()}`}
                    className="text-[#CBD5E1] hover:text-white text-sm font-medium"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA Buttons */}
          {/* <div className="hidden lg:flex items-center gap-4">
            <Link href="#contact" className="text-sm text-[#94A3B8] hover:text-white">
              Sign In
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#2E7BF7] hover:bg-[#1A5FE8] text-white text-sm font-semibold px-5 py-2.5 rounded-lg"
            >
              Get Started
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div> */}

          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden text-white p-2"
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
          className="lg:hidden bg-[#07152F]/95 border-t border-[rgba(46,123,247,0.2)]"
          aria-label="Mobile navigation"
        >
          <ul className="px-6 py-4 flex flex-col gap-4 list-none m-0 p-4">
            {navbarLinks.map((link) => (
              <li key={link}>
                <Link
                  href={`/${link.toLowerCase()}`}
                  className="text-[#CBD5E1] hover:text-white text-sm font-medium py-1 block"
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
