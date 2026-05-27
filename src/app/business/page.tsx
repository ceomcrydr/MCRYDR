import Link from 'next/link'

const metrics = [
  { label: 'Active Orders', value: '7', sub: '3 in transit' },
  { label: 'Deliveries This Month', value: '248', sub: '+34 from last month' },
  { label: 'Avg. Delivery Time', value: '28 min', sub: '↓4 min improved' },
  { label: 'Monthly Spend', value: '$1,240', sub: 'Within budget' },
]

const activeOrders = [
  { id: '#ORD-091', item: 'Electronics Package', rider: 'Marcus R.', eta: '14 min', status: 'In Transit' },
  { id: '#ORD-090', item: 'Office Supplies (x3)', rider: 'Tina W.', eta: '22 min', status: 'Picked Up' },
  { id: '#ORD-089', item: 'Medical Samples', rider: 'Drew A.', eta: '8 min', status: 'Almost There' },
  { id: '#ORD-088', item: 'Restaurant Order', rider: 'Priya K.', eta: 'Assigned', status: 'Awaiting Pickup' },
]

const features = [
  { icon: '📦', title: 'On-Demand Dispatch', description: 'Post a delivery and have a rider assigned in under 3 minutes.' },
  { icon: '📍', title: 'Live Order Tracking', description: 'Follow every delivery on a live map, share links with customers.' },
  { icon: '🧾', title: 'Automated Invoicing', description: 'Get itemized receipts for every delivery. Export for accounting.' },
  { icon: '📈', title: 'Analytics Dashboard', description: 'Monitor delivery performance, costs, and trends over time.' },
  { icon: '🔌', title: 'API Integration', description: 'Connect MCRYDR directly to your e-commerce or POS system.' },
  { icon: '🎯', title: 'Priority Riders', description: 'Dedicated rider pools for high-volume business accounts.' },
]

const statusColors: Record<string, string> = {
  'In Transit': 'text-blue-400 bg-blue-400/10',
  'Picked Up': 'text-yellow-400 bg-yellow-400/10',
  'Almost There': 'text-green-400 bg-green-400/10',
  'Awaiting Pickup': 'text-neutral-400 bg-white/5',
}

export default function BusinessPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] bg-[#0d0d0d] pt-32 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(249,115,22,0.12),_transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-6">
          <span className="mb-4 inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-orange-400">
            Business Dashboard
          </span>
          <h1 className="mb-4 text-5xl font-black text-white md:text-6xl">
            Deliver More.<br />
            <span className="text-orange-500">Spend Less.</span>
          </h1>
          <p className="mb-8 max-w-xl text-neutral-400">
            Scale your last-mile delivery operations with a fleet of on-demand riders. Pay only for what you use.
          </p>
          <div className="flex gap-4">
            <button className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600 transition-colors">
              New Delivery
            </button>
            <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/5 transition-colors">
              View Reports
            </button>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="bg-[#0d0d0d] pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.label} className="rounded-2xl border border-white/10 bg-[#161616] p-6">
                <p className="mb-1 text-sm text-neutral-500">{m.label}</p>
                <p className="mb-1 text-3xl font-black text-white">{m.value}</p>
                <p className="text-xs text-orange-400">{m.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Orders */}
      <section className="bg-[#111111] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-black text-white">Active Orders</h2>
            <button className="rounded-full bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400 hover:bg-orange-500/20 transition-colors">
              + New Order
            </button>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10 bg-[#1a1a1a]">
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-neutral-500">Order</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-neutral-500">Item</th>
                  <th className="hidden px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-neutral-500 md:table-cell">Rider</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-neutral-500">ETA</th>
                  <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-neutral-500">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 bg-[#161616]">
                {activeOrders.map((o) => (
                  <tr key={o.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-sm font-mono text-orange-400">{o.id}</td>
                    <td className="px-6 py-4 text-sm text-white">{o.item}</td>
                    <td className="hidden px-6 py-4 text-sm text-neutral-400 md:table-cell">{o.rider}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-white">{o.eta}</td>
                    <td className="px-6 py-4 text-right">
                      <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${statusColors[o.status]}`}>
                        {o.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#0d0d0d] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-2xl">
            <h2 className="mb-4 text-4xl font-black text-white">Everything Your Business Needs</h2>
            <p className="text-neutral-400">From single deliveries to enterprise-scale operations.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-white/10 bg-[#161616] p-6 hover:border-orange-500/30 transition-colors">
                <span className="mb-4 block text-2xl">{f.icon}</span>
                <h3 className="mb-2 font-bold text-white">{f.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-500">{f.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-transparent p-12 text-center">
            <h3 className="mb-3 text-3xl font-black text-white">Ready to scale your deliveries?</h3>
            <p className="mb-8 text-neutral-400">No contracts. No minimums. Pay per delivery.</p>
            <Link
              href="/"
              className="inline-block rounded-full bg-orange-500 px-10 py-3.5 font-semibold text-white hover:bg-orange-600 transition-colors"
            >
              Create Business Account
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
