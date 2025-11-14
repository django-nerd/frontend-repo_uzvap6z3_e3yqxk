import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Section } from '../components/Sections'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Section title="Kontak" subtitle="Saya terbuka untuk peluang kerja, kolaborasi, dan diskusi proyek.">
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
