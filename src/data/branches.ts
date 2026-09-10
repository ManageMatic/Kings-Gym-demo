export interface Branch {
  id: string
  num: string
  name: string
  tagline: string
  address: string
  landmark: string
  city: string
  timings: string
  phone: string
  whatsapp: string
  image: string
  facilities: string[]
  programs: string[]
  mapsUrl: string
  coordinatesNote: string
}

export const branches: Branch[] = [
  {
    id: 'parvat-patiya',
    num: 'BRANCH 01',
    name: 'PARVAT PATIYA',
    tagline: 'Heavy Iron & Strength Performance Kingdom',
    address: 'Shree Punjan Plaza, opposite Dhumbhal Fire Station, Surat, Gujarat 395010',
    landmark: 'Opposite Dhumbhal Fire Station',
    city: 'Surat, Gujarat',
    timings: 'Mon – Sat: 05:30 AM – 10:30 PM | Sun: 06:00 AM – 01:00 PM (Demo Timing)',
    phone: '+91 98XXX XXXXX (Add Official Number)',
    whatsapp: '+91 98XXX XXXXX (Add Official WhatsApp)',
    image: '/images/branch_parvat.jpg',
    facilities: [
      'Heavy Dumbbells (up to 60kg)',
      'Olympic Power Racks & Deadlift Deck',
      'High-Performance Isolation Machines',
      'Steam & Recovery Zone',
      'Certified Strength Coaches',
      'Dedicated Basement Parking',
    ],
    programs: ['Strength Training', 'Muscle Building', 'Fat Loss', 'Personal Coaching'],
    mapsUrl: 'https://maps.google.com/?q=Shree+Punjan+Plaza+Dhumbhal+Fire+Station+Surat',
    coordinatesNote: 'Confirmed Address: Shree Punjan Plaza, opp. Dhumbhal Fire Station',
  },
  {
    id: 'godadara',
    num: 'BRANCH 02',
    name: 'GODADARA',
    tagline: 'Functional Athletics, HIIT & Cardio Arena',
    address: 'Near Maharana Pratap Chowk Main Road, Godadara, Surat, Gujarat 395012',
    landmark: 'Near Maharana Pratap Chowk',
    city: 'Surat, Gujarat',
    timings: 'Mon – Sat: 05:30 AM – 10:30 PM | Sun: 06:00 AM – 01:00 PM (Demo Timing)',
    phone: '+91 98XXX XXXXX (Add Official Number)',
    whatsapp: '+91 98XXX XXXXX (Add Official WhatsApp)',
    image: '/images/branch_godadara.jpg',
    facilities: [
      '30m Indoor Turf Sprint Track',
      'Functional CrossFit Rig & Battle Ropes',
      'Assault Bikes & Rowers Deck',
      'Zumba & Aerobics High-Energy Studio',
      'Nutritional Counseling Desk',
      'Executive Lockers & Showers',
    ],
    programs: ['Zumba & Dance Fitness', 'Functional HIIT', 'Fat Loss', 'Strength Training'],
    mapsUrl: 'https://maps.google.com/?q=Godadara+Surat+Gujarat',
    coordinatesNote: 'Demo Location — Confirm exact building name with gym owner',
  },
  {
    id: 'dindoli',
    num: 'BRANCH 03',
    name: 'DINDOLI',
    tagline: 'Luxury Aesthetics & Biomechanical Training Hub',
    address: 'Kharwasa Road / Royal Arcade Zone, Dindoli, Surat, Gujarat 394210',
    landmark: 'Kharwasa Main Road',
    city: 'Surat, Gujarat',
    timings: 'Mon – Sat: 05:30 AM – 10:30 PM | Sun: 06:00 AM – 01:00 PM (Demo Timing)',
    phone: '+91 98XXX XXXXX (Add Official Number)',
    whatsapp: '+91 98XXX XXXXX (Add Official WhatsApp)',
    image: '/images/branch_dindoli.jpg',
    facilities: [
      'Biomechanical Pin-Loaded Machine Deck',
      'Backlit Golden Ambient Lighting',
      'Panoramic Cardio Training Zone',
      'Private 1-on-1 Transformation Deck',
      'InBody Body Composition Scanner',
      'Protein Shake & Hydration Bar',
    ],
    programs: ['Personal Training', 'Muscle Building', 'General Fitness', 'Postural Correction'],
    mapsUrl: 'https://maps.google.com/?q=Dindoli+Surat+Gujarat',
    coordinatesNote: 'Demo Location — Confirm exact building name with gym owner',
  },
]

export const localityMap: Record<string, { branchId: string; branchName: string; distance: string; travelTime: string }> = {
  parvat_patiya: { branchId: 'parvat-patiya', branchName: 'Parvat Patiya Branch', distance: '0.8 km', travelTime: '3 mins' },
  model_town: { branchId: 'parvat-patiya', branchName: 'Parvat Patiya Branch', distance: '1.2 km', travelTime: '4 mins' },
  varachha: { branchId: 'parvat-patiya', branchName: 'Parvat Patiya Branch', distance: '3.4 km', travelTime: '9 mins' },
  punagam: { branchId: 'parvat-patiya', branchName: 'Parvat Patiya Branch', distance: '2.1 km', travelTime: '6 mins' },
  godadara: { branchId: 'godadara', branchName: 'Godadara Branch', distance: '0.5 km', travelTime: '2 mins' },
  maharana_pratap: { branchId: 'godadara', branchName: 'Godadara Branch', distance: '0.9 km', travelTime: '3 mins' },
  limbayat: { branchId: 'godadara', branchName: 'Godadara Branch', distance: '2.3 km', travelTime: '7 mins' },
  dindoli: { branchId: 'dindoli', branchName: 'Dindoli Branch', distance: '0.6 km', travelTime: '2 mins' },
  kharwasa: { branchId: 'dindoli', branchName: 'Dindoli Branch', distance: '1.3 km', travelTime: '4 mins' },
  pandesara: { branchId: 'dindoli', branchName: 'Dindoli Branch', distance: '3.7 km', travelTime: '11 mins' },
  other: { branchId: 'parvat-patiya', branchName: 'Parvat Patiya / Godadara Branch', distance: 'Surat Central', travelTime: '12 mins' },
}

export const suratLocalities = [
  { value: 'parvat_patiya', label: 'Parvat Patiya / Dhumbhal' },
  { value: 'model_town', label: 'Model Town / Magob' },
  { value: 'varachha', label: 'Varachha / Mini Bazar' },
  { value: 'punagam', label: 'Punagam / Kargil Chowk' },
  { value: 'godadara', label: 'Godadara Main Road' },
  { value: 'maharana_pratap', label: 'Maharana Pratap Chowk' },
  { value: 'limbayat', label: 'Limbayat / Udhna' },
  { value: 'dindoli', label: 'Dindoli / Royal Arcade' },
  { value: 'kharwasa', label: 'Kharwasa Road' },
  { value: 'pandesara', label: 'Pandesara Industrial Area' },
  { value: 'other', label: 'Other Location in Surat' },
]
