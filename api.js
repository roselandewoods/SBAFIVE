const APIKEY = 'f11d0387121773ed43b8eb1800b5fa54'; 
const BASEURL = 'https://api.openweathermap.org/data/2.5/weather';

export async function fetchWeather(city) {
    const response = await fetch(`${BASEURL}?q=${city}&appid=${APIKEY}&units=imperial`);
    if (!response.ok) {
        throw new Error('City not found');
    }
    const data = await response.json();
    return data;
}
