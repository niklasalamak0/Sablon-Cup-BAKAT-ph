export default function Footer() {
  return (
    // 'group' untuk mendeteksi kursor masuk ke area footer
    <footer className="relative bg-[#050505] pt-24 pb-12 overflow-hidden group">
      
      {/* 1. ANIMASI GARIS PEMBATAS BERGERAK */}
      <div className="absolute top-0 left-0 w-full h-[1px] flex justify-center">
        {/* Garis ini yang akan bergerak ke atas (translate-y) saat hover */}
        <div className="w-full h-full bg-white/10 transition-all duration-500 ease-out group-hover:-translate-y-6 group-hover:bg-orange-500 group-hover:shadow-[0_0_20px_rgba(234,88,12,0.8)]">
          {/* Cahaya glow tambahan di bawah garis yang ikut bergerak */}
          <div className="w-full h-20 bg-orange-600/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Identity */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-white tracking-tighter">
                PT. Bakti <span className="text-orange-500">Karya Teknik</span>
              </h3>
              <div className="h-1 w-12 bg-orange-600 rounded-full transition-all duration-500 group-hover:w-20"></div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed font-medium">
              Layanan sablon cup plastik profesional dengan kualitas cetak premium untuk brand minuman Anda.
            </p>

          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-white mb-8 uppercase text-[10px] tracking-[0.3em] opacity-70">Navigasi</h4>
            <ul className="space-y-4 text-sm font-medium">
              {['Layanan', 'Portofolio', 'Proses Pesan'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-orange-500 transition-all flex items-center gap-2 group/link">
                    <span className="w-0 h-[1px] bg-orange-500 group-hover/link:w-4 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Workshop Details */}
          <div>
            <h4 className="font-bold text-white mb-8 uppercase text-[10px] tracking-[0.3em] opacity-70">Workshop</h4>
            <div className="text-sm space-y-6">
              <div className="flex gap-4">
                <span className="text-orange-500 shrink-0">📍</span>
                <p className="text-gray-300 leading-relaxed font-medium text-xs">
                  Rt 03/Rw 01, Dusun: Bendo, Bendorejo Selatan (Gudang BAKAT), Kec. Pogalan, Kab. Trenggalek.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-orange-500 shrink-0">📧</span>
                <p className="text-gray-300 font-medium text-xs">bakti.karyateknik@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Premium CTA Card */}
          <div className="bg-gradient-to-br from-[#121212] to-[#050505] rounded-[2.5rem] p-8 border border-white/5 shadow-2xl relative overflow-hidden group/card hover:border-orange-500/30 transition-all duration-500">
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-orange-600/5 rounded-full blur-3xl group-hover/card:bg-orange-600/15 transition-all duration-700"></div>
            <h4 className="font-bold text-white text-xl mb-3 relative z-10 font-sans">Mulai Proyek?</h4>
            <p className="text-gray-400 text-xs mb-8 leading-relaxed relative z-10 font-medium font-sans">
              Konsultasikan kebutuhan desain dan cetak cup brand Anda secara gratis.
            </p>
            <a 
              href="https://wa.me/6281330602901" 
              className="block w-full py-4 bg-orange-600 text-white rounded-2xl text-center text-sm font-black shadow-lg shadow-orange-900/40 hover:bg-orange-500 hover:-translate-y-1 transition-all duration-300 relative z-10"
            >
              HUBUNGI WHATSAPP
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em]">
          <p>© 2026 <span className="text-gray-400">PT. Bakti Karya Teknik</span></p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-orange-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}