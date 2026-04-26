import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
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
  image: string
  detail?: {
    auctionYen: number
    auctionRub: number
    exportFee: number
    transportJP: number
    seaFreight: number
    customsDuty: number
    exciseTax: number
    vat: number
    sbkts: number
    registration: number
    ourFee: number
    rate: number
  }
}

const japanCars: Car[] = [
  {
    id: 2, model: "Toyota Alphard", year: 2023, mileage: 12000,
    auctionPrice: 4900000, deliveryPrice: 540000, totalVlad: 5440000,
    grade: "5", color: "Чёрный", engine: "2.5 Hybrid", badge: "Премиум",
    image: "https://cdn.poehali.dev/projects/95ad7d9d-7198-4f62-a0f1-ef6ab57708f4/files/b0bc5fd4-edda-4064-846e-34c91b06a1b2.jpg",
    detail: { auctionYen: 4900000, auctionRub: 2940000, exportFee: 110000, transportJP: 75000, seaFreight: 260000, customsDuty: 890000, exciseTax: 310000, vat: 0, sbkts: 85000, registration: 45000, ourFee: 175000, rate: 0.6 }
  },
  {
    id: 3, model: "Lexus LX 600", year: 2022, mileage: 18000,
    auctionPrice: 7200000, deliveryPrice: 680000, totalVlad: 7880000,
    grade: "4", color: "Серебристый", engine: "3.5 V6 Twin Turbo", badge: "Премиум",
    image: "https://cdn.poehali.dev/projects/95ad7d9d-7198-4f62-a0f1-ef6ab57708f4/files/4b217184-2172-453e-b1e1-33447412ff89.jpg",
    detail: { auctionYen: 7200000, auctionRub: 4320000, exportFee: 145000, transportJP: 90000, seaFreight: 300000, customsDuty: 1380000, exciseTax: 560000, vat: 0, sbkts: 85000, registration: 45000, ourFee: 220000, rate: 0.6 }
  },
  {
    id: 4, model: "Nissan Elgrand", year: 2021, mileage: 35000,
    auctionPrice: 2400000, deliveryPrice: 480000, totalVlad: 2880000,
    grade: "4.5", color: "Белый", engine: "3.5 V6", badge: "Семейный",
    image: "https://cdn.poehali.dev/projects/95ad7d9d-7198-4f62-a0f1-ef6ab57708f4/files/b0bc5fd4-edda-4064-846e-34c91b06a1b2.jpg",
    detail: { auctionYen: 2400000, auctionRub: 1440000, exportFee: 95000, transportJP: 65000, seaFreight: 230000, customsDuty: 540000, exciseTax: 210000, vat: 0, sbkts: 85000, registration: 45000, ourFee: 120000, rate: 0.6 }
  },
  {
    id: 5, model: "Honda Stepwgn", year: 2022, mileage: 22000,
    auctionPrice: 1850000, deliveryPrice: 420000, totalVlad: 2270000,
    grade: "5", color: "Синий", engine: "1.5 Turbo", badge: "Выгодно", hot: true,
    image: "https://cdn.poehali.dev/projects/95ad7d9d-7198-4f62-a0f1-ef6ab57708f4/files/b02a6e44-8847-4473-9cf9-cf3a5885bc7c.jpg",
    detail: { auctionYen: 1850000, auctionRub: 1110000, exportFee: 80000, transportJP: 55000, seaFreight: 200000, customsDuty: 390000, exciseTax: 125000, vat: 0, sbkts: 85000, registration: 45000, ourFee: 90000, rate: 0.6 }
  },
  {
    id: 6, model: "Subaru Forester", year: 2021, mileage: 41000,
    auctionPrice: 1600000, deliveryPrice: 390000, totalVlad: 1990000,
    grade: "4", color: "Тёмно-синий", engine: "2.5 Boxer", badge: "4x4",
    image: "https://cdn.poehali.dev/projects/95ad7d9d-7198-4f62-a0f1-ef6ab57708f4/files/b02a6e44-8847-4473-9cf9-cf3a5885bc7c.jpg",
    detail: { auctionYen: 1600000, auctionRub: 960000, exportFee: 75000, transportJP: 50000, seaFreight: 195000, customsDuty: 340000, exciseTax: 100000, vat: 0, sbkts: 85000, registration: 45000, ourFee: 80000, rate: 0.6 }
  },
]

