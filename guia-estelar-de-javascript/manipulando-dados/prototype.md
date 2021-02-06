
# prototype

<!--

* prototype-based language
* prototype chain
* __proto__

digite no console:

{}          // cria um objeto que puxa as características do objeto ascendente, que é o protótipo
            // o protótipo é o objeto mais puro, que é base para todos os outros


11.0.__proto__          // mostra as funcionalidades de um objeto do tipo "float"
"Leonardo".__proto__    // mostra as funcionalidades de um objeto do tipo "string"

-->

## type conversion coersion

<!-- 

    Type conversion (typecasting) vs Type coersion

    * Alteração de um tipo de um dado para outro tipo




console.log('9' + 5) // note que temos um valor do tipo string e um valor do tipo number
                    // o resultado é uma concatenação do dado tipo string 9 e o dado do tipo number 5
                    // concatenação quer dizer que os dados só foram juntados um após o outro
                    // note que os dados tem tipos diferentes (string e number)
                    // o javascript transformou o dado tipo number em um dado tipo string "a força" (coersion)

                    
                    // coerçao de tipo = type coersion => transforma o dado a força / coercitivamente


console.log(Number('9')+5)

// note que o código number('9') transforma o dado tipo string para dado tipo number
// essa é a conversão de tipo, ou type conversion, pois foi feita manualmente

-->

### string em números

// Manipulando String e Números

// Transformar String em Número e Número em String

let string = "123" // declara a string
console.log(Number(string)) // transforma a string em número e imprime


let number = 321        // declara o número
console.log(String(number)) // transforma o número em string e imprime


#### contando caracteres e dígitos

// Manipulando Strings e Números

// Contar quantos caracteres tem em uma palavra e quantos dígitos tem em um número


let word = "paralelepipedo"
console.log(word.length)


let number = 12345678
console.log(String(number).length) // primeiro transforma o número em caracteres, depois conta quantos caracteres


##### casas decimais

// manipulando strings e números

// transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula


let number = 56465465465.46465465

console.log(number.toFixed(2).replace(".", ",")) 
                    // .toFixed(2) determina somente 2 casas decimais
                    // .replace(".", ",") substitui . por vírgula
                    // note que agora temos um dado do tipo string

                    // podemos transformar em número?
                    // o dado tipo número utiliza o . para separar casas decimais
                    // ao substituir o . por , não podemos mais transformar em número

                    console.log(Number(number.toFixed(2).replace(".", ","))) 
                    // repare o erro "NaN - Not a Number"


###### maiúsculas e minúsculas

// Transforme letras minúsculas em maiúsculas e vice-versa

let word = "ProgramAr É Muito Bacana"

console.log(word.toUpperCase()) // tudo maiúsculo
console.log(word.toLowerCase()) // tudo minúsculo

###### encontrando palavras em frases

// Verificar se o texto contém a palavra Amor

let phrase = "Eu quero viver!"

console.log(phrase.includes("Amor")) // verifica se existe a palavra dentro da frase


console.log(phrase.includes("Viver")) // repare que essa função "includes" é case sensitive, ou seja, diferencia letras miúsculas de minúculas
console.log(phrase.includes("viver")) 


###### separando e juntando strings

// Separe um texto que contem espaços em um novo array onde cada texto é uma posição do array. Depois, transforme o array em um texto e substitua o espaço por _


let phrase = "Eu quero viver o Amor!"

let myArray = phrase.split(" ") // cria uma variável myArray
                                // o .split(" ") vai quebrar o conteúdo em partes e armazenar em posições diferentes da matriz sempre que encontrar um espaço " "

console.log(myArray)        // imprime a matriz para ver como ficou

let phraseWithUnderscore = myArray.join("_") // junta os elementos da matriz em uma nova variável "phraseWithUnderscore" colocando o "_" entre eles

console.log(phraseWithUnderscore)


###### criando um Array com Constructor

// Criar um array com constructor

let myArray = ['a', 'b', 'c'] // maneira usual de criar um array
console.log(myArray)


let array1 = new Array(10)      // cria um array com 10 posições vazias
console.log(array1)


###### contar elementos do array

// contar elementos de um array

console.log(["a", "b", "c", function() { return "hello"}].length)

// note que temos um array formado pelos elementos
// "a", "b", "c", function() { return "hello"}
// posições do array: 0, 1, 2, 3
// note que na posição 3 temos uma função que volta "hello"
// os elementos do array ficam dentro dos colchetes [] brackets
// () parentheses [] brackets {}braces

###### transformar strings em arrays

// transformar uma cadeia de caracteres em elementos de array

let word = "manipulação" // cria uma variável do tipo string

console.log(Array.from(word)) // a funcionalidade Array.from(word) quebra a cadeia de caracteres em vários elementos de uma matriz


console.log(word.length) // conta o número de letras 

###### manipulando arrays


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

