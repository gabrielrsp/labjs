let arr = []

function rangeOfNumbers(startNum, endNum) {
    

  if(startNum <= endNum ) {
    console.log('passow aqui', startNum)  
    arr.push(startNum)
    console.log(arr)
   
   return rangeOfNumbers(startNum +1, endNum)
  }

return arr;
};

