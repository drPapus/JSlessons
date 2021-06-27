function br() {
    document.write('<br>');
}

// let arr = [];
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;

// document.write(arr);

br();

// let arr = [];

// for (let i = 0; i <= 99; i++) {
//     arr[i] = i + 1 + ' ';    
// }
// document.write(arr);

// br();

// let arr = [];
// for (let i = 2; i <= 100; i++) {
//     arr[i] = i;
// }

// document.write(arr);

// let arr = [];

// for (let i = 0, j = 0; i <= 100; i+= 2, j++) {
//      arr[j] = i;
    
// }
// document.write(arr);

// С помощью цикла заполните массив нечетными числами в промежутке от 1 до 99.

// let arr = [];

// for ( j = 0; j <= 99; j++) {
//     if (j % 2 !== 0) {
//         document.write(j + ' ');
//     }
// }

// let arr = [1,2,3,4,5,6,7];
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] * arr[i];
    
// }
// document.write(arr);

// let arr = [1,2,3,4,5];
// for (let i = 0; i < arr.length; i++) {
//     arr[i]--;
// }
// document.write(arr);

// let arr = [1,2,3,4,5];
// for (let i = 0; i < arr.length; i++) {
//     arr[i]+=10;
    
// }
// document.write(arr);

// let arr = [];

// arr.push(1);
// arr.push(2);
// arr.push(3);

// document.write(arr);

// let arr = [];

// for (let i = 1; i <= 10; i++) {
//     arr.push('x');   
// }
// document.write(arr);

// Используя цикл и метод push заполните массив 10-ю случайными целыми числами. 
// Пусть случайные числа будут в промежутке от 1 до 10.

// let arr = [];
// randNum = 0;
// for (let i = 0; i <= 10; i++) {
//     randNum = Math.floor(Math.random() * 11);
//     arr.push(randNum);
// }
// document.write(arr);

// let arr = [1,2,3,4,5,6];
// let result = [];

// for ( const iterator of arr ) {
//     if ( iterator % 2 == 0 ) {
//         result.push(iterator);
//     }
// }
// document.write(result);

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let res = [];
// for (let i = arr.length -1; i >= 0 ; i--) {
//     res.push(arr[i]); 
// }
// document.write(res);


// let obj = {};

// obj['a'] = 1;
// obj['b'] = 2;
// obj['c'] = 3;
// obj['d'] = 4;

// console.log(obj);

// let keys = ['a', 'b', 'c', 'd', 'e'];
// let values = [1, 2, 3, 4, 5];
// let obj = {};
// for (let i = 0; i <= 4; i++) {
//     let key = keys[i];
//     let value = values[i];
//     obj[key] = value;
// }
// console.log(obj);
// Даны два массива: первый с названиями дней недели, а второй - с их порядковыми номерами:
// С помощью цикла создайте объект, ключами которого 
// будут названия дней, а значениями - их номера.

// let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// let arr2 = [1, 2, 3, 4, 5, 6, 7];
// let obj = {};
// for (let i = 0; i < arr1.length; i++) {
//     let key = arr1[i];
//     let val = arr2[i];
//     obj[key] = val;
// }
// console.log(obj);

//чтобы ключами стали номера дней, а значениями - их названия.

// let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// let arr2 = [1, 2, 3, 4, 5, 6, 7];
// let obj = {};
// for (let i = 0; i < arr1.length; i++) {
//     let val = arr1[i];
//     let key = arr2[i];
//     obj[key] = val;
// }
// console.log(obj);

//Запишите в новый объект те элементы,
//значения которых расположены в промежутке от 10 до 20.

// let obj = {'a': 12, 'b': 21, 'c': 13, 'd': 23, 'e': 17};
// let res = {};
// for (let key in obj) {
//     if (obj[key] >= 10 && obj[key] <= 20) {
//         res[key] = obj[key];
//     }
// }
// console.log(res);

//Запишите в новый объект дни недели, номера которых являются нечетными числами.


// let obj = {1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс'};
// let res = {};
// let k = 0;
// for(let key in obj) {
//     k = k + 1;
//     if (k % 2 !== 0) {
//         res[key] = obj[key];
//     }
// }
// console.log(res);

//Переберите этот объект циклом и возведите каждый элемент этого объекта в квадрат.

// let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

// for(let key in obj) {
//     obj[key] = obj[key] * obj[key];
// }
// console.log(obj);

//Давайте поменяем местами ключи и значения в объекте

// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// let res = {};

// for (const key in obj) {
//     res[obj[key]] = key;
// }
// console.log(res);

// Увеличьте зарплату каждого работника на 10%.

// let obj = {
// 	employee1: 100,
// 	employee2: 200,
// 	employee3: 300,
// 	employee4: 400,
// 	employee5: 500,
// 	employee6: 600,
// 	employee7: 700,
// };
// let tall = 0;
// for (const key in obj) {
//     tall = obj[key] * 0.10 
//     obj[key] = obj[key] + tall;
// }
// console.log(obj);

//зарплата увеличивалась только тем работникам, у которых она меньше или равна 400


// let obj = {
// 	employee1: 100,
// 	employee2: 200,
// 	employee3: 300,
// 	employee4: 400,
// 	employee5: 500,
// 	employee6: 600,
// 	employee7: 700,
// };
// let tall = 0;
// for (const key in obj) {
//     if (obj[key] <= 400) {
//         tall = obj[key] * 0.10 
//         obj[key] = obj[key] + tall;
//     }
    
// }
// console.log(obj);

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];
// let obj = {};

// for (let i = 0; i < arr1.length; i++) {
//     let key = arr1[i];
//     let val = arr2[i];
//     obj[key] = val;
// }
// console.log(obj);

// Найдите сумму ключей этого объекта и поделите ее на сумму значений.

// let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
// let sumKey = 0;
// let sumVal = 0;

// for (const key in obj) {
//     sumKey = sumKey + Number(key);
//     sumVal = sumVal + obj[key];
// }
// console.log(sumKey / sumKey);

// let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
// let arr1 = [];
// let arr2 = [];

// for (const key in obj) {
//     arr1.push(key);
//     arr2.push(obj[key]);

// }
// console.log(arr1);

// console.log(arr2);

// Запишите в новый массив элементы, 
// значение которых начинается с цифры 1 или цифры 2.

// let obj = {
// 	1: 125,
// 	2: 225,
// 	3: 128,
// 	4: 356,
// 	5: 145,
// 	6: 281,
// 	7: 452,
// };
// let arr = [];
// for (const key in obj) {
//     let str = String(obj[key]);
       
//     if (str[0] == '1' || str[0] == '2') {
//         arr.push(obj[key]);
//     }   
// }
// console.log(arr);

// let obj = {};
// let arr = ['a', 'b', 'c', 'd', 'e'];
// let k = 0;
// for (let i = 0; i < arr.length; i++) {
//     k++;
//     let key = k;
//     let val = arr[i];
//     obj[key] = val;
// }

// console.log(obj);


// let arr = ['a', 'b', 'c', 'd', 'e'];
// let obj = {};
// let k = 0;
// for (let i = 0; i < arr.length; i++) {
//     k++;
//     let key = arr[i];
//     let val = k;
//     obj[key] = val;
    
// }
// console.log(obj);

