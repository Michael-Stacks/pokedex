document.addEventListener('DOMContentLoaded', () => {

  "use strict";

  const imagePath = "assets/pokemon-img/"; // Chemin pour les images des Pokémon
  const mainContainer = document.getElementById('pokemon-list'); // Conteneur principal pour les cartes
  const searchPokemon = document.getElementById('input'); // Input pour la recherche

  // Boucle pour générer les cartes des 151 premiers Pokémon
  for (let i = 1; i <= 151; i++) {

    // Création des éléments pour la carte du Pokémon
    const card = createPokemonCard(i);
    mainContainer.append(card); // Ajout de la carte au DOM
  }

  // Fonction de filtrage lors de la recherche
  searchPokemon.addEventListener('keyup', () => {
    const searchValue = searchPokemon.value.toLowerCase(); // Valeur de recherche en minuscule
    filterPokemons(searchValue); // Filtrage des Pokémon
  });

  /**
   * Fonction pour créer une carte Pokémon
   * @param {number} i - L'index du Pokémon
   * @returns {HTMLElement} - La carte complète avec image, nom et description
   */
  function createPokemonCard(i) {
    const card = document.createElement('div'); // Conteneur de la carte
    card.className = "card";

    // Image du Pokémon
    const image = document.createElement('img');
    image.loading = 'lazy';
    image.src = getImageSource(i); // Chemin de l'image

    // Nom du Pokémon
    const pokemonName = document.createElement('h1');
    pokemonName.className = "pokemon-name";
    pokemonName.innerText = `${pokemonsInfosList.pokemons[i].nom_francais}`;

    // Description du Pokémon
    const pokemonDescription = document.createElement('p');
    pokemonDescription.innerText = generatePokemonDescription(i);

    // Ajout des éléments à la carte
    card.append(image, pokemonName, pokemonDescription);

    return card; // Retourne la carte complète
  }

  /**
   * Génère la description du Pokémon à partir de ses caractéristiques
   * @param {number} i - L'index du Pokémon
   * @returns {string} - La description formatée
   */
  function generatePokemonDescription(i) {
    const pokemon = pokemonsInfosList.pokemons[i];
    return `
      Type1: ${pokemon.type_1}
      Type2: ${pokemon.type_2}
      Impact: ${pokemon.impact}
      Attaque: ${pokemon.attaque}
      Défense: ${pokemon.defense}
      Vitesse: ${pokemon.vitesse}
      Special: ${pokemon.special}
      ${pokemon.description}
    `;
  }

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

});
