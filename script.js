let apiKey = "a57c83e9c4c47e18c50f11af7d6c78fd";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

let searchbox = document.querySelector(".search input")
let searchBtn = document.querySelector(".search button")
let weathericon = document.querySelector(".weather-icon")

async function chechweather(city) {
    let response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    } else {
        var data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " km/h";

        if (data.weather[0].main == "Clouds") {
            weathericon.src = "images/clouds.png"
        }
        else if (data.weather[0].main == "Clear") {
            weathericon.src = "images/clear.png"
        }
        else if (data.weather[0].main == "Rain") {
            weathericon.src = "images/rain.png"
        }
        else if (data.weather[0].main == "Drizzle") {
            weathericon.src = "images/drizzle.png"
        }
        else if (data.weather[0].main == "Mist") {
            weathericon.src = "images/mist.png"
        }
        else if (data.weather[0].main == "Smoke") {
            weathericon.src = "images/smoke.png"
        }
        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none"
    }

}


searchBtn.addEventListener("click", () => {
    chechweather(searchbox.value)
})
