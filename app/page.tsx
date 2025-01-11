'use client'

import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import CourseForYou from './components/CourseForYou'
import About from './components/About'
import WhatYouGet from './components/WhatYouGet'
import WhatYouLearn from './components/WhatYouLearn'
import CourseContent from './components/CourseContent'
import Reviews from './components/Reviews'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import FloatingSellButton from './components/FloatingSellButton'

export default function Home() {
  return (
    <main className="min-h-screen bg-purple-50">
      <Header />
      <Hero />
      <div className="section-divider"></div>
      <CourseForYou />
      <div className="section-divider"></div>
      <About />
      <div className="section-divider"></div>
      <WhatYouGet />
      <div className="section-divider"></div>
      <WhatYouLearn />
      <div className="section-divider"></div>
      <CourseContent />
      <div className="section-divider"></div>
      <Reviews />
      <div className="section-divider"></div>
      <FAQ />
      <Footer />
      <FloatingSellButton />
    </main>
  )
}

