export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          AI-Powered E-Commerce Ops
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Guessing Why Customers Return Products
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Upload your return data and let AI surface the patterns behind every return — so you can fix root causes and cut return rates for good.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Analyzing Returns — $17/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">CSV upload or API integration · Cancel anytime</p>

        {/* Feature pills */}
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {["AI Categorization", "Pattern Detection", "CSV & API Ingestion", "Actionable Insights", "Interactive Dashboard"].map((f) => (
            <span key={f} className="px-4 py-2 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#c9d1d9]">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <p className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$17<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-sm text-[#6e7681] mb-6">Everything you need to reduce returns</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited CSV uploads",
              "AI return reason categorization",
              "Pattern & trend analysis",
              "Product improvement suggestions",
              "Interactive analytics dashboard",
              "API integration support",
              "Email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "What data do I need to get started?",
              a: "Just a CSV export of your return records with a reason or comment field. We support Shopify, WooCommerce, and custom formats. You can also connect via API."
            },
            {
              q: "How does the AI categorize return reasons?",
              a: "Our AI reads unstructured return comments and maps them to structured categories like sizing issues, quality defects, wrong item, or buyer's remorse — then surfaces trends across your catalog."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. Cancel anytime from your billing portal with no questions asked. You keep access until the end of your billing period."
            }
          ].map(({ q, a }) => (
            <div key={q} className="rounded-xl border border-[#30363d] bg-[#161b22] p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Return Reason Analyzer. All rights reserved.
      </footer>
    </main>
  )
}
