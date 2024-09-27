// popup.js
const modal = document.getElementById('pokemon-modal')
const modalContent = document.getElementById('modal-content')
const closeModalButton = document.querySelector('.close')

// Fonction pour ouvrir la modale avec les informations du Pokémon
function openModal(pokemonName, imageSrc, pokemonInformations) {

    let modalImage = document.createElement('img')
    modalImage.src = imageSrc

    let modalName = document.createElement('h1')
    modalName.innerText = pokemonName

    let modalDescription = pokemonInformations

    modalContent.append(modalImage, modalName, modalDescription)

    // Afficher la modale
    modal.style.display = 'flex'
}

// Fonction pour fermer la modale
function closeModal() {
    modalContent.replaceChildren()
    modal.style.display = 'none'
}

// Initialiser la fonctionnalité de fermeture sur clic en dehors du contenu
// Fermer la modale lorsque l'on clique sur la croix
closeModalButton.addEventListener('click', closeModal)

// Fermer la modale lorsqu'on clique en dehors du contenu de la modale
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal()
    }
})

