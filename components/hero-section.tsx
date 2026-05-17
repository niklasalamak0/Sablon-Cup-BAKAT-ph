import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-orange-50 via-white to-white py-16 md:py-28 overflow-hidden">
      
      {/* ================= BACKGROUND ACCENTS ================= */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl -z-10 animate-[pulse_6s_infinite]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-100/40 rounded-full blur-2xl -z-10 animate-[pulse_8s_infinite]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ================= TEXT CONTENT (KIRI) ================= */}
          {/* Efek Fade-in Up menggunakan animasi utilitas v0 / standar Tailwind */}
          <div className="space-y-6 transition-all duration-700 ease-out translate-y-0 opacity-100">
            
            <div className="space-y-3">
              <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full shadow-sm">
                📍 Jasa Sablon Cup Plastik Trenggalek & Tulungagung
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.15]">
                Jasa Sablon Cup <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">Profesional</span> untuk Brand Anda
              </h1>
            </div>


  {/* 2. Teks Deskripsi dengan Tipografi yang Lebih Dinamis */}
  <p className="text-lg text-gray-600 leading-relaxed max-w-md transition-all duration-300 group-hover:text-gray-900">
    <span className="block text-gray-900 font-bold text-xl mb-1">
      Tingkatkan Value Brand Anda.
    </span>
    PT. Bakti Karya Teknik berpengalaman mengerjakan sablon cup untuk berbagai 
    brand minuman lokal dengan <span className="text-orange-600 font-semibold underline decoration-orange-200 decoration-2 underline-offset-4">kualitas terbaik</span> dan proses cepat.
  </p>

            {/* Benefits dengan Efek Hover Item */}
            <div className="space-y-3.5">
              {[
                "Minimal order terjangkau mulai dari 1,000 pcs",
                "Desain rapi, sablon tajam dan anti luntur",
                "Proses cepat dan transaksi aman via WhatsApp",
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-orange-500 to-amber-500 flex items-center justify-center shadow-md shadow-orange-500/20 group-hover:scale-110 transition-transform duration-200">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-200">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons dengan Micro-interactions Pure Tailwind */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={`https://wa.me/6281330602901?text=${encodeURIComponent(
                  "Halo, saya ingin konsultasi gratis tentang sablon cup plastik untuk usaha minuman saya."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gradient-to-r from-orange-600 to-orange-500 text-white px-8 py-3.5 rounded-xl font-bold transition-all duration-300 shadow-lg shadow-orange-600/20 hover:shadow-orange-600/40 hover:-translate-y-0.5 hover:brightness-110 active:scale-95 text-center"
              >
                💬 Konsultasi Gratis via WhatsApp
              </a>

              <a
                href="#portofolio"
                className="inline-flex items-center justify-center bg-gray-100 text-gray-900 px-8 py-3.5 rounded-xl font-bold transition-all duration-200 hover:bg-gray-200 hover:-translate-y-0.5 active:scale-95 text-center"
              >
                Lihat Portofolio
              </a>
            </div>
          </div>

          {/* ================= HERO IMAGE (KANAN) ================= */}
          <div className="flex justify-center md:justify-end relative">
            
            {/* Floating Badge 1 - Menggunakan animasi bounce bawaan Tailwind yang diperhalus */}
            <div className="absolute top-8 -left-6 bg-white p-3 rounded-xl shadow-xl z-20 hidden sm:flex items-center gap-3 border border-gray-100 animate-[bounce_4s_infinite_ease-in-out]">
              <div className="bg-amber-100 p-2 rounded-lg text-amber-600">✨</div>
              <div>
                <p className="text-xs text-gray-400 font-medium">Kualitas</p>
                <p className="text-sm font-bold text-gray-800">Premium & Tajam</p>
              </div>
            </div>

            {/* Floating Badge 2 */}
            <div className="absolute bottom-8 -right-4 bg-white p-3 rounded-xl shadow-xl z-20 hidden sm:flex items-center gap-3 border border-gray-100 animate-[bounce_5s_infinite_ease-in-out_1s]">
              <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600">⚡</div>
              <div>
                <p className="text-xs text-gray-400 font-medium">Pengerjaan</p>
                <p className="text-sm font-bold text-gray-800">Proses Cepat</p>
              </div>
            </div>

            {/* Bingkai Utama Gambar */}
            {/* 1. Efek Glow di belakang bingkai (Memberikan kedalaman) */}
  <div className="absolute -inset-1.5 bg-gradient-to-r from-orange-400 to-amber-300 rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-700"></div>

  {/* 2. Bingkai Utama dengan Gradient Border */}
  {/* Kita ganti border-white menjadi padding + gradient background */}
  <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-[3/4] p-1.5 bg-gradient-to-br from-orange-400 via-white to-amber-400 rounded-[2rem] shadow-2xl transition-all duration-500 group-hover:rotate-1">
    
    {/* 3. Wadah Gambar Dalam */}
    <div className="relative w-full h-full bg-white rounded-[1.6rem] overflow-hidden">
      <Image
        src="/hero-image.png"
        alt="Sablon cup plastik custom"
        fill
        priority
        className="object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-in-out"
      />
      
      {/* Overlay gradien halus di dalam gambar agar teks lencana lebih terbaca */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </div>

  </div>

          </div>

        </div>
      </div>
    </section>
  )
}