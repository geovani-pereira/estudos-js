let comparaComthis = function (param){
    console.log(this === param)
}

comparaComthis(global)


const obj = {}

comparaComthis = comparaComthis.bind(obj)
comparaComthis(global);


let comparaComthisArrow = param =>console.log(this === param)
comparaComthisArrow(global)
comparaComthisArrow(module.exports)


comparaComthisArrow = comparaComthisArrow.bind(obj)
comparaComthisArrow(obj)
comparaComthisArrow(module.exports)