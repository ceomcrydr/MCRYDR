import Image from 'next/image'
import Link from 'next/link'

const values = [
  {
    icon: '🚀',
    title: 'Speed First',
    description: 'We optimize every part of the delivery experience to get packages where they need to be, faster.',
  },
  {
    icon: '⚖️',
    title: 'Fair for Everyone',
    description: 'Riders earn what they deserve. Businesses pay fair rates. No hidden markups, no exploitation.',
  },
  {
    icon: '🌱',
    title: 'Built to Last',
    description: 'We invest in technology, safety, and community so MCRYDR grows with the people who power it.',
  },
]

const milestones = [
  { year: '2023', event: 'MCRYDR founded with 12 riders in one city.' },
  { year: '2024', event: 'Expanded to 5 cities. Passed 100,000 deliveries.' },
  { year: '2025', event: 'Launched Business API. Reached 500+ active riders.' },
  { year: '2026', event: 'Scaling nationally. Building the future of last-mile.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0d0d0d] pt-32 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(249,115,22,0.08),_transparent_70%)]" />
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="mb-4 inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-orange-400">
            Our Story
          </span>
          <h1 className="mb-6 text-5xl font-black text-white md:text-7xl">
            We move the <span className="text-orange-500">city</span>.
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-neutral-400 leading-relaxed">
            MCRYDR was built on a simple belief: the people doing the hardest work — the riders — should earn the most from it. We set out to build a delivery platform that's fair, fast, and built for the long run.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#111111] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-black text-white">Our Mission</h2>
              <p className="mb-6 text-neutral-400 leading-relaxed">
                Last-mile delivery is the hardest part of any supply chain — and the most human. It's powered by real people on real bikes navigating real cities. We're here to make sure those people are supported, paid fairly, and equipped with the best tools available.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                For businesses, we strip away the complexity and cost of managing delivery logistics. For riders, we remove the gatekeepers and put more money directly in their pockets. For cities, we reduce congestion with smarter, more efficient routing.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {values.map((v) => (
                <div key={v.title} className="flex gap-4 rounded-2xl border border-white/10 bg-[#161616] p-5">
                  <span className="shrink-0 text-2xl">{v.icon}</span>
                  <div>
                    <h3 className="mb-1 font-bold text-white">{v.title}</h3>
                    <p className="text-sm leading-relaxed text-neutral-500">{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-[#0d0d0d] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-4xl font-black text-white">Meet the Founder</h2>
          <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-[#161616]">
            <div className="flex flex-col md:flex-row">
              <div className="relative h-64 w-full shrink-0 md:h-auto md:w-64">
                {/* Replace /founder-placeholder.svg with /founder.jpg once you have the real photo */}
                <Image
                  src="/founder-placeholder.svg"
                  alt="MCRYDR Founder"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 256px"
                />
              </div>
              <div className="p-8 md:p-10">
                <h3 className="mb-1 text-2xl font-black text-white">Abdul Qader Al-Toubeh</h3>
                <p className="mb-4 text-sm font-semibold text-orange-400">Founder & CEO</p>
                <p className="mb-4 text-sm leading-relaxed text-neutral-400">
                  Abdul started MCRYDR after working as a rider himself and experiencing firsthand how broken the existing platforms were. Watching riders earn a fraction of what their work was worth, he decided to build something different.
                </p>
                <p className="text-sm leading-relaxed text-neutral-400">
                  "The rider is the product. When you take care of your riders, everything else follows — quality, speed, reliability. We built MCRYDR to put riders first, and it shows in every delivery we make."
                </p>
                <div className="mt-6 flex gap-4">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-400">
                    Former Rider
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-400">
                    Logistics
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-400">
                    Tech Builder
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#111111] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-4xl font-black text-white">Our Journey</h2>
          <div className="mx-auto max-w-2xl space-y-0">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 text-xs font-black text-white">
                    {m.year.slice(2)}
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="mt-1 h-full w-px bg-orange-500/20" />
                  )}
                </div>
                <div className="pb-8 pt-1">
                  <p className="mb-1 text-sm font-bold text-orange-400">{m.year}</p>
                  <p className="text-neutral-300">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0d0d0d] py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="mb-4 text-4xl font-black text-white">Join the movement.</h2>
          <p className="mx-auto mb-10 max-w-xl text-neutral-400">
            Whether you ride or you ship, there's a place for you in MCRYDR.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/rider"
              className="rounded-full bg-orange-500 px-8 py-3.5 font-semibold text-white hover:bg-orange-600 transition-colors"
            >
              Become a Rider
            </Link>
            <Link
              href="/business"
              className="rounded-full border border-white/20 px-8 py-3.5 font-semibold text-white hover:border-white/40 hover:bg-white/5 transition-colors"
            >
              Business Account
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
