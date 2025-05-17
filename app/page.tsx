export default function Home() {
  return (
    <main className="bg-zinc-950 text-white font-sans">
      <section className="text-center px-6 py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-green-400 mb-4">Brazilian 4G/5G Mobile Proxies</h1>
        <p className="text-lg text-gray-300 max-w-xl mx-auto mb-8">Stable, anonymous, and ultra-fast proxies from real Brazilian carriers. Ideal for automation, scraping and account management.</p>
        <a href="https://t.me/Nafeproxysbr" target="_blank" className="inline-block bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-8 rounded-full transition">💬 Buy Now</a>
      </section>

      <section className="bg-zinc-900 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-green-300 mb-12">Choose Your Plan</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "VIVO 5G – Private",
              prices: ["2 hours – $3", "1 day – $7.20", "7 days – $35", "30 days – $85"],
            },
            {
              title: "CLARO 5G – Private",
              prices: ["2 hours – $2.50", "1 day – $6", "7 days – $30", "30 days – $70"],
            },
            {
              title: "Shared Proxy (VIVO/CLARO)",
              prices: ["1 day – $3", "7 days – $15", "30 days – $38"],
            },
          ].map((plan, i) => (
            <div key={i} className="bg-zinc-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-green-300 mb-4">{plan.title}</h3>
              <ul className="text-sm text-gray-300 mb-4 space-y-1">
                {plan.prices.map((p, j) => <li key={j}>• {p}</li>)}
              </ul>
              <h4 className="text-green-400 font-semibold mb-2">Features</h4>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>✓ Unlimited Bandwidth</li>
                <li>✓ HTTPS & SOCKS5</li>
                <li>✓ OpenVPN (UDP support)</li>
                <li>✓ IP Whitelisting</li>
                <li>✓ OS Fingerprint</li>
                <li>✓ Custom DNS</li>
                <li>✓ Custom IP Rotation</li>
                <li>✓ Skip Used IP</li>
                <li>✓ Rotation URL</li>
              </ul>
              <h4 className="text-green-400 font-semibold mt-4 mb-1">Performance</h4>
              <ul className="text-xs text-gray-400">
                <li>• Vivo Speed: ~25 Mbit/s</li>
                <li>• Ping: ~86 ms</li>
                <li>• Measured from Origin Country</li>
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center text-green-300 mb-10">Use Cases</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-gray-300 text-sm">
          <div className="bg-zinc-800 p-4 rounded-lg">✅ Social Media Automation</div>
          <div className="bg-zinc-800 p-4 rounded-lg">✅ Multi-account Management</div>
          <div className="bg-zinc-800 p-4 rounded-lg">✅ Web Scraping & Bots</div>
          <div className="bg-zinc-800 p-4 rounded-lg">✅ GEO Testing & Localization</div>
        </div>
      </section>

      <section className="py-20 px-6 bg-zinc-900">
        <h2 className="text-3xl font-bold text-center text-green-300 mb-10">FAQ</h2>
        <div className="max-w-3xl mx-auto text-gray-300 space-y-6 text-sm">
          <div>
            <strong>How do I receive my proxy?</strong>
            <p>We deliver directly via Telegram after payment confirmation.</p>
          </div>
          <div>
            <strong>Can I change my IP?</strong>
            <p>Yes. You can request manual change or use rotation URL.</p>
          </div>
          <div>
            <strong>What networks are used?</strong>
            <p>We use real SIM cards from Brazilian mobile carriers (VIVO and CLARO).</p>
          </div>
        </div>
      </section>

      <section className="text-center py-16">
        <h2 className="text-2xl text-green-300 font-bold mb-4">Ready to start?</h2>
        <a
          href="https://t.me/Nafeproxysbr"
          target="_blank"
          className="bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-6 rounded-full inline-block"
        >💬 Buy on Telegram</a>
      </section>

      <footer className="bg-zinc-950 py-6 text-center text-xs text-gray-500 border-t border-zinc-800">
        <p>© 2025 NafeProxys. All rights reserved. Contact: @Nafeproxysbr</p>
      </footer>
    </main>
  );
}
