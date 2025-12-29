import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Sablon Cup Plastik Trenggalek & Tulungagung | PT Bakti Karya Teknik",
    template: "%s | PT Bakti Karya Teknik",
  },
  description:
    "Jasa sablon cup plastik Trenggalek & Tulungagung. Cocok untuk kopi, es teh, jus, dan UMKM minuman. Desain custom, hasil rapi, harga bersahabat.",
  keywords: [
    "sablon cup trenggalek",
    "sablon cup tulungagung",
    "cetak gelas plastik",
    "sablon cup kopi",
    "sablon cup UMKM",
  ],
  metadataBase: new URL("https://ptbaktikaryateknik.netlify.app"),
  openGraph: {
    title: "Sablon Cup Plastik Trenggalek & Tulungagung",
    description:
      "Spesialis sablon cup plastik untuk brand kopi & minuman lokal.",
    url: "https://ptbaktikaryateknik.netlify.app",
    siteName: "PT Bakti Karya Teknik",
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: "/bakat-logo-potrait.png",
    shortcut: "/bakat-logo-potrait.png",
    apple: "/bakat-logo-potrait.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
