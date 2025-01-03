// Sélectionne l'élément modal dans le document
const modal = document.querySelector('.modal');

function openModal(cardToOpen) {
    // Affiche la modal et désactive le défilement de la page
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    // Crée un nouvel élément div pour la carte
    const card = document.createElement('div');
    card.className = 'modal-card';

    // Crée un bouton de fermeture pour la modal
    const closeBtn = document.createElement('button');
    closeBtn.className = 'close-btn';
    closeBtn.textContent = 'X';
    closeBtn.addEventListener('click', () => {
        // Cache la modal, supprime la carte et réactive le défilement de la page
        modal.style.display = 'none';
        card.remove();
        document.body.style.overflow = 'auto';
    });

    // Crée un conteneur pour l'image de la carte
    const cardImgCtn = document.createElement('div');
    cardImgCtn.className = 'card-img-ctn';
    const img = document.createElement('img');
    img.loading = 'lazy';
    img.src = `./assets/${cardToOpen.drawable}.png`;
    img.alt = 'pokemon-image';
    cardImgCtn.appendChild(img);

    // Crée un conteneur pour le titre de la carte
    const cardTitle = document.createElement('div');
    cardTitle.className = 'card-title';
    const nameP = document.createElement('p');
    nameP.className = 'name';
    nameP.textContent = `Nom: ${cardToOpen.nom_francais}`;
    const typeP = document.createElement('p');
    typeP.textContent = `Type: ${cardToOpen.type_1} ${cardToOpen.type_2 ? cardToOpen.type_2 : ''}`;
    cardTitle.appendChild(nameP);
    cardTitle.appendChild(typeP);

    // Crée un conteneur pour le corps de la carte
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    const content = document.createElement('div');
    content.className = 'content';
    const impactP = document.createElement('p');
    impactP.textContent = `Impact: ${cardToOpen.impact}`;
    const attackP = document.createElement('p');
    attackP.textContent = `Attaque: ${cardToOpen.attaque}`;
    const speedP = document.createElement('p');
    speedP.textContent = `Vitesse: ${cardToOpen.vitesse}`;
    const defenseP = document.createElement('p');
    defenseP.textContent = `Défense: ${cardToOpen.defense}`;
    const specialP = document.createElement('p');
    specialP.textContent = `Spéciale: ${cardToOpen.special}`;
    content.appendChild(impactP);
    content.appendChild(attackP);
    content.appendChild(speedP);
    content.appendChild(defenseP);
    content.appendChild(specialP);
    cardBody.appendChild(content);

    // Crée un conteneur pour le pied de la carte
    const cardFooter = document.createElement('div');
    cardFooter.className = 'card-footer';
    const descriptionP = document.createElement('p');
    descriptionP.textContent = `Description: ${cardToOpen.description}`;
    const wikiLink = document.createElement('a');
    wikiLink.textContent = 'Wikipedia';
    wikiLink.href = cardToOpen.wiki_url;
    wikiLink.target = '_blank';
    cardFooter.appendChild(descriptionP);
    cardFooter.appendChild(wikiLink);

    // Ajoute tous les éléments créés à la carte
    card.appendChild(closeBtn);
    card.appendChild(cardImgCtn);
    card.appendChild(cardTitle);
    card.appendChild(cardBody);
    card.appendChild(cardFooter);

    // Ajoute la carte à la modal
    modal.appendChild(card);
}