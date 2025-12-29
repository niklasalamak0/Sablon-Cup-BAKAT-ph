export default function FinalCtaSection() {
  const whatsappNumber = "6285546418583"

  const waMessage = encodeURIComponent(
    "Halo, saya ingin konsultasi gratis mengenai sablon cup plastik untuk usaha minuman saya. Mohon info dan penawarannya."
  )

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-balance">
          Siap Naikkan Value Brand Minuman Anda?
        </h2>

        <p className="text-lg text-orange-100 mb-8 leading-relaxed">
          Konsultasi gratis sablon cup area Trenggalek & Tulungagung.
          Cocok untuk kopi, es teh, dan minuman kekinian.
        </p>

        <a
          href={`https://wa.me/${whatsappNumber}?text=${waMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-3
            bg-white text-orange-600
            px-8 py-4 rounded-xl
            font-bold text-lg
            hover:bg-orange-50
            transition
            shadow-xl
          "
        >
          💬 Konsultasi Gratis via WhatsApp
        </a>

        <p className="text-sm text-orange-100 mt-4">
          Respon cepat • Tanpa komitmen • Gratis
        </p>
      </div>
    </section>
  )
}
