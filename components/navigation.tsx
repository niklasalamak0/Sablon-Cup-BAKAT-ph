"use client"

import Image from "next/image"
import Link from "next/link"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-orange-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex-1">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/bakat-logo.png"
              alt="Bakat Logo"
              width={200}
              height={200}
              priority
            />

          </Link>

        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#layanan" className="text-sm text-gray-700 hover:text-orange-600 transition">
            Layanan
          </Link>
          <Link href="#portofolio" className="text-sm text-gray-700 hover:text-orange-600 transition">
            Portofolio
          </Link>
          <Link href="#proses" className="text-sm text-gray-700 hover:text-orange-600 transition">
            Proses Pesan
          </Link>
          <a
  href={`https://wa.me/6281330602901?text=${encodeURIComponent(
    "Halo, saya tertarik dengan layanan sablon cup plastik. Bisa dibantu konsultasi? saya ingin tanya tanya beberapa hal"
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="
    inline-flex items-center gap-2
    bg-orange-600 text-white
    px-5 py-2 rounded-full
    text-sm font-semibold
    hover:bg-orange-700
    transition
    shadow-sm
  "
>
  💬 Chat WhatsApp
</a>

        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-orange-100 bg-white p-4 space-y-4">
          <Link href="#layanan" className="block text-sm text-gray-700 hover:text-orange-600">
            Layanan
          </Link>
          <Link href="#portofolio" className="block text-sm text-gray-700 hover:text-orange-600">
            Portofolio
          </Link>
          <Link href="#proses" className="block text-sm text-gray-700 hover:text-orange-600">
            Proses Pesan
          </Link>
          <a
            href="https://wa.me/YOUR_WHATSAPP_NUMBER"
            className="block w-full text-center bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-700 transition"
          >
            Chat WhatsApp
          </a>
        </div>
      )}
    </nav>
  )
}
