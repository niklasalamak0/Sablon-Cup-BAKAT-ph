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

        <div className="relative">
  {/* Grid - Langkah Kerja dengan Efek Interaktif */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
    {STEPS.map((step, idx) => (
      <div key={idx} className="relative group">
        
        {/* Connector Line - Dibuat Animasi Mengalir */}
        {idx < STEPS.length - 1 && (
          <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-[2px] z-0">
            <div className="w-full h-full bg-gray-100 rounded-full relative overflow-hidden">
              {/* Efek aliran warna oranye yang bergerak */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-300 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-1000"></div>
            </div>
          </div>
        )}

        <div className="flex flex-col items-center text-center relative z-10">
          {/* Lingkaran Angka dengan Efek Orbit */}
          <div className="relative w-24 h-24 mb-6">
            {/* Outer Spinning Ring (Hanya muncul saat hover) */}
            <div className="absolute -inset-2 border-2 border-dashed border-orange-300 rounded-full animate-[spin_10s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center shadow-[0_10px_20px_-5px_rgba(234,88,12,0.4)] group-hover:scale-110 transition-transform duration-500">
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

  {/* ================= BOTTOM CTA CARD (PREMIUM UPDATE) ================= */}
  <div className="relative mt-24">
    {/* Dekorasi Cahaya di Belakang Kartu */}
    <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/20 to-amber-300/20 blur-3xl rounded-[3rem] -z-10"></div>
    
    <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] text-center relative overflow-hidden group">
      
      {/* Ornamen Abstrak di Pojok Kartu */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-100 rounded-full blur-3xl opacity-50 group-hover:scale-150 transition-transform duration-700"></div>

      <div className="relative z-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
          Siap Meningkatkan <span className="text-orange-600 underline decoration-orange-200 decoration-4">Kualitas Brand</span> Anda?
        </h2>
<p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
  Jangan ragu untuk berkonsultasi. Tim ahli kami di{" "}
  <span className="font-bold text-gray-900 border-b-2 border-orange-200">
    PT. Bakti Karya Teknik
  </span>{" "}
  siap membantu mewujudkan desain cup impian Anda.
</p>

        {/* Tombol dengan Efek "Shatter" yang kita buat sebelumnya */}
        <a
          href={`https://wa.me/6281330602901?text=${encodeURIComponent(
            "Halo, saya tertarik dengan layanan sablon cup plastik. Bisa dibantu konsultasi?"
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            relative inline-flex items-center gap-3 
            bg-orange-600 text-white 
            px-12 py-4 rounded-2xl font-bold text-lg
            transition-all duration-300
            hover:bg-orange-700 hover:scale-105 hover:shadow-[0_15px_30px_-10px_rgba(234,88,12,0.5)]
            active:scale-95 group
          "
        >
          {/* Partikel Efek Pecah (Opsional: Tambahkan span kepingan di sini jika ingin konsisten) */}
          <span className="flex items-center gap-2">
            💬 Mulai Konsultasi Gratis Sekarang
          </span>
        </a>
        
        <p className="mt-6 text-xs text-gray-400 font-medium uppercase tracking-widest">
          Respons Cepat & Ramah • Tanpa Biaya Konsultasi
        </p>
      </div>
    </div>
  </div>
</div>
      </div>
    </section>
  )
}
