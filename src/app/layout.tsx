import type { Metadata } from 'next';
import { Sora, DM_Sans, Geist } from 'next/font/google';
import './globals.css';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import AiQualifierWidget from '@/components/ui/AiQualifierWidget';
import PageTransition from '@/components/ui/PageTransition';
import { AIQualifierProvider } from '@/contextApi/AIQualifierContext';
import { cn } from '@/libs/utils';
import { Toaster } from '@/components/ui/sonner';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://tech.prolaunchgroup.org'
  ),
  title: {
    template: '%s | ProLaunch Technologies',
    default: 'ProLaunch Technologies | Cloud Computing & DevOps Solutions',
  },
  description:
    'ProLaunch Technologies delivers scalable cloud computing, DevOps automation, infrastructure management, custom software development, and modern cloud migration solutions.',
  keywords: [
    'Cloud Computing',
    'DevOps Engineering',
    'Infrastructure Automation',
    'Custom Software Development',
    'Cloud Migration',
    'ProLaunch Technologies',
    'Nigeria Tech Solutions',
  ],
  authors: [{ name: 'ProLaunch Technologies' }],
  creator: 'ProLaunch Technologies',
  publisher: 'ProLaunch Technologies',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/', 
    siteName: 'ProLaunch Technologies',
    title: 'ProLaunch Technologies | Cloud Computing & DevOps Solutions',
    description:
      'Architecting high-performance cloud infrastructure, DevOps pipelines, and enterprise custom software for modern business scale.',
    images: [
      {
        url: '/prolaunch-logo2.png',
        width: 1200,
        height: 630,
        alt: 'ProLaunch Technologies Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image', 
    title: 'ProLaunch Technologies | Cloud & DevOps Solutions',
    description:
      'Accelerating business growth with resilient cloud infrastructure and modern software engineering.',
    images: ['/prolaunch-logo2.png'],
    creator: '@prolaunch_tech',
  },
  icons: {
    icon: [
      { url: '/prolaunch-logo2.png', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: [{ url: '/prolaunch-logo2.png' }],
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
      className={cn(
        'h-full',
        'antialiased',
        sora.variable,
        dmSans.variable,
        'font-sans',
        geist.variable
      )}
    >
      <body className="min-h-full flex flex-col ">
        <Nav />
        <AIQualifierProvider>
          <PageTransition>
            <main className="min-h-screen pt-18 ">
              {children}
              <Toaster position="top-center" richColors />
            </main>
          </PageTransition>
          <Footer />
          <AiQualifierWidget />
        </AIQualifierProvider>
      </body>
    </html>
  );
}
