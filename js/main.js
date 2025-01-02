'use strict';

const dataLength = pokemonData.length;
const pokemonList = document.querySelector('#pokemons');

for (let i = 0; i < dataLength; i++) {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.id = i;

    const cardImgCtn = document.createElement('div');
    cardImgCtn.className = 'card-img-ctn';
    const img = document.createElement('img');
    img.loading = 'lazy';
    img.src = `./assets/${pokemonData[i].drawable}.png`;
    img.alt = 'pokemon-image';
    cardImgCtn.appendChild(img);

    const cardTitle = document.createElement('div');
    cardTitle.className = 'card-title';
    const nameP = document.createElement('p');
    nameP.textContent = `Nom: ${pokemonData[i].nom_francais}`;
    const typeP = document.createElement('p');
    typeP.textContent = `Type: ${pokemonData[i].type_1} ${pokemonData[i].type_2? pokemonData[i].type_2 : ''}`;
    cardTitle.appendChild(nameP);
    cardTitle.appendChild(typeP);

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    const content = document.createElement('div');
    content.className = 'content';
    const impactP = document.createElement('p');
    impactP.textContent = `Impact: ${pokemonData[i].impact}`;
    const attackP = document.createElement('p');
    attackP.textContent = `Attaque: ${pokemonData[i].attaque}`;
    const speedP = document.createElement('p');
    speedP.textContent = `Vitesse: ${pokemonData[i].vitesse}`;
    const defenseP = document.createElement('p');
    defenseP.textContent = `Défense: ${pokemonData[i].defense}`;
    const specialP = document.createElement('p');
    specialP.textContent = `Spéciale: ${pokemonData[i].special}`;
    content.appendChild(impactP);
    content.appendChild(attackP);
    content.appendChild(speedP);
    content.appendChild(defenseP);
    content.appendChild(specialP);
    cardBody.appendChild(content);

    const cardFooter = document.createElement('div');
    cardFooter.className = 'card-footer';
    const descriptionP = document.createElement('p');
    descriptionP.textContent = `Description: ${pokemonData[i].description}`;
    const wikiLink = document.createElement('a');
    wikiLink.textContent = 'Wikipedia';
    wikiLink.href = pokemonData[i].wiki_url;
    wikiLink.target = '_blank';
    cardFooter.appendChild(descriptionP);
    cardFooter.appendChild(wikiLink);

    card.appendChild(cardImgCtn);
    card.appendChild(cardTitle);
    card.appendChild(cardBody);
    card.appendChild(cardFooter);

    pokemonList.appendChild(card);
}

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', (event) => {
        let idOfCardToOpen = event.currentTarget.dataset.id;
        let cardToOpen = pokemonData[idOfCardToOpen];
        openModal(cardToOpen);
    });
});