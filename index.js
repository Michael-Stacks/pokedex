"use strict"

let path = 'assets/pokemon-img/'
const main = document.querySelector('main')

for (let i = 1; i <= 151; i++) {
  const img = document.createElement('img')
  const div = document.createElement('div')
  const section = document.createElement('section')
  const p = document.createElement('p')

  if (i < 10) {
    // Pour les nombres à un chiffre
    img.src = `${path}pokemon_00${i}.png`    
  } else if (i < 100) {
    // Pour les nombres à deux chiffres
    img.src = `${path}pokemon_0${i}.png`
  } else {
    // Pour les nombres à trois chiffres
    img.src = `${path}pokemon_${i}.png`
  }


  img.loading = 'lazy'
  div.appendChild(img)
  section.appendChild(div,p)
  main.appendChild(section)
}
