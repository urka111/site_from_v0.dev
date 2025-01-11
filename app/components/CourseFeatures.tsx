import { Clock, Users, MessageCircle, FileText } from 'lucide-react'

export default function CourseFeatures() {
  const features = [
    {
      icon: Clock,
      title: "2-ох місячний доступ",
      description: "до 8-ми великих уроків. Кожен урок включає в себе відео-лекції на 15-20 хвилин, та 2-3 дієві практичні вправи з домашнім завданням."
    },
    {
      icon: Users,
      title: "Доступ до телеграм-чату",
      description: "з Іриною та іншими учасниками курсу. Можна ставити запитання щодо курсу та спілкуватися з авторкою."
    },
    {
      icon: FileText,
      title: "Допоміжні теоретичні текстові блоки",
      description: "до кожної відео-лекції"
    },
    {
      icon: MessageCircle,
      title: "Зручний доступ",
      description: "Доступ можливий як з телефона, так і з комп'ютера, що дозволить вам займатися в зручному місці у зручний час"
    }
  ]

  return (
    <section className="py-20 bg-purple-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-purple-800 mb-12 relative">
          Придбавши курс, ти отримаєш:
          <span className="absolute bottom-0 left-0 w-24 h-1 bg-purple-500"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-xl">
              <feature.icon className="text-purple-500 w-8 h-8 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-purple-700 mb-2">{feature.title}</h3>
                <p className="text-purple-900">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


