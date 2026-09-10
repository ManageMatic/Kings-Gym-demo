export interface GalleryItem {
  id: string
  title: string
  category: 'gym' | 'training' | 'equipment' | 'events'
  branch: string
  src: string
  aspect: string
  description: string
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Main Strength & Iron Deck',
    category: 'gym',
    branch: 'Parvat Patiya',
    src: '/images/hero.jpg',
    aspect: 'aspect-video',
    description: 'Cinematic powerlifting and machine sector featuring calibrated steel plates and ambient gold halo fixtures.',
  },
  {
    id: 'gal-2',
    title: 'Heavy Barbell Pull Station',
    category: 'training',
    branch: 'Parvat Patiya',
    src: '/images/program_strength.jpg',
    aspect: 'aspect-[4/5]',
    description: 'Heavy deadlift and Olympic bar stations with sound-dampening high-density rubber drop platforms.',
  },
  {
    id: 'gal-3',
    title: 'Functional Sled Turf & HIIT Arena',
    category: 'gym',
    branch: 'Godadara',
    src: '/images/branch_godadara.jpg',
    aspect: 'aspect-video',
    description: '30-meter high-friction sprint turf with push sleds, battle ropes, and agility hurdles.',
  },
  {
    id: 'gal-4',
    title: 'High-Energy Dance & Zumba Studio',
    category: 'events',
    branch: 'Godadara',
    src: '/images/program_zumba.jpg',
    aspect: 'aspect-video',
    description: 'Electrifying group workout masterclasses led by top certified fitness coaches with concert acoustics.',
  },
  {
    id: 'gal-5',
    title: 'Biomechanical Machine Deck',
    category: 'equipment',
    branch: 'Dindoli',
    src: '/images/branch_dindoli.jpg',
    aspect: 'aspect-[4/3]',
    description: 'Precision pin-loaded convergent and divergent movement machines engineered for optimal muscle isolation.',
  },
  {
    id: 'gal-6',
    title: 'Elite 1-on-1 Coaching Session',
    category: 'training',
    branch: 'Parvat Patiya',
    src: '/images/about.jpg',
    aspect: 'aspect-[3/4]',
    description: 'Detailed form instruction, eccentric tempo control, and posture correction during compound lifts.',
  },
  {
    id: 'gal-7',
    title: 'Heavy Dumbbell Array Up to 60kg',
    category: 'equipment',
    branch: 'Parvat Patiya',
    src: '/images/branch_parvat.jpg',
    aspect: 'aspect-[4/3]',
    description: 'Precision knurled solid steel dumbbells spanning from 2.5kg to 60kg in 2.5kg increments.',
  },
  {
    id: 'gal-8',
    title: 'Annual Fitness Championship Demo',
    category: 'events',
    branch: 'Surat Grand Event',
    src: '/images/trainer_1.jpg',
    aspect: 'aspect-[3/4]',
    description: 'Community power meets, member PR celebrations, and annual fitness showdown events.',
  },
]

export interface EquipmentCategory {
  id: string
  name: string
  headline: string
  description: string
  image: string
  specs: string[]
}

export const equipmentCategories: EquipmentCategory[] = [
  {
    id: 'strength',
    name: 'STRENGTH',
    headline: 'Olympic Grade Power Racks & Plate-Loaded Arsenal',
    description: 'Built for extreme load tolerances. Calibrated barbell stations, competition squat cages, and isolated incline/decline presses.',
    image: '/images/program_strength.jpg',
    specs: ['Commercial 11-Gauge Heavy Steel', 'Band Pegs & Safety Spotter Arms', 'Competition Power Bars'],
  },
  {
    id: 'cardio',
    name: 'CARDIO',
    headline: 'Aerobic Stamina & Metabolic Burn Decks',
    description: 'High-impact cardio machines featuring interactive touch telemetry, heart-rate zones, and zero-impact shock absorption.',
    image: '/images/branch_godadara.jpg',
    specs: ['Self-Powered Curved Runners', 'Commercial StairClimbers', 'Assault AirBikes & Concept2 Rowers'],
  },
  {
    id: 'free-weights',
    name: 'FREE WEIGHTS',
    headline: 'Knurled Dumbbell Arrays & Calibrated Irons',
    description: 'Full range of solid steel dumbbells extending to 60KG, heavy kettlebells, EZ bars, and adjustable ergonomic benches.',
    image: '/images/branch_parvat.jpg',
    specs: ['Dumbbells up to 60KG', 'Multi-Angle Incline & Flat Benches', 'Precision Stainless Steel Knurling'],
  },
  {
    id: 'functional',
    name: 'FUNCTIONAL',
    headline: '30m Sled Turf, Rig Systems & Plyometrics',
    description: 'Dedicated athletic performance floor for explosive power, sprint acceleration, battle ropes, and calisthenics rigs.',
    image: '/images/about.jpg',
    specs: ['30m High-Density Sprint Turf', 'Heavy Weight Prowler Sleds', 'Wall-Balls & Wooden Plyo Boxes'],
  },
]

export interface SocialPost {
  id: string
  handle: string
  likes: string
  caption: string
  image: string
  tag: string
}

export const socialPosts: SocialPost[] = [
  {
    id: 'soc-1',
    handle: '@kingsgym.surat (Demo)',
    likes: '1,420',
    caption: 'The standard is unwavering. Heavy iron, deep focus, zero excuses. Train like a King today. #KingsGymSurat #TrainLikeAKing',
    image: '/images/hero.jpg',
    tag: 'POWER FLOOR',
  },
  {
    id: 'soc-2',
    handle: '@kingsgym.surat (Demo)',
    likes: '984',
    caption: 'Saturday Zumba energy at Godadara branch was off the charts! ⚡ Join our next weekend high-energy burn session. #SuratFitness',
    image: '/images/program_zumba.jpg',
    tag: 'ZUMBA SQUAD',
  },
  {
    id: 'soc-3',
    handle: '@kingsgym.surat (Demo)',
    likes: '2,110',
    caption: 'Personal coaching milestone: Form is temporary, discipline is permanent. Shoutout to our dedicated members! #BodyTransformation',
    image: '/images/about.jpg',
    tag: 'COACHING',
  },
  {
    id: 'soc-4',
    handle: '@kingsgym.surat (Demo)',
    likes: '1,830',
    caption: 'New equipment arrival at Parvat Patiya! 60kg dumbbells ready for those heavy pressing days. #HeavyIron #SuratGyms',
    image: '/images/branch_parvat.jpg',
    tag: 'NEW ARRIVALS',
  },
]

export const ownerBenefits = [
  {
    num: '01',
    title: 'GET DISCOVERED',
    description: 'Help Surat fitness enthusiasts discover your nearest branch, facilities, and timings before they ever walk through the door.',
    icon: 'Compass',
  },
  {
    num: '02',
    title: 'GENERATE LEADS',
    description: 'Turn organic website visitors into high-intent free trial bookings and paid membership enquiries directly via WhatsApp and forms.',
    icon: 'TrendingUp',
  },
  {
    num: '03',
    title: 'BUILD YOUR BRAND',
    description: 'Showcase your top coaches, state-of-the-art facilities, certified programs, and real transformations with high-end luxury aesthetics.',
    icon: 'Crown',
  },
  {
    num: '04',
    title: 'GROW MEMBERSHIPS',
    description: 'Give customers a frictionless digital path from first discovery to plan selection and branch commitment across all 3 locations.',
    icon: 'Users',
  },
]
