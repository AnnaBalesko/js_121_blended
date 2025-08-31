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







