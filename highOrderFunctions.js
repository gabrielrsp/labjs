const childrenAge = [2, 0, 5, 8, 12, 17, 13, 7, 10]


//FILTER - crianças entre 2 - 11 anos - IMUTABILIDADE 

const filteredChildren = childrenAge.filter( idade => {
  return idade >= 2 && idade <= 11 ? true : false
} )

console.log(filteredChildren)



//Adicionar data de nascimento para cada elemento do array

const childrenObj = childrenAge.map( idade => ( { idade, dataNascimento: 2021 - idade } ))

// console.log(childrenObj)


// Crie um array somente com os domínios da lista de email

const mailList = [
  "robson@rocketseat.com",
  "fulano@gmail.com",
  "cleito@rocketseat.com",
  "diego@rocketseat.com",
  "eu@adonis.com",
  "aloha@hawaii.com",
  "outro@emailqualquer.com"
]

const domains = mailList.map( email => {
  const splited = email.split('@')
  return splited[1 ]
})

// console.log(domains)


// Encontre o maior preço dos produtos abaixo de 100 reais

shopCart = [
  { product: "sapato", quantity: 2, unitPrice: 118 },
  { product: "bermuda", quantity: 1, unitPrice: 48 },
  { product: "tenis", quantity: 3, unitPrice: 89 },
  { product: "camiseta", quantity: 2, unitPrice: 25 }
]

// Ordena decrescente e find no menor que 100

const maisCaro = shopCart.sort((b, a) => {
  if(b.unitPrice > a.unitPrice) return -1
  if(a.unitPrice < b.unitPrice) return 1
  return 0
}).find( produto => produto.unitPrice < 100)

// console.log(maisCaro)
