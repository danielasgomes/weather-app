function displayTemperature(response) {
  console.log(response.data.main.temp);
  let temperature = document.querySelector("#current-temperature");
  let city = document.querySelector("#city");
  let description = document.querySelector("#infoData");
  let humidity = document.querySelector("#humidity");
  let wind = document.querySelector("#wind");
  temperature.innerHTML = Math.round(response.data.main.temp);
  city.innerHTML = response.data.name;
  description.innerHTML = response.data.weather[0].description;
  humidity.innerHTML = response.data.main.humidity;
  wind.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "d301f37ab69ea027ae4b1946ff4c3c0b";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
