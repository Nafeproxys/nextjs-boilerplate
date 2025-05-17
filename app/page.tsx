export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-10">
      <section className="text-center mb-20">
        <h1 className="text-4xl font-bold text-green-400 mb-4">NafeProxys – Brazilian 4G/5G Mobile Proxies</h1>
        <p className="text-gray-300 max-w-xl mx-auto">High-speed, anonymous and stable proxies. Perfect for automation, multi-accounting and digital marketing.</p>
        <a
          href="https://t.me/Nafeproxysbr"
          target="_blank"
          className="inline-block mt-6 bg-green-500 hover:bg-green-600 text-black font-semibold py-2 px-6 rounded"
        >💬 Buy Now</a>
      </section>

      <section className="grid md:grid-cols-3 gap-6 mb-20">
        {["VIVO 5G – Private", "CLARO 5G – Private", "Shared Proxy (VIVO/CLARO)"].map((title, i) => (
          <div key={i} className="bg-zinc-900 p-6 rounded-xl shadow">
            <h2 className="text-green-300 font-bold text-lg mb-3">{title}</h2>
            <ul className="mb-4 text-sm">
              <li>• 2 hours – $3</li>
              <li>• 1 day – $7.20</li>
              <li>• 7 days – $35</li>
              <li>• 30 days – $85</li>
            </ul>
            <h3 className="text-green-400 font-semibold mb-1">Features</h3>
            <ul className="text-xs text-gray-300 mb-4 space-y-1">
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
            <h3 className="text-green-400 font-semibold mb-1">Performance</h3>
            <ul className="text-xs text-gray-300">
              <li>• Vivo Speed: ~25 Mbit/s</li>
              <li>• Ping: ~86 ms</li>
              <li>• Measured from Origin Country</li>
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-20">
        <h2 className="text-2xl text-green-300 font-bold text-center mb-6">Use Cases</h2>
        <ul className="grid md:grid-cols-2 gap-4 text-sm text-gray-300 max-w-3xl mx-auto">
          <li>✅ Multi-accounting</li>
          <li>✅ Bots, scraping, automation</li>
          <li>✅ App testing and localization</li>
          <li>✅ Social media and ads</li>
        </ul>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl text-green-300 font-bold text-center mb-6">What Our Users Say</h2>
        <ul className="max-w-2xl mx-auto text-sm text-gray-400 space-y-4">
          <li>"Never had such a stable proxy. NafeProxys rocks!"</li>
          <li>"Perfect for my automation workflows on Instagram and TikTok."</li>
          <li>"Fast, stable, support in Telegram was instant."</li>
        </ul>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl text-green-300 font-bold text-center mb-6">FAQ</h2>
        <div className="max-w-2xl mx-auto text-sm text-gray-300 space-y-4">
          <div>
            <strong>How do I receive my proxy?</strong>
            <p>We deliver via Telegram right after payment confirmation.</p>
          </div>
          <div>
            <strong>Can I change IP?</strong>
            <p>Yes, you can change manually or request rotation URLs.</p>
          </div>
          <div>
            <strong>What’s the speed?</strong>
            <p>Average 20~30 Mbps depending on carrier and signal.</p>
          </div>
        </div>
      </section>

      <section className="text-center mt-20">
        <h2 className="text-2xl text-green-400 font-bold mb-4">Ready to boost your performance?</h2>
        <a
          href="https://t.me/Nafeproxysbr"
          target="_blank"
          className="bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-6 rounded inline-block"
        >
          💬 Talk to us on Telegram
        </a>
      </section>

      <footer className="mt-24 pt-10 border-t border-zinc-800 text-center text-xs text-gray-500">
        <p>© 2025 NafeProxys. All rights reserved.</p>
        <p>Contact: @Nafeproxysbr</p>
      </footer>
    </main>
  );
}
