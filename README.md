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
Weather-App/                          # Root directory for the Weather Application project
│
├── index.html                        # Main HTML file - Entry point with weather app UI structure
├── style.css                         # Primary CSS file - Custom styles for weather app layout and animations
├── css.css                           # Alternative CSS file - Additional styling options and responsive design
├── app.js                            # Main JavaScript file - Core weather API logic, DOM manipulation, and event handlers
├── server.js                         # Node.js development server - Express server for local development and API proxy
├── manifest.json                     # PWA manifest - Progressive Web App configuration for installation
├── robots.txt                        # SEO robots file - Search engine crawling instructions
├── sitemap.xml                       # SEO sitemap - XML sitemap for search engine indexing
├── Preview.png                       # Project preview image - Screenshot or demo image of the weather app
├── LICENSE                           # MIT License file - Project licensing and usage terms
├── README.md                         # Project documentation - Complete setup, features, and usage guide
├── .env.example                      # Environment variables template - API key placeholder for OpenWeather API
├── .gitignore                        # Git ignore rules - Files and folders excluded from version control
├── .editorconfig                     # Editor configuration - Consistent coding style across editors
├── .babelrc                          # Babel configuration - JavaScript transpilation settings for browser compatibility
├── .npmrc                            # NPM configuration - Package manager settings and registry preferences
├── .prettierrc                       # Prettier configuration - Code formatting rules and style preferences
├── .prettierignore                   # Prettier ignore rules - Files excluded from automatic formatting
├── .eslintrc.json                    # ESLint configuration - JavaScript linting rules and code quality checks
├── .eslintignore                     # ESLint ignore rules - Files excluded from linting checks
├── .stylelintrc                      # Stylelint configuration - CSS linting rules for code quality
├── jsconfig.json                     # JavaScript project configuration - TypeScript-like settings for JS projects
├── CHANGELOG.md                      # Version history - Project updates, bug fixes, and feature additions
├── CODE_OF_CONDUCT.md                # Community guidelines - Rules for respectful project participation
├── CONTRIBUTING.md                   # Contribution guidelines - Instructions for contributing to the project
├── SECURITY.md                       # Security policy - Vulnerability reporting and security guidelines
│
├── .vscode/                          # VS Code workspace settings - Editor-specific configuration and extensions
├── .git/                             # Git repository data - Version control system files
│
└── images/                           # Weather icons and assets directory
      ├── air-quality-icon.png          # Air quality indicator icon
      ├── clear.png                     # Clear weather static icon
      ├── clearGIF.gif                  # Clear weather animated background
      ├── clouds.png                    # Cloudy weather static icon
      ├── cloudsGIF.gif                 # Cloudy weather animated background
      ├── day-and-night-icon.png        # Day/night cycle indicator icon
      ├── default.png                   # Default/fallback weather icon
      ├── drizzle.png                   # Drizzle weather static icon
      ├── drizzleGIF.gif                # Drizzle weather animated background
      ├── haze.png                      # Haze weather static icon
      ├── hazeGIF.gif                   # Haze weather animated background
      ├── humidity-icon.png             # Humidity indicator icon
      ├── humidity.png                  # Alternative humidity icon
      ├── logo1.png                     # Weather app logo/brand icon
      ├── mist.png                      # Mist weather static icon
      ├── mistGIF.gif                   # Mist weather animated background
      ├── pressure-gauge-icon.png       # Atmospheric pressure indicator icon
      ├── rain.png                      # Rain weather static icon
      ├── rainGIF.gif                   # Rain weather animated background
      ├── search.png                    # Search functionality icon
      ├── smoke.png                     # Smoke weather static icon
      ├── smokeGIF.gif                  # Smoke weather animated background
      ├── snow.png                      # Snow weather static icon
      ├── snowGIF.gif                   # Snow weather animated background
      ├── temperature-icon.png          # Temperature indicator icon
      ├── thunderstorm.png              # Thunderstorm weather static icon
      ├── thunderstormGIF.gif           # Thunderstorm weather animated background
      ├── time-icon.png                 # Time indicator icon
      ├── uv-icon.png                   # UV index indicator icon
      └── wind-icon.png                 # Wind speed indicator icon
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
