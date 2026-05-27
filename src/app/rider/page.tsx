import Link from 'next/link'

const stats = [
  { label: 'Deliveries Today', value: '12', change: '+3 from yesterday' },
  { label: "Today's Earnings", value: '$84.50', change: '+$12 from yesterday' },
  { label: 'Rating', value: '4.9★', change: 'Top 5% of riders' },
  { label: 'Active Hours', value: '6h 20m', change: '2h remaining today' },
]

const recentDeliveries = [
  { id: '#4821', pickup: 'Central Kitchen', dropoff: 'Maple St. Apt 4B', time: '2:14 PM', status: 'Completed', earn: '$8.50' },
  { id: '#4820', pickup: 'City Pharmacy', dropoff: '88 Harbor Blvd', time: '1:47 PM', status: 'Completed', earn: '$6.00' },
  { id: '#4819', pickup: 'Fresh Mart', dropoff: 'Pine Ave 221', time: '12:55 PM', status: 'Completed', earn: '$9.75' },
  { id: '#4818', pickup: 'Brew & Bean', dropoff: 'Riverside Tower 12F', time: '11:30 AM', status: 'Completed', earn: '$7.25' },
]

const perks = [
  { icon: '📅', title: 'Flexible Hours', description: 'Ride when you want. Set your own schedule daily.' },
  { icon: '💸', title: 'Same-Day Pay', description: 'Cash out your earnings at the end of every shift.' },
  { icon: '🛡️', title: 'Rider Insurance', description: 'Covered on every delivery from pickup to drop-off.' },
  { icon: '📊', title: 'Performance Bonuses', description: 'Earn more for top ratings and high delivery counts.' },
  { icon: '🗺️', title: 'Smart Routing', description: 'AI-optimized routes to minimize time and fuel costs.' },
  { icon: '🤝', title: 'Rider Community', description: 'Connect with other riders and access exclusive events.' },
]

export default function RiderPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] bg-[#0d0d0d] pt-32 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(249,115,22,0.12),_transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-6">
          <span className="mb-4 inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-orange-400">
            Rider Dashboard
          </span>
          <h1 className="mb-4 text-5xl font-black text-white md:text-6xl">
            Your Ride.<br />
            <span className="text-orange-500">Your Income.</span>
          </h1>
          <p className="mb-8 max-w-xl text-neutral-400">
            Track your deliveries, monitor earnings, and grow your rating — all in one place.
          </p>
          <div className="flex gap-4">
            <button className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600 transition-colors">
              Go Online
            </button>
            <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/5 transition-colors">
              View Earnings
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#0d0d0d] pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/10 bg-[#161616] p-6">
                <p className="mb-1 text-sm text-neutral-500">{s.label}</p>
                <p className="mb-1 text-3xl font-black text-white">{s.value}</p>
                <p className="text-xs text-orange-400">{s.change}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Deliveries */}
      <section className="bg-[#111111] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-black text-white">Recent Deliveries</h2>
            <button className="text-sm text-orange-400 hover:text-orange-300 transition-colors">View all</button>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10 bg-[#1a1a1a]">
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-neutral-500">ID</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-neutral-500">Pickup</th>
                  <th className="hidden px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-neutral-500 md:table-cell">Drop-off</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-neutral-500">Time</th>
                  <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-neutral-500">Earned</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 bg-[#161616]">
                {recentDeliveries.map((d) => (
                  <tr key={d.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-sm font-mono text-orange-400">{d.id}</td>
                    <td className="px-6 py-4 text-sm text-white">{d.pickup}</td>
                    <td className="hidden px-6 py-4 text-sm text-neutral-400 md:table-cell">{d.dropoff}</td>
                    <td className="px-6 py-4 text-sm text-neutral-400">{d.time}</td>
                    <td className="px-6 py-4 text-right text-sm font-bold text-green-400">{d.earn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="bg-[#0d0d0d] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-2xl">
            <h2 className="mb-4 text-4xl font-black text-white">Why Ride with MCRYDR?</h2>
            <p className="text-neutral-400">Join hundreds of riders earning more and riding smarter.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {perks.map((p) => (
              <div key={p.title} className="rounded-2xl border border-white/10 bg-[#161616] p-6 hover:border-orange-500/30 transition-colors">
                <span className="mb-4 block text-2xl">{p.icon}</span>
                <h3 className="mb-2 font-bold text-white">{p.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-500">{p.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-block rounded-full bg-orange-500 px-10 py-3.5 font-semibold text-white hover:bg-orange-600 transition-colors"
            >
              Apply to Ride
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
