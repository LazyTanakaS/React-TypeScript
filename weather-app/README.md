# Weather App — React + TypeScript

![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7-purple?style=flat-square&logo=vite)

## Overview

A beautiful weather application with real-time weather data, dynamic themes, and search history.

**Goal:** Practice API integration, async operations, environment variables, and dynamic theming.

---

## Features

- 🌤️ **Real-time weather data** from OpenWeatherMap API
- 🔍 **City search** with Enter key support
- 🎨 **Dynamic themes** that change based on weather conditions
- 📊 **Detailed weather info** (temperature, feels like, humidity, wind speed)
- 📜 **Search history** (last 7 searches)
- ⏰ **Relative timestamps** (e.g., "5m ago", "2h ago")
- 🖼️ **Weather icons** from OpenWeatherMap
- 💾 **Auto-save history to localStorage**
- ✨ **Smooth animations** and transitions
- 📱 **Responsive design**
- ⚡ **Fast loading states** with user feedback

---

## Technologies

- **React 19** - UI library
- **TypeScript 5** - type safety
- **Vite 7** - fast build tool
- **OpenWeatherMap API** - weather data
- **React Icons** - weather detail icons
- **CSS3** - dynamic themes and animations
- **LocalStorage API** - search history persistence
- **Fetch API** - HTTP requests

---

## Installation and Running

```bash
# Install dependencies
npm install

# Create .env file and add your API key
# VITE_WEATHER_API_KEY=your_api_key_here

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Getting API Key

1. Register at [OpenWeatherMap](https://openweathermap.org/)
2. Get your free API key
3. Create `.env` file in the project root
4. Add: `VITE_WEATHER_API_KEY=your_api_key_here`

---

## Project Structure

```text
weather-app/
├── src/
│   ├── App.tsx          # Main component with logic
│   ├── App.css          # Application styles and themes
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static files
├── .env                 # Environment variables (not committed)
├── package.json         # Dependencies
├── vite.config.ts       # Vite configuration
└── tsconfig.json        # TypeScript configuration
```

---

## What I Learned

### TypeScript

- **Interface definitions** for API responses: `WeatherResponse`
- **Complex nested interfaces** with arrays and objects
- **Type-safe state management** with generics: `useState<Weather | null>`
- **Optional chaining** for safe property access
- **Type guards** with `instanceof Error`
- **Function typing** for async operations
- **Event typing**: `React.KeyboardEvent`, `React.ChangeEvent`

### React Hooks

- `useState` - managing weather data, loading states, errors, history
- `useEffect` - syncing with localStorage and updating themes
- **Lazy initialization** with function in useState
- **Functional state updates** with callbacks
- **Multiple useEffect hooks** for different side effects
- **Dependencies array** management

### API Integration

- **Fetch API** - making HTTP requests
- **Async/await** - handling asynchronous operations
- **Error handling** - try/catch blocks
- **Response validation** - checking response.ok
- **Query parameters** - building API URLs
- **Environment variables** - `import.meta.env.VITE_*`
- **API key security** - using .env files

### Data Management

- **localStorage** - persisting search history
- **JSON serialization/deserialization**
- **Array manipulation** - filtering and slicing
- **Timestamp handling** - Date.now() and calculations
- **Relative time formatting** - converting timestamps to readable format
- **History deduplication** - preventing duplicate cities

### Advanced Features

- **Dynamic theming** - changing styles based on data
- **Conditional class names** - applying themes dynamically
- **Loading states** - showing feedback during async operations
- **Error states** - displaying user-friendly error messages
- **Input validation** - checking for empty inputs
- **Keyboard events** - Enter key to submit

### CSS

- CSS custom properties for themes
- Dynamic class application with JavaScript
- Background gradients for weather themes
- Transition effects for smooth theme changes
- Flexbox and Grid layouts
- Hover effects on history items
- Box-shadow for depth
- Responsive design patterns

---

## Main Components

### App.tsx

Single-component architecture containing:

- **Weather state management**
- **City search functionality**
- **API data fetching**
- **History management**
- **Theme switching logic**
- **Error handling**
- **Loading states**

### Key Functions

**`fetchWeather()`**: Fetches weather data from OpenWeatherMap API

```typescript
- Validates city input
- Makes API request with fetch
- Handles errors and loading states
- Updates weather state
- Adds to search history
```

**`getWeatherTheme()`**: Determines theme based on weather description

```typescript
- Analyzes weather description
- Returns theme name: sunny, rainy, snowy, cloudy, stormy
- Used to apply dynamic background
```

**`formatTime()`**: Converts timestamp to relative time

```typescript
- Calculates time difference
- Returns human-readable format: "Just now", "5m ago", "2h ago", "3d ago"
```

**`handleHistoryClick()`**: Refetches weather for a city from history

---

## Implementation Features

1. **Weather Themes**: 5 dynamic themes (sunny, rainy, snowy, cloudy, stormy, default)
2. **Smart History**: Prevents duplicates and limits to 7 most recent searches
3. **Relative Timestamps**: Shows when each search was performed
4. **Quick Refetch**: Click on history items to refetch weather
5. **Keyboard Support**: Press Enter to search
6. **Loading Feedback**: Disabled button and loading text during fetch
7. **Error Handling**: User-friendly error messages
8. **Auto-save**: History persists across sessions
9. **Input Clear**: Input field clears after successful search
10. **Weather Details**: Shows temperature, feels like, humidity, wind speed

---

## Design

- **Dynamic backgrounds** that change based on weather
- **Gradient themes** for different weather conditions:
  - ☀️ Sunny: warm orange/yellow gradients
  - 🌧️ Rainy: cool blue/gray tones
  - ❄️ Snowy: light blue/white palette
  - ☁️ Cloudy: soft gray gradients
  - ⛈️ Stormy: dark purple/gray atmosphere
- **Card-based layout** with shadows
- **Icon integration** from OpenWeatherMap and React Icons
- **Smooth transitions** between themes
- **Grid layout** for history items
- **Responsive design** for all screen sizes

---

## Weather Themes

The app dynamically changes its appearance based on current weather:

| Condition     | Theme   | Description                  |
| ------------- | ------- | ---------------------------- |
| Clear/Sunny   | Sunny   | Warm orange-yellow gradients |
| Rain/Drizzle  | Rainy   | Cool blue-gray tones         |
| Snow          | Snowy   | Light icy blue palette       |
| Clouds        | Cloudy  | Soft gray gradients          |
| Thunder/Storm | Stormy  | Dark dramatic atmosphere     |
| Other         | Default | Neutral gradient             |

---

## OpenWeatherMap API Details

### Endpoint

`https://api.openweathermap.org/data/2.5/weather`

