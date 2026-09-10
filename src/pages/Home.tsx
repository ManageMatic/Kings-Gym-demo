import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Crown, Sparkles, Flame, ArrowRight, CheckCircle2, Phone, Mail, Send, ChevronDown, ChevronUp, ShieldCheck, Award, HeartHandshake, MapPin } from 'lucide-react'

// Components
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import BranchSelector from '../components/BranchSelector'
import ProgramCard from '../components/ProgramCard'
import TrainerCard from '../components/TrainerCard'
import MembershipCard from '../components/MembershipCard'
import TransformationCard from '../components/TransformationCard'
import GalleryGrid from '../components/GalleryGrid'
import TestimonialCard from '../components/TestimonialCard'
import MembershipModal from '../components/MembershipModal'
import TrialModal from '../components/TrialModal'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import Footer from '../components/Footer'
import { WhatsAppIcon } from '../components/SocialIcons'

// Data
import { programs, trainingGoals } from '../data/programs'
import { trainers } from '../data/trainers'
import { membershipPlans } from '../data/memberships'
import { testimonials, transformations } from '../data/testimonials'
import { equipmentCategories, socialPosts, ownerBenefits } from '../data/gallery'
import { branches } from '../data/branches'

export default function Home() {
  const [membershipOpen, setMembershipOpen] = useState(false)
  const [trialOpen, setTrialOpen] = useState(false)
  const [isStoryExpanded, setIsStoryExpanded] = useState(false)
  const [defaultPlan, setDefaultPlan] = useState('yearly')
  const [selectedGoalId, setSelectedGoalId] = useState('muscle')

  // Contact form state
  const [contactName, setContactName] = useState('')
  const [contactPhone, setContactPhone] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [contactBranch, setContactBranch] = useState('parvat-patiya')
  const [contactMsg, setContactMsg] = useState('')
  const [contactSent, setContactSent] = useState(false)

  const activeGoal = trainingGoals.find((g) => g.id === selectedGoalId) || trainingGoals[0]

  const openMembership = useCallback((planId?: string) => {
    setDefaultPlan(planId || 'yearly')
    setMembershipOpen(true)
  }, [])

  const openTrial = useCallback(() => {
    setTrialOpen(true)
  }, [])

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setContactSent(true)
  }

  return (
    <div className="min-h-screen bg-[#060608] text-white selection:bg-amber-400 selection:text-black">
      <Navbar onJoinClick={() => openMembership()} />

      {/* 1. HERO SECTION */}
      <Hero
        onJoinClick={() => openMembership()}
        onExploreClick={() => {
          const el = document.getElementById('branches')
          if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 70
            window.scrollTo({ top: y, behavior: 'smooth' })
          }
        }}
      />

      {/* 2. INTRODUCTION / MANIFESTO */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-black via-zinc-950 to-black relative overflow-hidden border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="badge-gold"
          >
            <Crown className="w-3.5 h-3.5" />
            <span>THE KINGDOM PHILOSOPHY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-4xl md:text-5xl font-black font-display uppercase tracking-wide leading-tight [word-spacing:0.18em]"
          >
            THIS IS NOT JUST A GYM. <br />
            <span className="text-gradient-gold">IT'S YOUR KINGDOM.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm sm:text-lg text-zinc-300 font-light max-w-xl mx-auto leading-relaxed"
          >
            Every rep builds discipline. Every session builds character. Every transformation starts with one decision.
          </motion.p>
        </div>
      </section>

      {/* 3. ABOUT SECTION */}
      <section id="about" className="pt-8 sm:pt-12 pb-16 sm:pb-20 bg-[#060608] relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column: Ultra-Realistic Generated Fitness Photo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group aspect-[4/5] max-w-md mx-auto lg:max-w-none"
            >
              <img
                src="/images/about.jpg"
                alt="Strength Training Inside King's Gym Surat"
                className="w-full h-full object-cover brightness-90 group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-widest bg-black/80 backdrop-blur-md border border-amber-400/40 text-amber-300">
                  ESTABLISHED TO REDEFINE FITNESS IN SURAT
                </span>
                <p className="text-xs sm:text-sm font-semibold text-white mt-1">
                  High-Intensity Commercial Floor Equipment & Certified Mentorship
                </p>
              </div>
            </motion.div>

            {/* Right Column: Copy, Statistics & Story */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <SectionHeading
                label="ABOUT KING'S GYM"
                title="MORE THAN A GYM. A COMMUNITY OF CHAMPIONS."
                subtitle="King's Gym is built for people who refuse to settle. Whether you're beginning your fitness journey, building strength, losing fat or chasing your next personal best, the goal remains the same — become stronger than yesterday."
              />

              {/* Statistics Grid */}
              <div className="grid grid-cols-3 gap-3 pt-1">
                <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-white/10 text-center">
                  <span className="text-2xl sm:text-3xl font-black font-display text-gradient-gold block">
                    3
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold mt-0.5 block">
                    LOCATIONS
                  </span>
                  <span className="text-[9px] text-zinc-600 block">Surat, Gujarat</span>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-white/10 text-center">
                  <span className="text-2xl sm:text-3xl font-black font-display text-gradient-gold block">
                    1
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold mt-0.5 block">
                    MISSION
                  </span>
                  <span className="text-[9px] text-zinc-600 block">Peak Physical Mastery</span>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-white/10 text-center">
                  <span className="text-2xl sm:text-3xl font-black font-display text-gradient-gold block">
                    7
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold mt-0.5 block">
                    DAYS A WEEK
                  </span>
                  <span className="text-[9px] text-zinc-600 block">Open for Training</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => openMembership()}
                  className="btn-gold text-xs"
                >
                  JOIN THE KINGDOM
                </button>

                <button
                  onClick={() => setIsStoryExpanded(!isStoryExpanded)}
                  className="btn-secondary text-xs cursor-pointer flex items-center gap-2"
                >
                  <span>{isStoryExpanded ? 'COLLAPSE STORY' : 'OUR STORY'}</span>
                  {isStoryExpanded ? (
                    <ChevronUp className="w-4 h-4 text-amber-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-amber-400" />
                  )}
                </button>
              </div>
            </motion.div>
          </div>

          {/* INLINE EXPANDABLE OUR STORY SHOWCASE */}
          <AnimatePresence>
            {isStoryExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -10 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: -10 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="overflow-hidden mt-8"
              >
                <div className="p-6 sm:p-10 rounded-3xl bg-zinc-950/95 border border-amber-400/30 shadow-2xl relative">
                  <div className="max-w-4xl mx-auto space-y-6">
                    {/* Header badge & Title */}
                    <div className="text-center space-y-2">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-[10px] font-bold tracking-[0.2em] uppercase">
                        <Crown className="w-3 h-3" />
                        <span>FORGED IN SURAT, GUJARAT</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-black font-display uppercase tracking-tight text-white">
                        THE STORY BEHIND <span className="text-gradient-gold">KING'S GYM</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 font-light italic max-w-2xl mx-auto">
                        "We didn't set out to build another generic gym. We set out to build a Kingdom of strength, discipline, and authentic brotherly mentorship."
                      </p>
                    </div>

                    {/* Founding Story Narrative */}
                    <div className="p-5 sm:p-6 rounded-2xl bg-zinc-900/60 border border-white/5 space-y-3">
                      <h4 className="text-sm sm:text-base font-bold text-amber-300 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-amber-400" />
                        <span>THE FOUNDING VISION</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                        King's Gym was founded with a singular conviction: Surat deserved an elite fitness institution that matched international luxury standards while preserving genuine community warmth and local pride.
                      </p>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                        We stripped away the fluff and invested where it matters most: commercial 11-gauge heavy steel racks, knurled calibrated plates, biomechanically correct isolation machines, and certified coaches who genuinely care about posture and long-term results.
                      </p>
                    </div>

                    {/* 3 Core Pillars */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 rounded-2xl bg-zinc-900/80 border border-amber-400/20 space-y-2">
                        <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                        <h5 className="text-xs sm:text-sm font-bold font-display uppercase text-white">
                          ZERO SHORTCUTS
                        </h5>
                        <p className="text-[11px] text-zinc-400 font-light leading-relaxed">
                          Pure progressive overload, scientifically calibrated weights, and pristine equipment hygiene on every single set.
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-zinc-900/80 border border-amber-400/20 space-y-2">
                        <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                          <Award className="w-4 h-4" />
                        </div>
                        <h5 className="text-xs sm:text-sm font-display font-bold uppercase text-white">
                          UNBROKEN STANDARD
                        </h5>
                        <p className="text-[11px] text-zinc-400 font-light leading-relaxed">
                          Certified trainers with international accreditation who tailor routines to your anatomy and real life.
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-zinc-900/80 border border-amber-400/20 space-y-2">
                        <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                          <HeartHandshake className="w-4 h-4" />
                        </div>
                        <h5 className="text-xs sm:text-sm font-display font-bold uppercase text-white">
                          ROYAL BROTHERHOOD
                        </h5>
                        <p className="text-[11px] text-zinc-400 font-light leading-relaxed">
                          An ego-free, high-energy environment where first-timers and seasoned athletes lift side-by-side with mutual respect.
                        </p>
                      </div>
                    </div>

                    {/* Surat Footprint & Actions */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
                      <div className="flex items-center gap-2 text-xs text-zinc-400">
                        <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>Surat • Parvat Patiya • Godadara • Dindoli</span>
                      </div>
                      <div className="flex items-center gap-3 w-full sm:w-auto">
                        <button
                          onClick={() => openMembership()}
                          className="btn-gold !py-2.5 !px-5 text-xs font-bold w-full sm:w-auto"
                        >
                          JOIN THE KINGDOM
                        </button>
                        <button
                          onClick={() => setIsStoryExpanded(false)}
                          className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/10 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer w-full sm:w-auto"
                        >
                          COLLAPSE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 4. BRANCH SECTION & 5. FIND YOUR GYM */}
      <section id="branches" className="pt-8 sm:pt-12 pb-16 sm:pb-20 bg-zinc-950/80 border-t border-white/5 relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="OUR SURAT LOCATIONS"
            title="CHOOSE YOUR KINGDOM. 3 PREMIER GYMS."
            subtitle="Three locations. One standard of strength. Experience world-class equipment and motivating atmosphere across Surat."
            center
          />

          <BranchSelector onTrialClick={openTrial} />
        </div>
      </section>

      {/* 6. PROGRAMS */}
      <section id="programs" className="pt-8 sm:pt-12 pb-16 sm:pb-20 bg-[#060608] relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="TRAINING PROTOCOLS"
            title="TRAIN WITH PURPOSE."
            subtitle="Customized disciplines tailored to every goal, from raw barbell strength to dynamic high-calorie dance cardio."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => (
              <ProgramCard
                key={program.num}
                program={program}
                onJoinClick={() => openMembership()}
              />
            ))}
          </div>

          {/* 7. GOAL SELECTOR */}
          <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-amber-400/30 shadow-2xl relative overflow-hidden">
            <div className="max-w-3xl mx-auto text-center space-y-3">
              <span className="badge-gold">
                DYNAMIC WORKOUT MATCHING
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-display uppercase tracking-wide text-white [word-spacing:0.16em]">
                WHAT ARE YOU TRAINING FOR?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-light">
                Select your primary goal to see your recommended training split, nutrition focus, and specialized coaching blueprint.
              </p>

              {/* Goal Option Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                {trainingGoals.map((g) => (
                  <button
                    key={g.id}
                    onClick={() => setSelectedGoalId(g.id)}
                    className={`p-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      selectedGoalId === g.id
                        ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-black shadow-lg shadow-amber-500/20 scale-102'
                        : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-850 border border-white/10'
                    }`}
                  >
                    <span>{g.icon}</span>
                    <span>{g.label}</span>
                  </button>
                ))}
              </div>

              {/* Dynamic Goal Blueprint Card */}
              <div className="mt-5 p-5 rounded-2xl bg-zinc-900/90 border border-white/10 text-left space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                      RECOMMENDED FOCUS
                    </span>
                    <h4 className="text-lg font-black font-display text-white uppercase [word-spacing:0.12em]">
                      {activeGoal.headline}
                    </h4>
                  </div>
                  <button
                    onClick={() => openMembership()}
                    className="btn-gold !py-2 !px-4 text-xs font-bold self-start sm:self-auto"
                  >
                    START THIS PROTOCOL
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-zinc-400 block">
                      WEEKLY SPLIT
                    </span>
                    <p className="font-semibold text-zinc-200">{activeGoal.trainingSplit}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-zinc-400 block">
                      NUTRITION STRATEGY
                    </span>
                    <p className="font-semibold text-zinc-200">{activeGoal.nutritionTip}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-zinc-400 block">
                      RECOMMENDED PROTOCOLS
                    </span>
                    <p className="font-semibold text-amber-300">{activeGoal.recommendedPrograms.join(' • ')}</p>
                  </div>
                </div>

                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  {activeGoal.subhead}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TRAINERS SECTION */}
      <section id="trainers" className="pt-8 sm:pt-12 pb-16 sm:pb-20 bg-zinc-950/80 border-t border-white/5 relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="ELITE MENTORSHIP"
            title="GUIDED BY THE BEST."
            subtitle="Certified, accredited, and dedicated to correcting posture, progressive loading, and long-term athletic longevity."
            center
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainers.map((trainer) => (
              <TrainerCard
                key={trainer.id}
                trainer={trainer}
                onBookSession={openTrial}
              />
            ))}
          </div>

          <p className="text-center text-xs text-zinc-500 mt-6">
            * All trainer profiles shown above are demo representations for presentation purposes.
          </p>
        </div>
      </section>

      {/* 9. MEMBERSHIP SECTION */}
      <section id="membership" className="pt-8 sm:pt-12 pb-16 sm:pb-20 bg-[#060608] relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="MEMBERSHIP TIERS"
            title="YOUR COMMITMENT. YOUR REWARD."
            subtitle="Transparent pricing and multi-branch access options designed to match your dedication level."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch pt-2">
            {membershipPlans.map((plan) => (
              <MembershipCard
                key={plan.id}
                plan={plan}
                onSelect={(planId) => openMembership(planId)}
              />
            ))}
          </div>

          <div className="mt-6 text-center">
            <span className="text-xs text-zinc-500">
              * Pricing shown as DEMO PRICE until verified rates are provided by King's Gym management.
            </span>
          </div>
        </div>
      </section>

      {/* 10. FREE TRIAL SECTION */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border-y border-amber-400/30 relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-3.5 relative z-10">
          <div className="badge-gold">
            <Flame className="w-3.5 h-3.5 animate-pulse" />
            <span>1-DAY COMPLIMENTARY GUEST PASS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black font-display text-white uppercase tracking-wide [word-spacing:0.18em]">
            READY TO ENTER THE <span className="text-gradient-gold">KINGDOM?</span>
          </h2>

          <p className="text-xs sm:text-sm text-zinc-300 font-light max-w-lg mx-auto">
            "Your first workout starts with one decision." Experience the heavy iron, motivating crowd, and premium equipment first-hand.
          </p>

          <div className="pt-2">
            <button
              onClick={openTrial}
              className="btn-gold px-7 py-3 text-xs font-bold"
            >
              BOOK A FREE TRIAL
            </button>
          </div>
        </div>
      </section>

      {/* 11. TRANSFORMATION SECTION */}
      <section className="pt-8 sm:pt-12 pb-16 sm:pb-20 bg-[#060608] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="REAL MEMBER MILESTONES"
            title="RESULTS SPEAK LOUDER."
            subtitle="Proof that consistent progressive overload and disciplined nutrition produce undeniable results."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {transformations.map((t) => (
              <TransformationCard key={t.id} transformation={t} />
            ))}
          </div>

          <p className="text-center text-xs text-zinc-500 mt-5">
            * All transformation stories and metrics are demo representations for client presentation.
          </p>
        </div>
      </section>

      {/* 12. GALLERY SECTION */}
      <section id="gallery" className="pt-8 sm:pt-12 pb-16 sm:pb-20 bg-zinc-950/80 border-t border-white/5 relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="VISUAL SHOWCASE"
            title="INSIDE THE KINGDOM."
            subtitle="Take a visual tour through our heavy iron zones, cardio arenas, sprint turf tracks, and group fitness studios."
            center
          />

          <GalleryGrid />
        </div>
      </section>

      {/* 13. EQUIPMENT SECTION */}
      <section className="pt-8 sm:pt-12 pb-16 sm:pb-20 bg-[#060608] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="HARDWARE & ARSENAL"
            title="BUILT TO PUSH LIMITS."
            subtitle="Engineered for athletes and serious lifters who appreciate heavy steel, smooth pulleys, and knurled grip."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipmentCategories.map((eq) => (
              <div
                key={eq.id}
                className="rounded-2xl overflow-hidden bg-zinc-950/80 border border-white/10 hover:border-amber-400/40 p-4 sm:p-5 flex flex-col justify-between gap-3.5 transition-all duration-300 group"
              >
                <div className="relative h-36 rounded-xl overflow-hidden">
                  <img
                    src={eq.image}
                    alt={eq.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/80 text-[10px] font-black text-amber-400 uppercase tracking-wider border border-amber-400/30">
                    {eq.name}
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-bold font-display text-white uppercase leading-snug">
                    {eq.headline}
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed font-light">
                    {eq.description}
                  </p>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-white/5">
                  {eq.specs.map((s, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="truncate">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. REVIEWS SECTION */}
      <section className="pt-8 sm:pt-12 pb-16 sm:pb-20 bg-zinc-950/80 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="MEMBER VOICES"
            title="THE KINGDOM SPEAKS."
            subtitle="Read what Surat fitness enthusiasts say about the motivating energy, equipment quality, and community at King's Gym."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* 15. SOCIAL MEDIA SECTION */}
      <section className="pt-8 sm:pt-12 pb-16 sm:pb-20 bg-[#060608] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="COMMUNITY FEED"
            title="FOLLOW THE KINGDOM."
            subtitle="Connect with daily workout motivation, member PRs, coach spotlights, and Surat fitness energy."
            center
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialPosts.map((post) => (
              <div
                key={post.id}
                className="rounded-2xl overflow-hidden bg-zinc-950/80 border border-white/10 hover:border-amber-400/40 p-3 space-y-2 transition-colors"
              >
                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.caption}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/80 text-[9px] font-bold text-amber-400 uppercase">
                    {post.tag}
                  </span>
                  <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 text-[9px] text-zinc-300">
                    ❤️ {post.likes}
                  </span>
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">{post.handle}</span>
                  <p className="text-xs text-zinc-400 mt-0.5 line-clamp-2 font-light">
                    {post.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-white/10 text-xs font-bold uppercase tracking-wider text-zinc-200 hover:text-amber-400 transition-colors cursor-pointer">
              <svg className="w-4 h-4 fill-current text-amber-400" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              <span>FOLLOW KING'S GYM (DEMO LINK)</span>
            </span>
          </div>
        </div>
      </section>

      {/* 16. OWNER VALUE SECTION (Client Pitch) */}
      <section id="owner-value" className="py-14 sm:py-20 bg-gradient-to-b from-zinc-950 via-zinc-900 to-black border-y border-amber-400/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="badge-gold mb-2.5">
            <Crown className="w-3.5 h-3.5" />
            <span>CLIENT PRESENTATION SHOWCASE</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-display text-white uppercase tracking-tight">
            YOUR GYM. <br />
            <span className="text-gradient-gold">YOUR DIGITAL KINGDOM.</span>
          </h2>

          <p className="text-xs sm:text-base text-zinc-300 font-light max-w-lg mx-auto mt-2">
            "From discovering your nearest branch to booking a trial — everything starts here."
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 text-left">
            {ownerBenefits.map((b) => (
              <div
                key={b.num}
                className="p-4 sm:p-5 rounded-2xl bg-black/70 border border-amber-400/30 hover:border-amber-400/60 flex flex-col justify-between gap-3 transition-all shadow-xl"
              >
                <div>
                  <span className="text-xl font-black font-display text-amber-400">
                    {b.num}
                  </span>
                  <h4 className="text-sm font-bold font-display text-white uppercase mt-0.5">
                    {b.title}
                  </h4>
                  <p className="text-xs text-zinc-300 mt-1 font-light leading-relaxed">
                    {b.description}
                  </p>
                </div>
                <div className="pt-1.5 flex items-center gap-1.5 text-xs text-amber-400 font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>High ROI Asset</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <button
              onClick={() => {
                const el = document.getElementById('contact')
                if (el) {
                  const y = el.getBoundingClientRect().top + window.scrollY - 65
                  window.scrollTo({ top: y, behavior: 'smooth' })
                }
              }}
              className="btn-gold px-8 py-3.5 text-xs sm:text-sm font-black"
            >
              BUILD THE KINGDOM →
            </button>
          </div>
        </div>
      </section>

      {/* 17. CONTACT SECTION */}
      <section id="contact" className="pt-8 sm:pt-12 pb-16 sm:pb-20 bg-[#060608] relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left: Contact Details */}
            <div className="space-y-4">
              <SectionHeading
                label="GET IN TOUCH"
                title="YOUR NEXT REP STARTS HERE."
                subtitle="Have questions about memberships, personal training, or group classes? Drop an enquiry or reach out directly."
              />

              <div className="space-y-2.5 pt-1">
                <div className="p-3.5 rounded-2xl bg-zinc-950/80 border border-white/10 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider block">
                      DIRECT PHONE
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      +91 98XXX XXXXX (ADD OFFICIAL PHONE)
                    </span>
                  </div>
                </div>

                <a
                  href="https://wa.me/?text=Hi%2C%20I%20want%20to%20inquire%20about%20King%27s%20Gym%20Surat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-zinc-950/80 border border-emerald-500/30 hover:border-emerald-500/60 hover:bg-emerald-950/20 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0 text-emerald-400 group-hover:scale-105 transition-transform">
                      <WhatsAppIcon className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider block">
                        WHATSAPP CHAT (INSTANT RESPONSE)
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-white">
                        +91 98XXX XXXXX (CLICK TO CHAT)
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform mr-2" />
                </a>

                <div className="p-3.5 rounded-2xl bg-zinc-950/80 border border-white/10 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider block">
                      OFFICIAL EMAIL
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      info@kingsgymsurat.demo (ADD OFFICIAL EMAIL)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="p-5 sm:p-7 rounded-2xl bg-zinc-950 border border-white/10 shadow-2xl">
              {!contactSent ? (
                <form onSubmit={handleContactSubmit} className="space-y-3.5">
                  <h3 className="text-base sm:text-lg font-bold font-display text-white uppercase tracking-wide">
                    SEND AN ENQUIRY
                  </h3>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-300 font-bold mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="e.g. Parth Desai"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs sm:text-sm outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-zinc-300 font-bold mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        placeholder="+91 98XXX XXXXX"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs sm:text-sm outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-zinc-300 font-bold mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="you@email.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs sm:text-sm outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-300 font-bold mb-1">
                      Select Branch
                    </label>
                    <select
                      value={contactBranch}
                      onChange={(e) => setContactBranch(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs outline-none focus:border-amber-400 cursor-pointer"
                    >
                      {branches.map((b) => (
                        <option key={b.id} value={b.id}>
                          {b.name} (Surat)
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-300 font-bold mb-1">
                      Message / Question
                    </label>
                    <textarea
                      rows={3}
                      value={contactMsg}
                      onChange={(e) => setContactMsg(e.target.value)}
                      placeholder="Ask about membership pricing, batch timings, or coach availability..."
                      className="w-full px-3.5 py-2 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs sm:text-sm outline-none focus:border-amber-400 resize-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-gold w-full !py-3 text-xs font-bold"
                  >
                    <Send className="w-4 h-4" />
                    <span>SEND ENQUIRY</span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-6 space-y-3">
                  <div className="w-11 h-11 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold font-display uppercase text-white">
                    MESSAGE SENT!
                  </h4>
                  <p className="text-xs text-zinc-300 max-w-xs mx-auto font-light">
                    Thank you {contactName}. Your demo enquiry has been submitted.
                  </p>
                  <button
                    onClick={() => setContactSent(false)}
                    className="btn-secondary !py-2 !px-4 text-xs"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer & Floating Actions */}
      <Footer />
      <FloatingWhatsApp onJoinClick={() => openMembership()} />

      {/* Modals */}
      <MembershipModal
        isOpen={membershipOpen}
        onClose={() => setMembershipOpen(false)}
        defaultPlan={defaultPlan}
      />
      <TrialModal
        isOpen={trialOpen}
        onClose={() => setTrialOpen(false)}
      />
    </div>
  )
}
