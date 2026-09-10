import { Section, Container, SectionHeader, AnimatedCard } from './ui/SharedUI'

interface OwnerValueSectionProps {
  onContactClick: () => void
}

export default function OwnerValueSection({ onContactClick }: OwnerValueSectionProps) {
  const values = [
    { icon: '📍', title: 'GET DISCOVERED', desc: 'Dominate Google search when local residents search for gyms in Parvat Patiya, Godadara, and Dindoli. Convert local search intent into gym walk-ins.' },
    { icon: '⚡', title: 'GENERATE LEADS 24/7', desc: 'Capture phone numbers and WhatsApp leads automatically through interactive Free Trial passes and Goal Recommendation selectors.' },
    { icon: '👑', title: 'BUILD YOUR BRAND', desc: "Position King's Gym as Surat's elite luxury fitness authority rather than just another neighborhood gym, commanding higher membership pricing." },
    { icon: '📈', title: 'GROW MEMBERSHIPS', desc: 'Streamline membership renewals, event announcements, and direct WhatsApp inquiries seamlessly across all 3 branches.' },
  ]

  return (
    <Section id="owner-value" className="bg-[radial-gradient(circle_at_80%_20%,rgba(212,175,55,0.1)_0%,#0a0a0e_70%)]
      border-t-2 border-t-gold-500 border-b border-b-white/8">
      <Container>
        <SectionHeader
          badge="DEMO HIGHLIGHT • FOR GYM OWNERS"
          title="YOUR GYM. YOUR"
          titleGold="DIGITAL KINGDOM."
          subtitle="Why a custom, high-converting website unlocks immense revenue and brand supremacy for King's Gym."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-12">
          {values.map((v, i) => (
            <AnimatedCard key={i} delay={i * 0.1}>
              <div className="bg-[rgba(18,18,24,0.9)] border border-border-subtle rounded-xl p-8
                transition-all duration-300 hover:border-gold-400 hover:-translate-y-1.5
                hover:shadow-[0_10px_30px_rgba(212,175,55,0.28)]">
                <div className="w-12 h-12 rounded-lg bg-gold-500/12 border border-border-gold
                  flex items-center justify-center text-xl text-gold-300 mb-5">
                  {v.icon}
                </div>
                <h3 className="font-display text-xl text-white mb-2.5">{v.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{v.desc}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Owner CTA */}
        <AnimatedCard delay={0.3}>
          <div className="mt-14 p-8 bg-gold-500/[0.06] border border-dashed border-border-gold rounded-xl
            flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-display text-xl text-white mb-1">IMPRESSED BY THIS DEMO EXPERIENCE?</h4>
              <p className="text-text-secondary text-[0.95rem]">
                Let's tailor this platform with your exact pricing, trainer roster, and verified photos.
              </p>
            </div>
            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold tracking-wider uppercase rounded-lg
                bg-gradient-to-br from-gold-300 to-gold-500 text-[#0d0d10] border border-gold-300
                shadow-[var(--shadow-gold)] hover:shadow-[var(--shadow-gold-hover)] hover:-translate-y-0.5
                transition-all duration-300 whitespace-nowrap"
            >
              LET'S BUILD YOUR KINGDOM →
            </button>
          </div>
        </AnimatedCard>
      </Container>
    </Section>
  )
}
