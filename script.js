
// connect API
const fetchData = async (searchTerm) => {
    try {
        const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=0a337fa6b9e14e5ca66170347231406&q=${searchTerm}&aqi=yes`)
        const obj = await data.json()
        return obj
    } catch (error) {
        console.error("Error fetching data:", error);
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
    alert(error + "Location not found , enter manually!")
}

navigator.geolocation.getCurrentPosition(successCallback, errorCallback)

const getCity = (lat,long) =>{
    let xhr = new XMLHttpRequest()

    xhr.open('GET', `https://us1.locationiq.com/v1/reverse.php?key=pk.9fecabfbfee1ff5449e7df36ff844226&lat=${lat}&lon=${long}&format=json`, true)
    xhr.send(); 
    xhr.onreadystatechange = processRequest; 
    xhr.addEventListener("readystatechange", processRequest, false); 

    async function processRequest(e) { 
        if (xhr.readyState == 4 && xhr.status == 200) { 
            var response = JSON.parse(xhr.responseText); 
            // console.log(response);
            var city = response.address.county;
            const data = await fetchData(city)
            displayFunc(data)
            return; 
        }
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
//displaying results
function displayFunc(obj) {
    if (obj.error) {
        alert("No results found!!")
    }
    else {
        const weatherImage = document.getElementById("weather-image");
        document.getElementById("temp").innerHTML = Math.ceil(obj.current.temp_c)
        weatherImage.src = obj.current.condition.icon
        document.getElementById("location").innerHTML = obj.location.name
        document.getElementById("date-time").innerHTML = obj.location.localtime
        document.getElementById("weather-name").innerHTML = obj.current.condition.text
        document.getElementById("latitude").innerHTML = obj.location.lat
        document.getElementById("longitude").innerHTML = obj.location.lon
        document.getElementById("wind_mph").innerHTML = obj.current.wind_mph
        document.getElementById("wind_kph").innerHTML = obj.current.wind_kph
        document.getElementById("wind_degree").innerHTML = obj.current.wind_degree
        document.getElementById("wind-dir").innerHTML = obj.current.wind_dir
        document.getElementById("co").innerHTML = obj.current.air_quality.co
        document.getElementById("no2").innerHTML = obj.current.air_quality.no2
        document.getElementById("o3").innerHTML = obj.current.air_quality.o3
        document.getElementById("so2").innerHTML = obj.current.air_quality.so2
        document.getElementById("pm2_5").innerHTML = obj.current.air_quality.pm2_5
        document.getElementById("pm10").innerHTML = obj.current.air_quality.pm10
        // switch case for background image
        const condition = obj.current.condition.code
        let boldTemp = document.querySelector(".bold-temp")
        let wind = document.querySelector(".wind")
        let aqi = document.querySelector(".aqi")
        console.log(condition)


        switch (condition) {
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