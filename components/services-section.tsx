"use client"

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
    title: "Pengiriman Area Trenggalek & Sekitarnya",
    description: "Kami melayani pengiriman cup sablon ke seluruh Trenggalek, Tulungagung, dan area sekitarnya.",
  },
]

export default function ServicesSection() {
  return (
    <section id="layanan" className="py-16 md:py-24 bg-white border-t border-orange-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-600 text-sm font-semibold tracking-widest uppercase mb-3">
            Keunggulan Layanan
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-balance">
            Mengapa Pilih PT. Bakti Karya Teknik?
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-20px_rgba(234,88,12,0.15)] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* 1. Background Glow Effect */}
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-orange-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* 2. Watermark Number */}
                <span className="absolute right-8 top-6 text-7xl font-black text-gray-50 group-hover:text-orange-100/50 transition-colors duration-500 select-none">
                  0{idx + 1}
                </span>

                <div className="relative z-10">
                  {/* 3. Icon Container */}
                  <div className="relative w-16 h-16 mb-8">
                    {/* Rotating Ring Decoration */}
                    <div className="absolute inset-0 border-2 border-orange-100 rounded-2xl rotate-45 group-hover:rotate-90 transition-transform duration-700"></div>
                    
                    <div className="absolute inset-0 bg-gradient-to-tr from-orange-600 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-600/30 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-8 h-8 text-white transition-transform duration-500 group-hover:-rotate-12" />
                    </div>
                  </div>

                  {/* 4. Text Content */}
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors">
                    {service.description}
                  </p>

                  {/* 5. Animated Bottom Accent */}
                  <div className="mt-8 flex items-center gap-3">
                    <div className="h-1 w-12 bg-orange-100 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-orange-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                    </div>
                    <span className="text-[10px] font-bold text-orange-600 uppercase tracking-tighter opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500">
                      Layanan Unggulan
                    </span>
                  </div>
                </div>

                {/* Bottom Border Accent */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-orange-500 to-amber-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            )
          })}
        </div>
        
      </div>
    </section>
  )
}