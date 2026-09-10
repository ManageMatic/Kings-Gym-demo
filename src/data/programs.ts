export interface Program {
  num: string
  title: string
  subtitle: string
  description: string
  image: string
  highlights: string[]
  recommendedFor: string
}

export const programs: Program[] = [
  {
    num: '01',
    title: 'STRENGTH',
    subtitle: 'Raw Power & Barbell Progression',
    description: 'Build absolute physical strength through compound barbell lifts, CNS conditioning, and structured progressive overload under expert form supervision.',
    image: '/images/program_strength.jpg',
    highlights: ['Olympic Squat, Bench & Deadlift Racks', 'Calibrated Steel & Bumper Plates', 'Periodized Power Protocols'],
    recommendedFor: 'Athletes seeking pure strength and mechanical power',
  },
  {
    num: '02',
    title: 'MUSCLE BUILDING',
    subtitle: 'Hypertrophy & Aesthetic Physique',
    description: 'Scientifically engineered hypertrophy splits targeting mind-muscle connection, time under tension, mechanical damage, and supreme physical symmetry.',
    image: '/images/program_muscle.jpg',
    highlights: ['Pin-Loaded & Plate-Loaded Isolations', 'Drop-sets & Rest-Pause Techniques', 'Hypertrophy Nutrition Guidance'],
    recommendedFor: 'Individuals aiming to build lean muscle and sculpted shape',
  },
  {
    num: '03',
    title: 'FAT LOSS',
    subtitle: 'Metabolic Conditioning & Caloric Burn',
    description: 'High-octane metabolic training combining dynamic weight circuits, high-intensity intervals, and EPOC afterburn to shed body fat while preserving lean tissue.',
    image: '/images/program_fatloss.jpg',
    highlights: ['Heart-Rate Target Intervals', 'Metabolic Circuit Stations', 'Body Composition Tracking'],
    recommendedFor: 'Anyone wanting rapid fat loss and enhanced cardiovascular stamina',
  },
  {
    num: '04',
    title: 'ZUMBA',
    subtitle: 'High-Energy Dance & Aerobic Fitness',
    description: 'Electrifying group cardio classes blending international dance rhythms with athletic conditioning for maximum calorie burn, stress release, and joyful movement.',
    image: '/images/program_zumba.jpg',
    highlights: ['Certified Zumba Instructors', 'Surround Sound & Dynamic Studio Lights', 'Up to 600+ Calories Burn Per Session'],
    recommendedFor: 'Members who love music, rhythm, cardio and group energy',
  },
  {
    num: '05',
    title: 'PERSONAL TRAINING',
    subtitle: '1-on-1 Elite Transformation Coaching',
    description: 'Exclusive, customized training program with a dedicated senior coach. Includes bespoke diet planning, bio-feedback monitoring, and 100% accountability.',
    image: '/images/program_pt.jpg',
    highlights: ['100% Dedicated 1-on-1 Attention', 'Customized Macro & Meal Structure', 'Weekly Bio-Metric Progress Scans'],
    recommendedFor: 'High-performers who demand rapid, guaranteed results',
  },
  {
    num: '06',
    title: 'GENERAL FITNESS',
    subtitle: 'Functional Longevity & Daily Vitality',
    description: 'Comprehensive fitness conditioning focused on joint mobility, functional posture, core endurance, and sustainable lifelong wellness.',
    image: '/images/program_general.jpg',
    highlights: ['Postural Correction & Core Stability', 'Functional Daily Movement Patterns', 'Sustainable Habit Building'],
    recommendedFor: 'Beginners, working professionals, and lifelong health enthusiasts',
  },
]

export interface TrainingGoal {
  id: string
  label: string
  icon: string
  headline: string
  subhead: string
  recommendedPrograms: string[]
  trainingSplit: string
  nutritionTip: string
  focusArea: string
  badgeText: string
}

export const trainingGoals: TrainingGoal[] = [
  {
    id: 'muscle',
    label: 'BUILD MUSCLE',
    icon: '💪',
    headline: 'Hypertrophy & Muscular Density Protocol',
    subhead: 'Engineered for lean muscle mass, aesthetic balance, and peak volume capacity.',
    recommendedPrograms: ['Muscle Building', 'Strength Training', 'Personal Training'],
    trainingSplit: '4 to 5 Days / Week Upper-Lower or Push-Pull-Legs Periodization',
    nutritionTip: 'High Protein (1.8g - 2.2g per kg bodyweight) with a controlled 300 kcal surplus',
    focusArea: 'Progressive tension, mind-muscle connection, and targeted compound movements.',
    badgeText: 'HYPERTROPHY SPECIALIST ON DECK',
  },
  {
    id: 'fatloss',
    label: 'LOSE FAT',
    icon: '🔥',
    headline: 'Metabolic Torch & Athletic Conditioning',
    subhead: 'Accelerated fat oxidation while safeguarding hard-earned lean muscle tissue.',
    recommendedPrograms: ['Fat Loss', 'Zumba', 'Personal Training'],
    trainingSplit: '5 Days / Week: 3 Resistance Workouts + 2 Functional HIIT/Zumba Sessions',
    nutritionTip: 'Calculated caloric deficit with nutrient-dense high-fiber meals and electrolyte hydration',
    focusArea: 'High-density circuits, EPOC afterburn, and cardiovascular VO2 max enhancement.',
    badgeText: 'FAT LOSS BLUEPRINT INCLUDED',
  },
  {
    id: 'strength',
    label: 'GET STRONGER',
    icon: '🏋️',
    headline: 'Peak Neuromuscular Strength & Power',
    subhead: 'Calibrated barbell protocols to maximize bar speed and absolute poundages.',
    recommendedPrograms: ['Strength Training', 'Personal Training', 'General Fitness'],
    trainingSplit: '3 to 4 Days / Week Barbell Squat, Bench Press, Deadlift & Overhead Press',
    nutritionTip: 'High complex carbs around workouts with optimal creatine monohydrate loading',
    focusArea: 'Central nervous system recruitment, RPE-based loading, and flawless technique.',
    badgeText: 'OLYMPIC SQUAT & BENCH STATIONS',
  },
  {
    id: 'fitness',
    label: 'GET FIT',
    icon: '⚡',
    headline: 'Total Body Mobility, Stamina & Longevity',
    subhead: 'Feel energized, agile, and resilient in every aspect of your daily life.',
    recommendedPrograms: ['General Fitness', 'Zumba', 'Strength Training'],
    trainingSplit: '3 to 4 Days / Week Balanced Functional Circuit & Active Recovery',
    nutritionTip: 'Clean whole foods diet focusing on steady blood sugar and joint longevity',
    focusArea: 'Core endurance, thoracic mobility, joint flexibility, and cardiovascular health.',
    badgeText: 'ALL FITNESS LEVELS WELCOME',
  },
]
