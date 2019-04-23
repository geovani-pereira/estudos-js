const moduloA = require('../../moduloA')

console.log(moduloA.ateLogo)

const http = require('http')

http.createServer((req,res)=> {
    res.write('BomDia!')
    res.end
}),listen(8080)