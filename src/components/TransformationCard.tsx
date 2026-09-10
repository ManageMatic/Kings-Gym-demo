import React from 'react'
import { motion } from 'framer-motion'
import { Quote, Flame, Clock, Trophy } from 'lucide-react'
import type { Transformation } from '../data/testimonials'

interface TransformationCardProps {
  transformation: Transformation
}

export const TransformationCard: React.FC<TransformationCardProps> = ({ transformation }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="rounded-3xl overflow-hidden bg-zinc-950 border border-zinc-800/90 hover:border-gold-500/50 shadow-2xl flex flex-col justify-between relative group"
    >
      {/* Visual Header with Overlay */}
      <div className="relative h-56 sm:h-64 overflow-hidden">
        <img
          src={transformation.image}
          alt={transformation.name}
          className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

        {/* DEMO TRANSFORMATION Badge */}
        <div className="absolute top-3.5 left-3.5">
          <span className="px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-widest bg-black/80 backdrop-blur-md border border-amber-500/40 text-amber-400">
            DEMO TRANSFORMATION
          </span>
        </div>

        {/* Duration Badge */}
        <div className="absolute top-3.5 right-3.5 flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-zinc-900/80 backdrop-blur-md text-zinc-300">
          <Clock className="w-3 h-3 text-gold-400" />
          <span>{transformation.duration}</span>
        </div>

        {/* Big Before / After Stats Comparison Matrix */}
        <div className="absolute bottom-3 left-3 right-3 grid grid-cols-2 gap-2">
          {/* Before */}
          <div className="p-2.5 rounded-xl bg-black/80 backdrop-blur-md border border-zinc-800 text-center">
            <span className="text-[9px] uppercase tracking-widest text-zinc-400 font-bold block">
              STARTING
            </span>
            <span className="text-lg font-black font-display text-zinc-300">
              {transformation.beforeStat}
            </span>
            <span className="text-[9px] text-zinc-500 block truncate">
              {transformation.beforeLabel}
            </span>
          </div>

          {/* After */}
          <div className="p-2.5 rounded-xl bg-gold-500/20 backdrop-blur-md border border-gold-500/50 text-center">
            <span className="text-[9px] uppercase tracking-widest text-gold-400 font-bold block">
              ACHIEVED
            </span>
            <span className="text-lg font-black font-display text-gradient-gold">
              {transformation.afterStat}
            </span>
            <span className="text-[9px] text-gold-300/80 block truncate">
              {transformation.afterLabel}
            </span>
          </div>
        </div>
      </div>

      {/* Testimonial & Identity */}
      <div className="p-5 flex-1 flex flex-col justify-between gap-4">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-gold-400 font-bold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5" />
            <span>{transformation.goal}</span>
          </div>

          <h4 className="text-lg font-black font-display text-white uppercase mt-1">
            {transformation.name}
          </h4>

          <div className="mt-3 p-3.5 rounded-xl bg-black/50 border border-zinc-900 flex items-start gap-2">
            <Quote className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
            <p className="text-xs text-zinc-300 italic font-light leading-relaxed">
              "{transformation.quote}"
            </p>
          </div>
        </div>

        <div className="pt-2 flex items-center justify-between text-[11px] text-zinc-500 border-t border-zinc-900">
          <span className="flex items-center gap-1 text-gold-400/80">
            <Flame className="w-3 h-3 text-gold-400" />
            <span>Verified King's Blueprint</span>
          </span>
          <span>Surat Gym Floor</span>
        </div>
      </div>
    </motion.div>
  )
}

export default TransformationCard
