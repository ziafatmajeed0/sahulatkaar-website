import type { Metadata, Viewport } from 'next';
import { Noto_Sans } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StickyWhatsAppButton from '@/components/StickyWhatsAppButton';
import { siteConfig } from '@/data/site';
import { getLocalBusinessSchema, getServiceSchema } from '@/lib/structured-data';

const notoSans = Noto_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    'Pakistan errand service',
    'overseas Pakistan support',
    'document follow-up Pakistan',
    'shopping and errands Pakistan',
    'family support Pakistan',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: 'website',
    url: siteConfig.url,
    images: [
      {
        url: '/hero-image.png',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} website preview`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/hero-image.png'],
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
};

export const viewport: Viewport = {
  themeColor: '#16a34a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = [getLocalBusinessSchema(), getServiceSchema()];

  return (
    <html lang="en-PK" className="scroll-smooth">
      <body className={`${notoSans.className} bg-slate-50 text-slate-900 antialiased`}>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <div className="flex min-h-screen flex-col">
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <StickyWhatsAppButton />
      </body>
    </html>
  );
}
