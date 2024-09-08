"use strict"

let path = "assets/pokemon-img/"
const pokemonContainer = document.querySelector("main")

for (let i = 1; i <= 151; i++) {
  const image = document.createElement('img')
  const imageContainer = document.createElement('div')
  const card = document.createElement('div')
  const pokemonName = document.createElement('h3')

  if (i < 10) {
    // Pour les nombres à un chiffre
    image.src = `${path}pokemon_00${i}.png`    
  } else if (i < 100) {
    // Pour les nombres à deux chiffres
    image.src = `${path}pokemon_0${i}.png`
  } else {
    // Pour les nombres à trois chiffres
    image.src = `${path}pokemon_${i}.png`
  }

  pokemonName.innerText = `Pokémon #${i}`
  pokemonName.className = "pokemon-name"

  image.loading = 'lazy'
  imageContainer.className = "image-container"
  imageContainer.append(image)

  card.className = "card"
  card.append(imageContainer, pokemonName)
  pokemonContainer.append(card)


}

/*Section click*/



