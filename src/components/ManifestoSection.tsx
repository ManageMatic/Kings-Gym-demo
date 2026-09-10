import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ManifestoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="manifesto"
      className="bg-[#0d0d11] border-t border-b border-white/5 text-center py-20 px-6 relative"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-[880px] mx-auto"
      >
        <span className="badge-gold">THE KINGDOM STANDARD</span>
        <h2 className="text-sm tracking-[0.25em] text-gold-400 mt-4 uppercase font-bold">
          THIS IS YOUR KINGDOM
        </h2>
        <p className="font-display text-[clamp(1.4rem,3.2vw,2.3rem)] font-bold leading-[1.4] text-white mt-6 mb-6 tracking-tight">
          "Every rep builds discipline. Every session builds character. Every transformation starts with{' '}
          <span className="text-gold-400">one decision.</span>"
        </p>
        <p className="text-text-secondary max-w-[650px] mx-auto text-base">
          Welcome to a fitness sanctuary forged for those who refuse average. Rule your limits. Own your greatness.
        </p>
      </motion.div>
    </section>
  )
}