const koreaCars: Car[] = [
  { id: 1, model: "Genesis GV80", year: 2023, mileage: 15000, auctionPrice: 4200000, deliveryPrice: 510000, totalVlad: 4710000, color: "Белый", engine: "3.5 V6 Twin Turbo", badge: "Люкс", hot: true, image: "https://cdn.poehali.dev/projects/95ad7d9d-7198-4f62-a0f1-ef6ab57708f4/files/4ce15136-15de-48fd-93ba-baccad3174f1.jpg" },
  { id: 2, model: "Kia Carnival", year: 2023, mileage: 8000, auctionPrice: 2800000, deliveryPrice: 450000, totalVlad: 3250000, color: "Чёрный", engine: "3.5 V6", badge: "Семейный", image: "https://cdn.poehali.dev/projects/95ad7d9d-7198-4f62-a0f1-ef6ab57708f4/files/b0bc5fd4-edda-4064-846e-34c91b06a1b2.jpg" },
  { id: 3, model: "Hyundai Palisade", year: 2022, mileage: 29000, auctionPrice: 2600000, deliveryPrice: 430000, totalVlad: 3030000, color: "Серый", engine: "2.2 Diesel", badge: "Надёжный", image: "https://cdn.poehali.dev/projects/95ad7d9d-7198-4f62-a0f1-ef6ab57708f4/files/4ce15136-15de-48fd-93ba-baccad3174f1.jpg" },
  { id: 4, model: "Genesis GV70", year: 2022, mileage: 21000, auctionPrice: 3100000, deliveryPrice: 470000, totalVlad: 3570000, color: "Синий Матовый", engine: "2.5 Turbo", badge: "Спорт", hot: true, image: "https://cdn.poehali.dev/projects/95ad7d9d-7198-4f62-a0f1-ef6ab57708f4/files/4ce15136-15de-48fd-93ba-baccad3174f1.jpg" },
  { id: 5, model: "Kia Sorento", year: 2023, mileage: 11000, auctionPrice: 2200000, deliveryPrice: 410000, totalVlad: 2610000, color: "Белый", engine: "1.6 Turbo Hybrid", badge: "Гибрид", image: "https://cdn.poehali.dev/projects/95ad7d9d-7198-4f62-a0f1-ef6ab57708f4/files/b02a6e44-8847-4473-9cf9-cf3a5885bc7c.jpg" },
  { id: 6, model: "Hyundai Tucson", year: 2022, mileage: 33000, auctionPrice: 1700000, deliveryPrice: 380000, totalVlad: 2080000, color: "Зелёный", engine: "2.0 Diesel", badge: "Выгодно", image: "https://cdn.poehali.dev/projects/95ad7d9d-7198-4f62-a0f1-ef6ab57708f4/files/4ce15136-15de-48fd-93ba-baccad3174f1.jpg" },
]

const chinaCars: Car[] = [
  { id: 1, model: "BYD Han EV", year: 2023, mileage: 9000, auctionPrice: 2900000, deliveryPrice: 260000, totalBlag: 3160000, color: "Красный", engine: "Электро 517 л.с.", badge: "Электро", hot: true, image: "https://cdn.poehali.dev/projects/95ad7d9d-7198-4f62-a0f1-ef6ab57708f4/files/c9835171-55f4-4c54-b67d-04348cf11ba7.jpg" },
  { id: 2, model: "Li Auto L9", year: 2023, mileage: 14000, auctionPrice: 3400000, deliveryPrice: 280000, totalBlag: 3680000, color: "Серебристый", engine: "1.5 Turbo EREV", badge: "Гибрид", hot: true, image: "https://cdn.poehali.dev/projects/95ad7d9d-7198-4f62-a0f1-ef6ab57708f4/files/814d078c-be8d-4970-b310-efcb1ad9da8a.jpg" },
  { id: 3, model: "Zeekr 001", year: 2023, mileage: 7000, auctionPrice: 2700000, deliveryPrice: 255000, totalBlag: 2955000, color: "Чёрный", engine: "Электро 544 л.с.", badge: "Электро", image: "https://cdn.poehali.dev/projects/95ad7d9d-7198-4f62-a0f1-ef6ab57708f4/files/c9835171-55f4-4c54-b67d-04348cf11ba7.jpg" },
  { id: 4, model: "Tank 500", year: 2022, mileage: 22000, auctionPrice: 3800000, deliveryPrice: 290000, totalBlag: 4090000, color: "Белый", engine: "3.0 Turbo Hybrid", badge: "Внедорожник", image: "https://cdn.poehali.dev/projects/95ad7d9d-7198-4f62-a0f1-ef6ab57708f4/files/814d078c-be8d-4970-b310-efcb1ad9da8a.jpg" },
  { id: 5, model: "Haval H6 HEV", year: 2023, mileage: 16000, auctionPrice: 1400000, deliveryPrice: 220000, totalBlag: 1620000, color: "Синий", engine: "1.5 Hybrid", badge: "Выгодно", image: "https://cdn.poehali.dev/projects/95ad7d9d-7198-4f62-a0f1-ef6ab57708f4/files/f005079f-78ff-4c70-ad12-77884921100f.jpg" },
  { id: 6, model: "Chery Tiggo 8 Pro", year: 2022, mileage: 27000, auctionPrice: 1600000, deliveryPrice: 235000, totalBlag: 1835000, color: "Серый", engine: "2.0 Turbo", badge: "Популярный", image: "https://cdn.poehali.dev/projects/95ad7d9d-7198-4f62-a0f1-ef6ab57708f4/files/d2fa77dd-534d-4372-96e1-e2b28403b42b.jpg" },
]

