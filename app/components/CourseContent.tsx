import { Button } from '@/components/ui/button'

export default function CourseContent() {
  const lessons = [
    {
      title: "Урок 1. Вступний урок",
      content: [
        "Виявлення болючих точок на ваших кордонах.",
        "Практика – усвідомлення \"Як я не хочу і як я хочу\"",
        "Робота з травмуючими спогадами з допомогою РІРА- практики EMDR"
      ]
    },
    {
      title: "Урок 2. Що таке кордони? В якому стані бувають кордони?",
      content: [
        "Виявлення болючих точок на ваших кордонах.",
        "Практика – усвідомлення \"Як я не хочу і як я хочу\"",
        "Робота з травмуючими спогадами з допомогою РІРА- практики EMDR"
      ]
    },
    {
      title: "Урок 3. В якому віці ви застрягли?",
      content: [
        "Виявлення власних незадоволених потреб за пірамідою Маслоу",
        "Джерела мого наповнення ресурсом",
        "Техніка \"Зцілення внутрішньої дитини\"",
        "Практика для наповнення ресурсом"
      ]
    },
    {
      title: "Урок 4. Закриття гештальту і відпускання негативних емоцій з минулого.",
      content: [
        "Стадії проживання почуттів в зв'язку з утратою кордонів",
        "Медитація на закриття гештальту"
      ]
    },
    {
      title: "Урок 5. Сепарація від батьків і формування внутрішнього дорослого",
      content: [
        "Робота зі прихованими вигодами стану дитини. Відділення від батьків. Дорослість.",
        "Техніка \"Мозковий штурм\"",
        "Медитація \"На сепарацію від батьків\"",
        "Практика \"Повернення вантажу\""
      ]
    },
    {
      title: "Урок 6. Сценарій жертви і вихід з нього.",
      content: [
        "Алгоритм виходу із стану жертви. Практичні кроки",
        "Тест \"Чи граєте ви роль жертви?\"",
        "Практика «Послання до внутрішньої дитини»",
        "Техніка «Щоденник вдячності»",
        "Вправа \"Вихід зі стану жертви\""
      ]
    },
    {
      title: "Урок 7. Як відстояти свої кордони і залишитися спокійною.",
      content: [
        "Техніка \"Я-повідомлення\"",
        "Арт-терапевтична практика \"Мої кордони\""
      ]
    },
    {
      title: "Урок 8. Робота із законом дзеркала",
      content: [
        "Аналіз порушення своїх та чужих кордонів",
        "Робота із законом дзеркала"
      ]
    }
  ];

  return (
    <section id="course" className="py-20 bg-purple-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-purple-800 mb-12 relative">
          Програма курсу
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-purple-500"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {lessons.map((lesson, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-xl">
              <h3 className="text-xl font-bold text-purple-700 mb-4">{lesson.title}</h3>
              <ul className="list-disc list-inside text-purple-900 space-y-2">
                {lesson.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="animate-slide-in" style={{animationDelay: `${itemIndex * 0.1}s`}}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full text-xl transition-all hover:scale-105">
            ОТРИМАТИ ДОСТУП
          </Button>
          <p className="mt-6 text-purple-600 font-semibold">Доступ надається одразу після оплати. Уроки будуть проходити на сучасній українській платформі softbook.</p>
        </div>
      </div>
    </section>
  )
}

