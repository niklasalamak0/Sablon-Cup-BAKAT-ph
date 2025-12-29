const STEPS = [
  {
    number: 1,
    title: "Hubungi Kami via WhatsApp",
    description: "Chat kami untuk konsultasi awal mengenai kebutuhan sablon cup Anda",
  },
  {
    number: 2,
    title: "Kirim Logo / Minta Bantu Desain",
    description: "Kirim logo Anda atau minta bantuan tim desainer kami untuk membuat desain",
  },
  {
    number: 3,
    title: "Approval Desain & Produksi",
    description: "Setujui desain final, lalu kami langsung mulai proses produksi sablon cup",
  },
  {
    number: 4,
    title: "Cup Siap Kirim ke Toko Anda",
    description: "Sablon cup selesai dan siap kami kirimkan ke lokasi Anda",
  },
]

export default function ProcessSection() {
  return (
    <section id="proses" className="py-16 md:py-24 bg-white border-t border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-orange-600 text-sm font-semibold tracking-widest uppercase mb-3">Alur Pemesanan</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-balance">
            Alur Pemesanan Sablon Cup Mudah & Cepat
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Connector line */}
              {idx < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-orange-300" />
              )}

              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-white text-3xl font-bold">{step.number}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-8 border border-orange-200 text-center">
          <p className="text-gray-700 mb-6">
            <span className="font-semibold">Siap memulai?</span> Hubungi kami sekarang dan dapatkan konsultasi gratis!
          </p>
          <a
                href={`https://wa.me/6285546418583?text=${encodeURIComponent(
                  "Halo, saya ingin konsultasi gratis tentang sablon cup plastik untuk usaha minuman saya."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center justify-center
                  bg-orange-600 text-white
                  px-8 py-3 rounded-lg
                  font-semibold
                  hover:bg-orange-700
                  transition
                  shadow-md
                "
              >
                💬 Konsultasi Gratis via WhatsApp
              </a>
        </div>
      </div>
    </section>
  )
}
