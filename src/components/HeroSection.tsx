import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface HeroSectionProps {
  onJoinClick: () => void
}

export default function HeroSection({ onJoinClick }: HeroSectionProps) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Background Image with Ken Burns */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/images/hero.jpg"
          alt="King's Gym Surat Luxury Training Floor"
          className="w-full h-full object-cover object-[center_30%] scale-105 hero-bg-img"
        />
      </div>
      {/* Cinematic Overlay */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(10,10,12,0.75)_0%,rgba(10,10,12,0.4)_40%,rgba(10,10,12,0.95)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.2)_0%,rgba(10,10,12,0.85)_100%)]" />

      <div className="text-center max-w-[960px] px-6 relative z-10 mt-8">
        {/* Location Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 bg-[rgba(18,18,22,0.8)] border border-border-gold rounded-full mb-6 backdrop-blur-xl"
        >
          <span className="w-2 h-2 bg-gold-400 rounded-full shadow-[0_0_10px_var(--color-gold-400)] pulse-dot" />
          <span className="text-xs font-bold tracking-[0.12em] text-white">
            SURAT, GUJARAT • PARVAT PATIYA • GODADARA • DINDOLI
          </span>
        </motion.div>

        {/* Kicker */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="block text-[clamp(0.85rem,1.5vw,1.1rem)] font-bold tracking-[0.25em] text-gold-300 uppercase mb-4"
        >
          YOUR BODY. YOUR DISCIPLINE. YOUR LEGACY.
        </motion.span>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="font-display text-[clamp(3.2rem,7.5vw,6.2rem)] leading-[0.95] font-black uppercase tracking-tight text-white mb-6
            [text-shadow:0_10px_40px_rgba(0,0,0,0.8)]"
        >
          TRAIN LIKE A{' '}
          <span className="gold-gradient-text">KING.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="text-[clamp(1.1rem,2vw,1.4rem)] text-[#d8d8e5] max-w-[680px] mx-auto mb-10 leading-relaxed"
        >
          Build strength. Push limits. Transform yourself in Surat's most powerful fitness realm.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="flex items-center justify-center gap-5 flex-wrap"
        >
          <button
            onClick={onJoinClick}
            className="inline-flex items-center gap-2.5 px-8 py-4 text-base font-bold tracking-wider uppercase rounded-lg
              bg-gradient-to-br from-gold-300 to-gold-500 text-[#0d0d10] border border-gold-300
              shadow-[var(--shadow-gold)] hover:shadow-[var(--shadow-gold-hover)] hover:-translate-y-0.5 transition-all duration-300"
          >
            JOIN THE KINGDOM
            <ArrowRight size={18} />
          </button>
          <a
            href="#branches"
            className="inline-flex items-center gap-2.5 px-8 py-4 text-base font-bold tracking-wider uppercase rounded-lg
              bg-white/5 text-white border border-white/8 backdrop-blur-xl
              hover:bg-white/12 hover:border-white/30 hover:text-gold-300 hover:-translate-y-0.5 transition-all duration-300"
          >
            EXPLORE OUR GYMS
          </a>
        </motion.div>

        {/* Stats Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mt-16 px-8 py-5 bg-[rgba(18,18,24,0.85)] border border-border-gold rounded-2xl
            backdrop-blur-2xl grid grid-cols-2 md:grid-cols-4 gap-6 shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
        >
          {[
            { num: '3', label: 'Prime Surat Branches' },
            { num: '7 DAYS', label: 'Weekly Access' },
            { num: '1000+*', label: 'Kingdom Athletes (Demo)' },
            { num: '1 GOAL', label: 'Unstoppable Strength' },
          ].map((item, i) => (
            <div key={i} className="text-center relative">
              <div className="font-display text-2xl font-extrabold text-gold-300 leading-none">{item.num}</div>
              <div className="text-xs uppercase tracking-wider text-text-secondary mt-1.5">{item.label}</div>
              {i < 3 && (
                <div className="hidden md:block absolute right-0 top-[20%] h-[60%] w-px bg-white/8" />
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#manifesto"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted text-xs
          tracking-[0.15em] uppercase hover:text-gold-400 transition-colors"
      >
        <div className="mouse-icon" />
        <span>DISCOVER</span>
      </a>
    </section>
  )
}
