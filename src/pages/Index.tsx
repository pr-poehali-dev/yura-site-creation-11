import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
            Добро пожаловать!
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Современный и стильный сайт для вашего бизнеса. 
            Создан с вниманием к деталям и удобству пользователей.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Icon name="Rocket" className="mr-2" />
              Начать работу
            </Button>
            <Button size="lg" variant="outline">
              <Icon name="Info" className="mr-2" />
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" className="text-blue-600" size={24} />
              <span className="font-bold text-xl">YourSite</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-blue-600 transition-colors">Главная</a>
              <a href="#about" className="hover:text-blue-600 transition-colors">О нас</a>
              <a href="#services" className="hover:text-blue-600 transition-colors">Услуги</a>
              <a href="#portfolio" className="hover:text-blue-600 transition-colors">Портфолио</a>
              <a href="#contact" className="hover:text-blue-600 transition-colors">Контакты</a>
            </div>
            <Button variant="outline" size="sm">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-20">
        {/* About Section */}
        <section id="about" className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              О нашей компании
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Мы создаем качественные решения для вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Target',
                title: 'Наша миссия',
                description: 'Помогаем компаниям достигать целей через инновационные решения'
              },
              {
                icon: 'Users',
                title: 'Команда',
                description: 'Опытные специалисты с большим опытом в своей области'
              },
              {
                icon: 'Award',
                title: 'Качество',
                description: 'Высокие стандарты качества и внимание к деталям'
              }
            ].map((item, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Icon name={item.icon as any} className="text-blue-600" size={24} />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг для развития вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: 'Monitor',
                title: 'Веб-разработка',
                description: 'Создание современных и функциональных веб-сайтов',
                price: 'от 50 000 ₽'
              },
              {
                icon: 'Smartphone',
                title: 'Мобильные приложения',
                description: 'Разработка приложений для iOS и Android',
                price: 'от 100 000 ₽'
              },
              {
                icon: 'TrendingUp',
                title: 'Маркетинг',
                description: 'Продвижение вашего бизнеса в интернете',
                price: 'от 30 000 ₽'
              },
              {
                icon: 'Palette',
                title: 'Дизайн',
                description: 'Создание уникального фирменного стиля',
                price: 'от 25 000 ₽'
              },
              {
                icon: 'Database',
                title: 'Базы данных',
                description: 'Проектирование и оптимизация баз данных',
                price: 'от 40 000 ₽'
              },
              {
                icon: 'Shield',
                title: 'Безопасность',
                description: 'Защита данных и кибербезопасность',
                price: 'от 35 000 ₽'
              }
            ].map((service, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                    <Icon name={service.icon as any} className="text-blue-600" size={24} />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-2xl font-bold text-blue-600">{service.price}</p>
                    <Button className="w-full">
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Наше портфолио
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Примеры успешно реализованных проектов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Интернет-магазин',
                description: 'Современная платформа электронной коммерции',
                category: 'E-commerce',
                image: '/img/d6609b7b-a3b5-4d8f-8564-0acaa7c675b3.jpg'
              },
              {
                title: 'Корпоративный сайт',
                description: 'Представительский сайт для крупной компании',
                category: 'Corporate',
                image: '/img/a052960b-49d4-4e71-b0b5-641b29d818bb.jpg'
              },
              {
                title: 'Мобильное приложение',
                description: 'Приложение для управления задачами',
                category: 'Mobile',
                image: '/img/ff4fae71-b7a3-4558-bc3c-aeb8d79c26f7.jpg'
              }
            ].map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <CardTitle className="group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Button variant="ghost" className="w-full justify-start p-0 hover:text-blue-600">
                    Подробнее
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Готовы обсудить ваш проект и ответить на любые вопросы
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle>Контактная информация</CardTitle>
                <CardDescription>
                  Свяжитесь с нами удобным для вас способом
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="text-blue-600" />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" className="text-blue-600" />
                  <span>info@yoursite.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" className="text-blue-600" />
                  <span>Москва, ул. Примерная, д. 123</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Globe" className="text-blue-600" />
                  <span>www.yoursite.ru</span>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 bg-blue-50">
              <CardHeader className="p-0 mb-6">
                <CardTitle>Часы работы</CardTitle>
                <CardDescription>
                  Мы работаем для вас в удобное время
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 space-y-3">
                <div className="flex justify-between">
                  <span>Понедельник - Пятница</span>
                  <span className="text-blue-600 font-medium">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Суббота</span>
                  <span className="text-blue-600 font-medium">10:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Воскресенье</span>
                  <span className="text-gray-500">Выходной</span>
                </div>
                <div className="pt-4">
                  <Button className="w-full">
                    <Icon name="Calendar" className="mr-2" />
                    Записаться на консультацию
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Zap" className="text-blue-600" size={24} />
                <span className="font-bold text-xl">YourSite</span>
              </div>
              <p className="text-gray-600">
                Создаем качественные веб-решения для вашего бизнеса. 
                Современные технологии и индивидуальный подход.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Услуги</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Веб-разработка</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Мобильные приложения</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Дизайн</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Маркетинг</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Компания</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-600 transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Команда</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Блог</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Контакты</h3>
              <div className="space-y-2 text-gray-600">
                <p>+7 (999) 123-45-67</p>
                <p>info@yoursite.ru</p>
                <div className="flex space-x-4 pt-4">
                  <Button variant="ghost" size="sm">
                    <Icon name="Facebook" size={20} />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Icon name="Twitter" size={20} />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Icon name="Instagram" size={20} />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Icon name="Linkedin" size={20} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2024 YourSite. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;