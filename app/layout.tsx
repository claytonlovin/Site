import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WInsight - Pare de Perder Faturamento Silenciosamente',
  description: 'O WInsight monitora seu ERP, detecta quedas críticas de vendas e avisa antes que o prejuízo aconteça — com insights claros e prontos para ação.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} font-sans text-gray-800 bg-white`}>
        <div className="min-h-screen bg-white mx-4 sm:mx-6 lg:mx-8 xl:mx-12 my-4 sm:my-6 lg:my-8 xl:my-12">
          {children}
        </div>
      </body>
    </html>
  )
}