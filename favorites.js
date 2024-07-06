import { addFavorite, updateFavorite, deleteFavorite } from 'api.js';
import { displayFavorites } from 'dom.js';

let favorites = [];

export async function handleAddFavorite(city)


{
    try {
        const newFavorite = await addFavorite(city);
        favorites.push(newFavorite);
        displayFavorites(favorites);
    } catch (error) {
        console.error('Failed to add favorite:', error);
    }
}

export async function handleUpdateFavorite(id, city) {
    try {
        const updatedFavorite = await updateFavorite(id, city);
        favorites = favorites.map(fav => fav.id === id ? updatedFavorite : fav);
        displayFavorites(favorites);
    } catch (error) {
        console.error('Failed to update favorite:', error);
    }
}

export async function handleDeleteFavorite(id) {
    try {
        await deleteFavorite(id);
        favorites = favorites.filter(fav => fav.id !== id);
        displayFavorites(favorites);
    } catch (error) {
        console.error('Failed to delete favorite:', error);
    }
}

export function initFavoriteHandlers() {
    document.getElementById('favorites-list').addEventListener('click', event => {
        const target = event.target;
        const favoriteItem = target.closest('.favorite-item');
        if (favoriteItem) 
            
            
            {
            const id = parseInt(favoriteItem.dataset.id, 10);
            if (target.classList.contains('update-button')) {
                const newCity = prompt('Enter new city name:', favoriteItem.querySelector('span').textContent);
                if (newCity) {
                    handleUpdateFavorite(id, newCity);
                }



            } else if (target.classList.contains('delete-button')) {
                handleDeleteFavorite(id);
            }
        }
    });
}
