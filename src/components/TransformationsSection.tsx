import { Section, Container, SectionHeader, AnimatedCard } from './ui/SharedUI'
import { transformations } from '../data/constants'

export default function TransformationsSection() {
  return (
    <Section id="transformations">
      <Container>
        <SectionHeader
          badge="PROVEN TRANSFORMATIONS"
          title="RESULTS SPEAK"
          titleGold="LOUDER."
          subtitle="Real discipline leads to unmatched results. Explore demo member transformation milestones."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {transformations.map((t, i) => (
            <AnimatedCard key={i} delay={i * 0.12}>
              <div className="bg-bg-card border border-border-subtle rounded-2xl p-7 transition-all duration-300
                hover:border-border-gold hover:-translate-y-1.5 hover:shadow-[var(--shadow-card)]">
                {/* Before / After */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="bg-[#161620] border border-white/5 rounded-lg p-5 text-center">
                    <div className="text-xs font-bold tracking-wider uppercase text-text-muted">BEFORE</div>
                    <div className="font-display text-2xl font-extrabold text-white mt-1.5">{t.beforeWeight}</div>
                    <div className="text-xs text-text-secondary mt-0.5">{t.beforeNote}</div>
                  </div>
                  <div className="bg-gold-500/8 border border-border-gold rounded-lg p-5 text-center">
                    <div className="text-xs font-bold tracking-wider uppercase text-gold-400">AFTER</div>
                    <div className="font-display text-2xl font-extrabold text-gold-400 mt-1.5">{t.afterWeight}</div>
                    <div className="text-xs text-text-secondary mt-0.5">{t.afterNote}</div>
                  </div>
                </div>

                <span className="badge-demo mb-3 inline-block">DEMO TRANSFORMATION</span>
                <h4 className="font-display text-lg text-white mb-1">
                  {t.name} — {t.goal}
                </h4>
                <p className="text-sm text-text-secondary italic leading-relaxed">
                  "{t.testimonial}"
                </p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </Container>
    </Section>
  )
}
