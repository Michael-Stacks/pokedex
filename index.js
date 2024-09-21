document.addEventListener('DOMContentLoaded', () => {

  "use strict"

  let path = "assets/pokemon-img/";
  const Dom = document.querySelector('main');
  const searchPokemon = document.getElementById('input');

  for (let i = 1; i <= 151; i++) {

    /* image attribut et contenu */
    const image = document.createElement('img');
    image.loading = 'lazy';

    /* carte attribut et contenu */
    const card = document.createElement('div');
    card.className = "card";

    /* nom pokemon attribut et contenu */
    const pokemonName = document.createElement('h1');
    pokemonName.className = "pokemon-name";
    pokemonName.innerText = `${pokemonsInfosList.pokemons[i].nom_francais}`;

    /* description pokemon attribut et contenu */
    const pokemonDescription = document.createElement('p');
    pokemonDescription.innerText =
      ` Type1: ${pokemonsInfosList.pokemons[i].type_1}
        Type2: ${pokemonsInfosList.pokemons[i].type_2}
        Impact: ${pokemonsInfosList.pokemons[i].impact}
        Attaque: ${pokemonsInfosList.pokemons[i].attaque}
        Defense: ${pokemonsInfosList.pokemons[i].defense}
        Vitesse: ${pokemonsInfosList.pokemons[i].vitesse}
        Special: ${pokemonsInfosList.pokemons[i].special}
        ${pokemonsInfosList.pokemons[i].description}`;

    /* changer le chemin d'acces en fonction du numero du pokemon */
    if (i < 10) {
      // Pour les nombres à un chiffre
      image.src = `${path}pokemon_00${i}.png`;
    } else if (i < 100) {
      // Pour les nombres à deux chiffres
      image.src = `${path}pokemon_0${i}.png`;
    } else {
      // Pour les nombres à trois chiffres
      image.src = `${path}pokemon_${i}.png`;
    }

    /* Ajouter les elements dans le html */
    card.append(image, pokemonName, pokemonDescription);
    Dom.append(card);

    /* cacher les autres card et afficher la card du pokemon trouve*/
    searchPokemon.addEventListener('keyup', () => {
      let value = searchPokemon.value.toLowerCase();
      const cards = document.querySelectorAll('.card');

      cards.forEach((cards, index) => {
        let pokemonName = pokemonsInfosList.pokemons[index + 1].nom_francais.toLowerCase();
        if (pokemonName.includes(value)) {
          cards.style.display = 'block';
        } else {
          cards.style.display = 'none';
        }
      });
    });
  }

});