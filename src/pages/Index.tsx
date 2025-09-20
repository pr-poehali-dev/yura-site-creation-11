import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [showReading, setShowReading] = useState(false);

  const tarotCards = [
    { id: 1, name: 'Дурак', meaning: 'Новые начинания, спонтанность, свобода' },
    { id: 2, name: 'Маг', meaning: 'Сила воли, манифестация, творчество' },
    { id: 3, name: 'Верховная Жрица', meaning: 'Интуиция, подсознание, тайны' },
    { id: 4, name: 'Императрица', meaning: 'Плодородие, женственность, изобилие' },
    { id: 5, name: 'Император', meaning: 'Власть, стабильность, контроль' },
    { id: 6, name: 'Иерофант', meaning: 'Традиции, духовность, обучение' },
  ];

  const blogPosts = [
    {
      title: 'Магия полнолуния: как использовать лунную энергию',
      excerpt: 'Полнолуние — время наивысшей силы. Узнайте, как правильно проводить ритуалы...',
      date: '15 сентября 2024',
      category: 'Астрология'
    },
    {
      title: 'Руны для начинающих: первые шаги в древнем искусстве',
      excerpt: 'Руническая магия открывает двери в мир древней мудрости...',
      date: '12 сентября 2024',
      category: 'Руны'
    },
    {
      title: 'Защитные амулеты: создаем оберег своими руками',
      excerpt: 'Простые способы создания защитных талисманов в домашних условиях...',
      date: '10 сентября 2024',
      category: 'Магия'
    }
  ];

  const handleCardClick = (cardId: number) => {
    if (selectedCards.length < 3 && !selectedCards.includes(cardId)) {
      setSelectedCards([...selectedCards, cardId]);
    }
  };

  const resetReading = () => {
    setSelectedCards([]);
    setShowReading(false);
  };

  const performReading = () => {
    if (selectedCards.length === 3) {
      setShowReading(true);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="mystical-gradient py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Мистические Откровения
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Погрузитесь в мир магии, гаданий и древних знаний. 
              Откройте двери в таинственную вселенную предсказаний.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-mystic-deep hover:bg-white/90">
                <Icon name="Sparkles" className="mr-2" />
                Начать гадание
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-mystic-deep">
                <Icon name="BookOpen" className="mr-2" />
                Читать блог
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Eye" className="text-accent" size={24} />
              <span className="font-bold text-xl">Mystical</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="hover:text-accent transition-colors">Обо мне</a>
              <a href="#tarot" className="hover:text-accent transition-colors">Гадания</a>
              <a href="#blog" className="hover:text-accent transition-colors">Статьи</a>
              <a href="#services" className="hover:text-accent transition-colors">Услуги</a>
              <a href="#spreads" className="hover:text-accent transition-colors">Расклады</a>
              <a href="#contact" className="hover:text-accent transition-colors">Контакты</a>
            </div>
            <Button variant="outline" size="sm">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-20">
        {/* Tarot Reading Section */}
        <section id="tarot" className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold mystical-text">
              Интерактивный расклад Таро
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите 3 карты для получения персонального предсказания
            </p>
          </div>

          <div className="relative">
            <img 
              src="/img/591c39db-abf4-47b9-bc08-d9a183be5244.jpg" 
              alt="Mystical background" 
              className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-20"
            />
            <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl p-8 border">
              {!showReading ? (
                <>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
                    {tarotCards.map((card) => (
                      <div
                        key={card.id}
                        className={`tarot-card h-40 flex items-center justify-center text-center p-4 ${
                          selectedCards.includes(card.id) ? 'ring-2 ring-accent' : ''
                        }`}
                        onClick={() => handleCardClick(card.id)}
                      >
                        <div className="text-accent">
                          <Icon name="Sparkles" size={32} className="mx-auto mb-2" />
                          <p className="text-sm font-medium">Карта {card.id}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="text-center space-y-4">
                    <div className="flex justify-center gap-2">
                      {[1, 2, 3].map((pos) => (
                        <div
                          key={pos}
                          className={`w-4 h-4 rounded-full border-2 ${
                            selectedCards.length >= pos ? 'bg-accent border-accent' : 'border-muted-foreground'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground">
                      Выбрано карт: {selectedCards.length} из 3
                    </p>
                    <div className="flex gap-4 justify-center">
                      <Button 
                        onClick={performReading}
                        disabled={selectedCards.length !== 3}
                        className="bg-accent text-accent-foreground hover:bg-accent/90"
                      >
                        <Icon name="Wand2" className="mr-2" />
                        Получить расклад
                      </Button>
                      <Button variant="outline" onClick={resetReading}>
                        Сбросить
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-center mystical-text">
                    Ваш расклад готов
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {selectedCards.map((cardId, index) => {
                      const card = tarotCards.find(c => c.id === cardId);
                      const positions = ['Прошлое', 'Настоящее', 'Будущее'];
                      return (
                        <Card key={cardId} className="bg-card/80 backdrop-blur-sm">
                          <CardHeader className="text-center">
                            <div className="w-16 h-16 mx-auto bg-accent/20 rounded-full flex items-center justify-center mb-4">
                              <Icon name="Star" className="text-accent" size={24} />
                            </div>
                            <CardTitle className="text-accent">{positions[index]}</CardTitle>
                            <CardDescription className="font-medium text-foreground">
                              {card?.name}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground text-center">
                              {card?.meaning}
                            </p>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                  <div className="text-center">
                    <Button onClick={resetReading} variant="outline">
                      <Icon name="RotateCcw" className="mr-2" />
                      Новое гадание
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold mystical-text">
              Мистический блог
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Погружение в мир эзотерики и древних знаний
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                  </div>
                  <CardTitle className="group-hover:text-accent transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button variant="ghost" className="w-full justify-start p-0 hover:text-accent">
                    Читать далее
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold mystical-text">
              Мои услуги
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Профессиональные гадания и консультации
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: 'Star',
                title: 'Гадание на Таро',
                description: 'Персональные расклады на любые жизненные вопросы',
                price: 'от 2000 ₽'
              },
              {
                icon: 'Moon',
                title: 'Лунная магия',
                description: 'Ритуалы и практики в соответствии с лунными циклами',
                price: 'от 3000 ₽'
              },
              {
                icon: 'Gem',
                title: 'Работа с кристаллами',
                description: 'Подбор и настройка кристаллов для ваших целей',
                price: 'от 1500 ₽'
              }
            ].map((service, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto bg-accent/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                    <Icon name={service.icon as any} className="text-accent" size={24} />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-2xl font-bold text-accent">{service.price}</p>
                    <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                      Записаться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold mystical-text">
              Связаться со мной
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Готова ответить на ваши вопросы и помочь в трудную минуту
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle>Онлайн консультация</CardTitle>
                <CardDescription>
                  Свяжитесь со мной для записи на гадание или консультацию
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="MessageCircle" className="text-accent" />
                  <span>Telegram: @mystical_insights</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="text-accent" />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" className="text-accent" />
                  <span>mystical@example.com</span>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 bg-accent/10">
              <CardHeader className="p-0 mb-6">
                <CardTitle>График работы</CardTitle>
                <CardDescription>
                  Принимаю клиентов в удобное для вас время
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 space-y-3">
                <div className="flex justify-between">
                  <span>Понедельник - Пятница</span>
                  <span className="text-accent">10:00 - 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Суббота - Воскресенье</span>
                  <span className="text-accent">12:00 - 18:00</span>
                </div>
                <div className="pt-4">
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
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
      <footer className="bg-card border-t mt-20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Eye" className="text-accent" size={24} />
                <span className="font-bold text-xl">Mystical Insights</span>
              </div>
              <p className="text-muted-foreground">
                Ваш проводник в мир магии и мистических откровений. 
                Откройте свою судьбу вместе со мной.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Гадание на Таро</li>
                <li>Астрологические прогнозы</li>
                <li>Руническая магия</li>
                <li>Лунные ритуалы</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Социальные сети</h3>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button variant="ghost" size="sm">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="sm">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Mystical Insights. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;