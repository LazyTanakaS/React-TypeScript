# Weather App — React + TypeScript# 🌤️ Weather App# Weather App# React + TypeScript + Vite

![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)A modern weather application with beautiful glassmorphism design, dynamic themes, and search history.A modern weather application with beautiful glassmorphism design, dynamic themes, and search history.This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)

![Vite](https://img.shields.io/badge/Vite-7-purple?style=flat-square&logo=vite)![React](https://img.shields.io/badge/React-18-blue?logo=react)![React](https://img.shields.io/badge/React-18-blue?logo=react)Currently, two official plugins are available:

![OpenWeather](https://img.shields.io/badge/OpenWeather-API-orange?style=flat-square&logo=weatherapi)

![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)

## Overview

![Vite](https://img.shields.io/badge/Vite-7-purple?logo=vite)![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)

A modern weather application with beautiful glassmorphism design, dynamic themes, and search history.

![OpenWeather](https://img.shields.io/badge/OpenWeather-API-orange?logo=weatherapi)

**Goal:** Practice API integration, dynamic theming, and localStorage persistence.

![Vite](https://img.shields.io/badge/Vite-7-purple?logo=vite)- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh

---

## ✨ Features

## Features

![OpenWeather](https://img.shields.io/badge/OpenWeather-API-orange?logo=weatherapi)- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- Real-time weather search by city name

- Current temperature, feels like, humidity, wind speed- 🔍 Real-time weather search by city name

- Dynamic theme based on weather conditions

- Search history (last 7 searches)- 🌡️ Current temperature, feels like, humidity, and wind speed## Features## React Compiler

- Timestamp for each search

- Weather icons from OpenWeatherMap- 🎨 **Dynamic theme** based on weather conditions

- Glassmorphism design with blur effects

- Smooth animations and transitions- 📜 **Search history** (last 7 searches)- Real-time weather search by city nameThe React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

- Auto-save history to localStorage

- Responsive interface- ⏰ **Timestamp** for each search

---- 🌤️ Weather icons from OpenWeatherMap- Current temperature, feels like, humidity, and wind speed

## Weather Themes- ✨ Glassmorphism design with blur effects

Background dynamically changes based on weather:- 🎭 Smooth animations and transitions- **Dynamic theme** based on weather conditions## Expanding the ESLint configuration

- ☀️ **Sunny** — Yellow-orange gradient- 💾 Auto-save history to localStorage

- 🌧️ **Rainy** — Blue-grey gradient

- ❄️ **Snowy** — White-blue gradient- 📱 Responsive interface- **Search history** (last 7 searches)

- ☁️ **Cloudy** — Grey gradient

- 🌫️ **Mist** — Light grey gradient## 🌈 Weather Themes- **Timestamp** for each searchIf you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

- ⛈️ **Thunderstorm** — Dark purple gradient

The background dynamically changes based on weather:- Weather icons from OpenWeatherMap

---

- ☀️ **Sunny** - Yellow-orange gradient- Glassmorphism design with blur effects```js

## Tech Stack

- 🌧️ **Rainy** - Blue-grey gradient

- React 18

- TypeScript 5- ❄️ **Snowy** - White-blue gradient- Smooth animations and transitionsexport default defineConfig([

- Vite 7

- OpenWeatherMap API- ☁️ **Cloudy** - Grey gradient

- CSS3 (glassmorphism, animations)

- LocalStorage API- 🌫️ **Mist** - Light grey gradient- Auto-save history to localStorage globalIgnores(['dist']),

- Fetch API

- ⛈️ **Thunderstorm** - Dark purple gradient

---

- Responsive interface {

## Setup

## 🚀 Technologies

### Get API Key

files: ['**/*.{ts,tsx}'],

1. Register at [OpenWeatherMap](https://openweathermap.org/api)

2. Get your free API key- **React 18** - UI library

3. Create `.env` file in project root:

- **TypeScript 5** - type safety## Weather Themes extends: [

```env

VITE_OPENWEATHER_API_KEY=your_api_key_here- **Vite 7** - fast build tool

```

- **OpenWeatherMap API** - weather data // Other configs...

### Installation & Running

- **CSS3** - glassmorphism and animations

```bash

# Install dependencies- **LocalStorage API** - search history persistenceThe background dynamically changes based on weather:

npm install

- **Fetch API** - HTTP requests

# Create .env file with your API key

echo VITE_OPENWEATHER_API_KEY=your_api_key_here > .env      // Remove tseslint.configs.recommended and replace with this



# Run development server## 🔧 Setup

npm run dev

- ☀️ **Sunny** - Yellow-orange gradient tseslint.configs.recommendedTypeChecked,

# Build for production

npm run build### 1. Get API Key

```

- 🌧️ **Rainy** - Blue-grey gradient // Alternatively, use this for stricter rules

---

1. Register at [OpenWeatherMap](https://openweathermap.org/api)

## Project Structure

2. Get your free API key- ❄️ **Snowy** - White-blue gradient tseslint.configs.strictTypeChecked,

````text

weather-app/3. Create `.env` file in project root:

├── src/

│   ├── App.tsx       # Main component- ☁️ **Cloudy** - Grey gradient // Optionally, add this for stylistic rules

│   ├── App.css       # Styles with glassmorphism

│   ├── main.tsx      # Entry point```env

│   └── index.css     # Global styles

├── public/VITE_OPENWEATHER_API_KEY=your_api_key_here- ⚡ **Stormy** - Dark grey gradient tseslint.configs.stylisticTypeChecked,

├── .env              # Environment variables (not in git)

├── package.json```

├── vite.config.ts

└── tsconfig.json- 💜 **Default** - Purple gradient

````

### 2. Installation

---

      // Other configs...

## What I Learned

``````bash

**TypeScript:**

- API response typing with interfaces# Install dependencies## Technologies ]

- Optional properties: `weather?: WeatherData`

- Type guards for null checksnpm install

- Async function typing: `Promise<void>`

- Union types: `string | null`    languageOptions: {

- Array typing: `string[]`

# Run development server

**React Hooks:**

- `useState` — managing weather, loading, error, history statesnpm run dev- **React 18** - UI library parserOptions: {

- `useEffect` — loading history on mount, saving on change

- Async state updates

- Error handling in React

- Loading states for better UX# Build for production- **TypeScript 5** - type safety project: ['./tsconfig.node.json', './tsconfig.app.json'],



**API Integration:**npm run build

- OpenWeatherMap API

- Environment variables with Vite: `import.meta.env.VITE_*`- **Vite 7** - fast build tool tsconfigRootDir: import.meta.dirname,

- Async/await for API calls

- Error handling for failed requests# Preview production build

- API response parsing

- Query parameters in URLsnpm run preview- **OpenWeatherMap API** - weather data },



**Data Management:**```

- localStorage persistence

- JSON serialization- **React Icons** - weather icons (wi) // other options...

- Array methods: `unshift()`, `slice()`, `map()`

- Limiting history to 7 items## 📂 Project Structure

- Timestamps with `Date.toLocaleString()`

- Duplicate prevention in history- **CSS3** - glassmorphism and animations },



**CSS Advanced:**`````text

- Glassmorphism effect:

  ```cssweather-app/- **LocalStorage API** - history persistence },

  background: rgba(255, 255, 255, 0.2);

  backdrop-filter: blur(10px);├── src/

  border: 1px solid rgba(255, 255, 255, 0.3);

  ```│   ├── App.tsx       # Main component])

- Dynamic backgrounds with gradients

- CSS transitions for smooth theme changes│   ├── App.css       # Styles with glassmorphism

- Flexbox layouts

- Box-shadow for depth│   ├── main.tsx      # Entry point## Installation and Running```

- Hover effects with transforms

│   └── index.css     # Global styles

---

├── public/           # Static files````bashYou can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

## Key Components

├── .env              # Environment variables (not in git)

### App.tsx

├── package.json      # Dependencies# Install dependencies

Main component with:

- Weather state management├── vite.config.ts    # Vite configuration

- Search history logic

- API integration└── tsconfig.json     # TypeScript configurationnpm install```js

- Dynamic theming

- localStorage sync`````



### Dynamic Theme Function// eslint.config.js



```typescript## 📚 What I Learned

const getWeatherTheme = (description: string) => {

  const themes: Record<string, string> = {# Create .env file with your API keyimport reactX from 'eslint-plugin-react-x'

    Clear: "linear-gradient(135deg, #FDB813, #F37335)",

    Rain: "linear-gradient(135deg, #4A5568, #2D3748)",### TypeScript

    Snow: "linear-gradient(135deg, #E0F2FE, #BFDBFE)",

    Clouds: "linear-gradient(135deg, #9CA3AF, #6B7280)",echo VITE_WEATHER_API_KEY=your_api_key_here > .envimport reactDom from 'eslint-plugin-react-dom'

    Mist: "linear-gradient(135deg, #D1D5DB, #9CA3AF)",

    Thunderstorm: "linear-gradient(135deg, #5E35B1, #311B92)",- API response typing with interfaces

  };

  return themes[description] || "linear-gradient(135deg, #667eea, #764ba2)";- Optional properties: `weather?: WeatherData`

};

```- Type guards for null checks



---- Async function typing: `Promise<void>`# Run development serverexport default defineConfig([



## Weather Details- Union types: `string | null`



The app displays:- Array typing: `string[]`npm run dev globalIgnores(['dist']),



- 🌡️ **Feels Like** — perceived temperature### React Hooks {

- 💧 **Humidity** — air moisture percentage

- 💨 **Wind Speed** — in meters per second- `useState` - managing weather, loading, error, history states# Build for production files: ['**/*.{ts,tsx}'],



---- `useEffect` - loading history on mount, saving on change



## Design Features- Async state updatesnpm run build extends: [



- Glassmorphism effect with frosted glass look- Error handling in React

- Backdrop blur for modern aesthetics

- Dynamic theme changes based on weather- Loading states for better UX // Other configs...

- Smooth transitions (0.3s ease)

- Weather icons from OpenWeatherMap### API Integration# Preview production build // Enable lint rules for React

- Responsive grid layout

- Hover effects with lift animation- **OpenWeatherMap API** - fetching weather datanpm run preview reactX.configs['recommended-typescript'],



---- Environment variables with Vite: `import.meta.env.VITE_*`



## Author- Async/await for API calls``` // Enable lint rules for React DOM



Made with ❤️ using React + TypeScript + OpenWeatherMap API- Error handling for failed requests


- API response parsing reactDom.configs.recommended,

- Query parameters in URLs

## Getting API Key ],

### Data Management

    languageOptions: {

- **localStorage** - persisting search history

- JSON serialization/deserialization1. Register at [OpenWeatherMap](https://openweathermap.org/api) parserOptions: {

- Array methods: `unshift()`, `slice()`, `map()`

- Limiting history to 7 items2. Get your free API key project: ['./tsconfig.node.json', './tsconfig.app.json'],

- Timestamps with `Date.toLocaleString()`

- Duplicate prevention in history3. Create `.env` file in project root tsconfigRootDir: import.meta.dirname,

### CSS Advanced4. Add: `VITE_WEATHER_API_KEY=your_key_here` },

- **Glassmorphism** effect: // other options...

  ```css

  background: rgba(255, 255, 255, 0.2);## Project Structure    },

  backdrop-filter: blur(10px);

  border: 1px solid rgba(255, 255, 255, 0.3);  },

``````

- Dynamic backgrounds with gradients```text])

- CSS transitions for smooth theme changes

- Flexbox layoutsweather-app/```

- Box-shadow for depth

- Border-radius for modern look├── src/

- Hover effects with transforms│ ├── App.tsx # Main component

│ ├── App.css # Application styles

## 🎨 Design Highlights│ ├── main.tsx # Entry point

│ └── index.css # Global styles

### Glassmorphism Effect├── public/ # Static files

├── .env # Environment variables (API key)

The app uses modern glassmorphism design:├── .gitignore # Git ignore rules

├── package.json # Dependencies

- **Frosted Glass**: Semi-transparent backgrounds├── vite.config.ts # Vite configuration

- **Backdrop Blur**: 10px blur effect└── tsconfig.json # TypeScript configuration

- **Border**: 1px white border with transparency````

- **Shadow**: Soft box-shadow for depth

- **Smooth Transitions**: 0.3s ease for theme changes## What I Learned

### Dynamic Themes### TypeScript

```typescript- Complex interfaces: `WeatherResponse`, `Weather`, `WeatherHistory`

const getWeatherBackground = (main: string) => {- Nested object typing

const backgrounds: Record<string, string> = {- Array typing with interfaces

    Clear: "linear-gradient(135deg, #FFD700, #FFA500)",- Optional function parameters: `fetchWeather(searchCity?: string)`

    Rain: "linear-gradient(135deg, #4A90E2, #7B8D93)",- Type guards for error handling

    Snow: "linear-gradient(135deg, #E0F7FA, #B3E5FC)",- Environment variables typing: `import.meta.env.VITE_*`

    Clouds: "linear-gradient(135deg, #B0BEC5, #78909C)",

    Mist: "linear-gradient(135deg, #ECEFF1, #CFD8DC)",### React Hooks

    Thunderstorm: "linear-gradient(135deg, #5E35B1, #311B92)",

};- `useState` - managing weather, city, loading, error, history states

return backgrounds[main] || "linear-gradient(135deg, #667eea, #764ba2)";- `useEffect` - multiple effects for:

}; - localStorage synchronization

````- Dynamic theme changes

  - DOM manipulation (body className)

### Weather Icons- Lazy initialization for localStorage data

- Functional state updates with filters

Icons come directly from OpenWeatherMap:

### API Integration

```typescript

<img- **Fetch API** - HTTP requests

  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}- Async/await pattern

  alt={weather.weather[0].description}- Error handling with try-catch

/>- Query parameters in URL

```- Response validation

- JSON parsing

## 💡 Usage Example

### Data Management

### Weather Data Interface

- **localStorage** - persisting search history

```typescript- Timestamp tracking with `Date.now()`

interface WeatherData {- Deduplication logic (remove duplicates)

  name: string;- Array manipulation (filter, slice)

  main: {- Data transformation

    temp: number;

    feels_like: number;### CSS Advanced

    humidity: number;

  };- **Glassmorphism** - `backdrop-filter: blur()`

  weather: [- Dynamic themes with body classes

    {- CSS variables and transitions

      main: string;- Keyframe animations:

      description: string;  - `fadeIn` - card appearance

      icon: string;  - `slideInUp` - history cards

    }  - `pulse` - weather icon

  ];  - `shake` - error message

  wind: {  - `gradientShift` - background animation

    speed: number;- Pseudo-elements `::before` for smooth theme transitions

  };- Hover effects with transform

}- Responsive grid layouts

````

## Main Components

### Fetching Weather

### App.tsx

````typescript

const fetchWeather = async (city: string) => {Main component with:

  try {

    setLoading(true);- Weather state management

    setError(null);- API integration

- Search history logic

    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;- Theme switching

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;- Time formatting



    const response = await fetch(url);### Key Functions

    if (!response.ok) throw new Error("City not found");

```typescript

    const data: WeatherData = await response.json();// Fetch weather data

    setWeather(data);const fetchWeather = async (searchCity?: string) => { ... }

    addToHistory(city);

  } catch (err) {// Format relative time

    setError("Failed to fetch weather");const formatTime = (timestamp: number) => { ... }

  } finally {

    setLoading(false);// Get weather theme

  }const getWeatherTheme = (description: string) => { ... }

};```

````

## Implementation Features

### Search History

1. **Dynamic Themes**: Background changes based on weather conditions

````typescript2. **Search History**: Last 7 searches with timestamps

const addToHistory = (city: string) => {3. **Smart Updates**: Clicking history card fetches fresh weather data

  setSearchHistory((prev) => {4. **Deduplication**: Same city moves to top instead of duplicating

    const newHistory = [city, ...prev.filter((c) => c !== city)];5. **Time Display**: Relative time (e.g., "5m ago", "2h ago")

    return newHistory.slice(0, 7); // Keep only last 76. **Smooth Transitions**: 2.5s theme changes via opacity overlay

  });7. **Weather Icons**: From react-icons/wi library

};8. **Error Handling**: User-friendly error messages with shake animation

```9. **Loading State**: Animated loading indicator

10. **Auto-clear**: Input clears after successful search

## 🎯 Key Features Explained

## Weather Details

### Dynamic Background

The app displays:

Background gradient changes based on current weather:

- 🌡️ **Feels Like** - perceived temperature

```typescript- 💧 **Humidity** - air moisture percentage

const background = weather- 💨 **Wind Speed** - in meters per second

  ? getWeatherBackground(weather.weather[0].main)

  : "linear-gradient(135deg, #667eea, #764ba2)";Each detail has an icon from `react-icons/wi`:



<div className="app" style={{ background }}></div>;- `WiThermometer` - temperature

```- `WiHumidity` - humidity

- `WiStrongWind` - wind

### Loading States

## Animations

Three states managed for better UX:

- **fadeIn** - weather card appearance

- **Loading**: Shows spinner during API call- **slideInUp** - sequential history card animation (0.1s delays)

- **Error**: Displays error message if fetch fails- **pulse** - weather icon breathing effect (3s cycle)

- **Success**: Shows weather data- **shake** - error message shake

- **gradientShift** - background animation (15s cycle)

```typescript- **Hover effects** - cards lift up with shadows

{

  loading && <p>Loading...</p>;## Responsive Design

}

{- Mobile-friendly layout

  error && <p className="error">{error}</p>;- Flexible grid for history (7→5→4→3→2 columns)

}- Detail cards stack vertically on mobile

{- Touch-friendly buttons and cards

  weather && <WeatherCard data={weather} />;

}## Security

````

- API key stored in `.env` file

### Search History- `.env` added to `.gitignore`

- No API key in source code

Last 7 searches saved to localStorage:

## Commits

- Click any history item to search again

- Timestamps show when searched```bash

- Duplicates are moved to topgit add .

- Automatically saved on new searchgit commit -m "feat: add weather app with dynamic themes and history"

````

```typescript

{## Design

  searchHistory.map((city) => (

    <li key={city} onClick={() => fetchWeather(city)}>- **Glassmorphism** - frosted glass effect

      {city}- **Dynamic gradients** - change with weather

      <span>{new Date().toLocaleString()}</span>- **Smooth animations** - all transitions are fluid

    </li>- **Modern UI** - clean and minimalist

  ));- **Icon integration** - weather icons for visual clarity

}

```## API Response Example



## 📱 Responsive Design```json

{

The app is fully responsive:  "name": "Warsaw",

  "main": {

- **Mobile**: Single column layout    "temp": -7,

- **Tablet**: Centered card with padding    "feels_like": -14,

- **Desktop**: Max-width container    "humidity": 87

  },

```css  "weather": [

.app {    {

  min-height: 100vh;      "description": "overcast clouds",

  padding: 20px;      "icon": "04d"

  transition: background 0.3s ease;    }

}  ],

  "wind": {

.weather-card {    "speed": 5.14

  max-width: 500px;  }

  margin: 0 auto;}

  background: rgba(255, 255, 255, 0.2);```

  backdrop-filter: blur(10px);

}## Screenshots Features

````

The app includes:

## 🌍 Weather Conditions

- Search bar with glassmorphism effect

The app supports all OpenWeatherMap conditions:- Large weather card with city name and icon

- Temperature display in °C

- Clear- Weather description (e.g., "overcast clouds")

- Clouds- Three detail cards (Feels Like, Humidity, Wind Speed)

- Rain- History grid with 7 recent searches

- Drizzle- Timestamp for each search ("Just now", "5m ago")

- Snow- Animated background that changes with weather

- Thunderstorm

- Mist---

- Smoke

- HazeMade with ❤️ using React + TypeScript + OpenWeatherMap API

- Dust
- Fog
- Sand
- Ash
- Squall
- Tornado

## 🔐 Environment Variables

Required environment variables:

```env
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

Vite exposes env variables prefixed with `VITE_`:

```typescript
const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
```

## ⚠️ Error Handling

Comprehensive error handling:

- Invalid city names
- Network errors
- API key issues
- Rate limiting
- Timeout errors

```typescript
try {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("City not found");
  }
} catch (err) {
  setError(err instanceof Error ? err.message : "Something went wrong");
}
```

## 🎪 Animations

Smooth animations throughout:

- Background transitions (0.3s ease)
- Card hover effects
- Button hover states
- Loading spinner rotation
- History item hover

```css
.weather-card {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.weather-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}
```

## ✅ Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

Requires support for:

- CSS backdrop-filter
- Fetch API
- localStorage
- ES6+ JavaScript

## 🔮 Future Enhancements

- [ ] 5-day forecast
- [ ] Hourly forecast
- [ ] Geolocation support
- [ ] Multiple cities dashboard
- [ ] Weather alerts
- [ ] Favorite cities
- [ ] Temperature unit toggle (°C/°F)
- [ ] Wind direction compass
- [ ] UV index
- [ ] Air quality index
- [ ] Sunrise/sunset times
- [ ] Moon phases
- [ ] Weather maps
- [ ] Share weather card

## 📝 Commits

All changes are tracked in git with detailed commit messages following the conventional commits standard:

- `feat:` - new features
- `fix:` - bug fixes
- `docs:` - documentation changes
- `style:` - formatting, missing semicolons, etc
- `refactor:` - code restructuring
- `test:` - adding tests
- `chore:` - maintenance tasks

---

Made with ❤️ using React, TypeScript, Vite, and OpenWeatherMap API
