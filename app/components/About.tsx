export default function About() {
  return (
    <section id="about" className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-purple-800 mb-12 text-center">Про автора</h2>
        <div className="flex flex-col md:flex-row items-start">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="bg-purple-200 w-64 h-64 rounded-full mx-auto overflow-hidden shadow-lg transition-all hover:scale-105">
              <img src="/placeholder.svg" alt="Ірина Рудницька" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="md:w-2/3 md:pl-12">
            <h3 className="text-2xl font-bold text-purple-700 mb-6">Привіт. Я Ірина Рудницька - психолог, з яким безпечно</h3>
            <ul className="list-none text-purple-900 space-y-4">
              <li className="flex items-center">
                <span className="text-purple-500 mr-2">✓</span>
                <span>10 років досвіду у психотерапії</span>
              </li>
              <li className="flex items-center">
                <span className="text-purple-500 mr-2">✓</span>
                <span>Більше 1500 задоволених клієнтів, як пройшли лікування</span>
              </li>
              <li className="flex items-center">
                <span className="text-purple-500 mr-2">✓</span>
                <span>Сертифікований психотерапевт у 6-ти різних методах (ППТ, КПТ, EMDR...)</span>
              </li>
              <li className="flex items-center">
                <span className="text-purple-500 mr-2">✓</span>
                <span>Більше 28 тис слідкувачів та мільйони переглядів у instagram</span>
              </li>
            </ul>
            <p className="mt-6 text-purple-900">На цьому курсі я хочу поділитися з Вами своєю авторською методикою з побудови здорових особистих кордонів. У цей курс я вклала частинку своєї душі, зібрала весь свій досвід, знання та найбільш ефективні практики, які допоможуть не просто зберегти своє психічне здоровʼя, а й навчитися любити та приймати себе та свої емоції.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

