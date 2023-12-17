// connect API

const fetchData = async (searchTerm) => {
    try {
        const data = await fetch(`http://api.weatherapi.com/v1/current.json?key= 0a337fa6b9e14e5ca66170347231406&q=${searchTerm}&aqi=yes`)
        const obj = await data.json()
        return obj
    } catch (error) {
        console.error("Error fetching data:", error);
    }

}
// funcAPI("http://api.weatherapi.com/v1/current.json?key= 0a337fa6b9e14e5ca66170347231406&q=bongaon&aqi=yes")
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
        document.getElementById("temp").innerHTML = obj.current.temp_c
        weatherImage.src = obj.current.condition.icon
        document.getElementById("location").innerHTML = obj.location.name
        document.getElementById("date-time").innerHTML = obj.location.localtime
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
        console.log(condition)
        switch (condition) {
            case 1000:
                document.body.style.backgroundImage = "url('./weather images/sunny.jpg')";
                break;
            case 1003:
                document.body.style.backgroundImage = "url('./weather images/partly-cloudy.jpg')";
                break;
            case 1006:
                document.body.style.backgroundImage = "url('./weather images/cloudy.jpg')";
                break;
            case 1009:
                document.body.style.backgroundImage = "url('./weather images/overcast.jpg')";
                break;
            case 1030:
                document.body.style.backgroundImage = "url('./weather images/mist.jpg')";
                break;
            case 1063:
                document.body.style.backgroundImage = "url('./weather images/patchy-rain.jpg')";
                break;
            case 1066:
                document.body.style.backgroundImage = "url('./weather images/patchy-snow.jpg')";
                break;
            case 1069:
                document.body.style.backgroundImage = "url('./weather images/patchy-sleet.jpg')";
                break;
            case 1072:
                document.body.style.backgroundImage = "url('./weather images/patchy-snow.jpg')";
                break;
            case 1087:
                document.body.style.backgroundImage = "url('./weather images/thunder.jpg')";
                break;
            case 1114:
                document.body.style.backgroundImage = "url('./weather images/blowing-snow.jpg')";
                break;
            case 1117:
                document.body.style.backgroundImage = "url('./weather images/blizzard.jpg')";
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
                break;
            case 1168:
                document.body.style.backgroundImage = "url('./weather images/patchy-sleet.jpg')";
                break;
            case 1171:
                document.body.style.backgroundImage = "url('./weather images/patchy-sleet.jpg')";
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
                break;
            case 1195:
                document.body.style.backgroundImage = "url('./weather images/heavy-rain.jpg')";
                break;
            case 1198:
                document.body.style.backgroundImage = "url('./weather images/patchy-rain.jpg')";
                break;
            case 1201:
                document.body.style.backgroundImage = "url('./weather images/sunny.jpg-1201.jpg')";
                break;
            case 1204:
                document.body.style.backgroundImage = "url('./weather images/sunny.jpg-1204.jpg')";
                break;
            case 1207:
                document.body.style.backgroundImage = "url('./weather images/sunny.jpg-1207.jpg')";
                break;
            case 1210:
                document.body.style.backgroundImage = "url('./weather images/sunny.jpg-1210.jpg')";
                break;
            case 1213:
                document.body.style.backgroundImage = "url('./weather images/sunny.jpg-1213.jpg')";
                break;
            case 1216:
                document.body.style.backgroundImage = "url('./weather images/sunny.jpg-1216.jpg')";
                break;
            case 1219:
                document.body.style.backgroundImage = "url('./weather images/sunny.jpg-1219.jpg')";
                break;
            case 1222:
                document.body.style.backgroundImage = "url('./weather images/sunny.jpg-1222.jpg')";
                break;
            case 1225:
                document.body.style.backgroundImage = "url('./weather images/sunny.jpg-1225.jpg')";
                break;
            case 1237:
                document.body.style.backgroundImage = "url('./weather images/sunny.jpg-1237.jpg')";
                break;
            case 1240:
                document.body.style.backgroundImage = "url('./weather images/sunny.jpg-1240.jpg')";
                break;
            case 1243:
                document.body.style.backgroundImage = "url('./weather images/sunny.jpg-1243.jpg')";
                break;
            case 1246:
                document.body.style.backgroundImage = "url('./weather images/sunny.jpg-1246.jpg')";
                break;
            case 1249:
                document.body.style.backgroundImage = "url('./weather images/sunny.jpg-1249.jpg')";
                break;
            case 1252:
                document.body.style.backgroundImage = "url('./weather images/sunny.jpg-1252.jpg')";
                break;
            case 1255:
                document.body.style.backgroundImage = "url('./weather images/sunny.jpg-1255.jpg')";
                break;
            case 1258:
                document.body.style.backgroundImage = "url('./weather images/sunny.jpg-1258.jpg')";
                break;
            case 1261:
                document.body.style.backgroundImage = "url('./weather images/sunny.jpg-1261.jpg')";
                break;
            case 1264:
                document.body.style.backgroundImage = "url('./weather images/sunny.jpg-1264.jpg')";
                break;
            case 1273:
                document.body.style.backgroundImage = "url('./weather images/sunny.jpg-1273.jpg')";
                break;
            case 1276:
                document.body.style.backgroundImage = "url('./weather images/sunny.jpg-1276.jpg')";
                break;
            case 1279:
                document.body.style.backgroundImage = "url('./weather images/sunny.jpg-1279.jpg')";
                break;
            case 1282:
                document.body.style.backgroundImage = "url('./weather images/sunny.jpg-1282.jpg')";
                break;
            default:
                document.body.style.backgroundImage = ""; // Default background image
        }

    }
}