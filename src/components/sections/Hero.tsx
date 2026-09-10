import { motion } from 'framer-motion'
import { Crown, MapPin, Sparkles, ArrowRight } from 'lucide-react'

interface HeroProps {
  onJoinClick: () => void
  onExploreClick?: () => void
}

export default function Hero({ onJoinClick, onExploreClick }: HeroProps) {
  const scrollToBranches = () => {
    if (onExploreClick) {
      onExploreClick()
    } else {
      document.getElementById('branches')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-black pt-24 pb-16">
      {/* Cinematic Background Image with Ken Burns */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt="King's Gym Surat Luxury Training Floor"
          className="w-full h-full object-cover object-center brightness-70 animate-ken-burns scale-105"
        />
        {/* Layered Vignette and Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black" />
      </div>

      {/* Decorative Gold Radial Beam */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Surat Location Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-amber-400/30 text-amber-300 text-xs font-semibold tracking-[0.2em] uppercase mb-6 shadow-xl"
        >
          <MapPin className="w-3.5 h-3.5 text-amber-400" />
          <span>SURAT • GUJARAT</span>
          <span className="w-1 h-1 rounded-full bg-amber-400" />
          <span className="text-zinc-400 font-normal">3 PREMIER LOCATIONS</span>
        </motion.div>

        {/* Hero Title */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-1"
        >
          <h1 className="font-display font-black text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wide uppercase leading-[0.95] text-center [word-spacing:0.18em]">
            <span className="block text-zinc-100">TRAIN LIKE A</span>
            <span className="text-gradient-gold block text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-normal">KING.</span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-5 text-base sm:text-xl text-zinc-300 font-light tracking-wide max-w-xl"
        >
          Strength. Discipline. Transformation.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto"
        >
          <button
            onClick={onJoinClick}
            className="btn-gold w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-extrabold group"
          >
            <Crown className="w-4 h-4 fill-black" />
            <span>JOIN THE KINGDOM</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={scrollToBranches}
            className="btn-secondary w-full sm:w-auto px-7 py-3.5 text-xs sm:text-sm font-semibold"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>EXPLORE OUR GYMS</span>
          </button>
        </motion.div>

        {/* Small Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-5 text-xs uppercase tracking-[0.2em] text-zinc-500 font-medium"
        >
          Three locations. One standard of excellence.
        </motion.p>
      </div>
    </section>
  )
}
