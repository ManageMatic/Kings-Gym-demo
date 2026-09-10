import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import SectionHeading from '../components/SectionHeading'
import GalleryGrid from '../components/GalleryGrid'
import MembershipModal from '../components/MembershipModal'
import CustomCursor from '../components/CustomCursor'

export default function GalleryPage() {
  const [membershipOpen, setMembershipOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white selection:bg-gold-500 selection:text-black pt-28">
      <CustomCursor />
      <Navbar onJoinClick={() => setMembershipOpen(true)} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeading
          label="VISUAL SHOWCASE"
          title="INSIDE THE KINGDOM. PHOTO GALLERY."
          subtitle="Explore our heavy iron sectors, 30m sprint turf tracks, dynamic Zumba dance studios, and executive locker rooms across Surat."
          center
        />

        <GalleryGrid />
      </main>

      <Footer />
      <FloatingWhatsApp onJoinClick={() => setMembershipOpen(true)} />
      <MembershipModal isOpen={membershipOpen} onClose={() => setMembershipOpen(false)} />
    </div>
  )
}
