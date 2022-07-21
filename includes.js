cfcs = [
  { cnpj: '08.620.242/0001-90', porcentagem: 20, valor: 0 }, //A CAPITAL
  { cnpj: '03.224.058/0002-98', porcentagem: 10, valor: 0 }, //CFC COOPERTRAN II
  { cnpj: '03.107.855/0001-04', porcentagem: 10, valor: 0 }, //CULTURA
  { cnpj: '23.700.366/0001-79', porcentagem: 10, valor: 0 }, //CFC FONTE NOVA
  { cnpj: '10.380.807/0001-50', porcentagem: 10, valor: 0 }, //CFC A INNOVAR
  { cnpj: '05.026.654/0001-08', porcentagem: 10, valor: 0 }, //MAXIMO
  { cnpj: '06.220.934/0001-15', porcentagem: 10, valor: 0 }, //CFC TOP DRIVER
  { cnpj: '03.616.866/0001-10', porcentagem: 10, valor: 0 }, //CFC RIO NEGRO
  { cnpj: '08.671.369/0001-38', porcentagem: 10, valor: 0 }, //CFC MODELO
]

let newArr = []
cfcs.forEach( i => newArr.push(i.cnpj) )

console.log(newArr.includes('08.671.369/0001-38'))

console.log(cfcs)