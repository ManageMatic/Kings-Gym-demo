// ===================================================================
// KING'S GYM — Shared Data, Types & Constants
// ===================================================================

export interface BranchData {
  id: string
  num: string
  title: string
  tagline: string
  address: string
  timings: string
  phone: string
  image: string
  amenities: string[]
  mapQuery: string
}

export interface ProgramData {
  num: string
  title: string
  description: string
  icon: string
}

export interface GoalData {
  key: string
  emoji: string
  label: string
  title: string
  subtitle: string
  split: string
  nutrition: string
  focus: string
  badge: string
}

export interface PricingData {
  id: string
  duration: string
  cost: string
  note: string
  popular?: boolean
  features: string[]
}

export interface TrainerData {
  name: string
  specialty: string
  experience: string
  image: string
  style?: React.CSSProperties
}

export interface TransformationData {
  beforeWeight: string
  beforeNote: string
  afterWeight: string
  afterNote: string
  name: string
  goal: string
  testimonial: string
}

export interface ReviewData {
  stars: number
  text: string
  initials: string
  name: string
  branch: string
}

// ===================================================================
// BRANCHES
// ===================================================================

export const branches: BranchData[] = [
  {
    id: 'parvat',
    num: 'BRANCH 01',
    title: 'PARVAT PATIYA',
    tagline: 'Heavy Iron & Powerlifting Epicenter',
    address: 'Near Royal Palace / Model Town, Parvat Patiya, Surat, Gujarat 395010',
    timings: 'Mon - Sat: 05:30 AM – 10:30 PM | Sun: 06:00 AM – 01:00 PM (Demo)',
    phone: '+91 98XXX XXXXX (Demo)',
    image: '/images/branch_parvat.jpg',
    amenities: ['Heavy Dumbbells (up to 60kg)', 'Olympic Power Racks', 'Deadlift Platforms', 'Steam & Sauna', 'Certified Strength Coaches', 'Dedicated Parking'],
    mapQuery: 'Parvat Patiya Surat',
  },
  {
    id: 'godadara',
    num: 'BRANCH 02',
    title: 'GODADARA',
    tagline: 'High-Energy Functional & Athletic Arena',
    address: 'Maharana Pratap Chowk Main Road, Godadara, Surat, Gujarat 395012',
    timings: 'Mon - Sat: 05:30 AM – 10:30 PM | Sun: 06:00 AM – 01:00 PM (Demo)',
    phone: '+91 98XXX XXXXX (Demo)',
    image: '/images/branch_godadara.jpg',
    amenities: ['30m Indoor Turf Sprint Track', 'CrossFit Rig & Battle Ropes', 'Rowers & Assault Bikes', 'Zumba & Group HIIT Studio', 'Personal Nutritionist Desk', 'Locker & Shower Zone'],
    mapQuery: 'Godadara Surat',
  },
  {
    id: 'dindoli',
    num: 'BRANCH 03',
    title: 'DINDOLI',
    tagline: 'Luxury Aesthetic & Biomechanical Fitness Hub',
    address: 'Kharwasa Road / Royal Arcade, Dindoli, Surat, Gujarat 394210',
    timings: 'Mon - Sat: 05:30 AM – 10:30 PM | Sun: 06:00 AM – 01:00 PM (Demo)',
    phone: '+91 98XXX XXXXX (Demo)',
    image: '/images/branch_dindoli.jpg',
    amenities: ['Biomechanical Pin-Loaded Deck', 'Ambient Golden Backlit Mirrors', 'Cardio Panoramic Zone', 'Private Personal Training Deck', 'Protein Smoothie Bar', 'Advanced Body Composition Scan'],
    mapQuery: 'Dindoli Surat',
  },
]

// ===================================================================
// LOCALITY → BRANCH MAPPING
// ===================================================================

