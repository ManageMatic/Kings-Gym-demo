import { useState } from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import FloatingWhatsApp from '../components/layout/FloatingWhatsApp'
import SectionHeading from '../components/common/SectionHeading'
import ProgramCard from '../components/cards/ProgramCard'
import MembershipModal from '../components/modals/MembershipModal'
import { programs, trainingGoals } from '../data/programs'
import { motion } from 'framer-motion'

export default function ProgramsPage() {
  const [membershipOpen, setMembershipOpen] = useState(false)
  const [selectedGoalId, setSelectedGoalId] = useState('muscle')

  const activeGoal = trainingGoals.find((g) => g.id === selectedGoalId) || trainingGoals[0]

  return (
    <div className="min-h-screen bg-black text-white selection:bg-gold-500 selection:text-black pt-28">
      <Navbar onJoinClick={() => setMembershipOpen(true)} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
        <div>
          <SectionHeading
            label="TRAINING PROTOCOLS"
            title="TRAIN WITH PURPOSE. DISCIPLINE OVER EVERYTHING."
            subtitle="Every body is built differently. Choose the training discipline tailored specifically to your physical transformation goals in Surat."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {programs.map((program) => (
              <ProgramCard
                key={program.num}
                program={program}
                onJoinClick={() => setMembershipOpen(true)}
              />
            ))}
          </div>
        </div>

        {/* Goal Selector */}
        <div className="p-6 sm:p-10 rounded-3xl bg-zinc-950 border border-gold-500/30 shadow-2xl relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="text-xs uppercase tracking-widest text-gold-400 font-bold">
              DYNAMIC WORKOUT MATCHING
            </span>
            <h3 className="text-3xl sm:text-4xl font-black font-display uppercase tracking-tight text-white">
              WHAT ARE YOU TRAINING FOR?
            </h3>
            <p className="text-sm text-zinc-400 font-light">
              Select your primary goal to see your recommended training split, nutrition focus, and specialized coaching blueprint.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              {trainingGoals.map((g) => (
                <button
                  key={g.id}
                  onClick={() => setSelectedGoalId(g.id)}
                  className={`p-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                    selectedGoalId === g.id
                      ? 'bg-gradient-to-r from-gold-400 to-amber-600 text-black shadow-lg shadow-gold-500/20 scale-105'
                      : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800 border border-zinc-800'
                  }`}
                >
                  <span>{g.icon}</span>
                  <span>{g.label}</span>
                </button>
              ))}
            </div>

            <motion.div
              key={activeGoal.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 p-6 rounded-2xl bg-black/60 border border-zinc-800 text-left space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800 pb-3">
                <div>
                  <span className="text-[10px] uppercase font-bold text-gold-400 tracking-widest">
                    RECOMMENDED GOAL BLUEPRINT
                  </span>
                  <h4 className="text-xl sm:text-2xl font-black font-display text-white uppercase mt-0.5">
                    {activeGoal.headline}
                  </h4>
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gold-500/20 text-gold-400 border border-gold-500/30 shrink-0">
                  {activeGoal.badgeText}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-zinc-300 pt-2">
                <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <span className="text-[10px] uppercase text-zinc-500 font-bold block mb-1">
                    TRAINING SPLIT
                  </span>
                  <p className="font-medium text-white">{activeGoal.trainingSplit}</p>
                </div>

                <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <span className="text-[10px] uppercase text-zinc-500 font-bold block mb-1">
                    NUTRITION STRATEGY
                  </span>
                  <p className="font-medium text-white">{activeGoal.nutritionTip}</p>
                </div>

                <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <span className="text-[10px] uppercase text-zinc-500 font-bold block mb-1">
                    RECOMMENDED PROGRAMS
                  </span>
                  <p className="font-semibold text-gold-400">{activeGoal.recommendedPrograms.join(' • ')}</p>
                </div>
              </div>

              <div className="pt-2 text-center sm:text-right">
                <button
                  onClick={() => setMembershipOpen(true)}
                  className="px-6 py-3 rounded-xl bg-gold-400 text-black font-bold text-xs uppercase tracking-wider hover:bg-gold-300 transition-colors"
                >
                  START YOUR JOURNEY →
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp onJoinClick={() => setMembershipOpen(true)} />
      <MembershipModal isOpen={membershipOpen} onClose={() => setMembershipOpen(false)} />
    </div>
  )
}
