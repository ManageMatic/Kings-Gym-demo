import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Crown, CheckCircle2 } from 'lucide-react'
import { branches } from '../data/branches'
import { membershipPlans } from '../data/memberships'
import { trainingGoals } from '../data/programs'

interface MembershipModalProps {
  isOpen: boolean
  onClose: () => void
  defaultPlan?: string
}

export const MembershipModal: React.FC<MembershipModalProps> = ({
  isOpen,
  onClose,
  defaultPlan = 'yearly',
}) => {
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [selectedBranch, setSelectedBranch] = useState('parvat-patiya')
  const [selectedPlan, setSelectedPlan] = useState(defaultPlan)
  const [fitnessGoal, setFitnessGoal] = useState('muscle')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleResetAndClose = () => {
    setSubmitted(false)
    setFullName('')
    setPhone('')
    onClose()
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-lg rounded-3xl bg-gradient-to-b from-zinc-900 via-zinc-950 to-black border border-gold-500/40 p-6 sm:p-8 shadow-2xl relative my-8"
        >
          {/* Close button */}
          <button
            onClick={handleResetAndClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              {/* Modal Header */}
              <div className="text-center space-y-2 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gold-400 to-amber-700 flex items-center justify-center mx-auto shadow-lg shadow-gold-500/20 border border-gold-300">
                  <Crown className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black font-display text-white uppercase tracking-tight">
                  WELCOME TO THE <span className="text-gradient-gold">KINGDOM.</span>
                </h3>
                <p className="text-xs text-zinc-400 font-light">
                  Select your preferred membership plan & branch to reserve your spot.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-300 font-bold mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-700 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 text-white text-sm placeholder:text-zinc-600 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-300 font-bold mb-1.5">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98XXX XXXXX"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-700 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 text-white text-sm placeholder:text-zinc-600 outline-none transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-300 font-bold mb-1.5">
                      Preferred Branch
                    </label>
                    <select
                      value={selectedBranch}
                      onChange={(e) => setSelectedBranch(e.target.value)}
                      className="w-full px-3 py-3 rounded-xl bg-zinc-900 border border-zinc-700 focus:border-gold-400 text-white text-xs outline-none cursor-pointer"
                    >
                      {branches.map((b) => (
                        <option key={b.id} value={b.id}>
                          {b.name} (Surat)
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-300 font-bold mb-1.5">
                      Membership Plan
                    </label>
                    <select
                      value={selectedPlan}
                      onChange={(e) => setSelectedPlan(e.target.value)}
                      className="w-full px-3 py-3 rounded-xl bg-zinc-900 border border-zinc-700 focus:border-gold-400 text-white text-xs outline-none cursor-pointer"
                    >
                      {membershipPlans.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.name} ({p.price})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-300 font-bold mb-1.5">
                    Primary Fitness Goal
                  </label>
                  <select
                    value={fitnessGoal}
                    onChange={(e) => setFitnessGoal(e.target.value)}
                    className="w-full px-3 py-3 rounded-xl bg-zinc-900 border border-zinc-700 focus:border-gold-400 text-white text-xs outline-none cursor-pointer"
                  >
                    {trainingGoals.map((g) => (
                      <option key={g.id} value={g.id}>
                        {g.label} ({g.headline})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-black text-xs uppercase tracking-wider bg-gradient-to-r from-gold-400 via-gold-500 to-amber-600 text-black shadow-lg shadow-gold-500/25 hover:brightness-110 active:scale-98 transition-all"
                  >
                    REQUEST MEMBERSHIP
                  </button>
                  <p className="text-[10px] text-zinc-500 text-center mt-2">
                    * Demo enquiry mode. No payment will be processed.
                  </p>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-gold-400/20 border border-gold-400/40 text-gold-400 flex items-center justify-center mx-auto shadow-xl">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest text-gold-400 font-bold">
                  KING'S GYM SURAT
                </span>
                <h3 className="text-3xl font-black font-display text-white uppercase">
                  REQUEST RECEIVED.
                </h3>
              </div>

              <p className="text-sm text-zinc-300 max-w-sm mx-auto font-light leading-relaxed">
                "You're one step closer to becoming stronger."
              </p>

              <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-400 max-w-sm mx-auto space-y-1 text-left">
                <p><span className="text-white font-semibold">Applicant:</span> {fullName}</p>
                <p><span className="text-white font-semibold">Contact:</span> {phone}</p>
                <p><span className="text-white font-semibold">Status:</span> Demo enquiry submitted successfully.</p>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleResetAndClose}
                  className="px-8 py-3 rounded-xl bg-gold-400 text-black font-bold text-xs uppercase tracking-wider hover:bg-gold-300 transition-colors"
                >
                  CLOSE
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default MembershipModal
