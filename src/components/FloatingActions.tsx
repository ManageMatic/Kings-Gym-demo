import { Crown } from 'lucide-react'

interface FloatingActionsProps {
  onJoinClick: () => void
}

export default function FloatingActions({ onJoinClick }: FloatingActionsProps) {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col items-end gap-3.5 z-[999]">
      {/* Join Now */}
      <button
        onClick={onJoinClick}
        className="inline-flex items-center gap-2 px-5 py-3 rounded-full
          bg-gradient-to-r from-gold-300 to-gold-500 text-[#0a0a0c] text-xs font-extrabold tracking-wider uppercase
          shadow-[var(--shadow-gold)] hover:-translate-y-1 hover:shadow-[var(--shadow-gold-hover)] transition-all duration-300"
      >
        <Crown className="w-4 h-4" />
        JOIN NOW
      </button>

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/919999999999?text=Hello%20King's%20Gym%20Surat!%20I%20am%20interested%20in%20membership%20and%20booking%20a%20free%20trial."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25d366] text-white flex items-center justify-center text-2xl
          shadow-[0_8px_25px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_12px_30px_rgba(37,211,102,0.6)]
          transition-all duration-500"
        aria-label="Chat on WhatsApp"
      >
        💬
      </a>
    </div>
  )
}
