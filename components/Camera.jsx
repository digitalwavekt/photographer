export function Camera({ size = 180 }) {
  return (<svg width={size} height={size} viewBox="0 0 120 100" fill="none">
    <rect x="8" y="26" width="104" height="64" rx="12" fill="#121216" stroke="#2CB5E8" strokeWidth="2.5" />
    <rect x="40" y="14" width="30" height="14" rx="4" fill="#121216" stroke="#2CB5E8" strokeWidth="2.5" />
    <circle cx="60" cy="58" r="24" fill="#0A0A0C" stroke="#FF2E88" strokeWidth="3" />
    <circle cx="60" cy="58" r="14" fill="#007BA7" opacity=".7" /><circle cx="54" cy="52" r="4" fill="#fff" opacity=".7" />
    <circle cx="98" cy="38" r="4" fill="#FF2E88" /></svg>) }
export function Photographer() {
  return (<svg viewBox="0 0 220 260" className="w-full max-w-[380px]" fill="none">
    <circle cx="110" cy="52" r="26" fill="#1B1B21" stroke="#2CB5E8" strokeWidth="2" />
    <path d="M60 240c0-70 20-130 50-130s50 60 50 130z" fill="#121216" stroke="#2CB5E8" strokeWidth="2" />
    <path d="M70 140l40-20M150 140l-40-20" stroke="#2CB5E8" strokeWidth="6" strokeLinecap="round" />
    <rect x="72" y="62" width="76" height="46" rx="8" fill="#0A0A0C" stroke="#FF2E88" strokeWidth="3" />
    <circle cx="110" cy="85" r="15" fill="#007BA7" stroke="#FF2E88" strokeWidth="2" /></svg>) }
