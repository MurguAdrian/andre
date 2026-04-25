import type { Metadata } from 'next'
import './globals.css'
import { Footer, Header } from '@/components/layout'

export const metadata: Metadata = {
  title: 'VibeInvite - Invitații Digitale Premium',
  description: 'VibeInvite.ro oferă invitații digitale moderne pentru nunți, botezuri și evenimente speciale, cu design elegant și experiență premium.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <body className="min-h-screen text-charcoal">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
