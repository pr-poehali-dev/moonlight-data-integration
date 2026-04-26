import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Из каких стран вы привозите автомобили?",
      answer:
        "Мы работаем с тремя крупнейшими рынками Азии: Япония, Китай и Корея. У каждой страны свои преимущества — японские авто славятся надёжностью, корейские — соотношением цены и качества, китайские — современными технологиями по доступной цене.",
    },
    {
      question: "Сколько стоит ваша комиссия?",
      answer:
        "Мы берём фиксированную комиссию, которая не зависит от стоимости автомобиля. Никаких скрытых платежей — все расходы (доставка, растаможка, оформление) прозрачно прописаны в договоре до начала работы.",
    },
    {
      question: "Сколько времени занимает доставка?",
      answer:
        "Стандартные сроки: из Японии и Кореи — 4–6 недель, из Китая — 3–5 недель. Точные сроки зависят от региона назначения. Вы получаете трек-номер и отслеживаете груз в реальном времени.",
    },
    {
      question: "Как я могу быть уверен в состоянии автомобиля?",
      answer:
        "Перед выкупом мы делаем детальный фотоотчёт (150+ фото), проверяем историю, пробег и техническое состояние. При необходимости проводим инспекцию у независимого эксперта на месте.",
    },
    {
      question: "Вы помогаете с оформлением документов?",
      answer:
        "Да, мы берём на себя полное оформление: таможенная декларация, СБКТС, ЭПТС и постановка на учёт в ГИБДД. Вы просто приезжаете за готовым автомобилем.",
    },
    {
      question: "Можно ли заказать конкретную модель и комплектацию?",
      answer:
        "Конечно. Скажите нам марку, модель, год, цвет и желаемые опции — мы найдём именно такой вариант. Если на рынке есть несколько похожих авто, покажем все варианты с ценами.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы об импорте автомобилей, доставке и оформлении.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}