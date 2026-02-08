# 🌤️ Weather App# Weather App# React + TypeScript + Vite

A modern weather application with beautiful glassmorphism design, dynamic themes, and search history.A modern weather application with beautiful glassmorphism design, dynamic themes, and search history.This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

![React](https://img.shields.io/badge/React-18-blue?logo=react)![React](https://img.shields.io/badge/React-18-blue?logo=react)Currently, two official plugins are available:

![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)

![Vite](https://img.shields.io/badge/Vite-7-purple?logo=vite)![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)

![OpenWeather](https://img.shields.io/badge/OpenWeather-API-orange?logo=weatherapi)

![Vite](https://img.shields.io/badge/Vite-7-purple?logo=vite)- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh

## ✨ Features

![OpenWeather](https://img.shields.io/badge/OpenWeather-API-orange?logo=weatherapi)- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- 🔍 Real-time weather search by city name

- 🌡️ Current temperature, feels like, humidity, and wind speed## Features## React Compiler

- 🎨 **Dynamic theme** based on weather conditions

- 📜 **Search history** (last 7 searches)- Real-time weather search by city nameThe React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

- ⏰ **Timestamp** for each search

- 🌤️ Weather icons from OpenWeatherMap- Current temperature, feels like, humidity, and wind speed

- ✨ Glassmorphism design with blur effects

- 🎭 Smooth animations and transitions- **Dynamic theme** based on weather conditions## Expanding the ESLint configuration

- 💾 Auto-save history to localStorage

- 📱 Responsive interface- **Search history** (last 7 searches)

## 🌈 Weather Themes- **Timestamp** for each searchIf you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

The background dynamically changes based on weather:- Weather icons from OpenWeatherMap

- ☀️ **Sunny** - Yellow-orange gradient- Glassmorphism design with blur effects```js

- 🌧️ **Rainy** - Blue-grey gradient

- ❄️ **Snowy** - White-blue gradient- Smooth animations and transitionsexport default defineConfig([

- ☁️ **Cloudy** - Grey gradient

- 🌫️ **Mist** - Light grey gradient- Auto-save history to localStorage globalIgnores(['dist']),

- ⛈️ **Thunderstorm** - Dark purple gradient

- Responsive interface {

## 🚀 Technologies

files: ['**/*.{ts,tsx}'],

- **React 18** - UI library

- **TypeScript 5** - type safety## Weather Themes extends: [

- **Vite 7** - fast build tool

- **OpenWeatherMap API** - weather data // Other configs...

- **CSS3** - glassmorphism and animations

- **LocalStorage API** - search history persistenceThe background dynamically changes based on weather:

- **Fetch API** - HTTP requests

      // Remove tseslint.configs.recommended and replace with this

## 🔧 Setup

- ☀️ **Sunny** - Yellow-orange gradient tseslint.configs.recommendedTypeChecked,

### 1. Get API Key

- 🌧️ **Rainy** - Blue-grey gradient // Alternatively, use this for stricter rules

1. Register at [OpenWeatherMap](https://openweathermap.org/api)

2. Get your free API key- ❄️ **Snowy** - White-blue gradient tseslint.configs.strictTypeChecked,

3. Create `.env` file in project root:

- ☁️ **Cloudy** - Grey gradient // Optionally, add this for stylistic rules

```env

VITE_OPENWEATHER_API_KEY=your_api_key_here- ⚡ **Stormy** - Dark grey gradient tseslint.configs.stylisticTypeChecked,

```

- 💜 **Default** - Purple gradient

### 2. Installation

      // Other configs...

```bash

# Install dependencies## Technologies ]

npm install

    languageOptions: {

# Run development server

npm run dev- **React 18** - UI library parserOptions: {



# Build for production- **TypeScript 5** - type safety project: ['./tsconfig.node.json', './tsconfig.app.json'],

npm run build

- **Vite 7** - fast build tool tsconfigRootDir: import.meta.dirname,

# Preview production build

npm run preview- **OpenWeatherMap API** - weather data },

```

- **React Icons** - weather icons (wi) // other options...

## 📂 Project Structure

- **CSS3** - glassmorphism and animations },

`````text

weather-app/- **LocalStorage API** - history persistence },

├── src/

│   ├── App.tsx       # Main component])

│   ├── App.css       # Styles with glassmorphism

│   ├── main.tsx      # Entry point## Installation and Running```

│   └── index.css     # Global styles

├── public/           # Static files````bashYou can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

├── .env              # Environment variables (not in git)

├── package.json      # Dependencies# Install dependencies

├── vite.config.ts    # Vite configuration

└── tsconfig.json     # TypeScript configurationnpm install```js

`````

// eslint.config.js

## 📚 What I Learned

# Create .env file with your API keyimport reactX from 'eslint-plugin-react-x'

### TypeScript

echo VITE_WEATHER_API_KEY=your_api_key_here > .envimport reactDom from 'eslint-plugin-react-dom'

- API response typing with interfaces

- Optional properties: `weather?: WeatherData`

- Type guards for null checks

- Async function typing: `Promise<void>`# Run development serverexport default defineConfig([

- Union types: `string | null`

- Array typing: `string[]`npm run dev globalIgnores(['dist']),

### React Hooks {

- `useState` - managing weather, loading, error, history states# Build for production files: ['**/*.{ts,tsx}'],

- `useEffect` - loading history on mount, saving on change

- Async state updatesnpm run build extends: [

- Error handling in React

- Loading states for better UX // Other configs...

### API Integration# Preview production build // Enable lint rules for React

- **OpenWeatherMap API** - fetching weather datanpm run preview reactX.configs['recommended-typescript'],

- Environment variables with Vite: `import.meta.env.VITE_*`

- Async/await for API calls``` // Enable lint rules for React DOM

- Error handling for failed requests

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

  ```

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
