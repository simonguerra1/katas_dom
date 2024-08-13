// 1.1 Inserta dinamicamente en un html un div vacio con javascript.
// const nuevoDiv = document.createElement('div')
// document.body.appendChild(nuevoDiv)

// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
// const nuevoDiv = document.createElement('div')
// document.body.appendChild(nuevoDiv)

// const nuevoP = document.createElement('p')
// nuevoP.textContent = 'Este es mi nuevo texto'
// nuevoDiv.appendChild(nuevoP)

// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
// 	loop con javascript.
// const nuevoDiv = document.createElement('div')

// for (let i = 0; i < 6; i++) {
//   const nuevoP = document.createElement('p')
//   nuevoP.textContent = `Parrafo ${i}`
//   nuevoDiv.appendChild(nuevoP)
// }

// document.body.appendChild(nuevoDiv)

// Ejercicio Chat GPT: Inserta dinámicamente en un HTML un div que contenga 5 elementos de lista (<li>) utilizando un loop con JavaScript. Cada elemento de la lista debe contener el texto "Elemento X", donde X es el número del elemento (1, 2, 3, 4, 5).

// const nuevoDiv = document.createElement('div')
// const nuevoUl = document.createElement('Ul')

// for (let i = 1; i < 5; i++) {
//   const nuevoLi = document.createElement('Li')
//   nuevoLi.textContent = `Elemento ${i}`
//   nuevoUl.appendChild(nuevoLi)
// }

// nuevoDiv.appendChild(nuevoUl)
// document.body.appendChild(nuevoDiv)

// document.body.appendChild(nuevoDiv)

// 1.4 Inserta dinamicamente con javascript en un html una p con el
// 	texto 'Soy dinámico!'.
// const nuevoP = document.createElement('p')
// nuevoP.textContent = 'Soy dinamico!'
// document.body.appendChild(nuevoP)

// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
// document.querySelector('.fn-insert-here').textContent = 'Wubba Lubba dub dub'

// Ejercicio chat gpt:
// document
//   .querySelectorAll('.fn-remove-me')
//   .forEach((element) => element.remove())

// 1.6 Basandote en el siguiente array crea una lista ul > li con
// los textos del array.
// const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']

// const nuevoUl = document.createElement('ul')

// for (let i = 0; i < apps.length; i++) {
//   const nuevoLi = document.createElement('Li')
//   nuevoLi.textContent = apps[i]
//   nuevoUl.appendChild(nuevoLi)
// }

// document.body.appendChild(nuevoUl)

// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
// document
//   .querySelectorAll('.fn-remove-me')
//   .forEach((element) => element.remove())

// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// // 	Recuerda que no solo puedes insertar elementos con .appendChild.
// const allDiv = document.querySelectorAll('div')

// const nuevoP = document.createElement('p')
// nuevoP.textContent = 'Este es el nuevo P'

// const referencia = document.querySelector('div')
// referencia.parentNode.insertBefore(nuevoP, allDiv[1])

// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
// 	.fn-insert-here

// const allDiv = document.getElementsByClassName('fn-insert-here')

// for (let i = 0; i < allDiv.length; i++) {
//   const nuevoP = document.createElement('p')
//   nuevoP.textContent = 'Este es el nuevo P'
//   allDiv[i].appendChild(nuevoP)
// }
