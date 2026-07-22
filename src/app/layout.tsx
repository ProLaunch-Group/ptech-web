import type { Metadata } from 'next';
import { Sora, DM_Sans } from 'next/font/google';
import './globals.css';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import AiQualifierWidget from '@/components/ui/AiQualifierWidget';

const sora = Sora({
  subsets: ['latin'],
  weight: ['300', '600', '700', '800'],
  variable: '--font-sora',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | ProLaunch Technologies',
    default: 'ProLaunch Technologies',
  },
  description:
    'A cloud computing and technology solutions company delivering DevOps, infrastructure management, custom software, and cloud migration services ',
  icons: {
    icon: '/Prolaunch-logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-deepNavy"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
        <AiQualifierWidget />
      </body>
    </html>
  );
}
