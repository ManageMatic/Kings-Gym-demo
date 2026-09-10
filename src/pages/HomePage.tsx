import { useState, useCallback } from 'react'
import { ToastProvider } from '../components/Toast'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import ManifestoSection from '../components/ManifestoSection'
import AboutSection from '../components/AboutSection'
import BranchesSection from '../components/BranchesSection'
import ProgramsSection from '../components/ProgramsSection'
import TrainersSection from '../components/TrainersSection'
import MembershipSection from '../components/MembershipSection'
import FreeTrialBanner from '../components/FreeTrialBanner'
import TransformationsSection from '../components/TransformationsSection'
import FacilitiesSection from '../components/FacilitiesSection'
import GallerySection from '../components/GallerySection'
import ReviewsSection from '../components/ReviewsSection'
import SocialSection from '../components/SocialSection'
import OwnerValueSection from '../components/OwnerValueSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import FloatingActions from '../components/FloatingActions'
import { MembershipModal, TrialModal } from '../components/Modals'

export default function HomePage() {
  const [membershipOpen, setMembershipOpen] = useState(false)
  const [trialOpen, setTrialOpen] = useState(false)
  const [defaultPlan, setDefaultPlan] = useState('yearly')

  const openMembership = useCallback((plan?: string) => {
    setDefaultPlan(plan || 'yearly')
    setMembershipOpen(true)
  }, [])

  const openTrial = useCallback(() => {
    setTrialOpen(true)
  }, [])

  const scrollToContact = useCallback(() => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <ToastProvider>
      <Header onJoinClick={() => openMembership()} />

      <main>
        <HeroSection onJoinClick={() => openMembership()} />
        <ManifestoSection />
        <AboutSection />
        <BranchesSection onTrialClick={openTrial} />
        <ProgramsSection onJoinClick={() => openMembership()} />
        <TrainersSection />
        <MembershipSection onJoinClick={openMembership} />
        <FreeTrialBanner onTrialClick={openTrial} />
        <TransformationsSection />
        <FacilitiesSection />
        <GallerySection />
        <ReviewsSection />
        <SocialSection />
        <OwnerValueSection onContactClick={scrollToContact} />
        <ContactSection />
      </main>

      <Footer />
      <FloatingActions onJoinClick={() => openMembership()} />

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
    </ToastProvider>
  )
}
