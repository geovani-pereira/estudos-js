function teste1(num){
    if(num > 7)
    console.log(num);
    console.log('Final');
}

teste1(9);

teste1(8);


function teste2(num){
    if(num > 7);{ //cuidado com o ';', não usar em estruturas de controle
        console.log(num)
    }
}


teste2(9);