export default function Footer() {
  return (
    <footer className="bg-purple-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Контакти</h3>
            <p className="mb-2">ФОП Рудницкий Віталій Романович</p>
            <p className="mb-2">2813009399</p>
            <p>0934589065</p>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Правова інформація</h3>
            <p className="mb-2"><a href="#" className="hover:text-purple-200 transition-colors">Політика конфіденційності</a></p>
            <p><a href="#" className="hover:text-purple-200 transition-colors">Публічна оферта</a></p>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-4">Додаткова інформація</h3>
            <p className="mb-2">Всі права захищені. Будь-яке копіювання матеріалів дозволяється тільки з погодження правовласників</p>
            <p className="mb-2">Курс відзнято російською мовою. Зазначаємо, що ми українська компанія і платимо податки лише в Україні.</p>
            <p>Працюємо з усім світом, окрім країн-агресорів.</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 Ірина Рудницька. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  )
}

