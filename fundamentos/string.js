const escola = "Cod3r";

console.log(escola.charAt(4)) //pegar indice do string "r"
console.log(escola.charAt(5)) // não encontrou o indice
console.log(escola.charCodeAt(3));//codigo da tabela asci
console.log(escola.indexOf('3'));//retorna em que indice está
console.log(escola.substring(1));//apartir do indice 1 vai imprimir
console.log(escola.substring(0, 3)); //vai do indice zero mas não inclui o indice 3 
console.log('Escola '. concat(escola).concat("!")); //concatenação literal + variavel + literal 'Escola' + escola + "!";
console.log(escola.replace(3, 'e')); //substituiu o indice 3 por "e";
console.log(escola.replace(/\w/g, 'e'));// Regex
console.log('Ana,Maria,Pedro'.split(','));//gerou um array usando o separador "," 