function fmt(n: number) {
  return n.toLocaleString("ru-RU") + " ₽"
}

function DetailRow({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className={`flex justify-between items-center py-2 border-b border-zinc-800 ${highlight ? "font-bold" : ""}`}>
      <span className={highlight ? "text-white" : "text-gray-400 text-sm"}>{label}</span>
      <span className={highlight ? "text-red-400 text-lg" : "text-gray-200 font-mono text-sm"}>{value}</span>
    </div>
  )
}

function AuctionDetailModal({ car, open, onClose }: { car: Car; open: boolean; onClose: () => void }) {
  if (!car.detail) return null
  const d = car.detail
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-zinc-950 border border-zinc-800 text-white max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-orbitron text-base text-white flex items-center gap-2">
            <Icon name="Calculator" size={18} className="text-red-400" />
            Детальный расчёт: {car.model}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-0 mt-2">
          <p className="text-xs text-gray-500 mb-4 font-mono bg-zinc-900 px-3 py-2 rounded-lg">
            Курс ¥/₽ на сегодня: <span className="text-white font-semibold">{d.rate}</span> · Обновлено автоматически
          </p>

          <p className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-2 mt-4">🇯🇵 Расходы в Японии</p>
          <DetailRow label="Цена на аукционе (иен)" value={`¥${d.auctionYen.toLocaleString("ru-RU")}`} />
          <DetailRow label="Цена на аукционе (рублей)" value={fmt(d.auctionRub)} />
          <DetailRow label="Экспортный сбор JAA / USS" value={fmt(d.exportFee)} />
          <DetailRow label="Транспорт до порта Японии" value={fmt(d.transportJP)} />

          <p className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-2 mt-5">🚢 Морская доставка</p>
          <DetailRow label="Фрахт (Япония → Владивосток)" value={fmt(d.seaFreight)} />

          <p className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-2 mt-5">🇷🇺 Расходы в России</p>
          <DetailRow label="Таможенная пошлина" value={fmt(d.customsDuty)} />
          <DetailRow label="Утилизационный сбор" value={fmt(d.exciseTax)} />
          <DetailRow label="НДС" value={d.vat === 0 ? "Не применяется" : fmt(d.vat)} />
          <DetailRow label="СБКТС (одобрение типа ТС)" value={fmt(d.sbkts)} />
          <DetailRow label="Постановка на учёт / ЭПТС" value={fmt(d.registration)} />

          <p className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-2 mt-5">Car CarRich</p>
          <DetailRow label="Наша комиссия" value={fmt(d.ourFee)} />

          <div className="mt-4 pt-3 border-t border-zinc-600">
            <DetailRow label="ИТОГО под ключ Владивосток" value={fmt(car.totalVlad ?? 0)} highlight />
          </div>

          <div className="mt-4 p-3 bg-yellow-500/5 border border-yellow-500/20 rounded-lg">
            <p className="text-xs text-gray-400 leading-relaxed">
              ⚠️ Расчёт ориентировочный. Итоговая стоимость зависит от курса валют, объёма двигателя
              и таможенной классификации. Менеджер уточнит точную сумму бесплатно.
            </p>
          </div>
        </div>

        <Button className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white border-0 font-semibold" onClick={onClose}>
          <Icon name="MessageCircle" size={15} className="mr-2" />
          Запросить точный расчёт
        </Button>
      </DialogContent>
    </Dialog>
  )
}

