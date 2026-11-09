'use client'
import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import { Camera, Photographer } from './Camera'
import { brand, nav, socials, gallery, services, faqs, projects, fallbackReviews, address } from '../lib/data'

const fade = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: .7 } }
const H = ({ a, b }) => (<h2 className="font-display text-4xl md:text-6xl uppercase mb-10">{a} <span className="grad-text">{b}</span></h2>)

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll(); const w = useSpring(scrollYProgress)
  return (<header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-jet/70 border-b border-white/5">
    <motion.div style={{ scaleX: w }} className="h-[3px] origin-left bg-gradient-to-r from-cerulean-glow to-rose" />
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
      <a href="#home" className="font-display text-xl sm:text-2xl tracking-[.2em] sm:tracking-[.25em]">LENS<span className="text-rose">FOLIO</span></a>
      <ul className="hidden md:flex gap-8 font-display uppercase tracking-widest text-sm">
        {nav.map(n => (<li key={n}><a href={`#${n.toLowerCase()}`} className="hover:text-cerulean-glow transition">{n}</a></li>))}</ul>
      <a href="#contact" className="hidden md:block px-5 py-2 rounded-full bg-rose shadow-neon font-display uppercase text-sm tracking-wider hover:scale-105 transition">Book a Shoot</a>
      <button className="md:hidden grid h-11 w-11 place-items-center rounded-full border border-white/10 text-2xl" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>{open ? '✕' : '☰'}</button></nav>
    <AnimatePresence>{open && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="md:hidden overflow-y-auto overscroll-contain bg-jet-800 px-6 pb-5" style={{ maxHeight: 'calc(100dvh - 4.25rem)' }}>
      <ul>{nav.map(n => (<li key={n} className="border-b border-white/5 py-3 font-display uppercase tracking-wider"><a className="block py-1" onClick={() => setOpen(false)} href={`#${n.toLowerCase()}`}>{n}</a></li>))}</ul>
      <a onClick={() => setOpen(false)} href="#contact" className="mt-5 block rounded-full bg-rose px-5 py-3 text-center font-display uppercase tracking-wider">Book a Shoot</a>
    </motion.div>)}</AnimatePresence></header>) }

export function Hero() {
  return (<section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden py-24 md:min-h-screen md:py-16">
    <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-cerulean/30 blur-[140px]" />
    <div className="absolute bottom-0 right-0 w-[460px] h-[460px] rounded-full bg-rose/25 blur-[140px]" />
    <div className="relative max-w-7xl mx-auto px-5 sm:px-6 grid md:grid-cols-2 gap-7 md:gap-10 items-center">
      <div><motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-script text-3xl text-rose-soft">Videographer · Photographer · Storyteller</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9 }} className="font-display text-5xl sm:text-6xl md:text-8xl uppercase leading-none my-4">
          We frame <span className="grad-text">stories</span></motion.h1>
        <p className="text-white/60 max-w-md mb-8">{brand.tagline} Cinematic films for weddings, brands, music and events.</p>
        <div className="flex flex-wrap gap-3 sm:gap-4"><a href="#gallery" className="px-5 sm:px-7 py-3 rounded-full bg-cerulean shadow-blue font-display text-sm sm:text-base uppercase tracking-wider">View Gallery</a>
          <a href="#contact" className="px-5 sm:px-7 py-3 rounded-full border border-rose text-rose font-display text-sm sm:text-base uppercase tracking-wider hover:bg-rose hover:text-white transition">Let's Talk</a></div></div>
      <div className="relative grid place-items-center">
        <motion.div animate={{ y: [0, -14, 0] }} transition={{ repeat: Infinity, duration: 5 }}><Photographer /></motion.div>
        <motion.div animate={{ opacity: [0, 1, 0], scale: [.6, 1.6, .6] }} transition={{ repeat: Infinity, duration: 2.4, repeatDelay: 1 }}
          className="absolute top-[28%] left-[46%] w-16 h-16 rounded-full bg-white blur-xl" />
        <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 1.2 }} className="absolute top-6 right-6 font-display text-rose">● REC</motion.span></div></div></section>) }

