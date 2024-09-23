// searchFilter.js

/**
 * Filtre les cartes Pokémon en fonction de la valeur de recherche
 * @param {string} searchValue - La valeur de la recherche
 */
function filterPokemons(searchValue) {
    const cards = document.querySelectorAll('.card');

    cards.forEach((card, index) => {
        const pokemonName = pokemonsInfosList.pokemons[index + 1].nom_francais.toLowerCase();
        if (pokemonName.includes(searchValue)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
