// main.js

document.addEventListener('DOMContentLoaded', () => {
    "use strict";

    const mainContainer = document.getElementById('pokemon-list');
    const searchPokemon = document.getElementById('input');

    // Boucle pour générer les cartes des 151 premiers Pokémon
    for (let i = 1; i <= 151; i++) {
        const card = createPokemonCard(i);

        // Ajouter un événement au clic sur la carte pour ouvrir la modal
        card.addEventListener('click', () => {
            const pokemon = pokemonsInfosList.pokemons[i];
            const imageSrc = card.querySelector('img').src;
            const description = generatePokemonDescription(i);

            openModal(pokemon, imageSrc, description); // Ouvrir la modal avec les informations du Pokémon
        });

        mainContainer.append(card); // Ajout de la carte au DOM
    }

    // Fonction de filtrage lors de la recherche
    searchPokemon.addEventListener('keyup', () => {
        const searchValue = searchPokemon.value.toLowerCase(); // Valeur de recherche en minuscule
        filterPokemons(searchValue); // Filtrage des Pokémon
    });
});
