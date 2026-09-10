import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Maximize2, MapPin } from 'lucide-react'
import { galleryItems } from '../../data/gallery'
import type { GalleryItem } from '../../data/gallery'

export default function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const filters = [
    { id: 'all', label: 'ALL IMAGES' },
    { id: 'gym', label: 'GYM FLOORS' },
    { id: 'training', label: 'TRAINING' },
    { id: 'equipment', label: 'EQUIPMENT' },
    { id: 'events', label: 'EVENTS' },
  ]

  const filteredItems =
    activeFilter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const prevImage = () => {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length)
  }

  const nextImage = () => {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return
      if (e.key === 'ArrowLeft') prevImage()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'Escape') closeLightbox()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxIndex, filteredItems.length])

  // Touch swipe handling for mobile
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe) {
      nextImage()
    } else if (isRightSwipe) {
      prevImage()
    }
  }

  const currentItem: GalleryItem | null =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : null

  return (
    <div className="space-y-8">
      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {filters.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveFilter(tab.id)}
            className={`px-4 sm:px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              activeFilter === tab.id
                ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-black shadow-lg shadow-amber-500/20 scale-105 font-black'
                : 'bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 border border-zinc-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        <AnimatePresence>
          {filteredItems.map((item, idx) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={() => openLightbox(idx)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800/80 hover:border-amber-400/50 shadow-xl relative aspect-[4/3]"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover brightness-85 group-hover:scale-110 group-hover:brightness-100 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              {/* Top Tag & Zoom */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-wider bg-black/80 backdrop-blur-md border border-amber-400/30 text-amber-400">
                  {item.category}
                </span>
                <div className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                </div>
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-3 left-3 right-3">
                <span className="text-[10px] text-zinc-400 flex items-center gap-1 font-medium">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  {item.branch}
                </span>
                <h4 className="text-base font-black font-display text-white uppercase tracking-wide group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal with Perfectly Centered Responsive Arrows */}
      <AnimatePresence>
        {currentItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-black/95 backdrop-blur-2xl overflow-y-auto"
            onClick={closeLightbox}
          >
            {/* Top Bar with Close Button and Counter */}
            <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-8 sm:right-8 z-30 flex items-center justify-between pointer-events-none">
              <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-semibold text-zinc-300">
                {lightboxIndex !== null ? `${lightboxIndex + 1} / ${filteredItems.length}` : ''}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  closeLightbox()
                }}
                className="pointer-events-auto p-2.5 sm:p-3 rounded-full bg-zinc-900/90 hover:bg-amber-400 hover:text-black border border-white/20 text-white transition-all duration-200 cursor-pointer shadow-xl"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Main Lightbox Card with Centered Navigation Arrows */}
            <motion.div
              key={currentItem.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              className="relative max-w-4xl w-full flex flex-col items-center justify-center my-auto pt-10 sm:pt-0"
            >
              {/* Image Container with Centered Left & Right Arrows Overlaid */}
              <div className="relative rounded-2xl overflow-hidden border border-amber-400/40 shadow-2xl bg-black flex items-center justify-center w-full max-h-[60vh] sm:max-h-[70vh] aspect-[4/3] sm:aspect-[16/10]">
                <img
                  src={currentItem.src}
                  alt={currentItem.title}
                  className="w-full h-full object-contain select-none"
                />

                {/* Left Prev Arrow Button - Vertically Centered */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    prevImage()
                  }}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/80 hover:bg-amber-400 hover:text-black border border-white/20 text-white flex items-center justify-center transition-all duration-200 shadow-2xl backdrop-blur-md cursor-pointer group"
                  aria-label="Previous Image"
                >
                  <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
                </button>

                {/* Right Next Arrow Button - Vertically Centered */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    nextImage()
                  }}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/80 hover:bg-amber-400 hover:text-black border border-white/20 text-white flex items-center justify-center transition-all duration-200 shadow-2xl backdrop-blur-md cursor-pointer group"
                  aria-label="Next Image"
                >
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              {/* Info Details Below Image */}
              <div className="mt-3.5 sm:mt-4 text-center max-w-xl space-y-1 px-2">
                <div className="flex items-center justify-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-amber-400 text-black">
                    {currentItem.category}
                  </span>
                  <span className="text-xs text-zinc-400 font-medium">
                    {currentItem.branch}
                  </span>
                </div>
                <h3 className="text-lg sm:text-2xl font-black font-display text-white uppercase tracking-wide">
                  {currentItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                  {currentItem.description}
                </p>
                <p className="text-[10px] text-zinc-500 sm:hidden pt-1">
                  Swipe left or right to browse photos
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
