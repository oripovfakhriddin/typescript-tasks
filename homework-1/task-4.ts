const punctuationSigns = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

const getPunctuationNumber = (str: string): number => {
  let count: number = 0;
  for (let j: number = 0; j < punctuationSigns.length; j++) {
    for (let i: number = 0; i < str.length; i++) {
      if (str[i] === punctuationSigns[j]) {
        count++;
      }
    }
  }

  return count;
};

let str = "Hello! How are you? I'm doing great. What's new?";
let result = getPunctuationNumber(str);

console.log(result);
