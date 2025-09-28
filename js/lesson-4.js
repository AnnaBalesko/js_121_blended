// 1 - отримай body елемент і виведи його в консоль;

// const bodyElem = document.querySelector("body");
// console.log(bodyElem);

// 2 - отримай елемент id="title" і виведи його в консоль;

// const findById = document.querySelector("#title");
// const title = document.getElementById("title");
// console.log(findById);
// console.log(title);

// 3 - отримай елемент class="list" і виведи його в консоль;

// const list = document.querySelector(".list");
// console.log(list);

// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;

// const getAttribute = document.querySelectorAll("li[data-topic]");
// console.log(getAttribute);

// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і
// виведи його в консоль;

// const getAttribute = document.querySelectorAll("li[data-topic]");
// const firstAttribute = getAttribute[0];
// console.log(firstAttribute);

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і
// виведи його в консоль;

// const getAttribute = document.querySelectorAll("li[data-topic]");
// const lastAttribute = getAttribute[getAttribute.length-1];
// console.log(lastAttribute);

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;

// const title = document.querySelector("#title").nextElementSibling;
// console.log(title);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;

// const allTitle = document.querySelectorAll("h3");
// allTitle.forEach(title => {
//     console.log(title.textContent);
// });

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка
// на червоний колір

// const allTitle = document.querySelectorAll("h3");
// allTitle.forEach((title) => {
//     title.classList.add("active");
//     title.style.color = "red";
// });
// console.log(allTitle);

// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і
//  виведи його в консоль;
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і
// зроби його backgroundColor жовтим
// const getElement = document.querySelector("li[data-topic=navigation]");
// getElement.style.backgroundColor = "yellow";

// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст
//  на "Я змінив тут текст!".
// getElement.querySelector("p").textContent = "Я змінив тут текст!";

// 13 - створи const currentTopic = "manipulation";
// після цього знайди елемент у якого атрибут data-topic має значення,
// яке зберігається у змінній currentTopic і виведи його в консоль;

// const currentTopic = "manipulation";
// const lastItems = document.querySelector(`li[data-topic=${currentTopic}]`);

// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor
// блакитним;
// lastItems.style.backgroundColor = "blue";

// 15 - знайти в документі заголовок, який має class="completed" і виведи його в
// консоль;

// const title = document.querySelector(".completed");
// console.log(title);

// 16 - видали елемент li в якому знаходиться заголовок, який має
// class="completed"
// title.parentNode.remove();

// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай
// йому наступний текст: "Об'єктна модель документа (Document Object Model)"

// const elemNew = document.createElement("p");
// elemNew.textContent = "Об'єктна модель документа (Document Object Model)";
// // document.querySelector("h1").after(elemNew);
// document.querySelector("h1").insertAdjacentElement("afterend", elemNew);

// 18 - додай новий елемент списку у кінець списка, його заголовок це -
// "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і
// помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру
//  зробити всю важку роботу". тобто, потрібно створити елемент LI потім
// наповнити H3 та P і готову LI закинути у кінець списку

// const titleNew = document.createElement("h3");
// titleNew.textContent = "Властивість innerHTML";
// const text = document.createElement("p");
// text.textContent =
//   "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";
// const li = document.createElement("li");
// const ulElem = document.querySelector("ul");
// ulElem.append(li);
// li.append(titleNew, text);

// 19 - зроби це саме, але використовуй шаблонні рядки та метод
// insertAdjacentHTML()

// const markup =
//   "<li><h3>Властивість innerHTML</h3><p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p></li > ";
// ulElem.insertAdjacentHTML("beforeend", markup);
// // 20 - очисти список

// ulElem.innerHTML = "";

// ============== task 2 ======================
// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;
// const elements = [];
// for (let i = 0; i < 100; i++) {
//     const number = document.createElement("div");
//     number.classList.add("number");
//     number.textContent = randomNumber();
//     if (number.textContent % 2) {
//         number.classList.add("odd")
//     } else {
//         number.classList.add("even")
//     }
//     elements.push(number);
// }

// const container = document.querySelector(".number-container");
// container.append(...elements);

// =============== task 3 ===========================

// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// const input = document.querySelector(".contact-form-input");
// input.addEventListener("input", handlerInput);
// function handlerInput() {
//     if (input.value.length > 6) {
//         input.classList.remove("error")
//         input.classList.add("success")
//     } else {
//         input.classList.remove("success");
//         input.classList.add("error");
//     }
// }

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`
// const input = document.querySelector(".contact-form-input");
// input.addEventListener("focus", handlerFocus);

// function handlerFocus() {
//     if (input.value.trim() === "") {
//         input.style.outline = "3px solid red";
//     } else {
//         input.style.outline = "3px solid green";
//     }
// }
// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`
// const input = document.querySelector(".contact-form-input");
// input.addEventListener("blur", handlerBlur);
// function handlerBlur() {
//     if (input.value.trim() === "") {
//         input.style.outline = "3px solid red";
//     } else {
//         input.style.outline = "3px solid lime";
//     }
// }
// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

// const form = document.querySelector(".contact-form")
// form.addEventListener("submit", hadlerSubmit);
// const span = document.querySelector(".js-username-output");
// const input = document.querySelector(".contact-form-input");
// input.addEventListener("input", handlerInput);

// function handlerInput() {
//     span.textContent = input.value;
// }
// function hadlerSubmit(event) {
//     event.preventDefault();
//     const { userName, accept } = event.target.elements;
//     if (userName.value.trim() === "" || !accept.checked) {
//        alert("Fill in all fields!");
//         return;
//     }
//     console.log({
//         userName: userName.value.trim()

//     });
//     event.currentTarget.reset();
//     span.textContent = "Anonymous"
// }
// ================= task 4 ==============

// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.

// const decrease = document.querySelector(".js-decrease");
// const increase = document.querySelector(".js-increase");
// const box = document.querySelector(".box");
// decrease.addEventListener("click", handlerClick);
// increase.addEventListener("click", handlerClick);

// function handlerClick(event) {
//   const currentWidth = box.offsetWidth;
//   const currentHeight = box.offsetHeight;

//   if (event.target.classList.contains("js-decrease")) {
//     box.style.width = `${currentWidth - 20}px`;
//     box.style.height = `${currentHeight - 20}px`;
//   } else if (event.target.classList.contains("js-increase")) {
//     box.style.width = `${currentWidth + 20}px`;
//     box.style.height = `${currentHeight + 20}px`;
//   }
// }


//TODO:==============================================
/*
Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення e консоль  (дивіться на елементи в html-розмітці)
*/
/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/
//* TODO:==============================================
/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/
//TODO:==============================================
/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів, допопка "Збільшити" - більше на 10 пікселів.
https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
*/
//TODO:==============================================
/*
Завдання 5
Додайде слухач кліку і визначте, коли клік відбувається
всередині елемента з id "place" і коли клік припадає поза зоною елемента
https://developer.mozilla.org/en-US/docs/Web/API/Node/contains
*/
/*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/

//TODO:==============================================
/*
Завдання 7
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/
//TODO:==============================================
/*
Завдання 8
При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
За натисканням на кнопку "Вивести результат" виводиться сума значення, а також статистика з
інформацією про те, яка кнопка була натиснута скільки разів.
*/
//TODO:==============================================
/*
Завдання 9
Видалити зі списку елементи, які позначені.
*/

//TODO:==============================================
/*
Завдання 10
Наведено список людей. Зроби можливість сортування списку на ім'я та на прізвище.
*/