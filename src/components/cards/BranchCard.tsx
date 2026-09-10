import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, ArrowRight, CheckCircle2, Navigation, Clock } from 'lucide-react'
import type { Branch } from '../../data/branches'
import { WhatsAppIcon } from '../common/SocialIcons'

interface BranchCardProps {
  branch: Branch
  isSelected: boolean
  onSelect: () => void
  onTrialClick: () => void
}

export const BranchCard: React.FC<BranchCardProps> = ({
  branch,
  isSelected,
  onSelect,
  onTrialClick,
}) => {
  const whatsappUrl = `https://wa.me/?text=Hi%20King%27s%20Gym%2C%20I%20want%20to%20inquire%20about%20the%20${encodeURIComponent(branch.name)}%20branch%20in%20Surat.`

  return (
    <motion.div
      layout
      onClick={onSelect}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className={`cursor-pointer rounded-2xl overflow-hidden border transition-all duration-300 relative group flex flex-col ${
        isSelected
          ? 'bg-zinc-900/90 border-amber-400/80 shadow-xl shadow-amber-500/10 ring-1 ring-amber-400/40'
          : 'bg-zinc-950/70 border-white/10 hover:border-white/20 hover:bg-zinc-900/50'
      }`}
    >
      {/* Top Image Preview with Badge */}
      <div className="relative h-44 sm:h-52 overflow-hidden">
        <img
          src={branch.image}
          alt={`King's Gym ${branch.name}`}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isSelected ? 'scale-105 brightness-95' : 'scale-100 brightness-80 group-hover:scale-105'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

        {/* Branch Number & City Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-black/80 backdrop-blur-md border border-amber-400/40 text-amber-300">
            {branch.num}
          </span>
          <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wider bg-zinc-900/80 backdrop-blur-md text-zinc-300">
            SURAT
          </span>
        </div>

        {isSelected && (
          <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-400 text-black flex items-center gap-1 shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-black" />
            <span>SELECTED</span>
          </div>
        )}

        <div className="absolute bottom-3 left-4 right-4">
          <h3 className="text-xl sm:text-2xl font-black font-display text-white tracking-tight uppercase">
            {branch.name}
          </h3>
          <p className="text-xs text-amber-300/90 font-medium">
            {branch.tagline}
          </p>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between gap-4">
        {/* Address */}
        <div className="flex items-start gap-2.5 text-xs text-zinc-300">
          <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <p className="font-medium leading-relaxed">{branch.address}</p>
            <p className="text-[11px] text-zinc-500 mt-0.5">{branch.coordinatesNote}</p>
          </div>
        </div>

        {/* Timings */}
        <div className="flex items-center gap-2 text-xs text-zinc-400 bg-black/40 p-2 rounded-lg border border-white/5">
          <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span className="truncate">{branch.timings}</span>
        </div>

        {/* Featured Facilities */}
        <div className="space-y-1.5 pt-1">
          <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold block">
            FACILITIES PREVIEW
          </span>
          <div className="grid grid-cols-1 gap-1">
            {branch.facilities.slice(0, 3).map((facility, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="truncate">{facility}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="pt-2 flex flex-col gap-2 border-t border-white/5">
          <div className="grid grid-cols-2 gap-2">
            <a
              href={branch.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="px-3 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-white/10 flex items-center justify-center gap-1.5 transition-colors"
            >
              <Navigation className="w-3.5 h-3.5 text-amber-400" />
              <span>MAPS</span>
            </a>

            <button
              onClick={(e) => {
                e.stopPropagation()
                onTrialClick()
              }}
              className="btn-gold !py-2 !px-3 text-xs font-bold"
            >
              <span>FREE TRIAL</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="flex items-center justify-between text-[11px] text-zinc-400 px-1 pt-1">
            <span className="flex items-center gap-1 text-zinc-400">
              <Phone className="w-3 h-3 text-amber-400" /> {branch.phone}
            </span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default BranchCard
