// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=patna&appid=5c9b9846f997ad1450dc1bd13c317050&units=metric"

// const search = document.querySelector(".searchBox input");
const search = document.querySelector("#search");
const searchlogo = document.querySelector(".searchlogo");
const wetherimage = document.querySelector(".wetherimage");
const temp = document.querySelector(".temp");
const cityname = document.querySelector(".cityname");
const humidity = document.querySelector(".humidity");
const Wind = document.querySelector(".Wind");
const feel = document.querySelector(".feel");
const min = document.querySelector(".min");
const max = document.querySelector(".max");
const wetherdetails = document.querySelector(".wetherdetails");
const errorbox = document.querySelector(".errorbox");
const wetherCondation = document.querySelector(".wetherCondation");
const wetherbox = document.querySelector(".wetherbox img");




async function updateWeather(name) {
    const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=5c9b9846f997ad1450dc1bd13c317050&units=metric`)

    const data = await responce.json()


    if (data.cod === "404") {
        wetherdetails.style.display = "none";
        errorbox.style.display = "block";
    } else {
        errorbox.style.display = "none";
        temp.textContent = Math.round(data.main.temp) + " °C";
        cityname.textContent = data.name;
        humidity.textContent = data.main.humidity + " %";
        Wind.textContent = Math.round(data.wind.speed) + " Km/h";
        feel.textContent = Math.round(data.main.feels_like) + " °C";
        min.textContent = Math.round(data.main.temp_min) + " °C";
        max.textContent = Math.round(data.main.temp_max) + " °C";
        wetherCondation.textContent = data.weather[0].main;
        let wether = data.weather[0].main;
        console.log(data)
        console.log(data.clouds)
        if (wether == "Clear") {
            wetherbox.src = "./images/clear.png";
        } else if (wether == "Clouds") {
            wetherbox.src = "./images/clouds.png";
        } else if (wether == "Drizzle") {
            wetherbox.src = "./images/drizzle.png";
        } else if (wether == "Humidity") {
            wetherbox.src = "./images/humidity.png";
        } else if (wether == "Mist") {
            wetherbox.src = "./images/mist.png";
        } else if (wether == "Rain") {
            wetherbox.src = "./images/rain.png";
        } else if (wether == "Snow") {
            wetherbox.src = "./images/snow.png";
        } else {
            wetherbox.src = "./images/clear.png";
        }

        wetherdetails.style.display = "block";
    }





}

searchlogo.addEventListener("click", () => {
    updateWeather(search.value);
})