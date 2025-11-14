import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Section, SkillBadge } from '../components/Sections'

export default function About() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Section title="Tentang Saya" subtitle="Profil ringkas, pendidikan, pengalaman, dan keahlian.">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            <p className="text-gray-700">
              Saya Muhammad Dzaki Zahirsyah, lulusan Teknologi Informasi dengan minat kuat di pengembangan web dan analisis data. Saya memiliki pengalaman sebagai IT Support serta terlibat dalam pengembangan sistem yang membantu operasional.
            </p>
            <div>
              <h3 className="font-semibold text-gray-900">Pendidikan</h3>
              <p className="text-sm text-gray-600">S1 Teknologi Informasi</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Pengalaman</h3>
              <ul className="text-sm text-gray-600 mt-1 list-disc ml-5 space-y-1">
                <li>IT Support: instalasi, konfigurasi, dan troubleshooting perangkat</li>
                <li>Pengembangan sistem web internal untuk manajemen data</li>
              </ul>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900">Keahlian</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Bootstrap', 'MySQL', 'Web Development', 'Data Analysis', 'REST API'].map((s) => (
                <SkillBadge key={s} label={s} />
              ))}
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  )
}
