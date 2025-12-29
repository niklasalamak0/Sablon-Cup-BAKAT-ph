import { Star } from "lucide-react"

const TESTIMONIALS = [
  {
    name: "Kedai Kopi Retro",
    role: "Pemilik Kedai Kopi",
    content:
      "Sablon cup dari BAKAT sangat rapi dan berkualitas. Pelanggan kami suka dengan tampilan cupnya. Proses pemesanan juga sangat mudah dan cepat.",
    rating: 5,
  },
  {
    name: "Boba Tea Premium",
    role: "Manager Outlet",
    content:
      "Hasil sablon sangat tajam dan warnanya cerah. Harga juga terjangkau untuk kualitas yang kami dapatkan. Sangat merekomendasikan untuk UMKM minuman lainnya.",
    rating: 5,
  },
  {
    name: "Es Teh Segar",
    role: "Pemilik Usaha",
    content:
      "Tim BAKAT sangat profesional dan responsif. Mereka membantu saya dari desain hingga produksi. Cup sablon sudah menjadi identitas brand saya di pasaran.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-orange-50 to-white border-t border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-orange-600 text-sm font-semibold tracking-widest uppercase mb-3">Testimoni Klien</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-balance">Apa Kata Klien Kami</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-8 border border-orange-100 hover:shadow-lg transition duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
              <div className="border-t border-orange-100 pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-orange-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
