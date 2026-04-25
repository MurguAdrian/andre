'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })

      const data = await response.json()

      if (response.ok) {
        router.push('/preturi')
      } else {
        setError(data.error || 'Login failed')
      }
    } catch (err) {
      setError('Network error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-[calc(100vh-160px)] items-center justify-center px-6 py-16 lg:px-8">
      <div className="w-full max-w-xl rounded-[32px] border border-sand/80 bg-white/95 p-10 shadow-soft">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.26em] text-gold">Login</p>
          <h1 className="section-title text-4xl font-semibold text-charcoal">Accesează contul VibeInvite</h1>
          <p className="text-sm leading-7 text-charcoal/75">
            Introdu adresa de email pentru a accesa platforma VibeInvite.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-charcoal/80">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="exemplu@vibeinvite.ro"
              className="w-full rounded-full border border-sand/70 bg-cream px-5 py-3 text-charcoal outline-none transition focus:border-gold/80"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="inline-flex w-full items-center justify-center rounded-full bg-charcoal px-6 py-3 text-sm font-semibold text-white hover:bg-charcoal/90 disabled:opacity-50"
          >
            {loading ? 'Se conectează...' : 'Autentificare'}
          </button>
        </form>

        {error && (
          <div className="mt-4 rounded-[28px] border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {error}
          </div>
        )}
      </div>
    </div>
  )
}
