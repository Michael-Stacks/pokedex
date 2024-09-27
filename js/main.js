// main.js
    "use strict"
    const pokemonList = document.getElementById('pokemon-list')
    const searchPokemon = document.getElementById('input')

    // Boucle pour générer les cartes des 151 premiers Pokémon
    for (let index = 0; index < 151; index++) {
        const card = createPokemonCard(index)

        // Ajouter un événement au clic sur la carte pour ouvrir la modal
        card.addEventListener('click', () => {
            // Recuperer la source d'image du pokemon
            let imageSrc = card.querySelector('img').src
            // Récupérer le nom du Pokémon à partir du données
            let pokemonName = pokemonDataList[index].nom_francais.toString()

            // Récupérer les informations du Pokémon à partir du données
            let pokemonInformations = card.querySelector('.pokemon-infos')
            openModal(pokemonName, imageSrc, pokemonInformations) // Ouvrir la modal avec les informations du Pokémon
        });

        // Ajout de la carte au DOM
        pokemonList.append(card) // Ajout de la carte au DOM
    }

    // Fonction de filtrage lors de la recherche
    searchPokemon.addEventListener('keyup', () => {
        let searchValue = searchPokemon.value.toLowerCase(); // Valeur de recherche en minuscule
        filterPokemons(searchValue) // Filtrage des Pokémon
    })