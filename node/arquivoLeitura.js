const fs = require('fs')

//sicrono....

const caminho = __dirname + '/arquivo.json'

//sicrono....

const conteudo = fs.readFileSync(caminho, 'utf-8')

console.log(conteudo)

//assicrono....

fs.readFile(caminho, 'utf-8', (err,contaudo) =>{
    const config = JSON.parse(conteudo)
   console.log(`${config.db.host}: ${config.db.port}`)
})


const config = require('./arquivo.json')

console.log(config.db)

fs.readdir(__dirname, (err,arquivos)=>{
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})