import type { Metadata, Viewport } from 'next'
import { El_Messiri, Open_Sans, Montez } from 'next/font/google'
import './globals.css'

const elMessiri = El_Messiri({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-el-messiri'
})

const openSans = Open_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-open-sans'
})

const montez = Montez({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-montez'
})

export const metadata: Metadata = {
  title: 'Tripy Package - Where Every Trip Becomes a Story ',
  description: 'Discover amazing destinations and book your perfect travel packages with TripyPackage',
  keywords: ['Travel', 'Packages', 'Destinations', 'Booking', 'Adventure'],
  authors: [{ name: 'TripyPackage Team' }],
  icons: [
    { rel: 'icon', url: '/images/icon.png', type: 'image/png', sizes: '80x80' },
    { rel: 'apple-touch-icon', url: '/images/icon.png', type: 'image/png', sizes: '180x180' }
  ],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical images */}
        <link rel="preload" href="/images/ic-tripy1.png" as="image" />
        <link rel="preload" href="/images/ic-bg.png" as="image" />
        <link rel="preload" href="/images/ic-center.png" as="image" />
        <link rel="preload" href="/images/ic-tripy6.png" as="image" />
      </head>
      <body 
        className={`${elMessiri.variable} ${openSans.variable} ${montez.variable}`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  )
}