export function About() {
  return (<section id="about" className="py-24 md:py-32">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <motion.div {...fade} className="relative">
        <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-cerulean/40 to-rose/30 blur-xl" />
        <img src="https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=85"
          alt="Photographer capturing a celebration" loading="lazy"
          className="relative h-[360px] md:h-[500px] w-full rounded-[2rem] object-cover border border-white/10" />
        <span className="absolute bottom-5 left-5 rounded-full bg-jet/80 px-4 py-2 font-display text-xs uppercase tracking-widest text-cerulean-glow backdrop-blur">Jaipur · India</span>
      </motion.div>
      <motion.div {...fade} transition={{ delay: .15, duration: .7 }}>
        <p className="font-script text-3xl text-rose-soft">A little about us</p>
        <H a="Made of" b="Moments" />
        <p className="text-lg leading-8 text-white/70">We are a small team of photographers and filmmakers who believe the best stories are the ones that feel like you.</p>
        <p className="mt-5 leading-7 text-white/55">From the happy chaos of a birthday to the quiet joy of welcoming a new baby, we capture real people, real connections, and the details you will want to remember. Based in Jaipur, we bring a thoughtful eye, an easygoing approach, and a little cinematic magic to every celebration.</p>
        <a href="#services" className="mt-8 inline-flex rounded-full border border-rose px-6 py-3 font-display text-sm uppercase tracking-widest text-rose transition hover:bg-rose hover:text-white">Explore our services</a>
      </motion.div>
    </div>
  </section>)
}

export function Services() {
  const track = useRef(null)
  const scrollCards = (direction) => {
    if (!track.current) return
    track.current.scrollBy({ left: direction * track.current.clientWidth * .78, behavior: 'smooth' })
  }

  return (<section id="services" className="overflow-hidden py-24 md:py-28">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex items-end justify-between gap-6">
        <div><p className="mb-3 font-script text-3xl text-rose-soft">For every chapter</p><H a="Our" b="Services" /></div>
        <div className="mb-10 hidden gap-3 sm:flex">
          <button type="button" onClick={() => scrollCards(-1)} aria-label="Scroll services left"
            className="grid h-12 w-12 place-items-center rounded-full border border-white/15 text-xl transition hover:border-rose hover:text-rose">←</button>
          <button type="button" onClick={() => scrollCards(1)} aria-label="Scroll services right"
            className="grid h-12 w-12 place-items-center rounded-full border border-white/15 text-xl transition hover:border-rose hover:text-rose">→</button>
        </div>
      </div>
      <div ref={track} className="flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain pb-8 [perspective:1200px] [scrollbar-width:thin]">
        {services.map((service, i) => (<motion.article key={service.title}
          initial={{ opacity: 0, x: 90, rotateY: 16 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: true, amount: .2 }}
          transition={{ duration: .65, delay: (i % 3) * .1 }}
          whileHover={{ y: -8, rotateY: -3, scale: 1.02 }}
          style={{ transformStyle: 'preserve-3d' }}
          className="group relative h-[390px] w-[82vw] max-w-[340px] shrink-0 snap-start overflow-hidden rounded-3xl border border-white/10 bg-jet-800 sm:w-[340px]">
          <img src={service.image} alt={service.alt} loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-jet via-jet/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <span className="font-display text-sm tracking-widest text-cerulean-glow">0{i + 1} / 0{services.length}</span>
            <h3 className="mt-3 font-display text-2xl uppercase tracking-wide">{service.title}</h3>
            <p className="mt-2 text-sm leading-6 text-white/65">{service.description}</p>
            <a href="#contact" className="mt-5 inline-flex items-center gap-2 font-display text-xs uppercase tracking-widest text-rose transition group-hover:gap-3">Plan your shoot <span aria-hidden="true">→</span></a>
          </div>
        </motion.article>))}
      </div>
      <p className="mt-1 text-xs uppercase tracking-widest text-white/35 sm:hidden">Swipe to explore <span aria-hidden="true">→</span></p>
    </div>
  </section>)
}

