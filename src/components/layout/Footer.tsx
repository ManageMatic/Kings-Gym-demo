import { Crown, MapPin, Phone, Mail, ArrowUp, Navigation } from 'lucide-react'
import { branches } from '../../data/branches'
import { WhatsAppIcon, InstagramIcon, FacebookIcon, YouTubeIcon } from '../common/SocialIcons'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-black text-white border-t border-zinc-800/90 relative overflow-hidden">
      {/* Subtle Background Radial Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top 3-Branch Location Banner */}
      <div className="border-b border-zinc-900 bg-zinc-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="text-center mb-8">
            <span className="text-[10px] font-bold tracking-[0.25em] text-amber-400 uppercase">
              THE KINGDOM NETWORK
            </span>
            <h3 className="text-2xl font-black font-display uppercase tracking-tight text-white mt-1">
              THREE CONVENIENT LOCATIONS IN SURAT
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {branches.map((b) => (
              <div
                key={b.id}
                className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-amber-500/40 transition-colors flex flex-col justify-between gap-3"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                      {b.num}
                    </span>
                    <span className="text-[10px] text-zinc-500">SURAT</span>
                  </div>
                  <h4 className="text-lg font-black font-display text-white uppercase mt-0.5">
                    {b.name}
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    {b.address}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-zinc-800/80">
                  <span className="text-[11px] text-zinc-400 font-mono">
                    {b.phone}
                  </span>
                  <a
                    href={b.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 font-semibold"
                  >
                    <span>DIRECTIONS</span>
                    <Navigation className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-700 flex items-center justify-center border border-amber-300 shadow-lg">
                <Crown className="w-5 h-5 text-black stroke-[2.5]" />
              </div>
              <span className="font-display text-2xl font-black tracking-wider text-white">
                KING'S <span className="text-gradient-gold">GYM</span>
              </span>
            </div>

            <p className="text-sm font-semibold tracking-widest text-amber-400 uppercase">
              TRAIN LIKE A KING.
            </p>

            <p className="text-xs text-zinc-400 font-light leading-relaxed max-w-sm">
              Surat's premier luxury fitness institution. Built for those who demand elite coaching, world-class iron, and a community of relentless discipline.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/?text=Hi%2C%20I%20want%20to%20inquire%20about%20King%27s%20Gym%20Surat"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 hover:border-emerald-400 hover:bg-emerald-500/10 text-zinc-300 hover:text-emerald-400 flex items-center justify-center transition-colors cursor-pointer"
                title="Chat on WhatsApp"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 hover:border-pink-500 hover:bg-pink-500/10 text-zinc-300 hover:text-pink-400 flex items-center justify-center transition-colors cursor-pointer"
                title="Follow on Instagram"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 hover:border-blue-500 hover:bg-blue-500/10 text-zinc-300 hover:text-blue-400 flex items-center justify-center transition-colors cursor-pointer"
                title="Follow on Facebook"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 hover:border-red-500 hover:bg-red-500/10 text-zinc-300 hover:text-red-400 flex items-center justify-center transition-colors cursor-pointer"
                title="Watch on YouTube"
                aria-label="YouTube"
              >
                <YouTubeIcon className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-black tracking-widest text-white border-b border-zinc-800 pb-2">
              EXPLORE
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <button
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Home Kingdom
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById('branches')
                    if (el) {
                      const y = el.getBoundingClientRect().top + window.scrollY - 80
                      window.scrollTo({ top: y, behavior: 'smooth' })
                    }
                  }}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Surat Branches
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById('programs')
                    if (el) {
                      const y = el.getBoundingClientRect().top + window.scrollY - 80
                      window.scrollTo({ top: y, behavior: 'smooth' })
                    }
                  }}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Training Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById('membership')
                    if (el) {
                      const y = el.getBoundingClientRect().top + window.scrollY - 80
                      window.scrollTo({ top: y, behavior: 'smooth' })
                    }
                  }}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Membership Plans
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById('gallery')
                    if (el) {
                      const y = el.getBoundingClientRect().top + window.scrollY - 80
                      window.scrollTo({ top: y, behavior: 'smooth' })
                    }
                  }}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Photo Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById('contact')
                    if (el) {
                      const y = el.getBoundingClientRect().top + window.scrollY - 80
                      window.scrollTo({ top: y, behavior: 'smooth' })
                    }
                  }}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Contact & Enquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-black tracking-widest text-white border-b border-zinc-800 pb-2">
              PROGRAMS
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><span className="hover:text-amber-400 transition-colors cursor-pointer">Strength Training</span></li>
              <li><span className="hover:text-amber-400 transition-colors cursor-pointer">Muscle Building</span></li>
              <li><span className="hover:text-amber-400 transition-colors cursor-pointer">Metabolic Fat Loss</span></li>
              <li><span className="hover:text-amber-400 transition-colors cursor-pointer">Zumba & Dance HIIT</span></li>
              <li><span className="hover:text-amber-400 transition-colors cursor-pointer">1-on-1 Personal Training</span></li>
              <li><span className="hover:text-amber-400 transition-colors cursor-pointer">General Functional Fitness</span></li>
            </ul>
          </div>

          {/* Official Contact Info */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-black tracking-widest text-white border-b border-zinc-800 pb-2">
              CONTACT
            </h4>
            <div className="space-y-2.5 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>+91 98XXX XXXXX (OFFICIAL)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>info@kingsgymsurat.demo</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Surat, Gujarat, India (3 Branches)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="mt-14 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 King's Gym Surat — Client Presentation Demo Website.</p>

          <div className="flex items-center gap-6">
            <span className="hover:text-zinc-400 transition-colors cursor-pointer">Privacy Policy (Demo)</span>
            <span className="hover:text-zinc-400 transition-colors cursor-pointer">Terms & Conditions</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-amber-400 border border-zinc-800 flex items-center gap-1 transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span>TOP</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
