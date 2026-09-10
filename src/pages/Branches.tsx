import { useState } from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import FloatingWhatsApp from '../components/layout/FloatingWhatsApp'
import SectionHeading from '../components/common/SectionHeading'
import BranchSelector from '../components/sections/BranchSelector'
import TrialModal from '../components/modals/TrialModal'
import MembershipModal from '../components/modals/MembershipModal'

export default function BranchesPage() {
  const [trialOpen, setTrialOpen] = useState(false)
  const [membershipOpen, setMembershipOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white selection:bg-gold-500 selection:text-black pt-28">
      <Navbar onJoinClick={() => setMembershipOpen(true)} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeading
          label="OUR SURAT NETWORK"
          title="CHOOSE YOUR KINGDOM. 3 PREMIER GYMS."
          subtitle="Explore our three strategically located branches across Surat: Parvat Patiya, Godadara, and Dindoli. High-end equipment, certified coaches, and dedicated discipline at every location."
          center
        />

        <BranchSelector onTrialClick={() => setTrialOpen(true)} />
      </main>

      <Footer />
      <FloatingWhatsApp onJoinClick={() => setMembershipOpen(true)} />

      <TrialModal isOpen={trialOpen} onClose={() => setTrialOpen(false)} />
      <MembershipModal isOpen={membershipOpen} onClose={() => setMembershipOpen(false)} />
    </div>
  )
}
