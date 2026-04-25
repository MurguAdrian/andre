import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL!)

function getSession(request: NextRequest) {
  const sessionCookie = request.cookies.get('vibeinvite_session')?.value
  if (!sessionCookie) return null

  try {
    const session = JSON.parse(sessionCookie)
    if (session.expires < Date.now()) return null
    return session
  } catch {
    return null
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if accessing design pages
  const designMatch = pathname.match(/^\/design\/(nature|lux|boho|royal|minimal|romantic)$/)
  if (designMatch) {
    const theme = designMatch[1]
    const session = getSession(request)

    if (!session) {
      // Redirect to login
      return NextResponse.redirect(new URL('/login', request.url))
    }

    // Check if user has active purchase for this theme
    try {
      const purchase = await sql`
        SELECT id FROM purchases
        WHERE user_id = ${session.userId} AND theme = ${theme} AND status = 'paid' AND expires_at > CURRENT_TIMESTAMP
      `

      if (purchase.length === 0) {
        // Redirect to pricing
        return NextResponse.redirect(new URL('/preturi', request.url))
      }
    } catch (error) {
      console.error('Middleware DB error:', error)
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/design/:path*'
}