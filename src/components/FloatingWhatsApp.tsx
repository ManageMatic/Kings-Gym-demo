import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Crown } from 'lucide-react'
import { branches } from '../data/branches'
import { WhatsAppIcon } from './SocialIcons'

interface FloatingWhatsAppProps {
  onJoinClick: () => void
}

export default function FloatingWhatsApp({ onJoinClick }: FloatingWhatsAppProps) {
  const [chatOpen, setChatOpen] = useState(false)
  const [selectedBranch, setSelectedBranch] = useState('parvat-patiya')
  const [userMsg, setUserMsg] = useState('Hi, I want to inquire about King\'s Gym membership and trial session in Surat.')

  const handleSend = () => {
    alert(`[WhatsApp Demo Mode]\nSelected Branch: ${branches.find(b => b.id === selectedBranch)?.name}\nMessage: ${userMsg}\n\nIn production, this opens: https://wa.me/[ADD_OFFICIAL_WHATSAPP_NUMBER] with pre-filled message!`)
    setChatOpen(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* WhatsApp Chat Popover */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-3 w-80 sm:w-96 rounded-2xl bg-zinc-950 border border-emerald-500/40 shadow-2xl overflow-hidden"
          >
            {/* WhatsApp Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border border-white/30">
                  <Crown className="w-5 h-5 text-gold-300" />
                </div>
                <div>
                  <h4 className="text-sm font-bold font-display uppercase tracking-wider">
                    KING'S GYM SURAT
                  </h4>
                  <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                    Online Support (Demo)
                  </p>
                </div>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/10 text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 bg-zinc-900/95 space-y-3 max-h-72 overflow-y-auto">
              {/* Bot greeting */}
              <div className="p-3 rounded-2xl bg-zinc-800 text-xs text-zinc-200 border border-zinc-700/60 max-w-[85%] space-y-1">
                <p className="font-bold text-gold-400">👑 Welcome to the Kingdom!</p>
                <p>How can we assist your fitness journey in Surat today?</p>
                <span className="text-[9px] text-zinc-500 block text-right">Just now</span>
              </div>

              {/* Quick Actions */}
              <div className="space-y-1 pt-1">
                <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold block">
                  CHOOSE YOUR BRANCH
                </span>
                <select
                  value={selectedBranch}
                  onChange={(e) => setSelectedBranch(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-950 border border-zinc-700 text-white text-xs outline-none focus:border-emerald-500"
                >
                  {branches.map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.name} (Surat)
                    </option>
                  ))}
                </select>
              </div>

              {/* Editable User message */}
              <div>
                <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold block mb-1">
                  YOUR MESSAGE
                </span>
                <textarea
                  rows={2}
                  value={userMsg}
                  onChange={(e) => setUserMsg(e.target.value)}
                  className="w-full p-2.5 rounded-lg bg-zinc-950 border border-zinc-700 text-white text-xs outline-none focus:border-emerald-500 resize-none"
                />
              </div>

              <div className="flex gap-2">
                <button
                  onClick={handleSend}
                  className="flex-1 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-colors cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>START CHAT</span>
                </button>
                <button
                  onClick={() => {
                    setChatOpen(false)
                    onJoinClick()
                  }}
                  className="px-3 py-2.5 rounded-xl bg-amber-400 text-black font-bold text-xs uppercase tracking-wider hover:bg-amber-300 cursor-pointer"
                  title="Open Membership Form"
                >
                  <Crown className="w-3.5 h-3.5" />
                </button>
              </div>

              <p className="text-[9px] text-zinc-500 text-center">
                Official WhatsApp: <span className="text-zinc-400">+91 98XXX XXXXX (ADD NUMBER)</span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => setChatOpen(!chatOpen)}
        className="px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2.5 shadow-2xl shadow-emerald-500/40 border border-emerald-300/40 cursor-pointer"
        aria-label="Open WhatsApp Chat"
      >
        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
          <WhatsAppIcon className="w-4 h-4 fill-white text-white" />
        </div>
        <span className="hidden sm:inline">CHAT ON WHATSAPP</span>
        <span className="sm:hidden font-bold">WHATSAPP</span>
      </motion.button>
    </div>
  )
}
