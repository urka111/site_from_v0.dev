'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

export default function Reviews() {
  const reviews = [
    { image: "/review-1.jpg", alt: "Review 1" },
    { image: "/review-2.jpg", alt: "Review 2" },
    { image: "/review-3.jpg", alt: "Review 3" },
    { image: "/review-4.jpg", alt: "Review 4" },
  ]

  const [currentReview, setCurrentReview] = useState(0)

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <section id="reviews" className="py-20 bg-purple-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-purple-800 mb-12 relative text-center">
          Відгуки
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-purple-500"></span>
        </h2>
        <div className="relative">
          <div className="flex items-center justify-center">
            <Image
              src={reviews[currentReview].image}
              width={600}
              height={400}
              alt={reviews[currentReview].alt}
              className="rounded-lg shadow-lg"
            />
          </div>
          <button 
            onClick={prevReview} 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white rounded-full p-3 shadow-md transition-all hover:bg-purple-700"
            aria-label="Previous review"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextReview} 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white rounded-full p-3 shadow-md transition-all hover:bg-purple-700"
            aria-label="Next review"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}

