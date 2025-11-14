import { motion } from 'framer-motion'

export function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        {title && (
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
            {subtitle && <p className="mt-2 text-gray-600 max-w-2xl">{subtitle}</p>}
          </div>
        )}
        {children}
      </motion.div>
    </section>
  )
}

export function SkillBadge({ label }) {
  return (
    <span className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 text-xs font-medium">
      {label}
    </span>
  )
}
