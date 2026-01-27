import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kyu Han',
  description: 'Created using the Vercel application.',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={inter.className}>{children}</body>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
    </html>
  )
}