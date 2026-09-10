import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Section, Container, SectionHeader, AnimatedCard } from './ui/SharedUI'
import { galleryItems, galleryFilters } from '../data/constants'

export default function GallerySection() {
  const [filter, setFilter] = useState('all')
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)

  const filtered = filter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter)

  return (
    <>
      <Section id="gallery">
        <Container>
          <SectionHeader
            badge="VISUAL EXPERIENCE"
            title="KINGDOM"
            titleGold="GALLERY."
            subtitle="Take a visual tour inside our training facilities and member energy."
          />

          {/* Filter Buttons */}
          <div className="flex justify-center flex-wrap gap-3 mb-12">
            {galleryFilters.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 border
                  ${f === filter
                    ? 'bg-gold-500 border-gold-500 text-[#0a0a0c] shadow-[var(--shadow-gold)]'
                    : 'bg-white/[0.04] border-border-subtle text-text-secondary hover:text-white hover:border-white/30'
                  }`}
              >
                {f === 'all' ? 'ALL' : f.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence>
              {filtered.map((item, i) => (
                <AnimatedCard key={item.src + filter} delay={i * 0.06}>
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className={`relative rounded-xl overflow-hidden cursor-pointer group
                      ${item.large ? 'md:col-span-2 h-[320px]' : 'h-[280px]'}`}
                    onClick={() => setLightboxSrc(item.src)}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.08]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[rgba(10,10,14,0.7)] flex flex-col justify-end p-6
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-xs text-gold-400 uppercase tracking-wider font-bold">{item.tag}</span>
                      <span className="text-lg font-bold text-white uppercase">{item.title}</span>
                    </div>
                  </motion.div>
                </AnimatedCard>
              ))}
            </AnimatePresence>
          </motion.div>
        </Container>
      </Section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxSrc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[2000] flex items-center justify-center p-8"
            onClick={() => setLightboxSrc(null)}
          >
            <button
              className="absolute top-6 right-8 text-white text-3xl bg-transparent hover:text-gold-400 transition-colors"
              onClick={() => setLightboxSrc(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightboxSrc}
              alt="Full view"
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg border border-border-gold"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
