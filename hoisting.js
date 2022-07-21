printa() // utilizando a sintaxe function ocorre o IÇAMENTO, a função é IÇADA

// p()   //aqui não executa pois esta sendo chamada antes da declaração

const p = () => { console.log('aaa') }
p()

function printa () {
  console.log('tei')
}