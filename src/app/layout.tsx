import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: 'MCRYDR — Ride. Deliver. Earn.',
  description: 'Connecting riders with businesses for fast, reliable last-mile delivery.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0d0d0d]/90 backdrop-blur-md">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-2xl font-black tracking-tight text-white">
              MC<span className="text-orange-500">RYDR</span>
            </Link>
            <div className="hidden items-center gap-8 md:flex">
              <Link href="/about" className="text-sm text-neutral-400 transition-colors hover:text-white">
                About
              </Link>
              <Link href="/rider" className="text-sm text-neutral-400 transition-colors hover:text-white">
                For Riders
              </Link>
              <Link href="/business" className="text-sm text-neutral-400 transition-colors hover:text-white">
                For Business
              </Link>
              <Link
                href="/rider"
                className="rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
              >
                Get Started
              </Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="border-t border-white/10 bg-[#0d0d0d] py-12">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <span className="text-2xl font-black text-white">
                MC<span className="text-orange-500">RYDR</span>
              </span>
              <div className="flex gap-8 text-sm text-neutral-500">
                <Link href="/about" className="hover:text-white transition-colors">About</Link>
                <Link href="/rider" className="hover:text-white transition-colors">Riders</Link>
                <Link href="/business" className="hover:text-white transition-colors">Business</Link>
              </div>
              <p className="text-sm text-neutral-600">© 2026 MCRYDR. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
