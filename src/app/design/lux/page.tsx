'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LuxPage() {
  const [rsvpStatus, setRsvpStatus] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    async function checkAccess() {
      try {
        // AICI vei conecta API-ul tău real mai târziu
        const res = await fetch('/api/access?theme=lux')
        const data = await res.json()

        // 🔐 REGULA DE ACCES
        if (!data.is_paid) {
          router.push('/login')
          return
        }

        if (new Date(data.expires_at) < new Date()) {
          router.push('/login')
          return
        }

        setLoading(false)
      } catch (err) {
        router.push('/login')
      }
    }

    checkAccess()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-yellow-400">
        Verificare acces...
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">

      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-yellow-400 mb-6 drop-shadow-lg">
            Lux
          </h1>
          <p className="text-xl md:text-2xl text-yellow-100 leading-relaxed">
            Eleganță supremă pentru ziua cea mai importantă, unde fiecare detaliu strălucește cu lux și rafinament.
          </p>
        </div>
        <div className="absolute inset-0 bg-yellow-100 opacity-10"></div>
      </section>

      {/* Ce Include */}
      <section className="py-16 px-6 bg-black/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-12">
            Ce Include
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="text-center p-6 bg-gray-800 rounded-lg border border-yellow-400/30">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="font-semibold text-yellow-400 mb-2">Invitație Digitală</h3>
              <p className="text-yellow-100">Design premium cu accente aurii</p>
            </div>

            <div className="text-center p-6 bg-gray-800 rounded-lg border border-yellow-400/30">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="font-semibold text-yellow-400 mb-2">RSVP</h3>
              <p className="text-yellow-100">Confirmare prezență elegantă</p>
            </div>

            <div className="text-center p-6 bg-gray-800 rounded-lg border border-yellow-400/30">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="font-semibold text-yellow-400 mb-2">Dashboard Miri</h3>
              <p className="text-yellow-100">Control total asupra evenimentului</p>
            </div>

            <div className="text-center p-6 bg-gray-800 rounded-lg border border-yellow-400/30">
              <div className="text-4xl mb-4">📸</div>
              <h3 className="font-semibold text-yellow-400 mb-2">Galerie Foto cu QR</h3>
              <p className="text-yellow-100">Împărtășiți amintiri prețioase</p>
            </div>

          </div>
        </div>
      </section>

      {/* Buton */}
      <section className="py-12 px-6 text-center">
        <a
          href="/login"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg text-xl transition-all"
        >
          Alege această temă
        </a>
      </section>

      {/* RSVP Demo */}
      <section className="py-16 px-6">
        <div className="max-w-md mx-auto">
          <h3 className="text-xl font-bold text-yellow-400 text-center mb-8">
            RSVP Rapid
          </h3>

          <div className="flex justify-center space-x-4">

            <button onClick={() => setRsvpStatus('Vin')}
              className="px-6 py-3 rounded-lg bg-yellow-100 text-yellow-800">
              ✔ Vin
            </button>

            <button onClick={() => setRsvpStatus('Nu vin')}
              className="px-6 py-3 rounded-lg bg-red-100 text-red-800">
              ❌ Nu vin
            </button>

            <button onClick={() => setRsvpStatus('Nu știu')}
              className="px-6 py-3 rounded-lg bg-yellow-200 text-yellow-900">
              🤍 Nu știu
            </button>

          </div>

          {rsvpStatus && (
            <p className="text-center mt-4 text-yellow-100">
              Răspuns: {rsvpStatus}
            </p>
          )}
        </div>
      </section>

    </div>
  )
}