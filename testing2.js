const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': "c3b125402cmsh6bcd0ad8f26e84ap1c5751jsn2ff9bfe15514",
        'X-RapidAPI-Host': "weather-by-api-ninjas.p.rapidapi.com"
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            temp.innerHTML = response.temp
            cloud_pct.innerHTML = response.cloud_pct
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset

        })
        .catch(err => console.error(err));
}
submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Hyderabad")

const getWeather1 = ("Ahmedabad") ; {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Ahmedabad' , options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            tempA.innerHTML = response.temp
            cloud_pctA.innerHTML = response.cloud_pct
            feels_likeA.innerHTML = response.feels_like
            humidityA.innerHTML = response.humidity
            min_tempA.innerHTML = response.min_temp
            max_tempA.innerHTML = response.max_temp
            wind_speedA.innerHTML = response.wind_speed
            wind_degreesA.innerHTML = response.wind_degrees

        })
        .catch(err => console.error(err));
}

const getWeather2 = ("Lucknow") ; {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow' , options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            tempL.innerHTML = response.temp
            cloud_pctL.innerHTML = response.cloud_pct
            feels_likeL.innerHTML = response.feels_like
            humidityL.innerHTML = response.humidity
            min_tempL.innerHTML = response.min_temp
            max_tempL.innerHTML = response.max_temp
            wind_speedL.innerHTML = response.wind_speed
            wind_degreesL.innerHTML = response.wind_degrees

        })
        .catch(err => console.error(err));
}

const getWeather3 = ("Kochi") ; {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kochi' , options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            tempK.innerHTML = response.temp
            cloud_pctK.innerHTML = response.cloud_pct
            feels_likeK.innerHTML = response.feels_like
            humidityK.innerHTML = response.humidity
            min_tempK.innerHTML = response.min_temp
            max_tempK.innerHTML = response.max_temp
            wind_speedK.innerHTML = response.wind_speed
            wind_degreesK.innerHTML = response.wind_degrees

        })
        .catch(err => console.error(err));
}
  

// const displayTime = document.querySelector(".display-time");
// // Time
// function showTime() {
//   let time = new Date();
//   displayTime.innerText = time.toLocaleTimeString("en-US", { hour12: true });
//   setTimeout(showTime, 1000);
// }
// showTime();
// // Date
// function updateDate() {
//   let today = new Date();
//   // return number
//   let dayName = today.getDay(),
//     dayNum = today.getDate(),
//     month = today.getMonth(),
//     year = today.getFullYear();
//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];
//   const dayWeek = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];
//   // value -> ID of the html element
//   const IDCollection = ["day", "daynum", "month", "year"];
//   // return value array with number as a index
//   const val = [dayWeek[dayName], dayNum, months[month], year];
//   for (let i = 0; i < IDCollection.length; i++) {
//     document.getElementById(IDCollection[i]).firstChild.nodeValue = val[i];
//   }
// }
// updateDate();