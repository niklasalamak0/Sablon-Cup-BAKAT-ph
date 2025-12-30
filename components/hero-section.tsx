import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* ================= TEXT CONTENT (KIRI) ================= */}
          <div className="space-y-6">
            <div>
              <p className="text-orange-600 text-sm font-semibold tracking-widest uppercase mb-3">
                Jasa Sablon Cup Plastik Trenggalek & Tulungagung
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Jasa Sablon Cup Profesional untuk Brand Minuman Anda
              </h1>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed max-w-md">
              PT. Bakti Karya Teknik berpengalaman mengerjakan sablon cup untuk berbagai
              brand minuman lokal dengan kualitas terbaik dan proses cepat.
            </p>

            {/* Benefits */}
            <div className="space-y-3">
              {[
                "Minimal order terjangkau mulai dari 1000 pcs",
                "Desain rapi, sablon tajam dan awet",
                "Proses cepat dan mudah via WhatsApp",
              ].map((text, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">{text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={`https://wa.me/6281330602901?text=${encodeURIComponent(
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

              <a
                href="#portofolio"
                className="
                  inline-flex items-center justify-center
                  bg-gray-100 text-gray-900
                  px-8 py-3 rounded-lg
                  font-semibold
                  hover:bg-gray-200
                  transition
                "
              >
                Lihat Portofolio
              </a>
            </div>
          </div>

          {/* ================= HERO IMAGE (KANAN) ================= */}
          <div className="flex justify-center md:justify-end">
            <div
              className="
                relative
                w-full
                max-w-xs
                sm:max-w-sm
                md:max-w-md
                lg:max-w-lg
                aspect-[3/4]
                bg-gradient-to-b
                from-orange-100
                to-orange-50
                rounded-2xl
                shadow-lg
                overflow-hidden
              "
            >
              <Image
                src="/hero-image.png"
                alt="Sablon cup plastik custom"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
