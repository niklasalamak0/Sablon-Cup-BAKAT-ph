export default function Footer() {
  return (
    // Menambahkan class 'group' agar kita bisa mendeteksi hover pada seluruh area footer
    <footer className="relative bg-[#050505] pt-32 pb-12 overflow-hidden group">
      
      {/* 1. ANIMASI PEMBATAS HOVER */}
      {/* Elemen ini akan bergerak sedikit ke atas saat footer di-hover */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-orange-500/40 to-transparent transform transition-all duration-700 ease-out group-hover:-translate-y-8 opacity-0 group-hover:opacity-100"></div>
      
      {/* Glow Effect yang mengikuti gerakan ke atas */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-24 bg-orange-600/5 blur-[80px] rounded-full transform transition-all duration-1000 ease-out group-hover:-translate-y-12 opacity-0 group-hover:opacity-100"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Identity */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-white tracking-tighter">
                PT. Bakti <span className="text-orange-500">Karya Teknik</span>
              </h3>
              <div className="h-1 w-12 bg-orange-600 rounded-full"></div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed font-medium">
              Partner profesional sablon cup plastik yang fokus pada kualitas cetak tajam dan presisi tinggi di Trenggalek.
            </p>
            <div className="flex gap-4">
              {['FB', 'IG', 'TT'].map((social) => (
                <div key={social} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-gray-400 hover:border-orange-500 hover:text-white transition-all cursor-pointer">
                  {social}
                </div>
              ))}
            </div>
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
                <p className="text-gray-300 leading-relaxed font-medium">
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
          <div className="bg-gradient-to-br from-[#151515] to-[#0a0a0a] rounded-[2.5rem] p-8 border border-white/5 shadow-2xl relative overflow-hidden group/card">
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-orange-600/10 rounded-full blur-3xl group-hover/card:bg-orange-600/20 transition-all duration-700"></div>
            <h4 className="font-bold text-white text-xl mb-3 relative z-10">Mulai Proyek Anda?</h4>
            <p className="text-gray-400 text-xs mb-8 leading-relaxed relative z-10 font-medium">
              Konsultasikan desain cup brand Anda dengan tim ahli kami secara gratis.
            </p>
            <a 
              href="https://wa.me/6281330602901" 
              className="block w-full py-4 bg-orange-600 text-white rounded-2xl text-center text-sm font-black shadow-lg shadow-orange-900/40 hover:bg-orange-500 hover:-translate-y-1 transition-all duration-300 relative z-10"
            >
              KONSULTASI GRATIS
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em]">
            © 2026 <span className="text-gray-300">PT. Bakti Karya Teknik</span>. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] text-gray-500 hover:text-orange-500 transition-colors uppercase tracking-[0.2em] font-bold">Privacy Policy</a>
            <a href="#" className="text-[10px] text-gray-500 hover:text-orange-500 transition-colors uppercase tracking-[0.2em] font-bold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}