export function Gallery() {
  const ref = useRef(null)
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const x = useTransform(p, [0, .3], ['-45vw', '0vw'])
  const scale = useTransform(p, [.25, .55], [1, 14])
  const camOp = useTransform(p, [.45, .6], [1, 0])
  const clip = useTransform(p, [.28, .62], ['circle(0% at 50% 50%)', 'circle(80% at 50% 50%)'])
  return (<section id="gallery" className="relative">
    <div ref={ref} className="relative hidden h-[320vh] md:block"><div className="sticky top-0 h-screen overflow-hidden">
    <div className="absolute inset-0 grid place-items-center"><p className="font-display text-5xl md:text-7xl uppercase text-white/10">Home Gallery</p></div>
    <motion.div style={{ x, scale, opacity: camOp }} className="absolute inset-0 grid place-items-center"><Camera size={200} /></motion.div>
    <motion.div style={{ clipPath: clip }} className="absolute inset-0 bg-jet pt-24 pb-6 px-4 md:px-10 flex flex-col">
      <H a="Home" b="Gallery" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 flex-1 min-h-0">
        {gallery.map((item) => (<motion.div key={item.title} whileHover={{ scale: 1.03 }} className="relative rounded-2xl overflow-hidden border border-white/10 bg-jet-800">
          {item.type === 'video'
            ? <video src={item.src} poster={item.poster} aria-label={item.alt} controls muted playsInline preload="metadata" className="absolute inset-0 w-full h-full object-cover" />
            : <img src={item.src} alt={item.alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/75 via-transparent to-black/20" />
          <span className="pointer-events-none absolute bottom-3 left-4 font-display uppercase tracking-widest text-sm">{item.title}</span>
          <span className="pointer-events-none absolute top-3 right-3 rounded-full bg-black/50 px-3 py-1 text-[10px] uppercase tracking-widest">{item.type}</span>
        </motion.div>))}</div></motion.div></div></div>
    <div className="py-16 md:hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <H a="Home" b="Gallery" />
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {gallery.map((item) => (<div key={item.title} className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-jet-800">
            {item.type === 'video'
              ? <video src={item.src} poster={item.poster} aria-label={item.alt} controls muted playsInline preload="none" className="absolute inset-0 h-full w-full object-cover" />
              : <img src={item.src} alt={item.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />
            <span className="pointer-events-none absolute bottom-2 left-2 right-2 font-display text-[10px] uppercase tracking-wider sm:bottom-3 sm:left-3 sm:text-xs">{item.title}</span>
            <span className="pointer-events-none absolute right-2 top-2 rounded-full bg-black/50 px-2 py-1 text-[9px] uppercase tracking-widest">{item.type}</span>
          </div>))}
        </div>
      </div>
    </div>
  </section>) }

export function Projects() {
  return (<section id="projects" className="py-28 max-w-7xl mx-auto px-6"><H a="Our" b="Projects" />
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {projects.map((p, i) => (<motion.div key={p.t} {...fade} transition={{ delay: i * .1, duration: .6 }} whileHover={{ y: -8 }}
        className="group p-7 rounded-3xl bg-jet-800 border border-white/5 hover:border-rose/60 hover:shadow-neon transition">
        <p className="font-display text-5xl text-cerulean-glow/40 group-hover:text-rose transition">0{i + 1}</p>
        <h3 className="font-display uppercase text-xl mt-6 mb-2">{p.t}</h3><p className="text-white/55 text-sm mb-5">{p.d}</p>
        <span className="text-xs tracking-widest text-cerulean-glow uppercase">{p.k}</span></motion.div>))}</div></section>) }

export function FAQ() {
  return (<section id="faq" className="bg-jet-800 py-24 md:py-28">
    <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[.8fr_1.2fr]">
      <div><p className="mb-3 font-script text-3xl text-rose-soft">Good to know</p><H a="Questions &" b="Answers" />
        <p className="max-w-sm leading-7 text-white/55">Have something else in mind? <a href="#contact" className="text-cerulean-glow underline underline-offset-4 hover:text-rose">Ask us directly.</a></p></div>
      <div className="space-y-3">
        {faqs.map((item, i) => (<motion.details key={item.question} {...fade} transition={{ delay: i * .06, duration: .5 }}
          className="group rounded-2xl border border-white/10 bg-jet px-5 py-5 open:border-rose/50 md:px-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-display text-base uppercase tracking-wide marker:hidden md:text-lg">
            {item.question}
            <span aria-hidden="true" className="text-2xl leading-none text-rose transition group-open:rotate-45">+</span>
          </summary>
          <p className="max-w-2xl pt-4 text-sm leading-7 text-white/60">{item.answer}</p>
        </motion.details>))}
      </div>
    </div>
  </section>)
}

export function Reviews() {
  const [d, setD] = useState({ live: false, reviews: fallbackReviews })
  useEffect(() => { fetch('/api/reviews').then(r => r.json()).then(j => j.reviews?.length && setD(j)).catch(() => {}) }, [])
  return (<section id="reviews" className="py-28 bg-jet-800"><div className="max-w-7xl mx-auto px-6"><H a="Client" b="Reviews" />
    {d.live && (<p className="mb-8 text-white/60"><span className="text-rose text-2xl font-display">{d.rating} ★</span> from {d.total} Google reviews · <span className="text-cerulean-glow">Live</span></p>)}
    <div className="grid md:grid-cols-3 gap-6">{d.reviews.slice(0, 6).map((r, i) => (<motion.div key={i} {...fade} transition={{ delay: i * .1, duration: .6 }}
      className="p-7 rounded-3xl bg-jet border border-white/5"><p className="text-rose tracking-widest mb-3">{'★'.repeat(r.rating || 5)}</p>
      <p className="text-white/75 mb-5">“{r.text}”</p><p className="font-display uppercase tracking-wider text-cerulean-glow">{r.name}</p></motion.div>))}</div></div></section>) }

export function Contact() {
  const [s, setS] = useState('idle')
  async function send(e) {
    e.preventDefault(); setS('sending')
    const b = Object.fromEntries(new FormData(e.target))
    const r = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(b) })
    setS(r.ok ? 'done' : 'error'); if (r.ok) e.target.reset() }
  const lines = ['SCENE 01 · TAKE 1', 'Lights. Camera.', 'Tell us your story…']
  const inp = 'w-full bg-jet/60 border border-white/10 focus:border-rose outline-none rounded-xl px-4 py-3'
  return (<section id="contact" className="py-28 max-w-7xl mx-auto px-6"><H a="Contact" b="Us" />
    <div className="grid lg:grid-cols-2 gap-10">
      <div className="space-y-6">
        <iframe title="map" className="w-full h-64 rounded-3xl border border-white/10 grayscale invert-[.92] hue-rotate-180" loading="lazy"
          src={`https://maps.google.com/maps?q=${encodeURIComponent(address.map)}&output=embed`} />
        <div className="p-6 rounded-3xl bg-jet-800 border border-white/5 space-y-2"><h3 className="font-display uppercase text-cerulean-glow tracking-widest">Studio Address</h3>
          <p>{address.line}</p><p>{address.phone}</p><p>{address.email}</p></div></div>
      <motion.div {...fade} className="relative p-8 md:p-10 rounded-3xl bg-jet-800 border border-white/10 overflow-hidden">
        {['top-3 left-3 border-t-2 border-l-2', 'top-3 right-3 border-t-2 border-r-2', 'bottom-3 left-3 border-b-2 border-l-2', 'bottom-3 right-3 border-b-2 border-r-2'].map(c => (<span key={c} className={`absolute w-8 h-8 border-rose ${c}`} />))}
        <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 1.2 }} className="absolute top-5 right-14 text-rose font-display text-sm">● REC</motion.span>
        <div className="font-script text-3xl mb-6 min-h-[96px]">{lines.map((l, i) => (<motion.p key={l} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * .6 }}
          className={i === 0 ? 'text-cerulean-glow text-xl font-display tracking-widest' : 'text-rose-soft'}>{l}</motion.p>))}</div>
        <form onSubmit={send} className="space-y-4"><input name="name" required placeholder="Your name" className={inp} />
          <input name="email" type="email" required placeholder="Email" className={inp} /><input name="phone" placeholder="Phone (optional)" className={inp} />
          <select name="type" className={inp}><option>Wedding Film</option><option>Brand Video</option><option>Music Video</option><option>Event / Drone</option></select>
          <textarea name="message" required rows={4} placeholder="Project details" className={inp} />
          <button disabled={s === 'sending'} className="w-full py-3 rounded-full bg-gradient-to-r from-cerulean to-rose shadow-neon font-display uppercase tracking-widest hover:scale-[1.02] transition">
            {s === 'sending' ? 'Sending…' : s === 'done' ? 'Sent ✓ We will call you' : 'Action! Send Enquiry'}</button>
          {s === 'error' && <p className="text-rose text-sm">Something went wrong, try again.</p>}</form></motion.div></div></section>) }