export const localityMap: Record<string, { branch: string; name: string; distance: string; travel: string }> = {
  parvat_patiya: { branch: 'parvat', name: 'Parvat Patiya Branch', distance: '0.8 km', travel: '3 mins' },
  model_town: { branch: 'parvat', name: 'Parvat Patiya Branch', distance: '1.2 km', travel: '4 mins' },
  varachha: { branch: 'parvat', name: 'Parvat Patiya Branch', distance: '3.5 km', travel: '10 mins' },
  punagam: { branch: 'parvat', name: 'Parvat Patiya Branch', distance: '2.1 km', travel: '6 mins' },
  godadara: { branch: 'godadara', name: 'Godadara Branch', distance: '0.5 km', travel: '2 mins' },
  maharana_pratap: { branch: 'godadara', name: 'Godadara Branch', distance: '0.9 km', travel: '3 mins' },
  limbayat: { branch: 'godadara', name: 'Godadara Branch', distance: '2.4 km', travel: '7 mins' },
  dindoli: { branch: 'dindoli', name: 'Dindoli Branch', distance: '0.7 km', travel: '2 mins' },
  kharwasa: { branch: 'dindoli', name: 'Dindoli Branch', distance: '1.4 km', travel: '4 mins' },
  pandesara: { branch: 'dindoli', name: 'Dindoli Branch', distance: '3.8 km', travel: '11 mins' },
  other: { branch: 'parvat', name: 'Parvat Patiya / Godadara', distance: 'Surat Central', travel: '12 mins' },
}

export const localityOptions = [
  { value: 'parvat_patiya', label: 'Parvat Patiya (Surat)' },
  { value: 'model_town', label: 'Model Town / Magob' },
  { value: 'varachha', label: 'Varachha / Mini Bazar' },
  { value: 'punagam', label: 'Punagam / Kargil Chowk' },
  { value: 'godadara', label: 'Godadara Main Road' },
  { value: 'maharana_pratap', label: 'Maharana Pratap Chowk' },
  { value: 'limbayat', label: 'Limbayat / Udhna' },
  { value: 'dindoli', label: 'Dindoli / Royal Arcade' },
  { value: 'kharwasa', label: 'Kharwasa Road / Millenium' },
  { value: 'pandesara', label: 'Pandesara / Udhna' },
  { value: 'other', label: 'Other Area in Surat' },
]

// ===================================================================
// PROGRAMS
// ===================================================================

export const programs: ProgramData[] = [
  { num: '01', title: 'STRENGTH', description: 'Build raw strength and peak performance with calibrated barbell lifts and progressive power mechanics.', icon: '🏋️' },
  { num: '02', title: 'MUSCLE BUILDING', description: 'Structured training for hypertrophy, muscle density, symmetry, and aesthetic physical development.', icon: '💪' },
  { num: '03', title: 'FAT LOSS', description: 'High-energy metabolic conditioning focused on maximizing calorie burn, stamina, and lean body composition.', icon: '🔥' },
  { num: '04', title: 'ZUMBA & GROUP HIIT', description: 'High-energy group fitness sessions blending rhythm, cardiovascular fitness, calorie burn, and fun.', icon: '⚡' },
  { num: '05', title: 'PERSONAL TRAINING', description: '1-on-1 private coaching, tailored nutrition blueprint, and uncompromising accountability for rapid transformation.', icon: '👑' },
  { num: '06', title: 'GENERAL FITNESS', description: 'Build everyday mobility, joint health, cardiovascular endurance, and sustainable lifetime consistency.', icon: '🏃' },
]

// ===================================================================
// GOALS
// ===================================================================

