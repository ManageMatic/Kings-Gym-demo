import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote, MapPin } from 'lucide-react'
import type { Testimonial } from '../data/testimonials'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl p-6 sm:p-7 bg-zinc-950 border border-zinc-800/90 hover:border-gold-500/50 shadow-xl flex flex-col justify-between gap-5 relative group"
    >
      <div>
        {/* Top Header: Stars & DEMO TESTIMONIAL Badge */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>

          <span className="px-2.5 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-amber-500/10 border border-amber-500/30 text-amber-400">
            DEMO TESTIMONIAL
          </span>
        </div>

        {/* Testimonial Quote */}
        <div className="mt-4 relative">
          <Quote className="w-8 h-8 text-gold-500/15 absolute -top-2 -left-2 pointer-events-none" />
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light italic relative z-10">
            "{testimonial.text}"
          </p>
        </div>
      </div>

      {/* Author Footer */}
      <div className="pt-4 border-t border-zinc-900 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-amber-700 text-black font-black text-xs flex items-center justify-center border border-gold-300 shadow-md">
          {testimonial.avatarInitials}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-black font-display text-white uppercase truncate">
            {testimonial.name}
          </h4>
          <p className="text-[11px] text-zinc-400 truncate">
            {testimonial.role}
          </p>
          <div className="flex items-center gap-1 text-[10px] text-gold-400/90 mt-0.5">
            <MapPin className="w-3 h-3 text-gold-400 shrink-0" />
            <span className="truncate">{testimonial.branch}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default TestimonialCard
