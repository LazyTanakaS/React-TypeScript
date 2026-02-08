# Weather App — React + TypeScript# Weather App — React + TypeScript# 🌤️ Weather App# Weather App# React + TypeScript + Vite

![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)A modern weather application with beautiful glassmorphism design, dynamic themes, and search history.A modern weather application with beautiful glassmorphism design, dynamic themes, and search history.This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)

![Vite](https://img.shields.io/badge/Vite-7-purple?style=flat-square&logo=vite)![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)

![OpenWeather](https://img.shields.io/badge/OpenWeather-API-orange?style=flat-square&logo=weatherapi)

![Vite](https://img.shields.io/badge/Vite-7-purple?style=flat-square&logo=vite)![React](https://img.shields.io/badge/React-18-blue?logo=react)![React](https://img.shields.io/badge/React-18-blue?logo=react)Currently, two official plugins are available:

## Overview

![OpenWeather](https://img.shields.io/badge/OpenWeather-API-orange?style=flat-square&logo=weatherapi)

A modern weather application with beautiful glassmorphism design, dynamic themes, and search history.

![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)

**Goal:** Practice API integration, dynamic theming, and localStorage persistence.

## Overview

---

![Vite](https://img.shields.io/badge/Vite-7-purple?logo=vite)![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)

## Features

A modern weather application with beautiful glassmorphism design, dynamic themes, and search history.

- 🔍 **Real-time weather search** by city name

- 🌡️ **Current temperature**, feels like, humidity, and wind speed![OpenWeather](https://img.shields.io/badge/OpenWeather-API-orange?logo=weatherapi)

- 🎨 **Dynamic theme** based on weather conditions

- 📜 **Search history** (last 7 searches)**Goal:** Practice API integration, dynamic theming, and localStorage persistence.

- ⏰ **Timestamp** for each search

- 🌤️ **Weather icons** from OpenWeatherMap![Vite](https://img.shields.io/badge/Vite-7-purple?logo=vite)- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh

- ✨ **Glassmorphism design** with blur effects

- 🎭 **Smooth animations** and transitions---

- 💾 **Auto-save history** to localStorage

- 📱 **Responsive interface**## ✨ Features

---## Features

## Weather Themes![OpenWeather](https://img.shields.io/badge/OpenWeather-API-orange?logo=weatherapi)- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

The background dynamically changes based on weather:- Real-time weather search by city name

- ☀️ **Sunny** - Yellow-orange gradient- Current temperature, feels like, humidity, wind speed- 🔍 Real-time weather search by city name

- 🌧️ **Rainy** - Blue-grey gradient

- ❄️ **Snowy** - White-blue gradient- Dynamic theme based on weather conditions

- ☁️ **Cloudy** - Grey gradient

- 🌫️ **Mist** - Light grey gradient- Search history (last 7 searches)- 🌡️ Current temperature, feels like, humidity, and wind speed## Features## React Compiler

- ⛈️ **Thunderstorm** - Dark purple gradient

- 💜 **Default** - Purple gradient- Timestamp for each search

---- Weather icons from OpenWeatherMap- 🎨 **Dynamic theme** based on weather conditions

## Technologies- Glassmorphism design with blur effects

- **React 18** - UI library- Smooth animations and transitions- 📜 **Search history** (last 7 searches)- Real-time weather search by city nameThe React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

- **TypeScript 5** - type safety

- **Vite 7** - fast build tool- Auto-save history to localStorage

- **OpenWeatherMap API** - weather data

- **CSS3** - glassmorphism and animations- Responsive interface- ⏰ **Timestamp** for each search

- **LocalStorage API** - history persistence

- **Fetch API** - HTTP requests---- 🌤️ Weather icons from OpenWeatherMap- Current temperature, feels like, humidity, and wind speed

---## Weather Themes- ✨ Glassmorphism design with blur effects

## SetupBackground dynamically changes based on weather:- 🎭 Smooth animations and transitions- **Dynamic theme** based on weather conditions## Expanding the ESLint configuration

### 1. Get API Key- ☀️ **Sunny** — Yellow-orange gradient- 💾 Auto-save history to localStorage

1. Register at [OpenWeatherMap](https://openweathermap.org/api)- 🌧️ **Rainy** — Blue-grey gradient

2. Get your free API key

3. Create `.env` file in project root:- ❄️ **Snowy** — White-blue gradient- 📱 Responsive interface- **Search history** (last 7 searches)

````env- ☁️ **Cloudy** — Grey gradient

VITE_OPENWEATHER_API_KEY=your_api_key_here

```- 🌫️ **Mist** — Light grey gradient## 🌈 Weather Themes- **Timestamp** for each searchIf you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:



### 2. Installation and Running- ⛈️ **Thunderstorm** — Dark purple gradient



```bashThe background dynamically changes based on weather:- Weather icons from OpenWeatherMap

# Install dependencies

npm install---



# Run development server- ☀️ **Sunny** - Yellow-orange gradient- Glassmorphism design with blur effects```js

npm run dev

## Tech Stack

# Build for production

npm run build- 🌧️ **Rainy** - Blue-grey gradient



# Preview production build- React 18

npm run preview

```- TypeScript 5- ❄️ **Snowy** - White-blue gradient- Smooth animations and transitionsexport default defineConfig([



---- Vite 7



## Project Structure- OpenWeatherMap API- ☁️ **Cloudy** - Grey gradient



```text- CSS3 (glassmorphism, animations)

weather-app/

├── src/- LocalStorage API- 🌫️ **Mist** - Light grey gradient- Auto-save history to localStorage globalIgnores(['dist']),

│   ├── App.tsx       # Main component

│   ├── App.css       # Styles with glassmorphism- Fetch API

│   ├── main.tsx      # Entry point

│   └── index.css     # Global styles- ⛈️ **Thunderstorm** - Dark purple gradient

├── public/           # Static files

├── .env              # Environment variables (API key)---

├── package.json      # Dependencies

├── vite.config.ts    # Vite configuration- Responsive interface {

└── tsconfig.json     # TypeScript configuration

```## Setup



---## 🚀 Technologies



## What I Learned### Get API Key



### TypeScriptfiles: ['**/*.{ts,tsx}'],



- API response typing with interfaces1. Register at [OpenWeatherMap](https://openweathermap.org/api)

- Optional properties: `weather?: WeatherData`

- Type guards for null checks2. Get your free API key- **React 18** - UI library

- Async function typing: `Promise<void>`

- Union types: `string | null`3. Create `.env` file in project root:

- Array typing: `string[]`

- Environment variables typing- **TypeScript 5** - type safety## Weather Themes extends: [



### React Hooks```env



- `useState` - managing weather, loading, error, history statesVITE_OPENWEATHER_API_KEY=your_api_key_here- **Vite 7** - fast build tool

- `useEffect` - loading history on mount, saving on change

- Async state updates```

- Error handling in React

- Loading states for better UX- **OpenWeatherMap API** - weather data // Other configs...



### API Integration### Installation & Running



- **OpenWeatherMap API** - fetching weather data- **CSS3** - glassmorphism and animations

- Environment variables with Vite: `import.meta.env.VITE_*`

- Async/await for API calls```bash

- Error handling for failed requests

- API response parsing# Install dependencies- **LocalStorage API** - search history persistenceThe background dynamically changes based on weather:

- Query parameters in URLs

npm install

### Data Management

- **Fetch API** - HTTP requests

- **localStorage** - persisting search history

- JSON serialization/deserialization# Create .env file with your API key

- Array methods: `unshift()`, `slice()`, `map()`

- Limiting history to 7 itemsecho VITE_OPENWEATHER_API_KEY=your_api_key_here > .env      // Remove tseslint.configs.recommended and replace with this

- Timestamps with `Date.toLocaleString()`

- Duplicate prevention in history



### CSS Advanced# Run development server## 🔧 Setup



- **Glassmorphism** effect:npm run dev

  ```css

  background: rgba(255, 255, 255, 0.2);- ☀️ **Sunny** - Yellow-orange gradient tseslint.configs.recommendedTypeChecked,

  backdrop-filter: blur(10px);

  border: 1px solid rgba(255, 255, 255, 0.3);# Build for production

````

- Dynamic backgrounds with gradientsnpm run build### 1. Get API Key

- CSS transitions for smooth theme changes

- Flexbox layouts```

