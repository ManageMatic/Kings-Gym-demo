import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Clock, Check } from 'lucide-react'
import { Section, Container, SectionHeader, AnimatedCard } from './ui/SharedUI'
import { branches, localityMap, localityOptions } from '../data/constants'

interface BranchesSectionProps {
  onTrialClick: () => void
}

export default function BranchesSection({ onTrialClick }: BranchesSectionProps) {
  const [activeBranch, setActiveBranch] = useState(0)
  const [locality, setLocality] = useState('parvat_patiya')
  const branch = branches[activeBranch]
  const match = localityMap[locality] || localityMap['other']

  return (
    <Section id="branches" className="bg-[#0d0d12]">
      <Container>
        <SectionHeader
          badge="MULTI-LOCATION NETWORK"
          title="CHOOSE YOUR"
          titleGold="KINGDOM."
          subtitle="Three locations. One standard of strength across Surat."
        />

        {/* Interactive Branch Stage */}
        <AnimatedCard>
          <div className="bg-bg-secondary rounded-2xl border border-border-gold overflow-hidden shadow-[var(--shadow-card)] mt-10">
            {/* Tab Nav */}
            <div className="grid grid-cols-3 border-b border-border-subtle bg-bg-primary/95">
              {branches.map((b, i) => (
                <button
                  key={b.id}
                  onClick={() => setActiveBranch(i)}
                  className={`py-5 px-4 font-display text-lg font-bold uppercase flex flex-col items-center gap-1
                    border-b-[3px] transition-all duration-200
                    ${i === activeBranch
                      ? 'text-white bg-gold-500/8 border-b-gold-400'
                      : 'text-text-secondary border-b-transparent hover:text-white hover:bg-white/[0.02]'
                    }`}
                >
                  <span className="text-xs tracking-[0.15em] text-gold-400">{b.num}</span>
                  <span className="text-sm md:text-base">{b.title}</span>
                </button>
              ))}
            </div>

            {/* Branch Content Stage */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] min-h-[520px]">
              {/* Image */}
              <div className="relative overflow-hidden h-[340px] lg:h-auto">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={branch.id}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5 }}
                    src={branch.image}
                    alt={`King's Gym ${branch.title} Branch Surat`}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,18,22,0)_60%,rgba(18,18,22,0.95)_100%),linear-gradient(180deg,rgba(18,18,22,0.2)_0%,rgba(18,18,22,0.8)_100%)]" />
              </div>

              {/* Detail Panel */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={branch.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="p-8 lg:p-10 flex flex-col justify-center bg-bg-secondary"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="badge-gold">{branch.num}</span>
                    <span className="badge-demo">SURAT BRANCH</span>
                  </div>

                  <h3 className="font-display text-4xl text-white mb-2">{branch.title}</h3>
                  <p className="text-gold-300 font-semibold mb-6">"{branch.tagline}"</p>

                  {/* Info Rows */}
                  <div className="flex flex-col gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-white text-xs uppercase tracking-wider">Location</strong>
                        <span className="text-sm text-text-secondary">{branch.address}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Clock className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-white text-xs uppercase tracking-wider">Operating Hours</strong>
                        <span className="text-sm text-text-secondary">{branch.timings}</span>
                      </div>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="mb-6">
                    <strong className="block text-white text-xs uppercase tracking-wider mb-3">Key Facilities:</strong>
                    <div className="flex flex-wrap gap-2">
                      {branch.amenities.map((a, i) => (
                        <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10
                          rounded-lg text-xs text-[#e2e2ec] font-medium">
                          <Check className="w-3 h-3 text-gold-400" /> {a}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4 flex-wrap">
                    <button
                      onClick={onTrialClick}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold tracking-wider uppercase rounded-lg
                        bg-gradient-to-br from-gold-300 to-gold-500 text-[#0d0d10] border border-gold-300
                        shadow-[var(--shadow-gold)] hover:shadow-[var(--shadow-gold-hover)] hover:-translate-y-0.5 transition-all duration-300"
                    >
                      BOOK FREE TRIAL
                    </button>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("King's Gym " + branch.mapQuery)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold tracking-wider uppercase rounded-lg
                        bg-white/5 text-white border border-white/8 hover:bg-white/12 hover:border-white/30 hover:text-gold-300
                        hover:-translate-y-0.5 transition-all duration-300"
                    >
                      GET DIRECTIONS ↗
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </AnimatedCard>

        {/* Gym Finder */}
        <AnimatedCard delay={0.2}>
          <div className="mt-14 bg-[radial-gradient(circle_at_10%_20%,rgba(212,175,55,0.08)_0%,rgba(18,18,24,0.95)_70%)]
            border border-border-gold rounded-2xl p-10 shadow-[var(--shadow-card)]">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
              <div>
                <span className="badge-gold">SURAT GYM LOCATOR</span>
                <h3 className="font-display text-3xl text-white mt-3 mb-3">WHICH KINGDOM IS YOURS?</h3>
                <p className="text-text-secondary mb-6">
                  Select your area in Surat to find your closest King's Gym branch, commute time, and exclusive branch benefits.
                </p>
                <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2">
                  Select Your Surat Locality / Neighborhood:
                </label>
                <select
                  value={locality}
                  onChange={(e) => setLocality(e.target.value)}
                  className="form-input cursor-pointer"
                >
                  {localityOptions.map(opt => (
                    <option key={opt.value} value={opt.value} className="bg-[#14141c] text-white">
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Result */}
              <motion.div
                key={match.name}
                initial={{ opacity: 0.5, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[rgba(10,10,14,0.85)] border border-border-subtle rounded-xl p-8 text-center
                  transition-all duration-300 hover:border-gold-400 hover:shadow-[0_0_25px_rgba(212,175,55,0.28)]"
              >
                <div className="text-xs uppercase tracking-[0.15em] text-gold-400 font-bold">
                  RECOMMENDED NEAREST GYM
                </div>
                <h4 className="font-display text-2xl text-white mt-2 mb-4">{match.name}</h4>
                <div className="flex justify-center gap-6 text-sm text-text-secondary mb-6">
                  <span>📍 Approx {match.distance}</span>
                  <span>⚡ ~{match.travel} away</span>
                </div>
                <button
                  onClick={onTrialClick}
                  className="w-full py-3 text-sm font-bold tracking-wider uppercase rounded-lg
                    bg-gradient-to-br from-gold-300 to-gold-500 text-[#0d0d10] border border-gold-300
                    shadow-[var(--shadow-gold)] hover:shadow-[var(--shadow-gold-hover)] transition-all duration-300"
                >
                  SELECT THIS BRANCH
                </button>
              </motion.div>
            </div>
          </div>
        </AnimatedCard>
      </Container>
    </Section>
  )
}
