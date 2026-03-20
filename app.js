const apiKey = 'YOUR_API_KEY';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?`;
// const cityName=document.getElementById("cityName").value;
document.querySelector('.error').style.display = 'none';

// // Temperature unit conversion
const tempUnits = document.querySelector('select[name="°Degree"]');
if (tempUnits) {
  tempUnits.addEventListener('change', () => {
    const val = tempUnits.value;
    checkWeather(val);
    const deg =
      val === 'standard'
        ? 'Kelvin'
        : val === 'metric'
          ? 'Celcius'
          : val === 'imperial'
            ? 'Fahrenheit'
            : () => {
                ((val = 'metric'), (deg = 'Celsius'));
              };
    console.log(`Temperature Unit Selected is: ${deg}`);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const cityInput = document.getElementById('cityName');
  const searchButton = document.querySelector('.search-btn');
  // Trigger search on Enter key
  cityInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      searchButton.click();
    }
  });
  // Focus on input field on Spacebar key
  document.addEventListener('keydown', (event) => {
    if (event.key === ' ' && document.activeElement !== cityInput) {
      event.preventDefault();
      cityInput.focus();
    }
  });
});

async function checkWeather() {
  const cityName = document.getElementById('cityName').value.trim();
  const unit = tempUnits.value;
  if (!cityName) {
    alert('Please enter a city name.');
    return;
  }
  try {
    const response = await fetch(
      apiUrl + `q=${cityName}&appid=${apiKey}&units=${tempUnits.value}`
    );
    var data = await response.json();
    // if(response.status===404){
    //     document.querySelector('.error').style.display="block";
    //     document.querySelector('.weather').style.display="none";
    // }else{
    document.querySelector('.error').style.display = 'none';
    document.querySelector('.weather').style.display = 'block';
    // }catch(error){
    //     document.querySelector('.error').style.display="block";
    //     document.querySelector('.weather').style.display="none";
    // }
    console.log(data);

    // Weather Icon
    const weatherIcon = document.querySelector('.weather-icon');
    switch (data.weather[0].main.toLowerCase()) {
      case 'clouds':
        weatherIcon.src = './media/images/clouds.png';
        document.body.style.backgroundImage =
          "url('./media/GIFs/cloudsGIF.gif')";
        break;
      case 'clear':
        weatherIcon.src = './media/images/clear.png';
        document.body.style.backgroundImage =
          "url('./media/GIFs/clearGIF.gif')";
        break;
      case 'rain':
        weatherIcon.src = './media/images/rain.png';
        document.body.style.backgroundImage = "url('./media/GIFs/rainGIF.gif')";
        break;
      case 'drizzle':
        weatherIcon.src = './media/images/drizzle.png';
        document.body.style.backgroundImage =
          "url('./media/GIFs/drizzleGIF.gif')";
        break;
      case 'mist':
        weatherIcon.src = './media/images/mist.png';
        document.body.style.backgroundImage = "url('./media/GIFs/mistGIF.gif')";
        break;
      case 'haze':
        weatherIcon.src = './media/images/haze.png';
        document.body.style.backgroundImage = "url('./media/GIFs/hazeGIF.gif')";
        break;
      case 'smoke':
        weatherIcon.src = './media/images/smoke.png';
        document.body.style.backgroundImage =
          "url('./media/GIFs/smokeGIF.gif')";
        break;
      case 'snow':
        weatherIcon.src = './media/images/snow.png';
        document.body.style.backgroundImage = "url('./media/GIFs/snowGIF.gif')";
        break;
      case 'thunderstorm':
        weatherIcon.src = './media/images/thunderstorm.png';
        document.body.style.backgroundImage =
          "url('./media/GIFs/thunderstormGIF.gif')";
        break;
      default:
        weatherIcon.src = './media/images/default.png';
        document.body.style.backgroundImage =
          'linear-gradient(135deg, #00feba, #5b548a)';
        break;
    }

    // Weather Details
    document.querySelector('.climate').textContent = data.weather[0].main;
    // City Name
    document.querySelector('.city').innerHTML = data.name;
    // Country Code
    document.querySelector('.country').innerHTML = data.sys.country;
    // countryElement.setAttribute("title", fullCountryName);
    // Humidity
    document.querySelector('.humidity').innerHTML =
      Math.round(data.main.humidity) + ' %';
    //  Temperature
    document.querySelector('.temperature').innerHTML = Math.round(
      data.main.temp
    );
    // // Temperature unit conversion
    // const tempUnits=document.querySelector('select[name="°Degree"]');
    // if(tempUnits){
    //     tempUnits.addEventListerner('change',()=>{
    //         const tempVal=tempUnits.value;
    //         if(tempVal==="standard"){document.querySelector(".temperature").innerHTML=Math.round(data.main.temp);}
    //         else if(tempVal==="metric"){document.querySelector(".temperature").innerHTML=Math.round(data.main.temp-273.15);}
    //         else if(tempVal==="imperial"){document.querySelector(".temperature").innerHTML=Math.round((data.main.temp-273.15)*9/5+32);}
    //     });
    // }

    document.querySelector('.atmp').innerHTML = Math.round(data.main.pressure);
    // Pressure unit conversion
    const pressureUnits = document.querySelector('select[name="pressure"]');
    if (pressureUnits) {
      pressureUnits.addEventListener('change', () => {
        const pressureVal = pressureUnits.value;
        console.log(`Pressure Unit Selected is: ${pressureVal}`);
        let pressure = data.main.pressure;
        if (pressureVal === 'hPa') {
          document.querySelector('.atmp').innerHTML =
            '≈ ' + Math.round(pressure);
        } else if (pressureVal === 'mmHg') {
          document.querySelector('.atmp').innerHTML =
            '≈ ' + Math.round(pressure * 0.750062);
        } else if (pressureVal === 'atm') {
          document.querySelector('.atmp').innerHTML =
            '≈ ' + Math.round(pressure * 0.000987);
        }
      });
    }

    document.querySelector('.wind').innerHTML = Math.round(data.wind.speed);
    // Wind speed unit conversion
    const speedUnits = document.querySelector('select[name="speed"]');
    if (speedUnits) {
      speedUnits.addEventListener('change', () => {
        const windVal = speedUnits.value;
        console.log(`Speed Unit Selected is: ${windVal}`);
        let windSpeed = data.wind.speed;
        if (windVal === 'kmph') {
          document.querySelector('.wind').innerHTML = Math.round(windSpeed);
        } else if (windVal === 'mph') {
          document.querySelector('.wind').innerHTML = Math.round(
            windSpeed * 1000
          );
        } else if (windVal === 'mps') {
          document.querySelector('.wind').innerHTML = Math.round(
            (windSpeed * 1000) / 3600
          );
        } else if (windVal === 'mpm') {
          document.querySelector('.wind').innerHTML = Math.round(
            (windSpeed * 1000) / 60
          );
        }
      });
    }

    // document.querySelector(".UVindex").innerHTML=Math.round(data.main.temp_max);
    // document.querySelector(".airQuality").innerHTML=Math.round(data.main.temp_min);
    // document.querySelector(".day_and_night").innerHTML=data.weather[0].description;

    // Time formatting
    localTime = new Date(
      Date.now() + new Date().getTimezoneOffset() * 60000 + data.timezone * 1000
    );
    const timeFormat = document.querySelector('select[name="timeFormat"]');
    if (timeFormat) {
      timeFormat.addEventListener('change', () => {
        formattedTime = localTime.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: timeFormat.value === '12',
          // timeZone: 'UTC'
        });
        document.querySelector('.time').innerHTML = formattedTime;
      });
      console.log(`Time Format Selected is: ${timeFormat.value}`);
    }
    let formattedTime = localTime.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      // timeZone: 'UTC'
    });
    document.querySelector('.time').innerHTML = formattedTime;

    // Hours Shift
    const hour = localTime.getHours();
    let timeOfDay = 'Day';
    if (hour === 0) {
      timeOfDay = 'Midnight';
    } else if ((hour >= 1 && hour < 5) || (hour >= 20 && hour <= 23)) {
      timeOfDay = 'Night';
    } else if (hour >= 5 && hour < 7) {
      timeOfDay = 'Dawn';
    } else if (hour >= 7 && hour < 12) {
      timeOfDay = 'Morning';
    } else if (hour === 12) {
      timeOfDay = 'Midday';
    } else if (hour >= 13 && hour < 16) {
      timeOfDay = 'Afternoon';
    } else if (hour >= 16 && hour < 18) {
      timeOfDay = 'Evening';
    } else if (hour >= 18 && hour <= 20) {
      timeOfDay = 'Dusk';
    }
    document.querySelector('.day_and_night').innerHTML = timeOfDay;
  } catch (error) {
    document.querySelector('.error').style.display = 'flex';
    document.querySelector('.weather').style.display = 'none';
  }
}

document.querySelector('.search-btn').addEventListener('click', checkWeather);
