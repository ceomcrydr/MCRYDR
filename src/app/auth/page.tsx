import type { Metadata } from 'next'
import AuthForm from './AuthForm'

export const metadata: Metadata = {
  title: 'Sign In — MCRYDR',
}

export default function AuthPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0d0d0d] px-6 pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(249,115,22,0.08),_transparent_70%)]" />
      <div className="relative w-full max-w-md">
        <div className="mb-8 text-center">
          <span className="text-3xl font-black text-white">
            MC<span className="text-orange-500">RYDR</span>
          </span>
          <p className="mt-2 text-sm text-neutral-500">Your account. Your ride.</p>
        </div>
        <AuthForm />
      </div>
    </div>
  )
}
