const getSum = (n: number): number => {
  let sum: number = 0;
  for (let i: number = 0; i <= n; i++) {
    if (i % 2) {
      sum += i;
    } else {
      sum += Math.pow(i, 2);
    }
  }
  return sum;
};

let n: number = 5;
let result = getSum(n);
console.log(result);
