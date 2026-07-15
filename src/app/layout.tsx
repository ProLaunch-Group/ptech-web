import type { Metadata } from 'next';
import {  Sora, DM_Sans } from 'next/font/google';
import './globals.css';



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
    icon: '/favicon.ico',
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
