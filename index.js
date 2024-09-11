"use strict"

let path = "assets/pokemon-img/"
const pokemonContainer = document.querySelector("main")
const searchPokemon = document.getElementById('input')

for (let i = 1; i <= 151; i++) {
  const image = document.createElement('img')
  const imageContainer = document.createElement('div')
  const card = document.createElement('div')
  const pokemonName = document.createElement('h1')
  const pokemonDescription = document.createElement('p')

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

  pokemonName.innerText = `${pokemonsInfosList.pokemons[i].nom_francais}`
  pokemonName.className = "pokemon-name"

  pokemonDescription.innerText = 
  ` Type1: ${pokemonsInfosList.pokemons[i].type_1}\n
    Type2: ${pokemonsInfosList.pokemons[i].type_2}\n
    Impact: ${pokemonsInfosList.pokemons[i].impact}\n
    Attaque: ${pokemonsInfosList.pokemons[i].attaque}\n
    Defense: ${pokemonsInfosList.pokemons[i].defense}\n
    Vitesse: ${pokemonsInfosList.pokemons[i].vitesse}\n
    Special: ${pokemonsInfosList.pokemons[i].special}\n
    Description: ${pokemonsInfosList.pokemons[i].description}\n`

  image.loading = 'lazy'
  imageContainer.className = "image-container"
  imageContainer.append(image)

  card.className = "card"
  card.append(imageContainer, pokemonName, pokemonDescription)
  pokemonContainer.append(card)

  /* cacher les autres card et afficher la card du pokemon trouve*/
  searchPokemon.addEventListener('keyup', () => {
    let value = searchPokemon.value.toLowerCase()
    const cards = document.querySelectorAll('.card')
  
    cards.forEach((card, index) => {
      let pokemonName = pokemonsInfosList.pokemons[index + 1].nom_francais.toLowerCase()
  
      if (pokemonName.includes(value)) {
        card.style.display = 'block'
      } else {
        card.style.display = 'none'
      }
    })
  })

}



