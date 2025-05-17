export default function Home() {
  return (
    <main className="p-10 text-white bg-black min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-green-400">NafeProxys – Brazilian 4G/5G Mobile Proxies</h1>

      <p className="mb-4">High-speed, private and stable mobile IPs from Brazil. Ideal for automation, marketing, social media and research.</p>

      <h2 className="text-2xl font-semibold mt-8 text-green-300">🌐 VIVO 5G – Private</h2>
      <ul className="mb-4">
        <li>2 hours – $3</li>
        <li>1 day – $7.20</li>
        <li>7 days – $35</li>
        <li>30 days – $85</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 text-green-300">🌐 CLARO 5G – Private</h2>
      <ul className="mb-4">
        <li>2 hours – $2.50</li>
        <li>1 day – $6</li>
        <li>7 days – $30</li>
        <li>30 days – $70</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 text-green-300">♻️ Shared Proxy</h2>
      <ul className="mb-4">
        <li>1 day – $3</li>
        <li>7 days – $15</li>
        <li>30 days – $38</li>
      </ul>

      <div className="mt-10 space-x-4">
        <a href="https://buy.stripe.com/test_xxxxx" className="bg-green-500 hover:bg-green-600 px-5 py-3 rounded font-semibold">💳 Buy with Card (Stripe)</a>
        <a href="https://example.com/usdt" className="bg-yellow-500 hover:bg-yellow-600 px-5 py-3 rounded font-semibold">💰 Pay with USDT (TRC20)</a>
      </div>

      <p className="mt-8 text-sm text-gray-400">⚡ 24/7 support · Telegram: @nafeproxys · Multilingual Assistance</p>
    </main>
  );
}
