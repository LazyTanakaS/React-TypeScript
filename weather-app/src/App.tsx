import { useEffect, useState } from "react";
import "./App.css";
import { WiThermometer, WiHumidity, WiStrongWind } from "react-icons/wi";

interface WeatherResponse {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  wind: {
    speed: number;
  };
}

interface Weather {
  city: string;
  temperature: number;
  description: string;
  icon: string;
  humidity: number;
  windSpeed: number;
  feelsLike: number;
}

interface WeatherHistory {
  city: string;
  temperature: number;
  icon: string;
  timestamp: number;
}

function App() {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [city, setCity] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [history, setHistory] = useState<WeatherHistory[]>(() => {
    const saved = localStorage.getItem("weatherHistory");
    return saved ? JSON.parse(saved) : [];
  });

  const handleHistoryClick = (cityName: string) => {
    fetchWeather(cityName);
  };

  const formatTime = (timestamp: number) => {
    const now = Date.now();
    const diffInMinutes = Math.floor((now - timestamp) / 60000);

    if (diffInMinutes < 1) return "Just now";
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours}h ago`;

    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}d ago`;
  };

  const getWeatherTheme = (description: string) => {
    const desc = description.toLowerCase();

    if (desc.includes("clear") || desc.includes("sunny")) {
      return "sunny";
    } else if (desc.includes("rain") || desc.includes("drizzle")) {
      return "rainy";
    } else if (desc.includes("snow")) {
      return "snowy";
    } else if (desc.includes("cloud")) {
      return "cloudy";
    } else if (desc.includes("thunder") || desc.includes("storm")) {
      return "stormy";
    }
    return "default";
  };

  useEffect(() => {
    localStorage.setItem("weatherHistory", JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    if (weather) {
      const theme = getWeatherTheme(weather.description);
      document.body.className = `theme-${theme}`;
    } else {
      document.body.className = "theme-default";
    }
  }, [weather]);

  const fetchWeather = async (searchCity?: string) => {
    const cityToSearch = searchCity || city;

    if (!cityToSearch.trim()) {
      setError("Please enter a city name");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityToSearch}&appid=${API_KEY}&units=metric`,
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data: WeatherResponse = await response.json();

      const weatherData: Weather = {
        city: data.name,
        temperature: data.main.temp,
        feelsLike: data.main.feels_like,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
      };

      setWeather(weatherData);

      const historyItem: WeatherHistory = {
        city: data.name,
        temperature: data.main.temp,
        icon: data.weather[0].icon,
        timestamp: Date.now(),
      };

      setHistory((prevHistory) => {
        const filtered = prevHistory.filter(
          (item) =>
            item?.city?.toLowerCase() !== historyItem.city.toLowerCase(),
        );

        return [historyItem, ...filtered].slice(0, 7);
      });

      setCity("");
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "An Error has occurred",
      );
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <h1>Weather App</h1>

        <div className="search-container">
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city..."
            onKeyDown={(e) => e.key === "Enter" && fetchWeather()}
          />
          <button onClick={() => fetchWeather()} disabled={loading}>
            {loading ? "Searching..." : "Search"}
          </button>
        </div>

        {loading && <p className="loading">Loading...</p>}

        {error && <p className="error">{error}</p>}

        {weather && (
          <div className="weather-card">
            <h2>{weather.city}</h2>
            <img
              src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
              alt={weather.description}
            />
            <p className="temperature">{Math.round(weather.temperature)}°C</p>
            <p className="description">{weather.description}</p>

            <div className="weather-details">
              <div className="detail-item">
                <WiThermometer className="detail-icon" />
                <div>
                  <p>Feels Like</p>
                  <p>{Math.round(weather.feelsLike)}°C</p>
                </div>
              </div>
              <div className="detail-item">
                <WiHumidity className="detail-icon" />
                <div>
                  <p>Humidity</p>
                  <p>{weather.humidity}%</p>
                </div>
              </div>
              <div className="detail-item">
                <WiStrongWind className="detail-icon" />
                <div>
                  <p>Wind Speed</p>
                  <p>{weather.windSpeed} m/s</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {history.length > 0 && (
          <div className="history-grid">
            <h3>Recent Searches</h3>
            <div className="history-items">
              {history.map((item, index) => (
                <div
                  className="history-card"
                  key={index}
                  onClick={() => handleHistoryClick(item.city)}
                >
                  <img
                    src={`http://openweathermap.org/img/wn/${item.icon}.png`}
                    alt={weather?.description}
                  />
                  <p className="history-city">{item.city}</p>
                  <p className="history-temp">
                    {Math.round(item.temperature)}°C
                  </p>
                  <p className="history-time">{formatTime(item.timestamp)}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
