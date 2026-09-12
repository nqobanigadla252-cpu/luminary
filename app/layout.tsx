import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Footer, Header, SiteChrome } from '@/components/site/shared'
import './globals.css'

export const metadata: Metadata = {
  title: 'Zulu Armed Response | Professional Security Services',
  description: 'Zulu Armed Response provides professional armed response, VIP protection, armed escorts, guarding, bouncers and event security across South Africa.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="antialiased">
        <SiteChrome />
        <Header />
        {children}
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
