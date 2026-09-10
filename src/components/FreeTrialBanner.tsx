import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface FreeTrialBannerProps {
  onTrialClick: () => void
}

export default function FreeTrialBanner({ onTrialClick }: FreeTrialBannerProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-[radial-gradient(circle_at_center,#1c180d_0%,#0a0a0c_90%)] border-t border-b border-border-gold
      py-24 px-6 text-center relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px]
        bg-[radial-gradient(circle,rgba(212,175,55,0.28)_0%,transparent_70%)] pointer-events-none" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-[780px] mx-auto"
      >
        <span className="badge-gold mb-4">COMPLIMENTARY PASS</span>
        <h2 className="font-display text-[clamp(2.4rem,4.8vw,4rem)] text-white uppercase mt-4 mb-4">
          READY TO ENTER <span className="gold-gradient-text">THE KINGDOM?</span>
        </h2>
        <p className="text-xl text-[#d0d0e0] mb-9">
          Your first workout starts with one decision. Experience the energy, equipment, and environment firsthand.
        </p>
        <button
          onClick={onTrialClick}
          className="inline-flex items-center gap-2.5 px-10 py-4 text-base font-bold tracking-wider uppercase rounded-lg
            bg-gradient-to-br from-gold-300 to-gold-500 text-[#0d0d10] border border-gold-300
            shadow-[var(--shadow-gold)] hover:shadow-[var(--shadow-gold-hover)] hover:-translate-y-0.5 transition-all duration-300"
        >
          BOOK A FREE TRIAL PASS ⚡
        </button>
      </motion.div>
    </section>
  )
}
