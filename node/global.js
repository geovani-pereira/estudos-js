//console.log(global)
global.MinhaApp = Object.freeze({ /// freeze travou os atributos e as funções mais sem o freeze pode ser alterado em qualquer lugar
    saudacao(){
        return 'Estou em todos os lugares !'
    },
    nome: 'Sistema Legal'
})
