import { fetchWeather } from 'api.js';
import { displayWeather, showError } from 'dom.js';
import { handleAddFavorite, initFavoriteHandlers } from 'favorites.js';

document.getElementById('weather-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const city = document.getElementById('city-input').value.trim();
    if (city) {
        try {
            const weather = await fetchWeather(city);
            displayWeather(weather);
            handleAddFavorite(city);
        } catch (error) {+

             
            showError(error.message);
        }
    }
});

initFavoriteHandlers();

const music = document.getElementById('background-music');
const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
const volumeUpButton = document.getElementById('volume-up-button');
const volumeDownButton = document.getElementById('volume-down-button');

playButton.addEventListener('click', () => {
    music.play();
});

pauseButton.addEventListener('click', () => {
    music.pause();
});

volumeUpButton.addEventListener('click', () => {
    if (music.volume < 1) {
        music.volume += 0.1;
    }
});

volumeDownButton.addEventListener('click', () => {
    if (music.volume > 0) {
        music.volume -= 0.1;
    }
});