const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city= * city, options'
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '410dc322e7mshb99822eace7d357p1d8791jsnb63a25c905dc',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
   
const getweather = (city)=>{
	cityName.innerHTML = city
	Cloud_pct.innerHTML = response.Cloud_pct
	temp.innerHTML = response.temp
	feels_like.innerHTML = response.feels_like
	humidity.innerHTML = response.humidity
	min_temp.innerHTML = response.min_temp
	max_temp.innerHTML = response.max_temp
	wind_speed.innerHTML = response.wind_speed
	wind_degrees.innerHTML = response.wind_degrees
	sunrise.innerHTML = response.sunrise
	sunset.innerHTML = response.sunset

} 
 
try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);

} catch (error) {
	console.error(error);
}

submit.addEventListener("click", ()=>{
	e.preventDefault()
	getweather(city.value)
})

getweather("Delhi")