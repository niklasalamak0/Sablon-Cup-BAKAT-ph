import { Zap, Palette, Truck, Users } from "lucide-react"

const SERVICES = [
  {
    icon: Zap,
    title: "Kualitas Sablon Tajam & Tahan Lama",
    description:
      "Menggunakan teknologi sablon modern dengan hasil cetak yang tajam, detail, dan tahan lama berbulan-bulan.",
  },
  {
    icon: Palette,
    title: "Bantu Desain dari Nol",
    description: "Tim kami siap membantu merancang desain cup Anda dari nol atau menyempurnakan desain yang sudah ada.",
  },
  {
    icon: Users,
    title: "Cocok untuk Semua Usaha Minuman",
    description: "Layanan kami ideal untuk kedai kopi, boba, es teh, jus, dan semua jenis UMKM minuman kekinian.",
  },
  {
    icon: Truck,
    title: "Pengiriman ke Area Trenggalek & Sekitarnya",
    description: "Kami melayani pengiriman cup sablon ke seluruh Trenggalek, Tulungagung, dan area sekitarnya.",
  },
]

export default function ServicesSection() {
  return (
    <section id="layanan" className="py-16 md:py-24 bg-white border-t border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-orange-600 text-sm font-semibold tracking-widest uppercase mb-3">Keunggulan Layanan</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-balance">
            Mengapa Pilih PT. Bakti Karya Teknik?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={idx}
                className="bg-gradient-to-br from-orange-50 to-white border border-orange-100 rounded-xl p-8 hover:shadow-lg hover:border-orange-300 transition duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-orange-600 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
