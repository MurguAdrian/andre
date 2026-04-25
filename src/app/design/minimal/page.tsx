// app/design/minimal/page.tsx

'use client'

import { useState } from 'react'

export default function MinimalPage() {
  const [rsvpStatus, setRsvpStatus] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Minimal
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Simplitatea perfectă pentru iubirea voastră autentică, unde esențialul strălucește în toată puritatea sa.
          </p>
        </div>
        <div className="absolute inset-0 bg-gray-100 opacity-20"></div>
      </section>

      {/* Ce Include */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Ce Include</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="font-semibold text-gray-900 mb-2">Invitație Digitală</h3>
              <p className="text-gray-600">Design minimalist și curat</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="font-semibold text-gray-900 mb-2">RSVP</h3>
              <p className="text-gray-600">Confirmare prezență simplă</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="font-semibold text-gray-900 mb-2">Dashboard Miri</h3>
              <p className="text-gray-600">Gestionați totul eficient</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="text-4xl mb-4">📸</div>
              <h3 className="font-semibold text-gray-900 mb-2">Galerie Foto cu QR</h3>
              <p className="text-gray-600">Împărtășiți amintiri esențiale</p>
            </div>
          </div>
        </div>
      </section>

      {/* Buton Principal */}
      <section className="py-12 px-6 text-center">
        <a
          href="/login"
          className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Alege această temă
        </a>
      </section>

      {/* Demo Live Invitație */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Demo live invitație</h2>
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">✨</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Ana & Mihai</h3>
              <p className="text-gray-600">Vă invităm să sărbătoriți împreună cu noi</p>
            </div>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-900">Data:</span>
                <span className="text-gray-600">15 Iunie 2024</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-900">Locație:</span>
                <span className="text-gray-600">Sala Modernă, București</span>
              </div>
            </div>
            <button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
              Confirmă Prezența
            </button>
          </div>
        </div>
      </section>

      {/* Mini RSVP Demo */}
      <section className="py-16 px-6">
        <div className="max-w-md mx-auto">
          <h3 className="text-xl font-bold text-gray-900 text-center mb-8">RSVP Rapid</h3>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setRsvpStatus('Vin')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                rsvpStatus === 'Vin'
                  ? 'bg-gray-900 text-white scale-105'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              ✔ Vin
            </button>
            <button
              onClick={() => setRsvpStatus('Nu vin')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                rsvpStatus === 'Nu vin'
                  ? 'bg-red-600 text-white scale-105'
                  : 'bg-red-100 text-red-800 hover:bg-red-200'
              }`}
            >
              ❌ Nu vin
            </button>
            <button
              onClick={() => setRsvpStatus('Nu știu încă')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                rsvpStatus === 'Nu știu încă'
                  ? 'bg-yellow-600 text-white scale-105'
                  : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
              }`}
            >
              🤍 Nu știu încă
            </button>
          </div>
          {rsvpStatus && (
            <p className="text-center mt-4 text-gray-600 font-medium">
              Răspuns înregistrat: {rsvpStatus}
            </p>
          )}
        </div>
      </section>
    </div>
  )
}