// imageSource.js

const imagePath = "assets/pokemon-img/";

/**
 * Récupère le chemin de l'image du Pokémon selon son index
 * @param {number} i - L'index du Pokémon
 * @returns {string} - Le chemin de l'image
 */
function getImageSource(i) {
    if (i < 10) {
        return `${imagePath}pokemon_00${i}.png`;
    } else if (i < 100) {
        return `${imagePath}pokemon_0${i}.png`;
    } else {
        return `${imagePath}pokemon_${i}.png`;
    }
}