function CarCard({ car, city, flag, showDetail }: { car: Car; city: string; flag: string; showDetail?: boolean }) {
  const [detailOpen, setDetailOpen] = useState(false)
  const total = car.totalVlad ?? car.totalBlag ?? 0

  return (
    <>
      <Card className="bg-zinc-900 border border-zinc-800 hover:border-red-500/40 transition-all duration-300 group relative overflow-hidden flex flex-col">
        {car.hot && (
          <div className="absolute top-3 right-3 z-10">
            <Badge className="bg-red-500 text-white text-[10px] px-2 py-0.5">Горячий лот</Badge>
          </div>
        )}
        <div className="relative h-44 overflow-hidden bg-zinc-950">
          <img
            src={car.image}
            alt={car.model}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
          <div className="absolute bottom-2 left-3 flex items-center gap-1.5">
            <span className="text-sm">{flag}</span>
            {car.grade && (
              <span className="text-xs text-yellow-400 font-mono bg-black/60 px-1.5 py-0.5 rounded">★ {car.grade}</span>
            )}
          </div>
        </div>

        <CardContent className="p-4 flex flex-col flex-1">
          <div className="mb-3">
            <p className="text-white font-bold text-base leading-tight">{car.model}</p>
            <p className="text-gray-400 text-sm mt-0.5">{car.year} · {car.mileage.toLocaleString("ru-RU")} км</p>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-4">
            <Badge variant="secondary" className="bg-zinc-800 text-gray-300 text-[10px]">{car.engine}</Badge>
            <Badge variant="secondary" className="bg-zinc-800 text-gray-300 text-[10px]">{car.color}</Badge>
            <Badge variant="secondary" className="bg-red-500/10 text-red-400 text-[10px]">{car.badge}</Badge>
          </div>

          <div className="space-y-1.5 border-t border-zinc-800 pt-3 mb-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Цена</span>
              <span className="text-gray-300 font-mono">{fmt(car.auctionPrice)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Доставка + оформление</span>
              <span className="text-gray-300 font-mono">{fmt(car.deliveryPrice)}</span>
            </div>
            <div className="flex justify-between text-sm font-bold border-t border-zinc-700 pt-2 mt-2">
              <span className="text-white">Под ключ {city}</span>
              <span className="text-red-400 font-mono text-base">{fmt(total)}</span>
            </div>
          </div>

          <div className="mt-auto flex flex-col gap-2">
            {showDetail && (
              <Button
                variant="outline"
                size="sm"
                className="w-full border-zinc-700 text-gray-300 hover:border-red-500 hover:text-white bg-transparent text-xs"
                onClick={() => setDetailOpen(true)}
              >
                <Icon name="Calculator" size={13} className="mr-1.5" />
                Детальный расчёт стоимости
              </Button>
            )}
            <Button size="sm" className="w-full bg-red-500 hover:bg-red-600 text-white border-0 text-xs font-semibold">
              <Icon name="MessageCircle" size={13} className="mr-1.5" />
              Запросить актуальную цену
            </Button>
          </div>
        </CardContent>
      </Card>

      {showDetail && car.detail && (
        <AuctionDetailModal car={car} open={detailOpen} onClose={() => setDetailOpen(false)} />
      )}
    </>
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
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-white mb-4">Каталог автомобилей</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Актуальные предложения из Азии — цены под ключ уже включают доставку, растаможку и оформление
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
                <h3 className="text-white font-bold text-xl mb-1">Автомобили из Японии</h3>
                <p className="text-gray-400 text-sm">Цены под ключ во <span className="text-red-400 font-semibold">Владивостоке</span> · Обновление каждые 3 часа</p>
              </div>
              <div className="flex gap-6 bg-zinc-900 rounded-lg px-6 py-3 border border-zinc-800">
                <StatsBar label="В наличии" value="180+" sub="автомобилей" />
                <div className="w-px bg-zinc-700" />
                <StatsBar label="Куплено" value="47" sub="за эту неделю" />
                <div className="w-px bg-zinc-700" />
                <StatsBar label="Ср. доставка" value="38 дн." sub="до Владивостока" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {japanCars.map((car) => (
                <CarCard key={car.id} car={car} city="Владивосток" flag="🇯🇵" showDetail />
              ))}
            </div>
            <p className="text-center text-gray-600 text-xs mt-6 font-mono">* Цены актуальны на дату публикации. Курс ¥/₽ пересчитывается ежедневно.</p>
          </TabsContent>

          {/* KOREA */}
          <TabsContent value="korea">
            <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-white font-bold text-xl mb-1">Автомобили из Кореи</h3>
                <p className="text-gray-400 text-sm">Цены под ключ во <span className="text-red-400 font-semibold">Владивостоке</span> · Дилеры Hyundai, Kia, Genesis</p>
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
            <p className="text-center text-gray-600 text-xs mt-6 font-mono">* Цены актуальны на дату публикации. Курс ₩/₽ пересчитывается ежедневно.</p>
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
            <p className="text-center text-gray-600 text-xs mt-6 font-mono">* Цены актуальны на дату публикации. Курс ¥/₽ пересчитывается ежедневно.</p>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

export default CarsCatalogSection