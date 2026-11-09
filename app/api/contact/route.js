// Plug Firebase / Supabase / Nodemailer / your Node admin API here.
export async function POST(req) {
  const b = await req.json()
  if (!b.name || !b.email || !b.message) return Response.json({ ok: false }, { status: 400 })
  console.log('NEW ENQUIRY', b)
  return Response.json({ ok: true }) }
