"use client"

import Image from "next/image"

type PortfolioItem = {
  title: string
  category: string
  image: string
}

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    title: "Moro Moro Coffee",
    category: "Kopi",
    image: "/portofolio/moro-moro.jpg",
  },
  {
    title: "Jeruk Perasqu",
    category: "Es Jeruk Peras",
    image: "/portofolio/jeruk-perasqu.jpg",
  },
  {
    title: "Madju Djaja",
    category: "Kopi",
    image: "/portofolio/madju-djaja.jpg",
  },
  {
    title: "Ruang Luang",
    category: "Kopi",
    image: "/portofolio/ruang-luang.jpg",
  },
  {
    title: "Ammor Coffee and Space",
    category: "Kopi",
    image: "/portofolio/ammor.jpg",
  },
  {
    title: "Two D Coffee",
    category: "Kopi",
    image: "/portofolio/dua-darah.jpg",
  },
  {
    title: "Sobat Esteh",
    category: "Es Teh",
    image: "/portofolio/sobat-esteh.jpeg",
  },
  {
    title: "Balok Kayu",
    category: "Kopi",
    image: "/portofolio/balok-kayu.jpeg",
  },
  {
    title: "Es Teler Locari",
    category: "Kopi",
    image: "/portofolio/teler-locari.jpeg",
  },
  {
    title: "T'alkas",
    category: "Kopi",
    image: "/portofolio/talkas.jpeg",
  },
  {
    title: "Kedai Mayor",
    category: "Kopi",
    image: "/portofolio/kedai-mayor.jpeg",
  },
  {
    title: "Cendol Dawet",
    category: "Es Buah",
    image: "/portofolio/cendol-dawet.jpeg",
  },
  {
    title: "Best Tea",
    category: "Es Teh",
    image: "/portofolio/best-tea.jpg",
  },
  {
    title: "Apacok",
    category: "Es Buah",
    image: "/portofolio/apacok.jpeg",
  },
]

export default function PortfolioSection() {
  return (
    <section
      id="portofolio"
      className="py-16 md:py-24 bg-gradient-to-b from-white to-orange-50"
    >
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

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden border border-orange-100 hover:border-orange-300 transition group"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[3/4] bg-orange-50 overflow-hidden flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-bold text-gray-900 text-lg">
                  {item.title}
                </h3>
                <p className="text-sm text-orange-600 font-medium">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/6281330602901"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
          >
            Lihat Lebih Banyak Desain
          </a>
        </div>
      </div>
    </section>
  )
}