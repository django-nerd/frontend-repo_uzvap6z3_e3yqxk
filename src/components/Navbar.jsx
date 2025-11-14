import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Beranda' },
  { to: '/about', label: 'Tentang Saya' },
  { to: '/portfolio', label: 'Portofolio' },
  { to: '/certifications', label: 'Sertifikasi' },
  { to: '/contact', label: 'Kontak' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-blue-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 text-white grid place-items-center font-bold">M</div>
            <div className="leading-tight">
              <p className="text-sm text-blue-600">Muhammad Dzaki</p>
              <p className="text-xs text-gray-500">Zahirsyah</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="ml-2 inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
            >
              Hubungi Saya
            </Link>
          </nav>

          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-blue-50"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 animate-in">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'}`}
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-md text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700"
              >
                Hubungi Saya
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
