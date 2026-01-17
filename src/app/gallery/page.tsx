'use client'

import { fetchGalleryPage } from '@/lib/api/gallaryAPI'
import React, { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const data = await fetchGalleryPage()

const Page = () => {
  const images = data?.blocks[0]?.logos || []

  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const closePreview = () => setActiveIndex(null)

  const prevImage = () => {
    if (activeIndex === null) return
    setActiveIndex((activeIndex - 1 + images.length) % images.length)
  }

  const nextImage = () => {
    if (activeIndex === null) return
    setActiveIndex((activeIndex + 1) % images.length)
  }

  return (
    <div className="mt-[85px] lg:mt-[100px]">
      {/* HERO */}
      <div className="relative h-[260px] md:h-80 bg-[#7A7777] flex items-center justify-center">
        <h1 className="text-white text-3xl md:text-5xl font-bold arial-font">
          {data?.title}
        </h1>
      </div>
      <div className="container py-12 sm:py-16 md:py-20 lg:py-[120px] mx-auto">

      <h2 className="section-subtitle text-center mb-8">
        {data?.blocks[0]?.heading}
      </h2>

      {/* GALLERY */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((logo: any, index: number) => (
            <button
              key={logo.id}
              onClick={() => setActiveIndex(index)}
              className="overflow-hidden rounded-lg shadow-md focus:outline-none"
            >
              <img
                src={logo.url.trim()}
                alt={logo.alternativeText || `Gallery image ${index + 1}`}
                className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
              />
            </button>
          ))}
        </div>
      </div>

      {/* IMAGE PREVIEW MODAL */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closePreview}
        >
          {/* Close */}
          <button
            className="absolute top-6 right-6 text-white"
            onClick={closePreview}
          >
            <X size={32} />
          </button>

          {/* Left */}
          <button
            className="absolute left-6 text-white"
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
          >
            <ChevronLeft size={40} />
          </button>

          {/* Image */}
          <img
            src={images[activeIndex].url.trim()}
            alt=""
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Right */}
          <button
            className="absolute right-6 text-white"
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </div>
  )
}

export default Page