\*\*\*\*# 🌦️ Weather App

A sleek and responsive **Weather Web Application** that provides real-time weather updates for any city worldwide using the OpenWeather API. It features a dynamic UI that adapts visually based on current weather conditions.

---

## 🚀 Features

- 🌍 Search weather by city name
- 🌡️ Real-time temperature (Kelvin, Celsius, Fahrenheit)
- 💧 Humidity tracking
- 🌬️ Wind speed with multiple unit conversions
- 🌫️ Atmospheric pressure with unit switching
- 🕒 Local time with 12/24-hour format toggle
- 🌅 Day/Night phase detection (Morning, Evening, Night, etc.)
- 🎨 Dynamic background & weather icons based on conditions
- ⚡ Keyboard shortcuts (Enter to search, Space to focus input)
- 📱 Responsive UI with smooth animations

---

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **API:** OpenWeather API
- **Icons & UI:** Bootstrap Icons, Font Awesome

---

## ⚙️ How It Works

- User enters a city name
- App sends request to OpenWeather API
- Weather data is fetched using `fetch()`
- UI updates dynamically based on response
- Background and icons change based on weather conditions

---

## 📚 Concepts Used

- API Integration (Fetch API)
- DOM Manipulation
- Event Handling
- Async/Await
- Unit Conversion Logic
- Dynamic UI Rendering

---

## ❗ Error Handling

- Shows error UI for invalid city names
- Handles API failures using try-catch
- Prevents empty input search

---

## 📂 Project Structure

```bash

   Weather-App/                                 # Root directory
      │
      ├── index.html                            # Entry point - UI structure
      ├── style.css                             # Styles (layout, animations)
      ├── app.js                                # Core logic (API, DOM, events)
      ├── server.js                             # Express dev server / API proxy (optional)
      │
      ├── manifest.json                         # PWA configuration
      ├── robots.txt                            # SEO crawling rules
      ├── sitemap.xml                           # SEO sitemap
      │
      ├── Preview.png                           # Project preview screenshot
      │
      ├── README.md                             # Documentation (setup, usage, features)
      ├── LICENSE                               # MIT license
      ├── CHANGELOG.md                          # Version history
      ├── CONTRIBUTING.md                       # Contribution guide
      ├── CODE_OF_CONDUCT.md                    # Community guidelines
      ├── SECURITY.md                           # Security policy
      │
      ├── .env.example                          # Env template (API key placeholder)
      ├── .gitignore                            # Git ignored files
      │
      ├── .editorconfig                         # Editor consistency rules
      ├── .prettierrc                           # Code formatting rules
      ├── .prettierignore                       # Ignore formatting
      ├── .eslintrc.json                        # JS linting rules
      ├── .eslintignore                         # Ignore linting
      ├── .stylelintrc                          # CSS linting rules
      │
      ├── .babelrc                              # Babel config (if used)
      ├── .npmrc                                # NPM config
      ├── jsconfig.json                         # JS project config (intellisense)
      │
      ├── .vscode/                              # VS Code settings
      ├── .git/                                 # Git internals (auto-generated)
      │
      └── media/                                # All assets (cleaned structure)
            │
            ├── logo1.png                       # Project Logo
            │
            ├── Icons/                          # UI icons
            │     ├── air-quality-icon.png
            │     ├── day-and-night-icon.png
            │     ├── humidity-icon.png
            │     ├── pressure-gauge-icon.png
            │     ├── search.png
            │     ├── temperature-icon.png
            │     ├── time-icon.png
            │     ├── uv-icon.png
            │     └── wind-icon.png
            │
            ├── GIFs/                   # Animated backgrounds
            │     ├── clear.gif
            │     ├── clouds.gif
            │     ├── drizzle.gif
            │     ├── haze.gif
            │     ├── mist.gif
            │     ├── rain.gif
            │     ├── smoke.gif
            │     ├── snow.gif
            │     └── thunderstorm.gif
            │
            └── images/                  # Static weather icons
                  ├── clear.png
                  ├── clouds.png
                  ├── default.png
                  ├── drizzle.png
                  ├── haze.png
                  ├── mist.png
                  ├── rain.png
                  ├── smoke.png
                  ├── snow.png
                  └── thunderstorm.png

```

---

## ⚙️ Setup & Usage

### Option 1: Direct Browser Opening (Simple)

1. Clone the repository:

```bash
   git clone https://github.com/your-username/Weather-App.git
```

2. Navigate into the project folder:

```bash
   cd Weather-App
```

3. Open index.html in your browser or use a local server

### Option 2: Using Development Server (Recommended)

1. Install Node.js dependencies:

```bash
   npm install express dotenv
```

2. Set up environment variables:

```bash
   cp .env.example .env
   # Edit .env and add your OpenWeather API key
```

3. Start the development server:

```bash
   node server.js
```

4. Open http://localhost:3000 in your browser

### API Key Setup

1. Get a free API key from [OpenWeather API](https://openweathermap.org/api)
2. Replace `YOUR_API_KEY` in `app.js` or set it in your `.env` file
3. The app will work with real weather data once the API key is configured

---

## 🔑 API Configuration

Replace the API key inside app.js:

```bash
   const apiKey = "YOUR_API_KEY";
```

⚠️ Do NOT expose your API key in public repositories.
Important: Use .env in production.

---

## 📸 Preview

Dynamic UI based on weather (rain, clear, snow, etc.)
Smooth transitions and animated backgrounds

## ⚠️ Known Limitations

API key is currently exposed (for demo purposes only)
No backend (pure frontend app)
Error handling can be improved for edge cases

## 🔒 Security Notes

Add .env for API keys in production
Avoid committing sensitive data
Consider rate limiting if scaling

## 🌱 Future Improvements

🌐 Add geolocation support
📊 7-day weather forecast
🌙 Dark/Light theme toggle
📍 Auto-detect user location
⚡ Performance optimization

## 📄 License

This project is open-source and available under the MIT License.

---

## 👨‍💻 Author

Piyush Rana
