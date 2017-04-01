let a = 1;
let b = 2;
function test(j, k) {
  if (j < k) {
    j = k
    return {
      j
    }
  }
}
a = test(a, b).j;
console.log(a)
