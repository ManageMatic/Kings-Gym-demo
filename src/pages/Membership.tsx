import { useState } from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import FloatingWhatsApp from '../components/layout/FloatingWhatsApp'
import SectionHeading from '../components/common/SectionHeading'
import MembershipCard from '../components/cards/MembershipCard'
import MembershipModal from '../components/modals/MembershipModal'
import { membershipPlans } from '../data/memberships'
import { CheckCircle2, Shield } from 'lucide-react'

export default function MembershipPage() {
  const [membershipOpen, setMembershipOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState('yearly')

  const openModal = (planId?: string) => {
    setSelectedPlan(planId || 'yearly')
    setMembershipOpen(true)
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-gold-500 selection:text-black pt-28">
      <Navbar onJoinClick={() => openModal()} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        <SectionHeading
          label="MEMBERSHIP TIERS"
          title="YOUR COMMITMENT. YOUR REWARD."
          subtitle="Choose the membership plan that suits your dedication. Multi-branch privileges, dedicated coach check-ins, and flexible pause options across Surat."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
          {membershipPlans.map((plan) => (
            <MembershipCard
              key={plan.id}
              plan={plan}
              onSelect={(id) => openModal(id)}
            />
          ))}
        </div>

        {/* Benefits Comparison Overview */}
        <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800 space-y-6">
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-gold-400" />
            <h3 className="text-2xl font-black font-display uppercase tracking-tight text-white">
              ALL MEMBERSHIPS INCLUDE:
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-zinc-300">
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
              <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
              <span>Free Body Composition & Posture Analysis</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
              <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
              <span>Certified Floor Trainer Assistance & Form Checks</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
              <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
              <span>Executive Locker, Shower & Changing Rooms</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
              <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
              <span>Access to Calibrated Heavy Dumbbells & Power Racks</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
              <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
              <span>Hydration Stations & Fresh Protein Smoothie Lounge</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
              <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
              <span>Dedicated Safe Parking at All Surat Locations</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp onJoinClick={() => openModal()} />
      <MembershipModal
        isOpen={membershipOpen}
        onClose={() => setMembershipOpen(false)}
        defaultPlan={selectedPlan}
      />
    </div>
  )
}
