export default function VideoSection() {
  return (
    <section
      id="video"
      className="py-16 md:py-24 bg-gradient-to-br from-orange-50 to-white border-t border-orange-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* GRID UTAMA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT : TEXT & FEATURES ================= */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-[2px] bg-orange-500"></span>
                <p className="text-orange-600 text-sm font-bold tracking-[0.2em] uppercase">
                  Proses Produksi
                </p>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-gray-950 leading-tight mb-6">
                Lihat Bagaimana <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">Kualitas</span> Diciptakan
              </h2>
              
              <p className="text-gray-600 text-lg max-w-xl">
                Saksikan langsung bagaimana kami memproduksi cup sablon berkualitas
                melalui proses yang terkontrol, rapi, dan konsisten dari awal hingga akhir.
              </p>
            </div>

            {/* FEATURE LIST - Sekarang berada di dalam div 'space-y-8' */}
            <div className="grid gap-4">
              {[
                {
                  title: "Teknologi Modern",
                  desc: "Menggunakan mesin sablon yang dirancang untuk menghasilkan cetakan tajam, stabil, dan konsisten pada setiap cup.",
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  ),
                },
                {
                  title: "Kontrol Kualitas",
                  desc: "Setiap cup dicek secara visual dan fungsi sebelum dikirim, untuk memastikan hasil sablon rapi dan sesuai standar produksi.",
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  ),
                },
                {
                  title: "Pengerjaan Cepat",
                  desc: "Alur kerja produksi disusun efisien dan terstruktur, sehingga pesanan dapat diselesaikan tepat waktu tanpa mengurangi kualitas hasil.",
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  ),
                },
              ].map((feature, i) => (
                <div 
                  key={i} 
                  className="group flex gap-5 p-5 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-orange-500/5 border border-transparent hover:border-orange-100"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {feature.icon}
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-orange-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div> {/* Penutup LEFT column */}

          {/* ================= RIGHT : VIDEO SHOWCASE ================= */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-orange-500/20 to-amber-400/10 blur-2xl rounded-[2.5rem] -z-10 group-hover:opacity-100 transition-opacity opacity-50"></div>
            
            <div className="relative aspect-[9/16] md:aspect-video lg:aspect-[4/5] w-full max-w-[450px] mx-auto rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-white bg-gray-900 group-hover:scale-[1.02] transition-transform duration-500">
              
              <div className="absolute top-6 left-6 z-20 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                <span className="text-white text-[10px] font-bold uppercase tracking-widest">Live Production</span>
              </div>

              <video
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                muted
                playsInline
                controls
                poster="/sablon-cup.jpg"
              >
                <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/proses-sablon-cup-M0nCcEpP3Dj1R7IUdIvavQm92EGOFd.mp4" type="video/mp4" />
              </video>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity">
                
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 md:right-0 bg-white p-4 rounded-2xl shadow-2xl border border-gray-100 z-30 hidden sm:flex items-center gap-4 animate-bounce">
               <div className="bg-green-100 p-2 rounded-lg text-green-600 font-black text-sm">100%</div>
               <div className="text-[10px] font-bold text-gray-800 leading-tight uppercase">
                 Hasil Presisi<br/>Sesuai Desain
               </div>
            </div>
          </div>

        </div> {/* Penutup GRID UTAMA */}
      </div>
    </section>
  )
}