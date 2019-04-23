//let e const

//let escopo de bloco
//var escopo de função

{
    var a = 2
    let b = 3
    console.log(b)
}

console.log(a)


//Template String

console.log(`O valor de A é: ${a}`)

const produto = 'iPad'
console.log(`${produto} é caro`)//pode até quebrar linha com template String

//Destructuring

const [l, e, ...tras] = 'Cod3r' //faz um array com os dados  C o [ 'd', '3', 'r' ]
console.log(l,e,tras)


const[x, ,y] = [1,2,3]
console.log(x,y)

const {idade: i , nome} = {nome: 'Ana', idade: 9}
console.log(i,nome) // 9 'Ana'
