import { Section, Container, SectionHeader, AnimatedCard } from './ui/SharedUI'
import { reviews } from '../data/constants'

export default function ReviewsSection() {
  return (
    <Section id="reviews" className="bg-[#0d0d12]">
      <Container>
        <SectionHeader
          badge="MEMBER VOICES"
          title="THE KINGDOM"
          titleGold="SPEAKS."
          subtitle="Read feedback from members training across Parvat Patiya, Godadara, and Dindoli."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <AnimatedCard key={i} delay={i * 0.12}>
              <div className="bg-bg-card border border-border-subtle rounded-2xl p-8 flex flex-col justify-between h-full
                transition-all duration-300 hover:border-border-gold hover:-translate-y-1">
                <div>
                  <div className="text-gold-400 text-lg tracking-wider mb-4">
                    {'★'.repeat(review.stars)}
                  </div>
                  <p className="text-[#e0e0ec] italic leading-relaxed text-[0.95rem] mb-6">
                    "{review.text}"
                  </p>
                </div>

                <div className="flex items-center gap-3.5 border-t border-border-subtle pt-4">
                  <div className="w-11 h-11 rounded-full bg-[#252535] border border-border-gold
                    flex items-center justify-center font-bold text-gold-300 text-sm">
                    {review.initials}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{review.name}</div>
                    <div className="text-xs text-text-muted">{review.branch}</div>
                    <span className="badge-demo mt-1 inline-block">Demo Testimonial</span>
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
