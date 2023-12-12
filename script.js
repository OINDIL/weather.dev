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
        // const condition = obj.current.condition.code
        const condition = 1000
        switch (condition) {
            case 1000:
                document.body.style.backgroundImage = "url('./weather images/nick-nice-ve-R7PCjJDk-unsplash.jpg')";
                break;
            case 1003:
                document.body.style.backgroundImage = "url('path-to-image-1003.jpg')";
                break;
            case 1006:
                document.body.style.backgroundImage = "url('path-to-image-1006.jpg')";
                break;
            case 1009:
                document.body.style.backgroundImage = "url('path-to-image-1009.jpg')";
                break;
            case 1030:
                document.body.style.backgroundImage = "url('path-to-image-1030.jpg')";
                break;
            case 1063:
                document.body.style.backgroundImage = "url('path-to-image-1063.jpg')";
                break;
            case 1066:
                document.body.style.backgroundImage = "url('path-to-image-1066.jpg')";
                break;
            case 1069:
                document.body.style.backgroundImage = "url('path-to-image-1069.jpg')";
                break;
            case 1072:
                document.body.style.backgroundImage = "url('path-to-image-1072.jpg')";
                break;
            case 1087:
                document.body.style.backgroundImage = "url('path-to-image-1087.jpg')";
                break;
            case 1114:
                document.body.style.backgroundImage = "url('path-to-image-1114.jpg')";
                break;
            case 1117:
                document.body.style.backgroundImage = "url('path-to-image-1117.jpg')";
                break;
            case 1135:
                document.body.style.backgroundImage = "url('path-to-image-1135.jpg')";
                break;
            case 1147:
                document.body.style.backgroundImage = "url('path-to-image-1147.jpg')";
                break;
            case 1150:
                document.body.style.backgroundImage = "url('path-to-image-1150.jpg')";
                break;
            case 1153:
                document.body.style.backgroundImage = "url('path-to-image-1153.jpg')";
                break;
            case 1168:
                document.body.style.backgroundImage = "url('path-to-image-1168.jpg')";
                break;
            case 1171:
                document.body.style.backgroundImage = "url('path-to-image-1171.jpg')";
                break;
            case 1180:
                document.body.style.backgroundImage = "url('path-to-image-1180.jpg')";
                break;
            case 1183:
                document.body.style.backgroundImage = "url('path-to-image-1183.jpg')";
                break;
            case 1186:
                document.body.style.backgroundImage = "url('path-to-image-1186.jpg')";
                break;
            case 1189:
                document.body.style.backgroundImage = "url('path-to-image-1189.jpg')";
                break;
            case 1192:
                document.body.style.backgroundImage = "url('path-to-image-1192.jpg')";
                break;
            case 1195:
                document.body.style.backgroundImage = "url('path-to-image-1195.jpg')";
                break;
            case 1198:
                document.body.style.backgroundImage = "url('path-to-image-1198.jpg')";
                break;
            case 1201:
                document.body.style.backgroundImage = "url('path-to-image-1201.jpg')";
                break;
            case 1204:
                document.body.style.backgroundImage = "url('path-to-image-1204.jpg')";
                break;
            case 1207:
                document.body.style.backgroundImage = "url('path-to-image-1207.jpg')";
                break;
            case 1210:
                document.body.style.backgroundImage = "url('path-to-image-1210.jpg')";
                break;
            case 1213:
                document.body.style.backgroundImage = "url('path-to-image-1213.jpg')";
                break;
            case 1216:
                document.body.style.backgroundImage = "url('path-to-image-1216.jpg')";
                break;
            case 1219:
                document.body.style.backgroundImage = "url('path-to-image-1219.jpg')";
                break;
            case 1222:
                document.body.style.backgroundImage = "url('path-to-image-1222.jpg')";
                break;
            case 1225:
                document.body.style.backgroundImage = "url('path-to-image-1225.jpg')";
                break;
            case 1237:
                document.body.style.backgroundImage = "url('path-to-image-1237.jpg')";
                break;
            case 1240:
                document.body.style.backgroundImage = "url('path-to-image-1240.jpg')";
                break;
            case 1243:
                document.body.style.backgroundImage = "url('path-to-image-1243.jpg')";
                break;
            case 1246:
                document.body.style.backgroundImage = "url('path-to-image-1246.jpg')";
                break;
            case 1249:
                document.body.style.backgroundImage = "url('path-to-image-1249.jpg')";
                break;
            case 1252:
                document.body.style.backgroundImage = "url('path-to-image-1252.jpg')";
                break;
            case 1255:
                document.body.style.backgroundImage = "url('path-to-image-1255.jpg')";
                break;
            case 1258:
                document.body.style.backgroundImage = "url('path-to-image-1258.jpg')";
                break;
            case 1261:
                document.body.style.backgroundImage = "url('path-to-image-1261.jpg')";
                break;
            case 1264:
                document.body.style.backgroundImage = "url('path-to-image-1264.jpg')";
                break;
            case 1273:
                document.body.style.backgroundImage = "url('path-to-image-1273.jpg')";
                break;
            case 1276:
                document.body.style.backgroundImage = "url('path-to-image-1276.jpg')";
                break;
            case 1279:
                document.body.style.backgroundImage = "url('path-to-image-1279.jpg')";
                break;
            case 1282:
                document.body.style.backgroundImage = "url('path-to-image-1282.jpg')";
                break;
            default:
                document.body.style.backgroundImage = ""; // Default background image
        }

    }
}