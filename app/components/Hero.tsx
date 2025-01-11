import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-purple-100 to-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-lg md:text-xl font-bold text-purple-700 mb-4">Онлайн курс дипломованого психолога Ірини Рудницької</h2>
        <h1 className="text-3xl md:text-4xl font-bold text-purple-800 mb-8 leading-tight">
          Набридло бути "хорошою дівчинкою"?<br />
          Не вмієш казати <span className="text-purple-600">НІ</span>?
        </h1>
        <p className="text-base md:text-lg mb-12 max-w-2xl mx-auto">Приєднуйся до курсу, який навчить тебе твердо відстоювати свої кордони без почуття провини</p>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full text-xl transition-all hover:scale-105">
          ОТРИМАТИ ЗА 890 ГРН
        </Button>
        <p className="mt-6 text-purple-600 font-semibold text-sm">Замість 2250 грн. Знижка 60% тільки до нового року!</p>
        <div className="mt-12 flex justify-center">
          <Image
            src="/placeholder-course.jpg"
            width={600}
            height={300}
            alt="Course preview"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

