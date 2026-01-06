import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const services = [
  {
    id: 'yoga',
    title: 'Йога-туры',
    description: 'Гармония тела и души в экзотических местах',
    icon: 'Flower2',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'wellness',
    title: 'Велнес и релакс',
    description: 'SPA-курорты и оздоровительные программы',
    icon: 'Sparkles',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'shopping',
    title: 'Шоп-туры',
    description: 'Шопинг в лучших торговых центрах мира',
    icon: 'ShoppingBag',
    color: 'from-orange-500 to-amber-500',
  },
  {
    id: 'family',
    title: 'Семейный отдых',
    description: 'Незабываемые впечатления для всей семьи',
    icon: 'Users',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'wedding',
    title: 'Свадьба за границей',
    description: 'Организация свадебных церемоний в райских уголках',
    icon: 'Heart',
    color: 'from-rose-500 to-pink-500',
  },
  {
    id: 'sports',
    title: 'Спортивные мероприятия',
    description: 'Билеты на матчи и концерты мирового уровня',
    icon: 'Trophy',
    color: 'from-indigo-500 to-purple-500',
  },
];

const destinations = [
  {
    name: 'Мальдивы',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&auto=format&fit=crop',
    description: 'Райские острова с белоснежными пляжами',
  },
  {
    name: 'Бали',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&auto=format&fit=crop',
    description: 'Духовное сердце Индонезии',
  },
  {
    name: 'Италия',
    image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&auto=format&fit=crop',
    description: 'Искусство, история и кулинария',
  },
  {
    name: 'ОАЭ',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop',
    description: 'Роскошь и восточное гостеприимство',
  },
];

export default function Index() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      <header className="bg-gradient-to-r from-primary via-secondary to-accent text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <Icon name="Plane" size={28} className="animate-fade-in sm:w-8 sm:h-8" />
              <h1 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold animate-fade-in">ЛС ТУР</h1>
            </div>
            <nav className="hidden lg:flex gap-6 animate-fade-in">
              <a href="#services" className="hover:underline transition-all">
                Услуги
              </a>
              <a href="#destinations" className="hover:underline transition-all">
                Направления
              </a>
              <a href="#contact" className="hover:underline transition-all">
                Контакты
              </a>
            </nav>
            <Button variant="secondary" className="animate-fade-in text-sm sm:text-base px-3 sm:px-4 py-2">
              <Icon name="Phone" size={16} className="mr-1 sm:mr-2 sm:w-[18px] sm:h-[18px]" />
              <span className="hidden sm:inline">Заказать звонок</span>
              <span className="sm:hidden">Звонок</span>
            </Button>
          </div>
        </div>
      </header>

      <section className="relative h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&auto=format&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-secondary/80 to-accent/90" />
        </div>
        <div className="relative z-10 text-center text-white px-4 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-4 sm:mb-6 drop-shadow-2xl leading-tight">
            Путешествия вашей мечты
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-2xl mx-auto drop-shadow-lg">
            Организуем незабываемые путешествия по всему миру с 2010 года
          </p>
          <Button size="lg" variant="secondary" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 animate-scale-in shadow-2xl">
            <Icon name="Compass" size={20} className="mr-2 sm:w-6 sm:h-6" />
            Подобрать тур
          </Button>
        </div>
      </section>

      <section id="services" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center mb-3 sm:mb-4 animate-fade-in">
            Наши услуги
          </h2>
          <p className="text-center text-muted-foreground text-base sm:text-lg mb-8 sm:mb-12 animate-fade-in px-4">
            Мы предлагаем широкий спектр туристических услуг для любых целей
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={service.id}
                className="group hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 hover:border-primary/50 animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedService(service.id)}
              >
                <CardHeader>
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon name={service.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl font-heading group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full group-hover:bg-primary/10">
                    Узнать больше
                    <Icon name="ArrowRight" size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="destinations" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-muted/30 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center mb-3 sm:mb-4">
            Популярные направления
          </h2>
          <p className="text-center text-muted-foreground text-base sm:text-lg mb-8 sm:mb-12 px-4">
            Откройте для себя самые красивые места планеты
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest, index) => (
              <Card
                key={dest.name}
                className="overflow-hidden group hover:shadow-2xl transition-all duration-300 animate-fade-in-up border-2 hover:border-accent/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-2xl font-heading font-bold text-white">
                    {dest.name}
                  </h3>
                </div>
                <CardContent className="pt-4">
                  <p className="text-muted-foreground">{dest.description}</p>
                  <Button variant="link" className="p-0 mt-2 text-accent hover:text-accent/80">
                    Смотреть туры
                    <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary via-secondary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4 sm:mb-6">Свяжитесь с нами</h2>
            <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 opacity-90 px-4">
              Наши эксперты помогут подобрать идеальное путешествие для вас
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center gap-3 animate-fade-in-up">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                  <Icon name="Phone" size={28} />
                </div>
                <h3 className="font-heading font-semibold text-lg">Телефон</h3>
                <a href="tel:+79637301501" className="text-lg hover:underline">
                  +7 (963) 730-15-01
                </a>
              </div>
              <div className="flex flex-col items-center gap-3 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                  <Icon name="Mail" size={28} />
                </div>
                <h3 className="font-heading font-semibold text-lg">Email</h3>
                <a href="mailto:07veter07@gmail.com" className="text-lg hover:underline">
                  07veter07@gmail.com
                </a>
              </div>
              <div className="flex flex-col items-center gap-3 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                  <Icon name="MapPin" size={28} />
                </div>
                <h3 className="font-heading font-semibold text-lg">Офис</h3>
                <p className="text-lg">Ежедневно 10:00 - 20:00</p>
              </div>
            </div>
            <Button size="lg" variant="secondary" className="text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-6 shadow-2xl animate-scale-in">
              <Icon name="MessageCircle" size={20} className="mr-2 sm:w-6 sm:h-6" />
              <span className="hidden sm:inline">Написать в WhatsApp</span>
              <span className="sm:hidden">WhatsApp</span>
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© 2024 ЛС ТУР. Все права защищены.</p>
          <p className="text-sm text-gray-500">Туристическое агентство полного цикла</p>
        </div>
      </footer>
    </div>
  );
}