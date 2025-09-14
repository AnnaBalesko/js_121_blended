//===================== 1 ===================
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5];

// const newArray = numbers.map(x => x * x);

// console.log(newArray);

// const powNumbers = (arr, pow) => arr.map(el => Math.pow(el, pow));
// console.log(powNumbers(numbers, 2));


//========================== 2 ===============================================

// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//  { id: 1, values: [1, 2, 3] },
//  { id: 2, values: [4, 5, 6] },
//  { id: 3, values: [7, 8, 9] },
// ];

// const newArray = data.flatMap(item => item.values);

// console.log(newArray);

// const newArray = arr => arr.flatMap(item => item.values);

// console.log(newArray(data));

//============================ 3 ==============
// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];


// const isYung = people.some(user => {
//    console.log(user);
   
//     return user.age < 20;

// });

// console.log(isYung);

// const isYung = (arr, value) => arr.some(obj => obj.age < value);

// console.log(isYung(people, 20));

//====================== 4 ======================


// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];


// const isPair = numbers.every(number => {
//   console.log(number);
  
//     return number % 2 === 0
// });

// console.log(isPair);

// const isPairFoo = (arr, value) => arr.every(number => number % value === 0);

// console.log(isPairFoo(numbers, 2));

//======================== 5 ============================

// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

// const isNotPair = numbers.find(number => number % 2 !== 0);

// console.log(isNotPair);

// const isNotPair = (arr, value) => arr.find(number => number % value !== 0);

// console.log(isNotPair(numbers, 2));

//========================= 6 ========================

// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];


// const result = numbersArray.toSorted((a, b) => a - b);

// console.log(result);

// const result = arr => arr.toSorted((a, b) => a - b);

// console.log(result(numbersArray));
//========================= 7 ==============================
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];

// const result = stringArray.toSorted((a, b) => a.localeCompare(b));
// console.log(result);
// const result = arr => arr.toSorted((a, b) => a.localeCompare(b));
// console.log(result(stringArray));
//======================== 8 ===========================

//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];


// const isAdults = users.toSorted((a, b) => a.age - b.age);
// console.log(isAdults);
// const isAdult = arr => arr.toSorted((a, b) => a.age - b.age);
// console.log(isAdult(users));


//==================== 9 =========================

// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ]

// const isAdult = user.filter(obj => obj.age > 20);
// console.log(isAdult);
// const isAdult = (arr, value) => arr.filter(obj => obj.age > value);
// console.log(isAdult(user, 20));


//================ 10 =================

// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];

// const result = numbers.reduce((acc, number) => acc + number, 0);
// console.log(result);

// const result = array => array.reduce((acc, number) => acc + number, 0)
// console.log(result(numbers));


//======================= 11 =====================

//Підрахунок кількості повторень
//Дано масив:
// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
//Завдання: За допомогою reduce підрахуйте, скільки разів кожен фрукт зустрічається в масиві.
//Очікуваний результат:
//{
 // apple: 3,
 // banana: 2,
 // orange: 1
//}

// const result = fruits.reduce((obj, string) => {
//     obj[string] = (obj[string] || 0) + 1;
//     return obj;
// }, {});
// console.log(result);

//===============================11==================


 // Розроби клас Calculator, який дозволяє виконувати арифметичні 
 //  операції над числом за допомогою методів класу, підтримуючи  
 // ланцюжковий виклик (method chaining).
 //
 // Вимоги до класу Calculator
 // - Метод number(value)
 // Встановлює початкове значення для наступних обчислень.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод getResult, Повертає поточний результат усіх операцій.
 // Не змінює значення, просто повертає його.
 
 // - метод add - Додає value до поточного значення.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод substruct - Віднімає value від поточного значення. Повертає this.
 
// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод multiply -Множить поточне значення на value. Повертає this.
 
 // Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
 
 // Приклад використання:
 // const calc = new Calculator();

// class Calculator{
//     number(value) {
//         this.result = value;
//         return this;
//     }
//     add(value) {
//         this.result += value;
//         return this;
//     }
//     subtract(value) {
//         this.result -= value;
//         return this;
//     }
//     multiply(value) {
//         this.result *= value;
//         return this;
//     }
//     divide(value) {
//         if (value !== 0) {
//             this.result /= value;
//         return this;
//         }
//         console.log("Value = 0, divide imposipble!");
//         return this;
//     }
//     getResult() {
//         return this.result;
//     }
// }
// const calc = new Calculator();
// const result = calc.number(10).add(5).subtract(3).multiply(4).divide(2).getResult();   // Встановлюємо початкове значення 10
 


//   console.log(result); // 24
// const result = calc
// .number(10)   // Встановлюємо початкове значення 10
//    .add(5)       // Додаємо 5 (10 + 5 = 15)
//    .subtract(3)  // Віднімаємо 3 (15 - 3 = 12)
//    .multiply(4)  // Множимо на 4 (12 * 4 = 48)
//    .divide(2)    // Ділимо на 2 (48 / 2 = 24)
//    .getResult(); // Отримуємо результат: 24


//    console.log(result); // 24



 // Напиши клас Client який створює об'єкт з властивостями login email.
 // Оголоси приватні властивості #login #email, доступ до яких зроби 
 // через геттер та сеттер login email

 
// class Client{
//     #login;
//     #email;

//     // constructor(parametrers) {
//     //     this.#login = parametrers.login;
//     //     this.#email = parametrers.email;
//     // }

//     get login() { return this.#login }
//     get email() { return this.#email }
//     set login(newLogin) {
//         this.#login = newLogin;
//     }
//     set email(newEmail) {
//         this.#email = newEmail;
//     }
// }
 
// const client = new Client;
// console.log(client.email);
// console.log(client.login);
// console.log(client.email = "alice@maile.com");


//===========================13=========

  //  Наслідування у класах!
  // Cтворіть клас `Person`, який містить наступні властивості:
  //  - `name` - ім'я людини;
  //  - `age`- вік людини;
  //  - `gender` - стать людини;
  //  - `email`- електронна пошта людини.
  
  // Крім того, клас `Person` має мати метод `getDetails()`,
  // який повертає об'єкт з ім'ям, віком, статтю 
  //та електронною поштою людини.
  
  // 
  // Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
  //  - salary - зарплата співробітника;
  //  - department - відділ, в якому працює співробітник.
  // Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.

  
// class Person{
//     constructor(data){
//         this.name = data.name;
//         this.age = data.age;
//         this.gender = data.gender;
//         this.email = data.email;
// }
//     getDetails() {
//         return {
//             name: this.name,
//             age: this.age,
//             gender: this.gender,
//             email: this.email
//         };
//     }
    
// }


// class Employee extends Person {
//   constructor(data) {
//     super(data);
//     this.salary = data.salary;
//     this.department = data.department;
//   }

//   getEmployeeDetails() {
//     const personDetails = this.getDetails();
//     return {
//       ...personDetails,
//       salary: this.salary,
//       department: this.department,
//     };
//   }
// }
// const data = {
//     name: "Petya",
//     age: 27,
//     gender: "man",
//     email:"petya@imail.com",
//         salary:2370,
//     departmant: "doctor",
// }
// const employeeInstance = new Employee(data);
// console.log(employeeInstance.getDetails());
// console.log(employeeInstance.getEmployeeDetails());

