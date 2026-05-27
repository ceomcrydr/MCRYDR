import Link from 'next/link'

const features = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Same-day and on-demand delivery across the city. Our riders are always ready.',
  },
  {
    icon: '📍',
    title: 'Real-Time Tracking',
    description: 'Know exactly where your delivery is at every moment with live GPS updates.',
  },
  {
    icon: '💰',
    title: 'Competitive Earnings',
    description: 'Riders keep more of what they earn. Transparent pricing, no hidden cuts.',
  },
  {
    icon: '🛡️',
    title: 'Fully Insured',
    description: 'Every delivery is covered. Ride and ship with confidence, every single time.',
  },
]

const steps = [
  { step: '01', title: 'Sign Up', description: 'Create your account as a rider or business in under 2 minutes.' },
  { step: '02', title: 'Match', description: 'Our smart system connects riders with nearby delivery requests instantly.' },
  { step: '03', title: 'Deliver', description: 'Riders pick up and deliver. Businesses track everything in real time.' },
  { step: '04', title: 'Get Paid', description: 'Riders receive earnings same day. Businesses get receipts instantly.' },
]

export default function LandingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-[#0d0d0d] pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(249,115,22,0.15),_transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <span className="mb-6 inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-orange-400">
              Now Live in Your City
            </span>
            <h1 className="mb-6 text-6xl font-black leading-[1.05] tracking-tight text-white md:text-7xl">
              Ride.<br />
              <span className="text-orange-500">Deliver.</span><br />
              Earn.
            </h1>
            <p className="mb-10 max-w-xl text-lg text-neutral-400 leading-relaxed">
              MCRYDR connects motorcycle riders with businesses that need fast, reliable last-mile delivery. More earnings for riders. Lower costs for businesses.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/rider"
                className="rounded-full bg-orange-500 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-orange-600"
              >
                Become a Rider
              </Link>
              <Link
                href="/business"
                className="rounded-full border border-white/20 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
              >
                Partner with Us
              </Link>
            </div>
          </div>
          <div className="mt-20 grid grid-cols-3 gap-8 border-t border-white/10 pt-12 md:grid-cols-3">
            {[['500+', 'Active Riders'], ['2,000+', 'Daily Deliveries'], ['98%', 'On-Time Rate']].map(([stat, label]) => (
              <div key={label}>
                <p className="text-3xl font-black text-orange-500 md:text-4xl">{stat}</p>
                <p className="mt-1 text-sm text-neutral-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#0d0d0d] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 max-w-2xl">
            <h2 className="mb-4 text-4xl font-black text-white md:text-5xl">
              Built for speed.<br />Designed to earn.
            </h2>
            <p className="text-neutral-400">
              Everything riders and businesses need to move faster, smarter, and more profitably.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white/10 bg-[#161616] p-6 transition-colors hover:border-orange-500/30"
              >
                <span className="mb-4 block text-3xl">{f.icon}</span>
                <h3 className="mb-2 text-lg font-bold text-white">{f.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-500">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[#111111] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-black text-white md:text-5xl">How MCRYDR Works</h2>
            <p className="mx-auto max-w-xl text-neutral-400">
              From sign-up to payout in four simple steps.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.step} className="relative rounded-2xl border border-white/10 bg-[#161616] p-6">
                <span className="mb-4 block text-5xl font-black text-orange-500/20">{s.step}</span>
                <h3 className="mb-2 text-lg font-bold text-white">{s.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-500">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0d0d0d] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-transparent p-12 text-center md:p-20">
            <h2 className="mb-4 text-4xl font-black text-white md:text-5xl">
              Ready to ride with us?
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-neutral-400">
              Join hundreds of riders earning on their own schedule, or partner with us to streamline your deliveries.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/rider"
                className="rounded-full bg-orange-500 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-orange-600"
              >
                Join as a Rider
              </Link>
              <Link
                href="/business"
                className="rounded-full border border-white/20 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
              >
                Business Account
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
