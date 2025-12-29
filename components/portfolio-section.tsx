"use client"

import { useState } from "react"
import Image from "next/image"

type PortfolioItem = {
  title: string
  category: string
  image: string
  mockup: string
}

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    title: "Moro Moro Coffee",
    category: "Kopi",
    image: "/portofolio/moro-moro.jpg",
    mockup: "/portofolio/mockup/moromoro-mockup.jpg",
  },
  {
    title: "Jeruk Perasqu",
    category: "Es Jeruk Peras",
    image: "/portofolio/jeruk-perasqu.jpg",
    mockup: "/portofolio/mockup/jeruk-perasqu-mockup.jpg",
  },
  {
    title: "Madju Djaja",
    category: "Kopi",
    image: "/portofolio/madju-djaja.jpg",
    mockup: "/portofolio/mockup/maju-jaya-mockup.jpg",
  },
  {
    title: "Ruang Luang",
    category: "Kopi",
    image: "/portofolio/ruang-luang.jpg", // jika file belum ada, isi nanti
    mockup: "/portofolio/mockup/ruang-luang-mockup.jpg",
  },
  {
    title: "Ammor Coffee and Space",
    category: "Kopi",
    image: "/portofolio/ammor.jpg", // jika belum ada, silakan tambah
    mockup: "/portofolio/mockup/ammor-mockup.jpg",
  },
  {
    title: "Two D Coffee",
    category: "Kopi",
    image: "/portofolio/dua-darah.jpg", // optional
    mockup: "/portofolio/mockup/dua-darah.png",
  },
  {
    title: "Sobat Esteh",
    category: "Es Teh",
    image: "/portofolio/sobat-esteh.jpeg", // jika belum ada, silakan tambah
    mockup: "/portofolio/mockup/sobat-esteh-mockup.jpg",
  },
  {
    title: "Balok Kayu",
    category: "Kopi",
    image: "/portofolio/balok-kayu.jpeg", // optional
    mockup: "/portofolio/mockup/balok-kayu-mockup.jpg",
  },
]


export default function PortfolioSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

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
          Koleksi desain cup dari berbagai brand minuman
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PORTFOLIO_ITEMS.map((item, idx) => {
          const isExpanded = expandedId === idx

          return (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden border border-orange-100 hover:border-orange-300 transition"
            >
              {/* Image (DEFAULT = MOCKUP) */}
<button
  onClick={() => setExpandedId(isExpanded ? null : idx)}
  className="
    relative w-full
    aspect-[3/4]
    bg-orange-50
    p-4
    overflow-hidden
    flex items-center justify-center
  "
>
  <Image
    src={isExpanded ? item.image : item.mockup}
    alt={isExpanded ? item.title : `Mockup ${item.title}`}
    fill
    className="
      object-contain
      transition-transform duration-300
      hover:scale-105
    "
    sizes="
      (max-width: 640px) 90vw,
      (max-width: 1024px) 45vw,
      30vw
    "
  />
</button>



              {/* Info */}
              <div className="p-4">
                <h3 className="font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-orange-600 font-medium">
                  {item.category}
                </p>

                <p className="text-xs text-gray-500 mt-2">
                  {isExpanded
                    ? "Klik untuk melihat mockup"
                    : "Klik untuk melihat foto asli"}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <a
          href="https://wa.me/628XXXXXXXXXX"
          target="_blank"
          className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
        >
          Lihat Lebih Banyak Desain
        </a>
      </div>
    </div>
  </section>
)

}
