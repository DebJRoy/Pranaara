import type { Metadata } from 'next'
import { Inter, Playfair_Display, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: {
    default: 'Pranaara - Premium Indian Perfumes & Fragrances',
    template: '%s | Pranaara'
  },
  description: 'Discover premium Indian perfumes and fragrances at Pranaara. Long-lasting, high-quality scents crafted with the finest ingredients. Shop our exclusive collection of luxury perfumes.',
  keywords: ['perfume', 'fragrance', 'Indian perfumes', 'luxury perfumes', 'premium scents', 'attar', 'oud'],
  authors: [{ name: 'Pranaara' }],
  creator: 'Pranaara',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_APP_URL,
    title: 'Pranaara - Premium Indian Perfumes & Fragrances',
    description: 'Discover premium Indian perfumes and fragrances at Pranaara. Long-lasting, high-quality scents crafted with the finest ingredients.',
    siteName: 'Pranaara',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pranaara Premium Perfumes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pranaara - Premium Indian Perfumes & Fragrances',
    description: 'Discover premium Indian perfumes and fragrances at Pranaara.',
    images: ['/images/og-image.jpg'],
    creator: '@pranaara',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${cormorant.variable}`}>
      <body className={inter.className}>
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
} 