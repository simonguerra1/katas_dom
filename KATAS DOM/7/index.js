// Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

const places = ['Gondor', 'Mordor', 'Rivendel', 'La Comarca', 'Nümenor']

const newUl = document.createElement('ul')
const div = document.querySelector('[data-function="printHere"]')

for (let i = 0; i < places.length; i++) {
  const newLi = document.createElement('li')
  newLi.textContent = places[i]
  newUl.appendChild(newLi)
}

div.appendChild(newUl)
