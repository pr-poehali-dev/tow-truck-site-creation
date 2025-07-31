import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-secondary text-white py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Truck" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold">СпасЭвак 24/7</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Тарифы</a>
            <a href="#about" className="hover:text-primary transition-colors">О нас</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90">
            <Icon name="Phone" size={16} className="mr-2" />
            Вызвать эвакуатор
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-secondary/90 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <Badge className="bg-primary text-white mb-4 text-lg px-4 py-2">
            🚛 Круглосуточная служба эвакуации
          </Badge>
          <h2 className="text-5xl font-bold mb-6 animate-fade-in">
            Быстрая эвакуация <span className="text-primary">24/7</span>
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in">
            Профессиональная служба эвакуации автомобилей. Приедем в течение 15 минут в любое время суток.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (999) 123-45-67
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary text-lg px-8 py-4">
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-accent">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-12 text-secondary">Наши услуги</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <Icon name="Car" size={48} className="mx-auto text-primary mb-4" />
                <CardTitle className="text-secondary">Эвакуация легковых авто</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  Безопасная эвакуация легковых автомобилей любой сложности
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <Icon name="Truck" size={48} className="mx-auto text-primary mb-4" />
                <CardTitle className="text-secondary">Эвакуация грузовых авто</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  Эвакуация грузовиков, автобусов и коммерческого транспорта
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <Icon name="Wrench" size={48} className="mx-auto text-primary mb-4" />
                <CardTitle className="text-secondary">Техпомощь на дороге</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  Заправка, подзарядка аккумулятора, замена колеса
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-12 text-secondary">Тарифы</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:scale-105 transition-transform">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-secondary">Базовый</CardTitle>
                <div className="text-4xl font-bold text-primary">от 2000₽</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span>Эвакуация до 10 км</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span>Легковые автомобили</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span>Прибытие до 30 минут</span>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">Заказать</Button>
              </CardContent>
            </Card>

            <Card className="border-primary border-2 hover:scale-105 transition-transform">
              <CardHeader className="text-center">
                <Badge className="bg-primary text-white mb-2">Популярный</Badge>
                <CardTitle className="text-2xl text-secondary">Стандарт</CardTitle>
                <div className="text-4xl font-bold text-primary">от 3000₽</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span>Эвакуация до 50 км</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span>Все виды транспорта</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span>Прибытие до 15 минут</span>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">Заказать</Button>
              </CardContent>
            </Card>

            <Card className="hover:scale-105 transition-transform">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-secondary">Премиум</CardTitle>
                <div className="text-4xl font-bold text-primary">от 5000₽</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span>Неограниченное расстояние</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span>Спецтехника</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span>Прибытие до 10 минут</span>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">Заказать</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-accent">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6 text-secondary">О нашей службе</h3>
              <p className="text-lg mb-6 text-gray-700">
                СпасЭвак 24/7 - это профессиональная служба эвакуации, работающая круглосуточно без выходных. 
                Мы гарантируем быстрый отклик и качественное выполнение работ.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={20} className="text-primary" />
                  <span className="text-lg">Работаем 24/7 без выходных</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Shield" size={20} className="text-primary" />
                  <span className="text-lg">Полное страхование автомобилей</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Users" size={20} className="text-primary" />
                  <span className="text-lg">Опытные водители-профессионалы</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={20} className="text-primary" />
                  <span className="text-lg">Покрытие по всему городу</span>
                </div>
              </div>
            </div>
            <div className="h-96 rounded-lg overflow-hidden">
              <img 
                src="/img/11457358-ad48-4d15-894e-968d073c7ddf.jpg" 
                alt="Профессиональная служба эвакуации СпасЭвак 24/7" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-12 text-secondary">Отзывы клиентов</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="animate-fade-in">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    А
                  </div>
                  <div>
                    <CardTitle className="text-lg">Анна К.</CardTitle>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  "Очень быстро приехали! Машину эвакуировали аккуратно, водитель профессионал. Рекомендую!"
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    М
                  </div>
                  <div>
                    <CardTitle className="text-lg">Михаил С.</CardTitle>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  "Работают действительно круглосуточно. Вызывал эвакуатор ночью - приехали за 10 минут!"
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    Е
                  </div>
                  <div>
                    <CardTitle className="text-lg">Елена Р.</CardTitle>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  "Адекватные цены, качественная работа. Автомобиль доставили без единой царапины."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-12">Контакты</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-bold mb-6">Свяжитесь с нами</h4>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={20} className="text-primary" />
                  <span className="text-lg">+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={20} className="text-primary" />
                  <span className="text-lg">info@spasevak.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={20} className="text-primary" />
                  <span className="text-lg">Москва, ул. Примерная, 123</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={20} className="text-primary" />
                  <span className="text-lg">Круглосуточно, без выходных</span>
                </div>
              </div>
            </div>
            <div>
              <Card className="bg-white text-secondary">
                <CardHeader>
                  <CardTitle>Заказать эвакуатор</CardTitle>
                  <CardDescription>Оставьте заявку и мы свяжемся с вами в течение минуты</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input placeholder="Ваше имя" />
                  <Input placeholder="Номер телефона" />
                  <Input placeholder="Адрес подачи эвакуатора" />
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить заявку
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Truck" size={24} className="text-primary" />
            <span className="text-xl font-bold">СпасЭвак 24/7</span>
          </div>
          <p className="text-gray-400">
            © 2024 СпасЭвак 24/7. Все права защищены. Профессиональная служба эвакуации автомобилей.
          </p>
        </div>
      </footer>
    </div>
  );
}