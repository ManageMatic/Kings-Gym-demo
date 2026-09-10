import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, type ReactNode } from 'react'

// ===================================================================
// SECTION WRAPPER with scroll-triggered reveal
// ===================================================================

interface SectionProps {
  id?: string
  className?: string
  children: ReactNode
}

export function Section({ id, className = '', children }: SectionProps) {
  return (
    <section id={id} className={`py-24 md:py-28 relative overflow-hidden ${className}`}>
      {children}
    </section>
  )
}

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`max-w-[1280px] mx-auto px-6 ${className}`}>{children}</div>
}

// ===================================================================
// SECTION HEADER
// ===================================================================

interface SectionHeaderProps {
  badge: string
  title: string
  titleGold: string
  subtitle?: string
  center?: boolean
}

export function SectionHeader({ badge, title, titleGold, subtitle, center = true }: SectionHeaderProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className={`max-w-[750px] mb-16 ${center ? 'text-center mx-auto' : 'text-left'}`}
    >
      <span className="badge-gold">{badge}</span>
      <h2 className="font-display text-[clamp(2.2rem,4vw,3.4rem)] uppercase text-white mt-3 mb-4">
        {title} <span className="gold-gradient-text">{titleGold}</span>
      </h2>
      {subtitle && <p className="text-lg text-text-secondary">{subtitle}</p>}
    </motion.div>
  )
}

// ===================================================================
// ANIMATED CARD WRAPPER
// ===================================================================

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function AnimatedCard({ children, className = '', delay = 0 }: AnimatedCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ===================================================================
// BADGE DEMO
// ===================================================================

export function BadgeDemo({ children }: { children: ReactNode }) {
  return <span className="badge-demo">{children}</span>
}
