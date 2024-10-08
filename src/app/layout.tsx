import Navbar from '@/components/navbar'
import type { Metadata } from 'next'
import React from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Agency website',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/navbar/Logo.svg" />
      </head>
      <body>
        <div className="flex min-h-screen flex-col">
          <Navbar className="absolute left-0 right-0 top-0 z-50 bg-transparent" />
          <main className="flex-grow">{children}</main>
        </div>
      </body>
    </html>
  )
}
