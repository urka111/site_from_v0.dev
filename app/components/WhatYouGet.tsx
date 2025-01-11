import { Button } from '@/components/ui/button'
import { Book, MessageCircle, FileText, Laptop } from 'lucide-react'

export default function WhatYouGet() {
  const benefits = [
    {
      icon: Book,
      text: "2-ох місячний доступ до 8-ми великих уроків. Кожен урок включає в себе відео-лекції на 15-20 хвилин, та 2-3 дієві практичні вправи з домашнім завданням."
    },
    {
      icon: MessageCircle,
      text: "Доступ до телеграм-чату з Іриною та іншими учасниками курсу. Можна ставити запитання щодо курсу та спілкуватися з авторкою."
    },
    {
      icon: FileText,
      text: "Допоміжні теоретичні текстові блоки до кожної відео-лекції"
    },
    {
      icon: Laptop,
      text: "Доступ можливий як з телефона, так і з комп'ютера, що дозволить вам займатися в зручному місці у зручний час"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-purple-800 mb-12 text-center">Придбавши курс, ти отримаєш:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <benefit.icon className="text-purple-500 w-12 h-12 mr-4 flex-shrink-0" />
              <p className="text-purple-900">{benefit.text}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full text-xl transition-all hover:scale-105">
            ОТРИМАТИ ДОСТУП
          </Button>
          <p className="mt-6 text-purple-600 font-semibold text-sm">Доступ надається одразу після оплати. Уроки будуть проходити на сучасній українській платформі softbook.</p>
        </div>
      </div>
    </section>
  )
}

