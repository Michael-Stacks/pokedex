// cardCreation.js
/**
 * Fonction pour créer une carte Pokémon
 * @param {number} index - L'index du Pokémon
 * @returns {HTMLElement} - La carte complète avec image, nom et description
 */
function createPokemonCard(index) {

    // Récupération du Pokémon à partir de la liste
    const pokemon = pokemonDataList[index]

    // Création de la carte Pokémon en HTML 5 et ajout des éléments
    const card = document.createElement('div')
    card.className = "card"

    // Image du Pokémon
    const image = document.createElement('img')
    image.loading = 'lazy'
    image.src = getImageSource(index) // Chemin de l'image

    // Nom du Pokémon
    const pokemonName = document.createElement('h1')
    pokemonName.className = "pokemon-name"
    pokemonName.innerText = pokemonDataList[index].nom_francais.toString()

    // Description du Pokémon
    let pokemonType2 = ''
    if(pokemon.type_2 === '' || pokemon.type_2 === undefined || pokemon.type_2 === null){
        pokemonType2 = '___'
    }
    else{
        pokemonType2 = `${pokemon.type_2}`
    }

    // Informations du Pokémon
    let typesPokemon =`${pokemon.type_1} / ${pokemonType2}`
    let description = `${pokemon.description}`

    // Conteneur des informations du Pokémon
    const infomationsContainer = document.createElement('div')
    infomationsContainer.className = "pokemon-infos"

    // Ajout des informations au onteneur des informations
    const typeTag = document.createElement('h3')
    typeTag.className = "pokemon-type"
    const descriptionTag = document.createElement('p')
    descriptionTag.className = "description"

    typeTag.innerText = typesPokemon
    descriptionTag.innerText = description
    infomationsContainer.append(typeTag, descriptionTag)


    // Ajout des éléments à la carte
    card.append(image, pokemonName, infomationsContainer)

    return card
}
