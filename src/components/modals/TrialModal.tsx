import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Flame, CheckCircle2, Calendar, Clock, MapPin } from 'lucide-react'
import { branches } from '../../data/branches'

interface TrialModalProps {
  isOpen: boolean
  onClose: () => void
}

export const TrialModal: React.FC<TrialModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [branch, setBranch] = useState('parvat-patiya')
  const [date, setDate] = useState('')
  const [timeSlot, setTimeSlot] = useState('morning-07')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleResetAndClose = () => {
    setSubmitted(false)
    setName('')
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
          className="w-full max-w-lg rounded-3xl bg-gradient-to-b from-zinc-900 via-zinc-950 to-black border border-amber-400/40 p-6 sm:p-8 shadow-2xl relative my-8"
        >
          {/* Close button */}
          <button
            onClick={handleResetAndClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              {/* Modal Header */}
              <div className="text-center space-y-2 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-700 flex items-center justify-center mx-auto shadow-lg shadow-amber-500/20 border border-amber-300">
                  <Flame className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black font-display text-white uppercase tracking-tight">
                  READY TO ENTER THE <span className="text-gradient-gold">KINGDOM?</span>
                </h3>
                <p className="text-xs text-zinc-400 font-light">
                  "Your first workout starts with one decision."
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-300 font-bold mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Hardik Patel"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-700 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-white text-sm placeholder:text-zinc-600 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-300 font-bold mb-1.5">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98XXX XXXXX"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-700 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-white text-sm placeholder:text-zinc-600 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-300 font-bold mb-1.5">
                    Select Branch
                  </label>
                  <select
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                    className="w-full px-3 py-3 rounded-xl bg-zinc-900 border border-zinc-700 focus:border-amber-400 text-white text-xs outline-none cursor-pointer"
                  >
                    {branches.map((b) => (
                      <option key={b.id} value={b.id}>
                        {b.name} ({b.landmark})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-300 font-bold mb-1.5 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-amber-400" />
                      <span>Preferred Date</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 focus:border-amber-400 text-white text-xs outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-300 font-bold mb-1.5 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span>Preferred Time</span>
                    </label>
                    <select
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="w-full px-3 py-3 rounded-xl bg-zinc-900 border border-zinc-700 focus:border-amber-400 text-white text-xs outline-none cursor-pointer"
                    >
                      <option value="morning-06">06:00 AM – 08:00 AM (Early)</option>
                      <option value="morning-08">08:00 AM – 10:00 AM (Peak Morning)</option>
                      <option value="afternoon">12:00 PM – 04:00 PM (Quiet Hours)</option>
                      <option value="evening-06">06:00 PM – 08:00 PM (Prime Evening)</option>
                      <option value="evening-08">08:00 PM – 10:00 PM (Night Lifters)</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-black text-xs uppercase tracking-wider bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black shadow-lg shadow-amber-500/25 hover:brightness-110 active:scale-98 transition-all cursor-pointer"
                  >
                    BOOK MY TRIAL
                  </button>
                  <p className="text-[10px] text-zinc-500 text-center mt-2">
                    * 100% Free 1-Day Access Pass • Demo Confirmation
                  </p>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-400 flex items-center justify-center mx-auto shadow-xl">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
                  KING'S GYM PASS CONFIRMED
                </span>
                <h3 className="text-3xl font-black font-display text-white uppercase">
                  TRIAL BOOKED!
                </h3>
              </div>

              <p className="text-sm text-zinc-300 max-w-sm mx-auto font-light leading-relaxed">
                Welcome to King's Gym, <span className="text-white font-semibold">{name}</span>. Your 1-day complimentary workout pass is registered.
              </p>

              <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-400 max-w-sm mx-auto space-y-1.5 text-left">
                <p className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-amber-400" /> <span className="text-white font-semibold">Branch:</span> {branches.find(b => b.id === branch)?.name || 'Parvat Patiya'}</p>
                <p className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-amber-400" /> <span className="text-white font-semibold">Date:</span> {date || 'Tomorrow'}</p>
                <p className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-amber-400" /> <span className="text-white font-semibold">Slot:</span> {timeSlot}</p>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleResetAndClose}
                  className="px-8 py-3 rounded-xl bg-amber-400 text-black font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-colors cursor-pointer"
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

export default TrialModal
