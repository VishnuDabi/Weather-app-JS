
async function show() {
    let city = document.getElementById('city').value;
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cad7ec124945dcfff04e457e76760d90`);
    if (city == "") {
        alert("PLEASE ENTER CITY NAME");
    }
    console.log(res);
    if (res.status == 404) {
        alert('not found');
    }
    let data = await res.json();
    console.log(data);
    // console.log((data.main.temp - 273.15));
    // console.log((data.main.feels_like - 273.15));
    // console.log((data.main.humidity - 273.15));
    // console.log((data.main.pressure - 273.15));
    // console.log(data.weather[0]);
    // console.log(data.weather[0].description);
    let con = data.weather[0].description;
    let t = data.main.temp - 273.15;
    let feels_like = data.main.feels_like - 273.15;
    let humidity = data.main.humidity
    let pressure = data.main.pressure
    t = t.toFixed(2);
    feels_like = feels_like.toFixed(2);
    humidity = humidity.toFixed();
    pressure = pressure.toFixed();
    console.log(t);
    console.log(feels_like);
    console.log(humidity);
    console.log(pressure);
    document.getElementById('result').value = t + ' °C';
    document.getElementById('con').innerHTML = con
    document.getElementById('feels').innerHTML = feels_like + ' °C';
    document.getElementById('humidity').innerHTML = humidity + '%';
    document.getElementById('pressure').innerHTML = pressure;
}
