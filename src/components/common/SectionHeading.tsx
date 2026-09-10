import React from 'react'
import { motion } from 'framer-motion'

interface SectionHeadingProps {
  label?: string
  title: string
  subtitle?: string
  center?: boolean
  highlightWords?: string[]
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  subtitle,
  center = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-6 sm:mb-8 ${center ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}`}
    >
      {label && (
        <div className="badge-gold mb-3.5">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span>{label}</span>
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wide text-white uppercase font-display leading-[1.2] [word-spacing:0.18em]">
        {title.includes('.') ? (
          <>
            <span>{title.split('.')[0]}. </span>
            <span className="text-gradient-gold block sm:inline">
              {title.split('.').slice(1).join('.').trim()}
            </span>
          </>
        ) : (
          title
        )}
      </h2>

      {subtitle && (
        <p className="mt-3.5 text-zinc-400 text-sm sm:text-base leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

export default SectionHeading
