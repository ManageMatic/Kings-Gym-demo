export interface Testimonial {
  id: string
  name: string
  role: string
  branch: string
  rating: number
  text: string
  avatarInitials: string
  isDemo: boolean
}

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Hardik Patel',
    role: 'Business Owner • Powerlifting Enthusiast',
    branch: 'Parvat Patiya Branch (Surat)',
    rating: 5,
    text: 'Easily the most aesthetic and serious gym in Surat. The heavy dumbbell section and calibrated power racks are unmatched. The dark lighting and music get you locked into your sets immediately.',
    avatarInitials: 'HP',
    isDemo: true,
  },
  {
    id: 'test-2',
    name: 'Manish Sharma',
    role: 'Software Architect • Fat Loss Journey',
    branch: 'Godadara Branch (Surat)',
    rating: 5,
    text: 'The 30m sprint turf and functional athletic equipment at Godadara are incredible. The trainers are always on the floor correcting form rather than just staring at phones. Lost 14kg in 5 months!',
    avatarInitials: 'MS',
    isDemo: true,
  },
  {
    id: 'test-3',
    name: 'Anjali Desai',
    role: 'Fashion Designer • Fitness & Zumba',
    branch: 'Dindoli Branch (Surat)',
    rating: 5,
    text: 'Dindoli branch has gorgeous backlit ambiance and certified female trainers who really understand body mechanics. Clean locker rooms, safe atmosphere, and amazing post-workout smoothie bar.',
    avatarInitials: 'AD',
    isDemo: true,
  },
  {
    id: 'test-4',
    name: 'Ronak Choksi',
    role: 'Diamond Merchant • Strength Training',
    branch: 'Parvat Patiya Branch (Surat)',
    rating: 5,
    text: 'I travel between Parvat Patiya and Dindoli, and having the multi-branch passport makes my fitness consistency 100%. The royal dark aesthetic truly makes you feel like you are training in a kingdom.',
    avatarInitials: 'RC',
    isDemo: true,
  },
]

export interface Transformation {
  id: string
  name: string
  goal: string
  duration: string
  beforeStat: string
  afterStat: string
  beforeLabel: string
  afterLabel: string
  quote: string
  image: string
}

export const transformations: Transformation[] = [
  {
    id: 'trans-1',
    name: 'Rahul P. (Demo Member)',
    goal: 'Fat Loss & Recomposition',
    duration: '16 Weeks Protocol',
    beforeStat: '88 KG',
    afterStat: '73 KG',
    beforeLabel: '28% Body Fat • Low Stamina',
    afterLabel: '12% Body Fat • Visible Abs',
    quote: "King's Gym atmosphere in Surat completely rewired my discipline. The coaches held me accountable to every single rep and nutrition milestone.",
    image: '/images/program_strength.jpg',
  },
  {
    id: 'trans-2',
    name: 'Karan S. (Demo Member)',
    goal: 'Hypertrophy & Muscle Gain',
    duration: '24 Weeks Protocol',
    beforeStat: '58 KG',
    afterStat: '71 KG',
    beforeLabel: 'Skinny Build • Fast Metabolism',
    afterLabel: 'Lean Mass • Broad Shoulder V-Taper',
    quote: 'The heavy iron equipment and progressive overload guidance was next-level. I gained 13kg of solid lean muscle and broke through all plateaus.',
    image: '/images/about.jpg',
  },
  {
    id: 'trans-3',
    name: 'Neha M. (Demo Member)',
    goal: 'Tone, Posture & Energy',
    duration: '12 Weeks Protocol',
    beforeStat: '76 KG',
    afterStat: '64 KG',
    beforeLabel: 'Sedentary Work Routine',
    afterLabel: 'Athletic, Toned & High Stamina',
    quote: 'Safe, welcoming, and empowering environment for women. Joining King’s Gym Godadara was the best health decision I have made in years.',
    image: '/images/program_zumba.jpg',
  },
]
