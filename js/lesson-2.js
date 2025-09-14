// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// const styles = ["jazz", "blues"];
// styles.push("rock-n-roll");
// const index = styles.indexOf("blues");
// // styles[1] = "classic";
// styles.splice(index, 1, "classic");
// // console.log(styles);

// logItems(styles);

// function logItems(array) {
//     for (let i = 0; i < array.length; i++){
// console.log(`${i+1}:${array[i]}`);
//     }
// }

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];
// checkLogin(logins);

// function checkLogin(array) {
//     let names = prompt("Ведіть ім'я:");
//     if (array.includes(names)) {
//         alert(`Welcome, ${names}!`);
//  } else {alert("User not found");}
// }


// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function caclculateAverage() {
//     let sum = 0;
//     for (const arg of arguments) {
//         if(typeof arg === "number"){
//         sum += arg;}
//     }
//     return Math.round(sum / arguments.length);
// }
// console.log(caclculateAverage("Anna", 4, 5, 8, true));

// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// console.log(sumArray(someArr));


// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].


// function sumArray(arr) {
//     let aray = [];
//     for (let i = 0; i < arr.length; i++){
//         aray.push(arr[i] + arr[i + 1]);
//     } return aray;
// }

// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// function findSmallestNumber(numbers) {
//    if ( Array.isArray(numbers)){
//        return Math.min(...numbers);
//     } else {return "Sory, it is not an array!";}
// }
// console.log(findSmallestNumber(numbers));


// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'


// function findLongestWord(string) {
//     const wordsArray = string.split(" ");
//     let longestWord = wordsArray[0];
//     for (const word of wordsArray) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//        }
//     } return longestWord;
// }

// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//     name: "John",
//     age: 20,
//     hobby: "tenis",
//     premium: true,
//   };

// user.mood = "happy";
// console.log(user);

// user.hobby = "skydiving";
// console.log(user);

// user.premium = false;
// console.log(user);


// const keys = Object.keys(user);
// for (const key of keys) {
//     console.log(`${key}:${user[key]}`);
// }

// for (const key in user) {
//     console.log(`${key}:${user[key]}`);
    
// }

// console.log(keys);




// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
//   };


// let sum = 0;
// const values = Object.values(salaries);
// for (const value of values) {
//     sum += value;
   
// }

// console.log(sum);

// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'


// const calculator = {
//     read(a, b) {
//         this.valueFirst = a;
//         this.valueSecond = b;
//     },
//     sum() {
//         if (!this.exist()) {
//             return "No such propeties";
//         }
//         return this.valueFirst + this.valueSecond;
//     },
//     mult() {
//         if (!this.exist()) {
//       return "No such propeties";
//         }
//         return this.valueFirst * this.valueSecond;
//     },
//     exist() {
//         return this.valueFirst !== undefined && this.valueSecond !== undefined;
//     },
// }

// calculator.read();
// console.log(calculator);
// console.log(calculator.sum());
// console.log(calculator.mult());
// console.log(calculator.exist());

// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.

// const fruits = [
//     { name: "Яблуко", price: 45, quantity: 7 },
//     { name: "Апельсин", price: 60, quantity: 4 },
//     { name: "Банан", price: 125, quantity: 8 },
//     { name: "Груша", price: 350, quantity: 2 },
//     { name: "Виноград", price: 440, quantity: 3 },
//     { name: "Банан", price: 125, quantity: 3 },
//   ];


// function calcTotalPrice(fruits, fruitName) {
//     let total = 0;
//     for (const fruit of fruits) {
//         if (fruit.name === fruitName) {
//             total += fruit.price * fruit.quantity;
//         }
//     }
//     return total;
// }
// console.log(calcTotalPrice(fruits, "Банан"));

// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(4, 5));

// function square(x) {
//     return x**2;
// }
// console.log(square(5));

// function isEven(n) {
//     const number = n % 2 === 0;
//     return number;
// }
// console.log(isEven(2));

// function greet(name) {
//     return `Hello ${name}!`;
// };
// console.log(greet("Alice"));

// function max(a, b) {
//     return Math.max(a, b);
// }
// console.log(max(5, 46));


// function max(a, b) {
//     if (a > b) return a;
//     return b;
// }
//  console.log(max(8, 67));
 


