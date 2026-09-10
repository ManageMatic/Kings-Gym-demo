import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Crown } from 'lucide-react'

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#branches', label: 'Branches' },
  { href: '#programs', label: 'Programs' },
  { href: '#trainers', label: 'Trainers' },
  { href: '#membership', label: 'Membership' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
]

interface HeaderProps {
  onJoinClick: () => void
}

export default function Header({ onJoinClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)

      // Scroll spy
      const sections = document.querySelectorAll('section[id]')
      let current = 'hero'
      sections.forEach((section) => {
        const el = section as HTMLElement
        if (window.scrollY + 120 >= el.offsetTop) {
          current = el.id
        }
      })
      setActiveSection(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-350 border-b backdrop-blur-[14px]
          ${scrolled
            ? 'h-[70px] bg-bg-primary/95 border-gold-500/40 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'h-20 bg-gradient-to-b from-bg-primary/95 to-bg-primary/60 border-white/5'
          }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-full">
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-3">
            <Crown className="w-9 h-9 text-gold-400 drop-shadow-[0_2px_8px_rgba(212,175,55,0.28)]" />
            <div className="flex flex-col">
              <span className="font-display text-2xl font-black tracking-wide leading-none text-white">
                KING'S <span className="text-gold-400">GYM</span>
              </span>
              <span className="text-[0.65rem] tracking-[0.22em] uppercase text-gold-300 font-semibold mt-0.5">
                TRAIN LIKE A KING
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[0.85rem] font-semibold tracking-wide uppercase relative py-2 transition-colors
                  ${activeSection === link.href.replace('#', '')
                    ? 'text-white after:w-full'
                    : 'text-text-secondary hover:text-white after:w-0 hover:after:w-full'
                  }
                  after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-gold-400 after:transition-all after:duration-200`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={onJoinClick}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold tracking-wider uppercase rounded-lg
                bg-gradient-to-br from-gold-300 to-gold-500 text-[#0d0d10] border border-gold-300
                shadow-[var(--shadow-gold)] hover:shadow-[var(--shadow-gold-hover)] hover:-translate-y-0.5 transition-all duration-300"
            >
              JOIN NOW
            </button>
            <button
              onClick={() => setDrawerOpen(true)}
              className="lg:hidden text-white p-2"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm z-[1000]"
              onClick={() => setDrawerOpen(false)}
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 w-[min(85vw,360px)] h-screen bg-[#0f0f14] border-l border-gold-500/40
                z-[1001] p-8 flex flex-col justify-between shadow-[-10px_0_40px_rgba(0,0,0,0.9)]"
            >
              {/* Drawer Header */}
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/8">
                  <div className="flex items-center gap-2">
                    <Crown className="w-7 h-7 text-gold-400" />
                    <span className="font-display text-xl font-black text-white">
                      KING'S <span className="text-gold-400">GYM</span>
                    </span>
                  </div>
                  <button onClick={() => setDrawerOpen(false)} className="text-white text-2xl bg-transparent">
                    <X size={24} />
                  </button>
                </div>

                {/* Nav Links */}
                <nav className="mt-8 flex flex-col gap-5">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setDrawerOpen(false)}
                      className="text-xl font-bold uppercase text-white hover:text-gold-400 transition-colors flex items-center justify-between"
                    >
                      {link.label} <span className="text-text-muted">→</span>
                    </a>
                  ))}
                </nav>
              </div>

              {/* Bottom CTA */}
              <div>
                <button
                  onClick={() => { setDrawerOpen(false); onJoinClick() }}
                  className="w-full py-3.5 text-sm font-bold tracking-wider uppercase rounded-lg
                    bg-gradient-to-br from-gold-300 to-gold-500 text-[#0d0d10] border border-gold-300
                    shadow-[var(--shadow-gold)] transition-all"
                >
                  JOIN THE KINGDOM
                </button>
                <p className="text-center text-xs text-text-muted mt-3">
                  📍 Surat, Gujarat • 3 Elite Locations
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
