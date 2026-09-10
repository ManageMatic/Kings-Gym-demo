import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Crown, Sparkles, MapPin, Target, Shield, HeartHandshake } from 'lucide-react'

interface OurStoryModalProps {
  isOpen: boolean
  onClose: () => void
  onJoinClick: () => void
}

export const OurStoryModal: React.FC<OurStoryModalProps> = ({ isOpen, onClose, onJoinClick }) => {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-2xl rounded-3xl bg-gradient-to-b from-zinc-900 via-zinc-950 to-black border border-amber-400/40 p-6 sm:p-8 lg:p-10 shadow-2xl relative my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2.5 rounded-full bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            aria-label="Close Story"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-6">
            {/* Header Badge & Title */}
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-700 flex items-center justify-center mx-auto shadow-lg shadow-amber-500/20 border border-yellow-200">
                <Crown className="w-6 h-6 text-black" />
              </div>

              <span className="badge-gold">
                FORGED IN SURAT • GUJARAT
              </span>

              <h3 className="text-2xl sm:text-4xl font-extrabold font-display text-white uppercase tracking-tight">
                THE STORY BEHIND <span className="text-gradient-gold">KING'S GYM</span>
              </h3>

              <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-lg mx-auto">
                "We didn't set out to build another generic fitness center. We set out to create a Kingdom of strength, discipline, and character."
              </p>
            </div>

            {/* Visual & Story Content */}
            <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
              <div className="p-4 rounded-2xl bg-black/60 border border-white/5 space-y-3">
                <h4 className="font-bold text-white text-sm uppercase flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>The Vision</span>
                </h4>
                <p>
                  King's Gym was founded with a singular conviction: Surat deserved an elite fitness institution that matched international luxury standards while preserving genuine community warmth and local pride.
                </p>
                <p>
                  We stripped away the fluff and invested where it matters most: commercial 11-gauge heavy steel racks, knurled calibrated plates, biomechanically correct isolation machines, and certified coaches who genuinely care about posture and long-term results.
                </p>
              </div>

              {/* 3 Branches in Surat */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="p-3.5 rounded-xl bg-zinc-900/70 border border-white/5">
                  <div className="flex items-center gap-1.5 text-amber-300 font-bold text-xs uppercase mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Parvat Patiya</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-tight">
                    Heavy iron powerlifting hub with deadlift decks & calibrated plates.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-900/70 border border-white/5">
                  <div className="flex items-center gap-1.5 text-amber-300 font-bold text-xs uppercase mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Godadara</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-tight">
                    30m sprint turf, functional athletics & high-energy Zumba studio.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-900/70 border border-white/5">
                  <div className="flex items-center gap-1.5 text-amber-300 font-bold text-xs uppercase mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Dindoli</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-tight">
                    Aesthetic luxury machine floor, body scans & smoothie recovery bar.
                  </p>
                </div>
              </div>

              {/* Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-center">
                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <Target className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                  <span className="font-bold text-white text-xs block">Zero Shortcuts</span>
                  <span className="text-[10px] text-zinc-400">Pure progressive overload</span>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <Shield className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                  <span className="font-bold text-white text-xs block">Unbroken Standard</span>
                  <span className="text-[10px] text-zinc-400">Clean, safe & empowering</span>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <HeartHandshake className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                  <span className="font-bold text-white text-xs block">Royal Brotherhood</span>
                  <span className="text-[10px] text-zinc-400">Support on every set</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10">
              <span className="text-xs text-zinc-500 font-medium">
                Surat, Gujarat • 3 Premier Branches
              </span>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={onClose}
                  className="btn-secondary !py-2.5 !px-4 text-xs flex-1 sm:flex-initial"
                >
                  CLOSE
                </button>
                <button
                  onClick={() => {
                    onClose()
                    onJoinClick()
                  }}
                  className="btn-gold !py-2.5 !px-5 text-xs flex-1 sm:flex-initial"
                >
                  JOIN THE KINGDOM
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default OurStoryModal
