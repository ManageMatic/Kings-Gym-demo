import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import SectionHeading from '../components/SectionHeading'
import MembershipModal from '../components/MembershipModal'
import CustomCursor from '../components/CustomCursor'
import { Phone, Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react'
import { branches } from '../data/branches'

export default function ContactPage() {
  const [membershipOpen, setMembershipOpen] = useState(false)
  const [contactName, setContactName] = useState('')
  const [contactPhone, setContactPhone] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [contactBranch, setContactBranch] = useState('parvat-patiya')
  const [contactMsg, setContactMsg] = useState('')
  const [contactSent, setContactSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setContactSent(true)
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-gold-500 selection:text-black pt-28">
      <CustomCursor />
      <Navbar onJoinClick={() => setMembershipOpen(true)} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeading
          label="GET IN TOUCH"
          title="YOUR NEXT REP STARTS HERE. CONTACT US."
          subtitle="Reach out to any of our 3 branches in Surat or send a general membership inquiry."
          center
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-8">
          {/* Left Details */}
          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-zinc-950 border border-zinc-800 space-y-4">
              <h3 className="text-xl font-black font-display text-white uppercase">
                OFFICIAL CONTACT INFORMATION
              </h3>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-400/10 border border-gold-400/30 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider block">
                      PHONE CONTACT
                    </span>
                    <span className="text-sm font-semibold text-white">
                      +91 98XXX XXXXX (ADD OFFICIAL PHONE)
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider block">
                      WHATSAPP SUPPORT
                    </span>
                    <span className="text-sm font-semibold text-white">
                      +91 98XXX XXXXX (ADD OFFICIAL WHATSAPP)
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-400/10 border border-gold-400/30 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider block">
                      EMAIL ADDRESS
                    </span>
                    <span className="text-sm font-semibold text-white">
                      info@kingsgymsurat.demo (ADD OFFICIAL EMAIL)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Branches Card */}
            <div className="p-6 rounded-3xl bg-zinc-950 border border-zinc-800 space-y-4">
              <h3 className="text-lg font-black font-display text-white uppercase">
                SURAT BRANCH ADDRESSES
              </h3>
              <div className="space-y-3">
                {branches.map((b) => (
                  <div key={b.id} className="p-3 rounded-xl bg-black/60 border border-zinc-900 text-xs">
                    <span className="font-bold text-gold-400 uppercase">{b.name}</span>
                    <p className="text-zinc-300 mt-0.5">{b.address}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-zinc-800 shadow-2xl">
            {!contactSent ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-black font-display text-white uppercase tracking-wide">
                  SEND AN ENQUIRY
                </h3>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-300 font-bold mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="e.g. Parth Desai"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white text-sm outline-none focus:border-gold-400 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-300 font-bold mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      placeholder="+91 98XXX XXXXX"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white text-sm outline-none focus:border-gold-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-300 font-bold mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="you@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white text-sm outline-none focus:border-gold-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-300 font-bold mb-1">
                    Select Branch
                  </label>
                  <select
                    value={contactBranch}
                    onChange={(e) => setContactBranch(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white text-xs outline-none focus:border-gold-400 cursor-pointer"
                  >
                    {branches.map((b) => (
                      <option key={b.id} value={b.id}>
                        {b.name} (Surat)
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-300 font-bold mb-1">
                    Message / Question
                  </label>
                  <textarea
                    rows={3}
                    value={contactMsg}
                    onChange={(e) => setContactMsg(e.target.value)}
                    placeholder="Ask about membership pricing, batch timings, or coach availability..."
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white text-sm outline-none focus:border-gold-400 resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-amber-600 text-black font-black text-xs uppercase tracking-wider shadow-lg shadow-gold-500/20 hover:brightness-110 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>SEND ENQUIRY</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 rounded-full bg-gold-400/20 border border-gold-400/40 text-gold-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-2xl font-black font-display uppercase text-white">
                  MESSAGE SENT!
                </h4>
                <p className="text-xs text-zinc-300 max-w-sm mx-auto font-light">
                  Thank you {contactName}. Your demo enquiry has been submitted.
                </p>
                <button
                  onClick={() => setContactSent(false)}
                  className="px-6 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-xs text-white uppercase font-bold"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp onJoinClick={() => setMembershipOpen(true)} />
      <MembershipModal isOpen={membershipOpen} onClose={() => setMembershipOpen(false)} />
    </div>
  )
}
