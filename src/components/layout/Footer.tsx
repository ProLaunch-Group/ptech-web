import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import {
  FOOTER_TAGLINE,
  FOOTER_SOCIALS,
  FOOTER_CONTACT,
  FOOTER_SERVICES,
  FOOTER_COMPANY_LINKS,
  FOOTER_RESOURCES,
  FOOTER_CERTIFICATIONS,
} from '@/constants/service';
import { SocialLink } from '@/types/service.types';

const SOCIAL_ICONS: Record<SocialLink['icon'], React.JSX.Element> = {
  in: (
    <svg
      className="w-4 h-4 fill-current"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
    </svg>
  ),
  tw: (
    <svg
      className="w-4 h-4 fill-current"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer className="bg-deepNavy font-sans text-slate-300 py-9 px-6 md:px-12 lg:px-24 border-t border-slate-800">
      {/* Main Grid Wrapper */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {/* Column 1: Profile & Direct Contacts */}
        <section className="flex flex-col gap-5">
          <Link
            href="/"
            aria-label="ProLaunch Technologies Home"
            className="w-fit block"
          >
            <Image
              src="/prolaunch-logo.svg"
              alt="ProLaunch Technologies Logo"
              width={80}
              height={50}
              priority
            />
          </Link>

          <p className="text-sm leading-relaxed max-w-sm">{FOOTER_TAGLINE}</p>

          {/* Socials */}
          <nav
            aria-label="Social media links"
            className="flex items-center gap-3"
          >
            {FOOTER_SOCIALS.map((social) => (
              <a
                key={social.platform}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${social.platform} page`}
                className="w-9 h-9 flex items-center justify-center rounded-md border border-slate-700 bg-slate-900/50 text-xs font-medium hover:text-amberGold hover:border-amberGold transition-all duration-200"
              >
                {SOCIAL_ICONS[social.icon]}
              </a>
            ))}
          </nav>

          {/* Contacts */}
          <address className="not-italic flex flex-col gap-3 text-sm pt-2">
            <a
              href={`mailto:${FOOTER_CONTACT.email}`}
              className="flex items-center gap-3 hover:text-amberGold transition-colors duration-200"
            >
              <Mail className="w-4 h-4 text-blue-400" />
              <span>{FOOTER_CONTACT.email}</span>
            </a>
            <a
              href={`tel:${FOOTER_CONTACT.phone}`}
              className="flex items-center gap-3 hover:text-amberGold transition-colors duration-200"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              <span>{FOOTER_CONTACT.phone}</span>
            </a>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>{FOOTER_CONTACT.locations}</span>
            </div>
          </address>
        </section>

        {/* Column 2: Services (Plain Text List) */}
        <section className="flex flex-col gap-4">
          <h3 className="text-white font-bold tracking-wide text-base">
            Services
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-slate-400 select-none">
            {FOOTER_SERVICES.map((service) => (
              <li
                key={service}
                className="hover:text-amberGold transition-colors duration-200"
              >
                {service}
              </li>
            ))}
          </ul>
        </section>

        {/* Column 3: Company (Interactive Links) */}
        <section className="flex flex-col gap-4">
          <h3 className="text-white font-bold tracking-wide text-base">
            Company
          </h3>
          <ul className="flex flex-col gap-3 text-sm">
            {FOOTER_COMPANY_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="hover:text-amberGold hover:underline transition-colors duration-200 block"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Column 4: Resources (Plain Text List) & Certifications */}
        <section className="flex flex-col gap-4">
          <h3 className="text-white font-bold tracking-wide text-base">
            Resources
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-slate-400 select-none mb-4">
            {FOOTER_RESOURCES.map((resource) => (
              <li
                key={resource}
                className="hover:text-amberGold transition-colors duration-200"
              >
                {resource}
              </li>
            ))}
          </ul>

          {/* Certifications Block */}
          <h4 className="text-white font-bold tracking-wide text-base pt-2">
            Certifications
          </h4>
          <div className="flex flex-wrap gap-2">
            {FOOTER_CERTIFICATIONS.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-950/60 border text-electricBlue select-none"
              >
                {badge}
              </span>
            ))}
          </div>
        </section>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="max-w-7xl font-sora mx-auto mt-8 pt-4 border-t border-slate-800/60 text-xs text-slate-500 text-center md:text-left">
        <p>
          &copy; {new Date().getFullYear()} ProLaunch Technologies. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
