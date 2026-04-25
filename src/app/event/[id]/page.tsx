'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'

interface Event {
  id: number
  theme: string
  bride_name: string
  groom_name: string
  event_date: string
  location: string
}

export default function EventPage() {
  const params = useParams()
  const eventId = params.id as string
  const [event, setEvent] = useState<Event | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const router = useRouter()

  useEffect(() => {
    fetchEvent()
  }, [eventId])

  const fetchEvent = async () => {
    try {
      const response = await fetch(`/api/event/${eventId}`)
      if (response.ok) {
        const data = await response.json()
        setEvent(data.event)
      } else {
        router.push('/login')
      }
    } catch (error) {
      console.error('Error fetching event:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async () => {
    if (!event) return

    setSaving(true)
    try {
      const response = await fetch('/api/event/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          eventId: event.id,
          brideName: event.bride_name,
          groomName: event.groom_name,
          eventDate: event.event_date,
          location: event.location
        })
      })

      if (response.ok) {
        alert('Eveniment salvat cu succes!')
      } else {
        alert('Eroare la salvare')
      }
    } catch (error) {
      alert('Eroare de rețea')
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Se încarcă...</div>
  }

  if (!event) {
    return <div className="min-h-screen flex items-center justify-center">Eveniment negăsit</div>
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Editează Evenimentul</h1>

        <div className="bg-white rounded-lg shadow p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Nume Mireasă</label>
            <input
              type="text"
              value={event.bride_name}
              onChange={(e) => setEvent({ ...event, bride_name: e.target.value })}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Nume Mire</label>
            <input
              type="text"
              value={event.groom_name}
              onChange={(e) => setEvent({ ...event, groom_name: e.target.value })}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Data Evenimentului</label>
            <input
              type="date"
              value={event.event_date}
              onChange={(e) => setEvent({ ...event, event_date: e.target.value })}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Locație</label>
            <input
              type="text"
              value={event.location}
              onChange={(e) => setEvent({ ...event, location: e.target.value })}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          <button
            onClick={handleSave}
            disabled={saving}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {saving ? 'Se salvează...' : 'Salvează'}
          </button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Link invitație: {window.location.origin}/invite/{event.id}
          </p>
        </div>
      </div>
    </div>
  )
}