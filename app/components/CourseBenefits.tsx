import { CheckCircle } from 'lucide-react'

export default function CourseBenefits() {
  const benefits = [
    "Ти знецінюєш свої емоції",
    "Вважаєш що твої проблеми нічого не варті, кажеш собі \"та що там я, в когось набагато гірше\"",
    "Вдома ти робиш все за всіх",
    "І всі вважають це нормою, сприймаючи тебе за хатню робітницю",
    "Твої колеги скидають на тебе всю роботу",
    "І навіть не дякують за її виконання, сприймаючи це за данність",
    "Ти приховуєш від інших свої рішення, бо боїшся реакції",
    "До останнього тягнеш щоб розповісти іншим свої наміри, бо боїшся, що вони їм не сподобаються",
    "Твій чоловік/жінка тебе не поважає",
    "Грубить, знецінює, але ти це терпиш, уникаючи конфлікту",
    "Твої подруги/друзі використовують тебе як губку",
    "А твої проблеми слухати не хочуть, тільки відбирають твій ресурс"
  ]

  return (
    <section className="py-20 bg-pattern">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-purple-800 mb-12 relative">
          Цей курс точно для тебе, якщо:
          <span className="absolute bottom-0 left-0 w-24 h-1 bg-purple-500"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-4">
              <CheckCircle className="text-purple-500 flex-shrink-0 mt-1" />
              <p className="text-purple-900">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

