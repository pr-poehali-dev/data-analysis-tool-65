import { Landmark, Star, BookOpen, Globe, Crown, Sparkles, Plus, Minus, Mail } from "lucide-react"
import Icon from "@/components/ui/icon"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface FAQ {
  question: string
  answer: string
}

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs: FAQ[] = [
    {
      question: "Кто живёт в Кремле?",
      answer:
        "В Кремле находится резиденция Президента России. Это значит, что здесь работает самый главный человек в стране. Президент принимает важные решения, встречается с другими руководителями стран и подписывает законы прямо в кремлёвских залах!",
    },
    {
      question: "Сколько лет Кремлю?",
      answer:
        "Московскому Кремлю больше 870 лет! Его начали строить ещё в 1147 году. Сначала он был деревянным, потом белокаменным, а знакомые нам красные кирпичные стены появились в конце XV века. Представь: Кремль видел столько поколений людей!",
    },
    {
      question: "Что находится внутри Кремля?",
      answer:
        "Внутри Кремля целый город! Там есть красивые соборы с золотыми куполами, дворцы, музеи с царскими сокровищами, старинные пушки и знаменитая Царь-колокол — самый большой колокол в мире. А ещё там бьют куранты на Спасской башне!",
    },
    {
      question: "Можно ли попасть в Кремль на экскурсию?",
      answer:
        "Да! Часть Кремля открыта для посетителей. Можно пройти на Соборную площадь, посмотреть на соборы, Царь-пушку и Царь-колокол. Для этого нужно купить билет. Детям до 16 лет вход в некоторые места бесплатный!",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0B0F12] text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://cdn.poehali.dev/projects/fdd6f0fd-69f4-4657-88a6-e29e543ab54e/files/7725786f-6bb7-4827-be41-f7f2f83f7a82.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/85" />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-6">
          {/* Logo */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Icon name="Landmark" size={20} />
            <span className="font-medium text-balance">Кремль — резиденция президента</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {["История", "Залы", "Интересное", "Вопросы", "Узнать больше"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Action Button */}
          <div className="flex items-center gap-3">
            <Button className="bg-yellow-500 text-black hover:bg-yellow-400 rounded-full px-6 font-semibold">
              Узнать больше
            </Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
          {/* Badge */}
          <div className="mb-6 px-4 py-2 bg-black/40 ring-1 ring-yellow-500/40 backdrop-blur rounded-full">
            <span className="text-sm font-medium text-yellow-300">✨ Для учеников 2 класса</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-balance">
            Главный дом России.
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12 leading-relaxed text-pretty">
            Московский Кремль — это сердце нашей страны. Здесь живёт и работает Президент России, хранятся старинные сокровища и бьют знаменитые куранты.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400 rounded-full px-8 py-4 text-lg font-semibold">
              Начать изучать
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-black/40 ring-1 ring-white/20 backdrop-blur border-0 text-white hover:bg-black/50 rounded-full px-8 py-4 text-lg"
            >
              Посмотреть залы
            </Button>
          </div>

          {/* Footer Note */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Icon name="Star" size={16} />
            <span className="text-sm font-medium">Интересно и понятно для детей</span>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* Fact 1 */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-yellow-500/20 ring-1 ring-yellow-500/30 mb-6">
                <Icon name="Crown" size={24} className="text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Резиденция президента</h3>
              <p className="text-white/80 leading-relaxed">Здесь находится главный рабочий кабинет Президента России.</p>
            </div>

            {/* Fact 2 */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-yellow-500/20 ring-1 ring-yellow-500/30 mb-6">
                <Icon name="BookOpen" size={24} className="text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Более 870 лет истории</h3>
              <p className="text-white/80 leading-relaxed">Кремль — один из самых древних и важных памятников России.</p>
            </div>

            {/* Fact 3 */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-yellow-500/20 ring-1 ring-yellow-500/30 mb-6">
                <Icon name="Globe" size={24} className="text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Объект ЮНЕСКО</h3>
              <p className="text-white/80 leading-relaxed">Весь мир признаёт Кремль выдающимся памятником культуры.</p>
            </div>

            {/* Fact 4 */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-yellow-500/20 ring-1 ring-yellow-500/30 mb-6">
                <Icon name="Sparkles" size={24} className="text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">20 башен</h3>
              <p className="text-white/80 leading-relaxed">У Кремля 20 башен, и каждая из них имеет своё имя и историю.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Что посмотреть в Кремле</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                Давай заглянем в самые интересные места!
              </p>
            </div>

            {/* Journey Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-yellow-500/60 mb-4">01.</div>
                  <h3 className="text-xl font-semibold mb-4">Соборная площадь</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Главная площадь Кремля окружена красивейшими соборами с золотыми куполами. Здесь венчали на царство русских царей!
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-yellow-500/60 mb-4">02.</div>
                  <h3 className="text-xl font-semibold mb-4">Царь-пушка</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Огромная пушка весом 40 тонн! Она такая большая, что из неё ни разу не стреляли. Представь, как она выглядит вживую!
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-yellow-500/60 mb-4">03.</div>
                  <h3 className="text-xl font-semibold mb-4">Царь-колокол</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Самый большой колокол в мире! Он весит 200 тонн, но никогда не звонил — при отливке откололся кусок.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-yellow-500/60 mb-4">04.</div>
                  <h3 className="text-xl font-semibold mb-4">Спасская башня</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    На этой башне расположены знаменитые куранты! Каждый час они отбивают время, и вся страна слышит их бой по телевизору.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-yellow-500 text-black hover:bg-yellow-400 rounded-full px-12 py-4 text-lg font-semibold"
              >
                Хочу узнать больше!
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column */}
              <div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                  Вопросы и ответы
                </h2>
                <p className="text-xl text-white/80 leading-relaxed text-pretty">
                  Всё самое интересное о Кремле — просто и понятно для любого школьника!
                </p>
              </div>

              {/* Right Column - FAQ Accordion */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                      {openFaq === index ? (
                        <Minus className="w-5 h-5 flex-shrink-0 text-yellow-400" />
                      ) : (
                        <Plus className="w-5 h-5 flex-shrink-0 text-yellow-400" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Есть вопрос?</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Contact Form */}
              <div className="rounded-2xl bg-white/95 text-black p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Задать вопрос учителю</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Твоё имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      placeholder="Напиши своё имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email родителей
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Твой вопрос
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
                      placeholder="Что тебе интересно узнать о Кремле?"
                    />
                  </div>
                  <Button className="w-full bg-yellow-500 text-black hover:bg-yellow-400 rounded-lg py-3 font-semibold text-base">
                    Отправить вопрос
                  </Button>
                </form>
              </div>

              {/* Right Column - Info */}
              <div className="space-y-8">
                <div>
                  <p className="text-xl text-white/90 leading-relaxed text-pretty">
                    Если у тебя есть вопрос о Кремле или ты хочешь узнать что-то интересное — напиши нам! Учитель ответит тебе и твоим родителям.
                  </p>
                </div>

                {/* Profile Card */}
                <div className="rounded-2xl bg-white/95 text-black p-6 shadow-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center text-3xl">
                      🏛️
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Мария Ивановна</h4>
                      <p className="text-gray-600">Учитель истории, 2 класс</p>
                    </div>
                  </div>
                  <Button className="w-full bg-yellow-500 text-black hover:bg-yellow-400 rounded-lg flex items-center justify-center gap-2 font-semibold">
                    <Mail className="w-4 h-4" />
                    Написать учителю
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/[0.03] backdrop-blur-2xl ring-1 ring-white/10 p-12">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <Icon name="Landmark" size={24} />
                  <span className="text-xl font-semibold">Кремль — резиденция президента</span>
                </div>
                <p className="text-white/80 leading-relaxed text-pretty">
                  Образовательный сайт о Московском Кремле для учеников 2 класса. Узнавай историю России вместе с нами!
                </p>
              </div>

              {/* Links 1 */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-yellow-400">О КРЕМЛЕ</h3>
                <ul className="space-y-3">
                  {["История", "Башни", "Соборы", "Музеи"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links 2 */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-yellow-400">УЗНАЙ</h3>
                <ul className="space-y-3">
                  {["Кто такой президент", "Флаг и герб", "Москва на карте", "Интересные факты"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links 3 */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-yellow-400">ПОМОЩЬ</h3>
                <ul className="space-y-3">
                  {["Вопросы и ответы", "Контакты", "Для учителей", "Для родителей"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="border-t border-white/10 pt-12 mb-12">
              <div className="max-w-md">
                <h3 className="text-lg font-semibold mb-4">Новые уроки об истории России</h3>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Email родителей"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/5 ring-1 ring-white/20 backdrop-blur border-0 text-white placeholder:text-white/50 focus:ring-2 focus:ring-yellow-400/50 focus:outline-none"
                  />
                  <Button className="bg-yellow-500 text-black hover:bg-yellow-400 rounded-lg px-6 h-[50px] font-semibold">
                    Подписаться
                  </Button>
                </div>
              </div>
            </div>

            {/* Sub-footer */}
            <div className="border-t border-white/10 pt-8">
              <p className="text-white/60 text-sm text-center">© 2026 Кремль — резиденция президента. Образовательный проект для 2 класса.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
