const getSum = (n: number) => {
  let sum: number = 0;
  let mulOdd: number = 1;
  let mulCouple: number = 1;

  for (let i: number = 1; i <= n; i++) {
    mulOdd *= 2 * i - 1;
    mulCouple *= 2 * i;
  }
  sum = mulCouple + mulOdd;

  return sum;
};

let n: number = 3;
let sum = getSum(n);
console.log(sum);
