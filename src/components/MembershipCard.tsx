import React from 'react'
import { motion } from 'framer-motion'
import { Check, Crown, Sparkles, ArrowRight } from 'lucide-react'
import type { MembershipPlan } from '../data/memberships'

interface MembershipCardProps {
  plan: MembershipPlan
  onSelect: (planId: string) => void
}

export const MembershipCard: React.FC<MembershipCardProps> = ({ plan, onSelect }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className={`rounded-2xl p-5 sm:p-7 flex flex-col justify-between relative transition-all duration-300 ${
        plan.isPopular
          ? 'bg-gradient-to-b from-zinc-900 via-zinc-950 to-black border border-amber-400 shadow-xl shadow-amber-500/10 ring-1 ring-amber-400/30'
          : 'bg-zinc-950/80 border border-white/10 hover:border-white/20 shadow-lg'
      }`}
    >
      {/* Most Popular Crown Tag */}
      {plan.isPopular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-black text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 shadow-lg border border-yellow-200">
          <Crown className="w-3 h-3 fill-black" />
          <span>{plan.badge || 'MOST POPULAR'}</span>
        </div>
      )}

      {/* Top Section */}
      <div>
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] uppercase tracking-widest text-amber-300 font-bold">
            {plan.duration}
          </span>
          {plan.isPopular && (
            <span className="p-1 rounded-full bg-amber-400/10 text-amber-400">
              <Sparkles className="w-3.5 h-3.5" />
            </span>
          )}
        </div>

        <h3 className="text-xl sm:text-2xl font-bold font-display text-white uppercase tracking-tight mt-1">
          {plan.name}
        </h3>

        <p className="text-xs text-zinc-400 mt-1.5 font-light leading-relaxed">
          {plan.description}
        </p>

        {/* Pricing Block */}
        <div className="mt-5 p-3.5 rounded-xl bg-black/60 border border-white/5 text-center">
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-2xl sm:text-3xl font-black font-display text-white">
              {plan.price}
            </span>
          </div>
          <span className="text-[9px] font-bold uppercase tracking-wider text-amber-400/90 block mt-0.5">
            {plan.billingNote}
          </span>
        </div>

        {/* Feature Checkpoints */}
        <div className="mt-5 space-y-2.5">
          <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold block">
            MEMBERSHIP PRIVILEGES
          </span>
          {plan.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
              <div className="p-0.5 rounded-full bg-amber-400/20 text-amber-400 mt-0.5 shrink-0">
                <Check className="w-3 h-3 stroke-[2.5]" />
              </div>
              <span className="leading-snug">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-6 pt-3 border-t border-white/5">
        <button
          onClick={() => onSelect(plan.id)}
          className={`w-full py-3 rounded-xl font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
            plan.isPopular
              ? 'btn-gold'
              : 'btn-secondary'
          }`}
        >
          <span>JOIN NOW</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  )
}

export default MembershipCard
