var hello = 'hello';
console.log(hello);
// boolean
var hasValue = true;
// number
var count = 10;
var float = 3.14;
var negative = -0.12;
// string
var single = 'hello';
var double = "hello";
var back = "hello";
// object
// 型注釈
var person1 = {
    name: 'jack',
    age: 21
};
// 型推論
var person2 = {
    name: 'jack',
    age: 21
};
// 型推論
var person3 = {
    name: {
        first: 'Jack',
        last: 'Smith'
    },
    age: 21
};
// array
// 型注釈
var fruits1 = ['Apple', 'Banana', 'Grape'];
// 型推論
var fruits2 = ['Apple', 'Banana', 'Grape'];
// Tuple
var book = ['business', 1500, false];
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
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
// 初期化を省略すると要素数が入る
// enum CoffeeSize {
//   SHORT, // 0
//   TALL, // 1
//   GRANDE, // 2
//   VENTI // 3
// }
// any
var anything = true;
anything = 'hello';
anything = ['hello', 33, true];
anything = {};
anything.name = 'john';
var banana = anything; // こんなこともできてしまう。
console.log(banana); // { name: 'john}
// union
var unionType = 10;
unionType.toString; // numberで使えるメソッド
unionType = 'hello';
unionType.toUpperCase; // Stringで使えるメソッド
var unionTypes = [21, 'hello', 5]; // 配列
// literal
var apple = 'apple';
var clothSize = 'large';
var cloth = {
    color: 'white',
    size: 'large'
};
// 関数：足し算
function add(num1, num2) {
    return num1 + num2;
}
add(3, 4);
function sayHello() {
    console.log('hello!');
}
console.log(sayHello());
