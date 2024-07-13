export const displayWeather = (weather) => {
    const weatherResult = document.getElementById('weather-result');
    weatherResult.innerHTML = `
        <h2>${weather.name}</h2>
        <p>${weather.weather[0].description}</p>
        <p>${weather.main.temp} °F</p>
    `;
};

export const showError = (message) => {
    const weatherResult = document.getElementById('weather-result');
    weatherResult.innerHTML = `<p>${message}</p>`;
};
