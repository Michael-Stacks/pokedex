"use strict"

let path = "assets/pokemon-img/"
const pokemonContainer = document.querySelector("main")

for (let i = 1; i <= 151; i++) {
  const image = document.createElement('img')
  const imageContainer = document.createElement('div')
  const card = document.createElement('div')
  const pokemonInfos = document.createElement('p')

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

  image.loading = 'lazy'
  pokemonInfos.innerText = `Pokémon #${i}`
  imageContainer.append(image)
  imageContainer.className = "image-container"
  card.append(imageContainer, pokemonInfos)
  card.className = "card"
  pokemonContainer.append(card)
}

/*Section click*/



