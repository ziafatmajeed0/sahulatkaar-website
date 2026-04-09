import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import StickyWhatsAppButton from '@/components/StickyWhatsAppButton'

export const metadata: Metadata = {
  title: 'SahulatKaar - Pakistan Task Management Service',
  description: 'Pakistan mein kaam atka hua hai? SahulatKaar aap ke liye sab kuch manage karta hai. Order now on WhatsApp!',
  keywords: 'Pakistan errands, task service Pakistan, overseas Pakistan help, document handling, shopping service',
  openGraph: {
    title: 'SahulatKaar - You Rest, We Run',
    description: 'Get your Pakistan tasks done instantly. No more stress, no more delays.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#10b981" />
      </head>
      <body className="bg-white">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <StickyWhatsAppButton />
      </body>
    </html>
  )
}
