type arrayInObj = {
  name: string;
  pages: number;
  isReadFinished: boolean;
};

const getTotalPages = (arr: arrayInObj[]): number => {
  let sum: number = 0;
  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i].isReadFinished) {
      sum += arr[i].pages;
    }
  }
  return sum;
};

const books = [
  { name: "The Great Gatsby", pages: 180, isReadFinished: true },
  { name: "To Kill a Mockingbird", pages: 336, isReadFinished: false },
  { name: "Atom habits", pages: 328, isReadFinished: true },
  { name: "Pride and Prejudice", pages: 432, isReadFinished: false },
  { name: "The Catcher in the Rye", pages: 224, isReadFinished: true },
  { name: "The Hobbit", pages: 310, isReadFinished: false },
  { name: "The Lord of the Rings", pages: 1178, isReadFinished: true },
  { name: "Harry Potter", pages: 320, isReadFinished: true },
  { name: "Fahrenheit 451", pages: 249, isReadFinished: false },
  { name: "To the Lighthouse", pages: 209, isReadFinished: true },
];
const result = getTotalPages(books);

console.log(result);
