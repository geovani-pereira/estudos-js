console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

function logThis(){
    console.log("Dentro de uma função....")
    console.log(this === exports) // dentro não aponta para module.exports
    console.log(this === module.exports)

    console.log(this === global) // dentro da funcao aponta para global

    this.perigo = '...'
}


logThis();