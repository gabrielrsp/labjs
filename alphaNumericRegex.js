let testStr = "eye";
let allLower = testStr.toLowerCase()
let testRegex = /^[a-zA-Z0-9]*$/;
let splited = allLower.split('')

const filteredSplited = splited.filter( l => testRegex.test(l))
//console.log(filteredSplited)

let origin = filteredSplited.join('')
let reverse = filteredSplited.reverse()
//console.log(reverse)


console.log(reverse.join('') === origin,)