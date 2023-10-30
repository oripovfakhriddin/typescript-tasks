const getStringArr = (arr: any): string[] => {
  let getStr: string[] = [];

  for (let i: number = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      getStr.push(arr[i]);
    }
  }

  return getStr;
};
let anyArr: any = [1, "Abdulaziz", "Elbek", false, [], "Jurabek", {}, 2, 3, "556"];
let result = getStringArr(anyArr);
console.log(result);

