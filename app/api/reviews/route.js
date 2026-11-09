// LIVE REVIEWS: Google Places API (New). Needs GOOGLE_PLACES_KEY + GOOGLE_PLACE_ID in .env.local
export const revalidate = 3600
export async function GET() {
  const { GOOGLE_PLACES_KEY: key, GOOGLE_PLACE_ID: id } = process.env
  if (!key || !id) return Response.json({ live: false, reviews: [] })
  try {
    const r = await fetch(`https://places.googleapis.com/v1/places/${id}`, {
      headers: { 'X-Goog-Api-Key': key, 'X-Goog-FieldMask': 'rating,userRatingCount,reviews' }, next: { revalidate: 3600 } })
    const j = await r.json()
    const reviews = (j.reviews || []).map(v => ({ name: v.authorAttribution?.displayName, rating: v.rating, text: v.text?.text || '' }))
    return Response.json({ live: true, rating: j.rating, total: j.userRatingCount, reviews })
  } catch { return Response.json({ live: false, reviews: [] }) } }
