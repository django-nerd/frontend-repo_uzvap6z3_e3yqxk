import { Github, Linkedin } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-16 border-t border-blue-100 bg-gradient-to-b from-white to-blue-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {year} Muhammad Dzaki Zahirsyah. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-blue-700 inline-flex items-center gap-2"
            >
              <Linkedin size={18} />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-blue-700 inline-flex items-center gap-2"
            >
              <Github size={18} />
              <span className="text-sm">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
