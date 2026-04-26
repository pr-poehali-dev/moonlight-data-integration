import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const slides = [
  {
    image: "https://cdn.poehali.dev/projects/95ad7d9d-7198-4f62-a0f1-ef6ab57708f4/files/d2fa77dd-534d-4372-96e1-e2b28403b42b.jpg",
    model: "Changan CS35 Plus",
    origin: "🇨🇳 Китай",
    tag: "Популярный выбор",
  },
  {
    image: "https://cdn.poehali.dev/projects/95ad7d9d-7198-4f62-a0f1-ef6ab57708f4/files/27659845-2dd4-4603-818a-b48a1ad4adf0.jpg",
    model: "BYD Song Plus",
    origin: "🇨🇳 Китай",
    tag: "Электро / Гибрид",
  },
  {
    image: "https://cdn.poehali.dev/projects/95ad7d9d-7198-4f62-a0f1-ef6ab57708f4/files/b02a6e44-8847-4473-9cf9-cf3a5885bc7c.jpg",
    model: "Toyota Camry",
    origin: "🇯🇵 Япония",
    tag: "Классика надёжности",
  },
  {
    image: "https://cdn.poehali.dev/projects/95ad7d9d-7198-4f62-a0f1-ef6ab57708f4/files/4b217184-2172-453e-b1e1-33447412ff89.jpg",
    model: "Toyota Land Cruiser 300",
    origin: "🇯🇵 Япония",
    tag: "Топ лот аукциона",
  },
  {
    image: "https://cdn.poehali.dev/projects/95ad7d9d-7198-4f62-a0f1-ef6ab57708f4/files/4ce15136-15de-48fd-93ba-baccad3174f1.jpg",
    model: "Genesis GV80",
    origin: "🇰🇷 Корея",
    tag: "Премиум класс",
  },
  {
    image: "https://cdn.poehali.dev/projects/95ad7d9d-7198-4f62-a0f1-ef6ab57708f4/files/814d078c-be8d-4970-b310-efcb1ad9da8a.jpg",
    model: "Li Auto L9",
    origin: "🇨🇳 Китай",
    tag: "Лучший гибрид года",
  },
  {
    image: "https://cdn.poehali.dev/projects/95ad7d9d-7198-4f62-a0f1-ef6ab57708f4/files/f005079f-78ff-4c70-ad12-77884921100f.jpg",
    model: "Haval Jolion",
    origin: "🇨🇳 Китай",
    tag: "Выгодная цена",
  },
]

export function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      goNext()
    }, 4500)
    return () => clearInterval(timer)
  }, [current])

  function goNext() {
    setAnimating(true)
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
      setAnimating(false)
    }, 400)
  }

  function goPrev() {
    setAnimating(true)
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
      setAnimating(false)
    }, 400)
  }

  const slide = slides[current]

  return (
    <div className="h-screen bg-black relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{ opacity: animating ? 0 : 1 }}
      >
        <img
          src={slide.image}
          alt={slide.model}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
      </div>

      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end pb-24 px-8 md:px-16 lg:px-24">
        <div
          className="max-w-2xl transition-all duration-500"
          style={{ opacity: animating ? 0 : 1, transform: animating ? "translateY(20px)" : "translateY(0)" }}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-sm font-mono text-red-400 bg-red-500/10 border border-red-500/30 px-3 py-1 rounded-full">
              {slide.tag}
            </span>
            <span className="text-sm text-gray-300">{slide.origin}</span>
          </div>
          <h1 className="font-orbitron text-4xl md:text-6xl xl:text-7xl font-extrabold text-white mb-4 uppercase leading-tight">
            {slide.model}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
            Автомобили из Японии, Китая и Кореи. Низкая комиссия — быстрая доставка — полное оформление под ключ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white text-lg px-8 font-semibold border-0">
              Подобрать авто
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 bg-transparent">
              Смотреть каталог
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goPrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/40 border border-white/20 flex items-center justify-center text-white hover:bg-red-500/80 hover:border-red-500 transition-all duration-200"
      >
        <Icon name="ChevronLeft" size={20} />
      </button>
      <button
        onClick={goNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/40 border border-white/20 flex items-center justify-center text-white hover:bg-red-500/80 hover:border-red-500 transition-all duration-200"
      >
        <Icon name="ChevronRight" size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setAnimating(true); setTimeout(() => { setCurrent(i); setAnimating(false) }, 300) }}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-red-500" : "w-2 bg-white/40 hover:bg-white/70"}`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute top-24 right-8 z-30 font-mono text-xs text-gray-400">
        {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>
    </div>
  )
}

export default HeroSlider
