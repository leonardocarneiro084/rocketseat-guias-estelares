


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


let nome = new String("Leonardo")

console.log(nome)

let date = new Date("2020-12-01")

console.log(date)




