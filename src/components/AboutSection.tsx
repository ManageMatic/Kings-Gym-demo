import { Section, Container, SectionHeader, AnimatedCard } from './ui/SharedUI'

export default function AboutSection() {
  return (
    <Section id="about">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <AnimatedCard>
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-card)] group">
              <div className="absolute inset-0 border border-border-gold rounded-2xl pointer-events-none z-10" />
              <img
                src="/images/branch_parvat.jpg"
                alt="King's Gym Surat Strength Floor"
                className="w-full h-[520px] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                loading="lazy"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 bg-[rgba(14,14,18,0.9)] border border-border-gold rounded-xl
                px-5 py-4 backdrop-blur-xl z-20 flex items-center gap-4">
                <span className="text-3xl">👑</span>
                <div>
                  <strong className="text-white text-sm block">SURAT'S PREMIER GYM</strong>
                  <span className="text-gold-300 text-xs">Built for High Performance</span>
                </div>
              </div>
            </div>
          </AnimatedCard>

          {/* Right: Content */}
          <div>
            <SectionHeader
              badge="ABOUT KING'S GYM"
              title="MORE THAN"
              titleGold="A GYM."
              center={false}
            />
            <p className="text-text-secondary mb-5 leading-relaxed -mt-8">
              King's Gym is built for people who refuse to settle. Whether you're starting your fitness journey,
              building raw strength, losing fat or chasing your next personal best, the goal remains the same —{' '}
              <strong className="text-white">become stronger than yesterday.</strong>
            </p>
            <p className="text-text-secondary leading-relaxed">
              With 3 state-of-the-art facilities across Parvat Patiya, Godadara, and Dindoli,
              we provide Surat with unmatched training equipment, motivating atmosphere, and certified coaching squad.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-5 mt-10">
              {[
                { num: '3', label: 'Locations in Surat', sub: 'Parvat Patiya • Godadara • Dindoli' },
                { num: '7 DAYS', label: 'Weekly Access', sub: 'Early morning till late night' },
                { num: '1 GOAL', label: 'Become Stronger', sub: 'Discipline over motivation' },
                { num: '1000+*', label: 'Demo Community', sub: '*Demo placeholder', isDemo: true },
              ].map((stat, i) => (
                <AnimatedCard key={i} delay={i * 0.1}>
                  <div className="bg-bg-card border border-border-subtle rounded-xl p-6 transition-all duration-300
                    hover:border-border-gold hover:bg-bg-card-hover hover:-translate-y-1">
                    <div className="font-display text-4xl font-extrabold text-gold-300 leading-none">{stat.num}</div>
                    <div className="text-sm uppercase tracking-wider text-white font-semibold mt-2">{stat.label}</div>
                    <div className="text-xs text-text-muted mt-1">
                      {stat.isDemo ? <span className="badge-demo">{stat.sub}</span> : stat.sub}
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>

            <div className="mt-9">
              <a href="#branches" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold tracking-wider uppercase
                rounded-lg text-gold-300 border border-border-gold hover:bg-gold-500 hover:text-[#0a0a0c]
                hover:border-gold-500 hover:shadow-[var(--shadow-gold)] hover:-translate-y-0.5 transition-all duration-300">
                OUR STORY & BRANCHES →
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
