// let printNumTwo;

// // //i não esta somente dentro do escopo do for pois é global, então chegara até o valor limite e não entrara no for
// for (var i = 0; i < 3; i++) {
//   if (i === 2) {
//     printNumTwo = function() {
//       return i;
//     };
//   }
// }
// console.log(i) // //como é var, é acessada globalmente
// console.log(printNumTwo());

//////////////////////////////////////////////////

let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
console.log(i);
//no caso i é acessada so dentro do escopo do for, nao ira receber valor 3