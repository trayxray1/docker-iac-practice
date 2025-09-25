🐳 Docker Infrastructure as Code (IaC) Project
📋 Описание проекта
Полнофункциональная микросервисная архитектура, развернутая с помощью Docker Compose. Проект демонстрирует принципы Infrastructure as Code (IaC) для создания масштабируемого и надежного веб-приложения.

🏗️ Архитектура
text
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Nginx         │    │   Frontend      │    │   Backend       │
│   (Load Balancer)│────│   (React)       │────│   (Node.js)     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                                       │
                       ┌─────────────────┐    ┌─────────────────┐
                       │   PostgreSQL    │    │   Redis         │
                       │   (Database)    │    │   (Cache)       │
                       └─────────────────┘    └─────────────────┘
                                                       │
                       ┌─────────────────┐    ┌─────────────────┐
                       │   Prometheus    │    │   Grafana       │
                       │   (Monitoring)  │    │   (Dashboards)  │
                       └─────────────────┘    └─────────────────┘
🚀 Технологический стек
Frontend
React - пользовательский интерфейс
Node.js - среда выполнения
Docker - контейнеризация
Backend
Node.js - серверная логика
Express.js - веб-фреймворк
PostgreSQL - основная база данных
Redis - кэширование
Infrastructure
Docker Compose - оркестрация контейнеров
Nginx - Load Balancer и Reverse Proxy
Prometheus - сбор метрик
Grafana - визуализация данных
📁 Структура проекта
text
docker-iac-practice/
├── frontend/
│   ├── Dockerfile
│   ├── package.json
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── App.js
│       └── index.js
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
├── nginx/
│   ├── nginx.conf
│   └── default.conf
├── monitoring/
│   ├── prometheus/
│   │   └── prometheus.yml
│   └── grafana/
│       └── dashboards/
├── scripts/
│   ├── deploy.sh
│   ├── health_check.sh
│   └── load_test.sh
└── docker-compose.yml
🛠️ Установка и запуск
Предварительные требования
Docker
Docker Compose
Быстрый старт
Клонируйте репозиторий:
bash
git clone <your-repo-url>
cd docker-iac-practice
Запустите все сервисы:
bash
docker compose up -d
Проверьте статус:
bash
docker compose ps
🌐 Доступные сервисы
Сервис	URL	Описание
Приложение	http://localhost	Главная страница через Nginx
Frontend	http://localhost:3000	React приложение
Backend API	http://localhost:5000	Node.js API
API через Nginx	http://localhost/api/health	API через Load Balancer
Prometheus	http://localhost:9090	Мониторинг метрик
Grafana	http://localhost:3001	Дашборды (admin/admin)
🔧 API Endpoints
Health Checks
bash
# Backend health check
curl http://localhost:5000/api/health

# API через Nginx
curl http://localhost/api/health

# Metrics для Prometheus
curl http://localhost:5000/metrics
Примеры запросов
bash
# Получить список пользователей
curl http://localhost/api/users

# Проверить статус приложения
curl http://localhost/api/health
📊 Мониторинг
Prometheus
URL: http://localhost:9090
Метрики: HTTP запросы, использование ресурсов, состояние сервисов
Grafana
URL: http://localhost:3001
Логин: admin
Пароль: admin
Дашборды: Application metrics, Database performance, System resources
🚀 Полезные команды
Управление сервисами
bash
# Запуск всех сервисов
docker compose up -d

# Остановка всех сервисов
docker compose down

# Перезапуск конкретного сервиса
docker compose restart backend

# Просмотр логов
docker compose logs -f backend

# Пересборка образов
docker compose build --no-cache
Масштабирование
bash
# Увеличить количество frontend контейнеров
docker compose up -d --scale frontend=3

# Увеличить количество backend контейнеров
docker compose up -d --scale backend=2
Очистка
bash
# Остановить и удалить все контейнеры и volumes
docker compose down -v

# Удалить все неиспользуемые образы
docker image prune -a
🔒 Безопасность
SSL сертификаты - самоподписанные для локальной разработки
Network isolation - все сервисы в изолированной сети
Environment variables - конфиденциальные данные через переменные окружения
Health checks - автоматическая проверка состояния сервисов
📈 Масштабируемость
Load Balancing - Nginx распределяет нагрузку между сервисами
Horizontal scaling - легко добавить больше контейнеров
Database pooling - эффективное использование соединений с БД
Caching - Redis для кэширования данных
🧪 Тестирование
Health Check скрипт
bash
# Запуск проверки здоровья всех сервисов
./scripts/health_check.sh
Load Testing
bash
# Нагрузочное тестирование
./scripts/load_test.sh
🐛 Troubleshooting
Частые проблемы
Порт уже используется:
bash
# Проверить, какие порты заняты
netstat -tlnp | grep -E ':(80|3000|5000|9090|3001)'
Контейнер не запускается:
bash
# Проверить логи
docker compose logs <service-name>
Проблемы с базой данных:
bash
# Подключиться к PostgreSQL
docker compose exec postgres psql -U user -d mydb
📚 Изученные концепции
Infrastructure as Code (IaC) - описание инфраструктуры в коде
Containerization - изоляция приложений в контейнерах
Microservices - разделение приложения на независимые сервисы
Load Balancing - распределение нагрузки между сервисами
Monitoring & Observability - мониторинг и наблюдение за системой
Service Discovery - автоматическое обнаружение сервисов
Health Checks - проверка состояния сервисов
🎯 Результаты
✅ Создана полнофункциональная микросервисная архитектура ✅ Настроен автоматический мониторинг ✅ Реализован Load Balancing ✅ Добавлено кэширование данных ✅ Настроена безопасность ✅ Создана документация

📝 Лицензия
Этот проект создан в образовательных целях для изучения Infrastructure as Code.

👨‍💻 Автор
Создано в рамках изучения практических заданий по Infrastructure as Code на Ubuntu 24.04.3 LTS

Время выполнения: ~2-3 часа
Уровень сложности: Средний
Технологии: Docker, Docker Compose, Node.js, React, PostgreSQL, Redis, Nginx, Prometheus, Grafana

created with the evaluation version of Markdown Monster
