import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Crown } from 'lucide-react'
import { useToast } from './Toast'

// ===================================================================
// MEMBERSHIP MODAL
// ===================================================================

interface MembershipModalProps {
  isOpen: boolean
  onClose: () => void
  defaultPlan?: string
}

export function MembershipModal({ isOpen, onClose, defaultPlan = 'yearly' }: MembershipModalProps) {
  const { showToast } = useToast()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', phone: '', branch: 'parvat', plan: defaultPlan, goal: 'muscle',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    showToast(`Demo Request Received for ${form.name}! Welcome to the Kingdom.`)
  }

  const handleClose = () => {
    setSubmitted(false)
    setForm({ name: '', phone: '', branch: 'parvat', plan: defaultPlan, goal: 'muscle' })
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl z-[3000] flex items-center justify-center p-6"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="bg-[#111116] border border-border-gold rounded-2xl max-w-[580px] w-full max-h-[90vh]
              overflow-y-auto p-10 relative shadow-[0_25px_60px_rgba(0,0,0,0.95)]"
            onClick={e => e.stopPropagation()}
          >
            <button onClick={handleClose} className="absolute top-5 right-6 text-text-muted hover:text-white transition-colors bg-transparent">
              <X size={24} />
            </button>

            {!submitted ? (
              <>
                <div className="text-center mb-8">
                  <span className="badge-gold">MEMBERSHIP ENROLMENT</span>
                  <h3 className="font-display text-3xl text-white mt-2">WELCOME TO THE KINGDOM</h3>
                  <p className="text-text-secondary text-sm mt-1">
                    Fill out your details to lock in your membership rate and training slot.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2">Full Name *</label>
                    <input type="text" required value={form.name}
                      onChange={e => setForm({...form, name: e.target.value})}
                      placeholder="e.g. Vikramaditya Singh" className="form-input" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2">Mobile Number *</label>
                    <input type="tel" required value={form.phone}
                      onChange={e => setForm({...form, phone: e.target.value})}
                      placeholder="+91 98765 43210" className="form-input" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2">Preferred Branch *</label>
                    <select value={form.branch} onChange={e => setForm({...form, branch: e.target.value})}
                      className="form-input cursor-pointer">
                      <option value="parvat" className="bg-[#14141c]">Parvat Patiya Branch (Surat)</option>
                      <option value="godadara" className="bg-[#14141c]">Godadara Branch (Surat)</option>
                      <option value="dindoli" className="bg-[#14141c]">Dindoli Branch (Surat)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2">Membership Plan *</label>
                    <select value={form.plan} onChange={e => setForm({...form, plan: e.target.value})}
                      className="form-input cursor-pointer">
                      <option value="yearly" className="bg-[#14141c]">Yearly VIP (Most Popular - ₹XXX)</option>
                      <option value="halfyearly" className="bg-[#14141c]">Half Yearly (6 Months - ₹XXX)</option>
                      <option value="quarterly" className="bg-[#14141c]">Quarterly (3 Months - ₹XXX)</option>
                      <option value="monthly" className="bg-[#14141c]">Monthly (1 Month - ₹XXX)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2">Primary Fitness Goal</label>
                    <select value={form.goal} onChange={e => setForm({...form, goal: e.target.value})}
                      className="form-input cursor-pointer">
                      <option value="muscle" className="bg-[#14141c]">💪 Build Muscle / Hypertrophy</option>
                      <option value="fatloss" className="bg-[#14141c]">🔥 Fat Loss & Toning</option>
                      <option value="strength" className="bg-[#14141c]">🏋️ Get Stronger / Powerlifting</option>
                      <option value="fitness" className="bg-[#14141c]">⚡ General Fitness & Mobility</option>
                    </select>
                  </div>
                  <button type="submit"
                    className="w-full py-3.5 mt-6 text-sm font-bold tracking-wider uppercase rounded-lg
                      bg-gradient-to-br from-gold-300 to-gold-500 text-[#0d0d10] border border-gold-300
                      shadow-[var(--shadow-gold)] hover:shadow-[var(--shadow-gold-hover)] transition-all duration-300
                      flex items-center justify-center gap-2">
                    REQUEST MEMBERSHIP <Crown className="w-4 h-4" />
                  </button>
                </form>
              </>
            ) : (
              /* Success State */
              <div className="text-center py-8">
                <div className="w-[70px] h-[70px] mx-auto mb-6 rounded-full bg-gold-500/15 border-2 border-gold-400
                  flex items-center justify-center text-3xl text-gold-300">
                  ✓
                </div>
                <h4 className="font-display text-2xl text-white mb-2">
                  YOU'RE ONE STEP CLOSER TO BECOMING STRONGER!
                </h4>
                <p className="text-gold-300 font-semibold text-lg mb-4">
                  Welcome, {form.name}!
                </p>
                <p className="text-text-secondary text-[0.95rem] mb-6">
                  Our branch manager from <strong className="text-white">{form.branch.toUpperCase()}</strong> branch
                  will contact you shortly on WhatsApp / Phone with your welcome pack.
                </p>
                <button onClick={handleClose}
                  className="px-8 py-3 text-sm font-bold tracking-wider uppercase rounded-lg
                    bg-white/5 text-white border border-white/8 hover:bg-white/12 transition-all duration-300">
                  CLOSE
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// ===================================================================
// FREE TRIAL MODAL
// ===================================================================

interface TrialModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TrialModal({ isOpen, onClose }: TrialModalProps) {
  const { showToast } = useToast()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', phone: '', branch: 'parvat', date: '', slot: 'morning',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    showToast(`Free Trial Pass Generated for ${form.name}!`)
  }

  const handleClose = () => {
    setSubmitted(false)
    setForm({ name: '', phone: '', branch: 'parvat', date: '', slot: 'morning' })
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl z-[3000] flex items-center justify-center p-6"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="bg-[#111116] border border-border-gold rounded-2xl max-w-[580px] w-full max-h-[90vh]
              overflow-y-auto p-10 relative shadow-[0_25px_60px_rgba(0,0,0,0.95)]"
            onClick={e => e.stopPropagation()}
          >
            <button onClick={handleClose} className="absolute top-5 right-6 text-text-muted hover:text-white transition-colors bg-transparent">
              <X size={24} />
            </button>

            {!submitted ? (
              <>
                <div className="text-center mb-8">
                  <span className="badge-gold">1-DAY VIP PASS</span>
                  <h3 className="font-display text-3xl text-white mt-2">BOOK A FREE TRIAL</h3>
                  <p className="text-text-secondary text-sm mt-1">
                    Experience Surat's supreme workout floor at no cost.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2">Full Name *</label>
                    <input type="text" required value={form.name}
                      onChange={e => setForm({...form, name: e.target.value})}
                      placeholder="e.g. Hardik Patel" className="form-input" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2">Mobile Number (WhatsApp) *</label>
                    <input type="tel" required value={form.phone}
                      onChange={e => setForm({...form, phone: e.target.value})}
                      placeholder="+91 98765 43210" className="form-input" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2">Choose Branch *</label>
                    <select value={form.branch} onChange={e => setForm({...form, branch: e.target.value})}
                      className="form-input cursor-pointer">
                      <option value="parvat" className="bg-[#14141c]">Parvat Patiya Branch</option>
                      <option value="godadara" className="bg-[#14141c]">Godadara Branch</option>
                      <option value="dindoli" className="bg-[#14141c]">Dindoli Branch</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2">Preferred Date *</label>
                    <input type="date" required value={form.date}
                      onChange={e => setForm({...form, date: e.target.value})}
                      className="form-input" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2">Preferred Time Slot</label>
                    <select value={form.slot} onChange={e => setForm({...form, slot: e.target.value})}
                      className="form-input cursor-pointer">
                      <option value="morning" className="bg-[#14141c]">🌅 Morning (06:00 AM - 10:00 AM)</option>
                      <option value="evening" className="bg-[#14141c]">🌆 Evening (05:00 PM - 09:00 PM)</option>
                      <option value="afternoon" className="bg-[#14141c]">☀️ Afternoon (12:00 PM - 04:00 PM)</option>
                    </select>
                  </div>
                  <button type="submit"
                    className="w-full py-3.5 mt-6 text-sm font-bold tracking-wider uppercase rounded-lg
                      bg-gradient-to-br from-gold-300 to-gold-500 text-[#0d0d10] border border-gold-300
                      shadow-[var(--shadow-gold)] hover:shadow-[var(--shadow-gold-hover)] transition-all duration-300
                      flex items-center justify-center gap-2">
                    GENERATE FREE TRIAL PASS ⚡
                  </button>
                </form>
              </>
            ) : (
              /* Trial Pass Card */
              <div className="text-center py-4">
                <div className="bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.2)_0%,#15151f_80%)]
                  border-2 border-dashed border-gold-400 rounded-xl p-8 mb-6">
                  <div className="text-xs tracking-[0.2em] text-gold-400 font-extrabold">KING'S GYM SURAT</div>
                  <div className="text-2xl font-black text-white mt-2">VIP 1-DAY TRIAL PASS</div>
                  <div className="text-lg text-gold-300 font-bold mt-1">{form.name}</div>
                  <div className="text-sm text-[#ccc] mt-3">
                    Branch: <strong className="text-white">{form.branch.toUpperCase()}</strong> |
                    Date: <span>{form.date || 'Tomorrow'}</span>
                  </div>
                  <div className="text-4xl mt-4">🎟️</div>
                  <div className="text-xs text-text-muted mt-2">
                    Show this pass at front desk for complimentary floor & locker access.
                  </div>
                </div>
                <button onClick={handleClose}
                  className="px-8 py-3 text-sm font-bold tracking-wider uppercase rounded-lg
                    bg-white/5 text-white border border-white/8 hover:bg-white/12 transition-all duration-300">
                  DONE
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
