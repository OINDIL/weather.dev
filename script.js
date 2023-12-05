// connect API

const fetchData = async (searchTerm) =>{
    try {
        const data = await fetch(`http://api.weatherapi.com/v1/current.json?key= 0a337fa6b9e14e5ca66170347231406&q=${searchTerm}&aqi=yes`)
        const obj = await data.json()
        return obj
    } catch (error) {
        console.error("Error fetching data:",error);
    }
    
}
// funcAPI("http://api.weatherapi.com/v1/current.json?key= 0a337fa6b9e14e5ca66170347231406&q=bongaon&aqi=yes")
//Search button
const search = async () => {
    const searchInput = document.getElementById("searchInput")
    const searchTerm = searchInput.value

    if(searchTerm){
        const data = await fetchData(searchTerm);
        displayFunc(data)
    }
    else{
        alert("Please enter a valid city/village")
    }
}
//displaying results
function displayFunc(obj){
    if(obj.error){
        alert("No results found!!")
    }
    else{
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
        
        const condition = obj.current.condition.code
    }
}