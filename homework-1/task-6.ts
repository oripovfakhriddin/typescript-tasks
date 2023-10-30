const changeObjToArr = (obj: object): string[] => {
  let arr: string[] = [];
  let arr1 = Object.entries(obj);
  for (let i: number = 0; i < arr1.length; i++) {
    let str: string = "";
    for (let j: number = 0; j < arr1[i].length; j++) {
      str += arr1[i][j];
    }
    arr.push(str);
  }
  return arr;
};

let obj = { a: 1, b: 2, c: 3 };
let result = changeObjToArr(obj);
console.log(result);