export const goals: GoalData[] = [
  {
    key: 'muscle',
    emoji: '💪',
    label: 'BUILD MUSCLE',
    title: 'Hypertrophy & Physique Sculpting',
    subtitle: 'Recommended Program: Muscle Building & Progressive Overload',
    split: '4 to 5 Days / Week Upper-Lower or Push-Pull-Legs Split',
    nutrition: 'High Protein intake (1.8g - 2.2g per kg bodyweight) with slight caloric surplus',
    focus: 'Targeted mind-muscle connection, mechanical tension, heavy compound movements & drop sets.',
    badge: 'HYPERTROPHY SPECIALIST AVAILABLE',
  },
  {
    key: 'fatloss',
    emoji: '🔥',
    label: 'LOSE FAT',
    title: 'High-Energy Fat Burn & Metabolic Conditioning',
    subtitle: 'Recommended Program: Fat Loss & Athletic HIIT Conditioning',
    split: '5 Days / Week: 3 Strength Sessions + 2 Functional HIIT/Zumba',
    nutrition: 'Calculated caloric deficit with nutrient-dense high-fiber meals & hydration tracking',
    focus: 'Excess Post-Exercise Oxygen Consumption (EPOC), circuit training and cardiovascular stamina.',
    badge: 'FAT LOSS COACHING INCLUDED',
  },
  {
    key: 'strength',
    emoji: '🏋️',
    label: 'GET STRONGER',
    title: 'Raw Power & Performance Mastery',
    subtitle: 'Recommended Program: Heavy Strength & Powerlifting Protocol',
    split: '3 to 4 Days / Week Heavy Squat, Bench Press, Deadlift & Overhead Press',
    nutrition: 'Performance fueling with optimal intra-workout carbs and creatine supplementation',
    focus: 'Central nervous system adaptation, bar speed, RPE-based periodization & form correction.',
    badge: 'OLYMPIC BARBELL DECK',
  },
  {
    key: 'fitness',
    emoji: '⚡',
    label: 'GET FIT',
    title: 'Total Body Mobility, Stamina & Longevity',
    subtitle: 'Recommended Program: General Fitness & Functional Movement',
    split: '3 to 4 Days / Week Full Body Circuit & Mobility Drill Work',
    nutrition: 'Balanced whole foods diet focusing on consistent energy and joint health',
    focus: 'Functional posture correction, core stability, active recovery and joyful movement.',
    badge: 'ALL FITNESS LEVELS WELCOME',
  },
]

// ===================================================================
// PRICING
// ===================================================================

export const pricingPlans: PricingData[] = [
  {
    id: 'monthly',
    duration: 'MONTHLY',
    cost: '₹XXX',
    note: 'DEMO PRICE • PER MONTH',
    features: ['Full Gym & Floor Access', 'General Training Support', 'Locker Room & Shower Access', 'Fitness Orientation Demo'],
  },
  {
    id: 'quarterly',
    duration: 'QUARTERLY',
    cost: '₹XXX',
    note: 'DEMO PRICE • 3 MONTHS',
    features: ['Access to All 3 Branches', 'Bi-Weekly Trainer Check-in', 'Group Zumba / HIIT Classes', 'Locker & Steam Access'],
  },
  {
    id: 'halfyearly',
    duration: 'HALF YEARLY',
    cost: '₹XXX',
    note: 'DEMO PRICE • 6 MONTHS',
    features: ['Multi-Branch Passport Access', 'Complete Body Composition Scans', 'Personalized Workout Blueprint', 'Nutrition Consultation Session'],
  },
  {
    id: 'yearly',
    duration: 'YEARLY VIP',
    cost: '₹XXX',
    note: 'DEMO PRICE • BEST VALUE',
    popular: true,
    features: ['Unlimited 3-Branch VIP Access', 'Dedicated Coach Accountability', 'Custom Diet & Supplement Guidance', 'Free King\'s Gym Welcome Kit', '1 Month Membership Freeze Option'],
  },
]

// ===================================================================
// TRAINERS
// ===================================================================

export const trainers: TrainerData[] = [
  { name: 'TRAINER VIKRAM', specialty: 'Head Strength & Conditioning', experience: '8+ Years Experience (Demo Profile)', image: '/images/trainer_1.jpg' },
  { name: 'TRAINER PRIYA', specialty: 'Hypertrophy & Female Fitness', experience: '6+ Years Experience (Demo Profile)', image: '/images/trainer_2.jpg' },
  { name: 'TRAINER RAHUL', specialty: 'Functional HIIT & Athletic Mobility', experience: '5+ Years Experience (Demo Profile)', image: '/images/trainer_1.jpg', style: { filter: 'hue-rotate(30deg)' } },
  { name: 'TRAINER AMIT', specialty: 'Fat Loss & Body Transformation', experience: '7+ Years Experience (Demo Profile)', image: '/images/trainer_2.jpg', style: { filter: 'brightness(0.9) contrast(1.1)' } },
]

// ===================================================================
// TRANSFORMATIONS
// ===================================================================

