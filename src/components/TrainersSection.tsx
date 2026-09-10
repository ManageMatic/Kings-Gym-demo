import { Section, Container, SectionHeader, AnimatedCard } from './ui/SharedUI'
import { trainers } from '../data/constants'

export default function TrainersSection() {
  return (
    <Section id="trainers" className="bg-[#0d0d12]">
      <Container>
        <SectionHeader
          badge="EXPERT COACHING SQUAD"
          title="MEET YOUR"
          titleGold="TRAINING SQUAD."
          subtitle="Dedicated fitness professionals committed to guiding your form, mindset, and performance."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, i) => (
            <AnimatedCard key={i} delay={i * 0.1}>
              <div className="bg-bg-card border border-border-subtle rounded-xl overflow-hidden
                transition-all duration-300 hover:-translate-y-2 hover:border-border-gold hover:shadow-[var(--shadow-card)] group">
                {/* Image */}
                <div className="relative h-[360px] overflow-hidden bg-[#15151c]">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    style={trainer.style}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(10,10,14,0.95)_100%)]" />
                </div>

                {/* Info */}
                <div className="p-6 relative">
                  <h3 className="font-display text-xl text-white mb-1">{trainer.name}</h3>
                  <div className="text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3">
                    {trainer.specialty}
                  </div>
                  <div className="text-xs text-text-muted">{trainer.experience}</div>
                  <div className="mt-4 text-xs font-bold uppercase tracking-wider text-gold-300
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    VIEW PROFILE →
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </Container>
    </Section>
  )
}
