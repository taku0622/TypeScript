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
book[1] = 700; // 値変更

// Enum
// const CoffeeSize = {
//   SHORT: 'SHORT',
//   TALL: 'TALL',
//   GRANDE: 'GRANDE',
//   VENTI: 'VENTI'
// }
// const coffee = {
//   hot: true,
//   size: CoffeeSize.TALL
// }
// coffee.size = 'hello' // 値変更できてしまう。
// sizeを4つからしか選べないようにする
// CoffeeSizeをenum型にする
enum CoffeeSize {
  SHORT = 'SHORT',
  TALL = 'TALL',
  GRANDE = 'GRANDE',
  VENTI = 'VENTI'
}
const coffee = {
  hot: true,
  size: CoffeeSize.TALL
}
// 初期化を省略すると要素数が入る
// enum CoffeeSize {
//   SHORT, // 0
//   TALL, // 1
//   GRANDE, // 2
//   VENTI // 3
// }

// any
let anything: any = true;
anything = 'hello';
anything = ['hello', 33, true];
anything = {};
anything.name = 'john';
let banana = anything; // こんなこともできてしまう。
console.log(banana); // { name: 'john}

// union
let unionType: string | number = 10;
unionType.toString; // numberで使えるメソッド
unionType = 'hello';
unionType.toUpperCase; // Stringで使えるメソッド
let unionTypes: (number | string)[] = [21, 'hello', 5]; // 配列

// literal
const apple: 'apple' = 'apple';
let clothSize: clothSize = 'large';


// typeエイリアス
type clothSize = 'small' | 'medium' | 'large';
const cloth: {
  color: string,
  size: clothSize
} = {
  color: 'white',
  size: 'large'
}