import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-white" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-blue-700 bg-blue-50 border border-blue-100 rounded-full px-3 py-1">
              IT Graduate • Web Developer • Data Enthusiast
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
              Muhammad Dzaki Zahirsyah
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Lulusan Teknologi Informasi dengan pengalaman di IT Support dan pengembangan sistem. Passion dalam membangun aplikasi web modern, scalable, dan mudah digunakan.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Link to="/portfolio" className="inline-flex items-center rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors">
                Lihat Portofolio
              </Link>
              <Link to="/contact" className="inline-flex items-center rounded-md border border-blue-200 px-5 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-50 transition-colors">
                Hubungi Saya
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <div className="rounded-2xl p-1 bg-gradient-to-br from-blue-500 to-blue-700 w-fit mx-auto shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1200&auto=format&fit=crop"
                alt="Profile"
                className="h-72 w-72 object-cover rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow p-4 border border-blue-100">
              <p className="text-sm font-semibold text-blue-700">React • Bootstrap • MySQL</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
