import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import type { Program } from '../../data/programs'

interface ProgramCardProps {
  program: Program
  onJoinClick: () => void
}

export const ProgramCard: React.FC<ProgramCardProps> = ({ program, onJoinClick }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      onClick={onJoinClick}
      className="group cursor-pointer rounded-2xl overflow-hidden bg-zinc-950/80 border border-white/10 hover:border-amber-400/50 shadow-lg flex flex-col transition-all duration-300 relative"
    >
      {/* Top Image Container */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img
          src={program.image}
          alt={program.title}
          className="w-full h-full object-cover brightness-80 group-hover:scale-105 group-hover:brightness-95 transition-all duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

        {/* Number Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-widest bg-black/80 backdrop-blur-md border border-amber-400/40 text-amber-300 font-display">
            {program.num}
          </span>
        </div>

        {/* Floating Arrow Icon */}
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/10 group-hover:border-amber-400 group-hover:bg-amber-400 flex items-center justify-center transition-all duration-300 shadow-md">
          <ArrowUpRight className="w-3.5 h-3.5 text-zinc-300 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </div>

        {/* Bottom Title in Image */}
        <div className="absolute bottom-3 left-4 right-4">
          <span className="text-[10px] uppercase tracking-wider text-amber-300/90 font-semibold block">
            {program.subtitle}
          </span>
          <h3 className="text-xl font-bold font-display text-white uppercase tracking-tight group-hover:text-amber-300 transition-colors">
            {program.title}
          </h3>
        </div>
      </div>

      {/* Description & Features */}
      <div className="p-5 flex-1 flex flex-col justify-between gap-4">
        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
          {program.description}
        </p>

        {/* Highlights */}
        <div className="space-y-1.5 pt-2 border-t border-white/5">
          {program.highlights.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="truncate">{item}</span>
            </div>
          ))}
        </div>

        {/* Bottom CTA Bar */}
        <div className="pt-2.5 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-amber-400 group-hover:text-amber-300 border-t border-white/5">
          <span>ENROLL IN {program.title}</span>
          <span className="text-zinc-500 group-hover:translate-x-1 group-hover:text-amber-400 transition-all">→</span>
        </div>
      </div>
    </motion.div>
  )
}

export default ProgramCard
