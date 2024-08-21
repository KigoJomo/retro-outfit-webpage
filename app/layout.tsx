import type { Metadata } from 'next'
import './globals.css'
import Header from './components/Header'

export const metadata: Metadata = {
  title: 'katerio',
  description: 'Retro outfits for the modern',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-white flex flex-col">
        <Header />
        <main className='w-full h-full flex-shrink-0'>{children}</main>
      </body>
    </html>
  )
}
