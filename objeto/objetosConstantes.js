//pessoa -> 123 -> {...}

const pessoa = {nome: 'Joao'}

pessoa.nome = 'Pedro'

console.log(pessoa)

//pessoa -> 456 -> {....}

//não funciona -> pessoa = { nome: 'Ana'}


Object.freeze(pessoa) // congela o objeto mantendo o nome de Pedro


pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC' //não atribui pois esta congelado
delete pessoa.nome //não deleta pois esta congelado

console.log(pessoa.nome)
console.log(pessoa)


const pessoaConstante = Object.freeze({ nome: 'João'})

console.log(pessoaConstante)