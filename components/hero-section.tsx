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
                )}`}}
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
                  max-w-md
                  aspect-[4/5]
                  bg-white
                  p-4
                  rounded-[2.5rem]
                  shadow-[0_32px_64px_-12px_rgba(0,0,0,0.12)]
                  border border-zinc-100
                  -rotate-1
                  hover:rotate-0
                  transition-all
                  duration-700
                  ease-in-out
                  overflow-hidden
                  z-10
                "
              >
                <Image
                  src="image_fc3a7c.jpg"
                  alt="Koleksi Sablon Cup Bakat"
                  fill
                  className="object-cover p-2 rounded-[2rem]"
                />
                
                {/* Clean Glossy Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
              </div>

              {/* Minimalist Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white border border-zinc-100 p-5 rounded-3xl shadow-xl z-20 rotate-3 hidden sm:block">
                <div className="flex flex-col items-center">
                  <span className="text-[10px] font-black text-orange-500 tracking-widest uppercase">Kualitas</span>
                  <span className="text-xl font-black text-zinc-900 leading-none">TERBAIK</span>
                  <div className="mt-2 flex gap-1">
                    {[1,2,3,4,5].map(i => (
                      <svg key={i} className="w-3 h-3 text-orange-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative Accent Dots */}
              <div 
                className="absolute -top-6 -left-6 w-24 h-24 opacity-40 -z-0"
                style={{ backgroundImage: 'radial-gradient(#f97316 2px, transparent 2px)', backgroundSize: '12px 12px' }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
