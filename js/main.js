'use strict';

const dataLength = pokemonData.length;
const search = document.getElementById('search');

for (let i = 0; i < dataLength; i++) {
    loadPokemons(pokemonData[i]);
}

const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('click', (event) => {
        let idOfCardToOpen = 
        event.currentTarget.dataset.id  - 1;//dataset.id start with 0 and pokemon start with 1
        let cardToOpen = pokemonData[idOfCardToOpen];
        openModal(cardToOpen);
    });
});

search.addEventListener('input', () => {
    let searchValue = search.value.toLowerCase();

    cards.forEach(card => {
        let pokemonName = card.querySelector('.name').textContent.toLowerCase();
        if (pokemonName.includes(searchValue)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });

    
});
