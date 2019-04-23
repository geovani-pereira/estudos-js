// não aceita repetição/não indexada

const times = new Set()
times.add('Vasco')
times.add('São PAulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasgo')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Flamento')
console.log(times.has('Flamento'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']

const nomesSet = new Set(nomes)
console.log(nomesSet)