import { fetchWeather } from './api.js';
import { displayWeather, showError } from './dom.js';

document.getElementById('weather-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const city = document.getElementById('city-input').value.trim();
    if (city) {
        try {
            const weather = await fetchWeather(city);
            displayWeather(weather);
        } catch (error) {
            showError(error.message);
        }
    }
});
