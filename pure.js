const x = 2

const increment = (x) => {
  const x = 3
  this.x = x + 1

  return x
}


console.log(increment(1))