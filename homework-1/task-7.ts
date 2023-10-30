type aliases = {
  name: string;
  isGrant: boolean;
};

const seperateStudents = (arr: aliases[]): object => {
  let obj: { grant: string[]; contract: string[] } = {
    grant: [],
    contract: [],
  };
  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i].isGrant) {
      obj.grant.push(arr[i].name);
    } else {
      obj.contract.push(arr[i].name);
    }
  }
  return obj;
};

let students = [
  { name: "Jurabek", isGrant: false },
  { name: "Elbek", isGrant: true },
  { name: "Shamshod", isGrant: false },
  { name: "Kamola", isGrant: false },
  { name: "Gulnoza", isGrant: true },
  { name: "Savlatbek", isGrant: false },
];

let result = seperateStudents(students);
console.log(result);
