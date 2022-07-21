const obj = {a: null, b: undefined, c: '', d: 0, e: false};

const isFalsy = Object.values(obj).every(value => {
  if (!value) {
    return true;
  }
  return false;
});

console.log(isFalsy); // 👉️ true