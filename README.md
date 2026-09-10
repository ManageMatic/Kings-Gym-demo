# 👑 KING'S GYM — Premium Multi-Branch Fitness Institution (Surat, Gujarat)

[![React](https://img.shields.io/badge/React-19.0-61dafb?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646cff?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.4-ff0055?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

> **"TRAIN LIKE A KING. Strength. Discipline. Transformation."**  
> A bespoke, cinematic, conversion-focused web application built as an executive client presentation demo for **King's Gym**, Surat's premier 3-branch luxury fitness brand.

---

## 🌟 Executive Summary & Pitch

**King's Gym** is designed to transform local gym marketing into an elite digital brand experience. Built with a dark luxury aesthetic (deep obsidian black, metallic champagne gold, and subtle royal gradients), this website showcases the physical and cultural excellence of King's Gym across its 3 prime Surat locations.

---

## 📍 3 Premier Surat Branches

| Branch | Identity & Focus | Highlights |
| :--- | :--- | :--- |
| **01. Parvat Patiya** | *Heavy Iron Powerhouse* | Calibrated Olympic deadlift decks, heavy steel racks, competition barbells. |
| **02. Godadara** | *High-Energy Cardio & Turf* | 30m sprint turf, functional athletics area & sound-isolated Zumba studio. |
| **03. Dindoli** | *Aesthetic Luxury & Recovery* | Biomechanical isolation machines, InBody body scans & smoothie recovery lounge. |

---

## 🚀 Key Features

* **👑 Cinematic Dark Luxury UI**: Handcrafted color palette (`#060608` deep black, `#f5cf53` champagne gold accents, glassmorphic cards, and subtle Ken Burns image effects).
* **📍 Interactive Multi-Branch Switcher**: Switch dynamically between Parvat Patiya, Godadara, and Dindoli with real interior photography, equipment previews, timings, and one-tap Google Maps directions.
* **🧭 Instant Surat Locality Finder ("Which Kingdom is Yours?")**: Dropdown matching local Surat areas (Vesu, Adajan, Varachha, Ring Road, Katargam, etc.) to the nearest branch with estimated distance and travel time.
* **📖 Inline Royal Heritage & Story Showcase**: Interactive expandable story section detailing the founding vision, 11-gauge steel standards, and the 3 core pillars (*Zero Shortcuts*, *Unbroken Standard*, *Royal Brotherhood*).
* **🎯 Dynamic Workout Goal Matcher**: Real-time interactive selector for Hypertrophy, Fat Loss, Strength, and General Fitness with tailored training splits and nutrition strategies.
* **🖼️ Lightbox Gallery with Mobile Touch-Swipe**: Category-filtered gallery grid (Gym Floors, Training, Equipment, Events) featuring centered navigation controls, keyboard navigation (`←`/`→`/`Esc`), and full mobile touch-swipe support.
* **💳 Membership & 1-Day Pass Modals**: Conversion-optimized membership tier comparison (Monthly, Quarterly, Half-Yearly, Yearly Royal Pass) with automated trial booking.
* **💬 Integrated WhatsApp Inquiries**: Direct WhatsApp chat triggers embedded across the floating support widget, branch cards, and contact form.
* **📱 100% Responsive & Cross-Device Optimized**: Tested across smartphones, tablets, laptops, and ultra-wide displays.

---

## 🛠️ Technology Stack

* **Frontend Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
* **Build Tool**: [Vite](https://vitejs.dev/)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (Vanilla CSS tokens, custom gradients, glassmorphism)
* **Animations**: [Framer Motion](https://www.framer.com/motion/) (Smooth layout transitions, spring physics, drawer reveals)
* **Icons**: [Lucide React](https://lucide.dev/) + Custom Branded SVG Icons (WhatsApp, Instagram, Facebook, YouTube)
* **Routing**: [React Router DOM](https://reactrouter.com/)

---

## 📁 Project Structure

```bash
Kings-Gym/
├── public/
│   └── images/              # High-resolution gym photography and branch assets
├── src/
│   ├── components/
│   │   ├── BranchCard.tsx       # Individual branch showcase card
│   │   ├── BranchSelector.tsx   # Interactive 3-branch switcher & Surat locator
│   │   ├── FloatingWhatsApp.tsx # Floating WhatsApp chat assistance widget
│   │   ├── Footer.tsx           # Comprehensive multi-branch footer & social channels
│   │   ├── GalleryGrid.tsx      # Filterable photo gallery with centered lightbox & swipe
│   │   ├── Hero.tsx             # Cinematic hero with brand tagline & CTAs
│   │   ├── MembershipCard.tsx   # Membership tier card
│   │   ├── MembershipModal.tsx  # Join membership interactive form modal
│   │   ├── Navbar.tsx           # Fixed blur header with mobile overlay drawer
│   │   ├── ProgramCard.tsx      # Training protocol card
│   │   ├── SectionHeading.tsx   # Typography-optimized reusable section title
│   │   ├── SocialIcons.tsx      # Official SVG icons (WhatsApp, Instagram, Facebook, YouTube)
│   │   ├── TestimonialCard.tsx  # Member review card with star ratings
│   │   ├── TrainerCard.tsx      # Certified coach profile card
│   │   ├── TransformationCard.tsx # Member transformation showcase
│   │   └── TrialModal.tsx       # 1-Day free trial pass booking modal
│   ├── data/
│   │   ├── branches.ts          # Surat branch details, amenities, addresses, maps URLs
│   │   ├── gallery.ts           # Gallery photos, equipment specs, social posts
│   │   ├── memberships.ts       # Pricing plans & perk comparisons
│   │   ├── programs.ts          # Training protocols & goal split definitions
│   │   ├── testimonials.ts      # Member reviews & transformations
│   │   └── trainers.ts          # Coach bios, specialties, accreditations
│   ├── pages/
│   │   └── Home.tsx             # Primary single-page application experience
│   ├── App.tsx                  # Main router setup
│   ├── index.css                # Tailwind CSS v4 design system, font variables, keyframes
│   └── main.tsx                 # React entry point
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 💻 Getting Started Locally

### 1. Clone the repository
```bash
git clone https://github.com/ManageMatic/Kings-Gym-demo.git
cd Kings-Gym-demo
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173/`.

### 4. Build for production
```bash
npm run build
```

---

## 📄 License & Presentation Rights

This website project was custom-engineered as a client presentation demo for **King's Gym (Surat, Gujarat)**. All assets, designs, and branding rights belong to their respective owners.
