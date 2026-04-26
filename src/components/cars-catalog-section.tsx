import { useState, useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Icon from "@/components/ui/icon"

type Car = {
  id: number
  model: string
  year: number
  mileage: number
  auctionPrice: number
  deliveryPrice: number
  totalVlad?: number
  totalBlag?: number
  grade?: string
  color: string
  engine: string
  badge: string
  hot?: boolean
}

const japanCars: Car[] = [
  { id: 1, model: "Toyota Land Cruiser 300", year: 2022, mileage: 28000, auctionPrice: 5800000, deliveryPrice: 620000, totalVlad: 6420000, grade: "4.5", color: "Белый перламутр", engine: "3.5 V6 Twin Turbo", badge: "Топ лот", hot: true },
  { id: 2, model: "Toyota Alphard", year: 2023, mileage: 12000, auctionPrice: 4900000, deliveryPrice: 540000, totalVlad: 5440000, grade: "5", color: "Чёрный", engine: "2.5 Hybrid", badge: "Премиум" },
  { id: 3, model: "Lexus LX 600", year: 2022, mileage: 18000, auctionPrice: 7200000, deliveryPrice: 680000, totalVlad: 7880000, grade: "4", color: "Серебристый", engine: "3.5 V6 Twin Turbo", badge: "Премиум" },
  { id: 4, model: "Nissan Elgrand", year: 2021, mileage: 35000, auctionPrice: 2400000, deliveryPrice: 480000, totalVlad: 2880000, grade: "4.5", color: "Белый", engine: "3.5 V6", badge: "Семейный" },
  { id: 5, model: "Honda Stepwgn", year: 2022, mileage: 22000, auctionPrice: 1850000, deliveryPrice: 420000, totalVlad: 2270000, grade: "5", color: "Синий", engine: "1.5 Turbo", badge: "Выгодно", hot: true },
  { id: 6, model: "Subaru Forester", year: 2021, mileage: 41000, auctionPrice: 1600000, deliveryPrice: 390000, totalVlad: 1990000, grade: "4", color: "Тёмно-синий", engine: "2.5 Boxer", badge: "4x4" },
]

const koreaCars: Car[] = [
  { id: 1, model: "Genesis GV80", year: 2023, mileage: 15000, auctionPrice: 4200000, deliveryPrice: 510000, totalVlad: 4710000, color: "Белый", engine: "3.5 V6 Twin Turbo", badge: "Люкс", hot: true },
  { id: 2, model: "Kia Carnival", year: 2023, mileage: 8000, auctionPrice: 2800000, deliveryPrice: 450000, totalVlad: 3250000, color: "Чёрный", engine: "3.5 V6", badge: "Семейный" },
  { id: 3, model: "Hyundai Palisade", year: 2022, mileage: 29000, auctionPrice: 2600000, deliveryPrice: 430000, totalVlad: 3030000, color: "Серый", engine: "2.2 Diesel", badge: "Надёжный" },
  { id: 4, model: "Genesis GV70", year: 2022, mileage: 21000, auctionPrice: 3100000, deliveryPrice: 470000, totalVlad: 3570000, color: "Синий Матовый", engine: "2.5 Turbo", badge: "Спорт", hot: true },
  { id: 5, model: "Kia Sorento", year: 2023, mileage: 11000, auctionPrice: 2200000, deliveryPrice: 410000, totalVlad: 2610000, color: "Белый", engine: "1.6 Turbo Hybrid", badge: "Гибрид" },
  { id: 6, model: "Hyundai Tucson", year: 2022, mileage: 33000, auctionPrice: 1700000, deliveryPrice: 380000, totalVlad: 2080000, color: "Зелёный", engine: "2.0 Diesel", badge: "Выгодно" },
]

const chinaCars: Car[] = [
  { id: 1, model: "BYD Han EV", year: 2023, mileage: 9000, auctionPrice: 2900000, deliveryPrice: 260000, totalBlag: 3160000, color: "Красный", engine: "Электро 517 л.с.", badge: "Электро", hot: true },
  { id: 2, model: "Li Auto L9", year: 2023, mileage: 14000, auctionPrice: 3400000, deliveryPrice: 280000, totalBlag: 3680000, color: "Серебристый", engine: "1.5 Turbo EREV", badge: "Гибрид", hot: true },
  { id: 3, model: "Zeekr 001", year: 2023, mileage: 7000, auctionPrice: 2700000, deliveryPrice: 255000, totalBlag: 2955000, color: "Чёрный", engine: "Электро 544 л.с.", badge: "Электро" },
  { id: 4, model: "Tank 500", year: 2022, mileage: 22000, auctionPrice: 3800000, deliveryPrice: 290000, totalBlag: 4090000, color: "Белый", engine: "3.0 Turbo Hybrid", badge: "Внедорожник" },
  { id: 5, model: "Haval H6 HEV", year: 2023, mileage: 16000, auctionPrice: 1400000, deliveryPrice: 220000, totalBlag: 1620000, color: "Синий", engine: "1.5 Hybrid", badge: "Выгодно" },
  { id: 6, model: "Chery Tiggo 8 Pro", year: 2022, mileage: 27000, auctionPrice: 1600000, deliveryPrice: 235000, totalBlag: 1835000, color: "Серый", engine: "2.0 Turbo", badge: "Популярный" },
]

function formatPrice(n: number) {
  return n.toLocaleString("ru-RU") + " ₽"
}

function LiveDot() {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
      </span>
      <span className="text-red-400 text-xs font-mono uppercase tracking-widest">Live</span>
    </span>
  )
}

