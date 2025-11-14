import { motion } from 'framer-motion'

export default function PortfolioCard({ title, description, image, tags = [] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="rounded-xl border border-blue-100 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden"
    >
      <div className="aspect-video bg-blue-50 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-600">{description}</p>
        {tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className="text-xs px-2 py-1 rounded bg-blue-50 text-blue-700 border border-blue-200">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
