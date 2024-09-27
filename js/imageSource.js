// imageSource.js

const imagePath = "assets/pokemon-img/"

/**
 * Récupère le chemin de l'image du Pokémon selon son index
 * @param {number} i - L'index du Pokémon
 * @returns {string} - Le chemin de l'image
 */
function getImageSource(index) {
    let number = index + 1; //les images commencent a partir du numero 1
    
    if (number < 10) {
        return `${imagePath}pokemon_00${number}.png`
    } else if (number < 100) {
        return `${imagePath}pokemon_0${number}.png`
    } else {
        return `${imagePath}pokemon_${number}.png`
    }
}