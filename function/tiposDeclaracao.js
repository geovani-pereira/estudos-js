console.log(soma(3,4)) // funciona pois é function declaration as outras 2 não funcionam... só de fosse chamada depois da declaração
//console.log(sub(4,2)) // não funciona pois não carrega antes de executar

//function declaration
function soma(x,y){
    return x + y
}

//function expression
const sub = function(x,y){
    return x - y
}

//named function expression

const mult = function mult(x,y){
    return x * y
}