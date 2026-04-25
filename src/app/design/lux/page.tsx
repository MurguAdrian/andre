// app/design/lux/page.tsx

'use client'

import { useState } from 'react'

export default function LuxPage() {
  const [rsvpStatus, setRsvpStatus] = useState<string | null>(null)

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
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-12">Ce Include</h2>
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

      {/* Buton Principal */}
      <section className="py-12 px-6 text-center">
        <a
          href="/login"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Alege această temă
        </a>
      </section>

      {/* Demo Live Invitație */}
      <section className="py-16 px-6 bg-gray-800/70 backdrop-blur-sm">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-12">Demo live invitație</h2>
          <div className="bg-gradient-to-br from-gray-800 to-black p-8 rounded-2xl shadow-xl border border-yellow-400/30">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">💎</div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">Ana & Mihai</h3>
              <p className="text-yellow-100">Vă invităm să sărbătoriți împreună cu noi</p>
            </div>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-yellow-400">Data:</span>
                <span className="text-yellow-100">15 Iunie 2024</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-yellow-400">Locație:</span>
                <span className="text-yellow-100">Palatul Regal, București</span>
              </div>
            </div>
            <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg transition-colors duration-300">
              Confirmă Prezența
            </button>
          </div>
        </div>
      </section>

      {/* Mini RSVP Demo */}
      <section className="py-16 px-6">
        <div className="max-w-md mx-auto">
          <h3 className="text-xl font-bold text-yellow-400 text-center mb-8">RSVP Rapid</h3>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setRsvpStatus('Vin')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                rsvpStatus === 'Vin'
                  ? 'bg-yellow-500 text-black scale-105'
                  : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
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
            <p className="text-center mt-4 text-yellow-100 font-medium">
              Răspuns înregistrat: {rsvpStatus}
            </p>
          )}
        </div>
      </section>
    </div>
  )
}