"use client"

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
    <section id="proses" className="py-16 md:py-24 bg-white border-t border-orange-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-orange-600 text-sm font-semibold tracking-widest uppercase mb-3">
            Alur Pemesanan
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-balance">
            Alur Pemesanan Sablon Cup Mudah & Cepat
          </h2>
        </div>

        <div className="relative">
          {/* Grid Langkah Kerja */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {STEPS.map((step, idx) => (
              <div key={idx} className="relative group">
                
                {/* Connector Line (Desktop Only) */}
                {idx < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[65%] w-[70%] h-[2px] z-0">
                    <div className="w-full h-full bg-gray-100 rounded-full relative overflow-hidden">
                      {/* Animasi aliran warna oranye */}
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-300 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></div>
                    </div>
                  </div>
                )}

                <div className="flex flex-col items-center text-center relative z-10">
                  {/* Lingkaran Angka */}
                  <div className="relative w-24 h-24 mb-6">
                    {/* Outer Spinning Ring */}
                    <div className="absolute -inset-2 border-2 border-dashed border-orange-300 rounded-full animate-[spin_10s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-600 to-orange-800 flex items-center justify-center shadow-[0_10px_25px_-5px_rgba(234,88,12,0.4)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <span className="text-white text-3xl font-black italic tracking-tighter">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed px-4">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ================= BOTTOM CTA CARD ================= */}
          <div className="relative mt-32">
            {/* Background Glow */}
            <div className="absolute -inset-6 bg-gradient-to-r from-orange-400/10 to-amber-300/10 blur-3xl rounded-[3rem] -z-10"></div>
            
            <div className="bg-white rounded-3xl p-8 md:p-14 border border-orange-50 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] text-center relative overflow-hidden group">
              
              {/* Decorative Ornaments */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-orange-50 rounded-full blur-3xl opacity-60 group-hover:scale-125 transition-transform duration-1000"></div>
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-amber-50 rounded-full blur-3xl opacity-60 group-hover:scale-125 transition-transform duration-1000"></div>

              <div className="relative z-10">
                <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-6">
                  Siap Meningkatkan <span className="text-orange-600 underline decoration-orange-200 decoration-4 underline-offset-8">Kualitas Brand</span> Anda?
                </h2>
                
                <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
                  Jangan ragu untuk berkonsultasi secara gratis. Tim ahli kami di{" "}
                  <span className="font-bold text-gray-900 border-b-2 border-orange-200">
                    PT. Bakti Karya Teknik
                  </span>{" "}
                  siap membantu mewujudkan kemasan cup impian Anda.
                </p>

                <div className="flex flex-col items-center gap-6">
                  <a
                    href={`https://wa.me/6281330602901?text=${encodeURIComponent(
                      "Halo, saya tertarik dengan layanan sablon cup plastik. Bisa dibantu konsultasi?"
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      relative inline-flex items-center justify-center 
                      bg-orange-600 text-white 
                      px-10 py-5 rounded-2xl font-bold text-lg
                      transition-all duration-300
                      hover:bg-orange-700 hover:scale-105 hover:shadow-[0_20px_40px_-10px_rgba(234,88,12,0.4)]
                      active:scale-95 group/btn
                    "
                  >
                    <span className="flex items-center gap-3">
                      💬 Mulai Konsultasi Gratis Sekarang
                    </span>
                  </a>
                  
                  <div className="flex flex-wrap justify-center gap-6 mt-4">
                    {["Respons Cepat", "Desain Gratis*", "Tanpa Biaya Konsultasi"].map((tag, i) => (
                      <span key={i} className="flex items-center gap-2 text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}