// app/design/romantic/page.tsx

'use client'

import { useState } from 'react'

export default function RomanticPage() {
  const [rsvpStatus, setRsvpStatus] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-rose-600 mb-6">
            Romantic
          </h1>
          <p className="text-xl md:text-2xl text-rose-700 leading-relaxed">
            O poveste de iubire scrisă cu litere de foc, unde fiecare moment pulsează cu pasiune și tandrețe.
          </p>
        </div>
        <div className="absolute inset-0 bg-pink-100 opacity-20"></div>
      </section>

      {/* Ce Include */}
      <section className="py-16 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-rose-600 text-center mb-12">Ce Include</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-rose-50 rounded-lg border border-rose-200">
              <div className="text-4xl mb-4">💕</div>
              <h3 className="font-semibold text-rose-600 mb-2">Invitație Digitală</h3>
              <p className="text-rose-600">Design romantic cu accente roze</p>
            </div>
            <div className="text-center p-6 bg-rose-50 rounded-lg border border-rose-200">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="font-semibold text-rose-600 mb-2">RSVP</h3>
              <p className="text-rose-600">Confirmare prezență emoțională</p>
            </div>
            <div className="text-center p-6 bg-rose-50 rounded-lg border border-rose-200">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="font-semibold text-rose-600 mb-2">Dashboard Miri</h3>
              <p className="text-rose-600">Gestionați iubirea voastră</p>
            </div>
            <div className="text-center p-6 bg-rose-50 rounded-lg border border-rose-200">
              <div className="text-4xl mb-4">📸</div>
              <h3 className="font-semibold text-rose-600 mb-2">Galerie Foto cu QR</h3>
              <p className="text-rose-600">Împărtășiți amintiri romantice</p>
            </div>
          </div>
        </div>
      </section>

      {/* Buton Principal */}
      <section className="py-12 px-6 text-center">
        <a
          href="/login"
          className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Alege această temă
        </a>
      </section>

      {/* Demo Live Invitație */}
      <section className="py-16 px-6 bg-white/70 backdrop-blur-sm">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-rose-600 text-center mb-12">Demo live invitație</h2>
          <div className="bg-gradient-to-br from-rose-100 to-pink-200 p-8 rounded-2xl shadow-xl border border-rose-300">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">💕</div>
              <h3 className="text-2xl font-bold text-rose-600 mb-2">Ana & Mihai</h3>
              <p className="text-rose-700">Vă invităm să sărbătoriți împreună cu noi</p>
            </div>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-rose-600">Data:</span>
                <span className="text-rose-700">15 Iunie 2024</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-rose-600">Locație:</span>
                <span className="text-rose-700">Grădina Romantică, București</span>
              </div>
            </div>
            <button className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
              Confirmă Prezența
            </button>
          </div>
        </div>
      </section>

      {/* Mini RSVP Demo */}
      <section className="py-16 px-6">
        <div className="max-w-md mx-auto">
          <h3 className="text-xl font-bold text-rose-600 text-center mb-8">RSVP Rapid</h3>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setRsvpStatus('Vin')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                rsvpStatus === 'Vin'
                  ? 'bg-rose-500 text-white scale-105'
                  : 'bg-rose-100 text-rose-800 hover:bg-rose-200'
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
            <p className="text-center mt-4 text-rose-700 font-medium">
              Răspuns înregistrat: {rsvpStatus}
            </p>
          )}
        </div>
      </section>
    </div>
  )
}