let valor // não inicializada

console.log(valor);


valor = null; //ausencia de valor

console.log(valor);

//console.log(valor.toString()); //ERRO !

let produto = {};

console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined // evitar atribuir undefined usar "null"
console.log(!!produto.preco);

console.log(produto);

delete produto.preco;
produto.preco = null //sem preço
console.log(!!produto.preco);
console.log(produto);