
/////

function searchCity() {
  var searchValue = document.getElementById("search").value;
  console.log(searchValue);
  var api2 =
    "https://api.opencagedata.com/geocode/v1/json?q=" +
    searchValue +
    "&key=3251ede330af42c29021b1174a6e2a36";
  getCityLatLon(api2);
}

function getCityLatLon(url) {
  fetch(url)
    .then(function(response) {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data.results[0].geometry);
        const { lat, lng } = data.results[0].geometry;
        console.log(lat);
        console.log(lng);
        getWeatherDataWithLatLong(lat, lng);
      });
    })
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });
}

function getWeatherDataWithLatLong(latitude, longitude) {
  //   window.addEventListener("load", () => {
  //     let long = document.querySelector(".lon");
  //     let lat = document.querySelector(".let");
  let temperatureDescription = document.querySelector(
    ".temperature-description"
  );
  let temperatureDegree = document.querySelector(".temperature-degree");
  let locationTimezone = document.querySelector(".location-timezone");
  let temperatureSection = document.querySelector(".temperature");
  const temperatureSpan = document.querySelector(".temperature span");

  //if (navigator.geolocation) {
  //navigator.geolocation.getCurrentPosition(position => {
  // console.log(position);

  //long = position.coords.longitude;
  //lat = position.coords.latitude;
  console.log("Heeeeeeeee");

  const proxy = `https://cors-anywhere.herokuapp.com/`;
  const api = `${proxy}https://api.darksky.net/forecast/acbd414f65ee3fb171b9579adbad6aee/${latitude},${longitude}`;

  fetch(api)
    .then(response => {
      return response.json();
    })
    .then(data => {
        console.log(data);
        const { temperature, summary, icon } = data.currently;
        //SET DOM Elements from the API
        temperatureDegree.textContent = Math.floor(temperature);

        temperatureDescription.textContent = summary;
        locationTimezone.textContent = data.timezone;
        //FORMULA for Celsius
        let celsius = (temperature - 32) * (5 / 9);
        //Set Icon
        setIcons(icon, document.querySelector(".icon"));

        //Change temperature to Celsius/Fahrenheit
        temperatureSection.addEventListener("click", () => {
          if (temperatureSpan.textContent === "°F") {
            temperatureSpan.textContent = "°C";
            temperatureDegree.textContent = Math.floor(celsius);
          } else {
            temperatureSpan.textContent = "°F";
            temperatureDegree.textContent = Math.floor(temperature);
          }
        });
      });
  //});
  function setIcons(icon, iconID) {
    const skycons = new Skycons({ color: "white" });
    const currentIcon = icon.replace(/-/g, "_").toUpperCase();
    skycons.play();
    return skycons.set(iconID, Skycons[currentIcon]);
  }
  // });
}