### Parameters

- `q` - city name
- `appid` - API key
- `units` - metric (Celsius)

### Response includes

- City name
- Temperature (current, feels like, min, max)
- Weather description and icon code
- Humidity percentage
- Wind speed

---

## Screenshots

The app includes:

- **Search Bar**: Input field with search button
- **Weather Card**: Large display with city name, icon, temperature, and description
- **Weather Details**: Three detail cards showing feels like, humidity, and wind speed
- **History Grid**: Compact cards showing recent searches with timestamps
- **Dynamic Background**: Changes color based on weather conditions
- **Loading State**: Visual feedback during API calls

---

## Future Improvements

- [ ] 5-day weather forecast
- [ ] Geolocation support (current location)
- [ ] Temperature unit toggle (Celsius/Fahrenheit)
- [ ] Multiple city comparison
- [ ] Weather alerts and notifications
- [ ] Hourly forecast
- [ ] UV index and air quality
- [ ] Favorite cities
- [ ] Weather map integration
- [ ] Dark/light mode toggle

---

## Lessons & Takeaways

This project taught me how to:

- Work with external APIs and handle responses
- Manage environment variables securely
- Handle asynchronous operations with async/await
- Implement proper error handling
- Create dynamic themes based on data
- Work with timestamps and relative time
- Optimize API calls and prevent duplicates
- Structure TypeScript interfaces for API data
- Handle loading and error states
- Use localStorage for non-sensitive data persistence

---

## Environment Variables

Create a `.env` file:

```env
VITE_WEATHER_API_KEY=your_openweathermap_api_key_here
```

**Important**: Never commit `.env` file to version control. Add it to `.gitignore`.

---

## License

MIT

---

Made with ❤️ using React + TypeScript
