import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { branches, localityMap, suratLocalities } from '../../data/branches'
import type { Branch } from '../../data/branches'
import BranchCard from '../cards/BranchCard'
import { MapPin, Navigation, ShieldCheck, Compass, Check, ArrowRight } from 'lucide-react'

interface BranchSelectorProps {
  onTrialClick: () => void
}

export default function BranchSelector({ onTrialClick }: BranchSelectorProps) {
  const [selectedBranchId, setSelectedBranchId] = useState<string>('parvat-patiya')
  const [selectedLocality, setSelectedLocality] = useState<string>('')
  const [locatorResult, setLocatorResult] = useState<{ branchId: string; branchName: string; distance: string; travelTime: string } | null>(null)

  const activeBranch: Branch = branches.find((b) => b.id === selectedBranchId) || branches[0]

  const handleLocalityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value
    setSelectedLocality(val)
    if (val && localityMap[val]) {
      const res = localityMap[val]
      setLocatorResult(res)
      setSelectedBranchId(res.branchId)
    } else {
      setLocatorResult(null)
    }
  }

  return (
    <div className="space-y-10 sm:space-y-14">
      {/* 3 Main Branch Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {branches.map((branch) => (
          <BranchCard
            key={branch.id}
            branch={branch}
            isSelected={selectedBranchId === branch.id}
            onSelect={() => setSelectedBranchId(branch.id)}
            onTrialClick={onTrialClick}
          />
        ))}
      </div>

      {/* Interactive Selected Branch Detail Stage */}
      <motion.div
        layout
        className="rounded-3xl overflow-hidden border border-amber-400/30 bg-gradient-to-b from-zinc-900/90 via-zinc-950 to-black p-6 sm:p-8 lg:p-10 shadow-2xl relative"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row gap-8 items-start justify-between relative z-10">
          {/* Left Column: Branch Name, Address & Highlights */}
          <div className="flex-1 space-y-5">
            <div className="flex items-center gap-3">
              <span className="badge-gold">
                {activeBranch.num} ACTIVE SELECTION
              </span>
              <span className="text-xs text-zinc-400 font-medium">Surat, Gujarat</span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeBranch.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-white uppercase tracking-tight">
                  KING'S GYM <span className="text-gradient-gold">{activeBranch.name}</span>
                </h3>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
                  {activeBranch.tagline}. Equipped with calibrated Olympic power racks, competition barbells, and ergonomic biomechanical stations.
                </p>

                {/* Address & Timings Banner */}
                <div className="p-4 rounded-xl bg-black/60 border border-white/5 space-y-2 text-xs">
                  <div className="flex items-start gap-2.5 text-zinc-300">
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">Full Address: </span>
                      <span>{activeBranch.address}</span>
                      <span className="block text-[11px] text-amber-400/80 mt-0.5 font-medium">({activeBranch.coordinatesNote})</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 text-zinc-400 border-t border-white/5 pt-2">
                    <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{activeBranch.timings}</span>
                  </div>
                </div>

                {/* Branch Facilities Tags */}
                <div className="space-y-2 pt-1">
                  <span className="text-xs uppercase tracking-wider text-zinc-400 font-bold block">
                    LOCATION AMENITIES & EQUIPMENT
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeBranch.facilities.map((fac, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300 bg-zinc-900/60 px-3 py-2 rounded-lg border border-white/5">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span className="truncate">{fac}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <button
                    onClick={onTrialClick}
                    className="btn-gold text-xs font-bold"
                  >
                    <span>BOOK FREE TRIAL AT {activeBranch.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={activeBranch.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-xs"
                  >
                    <Navigation className="w-3.5 h-3.5 text-amber-400" />
                    <span>GOOGLE MAPS DIRECTIONS</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: High-Res Branch Image Showcase */}
          <div className="w-full lg:w-[400px] rounded-2xl overflow-hidden border border-white/10 relative group aspect-[4/3] lg:h-[380px] shrink-0">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeBranch.image}
                src={activeBranch.image}
                alt={`King's Gym ${activeBranch.name}`}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-amber-300 border border-amber-400/30">
                {activeBranch.name} REAL INTERIOR
              </span>
              <span className="text-[10px] text-zinc-400 bg-zinc-900/80 px-2 py-0.5 rounded">
                DEMO PHOTO
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Interactive Gym Finder: "WHICH KINGDOM IS YOURS?" */}
      <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-white/10 shadow-xl">
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <div className="badge-gold">
            <Compass className="w-3.5 h-3.5" />
            <span>INSTANT SURAT LOCATOR</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold font-display text-white uppercase">
            WHICH KINGDOM IS YOURS?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 font-light">
            Select your residential or office locality in Surat to discover your nearest King's Gym branch and travel distance.
          </p>

          <div className="pt-2 max-w-md mx-auto">
            <select
              value={selectedLocality}
              onChange={handleLocalityChange}
              className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-amber-400/40 text-white font-medium text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all cursor-pointer"
            >
              <option value="">-- Choose Your Surat Area / Locality --</option>
              {suratLocalities.map((loc) => (
                <option key={loc.value} value={loc.value}>
                  {loc.label}
                </option>
              ))}
            </select>
          </div>

          {locatorResult && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-4 rounded-xl bg-amber-400/10 border border-amber-400/40 text-left max-w-md mx-auto flex items-center justify-between gap-4 mt-4"
            >
              <div>
                <span className="text-[10px] uppercase tracking-widest text-amber-400 font-bold block">
                  RECOMMENDED BRANCH
                </span>
                <p className="text-sm font-bold text-white uppercase mt-0.5">
                  {locatorResult.branchName}
                </p>
                <p className="text-xs text-zinc-300">
                  Distance: <span className="text-amber-300 font-semibold">{locatorResult.distance}</span> • Travel: <span className="text-amber-300 font-semibold">{locatorResult.travelTime}</span>
                </p>
              </div>

              <button
                onClick={() => {
                  setSelectedBranchId(locatorResult.branchId)
                  onTrialClick()
                }}
                className="btn-gold !py-2 !px-3 text-xs shrink-0"
              >
                BOOK HERE
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
