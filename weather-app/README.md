# Weather App# React + TypeScript + Vite

A modern weather application with beautiful glassmorphism design, dynamic themes, and search history.This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

![React](https://img.shields.io/badge/React-18-blue?logo=react)Currently, two official plugins are available:

![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)

![Vite](https://img.shields.io/badge/Vite-7-purple?logo=vite)- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh

![OpenWeather](https://img.shields.io/badge/OpenWeather-API-orange?logo=weatherapi)- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Features## React Compiler

- Real-time weather search by city nameThe React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

- Current temperature, feels like, humidity, and wind speed

- **Dynamic theme** based on weather conditions## Expanding the ESLint configuration

- **Search history** (last 7 searches)

- **Timestamp** for each searchIf you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

- Weather icons from OpenWeatherMap

- Glassmorphism design with blur effects```js

- Smooth animations and transitionsexport default defineConfig([

- Auto-save history to localStorage globalIgnores(['dist']),

- Responsive interface {

  files: ['**/*.{ts,tsx}'],

## Weather Themes extends: [

      // Other configs...

The background dynamically changes based on weather:

      // Remove tseslint.configs.recommended and replace with this

- ☀️ **Sunny** - Yellow-orange gradient tseslint.configs.recommendedTypeChecked,

- 🌧️ **Rainy** - Blue-grey gradient // Alternatively, use this for stricter rules

- ❄️ **Snowy** - White-blue gradient tseslint.configs.strictTypeChecked,

- ☁️ **Cloudy** - Grey gradient // Optionally, add this for stylistic rules

- ⚡ **Stormy** - Dark grey gradient tseslint.configs.stylisticTypeChecked,

- 💜 **Default** - Purple gradient

      // Other configs...

## Technologies ]

    languageOptions: {

- **React 18** - UI library parserOptions: {

- **TypeScript 5** - type safety project: ['./tsconfig.node.json', './tsconfig.app.json'],

- **Vite 7** - fast build tool tsconfigRootDir: import.meta.dirname,

- **OpenWeatherMap API** - weather data },

- **React Icons** - weather icons (wi) // other options...

- **CSS3** - glassmorphism and animations },

- **LocalStorage API** - history persistence },

])

## Installation and Running```

````bashYou can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

# Install dependencies

npm install```js

// eslint.config.js

# Create .env file with your API keyimport reactX from 'eslint-plugin-react-x'

echo VITE_WEATHER_API_KEY=your_api_key_here > .envimport reactDom from 'eslint-plugin-react-dom'



# Run development serverexport default defineConfig([

npm run dev  globalIgnores(['dist']),

  {

# Build for production    files: ['**/*.{ts,tsx}'],

npm run build    extends: [

      // Other configs...

# Preview production build      // Enable lint rules for React

npm run preview      reactX.configs['recommended-typescript'],

```      // Enable lint rules for React DOM

      reactDom.configs.recommended,

## Getting API Key    ],

    languageOptions: {

1. Register at [OpenWeatherMap](https://openweathermap.org/api)      parserOptions: {

2. Get your free API key        project: ['./tsconfig.node.json', './tsconfig.app.json'],

3. Create `.env` file in project root        tsconfigRootDir: import.meta.dirname,

4. Add: `VITE_WEATHER_API_KEY=your_key_here`      },

      // other options...

## Project Structure    },

  },

```text])

weather-app/```

├── src/
│   ├── App.tsx          # Main component
│   ├── App.css          # Application styles
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static files
├── .env                 # Environment variables (API key)
├── .gitignore           # Git ignore rules
├── package.json         # Dependencies
├── vite.config.ts       # Vite configuration
└── tsconfig.json        # TypeScript configuration
````

## What I Learned

### TypeScript

- Complex interfaces: `WeatherResponse`, `Weather`, `WeatherHistory`
- Nested object typing
- Array typing with interfaces
- Optional function parameters: `fetchWeather(searchCity?: string)`
- Type guards for error handling
- Environment variables typing: `import.meta.env.VITE_*`

### React Hooks

- `useState` - managing weather, city, loading, error, history states
- `useEffect` - multiple effects for:
  - localStorage synchronization
  - Dynamic theme changes
  - DOM manipulation (body className)
- Lazy initialization for localStorage data
- Functional state updates with filters

### API Integration

- **Fetch API** - HTTP requests
- Async/await pattern
- Error handling with try-catch
- Query parameters in URL
- Response validation
- JSON parsing

### Data Management

- **localStorage** - persisting search history
- Timestamp tracking with `Date.now()`
- Deduplication logic (remove duplicates)
- Array manipulation (filter, slice)
- Data transformation

### CSS Advanced

- **Glassmorphism** - `backdrop-filter: blur()`
- Dynamic themes with body classes
- CSS variables and transitions
- Keyframe animations:
  - `fadeIn` - card appearance
  - `slideInUp` - history cards
  - `pulse` - weather icon
  - `shake` - error message
  - `gradientShift` - background animation
- Pseudo-elements `::before` for smooth theme transitions
- Hover effects with transform
- Responsive grid layouts

## Main Components

### App.tsx

Main component with:

- Weather state management
- API integration
- Search history logic
- Theme switching
- Time formatting

### Key Functions

```typescript
// Fetch weather data
const fetchWeather = async (searchCity?: string) => { ... }

// Format relative time
const formatTime = (timestamp: number) => { ... }

// Get weather theme
const getWeatherTheme = (description: string) => { ... }
```

## Implementation Features

1. **Dynamic Themes**: Background changes based on weather conditions
2. **Search History**: Last 7 searches with timestamps
3. **Smart Updates**: Clicking history card fetches fresh weather data
4. **Deduplication**: Same city moves to top instead of duplicating
5. **Time Display**: Relative time (e.g., "5m ago", "2h ago")
6. **Smooth Transitions**: 2.5s theme changes via opacity overlay
7. **Weather Icons**: From react-icons/wi library
8. **Error Handling**: User-friendly error messages with shake animation
9. **Loading State**: Animated loading indicator
10. **Auto-clear**: Input clears after successful search

## Weather Details

The app displays:

- 🌡️ **Feels Like** - perceived temperature
- 💧 **Humidity** - air moisture percentage
- 💨 **Wind Speed** - in meters per second

Each detail has an icon from `react-icons/wi`:

- `WiThermometer` - temperature
- `WiHumidity` - humidity
- `WiStrongWind` - wind

## Animations

- **fadeIn** - weather card appearance
- **slideInUp** - sequential history card animation (0.1s delays)
- **pulse** - weather icon breathing effect (3s cycle)
- **shake** - error message shake
- **gradientShift** - background animation (15s cycle)
- **Hover effects** - cards lift up with shadows

## Responsive Design

- Mobile-friendly layout
- Flexible grid for history (7→5→4→3→2 columns)
- Detail cards stack vertically on mobile
- Touch-friendly buttons and cards

## Security

- API key stored in `.env` file
- `.env` added to `.gitignore`
- No API key in source code

## Commits

```bash
git add .
git commit -m "feat: add weather app with dynamic themes and history"
```

## Design

- **Glassmorphism** - frosted glass effect
- **Dynamic gradients** - change with weather
- **Smooth animations** - all transitions are fluid
- **Modern UI** - clean and minimalist
- **Icon integration** - weather icons for visual clarity

## API Response Example

```json
{
  "name": "Warsaw",
  "main": {
    "temp": -7,
    "feels_like": -14,
    "humidity": 87
  },
  "weather": [
    {
      "description": "overcast clouds",
      "icon": "04d"
    }
  ],
  "wind": {
    "speed": 5.14
  }
}
```

## Screenshots Features

The app includes:

- Search bar with glassmorphism effect
- Large weather card with city name and icon
- Temperature display in °C
- Weather description (e.g., "overcast clouds")
- Three detail cards (Feels Like, Humidity, Wind Speed)
- History grid with 7 recent searches
- Timestamp for each search ("Just now", "5m ago")
- Animated background that changes with weather

---

Made with ❤️ using React + TypeScript + OpenWeatherMap API
