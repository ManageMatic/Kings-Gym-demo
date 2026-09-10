import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, Quote, ChevronRight, X } from 'lucide-react'
import type { Trainer } from '../data/trainers'

interface TrainerCardProps {
  trainer: Trainer
  onBookSession?: () => void
}

export const TrainerCard: React.FC<TrainerCardProps> = ({ trainer, onBookSession }) => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.25 }}
        onClick={() => setModalOpen(true)}
        className="group cursor-pointer rounded-2xl overflow-hidden bg-zinc-950/80 border border-white/10 hover:border-amber-400/50 shadow-lg flex flex-col relative transition-all duration-300"
      >
        {/* Portrait Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900">
          <img
            src={trainer.image}
            alt={trainer.name}
            className="w-full h-full object-cover object-top brightness-90 group-hover:scale-104 transition-all duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

          {/* DEMO PROFILE Badge */}
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md border border-amber-400/40 text-amber-300">
              DEMO PROFILE
            </span>
          </div>

          {/* Hover Overlay with VIEW PROFILE */}
          <div className="absolute inset-0 bg-black/75 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-5 text-center gap-2.5">
            <span className="text-[10px] uppercase tracking-widest text-amber-300 font-bold">
              KINGS COACHING SQUAD
            </span>
            <p className="text-xs text-zinc-300 italic font-light">
              "{trainer.quote}"
            </p>
            <div className="mt-1 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-400 text-black text-xs font-bold uppercase tracking-wider shadow-md">
              <span>VIEW PROFILE</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Bottom Card Labels */}
          <div className="absolute bottom-3 left-4 right-4 group-hover:opacity-0 transition-opacity duration-200">
            <h3 className="text-lg font-bold font-display text-white uppercase tracking-tight">
              {trainer.name}
            </h3>
            <p className="text-xs text-amber-300/90 font-medium">
              {trainer.specialization}
            </p>
          </div>
        </div>

        {/* Footer Info */}
        <div className="p-3.5 bg-zinc-950 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="truncate text-[11px]">{trainer.experience}</span>
          </div>
          <span className="text-[10px] uppercase text-zinc-500 font-semibold">
            CLICK
          </span>
        </div>
      </motion.div>

      {/* Trainer Profile Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg rounded-2xl bg-zinc-950 border border-amber-400/30 p-6 sm:p-7 shadow-2xl relative"
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-4">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover object-top border border-amber-400/30 shrink-0"
                />
                <div>
                  <div className="badge-gold mb-1 text-[9px]">
                    DEMO COACH PROFILE
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white uppercase">
                    {trainer.name}
                  </h3>
                  <p className="text-xs text-amber-300 font-medium">
                    {trainer.specialization}
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-4">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-zinc-400 font-bold mb-1">
                    ABOUT COACH
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                    {trainer.bio}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-black/50 border border-white/5 flex items-start gap-2.5">
                  <Quote className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-zinc-300 italic">
                    "{trainer.quote}"
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-widest text-zinc-400 font-bold mb-2">
                    CERTIFICATIONS & CREDENTIALS
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {trainer.certifications.map((c, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-md bg-zinc-900 border border-white/5 text-[11px] text-zinc-300">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      setModalOpen(false)
                      if (onBookSession) onBookSession()
                    }}
                    className="btn-gold w-full text-xs font-bold"
                  >
                    REQUEST 1-ON-1 COACHING
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export default TrainerCard
