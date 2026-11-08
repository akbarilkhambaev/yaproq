# YAPROQ — сайт чайной

Концепт сайта чайной в Ташкенте. Стиль «Пахта»: кобальтовый узор с узбекского фарфора, шафран и тёплый крем.

**Стек:** Next.js (App Router) · TypeScript · Tailwind CSS · GSAP + ScrollTrigger

## Запуск

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # проверка сборки
```

## Деплой на Vercel

1. Импортировать репозиторий на [vercel.com/new](https://vercel.com/new).
2. Framework Preset определится сам (Next.js), настройки по умолчанию.

## Где что лежит

| Что поменять | Файл |
| --- | --- |
| Адрес, часы, ориентир, Instagram, ссылки на маршрут и бронь | `src/data/site.ts` |
| Меню, цены, конструктор заварки | `src/data/menu.ts` |
| Цвета, тени, шрифты | `tailwind.config.ts`, `src/app/globals.css` |
| Анимации GSAP | `src/components/Animations.tsx` (+ в `Menu.tsx` и `BrewBuilder.tsx`) |

## Что ещё не заполнено

- Ориентир, Instagram — `[ПЛЕЙСХОЛДЕРЫ]` в `src/data/site.ts`
- Ссылки «Построить маршрут» и «Забронировать» (сейчас `#`)
- Форма подписки — заглушка, не подключена к сервису рассылки
- Меню и цены — примерные

Анимации отключаются, если в системе включено «уменьшение движения».
