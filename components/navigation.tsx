"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, MessageCircle } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Efek transparan ke solid saat scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const waLink = `https://wa.me/6281330602901?text=${encodeURIComponent(
    "Halo, saya tertarik dengan layanan sablon cup plastik. Bisa dibantu konsultasi? saya ingin tanya tanya beberapa hal"
  )}`

  return (
    <nav 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-lg shadow-md py-2" 
          : "bg-white py-4"
      } border-b border-orange-50`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
<div className="flex-1">
  <Link href="/" className="flex items-center group">
    <div className="relative transition-transform duration-300 group-hover:scale-105">
      <Image
        src="/bakat-logo.png"
        alt="Bakat Logo"
        // Sesuaikan width ke 240 dan height ke 60 untuk rasio 4:1 (memanjang)
        width={240} 
        height={60}
        // object-left memastikan logo menempel ke kiri saat container berubah
        className="object-contain object-left h-10 md:h-12 w-auto" 
        priority
      />
    </div>
  </Link>
</div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {['Layanan', 'Portofolio', 'Proses'].map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="text-sm font-medium text-gray-600 hover:text-orange-600 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              bg-gradient-to-r from-orange-600 to-amber-500 
              text-white px-6 py-2.5 rounded-full
              text-sm font-bold
              hover:shadow-lg hover:shadow-orange-600/20 hover:-translate-y-0.5
              transition-all duration-300
            "
          >
            <MessageCircle size={18} className="animate-pulse" />
            <span>Chat WhatsApp</span>
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden p-2 text-gray-700 hover:bg-orange-50 rounded-lg transition"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU PANEL */}
      <div 
        className={`md:hidden absolute w-full bg-white border-b border-orange-100 shadow-xl transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-6 py-8 space-y-6">
          <Link 
            onClick={() => setIsOpen(false)}
            href="#layanan" 
            className="block text-lg font-semibold text-gray-800 hover:text-orange-600"
          >
            Layanan
          </Link>
          <Link 
            onClick={() => setIsOpen(false)}
            href="#portofolio" 
            className="block text-lg font-semibold text-gray-800 hover:text-orange-600"
          >
            Portofolio
          </Link>
          <Link 
            onClick={() => setIsOpen(false)}
            href="#proses" 
            className="block text-lg font-semibold text-gray-800 hover:text-orange-600"
          >
            Proses Pesan
          </Link>
          
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-orange-600 text-white px-4 py-4 rounded-2xl text-md font-bold hover:bg-orange-700 transition shadow-lg"
          >
            <MessageCircle size={20} />
            Hubungi Kami Sekarang
          </a>
        </div>
      </div>
    </nav>
  )
}