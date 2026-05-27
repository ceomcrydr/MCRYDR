'use client'

import { useActionState, useState } from 'react'
import { signUp, signIn, type AuthFormState } from '@/app/actions/auth'
import Link from 'next/link'

export default function AuthForm({
  defaultTab,
}: {
  defaultTab?: 'login' | 'signup'
}) {
  const [tab, setTab] = useState<'login' | 'signup'>(defaultTab ?? 'login')
  const [signUpState, signUpAction, signUpPending] = useActionState<AuthFormState, FormData>(
    signUp,
    undefined
  )
  const [signInState, signInAction, signInPending] = useActionState<AuthFormState, FormData>(
    signIn,
    undefined
  )

  const inputClass =
    'w-full rounded-xl border border-white/10 bg-[#1f1f1f] px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500'
  const labelClass = 'mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-500'

  return (
    <div className="w-full max-w-md">
      {/* Tab switcher */}
      <div className="mb-8 flex rounded-xl border border-white/10 bg-[#161616] p-1">
        <button
          type="button"
          onClick={() => setTab('login')}
          className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-colors ${
            tab === 'login'
              ? 'bg-orange-500 text-white'
              : 'text-neutral-500 hover:text-white'
          }`}
        >
          Log In
        </button>
        <button
          type="button"
          onClick={() => setTab('signup')}
          className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-colors ${
            tab === 'signup'
              ? 'bg-orange-500 text-white'
              : 'text-neutral-500 hover:text-white'
          }`}
        >
          Sign Up
        </button>
      </div>

      {/* Log In Form */}
      {tab === 'login' && (
        <form action={signInAction} className="space-y-5">
          <div>
            <label htmlFor="login-email" className={labelClass}>Email</label>
            <input
              id="login-email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="login-password" className={labelClass}>Password</label>
            <input
              id="login-password"
              name="password"
              type="password"
              placeholder="••••••••"
              autoComplete="current-password"
              required
              className={inputClass}
            />
          </div>

          {signInState?.error && (
            <p className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
              {signInState.error}
            </p>
          )}

          <button
            type="submit"
            disabled={signInPending}
            className="w-full rounded-xl bg-orange-500 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-orange-600 disabled:opacity-60"
          >
            {signInPending ? 'Signing in…' : 'Log In'}
          </button>

          <p className="text-center text-xs text-neutral-600">
            No account?{' '}
            <button
              type="button"
              onClick={() => setTab('signup')}
              className="text-orange-400 hover:text-orange-300"
            >
              Sign up free
            </button>
          </p>
        </form>
      )}

      {/* Sign Up Form */}
      {tab === 'signup' && (
        <form action={signUpAction} className="space-y-5">
          <div>
            <label htmlFor="signup-name" className={labelClass}>Full Name</label>
            <input
              id="signup-name"
              name="name"
              type="text"
              placeholder="Your name"
              autoComplete="name"
              required
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="signup-email" className={labelClass}>Email</label>
            <input
              id="signup-email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="signup-password" className={labelClass}>Password</label>
            <input
              id="signup-password"
              name="password"
              type="password"
              placeholder="Min. 8 characters"
              autoComplete="new-password"
              required
              minLength={8}
              className={inputClass}
            />
          </div>

          {/* Role selector */}
          <div>
            <span className={labelClass}>I am a…</span>
            <div className="mt-1.5 grid grid-cols-2 gap-3">
              <RoleCard name="role" value="rider" label="Rider" description="I deliver on my bike" icon="🏍️" />
              <RoleCard name="role" value="business" label="Business" description="I need deliveries" icon="📦" />
            </div>
          </div>

          {signUpState?.error && (
            <p className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
              {signUpState.error}
            </p>
          )}
          {signUpState?.message && (
            <p className="rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-400">
              {signUpState.message}
            </p>
          )}

          <button
            type="submit"
            disabled={signUpPending}
            className="w-full rounded-xl bg-orange-500 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-orange-600 disabled:opacity-60"
          >
            {signUpPending ? 'Creating account…' : 'Create Account'}
          </button>

          <p className="text-center text-xs text-neutral-600">
            Already have an account?{' '}
            <button
              type="button"
              onClick={() => setTab('login')}
              className="text-orange-400 hover:text-orange-300"
            >
              Log in
            </button>
          </p>
        </form>
      )}

      <div className="mt-8 text-center">
        <Link href="/" className="text-xs text-neutral-700 hover:text-neutral-500 transition-colors">
          ← Back to MCRYDR
        </Link>
      </div>
    </div>
  )
}

function RoleCard({
  name,
  value,
  label,
  description,
  icon,
}: {
  name: string
  value: string
  label: string
  description: string
  icon: string
}) {
  return (
    <label className="group cursor-pointer">
      <input type="radio" name={name} value={value} required className="peer sr-only" />
      <div className="rounded-xl border border-white/10 bg-[#1f1f1f] p-4 text-center transition-all peer-checked:border-orange-500 peer-checked:bg-orange-500/10 group-hover:border-white/20">
        <span className="block text-2xl mb-1">{icon}</span>
        <span className="block text-sm font-bold text-white">{label}</span>
        <span className="block text-xs text-neutral-500 mt-0.5">{description}</span>
      </div>
    </label>
  )
}
