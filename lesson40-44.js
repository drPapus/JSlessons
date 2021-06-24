function br() {
    document.write('<br>');
}

// let object = [1, 2, 3, 4, 5];
// for (const iterator of object) {
//     document.write(iterator+' ');
// }

br();
br();

//Дан массив с элементами 'a', 'b', 'c', 'd', 'e'.
 //С помощью цикла for-of выведите все эти элементы на экран.


// let object = ['a', 'b', 'c', 'd', 'e', 'f'];
// for (const iterator of object) {
//     console.log(iterator);
// }

br();
br();
 
//Дан массив с элементами 1, 2, 3, 4, 5. 
//С помощью цикла for-of найдите сумму элементов этого массива.
// let num = 0;
// let object = [1, 2, 3, 4, 5];
// for (const iterator of object) {
//      num += iterator;  
// }
// document.write(num);

// br();
// br();

// Пусть у вас есть массив с названиями месяцев.
//  С помощью цикла выведите на экран все месяцы из массива. 
//  Определите, каким циклом удобнее будет решить эту задачу:
//  циклом for-of или обычным for со счетчиком.


// let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// for (const i of month) {
//     document.write(i+' ');
// }

// br();
// br();

// for (let i = 0; i < month.length; i++) {
//     document.write(month[i]+' ');
// }

br();
br();

// Пусть у вас есть массив с названиями месяцев.
//  Пусть в переменной month хранится номер текущего месяца, например, 10. 
//  С помощью цикла выведите все месяцы, а текущий месяц выведите курсивом. 
//  Определите, каким циклом удобнее будет решить эту задачу:
//  циклом for-of или обычным for со счетчиком.

let monthToDay = 6;
let k = 0;
let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

for (const i of month) {
    k += 1;
    if (k == monthToDay) {
        document.write('<i>' + i + '</i>' +' ');
    } else {
        document.write(i+' ');
    }   
}

br();
br();

for (let i = 0; i < month.length; i++) {
    if (i == monthToDay) {
        document.write('<i>' + month[i] + '</i>' +' ');
    } else {
        document.write(month[i]+' ');
    }
    
    
}

br();
br();

let object = {a:1, b:2, c:3};

for (const key in object) {
    console.log(key);

    console.log(object[key]);

}

br();
br();

//С помощью цикла for-in найдите сумму элементов этого объекта.

let sum = 0;
let object = {a: 1, b: 2, c: 3, d: 4, e: 5};
for (const key in object) {
    sum += object[key];
}
document.write(sum);

br();
br();

//Дан массив с числами. Запустите цикл, который будет по очереди
 //выводить элементы этого массива в консоль до тех пор, пока не встретится
 // элемент со значением 0. 
//После этого цикл должен завершить свою работу.

let array = [1, 2, 3, 4, 5, 0, 6, 7];
for (let i = 0; i < array.length; i++) {
    if (array[i] == 0) {
        document.write(i);
        break;
    }
    
}

br();
br();

//Дан массив с числами. Найдите сумму элементов, 
//расположенных от начала массива до первого отрицательного числа.

let sum = 0;
let arr = [1, 2, 3, -4, 5, 6];
for (let i = 0; i < arr.length; i++) {
     if (arr[i] < 0) {
         break;
     }  else {
         sum += arr[i];
     }
     
}

//Дан массив с числами. Найдите позицию первого числа 3 в этом массиве 
//(считаем, что это число обязательно есть в массиве).

document.write(sum);

br();
br();

let array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
    if (array[i] == 3) {
        document.write(i);
    }
    
}

br();
br();

//Определите, сколько целых чисел, начиная с числа 1, нужно сложить,
 //чтобы сумма получилась больше 100.

let sum = 0;
for (let i = 0; i <= 100; i++) {
    if (sum >= 100) {
        document.write(i+' ');
        break;
    } else {
        sum += i;
        document.write(sum + '<br>');
    }
   
}