export const transformations: TransformationData[] = [
  {
    beforeWeight: '88 KG', beforeNote: '28% Body Fat',
    afterWeight: '73 KG', afterNote: '12% Body Fat • 16 Wks',
    name: 'Rahul P.', goal: 'Fat Loss & Athletic Conditioning',
    testimonial: "King's Gym atmosphere in Surat completely rewired my discipline. The coaches helped me stay accountable every single day.",
  },
  {
    beforeWeight: '58 KG', beforeNote: 'Skinny / Low Energy',
    afterWeight: '71 KG', afterNote: 'Lean Muscle • 24 Wks',
    name: 'Karan S.', goal: 'Hypertrophy & Muscle Gain',
    testimonial: 'The heavy iron equipment and guidance on diet was next-level. I gained 13kg of solid muscle!',
  },
  {
    beforeWeight: '76 KG', beforeNote: 'Sedentary Lifestyle',
    afterWeight: '64 KG', afterNote: 'Toned & Energized • 12 Wks',
    name: 'Neha M.', goal: 'General Fitness & Toning',
    testimonial: 'Safe, welcoming, and high-energy environment for women. Best gym experience in Godadara!',
  },
]

// ===================================================================
// REVIEWS
// ===================================================================

export const reviews: ReviewData[] = [
  {
    stars: 5,
    text: "Easily the most aesthetic and serious gym in Surat. The equipment maintenance is top notch, and the music and lighting get you locked into your workout immediately.",
    initials: 'HP', name: 'Hardik Patel', branch: 'Parvat Patiya Branch • Member for 1 Year',
  },
  {
    stars: 5,
    text: "The turf sprint track and functional setup at Godadara is unmatched. Great group HIIT sessions and very polite staff. Highly recommend for fat loss!",
    initials: 'MS', name: 'Manish Sharma', branch: 'Godadara Branch • Member for 8 Months',
  },
  {
    stars: 5,
    text: "Dindoli branch has gorgeous backlit ambiance and certified trainers who actually pay attention to posture. Clean locker rooms and great protein smoothies!",
    initials: 'AD', name: 'Anjali Desai', branch: 'Dindoli Branch • Member for 6 Months',
  },
]

// ===================================================================
// GALLERY
// ===================================================================

export interface GalleryItem {
  src: string
  alt: string
  tag: string
  title: string
  category: string
  large?: boolean
}

export const galleryItems: GalleryItem[] = [
  { src: '/images/hero.jpg', alt: "King's Gym Interior", tag: 'PARVAT PATIYA', title: 'Main Power Floor', category: 'gym', large: true },
  { src: '/images/branch_parvat.jpg', alt: "Dumbbell Rack King's Gym", tag: 'HEAVY IRON', title: 'Dumbbell Array up to 60KG', category: 'equipment' },
  { src: '/images/branch_godadara.jpg', alt: 'Functional Turf Area', tag: 'GODADARA', title: 'Functional Sled Track', category: 'training' },
  { src: '/images/branch_dindoli.jpg', alt: 'Dindoli Luxury Gym', tag: 'DINDOLI', title: 'Aesthetic Machine Deck', category: 'gym' },
  { src: '/images/trainer_1.jpg', alt: 'Personal Training Session', tag: 'COACHING', title: '1-on-1 Form Refinement', category: 'people' },
  { src: '/images/trainer_2.jpg', alt: 'Community Athlete Session', tag: 'COMMUNITY', title: 'Empowered Athletes', category: 'people' },
]

export const galleryFilters = ['all', 'gym', 'training', 'equipment', 'people']

// ===================================================================
// FACILITIES
// ===================================================================

export interface FacilityData {
  icon: string
  title: string
  description: string
}

export const facilities: FacilityData[] = [
  { icon: '🏋️', title: 'STRENGTH ZONE', description: 'Olympic power racks, calibrated plates, deadlift platforms, and heavy isolation machines.' },
  { icon: '🏃', title: 'CARDIO DECK', description: 'Commercial treadmills, stairmasters, curved runners, and assault bikes with heart-rate tracking.' },
  { icon: '⚡', title: 'FUNCTIONAL TURF', description: '30m sprint track, sled pushes, battle ropes, kettlebells, and plyometric boxes.' },
  { icon: '🚿', title: 'LUXURY AMENITIES', description: 'Hygienic locker rooms, invigorating steam/sauna baths, and protein shake refreshment lounge.' },
]
