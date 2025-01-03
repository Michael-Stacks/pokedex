'use strict';

const dataLength = pokemonData.length;
const cards = document.querySelectorAll('.card');
const search = document.getElementById('search');

for (let i = 0; i < dataLength; i++) {
    loadPokemons(pokemonData[i]);
}

cards.forEach(card => {
    card.addEventListener('click', (event) => {
        let idOfCardToOpen = event.currentTarget.dataset.id;
        let cardToOpen = pokemonData[idOfCardToOpen];
        openModal(cardToOpen);
    });
});

search.addEventListener('input', () => {
    let searchValue = search.value.toLowerCase();
    /**
     * Filtre les Pokémon en fonction de la valeur de recherche.
     *
     * @constant {Array<Object>} filteredPokemons - Tableau des Pokémon filtrés.
     * @param {Array<Object>} pokemonData - Tableau contenant les données de tous les Pokémon.
     * @param {Object} pokemon - Un objet représentant un Pokémon.
     * @param {string} pokemon.nom_francais - Le nom français du Pokémon.
     * @param {string} searchValue - La valeur de recherche saisie par l'utilisateur.
     * @returns {boolean} - Retourne vrai si le nom français du Pokémon contient la valeur de recherche, faux sinon.
     */
    const filteredPokemons = pokemonData.filter(pokemon => 
        pokemon.nom_francais.toLowerCase().includes(searchValue)
    );

    document.getElementById('pokemons').innerHTML = '';
    filteredPokemons.forEach(pokemon => {
        loadPokemons(pokemon);
    });
});
