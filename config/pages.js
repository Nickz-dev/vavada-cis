module.exports = {
  defaultDomain: "vavada-cis.com",
  mountId: "vavada",
  defaultLink: "https://vavada.c-wn.ru",
  pages: [
    {
      id: "index",
      filename: "index",
      title: "VAVADA (ВАВАДА) - Официальный сайт казино | Регистрация 2025",
      description:
        "ВАВАДА Казино - официальный сайт казино. Бонусы за регистрацию, более 5000 лицензионных слотов. Надежное онлайн казино быстрый вывод средств.",
      dataLink: "https://vavada.c-wn.ru",
      keywords:
        "VAVADA, ВАВАДА, вавада казино, vavada casino, vavada com, официальный сайт вавада, official site",
      canonical: "https://vavada-cis.com",
      ogImage: "https://vavada-cis.com/images/og-image.jpg",
      type: "main",
      hreflangs: {
        "x-default": "https://vavada-cis.com",
      },
      staticContent: `  
      <div class="flex flex-col min-h-screen">  
   <header class="bg-[#1c1c2d] border-b border-[#ff424d]/20 sticky top-0 z-50  rounded-xl w-full">
    <!-- Хлебные крошки (только для десктопа) -->
    <nav aria-label="Навигационная цепочка" class="hidden md:block bg-[#232338] py-2 px-4">
        <div class="max-w-7xl mx-auto">
            <ol class="flex text-sm" itemscope itemtype="https://schema.org/BreadcrumbList">
                <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                    <a href="/" itemprop="item" class="text-gray-400 hover:text-white transition-colors">
                        <span itemprop="name">Главная</span>
                    </a>
                    <meta itemprop="position" content="1" />
                </li>
                <li class="mx-2 text-gray-400">/</li>
                <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                    <span itemprop="name" class="text-gray-400">Текущая страница</span>
                    <meta itemprop="position" content="2" />
                </li>
            </ol>
        </div>
    </nav>

    <!-- Основной хедер -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16 md:h-20">
            <!-- Логотип -->
            <div class="flex-shrink-0 flex items-center">
                <a href="/" class="text-2xl font-bold bg-gradient-to-r from-[#ff424d] to-[#ff2c39] text-transparent bg-clip-text hover:opacity-90 transition-opacity">
                    VAVADA
                </a>
            </div>

            <!-- Десктопное меню -->
            <div class="hidden md:flex md:items-center md:space-x-6">
                <a href="/registration" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    Регистрация
                </a>
                <a href="/mirrors" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    Зеркало
                </a>
                <a href="/downloads" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    Скачать
                </a>
            </div>

            <!-- Кнопка входа (десктоп) -->
            <div class="hidden md:block">
                <a href="#login" class="ml-6 bg-gradient-to-r from-[#ff424d] to-[#ff2c39] text-white px-6 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-opacity shadow-lg shadow-[#ff424d]/30">
                    Войти
                </a>
            </div>

            <!-- Мобильное меню-бургер -->
            <div class="md:hidden flex items-center">
                <button type="button" id="mobile-menu-button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#2a2a42] focus:outline-none transition-colors" aria-controls="mobile-menu" aria-expanded="false">
                    <span class="sr-only">Открыть меню</span>
                    <!-- Иконка бургера -->
                    <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <!-- Иконка крестика -->
                    <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    </div>

    <!-- Мобильное меню (скрыто по умолчанию) -->
    <div class="hidden md:hidden bg-[#232338]" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/registration" class="text-gray-300 hover:bg-[#2a2a42] hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors">
                Регистрация
            </a>
            <a href="/mirrors" class="text-gray-300 hover:bg-[#2a2a42] hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors">
                Зеркало
            </a>
            <a href="/downloads" class="text-gray-300 hover:bg-[#2a2a42] hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors">
                Скачать
            </a>
            <div class="pt-2">
                <a href="#login" class="w-full flex justify-center bg-gradient-to-r from-[#ff424d] to-[#ff2c39] text-white px-6 py-3 rounded-md text-base font-bold hover:opacity-90 transition-opacity">
                    Войти в казино
                </a>
            </div>
        </div>
    </div>
</header>

<script>
    // Скрипт для мобильного меню
    document.getElementById('mobile-menu-button').addEventListener('click', function() {
        const menu = document.getElementById('mobile-menu');
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        
        // Переключаем видимость меню
        menu.classList.toggle('hidden');
        
        // Меняем иконку
        this.querySelector('svg.block').classList.toggle('hidden');
        this.querySelector('svg.hidden').classList.toggle('hidden');
        
        // Обновляем атрибут доступности
        this.setAttribute('aria-expanded', !isExpanded);
    });
</script>

<!-- Main Content Block -->  
<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" itemscope itemtype="https://schema.org/WebPage">
   <!-- Hero Section -->
<section class="relative bg-[#232338] overflow-hidden py-12 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8  rounded-xl mb-10" itemscope itemtype="https://schema.org/Casino">
    <!-- Schema.org разметка -->
    <meta itemprop="name" content="VAVADA Casino — официальный сайт с лицензионными играми">
    <meta itemprop="description" content="Официальный сайт казино Вавада — играйте в лицензионные слоты с выплатами до 97.8%. Регистрация за 1 минуту, бонус до 100 000₽">
    <div itemprop="aggregateRating" itemscope itemtype="https://schema.org/AggregateRating">
        <meta itemprop="itemReviewed" content="VAVADA Casino">
        <meta itemprop="reviewCount" content="5248">
        <meta itemprop="ratingValue" content="4.9">
        <meta itemprop="bestRating" content="5">
        <meta itemprop="worstRating" content="1">
    </div>

    <!-- Контент -->
    <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <!-- Текстовый блок -->
            <div class="relative z-10 text-center lg:text-left">
                <h1 class="text-3xl xs:text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-bold text-white leading-tight mb-4 sm:mb-6">
                    <span class="block">VAVADA Casino —</span>
                    <span class="text-[#ff424d] bg-clip-text bg-gradient-to-r from-[#ff424d] to-[#ff2c39]">официальный сайт</span>
                </h1>
                
                <p class="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                    ★ ТОП-10 казино 2025 года ★ <br class="hidden sm:inline">
                    Выплаты за 5 минут ★ <br class="sm:hidden">
                    Бонус 100% до 100 000₽
                </p>

                <!-- Статистика -->
                <div class="grid grid-cols-2 xs:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10" itemscope itemtype="https://schema.org/ItemList">
                    <div class="bg-[#2a2a42]/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 text-center" itemprop="itemListElement">
                        <div class="text-xl sm:text-2xl font-bold text-white mb-1" itemprop="statistic">5000+</div>
                        <div class="text-xs sm:text-sm text-gray-400" itemprop="name">Игровых автоматов</div>
                    </div>
                    <div class="bg-[#2a2a42]/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 text-center" itemprop="itemListElement">
                        <div class="text-xl sm:text-2xl font-bold text-white mb-1" itemprop="statistic">100K₽</div>
                        <div class="text-xs sm:text-sm text-gray-400" itemprop="name">Макс. бонус</div>
                    </div>
                    <div class="bg-[#2a2a42]/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 text-center" itemprop="itemListElement">
                        <div class="text-xl sm:text-2xl font-bold text-white mb-1" itemprop="statistic">97.8%</div>
                        <div class="text-xs sm:text-sm text-gray-400" itemprop="name">Выплаты</div>
                    </div>
                    <div class="bg-[#2a2a42]/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 text-center" itemprop="itemListElement">
                        <div class="text-xl sm:text-2xl font-bold text-white mb-1" itemprop="statistic">24/7</div>
                        <div class="text-xs sm:text-sm text-gray-400" itemprop="name">Поддержка</div>
                    </div>
                </div>

                <!-- Кнопки CTA -->
                <div class="flex flex-col xs:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
                    <a href="/registration" class="inline-flex items-center justify-center px-5 sm:px-6 py-3 sm:py-3.5 border border-transparent text-sm sm:text-base font-medium rounded-lg text-white bg-gradient-to-r from-[#ff424d] to-[#ff2c39] hover:from-[#ff2c39] hover:to-[#ff424d] shadow-lg shadow-[#ff424d]/30 transition-all transform hover:scale-[1.02] active:scale-95" aria-label="Зарегистрироваться в VAVADA Casino">
                        Получить 100 000₽
                    </a>
                    <a href="#login" class="inline-flex items-center justify-center px-5 sm:px-6 py-3 sm:py-3.5 border-2 border-[#ff424d] text-sm sm:text-base font-medium rounded-lg text-white hover:bg-[#ff424d]/10 transition-all transform hover:scale-[1.02] active:scale-95" aria-label="Войти в личный кабинет VAVADA">
                        Быстрый вход
                    </a>
                </div>
            </div>

            <!-- Изображение -->
            <div class="relative z-10 mt-8 lg:mt-0">
                <div class="aspect-w-16 aspect-h-9 w-full max-w-2xl mx-auto lg:mx-0 lg:ml-auto rounded-xl shadow-2xl overflow-hidden bg-gradient-to-br from-[#ff424d]/20 via-[#ff424d]/10 to-[#2a2a42]">
                    <picture>
                        <!-- Оптимизированные изображения для разных разрешений -->
                        <source media="(min-width: 1024px)" srcset="/images/vavada-hero-desktop.webp 1x, /images/vavada-hero-desktop@2x.webp 2x">
                        <source media="(min-width: 640px)" srcset="/images/vavada-hero-tablet.webp 1x, /images/vavada-hero-tablet@2x.webp 2x">
                        <img src="/images/vavada-hero-mobile.webp" srcset="/images/vavada-hero-mobile@2x.webp 2x" alt="Игровые автоматы VAVADA Casino с бонусами" class="w-full h-full object-cover opacity-90" loading="lazy" width="800" height="450">
                    </picture>
                    <div class="absolute inset-0 flex items-center justify-center lg:hidden">
                        <a href="#video" class="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-[#ff424d] rounded-full hover:bg-[#ff2c39] transition-colors shadow-lg animate-pulse" aria-label="Посмотреть видео обзор">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Декоративные элементы -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#ff424d]/5 via-transparent to-transparent"></div>
        <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#ff424d]/5 via-transparent to-transparent"></div>
        <div class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#232338] via-transparent to-transparent"></div>
    </div>
</section>

    <!-- Бонусы с микроразметкой -->
    <section class="bg-[#232338] rounded-xl p-8 mb-8" itemscope itemtype="https://schema.org/OfferCatalog">
        <h2 class="text-3xl font-bold text-white mb-6">
            <span itemprop="name">Акции и бонусы VAVADA</span> 2025
        </h2>  
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-[#2a2a42] rounded-xl p-6" itemprop="itemListElement" itemscope itemtype="https://schema.org/Offer">
                <div class="text-[#ff424d] text-xl font-bold mb-2" itemprop="category">Приветственный пакет</div>  
                <div class="text-2xl font-bold text-white mb-4" itemprop="price">100% до <span itemprop="priceCurrency">₽</span>100,000</div>  
                <p class="text-gray-400 mb-4" itemprop="description">+ 100 фриспинов на популярные слоты для новых игроков</p>  
                <a href="#welcome-bonus" class="inline-flex items-center justify-center w-full px-4 py-2 bg-[#ff424d] text-white rounded-md hover:bg-[#ff2c39] transition-colors" itemprop="url">
                    Получить бонус
                </a>  
            </div>
            <div class="bg-[#2a2a42] rounded-xl p-6" itemprop="itemListElement" itemscope itemtype="https://schema.org/Offer">
                <div class="text-[#ff424d] text-xl font-bold mb-2" itemprop="category">Кэшбэк</div>  
                <div class="text-2xl font-bold text-white mb-4">До <span itemprop="price">10</span><span itemprop="priceCurrency">%</span></div>  
                <p class="text-gray-400 mb-4" itemprop="description">Возврат средств каждую неделю без ограничений</p>  
                <a href="#cashback" class="inline-flex items-center justify-center w-full px-4 py-2 bg-[#ff424d] text-white rounded-md hover:bg-[#ff2c39] transition-colors" itemprop="url">
                    Подробнее
                </a>  
            </div>
            <div class="bg-[#2a2a42] rounded-xl p-6" itemprop="itemListElement" itemscope itemtype="https://schema.org/Offer">
                <div class="text-[#ff424d] text-xl font-bold mb-2" itemprop="category">Бездепозитный бонус</div>  
                <div class="text-2xl font-bold text-white mb-4"><span itemprop="price">50</span> фриспинов</div>  
                <p class="text-gray-400 mb-4" itemprop="description">Бесплатные вращения за регистрацию без пополнения</p>  
                <a href="#free-spins" class="inline-flex items-center justify-center w-full px-4 py-2 bg-[#ff424d] text-white rounded-md hover:bg-[#ff2c39] transition-colors" itemprop="url">
                    Активировать
                </a>  
            </div>
        </div>  
    </section>

    <!-- Преимущества с микроразметкой -->
    <section class="bg-[#232338] rounded-xl p-8 mb-8">
        <h2 class="text-3xl font-bold text-white mb-6">
            Почему <span class="text-[#ff424d]">VAVADA</span> — лучший выбор?
        </h2>  
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="flex flex-col items-center text-center p-6 bg-[#2a2a42] rounded-xl">
                <div class="w-16 h-16 bg-[#ff424d] rounded-full flex items-center justify-center mb-4">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><!-- Иконка --></svg>
                </div>
                <h3 class="text-xl font-bold text-white mb-2">Лицензия Curacao</h3>
                <p class="text-gray-400">Официальная лицензия №8048/JAZ гарантирует честную игру</p>
            </div>
            <div class="flex flex-col items-center text-center p-6 bg-[#2a2a42] rounded-xl">
                <div class="w-16 h-16 bg-[#ff424d] rounded-full flex items-center justify-center mb-4">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><!-- Иконка --></svg>
                </div>
                <h3 class="text-xl font-bold text-white mb-2">Выплаты за 5 минут</h3>
                <p class="text-gray-400">Моментальный вывод на карты и электронные кошельки</p>
            </div>
            <div class="flex flex-col items-center text-center p-6 bg-[#2a2a42] rounded-xl">
                <div class="w-16 h-16 bg-[#ff424d] rounded-full flex items-center justify-center mb-4">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><!-- Иконка --></svg>
                </div>
                <h3 class="text-xl font-bold text-white mb-2">5000+ игр</h3>
                <p class="text-gray-400">Слоты, рулетки, карточные игры и live-дилеры</p>
            </div>
            <div class="flex flex-col items-center text-center p-6 bg-[#2a2a42] rounded-xl">
                <div class="w-16 h-16 bg-[#ff424d] rounded-full flex items-center justify-center mb-4">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><!-- Иконка --></svg>
                </div>
                <h3 class="text-xl font-bold text-white mb-2">Поддержка 24/7</h3>
                <p class="text-gray-400">Русскоязычная служба поддержки в онлайн-чате</p>
            </div>
        </div>  
    </section>

    <!-- Популярные игры с микроразметкой -->
    <section class="bg-[#232338] rounded-xl p-8 mb-8" itemscope itemtype="https://schema.org/ItemList">
        <div class="flex justify-between items-center mb-6">
            <h2 class="text-3xl font-bold text-white" itemprop="name">ТОП-6 игровых автоматов</h2>
            <a href="#slots.html" class="text-[#ff424d] hover:text-[#ff2c39] transition-colors" aria-label="Все игровые автоматы VAVADA">
                Все 5000+ слотов →
            </a>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <!-- Danny Dollar -->
            <div class="group relative" itemprop="itemListElement" itemscope itemtype="https://schema.org/Game">
                <a href="#/slot/danny-dollar" itemprop="url">
                    <div class="aspect-[3/4] rounded-lg overflow-hidden bg-gradient-to-br from-pink-500 to-purple-600 relative">
                        <img src="/images/slots/danny-dollar.webp" alt="Danny Dollar слот от HACKSAW" class="w-full h-full object-cover" loading="lazy" itemprop="image">
                        <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
                            <span class="opacity-0 group-hover:opacity-100 bg-[#ff424d] text-white px-3 py-1.5 rounded-md text-sm">
                                Играть
                            </span>
                        </div>
                    </div>
                    <div class="mt-2">
                        <h3 class="text-white font-medium" itemprop="name">Danny Dollar</h3>
                        <p class="text-gray-400 text-sm" itemprop="gameProvider">Hacksaw</p>
                        <meta itemprop="operatingSystem" content="Web">
                        <meta itemprop="applicationCategory" content="Casino Game">
                    </div>
                </a>
            </div>

             <div class="group relative" itemprop="itemListElement" itemscope itemtype="https://schema.org/Game">
                <a href="#/slot/gates-of-olympus" itemprop="url">
                    <div class="aspect-[3/4] rounded-lg overflow-hidden bg-gradient-to-br from-pink-500 to-purple-600 relative">
                        <img src="/images/slots/gates-of-olympus-super-scatter.webp" alt="Gates of Olympus Super Scatter слот от Pragmatic Play" class="w-full h-full object-cover" loading="lazy" itemprop="image">
                        <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
                            <span class="opacity-0 group-hover:opacity-100 bg-[#ff424d] text-white px-3 py-1.5 rounded-md text-sm">
                                Играть
                            </span>
                        </div>
                    </div>
                    <div class="mt-2">
                        <h3 class="text-white font-medium" itemprop="name">Gates of Olympus Super Scatter</h3>
                        <p class="text-gray-400 text-sm" itemprop="gameProvider">Pragmatic Play</p>
                        <meta itemprop="operatingSystem" content="Web">
                        <meta itemprop="applicationCategory" content="Casino Game">
                    </div>
                </a>
            </div>

             <div class="group relative" itemprop="itemListElement" itemscope itemtype="https://schema.org/Game">
                <a href="#/slot/highway-to-hell" itemprop="url">
                    <div class="aspect-[3/4] rounded-lg overflow-hidden bg-gradient-to-br from-pink-500 to-purple-600 relative">
                        <img src="/images/slots/highway-to-hell.webp" alt="Highway to Hell слот от NOLIMIT city" class="w-full h-full object-cover" loading="lazy" itemprop="image">
                        <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
                            <span class="opacity-0 group-hover:opacity-100 bg-[#ff424d] text-white px-3 py-1.5 rounded-md text-sm">
                                Играть
                            </span>
                        </div>
                    </div>
                    <div class="mt-2">
                        <h3 class="text-white font-medium" itemprop="name">Highway to Hell</h3>
                        <p class="text-gray-400 text-sm" itemprop="gameProvider">Nolimit city</p>
                        <meta itemprop="operatingSystem" content="Web">
                        <meta itemprop="applicationCategory" content="Casino Game">
                    </div>
                </a>
            </div>
       
            <!-- Sweet Bonanza -->
            <div class="group relative" itemprop="itemListElement" itemscope itemtype="https://schema.org/Game">
                <a href="/slot/sweet-bonanza.html" itemprop="url">
                    <div class="aspect-[3/4] rounded-lg overflow-hidden bg-gradient-to-br from-pink-500 to-purple-600 relative">
                        <img src="/images/slots/sweet-bonanza.webp" alt="Sweet Bonanza слот от Pragmatic Play" class="w-full h-full object-cover" loading="lazy" itemprop="image">
                        <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
                            <span class="opacity-0 group-hover:opacity-100 bg-[#ff424d] text-white px-3 py-1.5 rounded-md text-sm">
                                Играть
                            </span>
                        </div>
                    </div>
                    <div class="mt-2">
                        <h3 class="text-white font-medium" itemprop="name">Sweet Bonanza</h3>
                        <p class="text-gray-400 text-sm" itemprop="gameProvider">Pragmatic Play</p>
                        <meta itemprop="operatingSystem" content="Web">
                        <meta itemprop="applicationCategory" content="Casino Game">
                    </div>
                </a>
            </div>

            <div class="group relative" itemprop="itemListElement" itemscope itemtype="https://schema.org/Game">
                <a href="#/slot/the-dog-house.html" itemprop="url">
                    <div class="aspect-[3/4] rounded-lg overflow-hidden bg-gradient-to-br from-pink-500 to-purple-600 relative">
                        <img src="/images/slots/the-dog-house.webp" alt="The Dog House слот от Pragmatic Play" class="w-full h-full object-cover" loading="lazy" itemprop="image">
                        <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
                            <span class="opacity-0 group-hover:opacity-100 bg-[#ff424d] text-white px-3 py-1.5 rounded-md text-sm">
                                Играть
                            </span>
                        </div>
                    </div>
                    <div class="mt-2">
                        <h3 class="text-white font-medium" itemprop="name">The Dog House</h3>
                        <p class="text-gray-400 text-sm" itemprop="gameProvider">Pragmatic Play</p>
                        <meta itemprop="operatingSystem" content="Web">
                        <meta itemprop="applicationCategory" content="Casino Game">
                    </div>
                </a>
            </div>

            <div class="group relative" itemprop="itemListElement" itemscope itemtype="https://schema.org/Game">
                <a href="#/slot/zeus-vs-hades-gods-of-war" itemprop="url">
                    <div class="aspect-[3/4] rounded-lg overflow-hidden bg-gradient-to-br from-pink-500 to-purple-600 relative">
                        <img src="/images/slots/zeus-vs-hades-gods-of-war.webp" alt="Zeus vs Hades - Gods of Warслот от Pragmatic Play" class="w-full h-full object-cover" loading="lazy" itemprop="image">
                        <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
                            <span class="opacity-0 group-hover:opacity-100 bg-[#ff424d] text-white px-3 py-1.5 rounded-md text-sm">
                                Играть
                            </span>
                        </div>
                    </div>
                    <div class="mt-2">
                        <h3 class="text-white font-medium" itemprop="name">Zeus vs Hades - Gods of War</h3>
                        <p class="text-gray-400 text-sm" itemprop="gameProvider">Pragmatic Play</p>
                        <meta itemprop="operatingSystem" content="Web">
                        <meta itemprop="applicationCategory" content="Casino Game">
                    </div>
                </a>
            </div>
        </div>
    </section>

    <!-- Отзывы с микроразметкой -->
    <section class="bg-[#232338] rounded-xl p-8 mb-8" itemscope itemtype="https://schema.org/Review">
        <div class="flex justify-between items-center mb-6">
            <h2 class="text-3xl font-bold text-white">Реальные отзывы игроков</h2>
            <div class="flex items-center" itemprop="reviewRating" itemscope itemtype="https://schema.org/Rating">
                <meta itemprop="ratingValue" content="4.9">
                <meta itemprop="bestRating" content="5">
                <div class="text-[#ff424d] text-2xl font-bold">4.9</div>
                <div class="flex text-[#ff424d] ml-2">
                    ★★★★★
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-[#2a2a42] rounded-xl p-6" itemprop="review" itemscope itemtype="https://schema.org/Review">
                <div class="flex items-center mb-4" itemprop="author" itemscope itemtype="https://schema.org/Person">
                    <div class="w-10 h-10 rounded-full bg-[#ff424d] flex items-center justify-center text-white font-bold" itemprop="name">
                        М
                    </div>
                    <div class="ml-3">
                        <div class="text-white font-medium">Максим</div>
                        <div class="text-gray-400 text-sm" itemprop="datePublished">2 дня назад</div>
                    </div>
                </div>
                <div class="text-[#ff424d] mb-2" itemprop="reviewRating" itemscope itemtype="https://schema.org/Rating">
                    ★★★★★
                    <meta itemprop="ratingValue" content="5">
                </div>
                <p class="text-gray-300" itemprop="reviewBody">
                    Вывел 78 000₽ за 7 минут! Подтвердили документы быстро, деньги пришли моментально. Лучшее казино по выплатам!
                </p>
            </div>
            <div class="bg-[#2a2a42] rounded-xl p-6" itemprop="review" itemscope itemtype="https://schema.org/Review">
            <div class="flex items-center mb-4" itemprop="author" itemscope itemtype="https://schema.org/Person">
                    <div class="w-10 h-10 rounded-full bg-[#ff424d] flex items-center justify-center text-white font-bold" itemprop="name">
                        F
                    </div>
                    <div class="ml-3">
                        <div class="text-white font-medium">Жанна</div>
                        <div class="text-gray-400 text-sm" itemprop="datePublished">1 дня назад</div>
                    </div>
                </div>
                <div class="text-[#ff424d] mb-2" itemprop="reviewRating" itemscope itemtype="https://schema.org/Rating">
                    ★★★★★
                    <meta itemprop="ratingValue" content="5">
                </div>
                <p class="text-gray-300" itemprop="reviewBody">
                    Играю только в прагмат и на дистанции пока в плюсах :))
                </p>
            </div>

             <div class="bg-[#2a2a42] rounded-xl p-6" itemprop="review" itemscope itemtype="https://schema.org/Review">
            <div class="flex items-center mb-4" itemprop="author" itemscope itemtype="https://schema.org/Person">
                    <div class="w-10 h-10 rounded-full bg-[#ff424d] flex items-center justify-center text-white font-bold" itemprop="name">
                        М
                    </div>
                    <div class="ml-3">
                        <div class="text-white font-medium">Денис</div>
                        <div class="text-gray-400 text-sm" itemprop="datePublished">1 дня назад</div>
                    </div>
                </div>
                <div class="text-[#ff424d] mb-2" itemprop="reviewRating" itemscope itemtype="https://schema.org/Rating">
                    ★★★★★
                    <meta itemprop="ratingValue" content="5">
                </div>
                <p class="text-gray-300" itemprop="reviewBody">
                    Жаль не все провайдеры сейчас доступны из РФ для игры, но казик отличный, рекомендую. 
                </p>
            </div>
            </div>
        </div>
    </section>

    <!-- FAQ с микроразметкой -->
    <section class="bg-[#232338] rounded-xl p-8 mb-8" itemscope itemtype="https://schema.org/FAQPage">
        <h2 class="text-3xl font-bold text-white mb-6">FAQ — ответы на вопросы</h2>
        <div class="space-y-4">
            <div class="bg-[#2a2a42] rounded-xl p-6" itemscope itemtype="https://schema.org/Question">
                <h3 class="text-xl font-bold text-white mb-2" itemprop="name">
                    Как зарегистрироваться в VAVADA?
                </h3>
                <div itemscope itemtype="https://schema.org/Answer">
                    <p class="text-gray-400" itemprop="text">
                        1. Нажмите "Регистрация"<br>
                        2. Укажите email и пароль<br>
                        3. Подтвердите почту<br>
                        4. Пополните счет от 1000₽ и получите бонус 100%
                    </p>
                </div>
            </div>
            <!-- Еще 2 вопроса -->
        </div>
    </section>

    <!-- Заключительный CTA -->
    <section class="bg-gradient-to-r from-[#ff424d] to-[#ff2c39] rounded-xl p-8 text-center">
        <h2 class="text-3xl font-bold text-white mb-4">
            Играйте в лицензионные слоты с выплатами до 98%
        </h2>
        <p class="text-white text-xl mb-6">
            ★ ТОП-10 казино 2025 ★ Бонус до 100 000₽ ★ Вывод за 5 минут
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/registration" class="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-[#ff424d] transition-colors">
                Играть на деньги
            </a>
            <a href="#demo" class="inline-flex items-center justify-center px-8 py-3 bg-white text-base font-medium rounded-md text-[#ff424d] hover:bg-gray-100 transition-colors">
                Демо-игра бесплатно
            </a>
        </div>
    </section>
</main>
  
          <!-- Footer -->  
      <footer class="bg-vavada-dark border-t border-vavada-primary py-8">
        <div class="container mx-auto px-4">
          <div class="text-center text-gray-400">
            <p class="mb-4">🔞 Игра доступна только для лиц старше 18 лет</p>
            <p>© 2025 VAVADA. Все права защищены.</p>
          </div>
        </div>
      </footer>
      </div>  
  `,
    },

    // Регистрация
    {
      id: "registration",
      filename: "registration",
      title: "Регистрация в VAVADA Casino | Официальный сайт | Бонус 100% до 100 000₽",
      description:
        "Официальная регистрация в VAVADA за 30 секунд ➤ Получите 100% бонус до 100 000₽ и 50 фриспинов ★ Быстрая верификация ★ Моментальный доступ ко всем играм",
      dataLink: "https://vavada.c-wn.ru",
      keywords:
        "регистрация VAVADA, создать аккаунт в Вавада, VAVADA casino вход, зарегистрироваться в VAVADA, бонус за регистрацию Вавада, официальный сайт VAVADA",
      canonical: "https://vavada-cis.com/registration",
      ogImage: "https://vavada-cis.com/images/og-registration.jpg",
      type: "registration",
      hreflangs: {
        "x-default": "https://vavada-cis.com/registration",
      },
      staticContent: ` 
         <div class="flex flex-col min-h-screen">  
    <header class="bg-[#1c1c2d] border-b border-[#ff424d]/20 sticky top-0 z-50  rounded-xl w-full">
    <!-- Хлебные крошки (только для десктопа) -->
    <nav aria-label="Навигационная цепочка" class="hidden md:block bg-[#232338] py-2 px-4">
        <div class="max-w-7xl mx-auto">
            <ol class="flex text-sm" itemscope itemtype="https://schema.org/BreadcrumbList">
                <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                    <a href="/" itemprop="item" class="text-gray-400 hover:text-white transition-colors">
                        <span itemprop="name">Главная</span>
                    </a>
                    <meta itemprop="position" content="1" />
                </li>
                <li class="mx-2 text-gray-400">/</li>
                <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                    <span itemprop="name" class="text-gray-400">Зарегистрироваться</span>
                    <meta itemprop="position" content="2" />
                </li>
            </ol>
        </div>
    </nav>

    <!-- Основной хедер -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16 md:h-20">
            <!-- Логотип -->
            <div class="flex-shrink-0 flex items-center">
                <a href="/" class="text-2xl font-bold bg-gradient-to-r from-[#ff424d] to-[#ff2c39] text-transparent bg-clip-text hover:opacity-90 transition-opacity">
                    VAVADA
                </a>
            </div>

            <!-- Десктопное меню -->
            <div class="hidden md:flex md:items-center md:space-x-6">
                <a href="/registration" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    Регистрация
                </a>
                <a href="/mirrors" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    Зеркало
                </a>
                <a href="/downloads" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    Скачать
                </a>
            </div>

            <!-- Кнопка входа (десктоп) -->
            <div class="hidden md:block">
                <a href="#login" class="ml-6 bg-gradient-to-r from-[#ff424d] to-[#ff2c39] text-white px-6 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-opacity shadow-lg shadow-[#ff424d]/30">
                    Регистрация
                </a>
            </div>

            <!-- Мобильное меню-бургер -->
            <div class="md:hidden flex items-center">
                <button type="button" id="mobile-menu-button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#2a2a42] focus:outline-none transition-colors" aria-controls="mobile-menu" aria-expanded="false">
                    <span class="sr-only">Открыть меню</span>
                    <!-- Иконка бургера -->
                    <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <!-- Иконка крестика -->
                    <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    </div>

    <!-- Мобильное меню (скрыто по умолчанию) -->
    <div class="hidden md:hidden bg-[#232338]" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/registration" class="text-gray-300 hover:bg-[#2a2a42] hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors">
                Регистрация
            </a>
            <a href="/mirrors" class="text-gray-300 hover:bg-[#2a2a42] hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors">
                Зеркало
            </a>
            <a href="/downloads" class="text-gray-300 hover:bg-[#2a2a42] hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors">
                Скачать
            </a>
            <div class="pt-2">
                <a href="#login" class="w-full flex justify-center bg-gradient-to-r from-[#ff424d] to-[#ff2c39] text-white px-6 py-3 rounded-md text-base font-bold hover:opacity-90 transition-opacity">
                    Войти в казино
                </a>
            </div>
        </div>
    </div>
</header>

<script>
    // Скрипт для мобильного меню
    document.getElementById('mobile-menu-button').addEventListener('click', function() {
        const menu = document.getElementById('mobile-menu');
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        
        // Переключаем видимость меню
        menu.classList.toggle('hidden');
        
        // Меняем иконку
        this.querySelector('svg.block').classList.toggle('hidden');
        this.querySelector('svg.hidden').classList.toggle('hidden');
        
        // Обновляем атрибут доступности
        this.setAttribute('aria-expanded', !isExpanded);
    });
</script>

<!-- Main Content Block для registration.html -->
<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8" itemscope itemtype="https://schema.org/WebPage">
    <!-- Hero Section -->
    <section class="relative rounded-xl overflow-hidden bg-[#232338] p-6 sm:p-8 mb-8 md:mb-12" itemscope itemtype="https://schema.org/HowTo">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div class="relative z-10">
                <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6" itemprop="name">
                    Регистрация в VAVADA Casino
                </h1>
                <p class="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
                    ★ Создайте аккаунт за 30 секунд ★ Получите бонус 100% до 100 000₽ ★ 50 фриспинов в подарок
                </p>
                
                <div class="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <div class="bg-[#2a2a42]/90 rounded-lg p-3 sm:p-4 text-center">
                        <div class="text-xl sm:text-2xl font-bold text-[#ff424d]">30 сек</div>
                        <div class="text-sm text-gray-400">На регистрацию</div>
                    </div>
                    <div class="bg-[#2a2a42]/90 rounded-lg p-3 sm:p-4 text-center">
                        <div class="text-xl sm:text-2xl font-bold text-[#ff424d]">100%</div>
                        <div class="text-sm text-gray-400">Бонус на депозит</div>
                    </div>
                </div>
                
                <a href="#register-form" class="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-lg text-white bg-gradient-to-r from-[#ff424d] to-[#ff2c39] hover:from-[#ff2c39] hover:to-[#ff424d] transition-all shadow-lg hover:shadow-[#ff424d]/30" aria-label="Создать аккаунт в VAVADA">
                    Зарегистрироваться сейчас
                </a>
            </div>
            
            <div class="hidden lg:block relative z-10">
                <div class="aspect-square bg-gradient-to-br from-[#ff424d]/20 to-[#2a2a42] rounded-lg shadow-xl overflow-hidden">
                    <img src="/images/vavada-registration.webp" alt="Процесс регистрации в VAVADA Casino" class="w-full h-full object-cover opacity-90" loading="lazy" width="600" height="600">
                </div>
            </div>
        </div>
    </section>

    <!-- Навигация -->
    <nav class="bg-[#2a2a42] rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 overflow-x-auto">
        <ul class="flex flex-nowrap gap-4 sm:gap-6 whitespace-nowrap">
            <li><a href="#steps" class="block px-3 py-2 text-sm sm:text-base text-[#ff424d] hover:text-[#ff2c39] transition-colors">Как зарегистрироваться</a></li>
            <li><a href="#benefits" class="block px-3 py-2 text-sm sm:text-base text-[#ff424d] hover:text-[#ff2c39] transition-colors">Преимущества</a></li>
            <li><a href="#verification" class="block px-3 py-2 text-sm sm:text-base text-[#ff424d] hover:text-[#ff2c39] transition-colors">Верификация</a></li>
            <li><a href="#faq" class="block px-3 py-2 text-sm sm:text-base text-[#ff424d] hover:text-[#ff2c39] transition-colors">Вопросы</a></li>
            <li><a href="#bonuses" class="block px-3 py-2 text-sm sm:text-base text-[#ff424d] hover:text-[#ff2c39] transition-colors">Бонусы</a></li>
        </ul>
    </nav>

    <!-- Шаги регистрации -->
    <section id="steps" class="bg-[#2a2a42] rounded-xl p-6 sm:p-8 mb-8" itemprop="step" itemscope itemtype="https://schema.org/HowToSection">
        <h2 class="text-2xl sm:text-3xl font-bold text-white mb-6" itemprop="name">3 простых шага для регистрации</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div class="bg-[#1c1c2d] rounded-xl p-5 sm:p-6" itemprop="itemListElement" itemscope itemtype="https://schema.org/HowToStep">
                <div class="text-[#ff424d] text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">1</div>
                <h3 class="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4" itemprop="name">Заполните форму</h3>
                <div class="text-gray-300 text-sm sm:text-base" itemprop="text">
                    <ul class="space-y-2">
                        <li class="flex items-start">
                            <span class="text-[#ff424d] mr-2 mt-1">•</span>
                            <span>Email и надежный пароль</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-[#ff424d] mr-2 mt-1">•</span>
                            <span>Личные данные</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-[#ff424d] mr-2 mt-1">•</span>
                            <span>Валюта счета</span>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div class="bg-[#1c1c2d] rounded-xl p-5 sm:p-6" itemprop="itemListElement" itemscope itemtype="https://schema.org/HowToStep">
                <div class="text-[#ff424d] text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">2</div>
                <h3 class="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4" itemprop="name">Подтвердите email</h3>
                <div class="text-gray-300 text-sm sm:text-base" itemprop="text">
                    <ul class="space-y-2">
                        <li class="flex items-start">
                            <span class="text-[#ff424d] mr-2 mt-1">•</span>
                            <span>Письмо с подтверждением</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-[#ff424d] mr-2 mt-1">•</span>
                            <span>Активация аккаунта</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-[#ff424d] mr-2 mt-1">•</span>
                            <span>Вход в личный кабинет</span>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div class="bg-[#1c1c2d] rounded-xl p-5 sm:p-6" itemprop="itemListElement" itemscope itemtype="https://schema.org/HowToStep">
                <div class="text-[#ff424d] text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">3</div>
                <h3 class="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4" itemprop="name">Получите бонусы</h3>
                <div class="text-gray-300 text-sm sm:text-base" itemprop="text">
                    <ul class="space-y-2">
                        <li class="flex items-start">
                            <span class="text-[#ff424d] mr-2 mt-1">•</span>
                            <span>Пополнение счета</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-[#ff424d] mr-2 mt-1">•</span>
                            <span>Активация подарков</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-[#ff424d] mr-2 mt-1">•</span>
                            <span>Начало игры</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Форма регистрации -->
    <section id="register-form" class="bg-[#2a2a42] rounded-xl p-6 sm:p-8 mb-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-white mb-6">Форма регистрации</h2>
        <form class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Поля формы -->
            <div class="space-y-4">
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-300 mb-1">Email*</label>
                    <input type="email" id="email" class="w-full px-4 py-3 bg-[#1c1c2d] border border-[#3a3a4d] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ff424d] focus:border-transparent" placeholder="your@email.com" required>
                </div>
                <div>
                    <label for="password" class="block text-sm font-medium text-gray-300 mb-1">Пароль*</label>
                    <input type="password" id="password" class="w-full px-4 py-3 bg-[#1c1c2d] border border-[#3a3a4d] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ff424d] focus:border-transparent" placeholder="Не менее 8 символов" required>
                </div>
            </div>
            
            <div class="space-y-4">
                <div>
                    <label for="currency" class="block text-sm font-medium text-gray-300 mb-1">Валюта*</label>
                    <select id="currency" class="w-full px-4 py-3 bg-[#1c1c2d] border border-[#3a3a4d] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#ff424d] focus:border-transparent">
                        <option>RUB (₽)</option>
                        <option>USD ($)</option>
                        <option>EUR (€)</option>
                    </select>
                </div>
                
                <div class="flex items-start">
                    <input type="checkbox" id="terms" class="mt-1 mr-2 rounded bg-[#1c1c2d] border-[#3a3a4d] text-[#ff424d] focus:ring-[#ff424d]" required>
                    <label for="terms" class="text-sm text-gray-300">
                        Я принимаю <a href="#terms" class="text-[#ff424d] hover:underline">Условия использования</a> и подтверждаю, что мне исполнилось 18 лет
                    </label>
                </div>
                
                <button type="submit" class="w-full py-3 px-6 bg-gradient-to-r from-[#ff424d] to-[#ff2c39] text-white font-medium rounded-lg hover:opacity-90 transition-opacity shadow-lg">
                    Завершить регистрацию
                </button>
            </div>
        </form>
    </section>

    <!-- Преимущества -->
    <section id="benefits" class="bg-[#2a2a42] rounded-xl p-6 sm:p-8 mb-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-white mb-6">Преимущества VAVADA</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div class="bg-[#1c1c2d] rounded-xl p-5 sm:p-6">
                <h3 class="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Бонусы за регистрацию</h3>
                <ul class="space-y-3 text-gray-300 text-sm sm:text-base">
                    <li class="flex items-start">
                        <span class="text-[#ff424d] mr-2 mt-1">✓</span>
                        <span>100% бонус на первый депозит до 100 000₽</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-[#ff424d] mr-2 mt-1">✓</span>
                        <span>50 бесплатных вращений за регистрацию</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-[#ff424d] mr-2 mt-1">✓</span>
                        <span>Еженедельный кэшбэк до 15%</span>
                    </li>
                </ul>
            </div>
            
            <div class="bg-[#1c1c2d] rounded-xl p-5 sm:p-6">
                <h3 class="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Условия игры</h3>
                <ul class="space-y-3 text-gray-300 text-sm sm:text-base">
                    <li class="flex items-start">
                        <span class="text-[#ff424d] mr-2 mt-1">✓</span>
                        <span>Быстрые выплаты за 5-15 минут</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-[#ff424d] mr-2 mt-1">✓</span>
                        <span>Лицензионные игровые автоматы</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-[#ff424d] mr-2 mt-1">✓</span>
                        <span>Поддержка 24/7 на русском языке</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <!-- Верификация -->
    <section id="verification" class="bg-[#2a2a42] rounded-xl p-6 sm:p-8 mb-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-white mb-6">Процесс верификации</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div class="bg-[#1c1c2d] rounded-xl p-5 sm:p-6">
                <h3 class="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Необходимые документы</h3>
                <ul class="space-y-3 text-gray-300 text-sm sm:text-base">
                    <li class="flex items-start">
                        <span class="text-[#ff424d] mr-2 mt-1">•</span>
                        <span>Паспорт (главная страница + прописка)</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-[#ff424d] mr-2 mt-1">•</span>
                        <span>Селфи с паспортом и запиской "VAVADA"</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-[#ff424d] mr-2 mt-1">•</span>
                        <span>Подтверждение платежного метода</span>
                    </li>
                </ul>
            </div>
            
            <div class="bg-[#1c1c2d] rounded-xl p-5 sm:p-6">
                <h3 class="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Как пройти верификацию</h3>
                <ol class="space-y-3 text-gray-300 text-sm sm:text-base">
                    <li class="flex items-start">
                        <span class="text-[#ff424d] mr-2 mt-1">1.</span>
                        <span>Загрузите документы в ЛК</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-[#ff424d] mr-2 mt-1">2.</span>
                        <span>Дождитесь проверки (обычно 1-24 часа)</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-[#ff424d] mr-2 mt-1">3.</span>
                        <span>Получите подтверждение по email</span>
                    </li>
                </ol>
            </div>
        </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="bg-[#2a2a42] rounded-xl p-6 sm:p-8" itemscope itemtype="https://schema.org/FAQPage">
        <h2 class="text-2xl sm:text-3xl font-bold text-white mb-6">Частые вопросы</h2>
        <div class="space-y-4">
            <div class="bg-[#1c1c2d] rounded-xl p-5 sm:p-6" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h3 class="text-lg sm:text-xl font-semibold text-white mb-3" itemprop="name">Можно ли зарегистрироваться без паспорта?</h3>
                <div class="text-gray-300 text-sm sm:text-base" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <p itemprop="text">Да, регистрация возможна без паспорта, но для вывода средств свыше 15 000₽ потребуется пройти верификацию личности.</p>
                </div>
            </div>
            
            <div class="bg-[#1c1c2d] rounded-xl p-5 sm:p-6" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h3 class="text-lg sm:text-xl font-semibold text-white mb-3" itemprop="name">Как получить бонус за регистрацию?</h3>
                <div class="text-gray-300 text-sm sm:text-base" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <p itemprop="text">После регистрации пополните счет на любую сумму от 500₽, и бонус будет начислен автоматически.</p>
                </div>
            </div>
            
            <div class="bg-[#1c1c2d] rounded-xl p-5 sm:p-6" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h3 class="text-lg sm:text-xl font-semibold text-white mb-3" itemprop="name">Что делать, если не приходит письмо подтверждения?</h3>
                <div class="text-gray-300 text-sm sm:text-base" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <p itemprop="text">Проверьте папку "Спам" или запросите повторную отправку письма. Если проблема сохраняется, обратитесь в онлайн-чат поддержки.</p>
                </div>
            </div>
        </div>
    </section>
</main>

            <footer class="bg-vavada-dark border-t border-vavada-primary py-8">
        <div class="container mx-auto px-4">
          <div class="text-center text-gray-400">
            <p class="mb-4">🔞 Игра доступна только для лиц старше 18 лет</p>
            <p>© 2025 VAVADA. Все права защищены.</p>
          </div>
        </div>
      </footer>
</div>
        `,
    },

    //Зеркало
    {
      id: "mirrors",
      filename: "mirrors",
      title: "Рабочее зеркало VAVADA Casino на 2025 год | Актуальные входы без блокировок",
      description:
        "Актуальные зеркала VAVADA Casino 2025 ➤ Рабочие ссылки для обхода блокировок ★ Мгновенный доступ к играм и бонусам ★ Без VPN и прокси",
      dataLink: "https://vavada-c-wn.ru",
      keywords:
        "зеркало VAVADA 2025, рабочий вход Вавада, актуальное зеркало казино VAVADA, обход блокировки VAVADA, альтернативный доступ VAVADA",
      canonical: "https://vavada-cis.com/mirrors",
      ogImage: "https://vavada-cis.com/images/og-mirrors.jpg",
      type: "mirrors",
      hreflangs: {
        "x-default": "https://vavada-cis.com/mirrors",
      },
      staticContent: `  
 <div class="flex flex-col min-h-screen">  
 <header class="bg-[#1c1c2d] border-b border-[#ff424d]/20 sticky top-0 z-50  rounded-xl w-full">
    <!-- Хлебные крошки (только для десктопа) -->
    <nav aria-label="Навигационная цепочка" class="hidden md:block bg-[#232338] py-2 px-4">
        <div class="max-w-7xl mx-auto">
            <ol class="flex text-sm" itemscope itemtype="https://schema.org/BreadcrumbList">
                <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                    <a href="/" itemprop="item" class="text-gray-400 hover:text-white transition-colors">
                        <span itemprop="name">Главная</span>
                    </a>
                    <meta itemprop="position" content="1" />
                </li>
                <li class="mx-2 text-gray-400">/</li>
                <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                    <span itemprop="name" class="text-gray-400">Актуальное рабочее зеркало на сегодня</span>
                    <meta itemprop="position" content="2" />
                </li>
            </ol>
        </div>
    </nav>

    <!-- Основной хедер -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16 md:h-20">
            <!-- Логотип -->
            <div class="flex-shrink-0 flex items-center">
                <a href="/" class="text-2xl font-bold bg-gradient-to-r from-[#ff424d] to-[#ff2c39] text-transparent bg-clip-text hover:opacity-90 transition-opacity">
                    VAVADA
                </a>
            </div>

            <!-- Десктопное меню -->
            <div class="hidden md:flex md:items-center md:space-x-6">
                <a href="/registration" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    Регистрация
                </a>
                <a href="/mirrors" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    Зеркало
                </a>
                <a href="/downloads" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    Скачать
                </a>
            </div>

            <!-- Кнопка входа (десктоп) -->
            <div class="hidden md:block">
                <a href="#login" class="ml-6 bg-gradient-to-r from-[#ff424d] to-[#ff2c39] text-white px-6 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-opacity shadow-lg shadow-[#ff424d]/30">
                 Зеркало
                </a>
            </div>

            <!-- Мобильное меню-бургер -->
            <div class="md:hidden flex items-center">
                <button type="button" id="mobile-menu-button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#2a2a42] focus:outline-none transition-colors" aria-controls="mobile-menu" aria-expanded="false">
                    <span class="sr-only">Открыть меню</span>
                    <!-- Иконка бургера -->
                    <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <!-- Иконка крестика -->
                    <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    </div>

    <!-- Мобильное меню (скрыто по умолчанию) -->
    <div class="hidden md:hidden bg-[#232338]" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/registration" class="text-gray-300 hover:bg-[#2a2a42] hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors">
                Регистрация
            </a>
            <a href="/mirrors" class="text-gray-300 hover:bg-[#2a2a42] hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors">
                Зеркало
            </a>
            <a href="/downloads" class="text-gray-300 hover:bg-[#2a2a42] hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors">
                Скачать
            </a>
            <div class="pt-2">
                <a href="#login" class="w-full flex justify-center bg-gradient-to-r from-[#ff424d] to-[#ff2c39] text-white px-6 py-3 rounded-md text-base font-bold hover:opacity-90 transition-opacity">
                    Войти в казино
                </a>
            </div>
        </div>
    </div>
</header>

<script>
    // Скрипт для мобильного меню
    document.getElementById('mobile-menu-button').addEventListener('click', function() {
        const menu = document.getElementById('mobile-menu');
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        
        // Переключаем видимость меню
        menu.classList.toggle('hidden');
        
        // Меняем иконку
        this.querySelector('svg.block').classList.toggle('hidden');
        this.querySelector('svg.hidden').classList.toggle('hidden');
        
        // Обновляем атрибут доступности
        this.setAttribute('aria-expanded', !isExpanded);
    });
</script>

<!-- Main Content Block для mirrors.html -->
<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
    <article class="bg-[#232338] rounded-xl shadow-lg overflow-hidden" itemscope itemtype="https://schema.org/Article">
        <!-- Мета-данные для SEO -->
        <meta itemprop="headline" content="Актуальные зеркала VAVADA Casino 2025 | Рабочие ссылки на сегодня">
        <meta itemprop="description" content="Проверенные рабочие зеркала VAVADA для обхода блокировок в 2025 году. Мгновенный доступ к казино без VPN. Все официальные ссылки обновляются ежедневно.">
        
        <!-- Заголовок -->
        <div class="bg-gradient-to-r from-[#ff424d]/20 to-[#2a2a42] p-6 sm:p-8">
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-4" itemprop="name">
                <span class="block">Рабочие зеркала VAVADA</span>
                <span class="text-[#ff424d]">на 2025 год</span>
            </h1>
            <p class="text-lg text-gray-300 text-center max-w-3xl mx-auto">
                Актуальные ссылки для доступа к казино без VPN ★ Обновлено: <span class="text-[#ff424d] font-medium" id="current-date"></span>
            </p>
        </div>

        <!-- Быстрая навигация (Mobile-friendly) -->
        <nav class="bg-[#2a2a42] p-4 sm:p-6" aria-label="Быстрая навигация">
            <div class="flex overflow-x-auto pb-2 -mx-2 scrollbar-hide">
                <div class="flex flex-nowrap gap-3 px-2">
                    <a href="#mirrors" class="whitespace-nowrap px-4 py-3 bg-[#1c1c2d] rounded-lg hover:bg-[#282842] transition-colors flex items-center">
                        <span class="text-[#ff424d] mr-2">🔗</span>
                        <span class="text-sm sm:text-base">Зеркала</span>
                    </a>
                    <a href="#how-to-use" class="whitespace-nowrap px-4 py-3 bg-[#1c1c2d] rounded-lg hover:bg-[#282842] transition-colors flex items-center">
                        <span class="text-[#ff424d] mr-2">📱</span>
                        <span class="text-sm sm:text-base">Инструкция</span>
                    </a>
                    <a href="#benefits" class="whitespace-nowrap px-4 py-3 bg-[#1c1c2d] rounded-lg hover:bg-[#282842] transition-colors flex items-center">
                        <span class="text-[#ff424d] mr-2">⭐</span>
                        <span class="text-sm sm:text-base">Преимущества</span>
                    </a>
                    <a href="#faq" class="whitespace-nowrap px-4 py-3 bg-[#1c1c2d] rounded-lg hover:bg-[#282842] transition-colors flex items-center">
                        <span class="text-[#ff424d] mr-2">❓</span>
                        <span class="text-sm sm:text-base">Вопросы</span>
                    </a>
                </div>
            </div>
        </nav>

        <!-- Актуальные зеркала -->
        <section id="mirrors" class="p-6 sm:p-8" itemscope itemtype="https://schema.org/ItemList">
            <div class="mb-8">
                <h2 class="text-2xl sm:text-3xl font-bold text-white mb-6">Актуальные зеркала VAVADA</h2>
                
                <div class="bg-[#1c1c2d] border-l-4 border-[#ff424d] rounded-r-lg p-4 mb-6">
                    <div class="flex items-center mb-3">
                        <span class="w-3 h-3 bg-[#ff424d] rounded-full mr-2 animate-pulse"></span>
                        <span class="font-medium text-yellow-400">СВЕЖЕЕ ОБНОВЛЕНИЕ</span>
                    </div>
                    <p class="text-gray-300 mb-4">Рабочие зеркала проверены <span class="text-white font-medium">сегодня</span> и гарантируют стабильный доступ:</p>
                    
                    <div class="space-y-3" itemprop="itemListElement">
                        <a href="#" rel="nofollow" class="block p-4 bg-[#232338] rounded-lg hover:bg-[#282842] transition-colors border border-transparent hover:border-[#ff424d]/30" target="_blank">
                            <div class="flex items-center justify-between">
                                <span class="font-medium">x-vavada.com</span>
                                <span class="text-[#4CAF50] flex items-center">
                                    <span class="w-2 h-2 bg-[#4CAF50] rounded-full mr-2"></span>
                                    Работает
                                </span>
                            </div>
                        </a>
                        <a href="#" rel="nofollow" class="block p-4 bg-[#232338] rounded-lg hover:bg-[#282842] transition-colors border border-transparent hover:border-[#ff424d]/30" target="_blank">
                            <div class="flex items-center justify-between">
                                <span class="font-medium">x-vavada.ru</span>
                                <span class="text-[#4CAF50] flex items-center">
                                    <span class="w-2 h-2 bg-[#4CAF50] rounded-full mr-2"></span>
                                    Работает
                                </span>
                            </div>
                        </a>
                    </div>
                </div>
                
                <div class="bg-[#1c1c2d] rounded-lg p-4">
                    <h3 class="text-lg font-medium text-white mb-3">Альтернативные способы доступа</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <a href="#" class="p-3 bg-[#232338] rounded-lg hover:bg-[#282842] transition-colors flex items-center">
                            <span class="text-[#ff424d] mr-3">📲</span>
                            <span>Мобильное приложение</span>
                        </a>
                        <a href="#" class="p-3 bg-[#232338] rounded-lg hover:bg-[#282842] transition-colors flex items-center">
                            <span class="text-[#ff424d] mr-3">🤖</span>
                            <span>Telegram-бот</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Как использовать -->
        <section id="how-to-use" class="bg-[#2a2a42] p-6 sm:p-8">
            <h2 class="text-2xl sm:text-3xl font-bold text-white mb-6">Как войти через зеркало?</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-[#1c1c2d] rounded-xl p-5 sm:p-6">
                    <h3 class="text-xl font-semibold text-white mb-4 flex items-center">
                        <span class="w-8 h-8 bg-[#ff424d] rounded-full flex items-center justify-center mr-3">1</span>
                        <span>Инструкция по входу</span>
                    </h3>
                    <ol class="space-y-3 text-gray-300 pl-2">
                        <li class="flex items-start">
                            <span class="text-[#ff424d] font-bold mr-2">→</span>
                            <span>Выберите рабочее зеркало из списка выше</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-[#ff424d] font-bold mr-2">→</span>
                            <span>Нажмите на ссылку для перехода</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-[#ff424d] font-bold mr-2">→</span>
                            <span>Введите логин и пароль от аккаунта</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-[#ff424d] font-bold mr-2">→</span>
                            <span>Наслаждайтесь игрой без ограничений</span>
                        </li>
                    </ol>
                </div>
                
                <div class="bg-[#1c1c2d] rounded-xl p-5 sm:p-6">
                    <h3 class="text-xl font-semibold text-white mb-4 flex items-center">
                        <span class="w-8 h-8 bg-[#ff424d] rounded-full flex items-center justify-center mr-3">2</span>
                        <span>Рекомендации</span>
                    </h3>
                    <ul class="space-y-3 text-gray-300">
                        <li class="flex items-start">
                            <span class="text-[#ff424d] mr-2 mt-1">✓</span>
                            <span>Проверяйте SSL-сертификат (🔒 в адресной строке)</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-[#ff424d] mr-2 mt-1">✓</span>
                            <span>Сохраните эту страницу в закладки (Ctrl+D)</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-[#ff424d] mr-2 mt-1">✓</span>
                            <span>Не используйте VPN — это может замедлить соединение</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Преимущества -->
        <section id="benefits" class="p-6 sm:p-8">
            <h2 class="text-2xl sm:text-3xl font-bold text-white mb-6">Почему стоит использовать зеркала?</h2>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div class="bg-[#1c1c2d] rounded-xl p-5 sm:p-6">
                    <div class="w-12 h-12 bg-[#ff424d]/10 rounded-full flex items-center justify-center mb-4">
                        <span class="text-[#ff424d] text-xl">⚡</span>
                    </div>
                    <h3 class="text-lg sm:text-xl font-semibold text-white mb-3">Мгновенный доступ</h3>
                    <p class="text-gray-300 text-sm sm:text-base">Обход блокировок провайдера в один клик без настроек</p>
                </div>
                
                <div class="bg-[#1c1c2d] rounded-xl p-5 sm:p-6">
                    <div class="w-12 h-12 bg-[#ff424d]/10 rounded-full flex items-center justify-center mb-4">
                        <span class="text-[#ff424d] text-xl">🔒</span>
                    </div>
                    <h3 class="text-lg sm:text-xl font-semibold text-white mb-3">Полная безопасность</h3>
                    <p class="text-gray-300 text-sm sm:text-base">Официальные зеркала с SSL-шифрованием данных</p>
                </div>
                
                <div class="bg-[#1c1c2d] rounded-xl p-5 sm:p-6">
                    <div class="w-12 h-12 bg-[#ff424d]/10 rounded-full flex items-center justify-center mb-4">
                        <span class="text-[#ff424d] text-xl">💎</span>
                    </div>
                    <h3 class="text-lg sm:text-xl font-semibold text-white mb-3">Все функции</h3>
                    <p class="text-gray-300 text-sm sm:text-base">Полноценный доступ к играм, бонусам и выплатам</p>
                </div>
            </div>
        </section>

        <!-- FAQ -->
        <section id="faq" class="bg-[#2a2a42] p-6 sm:p-8" itemscope itemtype="https://schema.org/FAQPage">
            <h2 class="text-2xl sm:text-3xl font-bold text-white mb-6">Частые вопросы</h2>
            
            <div class="space-y-4">
                <div class="bg-[#1c1c2d] rounded-lg p-5" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                    <h3 class="text-lg font-semibold text-white mb-3 flex items-center" itemprop="name">
                        <span class="text-[#ff424d] mr-2">❓</span>
                        <span>Как часто обновляются зеркала?</span>
                    </h3>
                    <div class="text-gray-300 pl-7" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                        <div itemprop="text">
                            <p>Мы ежедневно проверяем и обновляем список рабочих зеркал. Рекомендуем:</p>
                            <ul class="mt-2 space-y-2">
                                <li class="flex items-start">
                                    <span class="text-[#ff424d] mr-2">•</span>
                                    <span>Сохранить эту страницу в закладки</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-[#ff424d] mr-2">•</span>
                                    <span>Подписаться на наш Telegram-канал с уведомлениями</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="bg-[#1c1c2d] rounded-lg p-5" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                    <h3 class="text-lg font-semibold text-white mb-3 flex items-center" itemprop="name">
                        <span class="text-[#ff424d] mr-2">❓</span>
                        <span>Нужно ли регистрироваться заново?</span>
                    </h3>
                    <div class="text-gray-300 pl-7" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                        <div itemprop="text">
                            <p>Нет, ваш аккаунт сохраняется на всех зеркалах. Используйте те же логин и пароль, что и на основном сайте.</p>
                        </div>
                    </div>
                </div>
                
                <div class="bg-[#1c1c2d] rounded-lg p-5" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                    <h3 class="text-lg font-semibold text-white mb-3 flex items-center" itemprop="name">
                        <span class="text-[#ff424d] mr-2">❓</span>
                        <span>Безопасны ли платежи через зеркало?</span>
                    </h3>
                    <div class="text-gray-300 pl-7" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                        <div itemprop="text">
                            <p>Да, все финансовые операции через официальные зеркала полностью защищены:</p>
                            <ul class="mt-2 space-y-2">
                                <li class="flex items-start">
                                    <span class="text-[#ff424d] mr-2">•</span>
                                    <span>256-bit SSL шифрование</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-[#ff424d] mr-2">•</span>
                                    <span>Те же платежные системы, что и на основном сайте</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-[#ff424d] mr-2">•</span>
                                    <span>Моментальные выплаты</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Блок -->
        <div class="bg-gradient-to-r from-[#ff424d] to-[#ff2c39] p-6 sm:p-8 text-center">
            <h3 class="text-xl sm:text-2xl font-bold text-white mb-4">Не нашли рабочее зеркало?</h3>
            <p class="text-white/90 mb-6 max-w-2xl mx-auto">Оставьте email и мы отправим вам актуальную ссылку как только появится новое зеркало</p>
            <form class="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                <input type="email" placeholder="Ваш email" class="flex-grow px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white">
                <button type="submit" class="px-6 py-3 bg-white text-[#ff424d] font-medium rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap">
                    Получить ссылку
                </button>
            </form>
        </div>

        <!-- Кнопка наверх (Mobile-friendly) -->
        <div class="fixed bottom-6 right-6 z-50">
            <a href="#top" class="w-12 h-12 bg-[#ff424d] text-white rounded-full flex items-center justify-center hover:bg-[#ff2c39] transition-colors shadow-lg transform hover:scale-105 active:scale-95">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </a>
        </div>
    </article>
</main>

<script>
    // Устанавливаем текущую дату
    document.getElementById('current-date').textContent = new Date().toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
</script>

      <footer class="bg-vavada-dark border-t border-vavada-primary py-8">
        <div class="container mx-auto px-4">
          <div class="text-center text-gray-400">
            <p class="mb-4">🔞 Игра доступна только для лиц старше 18 лет</p>
            <p>© 2025 VAVADA. Все права защищены.</p>
          </div>
        </div>
      </footer>
      </div>  
       
        `,
    },

    // Загрузки
    {
      id: "downloads",
      filename: "downloads",
      title: "Приложение VAVADA Casino 2025 | Скачать на Android и iPhone",
      description:
        "фициальное приложение VAVADA для мобильных устройств ➤ Установка за 2 минуты ★ Автономный доступ к играм ★ Эксклюзивные мобильные бонусы",
      dataLink: "https://vavada.c-wn.ru",
      keywords:
        "скачать VAVADA на телефон, мобильное приложение Вавада, VAVADA для iOS Android, установка казино VAVADA, официальное приложение казино",
      canonical: "https://vavada-cis.com/downloads",
      ogImage: "https://vavada-cis.com/images/og-downloads.jpg",
      type: "downloads",
      hreflangs: {
        "x-default": "https://vavada-cis.com/downloads",
      },
      staticContent: ` 
         <div class="flex flex-col min-h-screen">  
     <header class="bg-[#1c1c2d] border-b border-[#ff424d]/20 sticky top-0 z-50  rounded-xl w-full">
    <!-- Хлебные крошки (только для десктопа) -->
    <nav aria-label="Навигационная цепочка" class="hidden md:block bg-[#232338] py-2 px-4">
        <div class="max-w-7xl mx-auto">
            <ol class="flex text-sm" itemscope itemtype="https://schema.org/BreadcrumbList">
                <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                    <a href="/" itemprop="item" class="text-gray-400 hover:text-white transition-colors">
                        <span itemprop="name">Главная</span>
                    </a>
                    <meta itemprop="position" content="1" />
                </li>
                <li class="mx-2 text-gray-400">/</li>
                <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                    <span itemprop="name" class="text-gray-400">Download iOS & Android</span>
                    <meta itemprop="position" content="2" />
                </li>
            </ol>
        </div>
    </nav>

    <!-- Основной хедер -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16 md:h-20">
            <!-- Логотип -->
            <div class="flex-shrink-0 flex items-center">
                <a href="/" class="text-2xl font-bold bg-gradient-to-r from-[#ff424d] to-[#ff2c39] text-transparent bg-clip-text hover:opacity-90 transition-opacity">
                    VAVADA
                </a>
            </div>

            <!-- Десктопное меню -->
            <div class="hidden md:flex md:items-center md:space-x-6">
                <a href="/registration" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    Регистрация
                </a>
                <a href="/mirrors" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    Зеркало
                </a>
                <a href="/downloads" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    Скачать
                </a>
            </div>

            <!-- Кнопка входа (десктоп) -->
            <div class="hidden md:block">
                <a href="#login" class="ml-6 bg-gradient-to-r from-[#ff424d] to-[#ff2c39] text-white px-6 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-opacity shadow-lg shadow-[#ff424d]/30">
                 Скачать
                </a>
            </div>

            <!-- Мобильное меню-бургер -->
            <div class="md:hidden flex items-center">
                <button type="button" id="mobile-menu-button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#2a2a42] focus:outline-none transition-colors" aria-controls="mobile-menu" aria-expanded="false">
                    <span class="sr-only">Открыть меню</span>
                    <!-- Иконка бургера -->
                    <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <!-- Иконка крестика -->
                    <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    </div>

    <!-- Мобильное меню (скрыто по умолчанию) -->
    <div class="hidden md:hidden bg-[#232338]" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/registration" class="text-gray-300 hover:bg-[#2a2a42] hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors">
                Регистрация
            </a>
            <a href="/mirrors" class="text-gray-300 hover:bg-[#2a2a42] hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors">
                Зеркало
            </a>
            <a href="/downloads" class="text-gray-300 hover:bg-[#2a2a42] hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors">
                Скачать
            </a>
            <div class="pt-2">
                <a href="#login" class="w-full flex justify-center bg-gradient-to-r from-[#ff424d] to-[#ff2c39] text-white px-6 py-3 rounded-md text-base font-bold hover:opacity-90 transition-opacity">
                    Войти в казино
                </a>
            </div>
        </div>
    </div>
</header>

<script>
    // Скрипт для мобильного меню
    document.getElementById('mobile-menu-button').addEventListener('click', function() {
        const menu = document.getElementById('mobile-menu');
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        
        // Переключаем видимость меню
        menu.classList.toggle('hidden');
        
        // Меняем иконку
        this.querySelector('svg.block').classList.toggle('hidden');
        this.querySelector('svg.hidden').classList.toggle('hidden');
        
        // Обновляем атрибут доступности
        this.setAttribute('aria-expanded', !isExpanded);
    });
</script>

<!-- Main Content Block для downloads.html -->
<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8" itemscope itemtype="https://schema.org/SoftwareApplication">
    <!-- Мета-данные для SEO -->
    <meta itemprop="name" content="VAVADA Casino - Мобильное приложение">
    <meta itemprop="operatingSystem" content="Android, iOS">
    <meta itemprop="applicationCategory" content="Casino Game">
    <meta itemprop="offers" itemscope itemtype="https://schema.org/Offer" content="Бонус 100% до 100 000₽ за установку">

    <!-- Hero Section -->
    <section class="relative bg-[#232338] rounded-xl overflow-hidden p-6 sm:p-8 mb-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div class="relative z-10">
                <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                    <span class="block">Приложение VAVADA</span>
                    <span class="text-[#ff424d] bg-clip-text bg-gradient-to-r from-[#ff424d] to-[#ff2c39]">для iOS и Android</span>
                </h1>
                <p class="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
                    ★ Эксклюзивные мобильные бонусы ★ Установка за 2 минуты ★ Работает офлайн ★ Оптимизировано для 2025 года
                </p>
                
                <div class="grid grid-cols-2 gap-4 mb-6 sm:mb-8">
                    <div class="bg-[#2a2a42]/90 rounded-lg p-3 sm:p-4 text-center">
                        <div class="text-xl sm:text-2xl font-bold text-[#ff424d]">4.9/5</div>
                        <div class="text-sm sm:text-base text-gray-400">Рейтинг игроков</div>
                    </div>
                    <div class="bg-[#2a2a42]/90 rounded-lg p-3 sm:p-4 text-center">
                        <div class="text-xl sm:text-2xl font-bold text-[#ff424d]">2M+</div>
                        <div class="text-sm sm:text-base text-gray-400">Установок</div>
                    </div>
                </div>
                
                <div class="flex flex-col sm:flex-row gap-4">
                    <a href="#download" class="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#ff424d] to-[#ff2c39] text-white font-medium rounded-lg hover:opacity-90 transition-opacity shadow-lg">
                        Скачать сейчас
                    </a>
                    <a href="#features" class="inline-flex items-center justify-center px-6 py-3 border-2 border-[#ff424d] text-white font-medium rounded-lg hover:bg-[#ff424d]/10 transition-colors">
                        Преимущества
                    </a>
                </div>
            </div>
            
            <div class="hidden lg:block relative z-10">
                <div class="aspect-square bg-gradient-to-br from-[#ff424d]/20 to-[#2a2a42] rounded-xl shadow-2xl overflow-hidden">
                    <img src="/images/vavada-app-preview.webp" alt="VAVADA Casino мобильное приложение на iPhone и Android" class="w-full h-full object-cover" loading="lazy" width="600" height="600">
                </div>
            </div>
        </div>
    </section>

    <!-- Навигация (Mobile-friendly) -->
    <nav class="bg-[#2a2a42] rounded-xl p-4 mb-8 overflow-x-auto scrollbar-hide">
        <div class="flex space-x-4 min-w-max">
            <a href="#download" class="whitespace-nowrap px-4 py-2 bg-[#1c1c2d] rounded-lg text-[#ff424d] hover:text-[#ff2c39] transition-colors">
                Скачать
            </a>
            <a href="#platforms" class="whitespace-nowrap px-4 py-2 bg-[#1c1c2d] rounded-lg text-[#ff424d] hover:text-[#ff2c39] transition-colors">
                Платформы
            </a>
            <a href="#features" class="whitespace-nowrap px-4 py-2 bg-[#1c1c2d] rounded-lg text-[#ff424d] hover:text-[#ff2c39] transition-colors">
                Функции
            </a>
            <a href="#faq" class="whitespace-nowrap px-4 py-2 bg-[#1c1c2d] rounded-lg text-[#ff424d] hover:text-[#ff2c39] transition-colors">
                Вопросы
            </a>
        </div>
    </nav>

    <!-- Секция загрузки -->
    <section id="download" class="bg-[#2a2a42] rounded-xl p-6 sm:p-8 mb-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div>
                <h2 class="text-2xl sm:text-3xl font-bold text-white mb-4">Скачать приложение</h2>
                <p class="text-gray-300 mb-4 sm:mb-0">Выберите вашу платформу или отсканируйте QR-код</p>
            </div>
            
            <div class="flex justify-center">
                <div class="bg-white p-4 rounded-xl w-40 h-40 flex items-center justify-center">
                    <img src="/images/vavada-qr-code.webp" alt="QR-код для скачивания VAVADA" class="w-full h-full" loading="lazy">
                </div>
            </div>
            
            <div class="space-y-4">
                <a href="#" rel="nofollow" class="flex items-center justify-center gap-3 bg-black text-white rounded-lg p-3 sm:p-4 hover:bg-gray-900 transition-colors" target="_blank">
                    <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <span class="text-lg sm:text-xl font-medium">App Store</span>
                </a>
                <a href="#" rel="nofollow" class="flex items-center justify-center gap-3 bg-[#ff424d] text-white rounded-lg p-3 sm:p-4 hover:bg-[#ff2c39] transition-colors" target="_blank">
                    <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3.063 3S3 3.895 3 6v12c0 2.105.063 3 3.063 3h11.874C21 21 21 20.105 21 18V6c0-2.105-.063-3-3.063-3m-.782 2h13.124a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5.72zm2.406 2.719L6 8.22v7.562l1.125.5 5.313-4.28zm.844.656l5.656 4.594 2.125-2.125v-1.063l-2.125-2.125zm6.125 1.625l1.125 1.125v1.75l-1.125 1.125z"/>
                    </svg>
                    <span class="text-lg sm:text-xl font-medium">Google Play</span>
                </a>
                <a href="#" rel="nofollow" class="flex items-center justify-center gap-3 bg-[#1c1c2d] text-white rounded-lg p-3 sm:p-4 hover:bg-[#282842] transition-colors">
                    <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                    <span class="text-lg sm:text-xl font-medium">APK для Android</span>
                </a>
            </div>
        </div>
    </section>

    <!-- Платформы -->
    <section id="platforms" class="bg-[#2a2a42] rounded-xl p-6 sm:p-8 mb-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-white mb-6">Поддерживаемые платформы</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- iOS -->
            <div class="bg-[#1c1c2d] rounded-xl p-6">
                <div class="flex items-center mb-4">
                    <svg class="w-10 h-10 mr-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <h3 class="text-xl sm:text-2xl font-semibold text-white">Для iPhone и iPad</h3>
                </div>
                <ul class="space-y-3 text-gray-300">
                    <li class="flex items-start">
                        <span class="text-[#ff424d] mr-2 mt-1">✓</span>
                        <span>iOS 13.0 и новее (оптимизировано для iOS 17)</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-[#ff424d] mr-2 mt-1">✓</span>
                        <span>Поддержка Face ID/Touch ID</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-[#ff424d] mr-2 mt-1">✓</span>
                        <span>Адаптация под все модели iPhone</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-[#ff424d] mr-2 mt-1">✓</span>
                        <span>Размер: 85 МБ</span>
                    </li>
                </ul>
            </div>
            
            <!-- Android -->
            <div class="bg-[#1c1c2d] rounded-xl p-6">
                <div class="flex items-center mb-4">
                    <svg class="w-10 h-10 mr-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3.063 3S3 3.895 3 6v12c0 2.105.063 3 3.063 3h11.874C21 21 21 20.105 21 18V6c0-2.105-.063-3-3.063-3m-.782 2h13.124a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5.72zm2.406 2.719L6 8.22v7.562l1.125.5 5.313-4.28zm.844.656l5.656 4.594 2.125-2.125v-1.063l-2.125-2.125zm6.125 1.625l1.125 1.125v1.75l-1.125 1.125z"/>
                    </svg>
                    <h3 class="text-xl sm:text-2xl font-semibold text-white">Для Android</h3>
                </div>
                <ul class="space-y-3 text-gray-300">
                    <li class="flex items-start">
                        <span class="text-[#ff424d] mr-2 mt-1">✓</span>
                        <span>Android 8.0 и новее (оптимизировано для Android 14)</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-[#ff424d] mr-2 mt-1">✓</span>
                        <span>Поддержка отпечатка пальца</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-[#ff424d] mr-2 mt-1">✓</span>
                        <span>Автономный режим работы</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-[#ff424d] mr-2 mt-1">✓</span>
                        <span>Размер: 78 МБ (APK)</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <!-- Инструкция по установке -->
    <section id="installation" class="bg-[#2a2a42] rounded-xl p-6 sm:p-8 mb-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-white mb-6">Как установить приложение</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- iOS -->
            <div class="bg-[#1c1c2d] rounded-xl p-6">
                <h3 class="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center">
                    <span class="w-8 h-8 bg-[#ff424d] rounded-full flex items-center justify-center mr-3">1</span>
                    <span>Установка на iOS</span>
                </h3>
                <ol class="space-y-3 text-gray-300 pl-2">
                    <li class="flex items-start">
                        <span class="text-[#ff424d] font-bold mr-2">→</span>
                        <span>Откройте App Store на вашем устройстве</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-[#ff424d] font-bold mr-2">→</span>
                        <span>В поиске введите "VAVADA Casino"</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-[#ff424d] font-bold mr-2">→</span>
                        <span>Нажмите "Загрузить" и подтвердите установку</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-[#ff424d] font-bold mr-2">→</span>
                        <span>После установки откройте приложение</span>
                    </li>
                </ol>
            </div>
            
            <!-- Android -->
            <div class="bg-[#1c1c2d] rounded-xl p-6">
                <h3 class="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center">
                    <span class="w-8 h-8 bg-[#ff424d] rounded-full flex items-center justify-center mr-3">2</span>
                    <span>Установка на Android</span>
                </h3>
                <ol class="space-y-3 text-gray-300 pl-2">
                    <li class="flex items-start">
                        <span class="text-[#ff424d] font-bold mr-2">→</span>
                        <span>Скачайте APK-файл с нашего сайта</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-[#ff424d] font-bold mr-2">→</span>
                        <span>Перейдите в Настройки → Безопасность</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-[#ff424d] font-bold mr-2">→</span>
                        <span>Включите "Неизвестные источники"</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-[#ff424d] font-bold mr-2">→</span>
                        <span>Откройте скачанный файл и установите</span>
                    </li>
                </ol>
            </div>
        </div>
    </section>

    <!-- Преимущества -->
    <section id="features" class="bg-[#2a2a42] rounded-xl p-6 sm:p-8 mb-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-white mb-6">Уникальные возможности приложения</h2>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-[#1c1c2d] rounded-xl p-6">
                <div class="w-12 h-12 bg-[#ff424d]/10 rounded-full flex items-center justify-center mb-4">
                    <span class="text-[#ff424d] text-xl">⚡</span>
                </div>
                <h3 class="text-xl font-semibold text-white mb-3">Максимальная скорость</h3>
                <ul class="space-y-2 text-gray-300">
                    <li class="flex items-start">
                        <span class="text-[#ff424d] mr-2">•</span>
                        <span>Запуск игр на 40% быстрее</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-[#ff424d] mr-2">•</span>
                        <span>Экономия интернет-трафика</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-[#ff424d] mr-2">•</span>
                        <span>Автономный режим</span>
                    </li>
                </ul>
            </div>
            
            <div class="bg-[#1c1c2d] rounded-xl p-6">
                <div class="w-12 h-12 bg-[#ff424d]/10 rounded-full flex items-center justify-center mb-4">
                    <span class="text-[#ff424d] text-xl">🔒</span>
                </div>
                <h3 class="text-xl font-semibold text-white mb-3">Безопасность</h3>
                <ul class="space-y-2 text-gray-300">
                    <li class="flex items-start">
                        <span class="text-[#ff424d] mr-2">•</span>
                        <span>Биометрическая аутентификация</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-[#ff424d] mr-2">•</span>
                        <span>256-bit SSL шифрование</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-[#ff424d] mr-2">•</span>
                        <span>Защита от DDoS-атак</span>
                    </li>
                </ul>
            </div>
            
            <div class="bg-[#1c1c2d] rounded-xl p-6">
                <div class="w-12 h-12 bg-[#ff424d]/10 rounded-full flex items-center justify-center mb-4">
                    <span class="text-[#ff424d] text-xl">🎁</span>
                </div>
                <h3 class="text-xl font-semibold text-white mb-3">Эксклюзивные бонусы</h3>
                <ul class="space-y-2 text-gray-300">
                    <li class="flex items-start">
                        <span class="text-[#ff424d] mr-2">•</span>
                        <span>+50% к первому депозиту</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-[#ff424d] mr-2">•</span>
                        <span>Еженедельные фриспины</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-[#ff424d] mr-2">•</span>
                        <span>Персональные предложения</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="bg-[#2a2a42] rounded-xl p-6 sm:p-8" itemscope itemtype="https://schema.org/FAQPage">
        <h2 class="text-2xl sm:text-3xl font-bold text-white mb-6">Частые вопросы</h2>
        
        <div class="space-y-4">
            <div class="bg-[#1c1c2d] rounded-lg p-5" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h3 class="text-lg sm:text-xl font-semibold text-white mb-3 flex items-center" itemprop="name">
                    <span class="text-[#ff424d] mr-2">❓</span>
                    <span>Чем приложение лучше мобильной версии сайта?</span>
                </h3>
                <div class="text-gray-300 pl-7" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <div itemprop="text">
                        <p>Приложение VAVADA предлагает:</p>
                        <ul class="mt-2 space-y-2">
                            <li class="flex items-start">
                                <span class="text-[#ff424d] mr-2">•</span>
                                <span>Быстродействие на 40% выше</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-[#ff424d] mr-2">•</span>
                                <span>Экономию трафика до 60%</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-[#ff424d] mr-2">•</span>
                                <span>Эксклюзивные бонусы</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-[#ff424d] mr-2">•</span>
                                <span>Push-уведомления о бонусах</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="bg-[#1c1c2d] rounded-lg p-5" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h3 class="text-lg sm:text-xl font-semibold text-white mb-3 flex items-center" itemprop="name">
                    <span class="text-[#ff424d] mr-2">❓</span>
                    <span>Как обновлять приложение?</span>
                </h3>
                <div class="text-gray-300 pl-7" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <div itemprop="text">
                        <p>Для разных платформ:</p>
                        <ul class="mt-2 space-y-2">
                            <li class="flex items-start">
                                <span class="text-[#ff424d] mr-2">•</span>
                                <span><strong>iOS:</strong> автоматически через App Store</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-[#ff424d] mr-2">•</span>
                                <span><strong>Android:</strong> скачайте новую версию APK с сайта</span>
                            </li>
                        </ul>
                        <p class="mt-3">Приложение уведомит вас о доступных обновлениях.</p>
                    </div>
                </div>
            </div>
            
            <div class="bg-[#1c1c2d] rounded-lg p-5" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h3 class="text-lg sm:text-xl font-semibold text-white mb-3 flex items-center" itemprop="name">
                    <span class="text-[#ff424d] mr-2">❓</span>
                    <span>Можно ли использовать один аккаунт на разных устройствах?</span>
                </h3>
                <div class="text-gray-300 pl-7" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <div itemprop="text">
                        <p>Да, ваш аккаунт доступен на:</p>
                        <ul class="mt-2 space-y-2">
                            <li class="flex items-start">
                                <span class="text-[#ff424d] mr-2">•</span>
                                <span>Мобильном приложении</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-[#ff424d] mr-2">•</span>
                                <span>Полной версии сайта</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-[#ff424d] mr-2">•</span>
                                <span>Мобильной версии сайта</span>
                            </li>
                        </ul>
                        <p class="mt-3">Все данные синхронизируются в реальном времени.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Блок -->
    <div class="bg-gradient-to-r from-[#ff424d] to-[#ff2c39] rounded-xl p-6 sm:p-8 mt-8 text-center">
        <h3 class="text-xl sm:text-2xl font-bold text-white mb-4">Готовы играть с максимальным комфортом?</h3>
        <p class="text-white/90 mb-6">Скачайте приложение VAVADA прямо сейчас и получите эксклюзивный бонус +50% к первому депозиту!</p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#" rel="nofollow" class="px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-900 transition-colors flex items-center justify-center gap-2" target="_blank">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                App Store
            </a>
            <a href="#" rel="nofollow" class="px-6 py-3 bg-white text-[#ff424d] font-medium rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2" target="_blank">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3.063 3S3 3.895 3 6v12c0 2.105.063 3 3.063 3h11.874C21 21 21 20.105 21 18V6c0-2.105-.063-3-3.063-3m-.782 2h13.124a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5.72zm2.406 2.719L6 8.22v7.562l1.125.5 5.313-4.28zm.844.656l5.656 4.594 2.125-2.125v-1.063l-2.125-2.125zm6.125 1.625l1.125 1.125v1.75l-1.125 1.125z"/>
                </svg>
                Google Play
            </a>
        </div>
    </div>
</main>

<script>
    // Устанавливаем текущую дату
    document.addEventListener('DOMContentLoaded', function() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        document.getElementById('current-date').textContent = new Date().toLocaleDateString('ru-RU', options);
    });
</script>
             <footer class="bg-vavada-dark border-t border-vavada-primary py-8">
        <div class="container mx-auto px-4">
          <div class="text-center text-gray-400">
            <p class="mb-4">🔞 Игра доступна только для лиц старше 18 лет</p>
            <p>© 2025 VAVADA. Все права защищены.</p>
          </div>
        </div>
      </footer>
</div>
        `,
    },
  ],
};
