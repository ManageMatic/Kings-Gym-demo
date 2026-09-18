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
  instagramHandle: string
  instagramUrl: string
  image: string
  facilities: string[]
  programs: string[]
  mapsUrl: string
  rating: number
  reviewCount: number
  coordinatesNote: string
}

export const branches: Branch[] = [
  {
    id: 'model-town',
    num: 'BRANCH 01',
    name: 'MODEL TOWN',
    tagline: 'Heavy Iron & Strength Performance Kingdom',
    address: '432-436, Shree Punjan Plaza, Opp. Dhumbhal Fire Station, Model Town Rd, Beside Limbayat Zone Office, Surat, Gujarat 395010',
    landmark: 'Opp. Dhumbhal Fire Station, Beside Limbayat Zone Office',
    city: 'Surat, Gujarat',
    timings: 'Mon – Sat: 05:30 AM – 10:30 PM | Sun: 06:00 AM – 01:00 PM',
    phone: '+91 97232 72262',
    whatsapp: 'https://wa.me/919723272262?text=Hi%20King%27s%20Gym%2C%20I%20want%20to%20inquire%20about%20the%20Model%20Town%20branch.',
    instagramHandle: '@kingsgym_modeltown',
    instagramUrl: 'https://www.instagram.com/kingsgym_modeltown/',
    image: '/images/branch_parvat.jpg',
    rating: 4.8,
    reviewCount: 405,
    facilities: [
      'Heavy Dumbbells (up to 60kg)',
      'Olympic Power Racks & Deadlift Deck',
      'High-Performance Isolation Machines',
      'Steam & Recovery Zone',
      'Certified Strength Coaches',
      'Dedicated Basement Parking',
    ],
    programs: ['Strength Training', 'Muscle Building', 'Fat Loss', 'Personal Coaching'],
    mapsUrl: 'https://maps.app.goo.gl/A4GtdajH3kh7AzeS9',
    coordinatesNote: '432-436 Shree Punjan Plaza, Opp. Dhumbhal Fire Station',
  },
  {
    id: 'godadara',
    num: 'BRANCH 02',
    name: 'GODADARA',
    tagline: 'Functional Athletics, HIIT & Cardio Arena',
    address: '3rd Floor, Midas Square, 323-324, Opp. Bharat Petroleum, Godadara, Shakti Nagar, Surat, Gujarat 395012',
    landmark: 'Opp. Bharat Petroleum, Shakti Nagar (Floor 3)',
    city: 'Surat, Gujarat',
    timings: 'Mon – Sat: 05:30 AM – 10:30 PM | Sun: 06:00 AM – 01:00 PM',
    phone: '+91 87330 79422',
    whatsapp: 'https://wa.me/918733079422?text=Hi%20King%27s%20Gym%2C%20I%20want%20to%20inquire%20about%20the%20Godadara%20branch.',
    instagramHandle: '@kingsgym_godadara',
    instagramUrl: 'https://www.instagram.com/kingsgym_godadara/',
    image: '/images/branch_godadara.jpg',
    rating: 4.8,
    reviewCount: 554,
    facilities: [
      '30m Indoor Turf Sprint Track',
      'Functional CrossFit Rig & Battle Ropes',
      'Assault Bikes & Rowers Deck',
      'Zumba & Aerobics High-Energy Studio',
      'Nutritional Counseling Desk',
      'Executive Lockers & Showers',
    ],
    programs: ['Zumba & Dance Fitness', 'Functional HIIT', 'Fat Loss', 'Strength Training'],
    mapsUrl: 'https://maps.app.goo.gl/XxSkXupPabeNocbWA',
    coordinatesNote: '3rd Floor, Midas Square, 323-324, Opp. Bharat Petroleum',
  },
  {
    id: 'dindoli',
    num: 'BRANCH 03',
    name: 'DINDOLI',
    tagline: 'Luxury Aesthetics & Biomechanical Training Hub',
    address: 'Shop No. 302, 3rd Floor, Dream Shoppers, Opp. Police Station, Tirupati Society, Dindoli, Surat, Gujarat 394210',
    landmark: 'Opp. Police Station, Tirupati Society (Floor 3)',
    city: 'Surat, Gujarat',
    timings: 'Mon – Sat: 05:30 AM – 10:30 PM | Sun: 06:00 AM – 01:00 PM',
    phone: '+91 97232 72262',
    whatsapp: 'https://wa.me/919723272262?text=Hi%20King%27s%20Gym%2C%20I%20want%20to%20inquire%20about%20the%20Dindoli%20branch.',
    instagramHandle: '@kingsgym_dindoli',
    instagramUrl: 'https://www.instagram.com/kingsgym_dindoli/',
    image: '/images/branch_dindoli.jpg',
    rating: 4.8,
    reviewCount: 580,
    facilities: [
      'Biomechanical Pin-Loaded Machine Deck',
      'Backlit Golden Ambient Lighting',
      'Panoramic Cardio Training Zone',
      'Private 1-on-1 Transformation Deck',
      'InBody Body Composition Scanner',
      'Protein Shake & Hydration Bar',
    ],
    programs: ['Personal Training', 'Muscle Building', 'General Fitness', 'Postural Correction'],
    mapsUrl: 'https://maps.app.goo.gl/2CwjQoFtjawoSW5Q6',
    coordinatesNote: 'Shop No. 302, Dream Shoppers, Opp. Police Station',
  },
]

