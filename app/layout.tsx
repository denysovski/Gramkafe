import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Gram Kafé Třešť | Kavárna, zákusky, dorty a výběrová káva',
  description: 'Gram Kafé v Třešti: útulná kavárna s výběrovou kávou, domácími zákusky, dorty na míru, sezónními nápoji a dárkovými poukazy.',
  keywords: [
    'Gram Kafé Třešť',
    'kavárna Třešť',
    'výběrová káva Třešť',
    'zákusky Třešť',
    'dorty Třešť',
    'dorty na míru Třešť',
    'dezerty Třešť',
    'kavárna Vysočina',
    'dárkové poukazy kavárna',
    'snídaně a káva Třešť',
  ],
  openGraph: {
    title: 'Gram Kafé Třešť | Kavárna, zákusky, dorty a výběrová káva',
    description: 'Navštivte Gram Kafé v Třešti. Výběrová káva, domácí zákusky, dorty na objednávku a příjemná atmosféra.',
    locale: 'cs_CZ',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="cs">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
