const API_KEY = "265bd8bd25cbad0fa267460b686122de";

// function fetchWeatherCallback(city, callback) {
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
//     fetch(url)
//         .then(response => response.json())
//         .then(data => callback(null, data))
//         .catch(err => callback(err, null));
// }

// let city="New York";
// fetchWeatherCallback(city, (err, data) => {
//     if (err) {
//         console.error("Error fetching weather:", err);
//     } else {
//         console.log(`Callback → Weather in ${data.name}: ${data.main.temp}°C`);
//     }
// });

// function fetchWeatherPromises(city){
//     return new Promise((resolve,reject)=>{
//         const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
//         fetch(url).then(response=>response.json()).then(data=>resolve(data)).catch(err=>reject(err));
//     })
// }
// fetchWeatherPromises("New York").then(data => {
//         console.log(`Promise → Weather in ${data.name}: ${data.main.temp}°C`);
//     })
//     .catch(err => {
//         console.error("Error fetching weather:", err);
//     });


//using Async and await
async function fetchWeatherAsync(city){
    try{
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        const response=await fetch(url);
        const data=await response.json();
            console.log(`Async/Await → Weather in ${data.name}: ${data.main.temp}°C`);
    }catch(err){
          console.error("Error fetching weather:", err);
    }
}
fetchWeatherAsync("New York");