// function arr(n) {
//     for (let i = 0; i < 7; i++){
//        console.log(i);
//     }
//     }

//   console.log(arr(2));
  
// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// console.log(reverseString("hello"));
  
// function isPalindrome(str) {
//     let reverse = str.split("").reverse().join("");
//     return str === reverse;
// }
//   console.log(isPalindrome("level"));
  
// function toUpperCaseFirst(str) {
//     return str[0].toUpperCase() + str.slice(1);
// }
// console.log(toUpperCaseFirst("alice"));

// function getRundom(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
// console.log(getRundom(2, 4));

// const multiply = (a, b) => a * b;
// console.log(multiply(5,6));


// const isPositive = n => n.every(el => el > 0);
// console.log(isPositive([1, 4, 6, -7]));

// const getLength = str => str.length;
// console.log(getLength("hello"));


// const double = arr => arr.map(value => value * 2);
// console.log(double([3, 6, 8]));

// const getLast = arr => arr[arr.length - 1];
// console.log(getLast("hello ther"));

// const getLast = arr => arr.at(-1);
// console.log(getLast(["Anna", "Alice"]));
 
// const min = (a, b) => Math.min(a, b);
// console.log(min(4, 89));

// const pow = (base, exp) => Math.pow(base, exp);
// console.log(pow(3, 2));

// const concatString = (a, b) => a.concat(b);
// console.log(concatString("Hello ", "world!"));

// const getCharAt = str => str.charAt(0);
// console.log(getCharAt("Hello"));

// const isAdult = age => age >= 18;
// console.log(isAdult());

// const array = ["a", "b", "c"];
// array.forEach((element) => console.log(element)
// );

// const numbers = [1, 2, 3, 4, 5, 6];
// numbers.forEach(function (number, index) {
//     console.log(`Index ${index}, value ${number}`)
// });

// const doubleNumber = arr => arr.map(number => number * 2);
// console.log(doubleNumber([2, 3, 6]));

// const getNumber = arr => arr.filter(number => number % 2 === 0);
// console.log(getNumber([1, 2 ,4, 7, 8, 67, 44]));

// const user = {
//     username: "Viktor",
//     showName() {
//         console.log(this.username);
        
//     }
// }
// console.log(user.username);
// user.showName();

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };

// console.log(pizzaPalace.order("Four meats"));

// const user = {
//     username: "Polly",
//     showThis() {
//         console.log(this);
        
//     }
// }
// user.showThis();

// "use strict";

// function showThis() {
//     console.log("this is showThis: ", this);
    
// }
// const user = {
//     username: "Poly",
// };
// user.showContext = showThis;

// user.showContext();
// showThis();

// const book = {
//   updateTitle(newTitle) {
//     // ...
//   },
// };

// const update = book.updateTitle;

// update("Lord Of The Rings");





// function sayHello(greeting) {
//   console.log(`${greeting}, ${this.name}!`);
// }

// const user = {
//   name: "Alice",
// };

// const greet = sayHello.bind(user);

// greet("Hello");


// const showThis = () => {
//   console.log("this in showThis: ", this);
// };

// showThis(); // this in showThis: window

// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // { name: "Mango", [[Prototype]]: animal }

// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;
// console.log(parent.hasOwnProperty("surname"));


// class Car {
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }

// class Car {
//   #price;
//   static maxPrice = 50000;
//   constructor (params) {
//     this.#price = params.price;
//   }
//   get price() {
//     return this.#price;
//   }
//   set price(newPrice) {
//     if (newPrice <= Car.maxPrice) {
//       this.#price = newPrice;
//     }
//   }
// }

// class Car {
//   static #maxPrice = 50000;
//     static checkPrice(price) {
//         if (price > Car.#maxPrice) {
//             return "Error! Price exceeds the maximum";
//         } else {
//             return "Success! Price is within acceptable limits";
//         };
// }
//   constructor(params) {
//     this.price = params.price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor(params) {
//     super(params.email);
//       this.access = params.access;
//       this.blacklistedEmails = [];
//   }
//   blacklist(email){
//     this.blacklistedEmails.push(email)
//   }
//   isBlacklisted(email){
//     if(this.blacklistedEmails.includes(email)){
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true














































































































































































