function AuctionTicker() {
  const tickers = [
    "Toyota Crown — ¥2,850,000 → лот #JA44821",
    "Lexus RX500h — ¥6,100,000 → лот #JA44822",
    "Honda Odyssey — ¥1,920,000 → лот #JA44823",
    "Nissan Skyline — ¥3,400,000 → лот #JA44824",
    "Toyota Vellfire — ¥5,200,000 → лот #JA44825",
    "Mazda CX-60 — ¥3,750,000 → лот #JA44826",
  ]

  const [prices, setPrices] = useState(() =>
    japanCars.map((c) => c.auctionPrice)
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setPrices((prev) =>
        prev.map((p) => {
          const delta = (Math.random() - 0.45) * 30000
          return Math.round((p + delta) / 1000) * 1000
        })
      )
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const tickerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="overflow-hidden bg-black/60 border border-red-500/20 rounded-lg py-2 px-4 mb-8">
      <div className="flex items-center gap-3 overflow-hidden">
        <LiveDot />
        <div className="overflow-hidden flex-1">
          <div
            ref={tickerRef}
            className="flex gap-8 animate-[ticker_18s_linear_infinite] whitespace-nowrap"
          >
            {[...tickers, ...tickers].map((t, i) => (
              <span key={i} className="text-gray-400 text-xs font-mono">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function CarCard({ car, city, flag }: { car: Car; city: string; flag: string }) {
  const total = car.totalVlad ?? car.totalBlag ?? 0

  return (
    <Card className="bg-zinc-900 border border-zinc-800 hover:border-red-500/40 transition-all duration-300 group relative overflow-hidden">
      {car.hot && (
        <div className="absolute top-3 right-3 z-10">
          <Badge className="bg-red-500 text-white text-[10px] px-2 py-0.5">Горячий лот</Badge>
        </div>
      )}
      <CardContent className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="text-white font-bold text-base leading-tight">{car.model}</p>
            <p className="text-gray-400 text-sm mt-0.5">{car.year} · {car.mileage.toLocaleString("ru-RU")} км</p>
          </div>
          <span className="text-lg">{flag}</span>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          <Badge variant="secondary" className="bg-zinc-800 text-gray-300 text-[10px]">
            {car.engine}
          </Badge>
          <Badge variant="secondary" className="bg-zinc-800 text-gray-300 text-[10px]">
            {car.color}
          </Badge>
          {car.grade && (
            <Badge variant="secondary" className="bg-zinc-800 text-yellow-400 text-[10px]">
              ★ {car.grade}
            </Badge>
          )}
          <Badge variant="secondary" className="bg-red-500/10 text-red-400 text-[10px]">
            {car.badge}
          </Badge>
        </div>

        <div className="space-y-1.5 border-t border-zinc-800 pt-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Цена на аукционе</span>
            <span className="text-gray-300 font-mono">{formatPrice(car.auctionPrice)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Доставка + оформление</span>
            <span className="text-gray-300 font-mono">{formatPrice(car.deliveryPrice)}</span>
          </div>
          <div className="flex justify-between text-sm font-bold border-t border-zinc-700 pt-2 mt-2">
            <span className="text-white">Под ключ {city}</span>
            <span className="text-red-400 font-mono text-base">{formatPrice(total)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function StatsBar({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="text-center">
      <p className="text-2xl font-bold text-red-400 font-mono">{value}</p>
      <p className="text-white text-sm font-semibold">{label}</p>
      <p className="text-gray-500 text-xs">{sub}</p>
    </div>
  )
}

export function CarsCatalogSection() {
  return (
    <section id="catalog" className="py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-white mb-4">
            Каталог автомобилей
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Актуальные лоты с аукционов и площадок Азии — цены под ключ уже включают доставку, растаможку и оформление
          </p>
        </div>

        <Tabs defaultValue="japan" className="w-full">
          <TabsList className="w-full md:w-auto mb-8 bg-zinc-900 border border-zinc-800 p-1 grid grid-cols-3 md:inline-grid gap-1">
            <TabsTrigger value="japan" className="data-[state=active]:bg-red-500 data-[state=active]:text-white text-gray-400 font-semibold">
              🇯🇵 Япония
            </TabsTrigger>
            <TabsTrigger value="korea" className="data-[state=active]:bg-red-500 data-[state=active]:text-white text-gray-400 font-semibold">
              🇰🇷 Корея
            </TabsTrigger>
            <TabsTrigger value="china" className="data-[state=active]:bg-red-500 data-[state=active]:text-white text-gray-400 font-semibold">
              🇨🇳 Китай
            </TabsTrigger>
          </TabsList>

          {/* JAPAN */}
          <TabsContent value="japan">
            <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-white font-bold text-xl">Аукционы Японии</h3>
                  <LiveDot />
                </div>
                <p className="text-gray-400 text-sm">Цены под ключ во <span className="text-red-400 font-semibold">Владивостоке</span> · Обновление каждые 3 часа</p>
              </div>
              <div className="flex gap-6 bg-zinc-900 rounded-lg px-6 py-3 border border-zinc-800">
                <StatsBar label="Лотов сегодня" value="2 841" sub="на аукционах" />
                <div className="w-px bg-zinc-700" />
                <StatsBar label="Куплено" value="47" sub="за эту неделю" />
                <div className="w-px bg-zinc-700" />
                <StatsBar label="Ср. доставка" value="38 дн." sub="до Владивостока" />
              </div>
            </div>

            <AuctionTicker />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {japanCars.map((car) => (
                <CarCard key={car.id} car={car} city="Владивосток" flag="🇯🇵" />
              ))}
            </div>
            <p className="text-center text-gray-600 text-xs mt-6 font-mono">
              * Цены актуальны на дату публикации. Курс ¥/₽ пересчитывается ежедневно.
            </p>
          </TabsContent>

          {/* KOREA */}
          <TabsContent value="korea">
            <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-white font-bold text-xl mb-1">Автомобили из Кореи</h3>
                <p className="text-gray-400 text-sm">Цены под ключ во <span className="text-red-400 font-semibold">Владивостоке</span> · Дилеры и аукционы Hyundai, Kia, Genesis</p>
              </div>
              <div className="flex gap-6 bg-zinc-900 rounded-lg px-6 py-3 border border-zinc-800">
                <StatsBar label="В наличии" value="138" sub="автомобилей" />
                <div className="w-px bg-zinc-700" />
                <StatsBar label="Куплено" value="31" sub="за эту неделю" />
                <div className="w-px bg-zinc-700" />
                <StatsBar label="Ср. доставка" value="28 дн." sub="до Владивостока" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {koreaCars.map((car) => (
                <CarCard key={car.id} car={car} city="Владивосток" flag="🇰🇷" />
              ))}
            </div>
            <p className="text-center text-gray-600 text-xs mt-6 font-mono">
              * Цены актуальны на дату публикации. Курс ₩/₽ пересчитывается ежедневно.
            </p>
          </TabsContent>

          {/* CHINA */}
          <TabsContent value="china">
            <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-white font-bold text-xl mb-1">Автомобили из Китая</h3>
                <p className="text-gray-400 text-sm">Цены под ключ в <span className="text-red-400 font-semibold">Благовещенске</span> · BYD, Li Auto, Zeekr, Tank, Haval и другие</p>
              </div>
              <div className="flex gap-6 bg-zinc-900 rounded-lg px-6 py-3 border border-zinc-800">
                <StatsBar label="В наличии" value="214" sub="автомобилей" />
                <div className="w-px bg-zinc-700" />
                <StatsBar label="Куплено" value="58" sub="за эту неделю" />
                <div className="w-px bg-zinc-700" />
                <StatsBar label="Ср. доставка" value="14 дн." sub="до Благовещенска" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {chinaCars.map((car) => (
                <CarCard key={car.id} car={car} city="Благовещенск" flag="🇨🇳" />
              ))}
            </div>
            <p className="text-center text-gray-600 text-xs mt-6 font-mono">
              * Цены актуальны на дату публикации. Курс ¥/₽ пересчитывается ежедневно.
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

export default CarsCatalogSection
