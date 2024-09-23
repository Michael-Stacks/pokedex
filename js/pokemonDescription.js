// pokemonDetails.js

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
