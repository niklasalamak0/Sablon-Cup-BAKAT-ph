"use client"

import Image from "next/image"

type PortfolioItem = {
  title: string
  category: string
  image: string
}

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { title: "Moro Moro Coffee", category: "Kopi", image: "/portofolio/moro-moro.jpg" },
  { title: "Jeruk Perasqu", category: "Es Jeruk", image: "/portofolio/jeruk-perasqu.jpg" },
  { title: "Madju Djaja", category: "Kopi", image: "/portofolio/madju-djaja.jpg" },
  { title: "Ruang Luang", category: "Kopi", image: "/portofolio/ruang-luang.jpeg" },
  { title: "Ammor Coffee and Space", category: "Kopi", image: "/portofolio/ammor.jpg" },
  { title: "Two D Coffee", category: "Kopi", image: "/portofolio/dua-darah.jpg" },
  { title: "Sobat Esteh", category: "Es Teh", image: "/portofolio/sobat-esteh.jpeg" },
  { title: "Balok Kayu", category: "Kopi", image: "/portofolio/balok-kayu.jpeg" },
  { title: "Es Teler Locari", category: "Es Teler", image: "/portofolio/teler-locari.jpeg" },
  { title: "T'alkas", category: "Es Buah", image: "/portofolio/talkas.jpeg" },
  { title: "Kedai Mayor", category: "Kopi", image: "/portofolio/kedai-mayor.jpeg" },
  { title: "Cendol Dawet", category: "Es Buah", image: "/portofolio/cendol-dawet.jpeg" },
  { title: "Best Tea", category: "Es Teh", image: "/portofolio/best-tea.jpeg" },
  { title: "Apacok", category: "Es Buah", image: "/portofolio/apacok.jpeg" },
]

export default function PortfolioSection() {
  return (
    <section id="portofolio" className="py-16 md:py-24 bg-gradient-to-b from-white to-orange-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-600 text-sm font-semibold tracking-widest uppercase mb-3">
            Karya Kami
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Beberapa Brand yang Sudah Kami Bantu Tumbuh
          </h2>
          <p className="text-gray-600 text-lg">
            Koleksi foto hasil produksi cup dari berbagai brand minuman
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {PORTFOLIO_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(234,88,12,0.2)] transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-2"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-600/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Info Section */}
              <div className="p-4 relative bg-white">
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-orange-500 group-hover:w-full transition-all duration-500"></div>
                <p className="text-[10px] md:text-xs text-orange-600 font-bold uppercase tracking-widest mb-1">
                  {item.category}
                </p>
                <h3 className="font-extrabold text-gray-900 text-sm md:text-lg leading-tight truncate">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button with Particle Effects */}
        <div className="text-center mt-20">
          <a
            href="https://wa.me/6281330602901"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center group"
          >
            {/* Background Glow */}
            <span className="absolute inset-0 rounded-xl bg-orange-400 blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300"></span>
            
            {/* Particles Container */}
            <span className="absolute inset-0 z-0 pointer-events-none overflow-visible">
              <span className="absolute top-0 left-1/2 w-2 h-2 bg-orange-400 rounded-sm opacity-0 group-hover:opacity-100 group-hover:-translate-y-12 group-hover:-translate-x-12 group-hover:rotate-45 transition-all duration-500"></span>
              <span className="absolute top-1/2 right-0 w-3 h-3 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:-translate-y-8 group-hover:translate-x-16 group-hover:rotate-12 transition-all duration-700"></span>
              <span className="absolute bottom-0 left-1/4 w-2 h-4 bg-orange-300 rounded-sm opacity-0 group-hover:opacity-100 group-hover:translate-y-12 group-hover:-translate-x-8 group-hover:-rotate-12 transition-all duration-600"></span>
              <span className="absolute top-1/4 left-0 w-3 h-1 bg-orange-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-4 group-hover:-translate-x-20 group-hover:rotate-90 transition-all duration-500"></span>
            </span>

            {/* Main Button Label */}
            <span className="relative z-10 flex items-center gap-3 bg-orange-600 text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 group-hover:bg-orange-700 group-hover:scale-105 active:scale-95 shadow-lg shadow-orange-600/30">
              Lihat Lebih Banyak Desain
              <svg 
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
        </div>
        
      </div>
    </section>
  )
}