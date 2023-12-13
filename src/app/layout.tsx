import type { Metadata } from 'next'
import {  DM_Sans } from 'next/font/google'
import './globals.css'

const dmsans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: 'Halogenn',
  description: 'Projeto freelancer Halogenn',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dmsans.className}>{children}</body>
    </html>
  )
}
