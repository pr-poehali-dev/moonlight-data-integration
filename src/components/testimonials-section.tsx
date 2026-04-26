import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Алексей Соколов",
    role: "Клиент из Москвы",
    avatar: "https://cdn.poehali.dev/projects/95ad7d9d-7198-4f62-a0f1-ef6ab57708f4/files/34c4e3af-a9fe-439c-83ef-35afed9e9d4f.jpg",
    content:
      "Заказал Toyota Land Cruiser из Японии. Всё прошло чисто и быстро — машина пришла в отличном состоянии, ровно как на фото. Комиссия действительно минимальная.",
  },
  {
    name: "Марина Иванова",
    role: "Клиент из Санкт-Петербурга",
    avatar: "https://cdn.poehali.dev/projects/95ad7d9d-7198-4f62-a0f1-ef6ab57708f4/files/5012cdba-4a9a-4b27-94a8-0eb9d2a14a37.jpg",
    content:
      "Брала Hyundai из Кореи. Менеджер был на связи 24/7, подробно объяснял каждый этап. Получила авто быстрее, чем ожидала. Рекомендую!",
  },
  {
    name: "Дмитрий Пахомов",
    role: "Клиент из Екатеринбурга",
    avatar: "https://cdn.poehali.dev/projects/95ad7d9d-7198-4f62-a0f1-ef6ab57708f4/files/a3cdbc25-dae4-4fdd-8117-b1e159ea65ba.jpg",
    content:
      "Взял BYD из Китая — доволен на 100%. Цена вышла ниже рынка на 15%. Car CarRich сделали всё: документы, растаможку, учёт. Приехал забирать готовую машину.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Довольные клиенты</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Сотни автомобилей доставлены — вот что говорят наши клиенты
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}