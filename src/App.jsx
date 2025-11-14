import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import { Section, SkillBadge } from './components/Sections'
import PortfolioCard from './components/PortfolioCard'
import ContactForm from './components/ContactForm'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />

      <Section id="about" title="Tentang Saya" subtitle="Pendidikan, pengalaman, keahlian, dan pencapaian singkat.">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Ringkasan</h3>
            <p className="text-gray-600">
              Saya lulusan Teknologi Informasi dengan pengalaman di IT Support dan pengembangan sistem. Terbiasa membangun aplikasi web, mengelola basis data, dan melakukan analisis data untuk mendukung pengambilan keputusan.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {['React', 'Bootstrap', 'MySQL', 'Web Development', 'Data Analysis', 'Git'].map((s) => (
                <SkillBadge key={s} label={s} />
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <div className="rounded-xl border border-blue-100 p-4">
              <h4 className="font-semibold text-gray-900">Pendidikan</h4>
              <p className="text-sm text-gray-600 mt-1">S1 Teknologi Informasi</p>
            </div>
            <div className="rounded-xl border border-blue-100 p-4">
              <h4 className="font-semibold text-gray-900">Pengalaman</h4>
              <ul className="text-sm text-gray-600 mt-1 list-disc ml-5 space-y-1">
                <li>IT Support: troubleshooting, network, dan maintenance</li>
                <li>Pengembangan sistem: aplikasi web internal/eksternal</li>
              </ul>
            </div>
            <div className="rounded-xl border border-blue-100 p-4">
              <h4 className="font-semibold text-gray-900">Pencapaian</h4>
              <ul className="text-sm text-gray-600 mt-1 list-disc ml-5 space-y-1">
                <li>Membangun sistem informasi perpustakaan berbasis web</li>
                <li>Mengembangkan aplikasi pembayaran internet perumahan</li>
                <li>Proyek skripsi dengan topik data mining</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section id="portfolio" title="Portofolio" subtitle="Beberapa proyek yang pernah dikerjakan.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <PortfolioCard
            title="Sistem Informasi Perpustakaan"
            description="Aplikasi web untuk manajemen koleksi, peminjaman, dan pengembalian buku."
            image="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop"
            tags={["PHP", "Bootstrap", "MySQL"]}
          />
          <PortfolioCard
            title="Aplikasi Pembayaran Internet"
            description="Sistem pembayaran tagihan internet perumahan dengan dashboard dan riwayat transaksi."
            image="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop"
            tags={["React", "Node.js", "Stripe"]}
          />
          <PortfolioCard
            title="Proyek Data Mining (Skripsi)"
            description="Analisis data untuk menemukan pola dan insight menggunakan teknik data mining."
            image="https://images.unsplash.com/photo-1551281044-8d8d0d8d8d8d?q=80&w=1200&auto=format&fit=crop"
            tags={["Python", "Pandas", "Visualization"]}
          />
        </div>
      </Section>

      <Section id="certifications" title="Sertifikasi & Pelatihan" subtitle="Kredensial dan pelatihan relevan.">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-blue-100 p-4">
            <h4 className="font-semibold text-gray-900">Netacad</h4>
            <p className="text-sm text-gray-600">Sertifikat dari Cisco Networking Academy</p>
          </div>
          <div className="rounded-xl border border-blue-100 p-4">
            <h4 className="font-semibold text-gray-900">Pelatihan IT</h4>
            <p className="text-sm text-gray-600">Pelatihan teknis terkait dukungan IT & jaringan</p>
          </div>
        </div>
      </Section>

      <Section id="contact" title="Kontak" subtitle="Tertarik berkolaborasi? Kirim pesan atau hubungi saya melalui platform berikut.">
        <div className="grid md:grid-cols-2 gap-8">
          <ContactForm />
          <div className="space-y-4">
            <div className="rounded-xl border border-blue-100 p-4">
              <h4 className="font-semibold text-gray-900">Email</h4>
              <p className="text-sm text-gray-600">dzaki@example.com</p>
            </div>
            <div className="rounded-xl border border-blue-100 p-4">
              <h4 className="font-semibold text-gray-900">LinkedIn</h4>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-sm text-blue-700 hover:underline">linkedin.com/in/dzaki</a>
            </div>
            <div className="rounded-xl border border-blue-100 p-4">
              <h4 className="font-semibold text-gray-900">GitHub</h4>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-sm text-blue-700 hover:underline">github.com/dzaki</a>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  )
}

export default App
