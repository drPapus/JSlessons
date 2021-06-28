Подсчитайте количество цифр 3 в этом массиве.

let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let counter = 0;
for (const i of arr) {
    if (i == 3) {
        counter++;
    }
}
document.write(counter);

Модифицируйте предыдущую задачу так, чтобы в одном цикле
одновременно подсчитывалось и количество троек, и количество двоек.

let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
counter1 = 0;
counter2 = 0;
for (const i of arr) {
    if (i == 3 ) {
        counter1++;
    }  else if(i == 2){
        counter2++;
    }
}
document.write(counter1);
document.write('<br>');
document.write(counter2);



let arr = ['a', 'b', 'c', 'a', 'a', 'b'];
let count = {a:0, b:0, c:0};

for (let elem of arr) {
    count[elem]++;
}
console.log(count);


let arr = ['a', 'b', 'c', 'a', 'a', 'b'];
let count = {};

for (let elem of arr) {
    if (count[elem] === undefined) {
        count[elem] = 1;
    } else {
        count[elem]++;
    }
}
console.log(count);

let arr = [1, 2, 3, 4, 5];

for (let i = 1; i < arr.length; i++) {
    console.log(arr[i - 1] + arr[i]);
}


Дан массив с числами. Переберите его циклом и в каждой итерации цикла 
выведите следующий элемент массива.

let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length -1; i++) {
    console.log(arr[i + 1]);

}

Модифицируйте предыдущую задачу так, чтобы в каждой итерации цикла выводилась
сумма текущего и следующего элемента массива.

let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length -1; i++) {
    console.log(arr[i] + arr[i + 1]);

}


Дан массив с числами. Переберите его 
циклом и в каждой итерации цикла выведите два предыдущих элемента массива.

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 1; i < arr.length; i++) {
    console.log(arr[i - 1] + '' +  arr[i - 1]);
}

Модифицируйте предыдущую задачу так, чтобы в каждой итерации цикла 
выводилась сумма двух предыдущих элементов и текущего элемента массива.

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 1; i < arr.length; i++) {
    console.log(arr[i - 1] +  arr[i - 1] + arr[i]);
}

Дан массив с числами. Переберите его циклом и в каждой итерации 
цикла выведите сумму предыдущего, текущего и следующего элементов массива.

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 1; i < arr.length-1; i++) {
    console.log(arr[i] + ' ' + arr[i - 1] + ' ' + arr[i + 1]);
}


let one = 0;
let two = 1;
for (let i = 1; i < 10; i++) {
    let cur = one + two;
    one = two;
    two = cur;
    
    console.log(cur);
}

Решите задачу на нахождение ряда чисел, каждое из которых 
равно сумме трех предыдущих, а первые три числа равны 0, 1 и 2.

let one = 0;
let two = 1;
let thr = 2;

for (let i = 1; i < 10; i++) {
    let cur = one + two + thr;
    one = two;
    two = thr;
    thr = cur;
    
    console.log(cur);
}

Выведите на экран следующую пирамидку

let str = '';
for (let i = 0; i <= 10; i++) {
    str += 'x';
    document.write(str +'<br>');
}

for (let i = 1; i < 10; i++) {
    for (let k = 0; k < i; k++) {
        document.write(i);
    }
    document.write('<br>');
}

Пирамидка из нечетных чисел

for (let i = 0; i < 6; i++) {
    for (let k = 0; k < i; k++) {
    document.write(i * 2 - 1); 
    }
    document.write('<br>');
}

for (let i = 10; i >= 1; i--) {
    let str = '';    

    for (let j = 0; j < i; j++) {
        str += 'x';
    }
document.write(str + '<br>');
}


for (let i = 9; i >=1; i--) {
    let str = '';
    
    for (let k = 0; k < i; k++) {
        document.write(i);
        
    }
    document.write('<br>');
}

let arr = [];
let str = '';
for (let i = 0; i < 5; i++) {
    str += 'x';
    arr.push(str);
}
console.log(arr);


let arr = [];
let str = '';
for (let i = 1; i < 9; i++) {
    str += i;
    arr.push(str);   
}
console.log(arr);

let arr = [];
for (let i = 1; i < 9; i++) {
   let str = '';
   for (let k = 0; k < i; k++) {
    str += i;   
   } 
   arr.push(str); 
}
console.log(arr);

let arr = [];

for (let i = 1; i <= 5; i++) {
    let str = ''
    for (let k = 1; k <= 5; k++) {
       str += i;
    }
    arr.push(str);
}
console.log(arr);

let i = 1;
while (i <= 100) {
    document.write(i + '<br>');
    i++;
}

for (let i = 100; i >= 0 ; i--) {
    document.write(i + '<br>');
    
}

for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        document.write(i + '<br>');
    }
    
}

let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push('x');
    
}
console.log(arr);

let arr = [];
for (let i = 1; i <= 10; i++) {
    arr.push(i);

}
console.log(arr);

for (const k of arr) {
    if (k < 10 && k > 2) {
        document.write(k);
    }
    
}

let arr = [1,2,3,4,5,6,7,8,9];
let flag = false;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 5) {
        flag = true;
        document.write('есть!')
        break; 
    }
}

let arr = [1,2,3,4,5,6,7,8,9];
let sum = 0;
for (const i of arr) {
    sum += i;
}
document.write(sum);

let arr = [1,2,3,4,5,6,7,8,9];
let sum = 0;
for (const i of arr) {
    let sq = i * i;
    sum = sum + sq; 
}
console.log(sum);

let arr = [1,2,3,4,5,6,7,8,9];
let sum = 0;
let count = 0;

for (const i of arr) {
    count++;
    sum += i;
}
document.write(sum / count);

let num = 6;
let fck = 1;
for (let i = 1; i <= num; i++) {
    fck *= i;
    
}
document.write(fck + '<br>');