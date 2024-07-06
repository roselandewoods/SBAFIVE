const WEATHER_API_KEY = 'f11d0387121773ed43b8eb1800b5fa54'
const WEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const FAVORITES_API_URL = 'https://jsonplaceholder.typicode.com/posts';

export async function fetchWeather(city) {
    const response = await fetch(`${WEATHER_BASE_URL}?q=${city}&appid=${WEATHER_API_KEY}&units=metric`);
    if (!response.data) {
        throw new Error('City not found');
    }
    const data = await response.json();
    return data;
}

console.log()


export async function addFavorite(city) {
    const response = await fetch(FAVORITES_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ city }),
    });
    if (!response.data) {
        throw new Error('Failed to add favorite');
    }
    const data = await response.json();
    return data;
}

export async function updateFavorite(id, city) {
    const response = await fetch(`${FAVORITES_API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ city }),
    });
    if (!response.data) {
        throw new Error('Failed to update favorite');
    }
    const data = await response.json();
    return data;
}

export async function deleteFavorite(id) {
    const response = await fetch(`${FAVORITES_API_URL}/${id}`, {
        method: 'DELETE',
    });
    if (!response.data) {
        throw new Error('Failed to delete favorite');
    }
    return true;
}
