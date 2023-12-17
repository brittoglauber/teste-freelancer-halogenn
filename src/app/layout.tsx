'use client'


import type { Metadata } from 'next'
import {  DM_Sans } from 'next/font/google'
import './globals.css'
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from 'react-redux';
import store from '../app/lib/store'

const dmsans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '700']
})

const metadata: Metadata = {
  title: 'Halogenn',
  description: 'Projeto freelancer Halogenn',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <html lang="en">
          <body className={dmsans.className}>{children}</body>
        </html>
      </Provider>
    </QueryClientProvider>
    
  )
}

