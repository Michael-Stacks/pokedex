'use strict';
const pokemonList = document.querySelector('#pokemons');

/**
 * Charge les informations des Pokémon et crée une carte pour chaque Pokémon.
 *
 * @param {Object} pokemonData - Les données du Pokémon.
 * @param {number} pokemonData.numero - Le numéro du Pokémon.
 * @param {string} pokemonData.drawable - Le nom de l'image du Pokémon.
 * @param {string} pokemonData.nom_francais - Le nom français du Pokémon.
 * @param {string} pokemonData.type_1 - Le premier type du Pokémon.
 * @param {string} [pokemonData.type_2] - Le deuxième type du Pokémon (optionnel).
 * @param {number} pokemonData.impact - L'impact du Pokémon.
 * @param {number} pokemonData.attaque - L'attaque du Pokémon.
 * @param {number} pokemonData.vitesse - La vitesse du Pokémon.
 * @param {number} pokemonData.defense - La défense du Pokémon.
 * @param {number} pokemonData.special - La statistique spéciale du Pokémon.
 * @param {string} pokemonData.description - La description du Pokémon.
 * @param {string} pokemonData.wiki_url - L'URL de la page Wikipedia du Pokémon.
 */
function loadPokemons(pokemonData) {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.id = pokemonData.numero;

    const cardImgCtn = document.createElement('div');
    cardImgCtn.className = 'card-img-ctn';
    const img = document.createElement('img');
    img.loading = 'lazy';
    img.src = `./assets/${pokemonData.drawable}.png`;
    img.alt = 'pokemon-image';
    cardImgCtn.appendChild(img);

    const cardTitle = document.createElement('div');
    cardTitle.className = 'card-title';
    const nameP = document.createElement('p');
    nameP.className = 'name';
    nameP.textContent = `Nom: ${pokemonData.nom_francais}`;
    const typeP = document.createElement('p');
    typeP.textContent = `Type: ${pokemonData.type_1} ${pokemonData.type_2? pokemonData.type_2 : ''}`;
    cardTitle.appendChild(nameP);
    cardTitle.appendChild(typeP);

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    const content = document.createElement('div');
    content.className = 'content';
    const impactP = document.createElement('p');
    impactP.textContent = `Impact: ${pokemonData.impact}`;
    const attackP = document.createElement('p');
    attackP.textContent = `Attaque: ${pokemonData.attaque}`;
    const speedP = document.createElement('p');
    speedP.textContent = `Vitesse: ${pokemonData.vitesse}`;
    const defenseP = document.createElement('p');
    defenseP.textContent = `Défense: ${pokemonData.defense}`;
    const specialP = document.createElement('p');
    specialP.textContent = `Spéciale: ${pokemonData.special}`;
    content.appendChild(impactP);
    content.appendChild(attackP);
    content.appendChild(speedP);
    content.appendChild(defenseP);
    content.appendChild(specialP);
    cardBody.appendChild(content);

    const cardFooter = document.createElement('div');
    cardFooter.className = 'card-footer';
    const descriptionP = document.createElement('p');
    descriptionP.textContent = `Description: ${pokemonData.description}`;
    const wikiLink = document.createElement('a');
    wikiLink.textContent = 'Wikipedia';
    wikiLink.href = pokemonData.wiki_url;
    wikiLink.target = '_blank';
    cardFooter.appendChild(descriptionP);
    cardFooter.appendChild(wikiLink);

    card.appendChild(cardImgCtn);
    card.appendChild(cardTitle);
    card.appendChild(cardBody);
    card.appendChild(cardFooter);

    pokemonList.appendChild(card);
}