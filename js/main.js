// main.js

document.addEventListener('DOMContentLoaded', () => {
    "use strict";

    const pokemonList = document.getElementById('pokemon-list');
    const searchPokemon = document.getElementById('input');

    // Boucle pour générer les cartes des 151 premiers Pokémon
    for (let index = 0; index < 151; index++) {
        const card = createPokemonCard(index);

        // Ajouter un événement au clic sur la carte pour ouvrir la modal
        card.addEventListener('click', () => {
            const pokemon = pokemonDataList.pokemons[index];
            const imageSrc = card.querySelector('img').src;
            const description = generatePokemonDescription(index);

            openModal(pokemon, imageSrc, description); // Ouvrir la modal avec les informations du Pokémon
        });

        pokemonList.append(card); // Ajout de la carte au DOM
    }

    // Fonction de filtrage lors de la recherche
    searchPokemon.addEventListener('keyup', () => {
        const searchValue = searchPokemon.value.toLowerCase(); // Valeur de recherche en minuscule
        filterPokemons(searchValue); // Filtrage des Pokémon
    });
});
