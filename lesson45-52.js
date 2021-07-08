function br() {
    document.write('<br>');
}


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let elem of arr) {
	let result;
	
	if (elem % 2 == 0) {
		result = elem * elem;
	} else if (elem % 3 == 0) {
		result = elem * elem * elem;
	} else {
		continue; // перейдем на новую итерацию цикла
	}
	
	console.log(result); // выполнится, если делится на 2 или 3
}

br();
br();

let arr = [1, 2, 3, 4, 3, 5];

for (let elem of arr) {
	if (elem == 3) {
		console.log('есть');
		break;  // завершим цикл
	}
}

br();
br();

let arr = [1, 2, 3, 4, 5];
let flag = false;

for (let elem of arr) {
    if (elem == 3) {
        flag = true;
        break;    
    }
}

if (flag === true) {
    console.log('есть');
} else {
    console.log('нет');
}

br();
br();

let arr = ['a', 'b', 'c', 'd', 'e'];
let flag = false;

for(let elem of arr) {
    if (elem == 'c') {
        flag = true;
        break;
    }
}
if (flag === true) {
    console.log('yes');
} else {
    console.log('no');
}

let num = 31;
let flag = true;
for (let i = 0; i < num; i++) {
    if (num % i == 0) {
        flag = false;
        break;
    }
    
} 
console.log(flag);

br();
br();

let num = 2;
let i = 0;
while (num < 1000 ) {
    num = num * 3;
    i += 1;
    
}
console.log(i);

br();
br();


for (var i = 2, k = 0; i < 1000 ;k += 1, i = i * 3);
console.log(k);

let str = '';
for (let i = 0; i < 10; i++) {
    str = str + '0';
    
}
console.log(str);

let str1 = '';
for (let i = 1; i <= 9; i++) {
    str1 = str1 + i+'-';
}
document.write(str1);

br();

let str = '';
for (let i = 9; i >= 1; i--) {
    str = str + i+'-';
}
document.write(str);

br();

for (let i = 1; i <= 100; i++) {
    let str = String(i);

    if (str[0] == 1 || str[0] == 2) {
        console.log(i);
    }
    
}

br();

Переберите циклом числа от 10 до 1000 и выведите на экран те числа,
сумма двух первых цифр которых равна 5.

for (let i = 10; i <= 1000; i++) {
    let str = String(i);
    if (Number(str[0]) + Number(str[1]) == 5) {
        document.write(i + ' ')
    }

    
}

let result = '';
for (let i = 1; i <= 9; i++) {
    result += String(i);   
}
console.log(result);

let res = '';
for (let i = 1; i <= 30; i++) {
    res += String(i);
    
}
console.log(res);

for (let i = 1; i <= 9; i++) {
    for (let j = 0; j < 3; j++) {
        document.write(i + ' ');
        
    }
    
}

С помощью двух вложенных циклов выведите на экран следующую строку:

11 12 13 21 22 23 31 32 33

for (let i = 1; i <= 3; i++) {
    for (let k = 1; k <= 3; k++) {
        document.write(i);
        document.write(k + ' ');
        
        
    }
    
}



