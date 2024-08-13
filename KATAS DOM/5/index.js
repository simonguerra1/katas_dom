// Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html
// que imprima cada uno de los albums.

const albums = [
  'De Mysteriis Dom Sathanas',
  'Reign of Blood',
  'Ride the Lightning',
  'Painkiller',
  'Iron Fist'
]

const newUl = document.createElement('Ul')

for (let i = 0; i < albums.length; i++) {
  const newLi = document.createElement('li')
  newLi.textContent = albums[i]
  newUl.appendChild(newLi)
}

document.body.appendChild(newUl)
