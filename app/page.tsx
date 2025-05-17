export default function Home() {
  return (
    <main className="p-10 text-white bg-black min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-green-400 text-center">
        NafeProxys – Brazilian 4G/5G Mobile Proxies
      </h1>

      <p className="mb-10 text-center text-gray-300 max-w-xl mx-auto">
        High-speed, stable, and anonymous mobile proxies from Brazil. Perfect for scraping, automation, and social media management.
      </p>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {["VIVO 5G – Private", "CLARO 5G – Private", "Shared Proxy (VIVO/CLARO)"].map((plan, index) => (
          <div key={index} className="bg-zinc-900 p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold text-green-300 mb-2">{plan}</h2>
            <ul className="text-sm mb-4">
              <li>• 2 hours – $3</li>
              <li>• 1 day – $7.20</li>
              <li>• 7 days – $35</li>
              <li>• 30 days – $85</li>
            </ul>
            <h3 className="text-green-400 font-semibold mt-4 mb-1">Features</h3>
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
            <ul className="text-xs text-gray-300 mb-6">
              <li>• Vivo Speed: ~25 Mbit/s</li>
              <li>• Ping: ~86 ms</li>
              <li>• Measured from Origin Country</li>
            </ul>
            <a
              href="https://instagram.com/nafeproxys"
              target="_blank"
              className="block text-center bg-green-500 hover:bg-green-600 text-black font-semibold py-2 rounded"
            >
              💬 Buy Now
            </a>
          </div>
        ))}
      </section>

      <p className="mt-16 text-sm text-center text-gray-500">
        ⚡ 24/7 Support · Telegram: @nafeproxys · Multi-language Assistance
      </p>
    </main>
  );
}
