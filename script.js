let weather = {
    apiKey :  "9b55d4af647732f3bd6ef206211780bf",
    fetchWeather: function () {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=London&appid=9b55d4af647732f3bd6ef206211780bf&units=imperial"
        ).then((response) => response.json())
        .then((data) => console.log(data));
    }
}