import { Section, Container, AnimatedCard } from './ui/SharedUI'

export default function SocialSection() {
  return (
    <Section className="pb-12">
      <Container className="text-center">
        <AnimatedCard>
          <span className="badge-gold">STAY CONNECTED</span>
          <h2 className="font-display text-[clamp(2.2rem,4vw,3.4rem)] uppercase text-white mt-3 mb-4">
            FOLLOW THE <span className="gold-gradient-text">KINGDOM.</span>
          </h2>
          <p className="text-text-secondary mb-8">
            Join Surat's most vibrant fitness community on Instagram
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold tracking-wider uppercase
              rounded-lg text-gold-300 border border-border-gold hover:bg-gold-500 hover:text-[#0a0a0c]
              hover:border-gold-500 hover:shadow-[var(--shadow-gold)] hover:-translate-y-0.5 transition-all duration-300"
          >
            FOLLOW @KINGSGYM — DEMO 📸
          </a>
        </AnimatedCard>
      </Container>
    </Section>
  )
}
