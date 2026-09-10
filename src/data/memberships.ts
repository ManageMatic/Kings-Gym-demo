export interface MembershipPlan {
  id: string
  name: string
  duration: string
  price: string
  billingNote: string
  badge?: string
  isPopular?: boolean
  description: string
  features: string[]
}

export const membershipPlans: MembershipPlan[] = [
  {
    id: 'monthly',
    name: 'MONTHLY',
    duration: '1 MONTH',
    price: '₹XXX',
    billingNote: 'DEMO PRICE • BILLED MONTHLY',
    description: 'Perfect for getting started and experiencing the King’s Gym environment with full flexibility.',
    features: [
      'Full Gym & Floor Access (Single Branch)',
      'General Fitness Assessment & Orientation',
      'Cardio & Strength Zones',
      'Executive Locker & Shower Facilities',
      'Certified Floor Trainer Assistance',
    ],
  },
  {
    id: 'quarterly',
    name: 'QUARTERLY',
    duration: '3 MONTHS',
    price: '₹XXX',
    billingNote: 'DEMO PRICE • BILLED QUARTERLY',
    description: 'Ideal commitment to establish unbroken discipline and notice tangible physical transformation.',
    features: [
      'Access to All 3 Branches in Surat',
      '1 Complimentary 1-on-1 PT Session',
      'Group Zumba & HIIT Studio Access',
      'Bi-Weekly Body Composition Scan',
      'Executive Locker & Steam Access',
    ],
  },
  {
    id: 'half-yearly',
    name: 'HALF YEARLY',
    duration: '6 MONTHS',
    price: '₹XXX',
    billingNote: 'DEMO PRICE • BILLED SEMI-ANNUALLY',
    description: 'Serious commitment for serious results. Full multi-branch privileges and nutritional blueprint.',
    features: [
      'Multi-Branch Passport (Parvat Patiya, Godadara, Dindoli)',
      'Customized Diet & Nutrition Consultation',
      'Monthly Bio-Metric Progress Tracking',
      'Free Access to Weekend Special Masterclasses',
      '15-Day Membership Pause / Freeze Option',
    ],
  },
  {
    id: 'yearly',
    name: 'YEARLY',
    duration: '12 MONTHS',
    price: '₹XXX',
    billingNote: 'DEMO PRICE • BEST ROI',
    badge: 'MOST POPULAR',
    isPopular: true,
    description: 'The Ultimate King’s Membership. Total transformation access with priority coaching perks.',
    features: [
      'Unlimited 3-Branch VIP Access 365 Days',
      'Dedicated Coach Milestone Check-in',
      'Tailored Workout & Macro Blueprint',
      'King’s Gym Custom Welcome Apparel & Shaker',
      '1 Month Free Membership Freeze Privilege',
      '2 Free Guest Day Passes Every Quarter',
    ],
  },
]
