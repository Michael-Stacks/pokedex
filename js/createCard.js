// cardCreation.js

/**
 * Fonction pour créer une carte Pokémon
 * @param {number} index - L'index du Pokémon
 * @returns {HTMLElement} - La carte complète avec image, nom et description
 */
function createPokemonCard(index) {
    const card = document.createElement('div');
    card.className = "card";

    // Image du Pokémon
    const image = document.createElement('img');
    image.loading = 'lazy';
    image.src = getImageSource(index); // Chemin de l'image

    // Nom du Pokémon
    const pokemonName = document.createElement('h1');
    pokemonName.className = "pokemon-name";
    if (pokemonDataList && pokemonDataList.pokemons && pokemonDataList.pokemons[index]) {
        pokemonName.innerText = pokemonDataList.pokemons[index].nom_francais || "Nom inconnu"; // Default name if undefined
    } else {
        pokemonName.innerText = "Nom indisponible"; // Fallback text
        console.log(`Pokemon avec index ${index} n'existe pas ou n'est pas defini`);
    }

    // Ajout des éléments à la carte
    card.append(image, pokemonName);

    return card;
}
