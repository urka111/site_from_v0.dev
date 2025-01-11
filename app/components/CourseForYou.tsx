import Image from 'next/image'

export default function CourseForYou() {
  const reasons = [
    {
      title: "Ти знецінюєш свої емоції",
      description: "Ваажаєш що твої проблеми нічого не варті, кажеш собі \"та що там я, в когось набагато гірше\"",
      image: "/emotions.jpg"
    },
    {
      title: "Вдома ти робиш все за всіх",
      description: "І всі вважають це нормою, сприймаючи тебе за хатню робітницю",
      image: "/housework.jpg"
    },
    {
      title: "Твої колеги скидають на тебе всю роботу",
      description: "І навіть не дякують за її виконання, сприймаючи це за данність",
      image: "/overworked.jpg"
    },
    {
      title: "Ти приховуєш від інших свої рішення, бо боїшся реакції",
      description: "До останнього тягнеш щоб розповісти іншим свої наміри, бо боїшся, що вони їм не сподобаються",
      image: "/hiding.jpg"
    },
    {
      title: "Твій чоловік/жінка тебе не поважає",
      description: "Грубить, знецінює, але ти це терпиш, уникаючи конфлікту",
      image: "/disrespect.jpg"
    },
    {
      title: "Твої подруги/друзі використовують тебе як губку",
      description: "А твої проблеми слухати не хочуть, тільки відбирають твій ресурс",
      image: "/emotional-sponge.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-purple-800 mb-12 text-center">Цей курс точно для тебе, якщо:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-xl flex">
              <Image
                src={reason.image}
                width={100}
                height={100}
                alt={reason.title}
                className="rounded-full mr-4 flex-shrink-0"
              />
              <div>
                <h3 className="text-xl font-bold text-purple-700 mb-2">{reason.title}</h3>
                <p className="text-purple-900 text-sm">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

