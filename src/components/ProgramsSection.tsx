import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'
import { Section, Container, SectionHeader, AnimatedCard } from './ui/SharedUI'
import { programs, goals } from '../data/constants'

interface ProgramsSectionProps {
  onJoinClick: () => void
}

export default function ProgramsSection({ onJoinClick }: ProgramsSectionProps) {
  const [activeGoal, setActiveGoal] = useState(0)
  const goal = goals[activeGoal]

  return (
    <Section id="programs">
      <Container>
        <SectionHeader
          badge="WORLD-CLASS PROTOCOLS"
          title="TRAIN WITH"
          titleGold="PURPOSE."
          subtitle="Structured, scientific, and result-oriented training programs tailored for all levels."
        />

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {programs.map((prog, i) => (
            <AnimatedCard key={i} delay={i * 0.08}>
              <div className="bg-bg-card border border-border-subtle rounded-xl p-8 min-h-[320px]
                flex flex-col justify-between relative overflow-hidden transition-all duration-300
                hover:border-border-gold hover:bg-bg-card-hover hover:-translate-y-1.5 hover:shadow-[var(--shadow-card)]
                group
                before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px]
                before:bg-[linear-gradient(90deg,transparent,var(--color-gold-400),transparent)]
                before:opacity-0 before:transition-opacity hover:before:opacity-100">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display text-xl font-extrabold text-gold-400">{prog.num}</span>
                    <div className="w-11 h-11 rounded-full bg-gold-500/8 border border-border-gold
                      flex items-center justify-center text-gold-300 text-lg">
                      {prog.icon}
                    </div>
                  </div>
                  <h3 className="font-display text-2xl text-white mb-3">{prog.title}</h3>
                  <p className="text-text-secondary text-[0.95rem] leading-relaxed">{prog.description}</p>
                </div>
                <a href="#goal-selector" className="inline-flex items-center gap-2 text-sm font-bold tracking-wider uppercase
                  text-gold-300 mt-6">
                  EXPLORE PROTOCOL <span className="transition-transform duration-200 group-hover:translate-x-1.5">→</span>
                </a>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Goal Selector */}
        <AnimatedCard delay={0.2}>
          <div id="goal-selector" className="mt-14 bg-[#111116] border border-border-gold rounded-2xl p-10
            shadow-[var(--shadow-card)]">
            <div className="text-center mb-8">
              <span className="badge-gold">INTERACTIVE GOAL SELECTOR</span>
              <h3 className="font-display text-3xl text-white mt-2">WHAT ARE YOU TRAINING FOR?</h3>
              <p className="text-text-secondary mt-2">Select your primary fitness aspiration to get your custom King's Gym blueprint.</p>
            </div>

            {/* Goal Pills */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {goals.map((g, i) => (
                <button
                  key={g.key}
                  onClick={() => setActiveGoal(i)}
                  className={`py-5 px-4 rounded-xl font-display text-base font-bold uppercase
                    flex flex-col items-center gap-2 transition-all duration-300 border
                    ${i === activeGoal
                      ? 'bg-[linear-gradient(135deg,rgba(212,175,55,0.2)_0%,rgba(212,175,55,0.05)_100%)] border-gold-400 text-gold-300 shadow-[0_0_20px_rgba(212,175,55,0.12)]'
                      : 'bg-white/[0.03] border-border-subtle text-white hover:border-gold-500/50 hover:bg-gold-500/5'
                    }`}
                >
                  <span className="text-2xl">{g.emoji}</span>
                  <span>{g.label}</span>
                </button>
              ))}
            </div>

            {/* Result Display */}
            <AnimatePresence mode="wait">
              <motion.div
                key={goal.key}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-[rgba(10,10,14,0.7)] border border-white/[0.06]
                  rounded-xl p-10"
              >
                <div>
                  <span className="badge-gold mb-3">{goal.badge}</span>
                  <h4 className="font-display text-2xl text-white mt-3 mb-3">{goal.title}</h4>
                  <p className="text-gold-300 font-semibold text-[0.95rem] mb-5">{goal.subtitle}</p>
                  <ul className="flex flex-col gap-3">
                    {[
                      { label: 'Weekly Split', value: goal.split },
                      { label: 'Nutrition Protocol', value: goal.nutrition },
                      { label: 'Focus', value: goal.focus },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-[0.95rem] text-text-secondary">
                        <Check className="w-4 h-4 text-gold-400 flex-shrink-0 mt-1" />
                        <span>
                          <strong className="text-white">{item.label}:</strong> {item.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center flex flex-col items-center justify-center lg:border-l lg:border-white/8 lg:pl-10">
                  <p className="text-sm text-text-secondary uppercase tracking-wider mb-2">
                    Ready to unleash your potential?
                  </p>
                  <h5 className="font-display text-2xl text-white mb-6">START YOUR JOURNEY TODAY</h5>
                  <button
                    onClick={onJoinClick}
                    className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold tracking-wider uppercase rounded-lg
                      bg-gradient-to-br from-gold-300 to-gold-500 text-[#0d0d10] border border-gold-300
                      shadow-[var(--shadow-gold)] hover:shadow-[var(--shadow-gold-hover)] hover:-translate-y-0.5 transition-all duration-300"
                  >
                    START YOUR JOURNEY →
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </AnimatedCard>
      </Container>
    </Section>
  )
}
