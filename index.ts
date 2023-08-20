let hello: string = 'hello';
console.log(hello);

// boolean
let hasValue = true;

// number
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;

// string
let single: string = 'hello';
let double: string = "hello";
let back: string = `hello`;

// object
// 型注釈
const person1: {
  name: string;
  age: number;
} = {
  name: 'jack',
  age: 21
}
// 型推論
const person2 = {
  name: 'jack',
  age: 21
}
// 型推論
const person3 = {
  name: {
    first: 'Jack',
    last: 'Smith'
  },
  age: 21
}

// array
// 型注釈
const fruits1: string[] = ['Apple', 'Banana', 'Grape']
// 型推論
const fruits2 = ['Apple', 'Banana', 'Grape']

// Tuple
const book: [string, number, boolean] = ['business', 1500, false];
book.push(21);
book[1] = 700;

console.log(book[2]);
console.log(book[3]);