
// connect API
const fetchData = async (searchTerm) => {
    try {
        const data = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=0a337fa6b9e14e5ca66170347231406&q=${searchTerm}&days=1&aqi=yes&alerts=no`)
        const obj = await data.json()
        return obj
    } catch (error) {
        alert("Error fetching data:");
    }
}


// navigator and geolocation api

//? success callback
const successCallback = (position) =>{
    const {latitude, longitude} = position.coords
    getCity(latitude,longitude)
    // console.log(latitude,longitude)
}
//! error callback
const errorCallback = (error) =>{

    alert("Location not found , enter manually!")
}

navigator.geolocation.getCurrentPosition(successCallback, errorCallback)

const getCity = async (lat,long) =>{
    try {
        const data = await fetch(`https://us1.locationiq.com/v1/reverse?key=pk.9fecabfbfee1ff5449e7df36ff844226&lat=${lat}&lon=${long}&format=json`)
        const obj = await data.json()
        const fetchedData = await fetchData(obj.address.county)
        displayFunc(fetchedData)
    } catch (error) {
        alert(" Location not found , enter manually!")
    }
}
//Search button
const search = async () => {
    const searchInput = document.getElementById("searchInput")
    const searchTerm = searchInput.value

    if (searchTerm) {
        const data = await fetchData(searchTerm);
        displayFunc(data)
    }
    else {
        alert("Please enter a valid city/village")
    }
}
// const howTheDay = await fetchData().forecast.forecastday[0].hour
//         howTheDay.forEach(data => {
//             const markup = `<li>${Math.ceil(data.temp_c)}℃</li>`
//             console.log(data);
//             document.getElementById('forcasts').querySelector('ul').insertAdjacentHTML('beforeend',markup)
// })
//displaying results
function displayFunc(obj) {
    if (obj.error) {
        alert("No results found!!")
    }
    else {
        const weatherImage = document.getElementById("weather-image");
        document.getElementById("temp").innerHTML = Math.ceil(obj.current.temp_c)
        weatherImage.src = obj.current.condition.icon
        // destructuring the object
        const { name,localtime,lat,lon } = obj.location
        const { wind_mph, wind_kph,wind_degree,wind_dir } = obj.current
        const { text } = obj.current.condition
        const { co,no2,o3,so2,pm2_5,pm10 } = obj.current.air_quality
        //
        //! creating 'how's the day' from api response

        

        //!

        document.getElementById("location").innerHTML = name
        document.getElementById("date-time").innerHTML = localtime
        document.getElementById("weather-name").innerHTML = text
        document.getElementById("latitude").innerHTML = lat
        document.getElementById("longitude").innerHTML = lon
        document.getElementById("wind_mph").innerHTML = wind_mph
        document.getElementById("wind_kph").innerHTML = wind_kph
        document.getElementById("wind_degree").innerHTML = wind_degree
        document.getElementById("wind-dir").innerHTML = wind_dir
        document.getElementById("co").innerHTML = co
        document.getElementById("no2").innerHTML = no2
        document.getElementById("o3").innerHTML = o3
        document.getElementById("so2").innerHTML = so2
        document.getElementById("pm2_5").innerHTML = pm2_5
        document.getElementById("pm10").innerHTML = pm10
        
        // switch case for background image
        const conditionCode = obj.current.condition.code
        let boldTemp = document.querySelector(".bold-temp")
        let wind = document.querySelector(".wind")
        let aqi = document.querySelector(".aqi")


        switch (conditionCode) {
            case 1000:
                document.body.style.backgroundImage = "url('./weather images/sunny.jpg')";
                boldTemp.style.color = "black"
                wind.style.color = "black"
                aqi.style.color = "black"
                break;
            case 1003:
                document.body.style.backgroundImage = "url('./weather images/partly-cloudy.jpg')";
                boldTemp.style.color = "black"
                wind.style.color = "black"
                aqi.style.color = "black"
                break;
            case 1006:
                document.body.style.backgroundImage = "url('./weather images/cloudy.jpg')";
                break;
            case 1009:
                document.body.style.backgroundImage = "url('./weather images/overcast.jpg')";
                boldTemp.style.color = "white"
                wind.style.color = "white"
                aqi.style.color = "white"
                break;
            case 1030:
                document.body.style.backgroundImage = "url('./weather images/mist.jpg')";
                break;
            case 1063:
                document.body.style.backgroundImage = "url('./weather images/patchy-rain.jpg')";
                break;
            case 1066:
                document.body.style.backgroundImage = "url('./weather images/patchy-snow.jpg')";
                boldTemp.style.color = "black"
                wind.style.color = "black"
                aqi.style.color = "black"
                break;
            case 1069:
                document.body.style.backgroundImage = "url('./weather images/patchy-sleet.jpg')";
                boldTemp.style.color = "black"
                wind.style.color = "black"
                aqi.style.color = "black"
                break;
            case 1072:
                document.body.style.backgroundImage = "url('./weather images/patchy-snow.jpg')";
                boldTemp.style.color = "black"
                wind.style.color = "black"
                aqi.style.color = "black"
                break;
            case 1087:
                document.body.style.backgroundImage = "url('./weather images/thunder.jpg')";
                break;
            case 1114:
                document.body.style.backgroundImage = "url('./weather images/blowing-snow.jpg')";
                boldTemp.style.color = "black"
                wind.style.color = "black"
                aqi.style.color = "black"
                break;
            case 1117:
                document.body.style.backgroundImage = "url('./weather images/blizzard.jpg')";
                boldTemp.style.color = "black"
                wind.style.color = "black"
                aqi.style.color = "black"
                break;
            case 1135:
                document.body.style.backgroundImage = "url('./weather images/fog.jpg')";
                break;
            case 1147:
                document.body.style.backgroundImage = "url('./weather images/fog.jpg')";
                break;
            case 1150:
                document.body.style.backgroundImage = "url('./weather images/patchy-rain.jpg')";
                break;
            case 1153:
                document.body.style.backgroundImage = "url('./weather images/patchy-sleet.jpg')";
                boldTemp.style.color = "black"
                wind.style.color = "black"
                aqi.style.color = "black"
                break;
            case 1168:
                document.body.style.backgroundImage = "url('./weather images/patchy-sleet.jpg')";
                boldTemp.style.color = "black"
                wind.style.color = "black"
                aqi.style.color = "black"
                break;
            case 1171:
                document.body.style.backgroundImage = "url('./weather images/patchy-sleet.jpg')";
                boldTemp.style.color = "black"
                wind.style.color = "black"
                aqi.style.color = "black"
                break;
            case 1180:
                document.body.style.backgroundImage = "url('./weather images/patchy-rain.jpg')";
                break;
            case 1183:
                document.body.style.backgroundImage = "url('./weather images/patchy-rain.jpg')";
                break;
            case 1186:
                document.body.style.backgroundImage = "url('./weather images/patchy-rain.jpg')";
                break;
            case 1189:
                document.body.style.backgroundImage = "url('./weather images/patchy-rain.jpg')";
                break;
            case 1192:
                document.body.style.backgroundImage = "url('./weather images/heavy-rain.jpg')";
                boldTemp.style.color = "black"
                wind.style.color = "black"
                aqi.style.color = "black"
                break;
            case 1195:
                document.body.style.backgroundImage = "url('./weather images/heavy-rain.jpg')";
                boldTemp.style.color = "black"
                wind.style.color = "black"
                aqi.style.color = "black"
                break;
            case 1198:
                document.body.style.backgroundImage = "url('./weather images/patchy-rain.jpg')";
                break;
            case 1201:
                document.body.style.backgroundImage = "url('./weather images/heavy-rain.jpg')";
                boldTemp.style.color = "black"
                wind.style.color = "black"
                aqi.style.color = "black"
                break;
            case 1204:
                document.body.style.backgroundImage = "url('./weather images/patchy-sleet.jpg')";
                boldTemp.style.color = "black"
                wind.style.color = "black"
                aqi.style.color = "black"
                break;
            case 1207:
                document.body.style.backgroundImage = "url('./weather images/patchy-sleet.jpg')";
                boldTemp.style.color = "black"
                wind.style.color = "black"
                aqi.style.color = "black"
                break;
            case 1210:
                document.body.style.backgroundImage = "url('./weather images/patchy-snow.jpg')";
                boldTemp.style.color = "black"
                wind.style.color = "black"
                aqi.style.color = "black"
                break;
            case 1213:
                document.body.style.backgroundImage = "url('./weather images/light-snow.jpg')";
                boldTemp.style.color = "black"
                wind.style.color = "black"
                aqi.style.color = "black"
                break;
            case 1216:
                document.body.style.backgroundImage = "url('./weather images/light-snow.jpg')";
                boldTemp.style.color = "black"
                wind.style.color = "black"
                aqi.style.color = "black"
                break;
            case 1219:
                document.body.style.backgroundImage = "url('./weather images/light-snow.jpg')";
                boldTemp.style.color = "black"
                wind.style.color = "black"
                aqi.style.color = "black"
                break;
            case 1222:
                document.body.style.backgroundImage = "url('./weather images/patchy-snow.jpg')";
                boldTemp.style.color = "black"
                wind.style.color = "black"
                aqi.style.color = "black"
                break;
            case 1225:
                document.body.style.backgroundImage = "url('./weather images/heavy-snow.jpg')";
                break;
            case 1237:
                document.body.style.backgroundImage = "url('./weather images/patchy-snow.jpg')";
                boldTemp.style.color = "black"
                wind.style.color = "black"
                aqi.style.color = "black"
                break;
            case 1240:
                document.body.style.backgroundImage = "url('./weather images/patchy-rain.jpg')";
                break;
            case 1243:
                document.body.style.backgroundImage = "url('./weather images/patchy-rain.jpg')";
                break;
            case 1246:
                document.body.style.backgroundImage = "url('./weather images/patchy-rain.jpg')";
                break;
            case 1249:
                document.body.style.backgroundImage = "url('./weather images/patchy-snow.jpg')";
                boldTemp.style.color = "black"
                wind.style.color = "black"
                aqi.style.color = "black"
                break;
            case 1252:
                document.body.style.backgroundImage = "url('./weather images/patchy-snow.jpg')";
                boldTemp.style.color = "black"
                wind.style.color = "black"
                aqi.style.color = "black"
                break;
            case 1255:
                document.body.style.backgroundImage = "url('./weather images/patchy-snow.jpg')";
                boldTemp.style.color = "black"
                wind.style.color = "black"
                aqi.style.color = "black"
                break;
            case 1258:
                document.body.style.backgroundImage = "url('./weather images/patchy-snow.jpg')";
                boldTemp.style.color = "black"
                wind.style.color = "black"
                aqi.style.color = "black"
                break;
            case 1261:
                document.body.style.backgroundImage = "url('./weather images/patchy-snow.jpg')";
                boldTemp.style.color = "black"
                wind.style.color = "black"
                aqi.style.color = "black"
                break;
            case 1264:
                document.body.style.backgroundImage = "url('./weather images/patchy-snow.jpg')";
                boldTemp.style.color = "black"
                wind.style.color = "black"
                aqi.style.color = "black"
                break;
            case 1273:
                document.body.style.backgroundImage = "url('./weather images/thunder.jpg')";
                break;
            case 1276:
                document.body.style.backgroundImage = "url('./weather images/thunder.jpg')";
                break;
            case 1279:
                document.body.style.backgroundImage = "url('./weather images/patchy-snow.jpg')";
                boldTemp.style.color = "black"
                wind.style.color = "black"
                aqi.style.color = "black"
                break;
            case 1282:
                document.body.style.backgroundImage = "url('./weather images/heavy-snow.jpg')";
                break;
            default:
                document.body.style.backgroundImage = "url('./weather images/sunny.jpg')"; // Default background image
                boldTemp.style.color = "black"
                wind.style.color = "black"
                aqi.style.color = "black"
        }
    }
}
