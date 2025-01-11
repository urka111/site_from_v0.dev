'use client'

import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-purple-700 text-white z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">Ірина Рудницька</a>
        <div className="hidden md:flex space-x-4">
          <a href="#about" className="hover:text-purple-200">Про автора</a>
          <a href="#course" className="hover:text-purple-200">Курс</a>
          <a href="#reviews" className="hover:text-purple-200">Відгуки</a>
          <a href="#faq" className="hover:text-purple-200">Питання</a>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu />
        </button>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-purple-600 p-4">
          <a href="#about" className="block py-2">Про автора</a>
          <a href="#course" className="block py-2">Курс</a>
          <a href="#reviews" className="block py-2">Відгуки</a>
          <a href="#faq" className="block py-2">Питання</a>
        </div>
      )}
    </header>
  )
}

