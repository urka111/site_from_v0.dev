export default function WhatYouLearn() {
  const skills = [
    "Впевнено висловлювати свою думку, в тому числі і незгоду з кимось",
    "Спокійно відмовляти людям, казати НІ",
    "Відкрито казати іншим про свої рішення, бажання",
    "Не догоджати іншим, бути собою та слухати себе",
    "Не дозволяти іншим керувати своїм життям",
    "Чесно казати людям про свої потреби, не чекаючи що вони самі здогадаються про них"
  ];

  return (
    <section className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-purple-800 mb-12 text-center">Після курсу ти навчишся:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <span className="text-purple-500 mr-4 text-2xl">✓</span>
              <p className="text-purple-900">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