export const localityMap: Record<string, { branchId: string; branchName: string; distance: string; travelTime: string }> = {
  model_town: { branchId: 'model-town', branchName: 'Model Town Branch', distance: '0.3 km', travelTime: '1 min' },
  dhumbhal: { branchId: 'model-town', branchName: 'Model Town Branch', distance: '0.2 km', travelTime: '1 min' },
  varachha: { branchId: 'model-town', branchName: 'Model Town Branch', distance: '2.4 km', travelTime: '6 mins' },
  punagam: { branchId: 'model-town', branchName: 'Model Town Branch', distance: '1.8 km', travelTime: '5 mins' },
  saroli: { branchId: 'model-town', branchName: 'Model Town Branch', distance: '2.1 km', travelTime: '5 mins' },
  ring_road: { branchId: 'model-town', branchName: 'Model Town Branch', distance: '3.2 km', travelTime: '8 mins' },
  kamrej: { branchId: 'model-town', branchName: 'Model Town Branch', distance: '7.9 km', travelTime: '15 mins' },
  godadara: { branchId: 'godadara', branchName: 'Godadara Branch', distance: '0.4 km', travelTime: '2 mins' },
  maharana_pratap: { branchId: 'godadara', branchName: 'Godadara Branch', distance: '0.6 km', travelTime: '2 mins' },
  limbayat: { branchId: 'godadara', branchName: 'Godadara Branch', distance: '1.7 km', travelTime: '4 mins' },
  udhna: { branchId: 'godadara', branchName: 'Godadara Branch', distance: '3.1 km', travelTime: '7 mins' },
  dindoli: { branchId: 'dindoli', branchName: 'Dindoli Branch', distance: '0.2 km', travelTime: '1 min' },
  kharwasa: { branchId: 'dindoli', branchName: 'Dindoli Branch', distance: '0.8 km', travelTime: '2 mins' },
  deladva: { branchId: 'dindoli', branchName: 'Dindoli Branch', distance: '1.5 km', travelTime: '4 mins' },
  pandesara: { branchId: 'dindoli', branchName: 'Dindoli Branch', distance: '3.3 km', travelTime: '8 mins' },
  other: { branchId: 'model-town', branchName: 'Model Town Branch', distance: 'Surat Central', travelTime: '10 mins' },
}

export const suratLocalities = [
  { value: 'model_town', label: 'Model Town / Magob' },
  { value: 'dhumbhal', label: 'Dhumbhal / Punjan Plaza / Parvat Area' },
  { value: 'varachha', label: 'Varachha / Mini Bazar' },
  { value: 'punagam', label: 'Punagam / Kargil Chowk' },
  { value: 'saroli', label: 'Saroli / Textile Market' },
  { value: 'ring_road', label: 'Ring Road / Sahara Darwaja' },
  { value: 'godadara', label: 'Godadara Main Road / Shakti Nagar' },
  { value: 'maharana_pratap', label: 'Maharana Pratap Chowk' },
  { value: 'limbayat', label: 'Limbayat / Sanjay Nagar' },
  { value: 'udhna', label: 'Udhna / Teen Rasta' },
  { value: 'dindoli', label: 'Dindoli / Tirupati Society / Police Station' },
  { value: 'kharwasa', label: 'Kharwasa Road / Royal Arcade' },
  { value: 'deladva', label: 'Deladva / Dindoli Ext.' },
  { value: 'pandesara', label: 'Pandesara Industrial Area' },
  { value: 'kamrej', label: 'Kamrej / NH 48' },
  { value: 'other', label: 'Other Location in Surat' },
]
