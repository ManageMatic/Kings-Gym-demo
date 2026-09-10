export interface Trainer {
  id: string
  name: string
  specialization: string
  experience: string
  image: string
  bio: string
  certifications: string[]
  quote: string
}

export const trainers: Trainer[] = [
  {
    id: 'trainer-1',
    name: 'TRAINER VIKRAM',
    specialization: 'Strength & Conditioning',
    experience: '8+ Years Experience (Demo)',
    image: '/images/trainer_1.jpg',
    bio: 'Specialist in biomechanics, Olympic barbell mechanics, and periodized strength development. Passionate about transforming beginner lifters into powerhouses.',
    certifications: ['CSCS Certified (Demo)', 'K11 Strength Coach (Demo)', 'Biomechanics Specialist'],
    quote: 'Discipline is doing what needs to be done, even when motivation fades.',
  },
  {
    id: 'trainer-2',
    name: 'TRAINER PRIYA',
    specialization: 'Hypertrophy & Female Fitness',
    experience: '6+ Years Experience (Demo)',
    image: '/images/trainer_2.jpg',
    bio: 'Pioneering female strength culture in Surat. Expert in body recomposition, glute hypertrophy, and sustainable lifestyle transformation.',
    certifications: ['ACE Certified Trainer (Demo)', 'Sports Nutrition Specialist (Demo)', 'Functional Movement Screen'],
    quote: 'Strength does not belong to anyone else. Claim your power on the floor.',
  },
  {
    id: 'trainer-3',
    name: 'TRAINER RAHUL',
    specialization: 'Functional Fitness & Calisthenics',
    experience: '5+ Years Experience (Demo)',
    image: '/images/trainer_3.jpg',
    bio: 'Specializing in explosive power, kettlebell athletics, turf conditioning, and joint durability for high-performing individuals.',
    certifications: ['CrossFit Level 2 (Demo)', 'Athletic Conditioning Coach (Demo)', 'Injury Prevention Specialist'],
    quote: 'Make your body as functional and agile as it is powerful.',
  },
  {
    id: 'trainer-4',
    name: 'TRAINER ANANYA',
    specialization: 'Fat Loss & Zumba Specialist',
    experience: '7+ Years Experience (Demo)',
    image: '/images/trainer_4.jpg',
    bio: 'Bringing uncontainable energy to every session. Master of metabolic fat burning, dance cardio, and high-energy group fitness dynamics.',
    certifications: ['ZIN Certified Instructor (Demo)', 'Metabolic Conditioning Coach (Demo)', 'Pre & Post Natal Specialist'],
    quote: 'Sweat with joy, train with intention, and reign over your goals.',
  },
]
