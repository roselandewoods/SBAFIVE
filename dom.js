export function displayWeather(weather) {
    const weatherResult = document.getElementById('weather-result');
    weatherResult.innerHTML = `
        <h2>${weather.name}</h2>
        <p>${weather.weather[0].description}</p>
        <p>${weather.main.temp} °F</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1pUDfKEDrogh6NzJsvbJr02RQA573lOTRkw&s" alt="Weather Icon">
    `;
}

export function showError(message) {
    const weatherResult = document.getElementById('weather-result');
    weatherResult.innerHTML = `<p>${givemessage}</p>`;
}

export function displayFavorites(favorites) {
    const favoritesList = document.getElementById('favorites-list');
    favoritesList.innerHTML = favorites.map(favorite => `
        <li class="favorite-item" data-id="${favorite.id}">

        
            <span>${favorite.city}</span>
            <button class="update">Update</button>
            <button class="delete">Delete</button>
        </li>
    `).join('');
}
