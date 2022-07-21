  let num = 4

  let splited = num.toString().split('')

  let newSplited = splited.map( sn => parseInt(sn, 10))

  let arr = []

  if(newSplited.length === 1) {
    if(newSplited[0] === 1 ){
      arr.push('I')
    }
    if(newSplited[0] === 2 ){
      arr.push('II')
    }
    if(newSplited[0] === 3 ){
      arr.push('III')
    }
    if(newSplited[0] === 4 ){
      arr.push('IV')
    }
    if(newSplited[0] === 5 ){
      arr.push('V')
    }
    if(newSplited[0] === 6 ){
      arr.push('VI')
    }
    if(newSplited[0] === 7 ){
      arr.push('VII')
    }
    if(newSplited[0] === 8 ){
      arr.push('VIII')
    }
    if(newSplited[0] === 9 ){
      arr.push('IX')
    }
  }

  if(newSplited.length === 2){
    //dezena
    if(newSplited[0] === 1 ){
      arr.push('X')
    }
    if(newSplited[0] === 2 ){
      arr.push('XX')
    }
    if(newSplited[0] === 3 ){
      arr.push('XXX')
    }
    if(newSplited[0] === 4 ){
      arr.push('XL')
    }
    if(newSplited[0] === 5 ){
      arr.push('L')
    }
    if(newSplited[0] === 6 ){
      arr.push('LX')
    }
    if(newSplited[0] === 7 ){
      arr.push('LXX')
    }
    if(newSplited[0] === 8 ){
      arr.push('LXXX')
    }
    if(newSplited[0] === 9 ){
      arr.push('XC')
    }
    // AGORA VENDO A UNIDADE
    if(newSplited[1] === 1 ){
      arr.push('I')
    }
    if(newSplited[1] === 2 ){
      arr.push('II')
    }
    if(newSplited[1] === 3 ){
      arr.push('III')
    }
    if(newSplited[1] === 4 ){
      arr.push('IV')
    }
    if(newSplited[1] === 5 ){
      arr.push('V')
    }
    if(newSplited[1] === 6 ){
      arr.push('VI')
    }
    if(newSplited[1] === 7 ){
      arr.push('VII')
    }
    if(newSplited[1] === 8 ){
      arr.push('VIII')
    }
    if(newSplited[1] === 9 ){
      arr.push('IX')
    }

  }

  if(newSplited.length === 3){
    //centena
    if(newSplited[0] === 1){
      arr.push('C')
    }
    if(newSplited[0] === 2){
      arr.push('CC')
    }
    if(newSplited[0] === 3){
      arr.push('CCC')
    }
    if(newSplited[0] === 4){
      arr.push('CD')
    }
    if(newSplited[0] === 5){
      arr.push('D')
    }
    if(newSplited[0] === 6){
      arr.push('DC')
    }
    if(newSplited[0] === 7){
      arr.push('DCC')
    }
    if(newSplited[0] === 8){
      arr.push('DCCC')
    }
    if(newSplited[0] === 9){
      arr.push('CM')
    }
    //dezena
    if(newSplited[1] === 1 ){
      arr.push('X')
    }
    if(newSplited[1] === 2 ){
      arr.push('XX')
    }
    if(newSplited[1] === 3 ){
      arr.push('XXX')
    }
    if(newSplited[1] === 4 ){
      arr.push('XL')
    }
    if(newSplited[1] === 5 ){
      arr.push('L')
    }
    if(newSplited[1] === 6 ){
      arr.push('LX')
    }
    if(newSplited[1] === 7 ){
      arr.push('LXX')
    }
    if(newSplited[1] === 8 ){
      arr.push('LXXX')
    }
    if(newSplited[1] === 9 ){
      arr.push('XC')
    }
    //unidade
    if(newSplited[2] === 1 ){
      arr.push('I')
    }
    if(newSplited[2] === 2 ){
      arr.push('II')
    }
    if(newSplited[2] === 3 ){
      arr.push('III')
    }
    if(newSplited[2] === 4 ){
      arr.push('IV')
    }
    if(newSplited[2] === 5 ){
      arr.push('V')
    }
    if(newSplited[2] === 6 ){
      arr.push('VI')
    }
    if(newSplited[2] === 7 ){
      arr.push('VII')
    }
    if(newSplited[2] === 8 ){
      arr.push('VIII')
    }
    if(newSplited[2] === 9 ){
      arr.push('IX')
    }
 
}

  if(newSplited.length === 4){
    //milhar
    if(newSplited[0] === 1){
      arr.push('M')
    }
    if(newSplited[0] === 2){
      arr.push('MM')
    }
    if(newSplited[0] === 3){
      arr.push('MMM')
    }
    if(newSplited[0] === 4){
      arr.push('MMMM')
    }

    //centena
    if(newSplited[1] === 1){
      arr.push('C')
    }
    if(newSplited[1] === 2){
      arr.push('CC')
    }
    if(newSplited[1] === 3){
      arr.push('CCC')
    }
    if(newSplited[1] === 4){
      arr.push('CD')
    }
    if(newSplited[1] === 5){
      arr.push('D')
    }
    if(newSplited[1] === 6){
      arr.push('DC')
    }
    if(newSplited[1] === 7){
      arr.push('DCC')
    }
    if(newSplited[1] === 8){
      arr.push('DCCC')
    }
    if(newSplited[1] === 9){
      arr.push('CM')
    }

    //dezena
    if(newSplited[2] === 1 ){
      arr.push('X')
    }
    if(newSplited[2] === 2 ){
      arr.push('XX')
    }
    if(newSplited[2] === 3 ){
      arr.push('XXX')
    }
    if(newSplited[2] === 4 ){
      arr.push('XL')
    }
    if(newSplited[2] === 5 ){
      arr.push('L')
    }
    if(newSplited[2] === 6 ){
      arr.push('LX')
    }
    if(newSplited[2] === 7 ){
      arr.push('LXX')
    }
    if(newSplited[2] === 8 ){
      arr.push('LXXX')
    }
    if(newSplited[2] === 9 ){
      arr.push('XC')
    }
  ////////// AGORA VENDO A UNIDADE
    if(newSplited[3] === 1 ){
      arr.push('I')
    }
    if(newSplited[3] === 2 ){
      arr.push('II')
    }
    if(newSplited[3] === 3 ){
      arr.push('III')
    }
    if(newSplited[3] === 4 ){
      arr.push('IV')
    }
    if(newSplited[3] === 5 ){
      arr.push('V')
    }
    if(newSplited[3] === 6 ){
      arr.push('VI')
    }
    if(newSplited[3] === 7 ){
      arr.push('VII')
    }
    if(newSplited[3] === 8 ){
      arr.push('VIII')
    }
    if(newSplited[3] === 9 ){
      arr.push('IX')
    }
}
//return arr.join('')
console.log(arr.join(''))