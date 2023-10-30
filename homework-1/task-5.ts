const switchLetters = (str: string): string => {
  let idf: string = "";
  for (let i: number = 0; i < str.length; i++) {
    let orderASCII: number = str.charCodeAt(i);
    if (orderASCII >= 65 && orderASCII <= 90) {
      idf += str[i].toLowerCase();
    } else if (orderASCII >= 97 && orderASCII <= 122) {
      idf += str[i].toUpperCase();
    } else {
      idf += str[i];
    }
  }

  return idf;
};
let str: string = "Abdulaziz Programmer";
let result = switchLetters(str);
console.log(result);
