// Arrow Function

const soma = (a,b) => a+b  //se colocar corpo tem que ter return e abrir e fechar chaves 
                           //para passar só um parametro não precisa de parenteses
console.log(soma(2,3))

//Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})


lexico1()
lexico2()

//passagem de parametros default
function log(texto = 'Node'){
    console.log(texto)
}

log()
log('Sou mais forte')

//operador rest
function total(...numeros){
    let total = 0 
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2,3,4,5))