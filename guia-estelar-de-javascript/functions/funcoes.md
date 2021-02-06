

# functions

<!-- a função serve para agrupar código
podemos chamar essa função quantas vezes quisermos -->


// criar um aplicativo de frases motivacionais
// podemos fazer várias ações isoladamente

console.log("Estudar é muito bom")
console.log("Paciência e persistência")
console.log("Revisão é a mãe do aprendizado")

// ou declarar uma função que irá realizar todas as ações em conjunto
// declaration - declaração de função
// function declaration or function statement

function createPhrases() {

    console.log("Estudar é muito bom")
    console.log("Paciência e persistência")
    console.log("Revisão é a mãe do aprendizado")

}

// executar a a função
// rodar, chamar, invocar
// execute, run, call, invoke

createPhrases()

console.log('fim do programa')



## argumentos e parâmetros

// function expression
// function anonymous


// parâmetros (paramters)
const sum = function(number1, number2) {
    console.log(number1 + number2)

}

sum(2, 3) //function arguments - argumentos da função


### retornando valores dentro da função

// function expression
// function anonymous


// parâmetros (paramters)
const sum = function(number1, number2) {    // cria as variáveis
    total = number1 + number2               // realiza a ação de soma
    return total 

}

let number1 = 34        // atribue valor às variáveis
let number2 = 25    

console.log(`a soma é ${sum(number1, number2)}`)


#### outra maneira de entender funções


// função é um liquidificador

function fazerSuco(fruta1, fruta2) {
    return fruta1 + fruta2
}

const copo = fazerSuco('banana', 'macâ')

console.log(copo)

##### function scope

let subject = 'create video'

function createThink(subject) {
    subject = 'study'
    return subject
}

console.log(createThink(subject)) // escopo dentro da função
console.log(subject) // escopo de fora da função

console.log(createThink()) // escopo dentro da função


###### function hoisting

<!-- note que primeiro estamos executando a função
e depois executando a função
a funciona, por que a função sofre o hoisting
--> 

// function hoisting

sayMyName() // executa a função

function sayMyName() { // cria a função
    console.log('Leonardo')
}

<!-- já dessa maneira o código não funciona -->

sayMyName() // executa a função

var sayMyName = function() { // cria a função
    console.log('Leonardo')
}

<!-- não funciona dessa maneira -->


###### arrow function

- é o jeito mais moderno de escrever funções
- fica mais compacto

// é o jeito mais rápido de escrever uma função do tipo expression

const sayMyName = () => {
    console.log('Leonardo')
}

sayMyName()

<!-- uma outra maneira de escrever a arrow function -->
const sayMyName = (name) => {
    console.log(name)
}

sayMyName('Leonardo')


###### callback function

- é uma função que chama outra função de volta

<!-- exemplo 1-->

function sayMyName(name) {
    console.log(name)
}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)

<!-- exemplo 2 -->

function sayMyName(name) {
    console.log('antes de executar a função callback')

    name()

    console.log('depois de executar a função callback')
}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)

###### funções construtoras

/* 
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person(name) {
    this.name = name
    this.walk = function () {
        return this.name + " está andando"
    }
}

const mayk = new Person("Leonardo") // cria um novo objeto com o nome leonardo
const joao = new Person("João") // cria um novo objeto com o nome joao
console.log(mayk)
console.log(joao.walk())



