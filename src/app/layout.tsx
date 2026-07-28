import type { Metadata } from 'next';
import { Sora, DM_Sans, Geist } from 'next/font/google';
import './globals.css';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import AiQualifierWidget from '@/components/ui/AiQualifierWidget';
import PageTransition from '@/components/ui/PageTransition';
import { AIQualifierProvider } from '@/contextApi/AIQualifierContext';
import { cn } from '@/libs/utils';

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
            <main className="min-h-screen">{children}</main>
          </PageTransition>
          <Footer />
          <AiQualifierWidget />
        </AIQualifierProvider>
      </body>
    </html>
  );
}
