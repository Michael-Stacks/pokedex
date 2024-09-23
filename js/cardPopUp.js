// popup.js

// Fonction pour ouvrir la modale avec les informations du Pokémon
function openModal(pokemon, imageSrc, description) {
    const modal = document.getElementById('pokemon-modal');
    const modalName = document.getElementById('modal-pokemon-name');
    const modalImage = document.getElementById('modal-pokemon-image');
    const modalDescription = document.getElementById('modal-pokemon-description');

    modalName.textContent = pokemon.nom_francais;
    modalImage.src = imageSrc;
    modalDescription.textContent = description;

    // Afficher la modale
    modal.style.display = 'flex';
}

// Fonction pour fermer la modale
function closeModal() {
    const modal = document.getElementById('pokemon-modal');
    modal.style.display = 'none';
}

// Initialiser la fonctionnalité de fermeture sur clic en dehors du contenu
function initModalEventListeners() {
    const modal = document.getElementById('pokemon-modal');
    const closeModalButton = document.querySelector('.close');

    // Fermer la modale lorsque l'on clique sur la croix
    closeModalButton.addEventListener('click', closeModal);

    // Fermer la modale lorsqu'on clique en dehors du contenu de la modale
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
}

// Exécuter l'initialisation des événements sur DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    initModalEventListeners();
});
