import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const inter = Montserrat({ weight: '400', subsets: ["latin"], preload: false })

export const metadata: Metadata = {
  title: 'Tasyakuran 7 Bulanan Kehamilan Anak Pertama',
  description: 'Invitation from rizka & Sansan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>{children}</body>
    </html>
  )
}
