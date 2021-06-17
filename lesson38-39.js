function br() {
    document.write('<br>');
}

let res = 0;
for(let i = 1; i <= 100; i++) {
    res = res + 1;
    document.write(res);
}

br();
br();


let res1 = 1;
for(let i = 1; i <= 20; i++) {
    res1 *= i;
    document.write(res1+ '--');
}

br();
br();

res2 = 0;
for(let i = 2; i <= 100; i++) {
    if (i % 2 == 0) {
        res2 += i;
        document.write(res2 + '--');
    }
    
}

br();
br();

res3 = 0;
for(let i = 1; i < 100; i++) {
    if (i % 2 !== 0) {
        res3 += i;
        document.write(res3 + '--');
    }
    
}

br();
br();

let array = [1, 2, 3, 4, 5];

for (let i = 0; i < 4; i++) {
    const el = array[i];
    document.write(el+ ' ');
}

br();
br();

for (let j = 0; j < array.length -1; j++) {
    const ele = array[j];
    document.write(ele + ' ');

    
}


br();
br();

for (let j = 0; j < array.length -1; j++) {
    const ele = array[j];
    document.write(ele + ' ');

    
}

br();
br();

let array = ['a', 'b', 'c', 'd', 'e'];

for (let k = 0; k < array.length; k++) {
    const element = array[k];
    document.write(element);
    
}

br();
br();

let arr = ['a', 'b', 'c', 'd', 'e'];

for (let t = 0; t < array.length - 1; t++) {
    const elem = array[t];
    document.write(elem);
    
}

br();
br();

let arr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        const element = arr[i];
        document.write(element);
    }
    
}

br();
br();

res = 0;
let arr = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < arr.length; i++) {
    res = res + arr[i]; 
}
document.write(res);

br();
br();

//Дан массив с элементами 1, 2, 3, 4, 5.
 //С помощью цикла for найдите произведение элементов этого массива.


res = 1;
let array = [1, 2, 3, 4, 5, 6];
for (let i = 1; i < array.length; i++) {
    res = res * array[i];
    document.write(res+' ');
}

br();
br();

//Дан массив с элементами 1, 2, 3, 4, 5. С помощью цикла for 
//найдите сумму квадратов элементов этого массива.

res = 0;
let array = [1, 2, 3, 4, 5, 6];
for (let i = 1; i < array.length; i++) {
  res = (array[i] * array[i]) + res;
  
}
document.write(res);  

br();
br();

//Дан массив с элементами 2, 5, 9, 15, 1, 4. С помощью цикла
// for и оператора if выведите в консоль те элементы массива, 
//которые больше 3-х, но меньше 10.

let array = [2, 5, 9, 15, 1, 4];
for (let i = 0; i < array.length; i++) {
    if (array[i] > 3 && array[i] < 10) {
        document.write(array[i] + ' ');
    }
    
}

br();
br();

//Дан массив с числами. Числа могут быть положительными и отрицательными. 
//Найдите сумму положительных элементов массива.

let array = [2, 3, -5, 8, -3, 7, -9];
for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        document.write(array[i] + ' ');
    }
    
}


br();
br();

//Дан массив arr. Найдите среднее арифметическое его элементов (сумма делить на количество). 
//Проверьте задачу на массиве с элементами 1, 2, 3, 4, 5.

res = 0;
let array = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < array.length; i++) {
     res = res + array[i];
     console.log(res);
}
document.write(res / array.length);


br();
br();

//Дан массив числами, например: [10, 20, 30, 50, 235, 3000].
// Выведите на экран только те числа из массива,
// которые начинаются на цифру 1, 2 или 5.


let newArr = [];
let array = [10, 20, 30, 50, 235, 3000];
for (let i = 0; i < array.length; i++) {
    if (String(array[i]).startsWith('2') || String(array[i]).startsWith('5') || String(array[i]).startsWith('1')) {
        console.log(array[i]);
    }
}

br();
br();

//Дан массив с числами. Выведите элементы этого массива в обратном порядке.

let array = [1, 2, 3, 4, 5, 6];

for (let i = array.length -1; i >= 0 ; i--) {
    console.log(array[i]);
    
}

br();
br();

//Дан массив с числами. С помощью цикла выведите на экран все элементы, значение
// которых совпадает с их порядковым номером в массиве.
//Дан массив с числами. С помощью цикла for и функции document.write выведите каждый элемент массива с новой строки.
 //Используйте для этого тег br.

let array = [3, 1, 3, 4, 7, 5];
for (let i = 0; i < array.length; i++) {
    if (i == array[i]) {
        document.write(i+'<br>');
    }
    
}

br();
br();

//Составьте массив дней недели. С помощью цикла for выведите все дни недели,
 //а выходные дни выведите жирным.

let week = ['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su'];
for (let i = 0; i < week.length; i++) {
    if (week[i].startsWith('s')) {
       document.write('<b>'+week[i]+'</b>' + '<br>'); 
    } else {
        document.write(week[i] + '<br>');
    }
  
}

br();
br();

//Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. 
//Номер текущего дня должен храниться в переменной day.

let week = ['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su'];
let day = 3;
for (let i = 0; i < week.length; i++) {
    if (i == day) {
        document.write('<i>' + week[i] + '</i>' + '<br>');
    } else if (week[i].startsWith('s')) {
        document.write('<b>'+week[i]+'</b>' + '<br>');
    }
    else {
        document.write(week[i] + '<br>');
    }
    
}
