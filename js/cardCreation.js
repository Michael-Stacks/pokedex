// cardCreation.js

/**
 * Fonction pour créer une carte Pokémon
 * @param {number} i - L'index du Pokémon
 * @returns {HTMLElement} - La carte complète avec image, nom et description
 */
function createPokemonCard(i) {
    const card = document.createElement('div');
    card.className = "card";

    // Image du Pokémon
    const image = document.createElement('img');
    image.loading = 'lazy';
    image.src = getImageSource(i); // Chemin de l'image

    // Nom du Pokémon
    const pokemonName = document.createElement('h1');
    pokemonName.className = "pokemon-name";
    pokemonName.innerText = pokemonsInfosList.pokemons[i].nom_francais;

    // Description du Pokémon
    const pokemonDescription = document.createElement('p');
    pokemonDescription.innerText = generatePokemonDescription(i);

    // Ajout des éléments à la carte
    card.append(image, pokemonName);

    return card;
}
