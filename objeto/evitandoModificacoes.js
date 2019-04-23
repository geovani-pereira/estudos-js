//Object.preventExtensions

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Promoção'
})

console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca' // não vai surtir efeito
delete produto.tag // excluir pode adicionar não
console.log(produto)


//Object.seal -> pode mecher nos dados mas não mudar atributos
const pessoa = {nome: 'Juliana', idade: 35}

Object.seal(pessoa)

console.log('Selado:' , Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva' //não funciona
delete pessoa.nome //também não
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = Sela e deixa os dados constantes