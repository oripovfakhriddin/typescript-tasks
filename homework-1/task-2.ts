const getHighestNumberOfDigits = (arr: number[]): number => {
  let num: number = arr[0];
  let idf: number = arr[0].toString().length;
  for (let i: number = 0; i < arr.length; i++) {
    if (idf < arr[i].toString().length) {
      idf = arr[i].toString().length;
      num = arr[i];
    }
  }

  return num;
};

let numArray: number[] = [158956, 3185179898, 512, 1809756457, 78];
let idf = getHighestNumberOfDigits(numArray);
console.log(idf);
