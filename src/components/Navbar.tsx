import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Crown, Menu, X, ArrowRight } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'

interface NavbarProps {
  onJoinClick: () => void
}

export default function Navbar({ onJoinClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle hash scrolling if navigating with hash
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        setTimeout(() => {
          const navHeight = 70
          const y = el.getBoundingClientRect().top + window.scrollY - navHeight
          window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' })
        }, 150)
      }
    }
  }, [location])

  const navLinks = [
    { label: 'HOME', id: 'hero' },
    { label: 'ABOUT', id: 'about' },
    { label: 'BRANCHES', id: 'branches' },
    { label: 'PROGRAMS', id: 'programs' },
    { label: 'TRAINERS', id: 'trainers' },
    { label: 'MEMBERSHIP', id: 'membership' },
    { label: 'GALLERY', id: 'gallery' },
    { label: 'CONTACT', id: 'contact' },
  ]

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false)

    if (id === 'hero') {
      if (location.pathname !== '/') {
        navigate('/')
      }
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        const heroEl = document.getElementById('hero')
        if (heroEl) {
          heroEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 50)
      return
    }

    if (location.pathname !== '/') {
      navigate(`/#${id}`)
      return
    }

    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) {
        const navHeight = 70
        const y = el.getBoundingClientRect().top + window.scrollY - navHeight
        window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' })
      }
    }, 50)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? 'bg-black/95 backdrop-blur-xl border-b border-amber-400/20 py-3 sm:py-3.5 shadow-2xl shadow-black/90'
          : 'bg-gradient-to-b from-black/95 via-black/60 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-2.5 group text-left cursor-pointer focus:outline-none"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-500/20 border border-yellow-200 group-hover:scale-105 transition-transform duration-300">
            <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-black stroke-[2.5]" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg sm:text-2xl font-extrabold tracking-wider text-white flex items-center gap-1.5">
              KING'S <span className="text-gradient-gold">GYM</span>
            </span>
            <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-zinc-400 font-semibold -mt-1">
              Surat • Gujarat
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.id)}
              className="text-xs font-bold tracking-widest text-zinc-300 hover:text-amber-300 transition-colors duration-200 uppercase relative py-1 group cursor-pointer focus:outline-none"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* Desktop CTA Action */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onJoinClick}
            className="btn-gold !py-2.5 !px-5 text-xs font-bold flex items-center gap-2 group cursor-pointer"
          >
            <span>JOIN NOW</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Action Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onJoinClick}
            className="px-3 py-1.5 rounded-lg font-bold text-[11px] uppercase tracking-wider bg-amber-400 text-black hover:bg-amber-300 transition-colors sm:hidden cursor-pointer"
          >
            JOIN
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-zinc-900 border border-white/10 text-zinc-200 hover:text-amber-400 focus:outline-none cursor-pointer transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden absolute top-full left-0 right-0 bg-black/98 border-b border-amber-400/30 backdrop-blur-2xl px-6 py-6 shadow-2xl overflow-hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-sm font-bold tracking-wider text-zinc-200 hover:text-amber-400 transition-colors py-3 flex items-center justify-between border-b border-white/5 cursor-pointer"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-zinc-600" />
                </button>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    onJoinClick()
                  }}
                  className="btn-gold w-full text-xs font-bold py-3.5 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Crown className="w-4 h-4" />
                  <span>JOIN THE KINGDOM</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