function SocialIcon({ name }) {
  const common = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'currentColor', 'aria-hidden': true }
  if (name === 'instagram') return <svg {...common}><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="18" cy="6" r="1.25" /></svg>
  if (name === 'facebook') return <svg {...common}><path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8h3.4Z" /></svg>
  if (name === 'youtube') return <svg {...common}><path d="M23 7.1a3 3 0 0 0-2.1-2.1C19 4.5 12 4.5 12 4.5s-7 0-8.9.5A3 3 0 0 0 1 7.1 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.9A3 3 0 0 0 3.1 19c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.9 31 31 0 0 0-.5-4.9ZM9.8 15.2V8.8l5.5 3.2-5.5 3.2Z" /></svg>
  if (name === 'tiktok') return <svg {...common}><path d="M19.6 7.1a5.7 5.7 0 0 1-3.5-1.2v8.2a5.7 5.7 0 1 1-5.7-5.7c.4 0 .8 0 1.1.1v3.2a2.6 2.6 0 1 0 1.5 2.4V2.5h3.1a5.7 5.7 0 0 0 3.5 3.7v.9Z" /></svg>
  return <svg {...common}><path d="M5.2 8.5a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6ZM3.6 10h3.2v10H3.6V10Zm5.2 0h3.1v1.4h.1a3.4 3.4 0 0 1 3.1-1.7c3.3 0 3.9 2.2 3.9 5V20h-3.2v-4.7c0-1.1 0-2.6-1.6-2.6s-1.9 1.2-1.9 2.5V20H8.8V10Z" /></svg>
}

