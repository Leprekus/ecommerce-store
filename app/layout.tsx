import Footer from '@/components/footer'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Urbanist } from 'next/font/google'

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Momentum',
  description: 'The sportswear for athletes since 1932',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
      <Footer/>
    </html>
  )
}
