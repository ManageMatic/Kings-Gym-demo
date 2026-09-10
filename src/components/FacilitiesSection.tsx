import { Section, Container, SectionHeader, AnimatedCard } from './ui/SharedUI'
import { facilities } from '../data/constants'

export default function FacilitiesSection() {
  return (
    <Section id="facilities" className="bg-[#0b0b0f]">
      <Container>
        <SectionHeader
          badge="PREMIUM INFRASTRUCTURE"
          title="BUILT TO PUSH"
          titleGold="LIMITS."
          subtitle="Precision biomechanics, heavy iron, functional turf, and luxury amenities across all branches."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((f, i) => (
            <AnimatedCard key={i} delay={i * 0.1}>
              <div className="bg-bg-card border border-border-subtle rounded-xl p-8 text-center
                transition-all duration-300 hover:border-border-gold hover:-translate-y-1.5 hover:bg-bg-card-hover">
                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-gold-500/8 border border-border-gold
                  flex items-center justify-center text-2xl text-gold-300">
                  {f.icon}
                </div>
                <h3 className="font-display text-xl text-white mb-2">{f.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{f.description}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </Container>
    </Section>
  )
}
