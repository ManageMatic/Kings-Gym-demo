import { useState } from 'react'
import { Section, Container, SectionHeader, AnimatedCard } from './ui/SharedUI'
import { useToast } from './Toast'

export default function ContactSection() {
  const { showToast } = useToast()
  const [form, setForm] = useState({ name: '', phone: '', branch: 'parvat', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    showToast(`Thank you, ${form.name}! Your inquiry has been logged.`)
    setForm({ name: '', phone: '', branch: 'parvat', message: '' })
  }

  return (
    <Section id="contact">
      <Container>
        <SectionHeader
          badge="START YOUR JOURNEY"
          title="YOUR NEXT REP"
          titleGold="STARTS HERE."
          subtitle="Get in touch with our team or drop by any of our 3 branches in Surat."
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-14 mt-8">
          {/* Branch Contacts */}
          <div className="flex flex-col gap-6">
            {[
              { num: '01', name: 'PARVAT PATIYA', addr: 'Near Royal Palace, Parvat Patiya, Surat, Gujarat 395010', map: 'Parvat+Patiya+Surat' },
              { num: '02', name: 'GODADARA', addr: 'Maharana Pratap Chowk Main Road, Godadara, Surat, Gujarat 395012', map: 'Godadara+Surat' },
              { num: '03', name: 'DINDOLI', addr: 'Kharwasa Road / Royal Arcade, Dindoli, Surat, Gujarat 394210', map: 'Dindoli+Surat' },
            ].map((b, i) => (
              <AnimatedCard key={i} delay={i * 0.1}>
                <div className="bg-bg-card border border-border-subtle rounded-xl p-6
                  transition-all duration-300 hover:border-border-gold">
                  <h4 className="font-display text-lg text-gold-300 mb-1.5">BRANCH {b.num} — {b.name}</h4>
                  <p className="text-sm text-text-secondary mb-1">📍 {b.addr}</p>
                  <p className="text-sm text-text-secondary mb-1">📞 Phone: +91 98XXX XXXXX (Demo)</p>
                  <p className="text-sm text-text-secondary mb-3">⏰ 05:30 AM – 10:30 PM (Mon - Sat)</p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=Kings+Gym+${b.map}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold-400 font-bold text-sm hover:text-gold-300 transition-colors"
                  >
                    VIEW ON GOOGLE MAPS ↗
                  </a>
                </div>
              </AnimatedCard>
            ))}
          </div>

          {/* Contact Form */}
          <AnimatedCard delay={0.2}>
            <div className="bg-bg-card border border-border-gold rounded-2xl p-10 shadow-[var(--shadow-card)]">
              <h3 className="font-display text-2xl text-white mb-2">SEND DIRECT ENQUIRY</h3>
              <p className="text-text-secondary text-sm mb-7">
                Fill the form below and our team will get back to you within 2 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm({...form, name: e.target.value})}
                    placeholder="e.g. Rahul Sharma"
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={e => setForm({...form, phone: e.target.value})}
                    placeholder="+91 98765 43210"
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2">Preferred Branch *</label>
                  <select
                    value={form.branch}
                    onChange={e => setForm({...form, branch: e.target.value})}
                    className="form-input cursor-pointer"
                  >
                    <option value="parvat" className="bg-[#14141c]">Parvat Patiya Branch</option>
                    <option value="godadara" className="bg-[#14141c]">Godadara Branch</option>
                    <option value="dindoli" className="bg-[#14141c]">Dindoli Branch</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2">Your Message or Fitness Goal</label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm({...form, message: e.target.value})}
                    rows={3}
                    placeholder="Tell us about your training goals or questions..."
                    className="form-input resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 text-sm font-bold tracking-wider uppercase rounded-lg
                    bg-gradient-to-br from-gold-300 to-gold-500 text-[#0d0d10] border border-gold-300
                    shadow-[var(--shadow-gold)] hover:shadow-[var(--shadow-gold-hover)] hover:-translate-y-0.5
                    transition-all duration-300 flex items-center justify-center gap-2"
                >
                  SEND ENQUIRY →
                </button>
              </form>
            </div>
          </AnimatedCard>
        </div>
      </Container>
    </Section>
  )
}
