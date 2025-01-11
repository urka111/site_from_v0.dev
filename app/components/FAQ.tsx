'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQ() {
  const faqs = [
    {
      question: "Я купую курси і не проходжу. Швидко загораюсь і тухну. Що робити?",
      answer: "Наш курс розроблений так, щоб утримувати вашу увагу та мотивацію. Ми надаємо підтримку та заохочення протягом всього курсу."
    },
    {
      question: "Я боюсь, що курс мені не допоможе. Які гарантії?",
      answer: "Ми впевнені в ефективності нашого курсу, але результати можуть відрізнятися. Ми пропонуємо повернення коштів протягом перших 7 днів, якщо ви не задоволені."
    },
    {
      question: "На якій платформі будуть проходити заняття?",
      answer: "Заняття проходять на сучасній українській платформі softbook."
    },
    {
      question: "У мене не виходить оплатити? Що робити?",
      answer: "Якщо у вас виникли проблеми з оплатою, будь ласка, зв'яжіться з нашою службою підтримки. Ми допоможемо вам вирішити цю проблему."
    },
    {
      question: "Чим цей курс відрізняється від ваших консультацій?",
      answer: "Цей курс надає структуровану програму навчання, яку ви можете проходити у власному темпі. Консультації ж надають індивідуальний підхід до ваших конкретних проблем."
    }
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-purple-800 mb-12 relative">
          Питання/відповіді
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-purple-500"></span>
        </h2>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-6 animate-slide-in" style={{animationDelay: `${index * 0.1}s`}}>
            <button
              className="flex justify-between items-center w-full text-left font-bold text-purple-700 p-4 bg-purple-100 rounded-lg transition-all hover:bg-purple-200"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {faq.question}
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openIndex === index && (
              <div className="p-4 bg-purple-50 rounded-b-lg mt-2 animate-fade-in">
                <p className="text-purple-900">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

