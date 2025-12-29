export default function VideoSection() {
  return (
    <section
      id="video"
      className="py-16 md:py-24 bg-gradient-to-br from-orange-50 to-white border-t border-orange-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* GRID UTAMA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">

          {/* ================= LEFT : TEXT ================= */}
          <div>
            <p className="text-orange-600 text-sm font-semibold tracking-widest uppercase mb-3">
              Proses Produksi
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Lihat Proses Sablon Cup Kami
            </h2>

            <p className="text-gray-600 text-lg mb-8 max-w-xl">
              Saksikan langsung bagaimana kami memproduksi cup sablon berkualitas
              melalui proses yang terkontrol, rapi, dan konsisten dari awal hingga akhir.
            </p>

            {/* FEATURE LIST */}
            <div className="space-y-6">

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-orange-600 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Teknologi Modern</h3>
                  <p className="text-gray-600 text-sm">
                    Menggunakan mesin sablon yang dirancang untuk menghasilkan cetakan
                    tajam, stabil, dan konsisten pada setiap cup.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-orange-600 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Kontrol Kualitas</h3>
                  <p className="text-gray-600 text-sm">
                    Setiap cup dicek secara visual dan fungsi sebelum dikirim,
                    untuk memastikan hasil sablon rapi dan sesuai standar produksi.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-orange-600 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Pengerjaan Cepat</h3>
                  <p className="text-gray-600 text-sm">
                    Alur kerja produksi disusun efisien dan terstruktur,
                    sehingga pesanan dapat diselesaikan tepat waktu tanpa mengurangi kualitas hasil.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* ================= RIGHT : VIDEO (MUTED PERMANENT) ================= */}
          <div className="flex justify-center md:justify-end h-full">
            <div
              className="
                w-full
                max-w-md
                h-[420px]
                md:h-full
                rounded-2xl
                overflow-hidden
                shadow-xl
                border
                border-orange-200
                bg-black
              "
            >
              <video
                className="w-full h-full object-cover"
                muted
                playsInline
                controls
                poster="/sablon-cup.jpg"
              >
                <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/proses-sablon-cup-M0nCcEpP3Dj1R7IUdIvavQm92EGOFd.mp4" type="video/mp4" />
                Browser Anda tidak mendukung pemutaran video.
              </video>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
