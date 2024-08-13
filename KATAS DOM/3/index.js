// 1.1 Basandote en el array siguiente, crea una lista ul > li
// dinámicamente en el html que imprima cada uno de los paises.
// const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']

// const nuevoUl = document.createElement('ul')

// for (let i = 0; i < countries.length; i++) {
//   const nuevoLi = document.createElement('li')
//   nuevoLi.textContent = countries[i]
//   nuevoUl.appendChild(nuevoLi)
// }
// document.body.appendChild(nuevoUl)

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
// const element = document.querySelector('.fn-remove-me')

// if (element) {
//   element.remove()
// }

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
// en el div de html con el atributo data-function="printHere".
// const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']

// const nuevoUl = document.createElement('ul')

// for (let i = 0; i < cars.length; i++) {
//   const nuevoLi = document.createElement('li')
//   nuevoLi.textContent = cars[i]
//   nuevoUl.appendChild(nuevoLi)
// }

// document.querySelector('div[data-function="printHere"]').appendChild(nuevoUl)

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
// h4 para el titulo y otro elemento img para la imagen.
// const countries = [
//   { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
//   { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
//   { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
//   { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
//   { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
// ]

// const nuevoDiv = document.createElement('div')

// for (let i = 0; i < countries.length; i++) {
//   const nuevoH4 = document.createElement('h4')
//   nuevoH4.textContent = countries[i].title
//   nuevoDiv.appendChild(nuevoH4)

//   const nuevaImg = document.createElement('img')
//   nuevaImg.textContent = countries[i].imgUrl
//   nuevoDiv.appendChild(nuevaImg)
// }

// document.body.appendChild(nuevoDiv)

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
// elemento de la serie de divs.

// const button = document.createElement('button')
// button.textContent = 'Click Me'
// document.body.appendChild(button)

// button.addEventListener('click', () => {
//   const lastDiv = nuevoDiv.lastChild
//   if (lastDiv) {
//     lastDiv.remove()
//   }
// })

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
// divs que elimine ese mismo elemento del html.

const countries = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]

const containerDiv = document.createElement('div')

for (let i = 0; i < countries.length; i++) {
  const nuevoDiv = document.createElement('div')

  const nuevoH4 = document.createElement('h4')
  nuevoH4.textContent = countries[i].title
  nuevoDiv.appendChild(nuevoH4)

  const nuevaImg = document.createElement('img')
  nuevaImg.src = countries[i].imgUrl
  nuevoDiv.appendChild(nuevaImg)

  const button = document.createElement('button')
  button.textContent = 'Click Me'
  nuevoDiv.appendChild(button)

  button.addEventListener('click', () => {
    nuevoDiv.remove()
  })

  containerDiv.appendChild(nuevoDiv)
}

document.body.appendChild(containerDiv)
