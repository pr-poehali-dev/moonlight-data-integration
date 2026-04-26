import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Низкая комиссия",
    description: "Берём минимальную комиссию на рынке — вы платите честную цену без скрытых наценок и переплат.",
    icon: "zap",
    badge: "Выгодно",
  },
  {
    title: "Проверенные автомобили",
    description: "Каждый автомобиль проходит детальную проверку в стране происхождения перед отправкой в Россию.",
    icon: "target",
    badge: "Гарантия",
  },
  {
    title: "Быстрая доставка",
    description: "Доставляем автомобили из Японии, Китая и Кореи в кратчайшие сроки — от заявки до ключей.",
    icon: "globe",
    badge: "Быстро",
  },
  {
    title: "Япония, Китай, Корея",
    description: "Огромный выбор моделей из трёх крупнейших автомобильных рынков Азии под любой бюджет.",
    icon: "link",
    badge: "Выбор",
  },
  {
    title: "Полное сопровождение",
    description: "Поможем с выбором, оформлением документов, растаможкой и постановкой на учёт под ключ.",
    icon: "lock",
    badge: "Просто",
  },
  {
    title: "Личный менеджер",
    description: "За каждым клиентом закреплён персональный менеджер, который на связи на всех этапах сделки.",
    icon: "brain",
    badge: "Поддержка",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Почему выбирают CarRich</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Честные условия, проверенные авто и полное сопровождение от заявки до ключей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}