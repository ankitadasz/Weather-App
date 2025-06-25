const button = document.getElementById("Search-Button");
const input = document.getElementById("city");
const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");
const cityHumi = document.getElementById("city-humi");

async function getData(cityName) {
  const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=24556431ad994a6380585907252406&q=${cityName}&aqi=yes`);
  return await promise.json();
}

button.addEventListener("click", async () => {
  const value = input.value;
  
  try {
    const result = await getData(value);
    cityName.innerHTML = `<i class="fa-solid fa-cloud"></i>Weather in:${result.location.name},${result.location.region}-${result.location.country}`;
    cityTime.innerHTML = `<i class="fa-solid fa-earth-americas"></i>LocalTime:${result.location.localtime}`;
    cityTemp.innerHTML = `<i class="fa-solid fa-temperature-three-quarters"></i>Temprature:${result.current.temp_c}°C`;
    cityHumi.innerHTML = `<i class="fa-solid fa-tint"></i>Humidity:${result.current.humidity}%`;
  } catch (error) {
    alert("Could not fetch data. Please check city name or try again later.");
  }
});
