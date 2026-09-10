import { Check, Crown } from 'lucide-react'
import { Section, Container, SectionHeader, AnimatedCard } from './ui/SharedUI'
import { pricingPlans } from '../data/constants'

interface MembershipSectionProps {
  onJoinClick: (plan?: string) => void
}

export default function MembershipSection({ onJoinClick }: MembershipSectionProps) {
  return (
    <Section id="membership">
      <Container>
        <SectionHeader
          badge="MEMBERSHIP TIERS"
          title="YOUR COMMITMENT."
          titleGold="YOUR REWARD."
          subtitle="Transparent plans designed to fit your goals. Join the Kingdom today."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          {pricingPlans.map((plan, i) => (
            <AnimatedCard key={plan.id} delay={i * 0.1}>
              <div className={`rounded-2xl p-8 flex flex-col relative h-full transition-all duration-300
                ${plan.popular
                  ? 'border-2 border-gold-400 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.15)_0%,rgba(18,18,24,0.95)_100%)] shadow-[0_0_35px_rgba(212,175,55,0.28)] scale-[1.03] hover:scale-[1.05] hover:-translate-y-1.5'
                  : 'bg-bg-card border border-border-subtle hover:border-border-gold hover:-translate-y-2 hover:bg-bg-card-hover'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold-300 to-gold-500
                    text-black text-[0.7rem] font-extrabold tracking-[0.12em] uppercase px-4 py-1 rounded-full
                    shadow-[0_4px_12px_rgba(0,0,0,0.4)] flex items-center gap-1">
                    <Crown className="w-3 h-3" /> MOST POPULAR
                  </div>
                )}

                <div className="text-sm font-bold tracking-[0.12em] uppercase text-text-secondary mb-2">
                  {plan.duration}
                </div>
                <div className={`font-display text-4xl font-black mb-1 ${plan.popular ? 'text-gold-300' : 'text-white'}`}>
                  {plan.cost}
                </div>
                <div className="text-xs text-gold-400 mb-6">{plan.note}</div>

                <ul className="flex flex-col gap-3 mb-8 flex-grow">
                  {plan.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-2.5 text-sm text-[#d1d1e0]">
                      <Check className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onJoinClick(plan.id)}
                  className={`w-full py-3 text-sm font-bold tracking-wider uppercase rounded-lg transition-all duration-300
                    ${plan.popular
                      ? 'bg-gradient-to-br from-gold-300 to-gold-500 text-[#0d0d10] border border-gold-300 shadow-[var(--shadow-gold)] hover:shadow-[var(--shadow-gold-hover)] hover:-translate-y-0.5'
                      : 'bg-white/5 text-white border border-white/8 hover:bg-white/12 hover:border-white/30 hover:text-gold-300'
                    }`}
                >
                  {plan.popular ? 'JOIN THE KINGDOM' : 'JOIN NOW'}
                </button>
              </div>
            </AnimatedCard>
          ))}
        </div>

        <div className="text-center mt-10">
          <span className="badge-demo">
            *Note: Exact pricing varies by branch and ongoing seasonal offers. Replace with official King's Gym price card upon launch.
          </span>
        </div>
      </Container>
    </Section>
  )
}
