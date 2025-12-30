export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-white mb-4">PT. Bakti Karya Teknik</h3>
            <p className="text-sm leading-relaxed">
              Jasa sablon cup profesional untuk brand minuman kekinian di Trenggalek dan sekitarnya.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Menu</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#layanan" className="hover:text-white transition">
                  Layanan
                </a>
              </li>
              <li>
                <a href="#portofolio" className="hover:text-white transition">
                  Portofolio
                </a>
              </li>
              <li>
                <a href="#proses" className="hover:text-white transition">
                  Proses Pesan
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Layanan</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Sablon Cup
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Pengiriman
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Desain Cup
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Kontak</h4>
            <ul className="space-y-2 text-sm">
              <li>
                📱 WhatsApp:{" "}
                <a
                  href="https://wa.me/6281330602901"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition cursor-pointer"
                >
                  Chat Now
                </a>
              </li>

              <li>📧 Email: bakti.karyateknik@gmail.com</li>
              <li>📍 Trenggalek, Indonesia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">© 2025 PT. Bakti Karya Teknik. Semua hak cipta dilindungi.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition text-sm">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition text-sm">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
