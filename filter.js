// const arr = [1, 2, 3, 4]

// const n = arr.filter(i => i !== 2)

// console.log(n)


const data = [
  {
    placa: "NNG2I94",
    codgChaveAutorizacao: "000566996460023477733855",
    cnpjFabricante: "00909170000193",
    numDenatran: "202100233993932",
    valorTotalEstampagem: 100,
    pendenciaChaveAcessoNFE: true,
    pendenciaImageInstalacao: false,
    pendenciaInstalacaoPlaca: true,
  },
  {
    placa: "GKC3Y53",
    codgChaveAutorizacao: "100566996460023477733855",
    cnpjFabricante: "00909170000193",
    numDenatran: "202100233993932",
    valorTotalEstampagem: 100,
    pendenciaChaveAcessoNFE: false,
    pendenciaImageInstalacao: true,
    pendenciaInstalacaoPlaca: true,
  },
  {
    placa: "KKK3B55",
    codgChaveAutorizacao: "000123456789876987654321",
    cnpjFabricante: "00909170000193",
    numDenatran: "202100233993932",
    valorTotalEstampagem: 100,
    pendenciaChaveAcessoNFE: true,
    pendenciaImageInstalacao: false,
    pendenciaInstalacaoPlaca: false,
  },
].filter(item => item.pendenciaChaveAcessoNFE || item.pendenciaImageInstalacao || item.pendenciaInstalacaoPlaca)


const pessoas = [{ nome: 'gabriel', codgChaveAutorizacao: '000566996460023477733855' }, { nome: 'joao', codgChaveAutorizacao: '000123456789876987654321' }]

const arr = []
if (arr.length == 0) {
  console.log('sfsd')
}
// pessoas.map(pessoa => {
//   data.map(obj => {
//     if (obj.codgChaveAutorizacao === pessoa.codgChaveAutorizacao) {
//       arr.push({ ...obj, pessoa })
//     }
//   })
// })

// console.log(arr)


const meuArr = [ 'test', 'palavra', 'valeu' ]

const filtered = meuArr.filter(item => item.includes('al'))

console.log(filtered)