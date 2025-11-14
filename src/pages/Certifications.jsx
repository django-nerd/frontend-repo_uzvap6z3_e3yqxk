import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Section } from '../components/Sections'

export default function Certifications() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Section title="Sertifikasi & Pelatihan" subtitle="Kredensial yang relevan untuk mendukung kompetensi profesional.">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-blue-100 p-4">
            <h4 className="font-semibold text-gray-900">Cisco Networking Academy (Netacad)</h4>
            <p className="text-sm text-gray-600">Pengantar Jaringan dan Keamanan Dasar</p>
          </div>
          <div className="rounded-xl border border-blue-100 p-4">
            <h4 className="font-semibold text-gray-900">Pelatihan IT Support</h4>
            <p className="text-sm text-gray-600">Troubleshooting hardware, software, dan jaringan</p>
          </div>
          <div className="rounded-xl border border-blue-100 p-4">
            <h4 className="font-semibold text-gray-900">Kursus Web Development</h4>
            <p className="text-sm text-gray-600">Front-end (React, Bootstrap) & dasar Back-end</p>
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  )
}
