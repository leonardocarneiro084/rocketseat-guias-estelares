
// Manipulando Arrays


let techs = ["html", "css", "js"]


techs.push("nodejs")                   // adicionar um item no final da matriz

techs.unshift("sql")                    // adicionar um item no começo da matriz

techs.pop()                             // remover o último elemento do array

techs.shift()                           // remover do começo

console.log(techs.slice(1, 3))          // pegar somente alguns elementos do array
                                        // da posição 1 até o elemento 3


// remover 1 ou mais items em qualquer posição do array

console.log(techs)
techs.splice(1, 2) // splice(1, 2)
                    // primeiro argumento: posição do elemento no array, no caso do css é a posição 1 (lembrando que o html é a posição 0)
                    // segundo argumento: número de elementos que quero tirar. se quero tirar 2 elementos a partir da posição 1, vou retirar os elementos "css" e "js"



// agora vamos adicionar vários elementos na matriz para fazer o último exercício


techs.push("css")
techs.push("nodejs")
techs.push("sql")
console.log(techs)

// encontrar a posição de um elemento no array. fazer uma busca

let position = techs.indexOf('sql')
console.log(position)   // vai mostrar o número da posição no array


console.log(techs)



