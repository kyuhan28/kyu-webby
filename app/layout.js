import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kyu Han',
  description: 'Hi, I am Kyu Han! I am a student at the University of Pittsburgh class of 2028.',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={inter.className}>{children}</body>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
    </html>
  )
}