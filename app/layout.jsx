import './globals.css'
import { Oswald, Caveat } from 'next/font/google'
const display = Oswald({ subsets: ['latin'], variable: '--font-display' })
const script = Caveat({ subsets: ['latin'], variable: '--font-script' })
export const metadata = {
  title: 'Lensfolio | Videographer & Cinematic Storyteller',
  description: 'Wedding films, brand videos, music videos and events. View our gallery, projects, live Google reviews and book a shoot.',
  openGraph: { title: 'Lensfolio Studio', type: 'website' } }
const ld = { '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'Lensfolio Studio',
  description: 'Videography and photography studio', address: { '@type': 'PostalAddress', addressLocality: 'Jaipur', addressCountry: 'IN' } }
export default function RootLayout({ children }) {
  return (<html lang="en"><body className={`${display.variable} ${script.variable} grain`}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    {children}</body></html>) }
