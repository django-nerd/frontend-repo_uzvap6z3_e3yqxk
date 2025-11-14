import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Section } from '../components/Sections'
import PortfolioCard from '../components/PortfolioCard'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Section title="Portofolio" subtitle="Kumpulan proyek yang pernah saya kerjakan.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <PortfolioCard
            title="Sistem Informasi Perpustakaan"
            description="Manajemen koleksi & transaksi buku berbasis web."
            image="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop"
            tags={["PHP", "Bootstrap", "MySQL"]}
          />
          <PortfolioCard
            title="Aplikasi Pembayaran Internet"
            description="Pembayaran tagihan dan monitoring jaringan perumahan."
            image="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop"
            tags={["React", "Node.js", "Stripe"]}
          />
          <PortfolioCard
            title="Skripsi/Data Mining"
            description="Eksplorasi pola data dan visualisasi insight."
            image="https://images.unsplash.com/photo-1551281044-8d8d0d8d8d8d?q=80&w=1200&auto=format&fit=crop"
            tags={["Python", "Pandas", "Visualization"]}
          />
        </div>
      </Section>
      <Footer />
    </div>
  )
}
