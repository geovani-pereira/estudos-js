console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)
aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])


aprovados[3] = 'Paulo'

aprovados.push('José')

console.log(aprovados[4]);


aprovados[9]= 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() //organiza Array 
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia','Carlos','Ana']
aprovados.splice(1,2, 'Elemento1', 'Elemento2')//primeiro parametro indice, segundo quantidade apartir do primeiro
 //splice adicionar elementos em um indice, remover,remover e adicionar ao mesmo tempo
console.log(aprovados)