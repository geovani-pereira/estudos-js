function criarProduto(nome,valor){
    return{
        nome,
        valor,
        desconto: 0.1
    }
}

console.log(criarProduto("Notebook", 2199.49))
console.log(criarProduto("Caneta",1200));
console.log(criarProduto("Carro",45000))