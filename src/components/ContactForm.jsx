import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      // In this demo, we just simulate success
      await new Promise((r) => setTimeout(r, 600))
      setStatus({ type: 'success', message: 'Terima kasih! Pesan Anda telah terkirim.' })
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus({ type: 'error', message: 'Terjadi kesalahan. Coba lagi nanti.' })
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 max-w-xl">
      <div>
        <label className="block text-sm font-medium text-gray-700">Nama</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={onChange}
          required
          className="mt-1 w-full rounded-md border border-blue-200 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Nama lengkap"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={onChange}
          required
          className="mt-1 w-full rounded-md border border-blue-200 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="email@contoh.com"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Pesan</label>
        <textarea
          name="message"
          value={form.message}
          onChange={onChange}
          rows={5}
          required
          className="mt-1 w-full rounded-md border border-blue-200 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Tulis pesan Anda..."
        />
      </div>
      <div className="flex items-center gap-3">
        <button
          type="submit"
          className="inline-flex items-center rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
        >
          Kirim Pesan
        </button>
        {status && (
          <p className={`text-sm ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>{status.message}</p>
        )}
      </div>
    </form>
  )
}
