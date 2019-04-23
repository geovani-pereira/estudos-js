function tratarErroELancar(erro){
   // throw new Error('...')
   //throw 10
   throw 'Mensagem';
}


function imprimirNomeGritado(obj){

    try{
        console.log(obj.name.toUpperCase()+ '!!!')

    }catch(e){
        tratarErroELancar(e)
    }finally{
        console.log('final')
    }
 }


const obj = {nome: 'Roberto'} //nome: na verdade é name

imprimirNomeGritado(obj);