export function Footer() {
  const [subscribeMessage, setSubscribeMessage] = useState('')

  function subscribe(e) {
    e.preventDefault()
    const email = new FormData(e.currentTarget).get('email')
    const subject = encodeURIComponent('Lensfolio newsletter signup')
    const body = encodeURIComponent(`Please add ${email} to the Lensfolio mailing list.`)
    window.location.href = `mailto:${address.email}?subject=${subject}&body=${body}`
    setSubscribeMessage('Your email app will open. Send the message to finish signing up.')
    e.currentTarget.reset()
  }

  return (<footer className="border-t border-white/10 bg-jet-800/50">
    <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <a href="#home" className="inline-block font-display text-2xl tracking-[.25em] text-white">LENS<span className="text-rose">FOLIO</span></a>
        <p className="mt-4 max-w-xs text-sm leading-6 text-white/55">{brand.tagline} Cinematic films and photographs made to last.</p>
        <a href={`mailto:${address.email}`} className="mt-4 inline-block text-sm text-cerulean-glow hover:text-rose transition">{address.email}</a>
      </div>
      <div>
        <h2 className="font-display text-sm uppercase tracking-widest text-white">Explore</h2>
        <ul className="mt-4 space-y-3 text-sm text-white/55">
          {nav.map((item) => <li key={item}><a href={`#${item.toLowerCase()}`} className="hover:text-cerulean-glow transition">{item}</a></li>)}
        </ul>
      </div>
      <div>
        <h2 className="font-display text-sm uppercase tracking-widest text-white">Stay in the frame</h2>
        <p className="mt-4 text-sm leading-6 text-white/55">Get studio news, recent stories, and occasional inspiration in your inbox.</p>
        <form onSubmit={subscribe} className="mt-4 flex gap-2">
          <label htmlFor="footer-email" className="sr-only">Your email address</label>
          <input id="footer-email" name="email" type="email" required placeholder="Your email address"
            className="min-w-0 flex-1 rounded-full border border-white/10 bg-jet px-4 py-3 text-sm text-white outline-none focus:border-rose" />
          <button type="submit" className="rounded-full bg-rose px-5 py-3 font-display text-xs uppercase tracking-wider text-white transition hover:scale-105">Subscribe</button>
        </form>
        <p aria-live="polite" className="mt-2 min-h-5 text-xs text-cerulean-glow">{subscribeMessage}</p>
      </div>
      <div>
        <h2 className="font-display text-sm uppercase tracking-widest text-white">Follow the story</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {socials.map((social) => <a key={social.name} href={social.href} target="_blank" rel="noreferrer"
            aria-label={social.name} title={social.name}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-white/65 transition hover:border-rose hover:text-rose">
            <SocialIcon name={social.icon} />
          </a>)}
        </div>
      </div>
    </div>
    <div className="border-t border-white/5 px-6 py-5 text-center text-xs tracking-wider text-white/35">
      © {new Date().getFullYear()} {brand.name} · Crafted with care.
    </div>
  </footer>)
}
