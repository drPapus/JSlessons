                            //Массивы в JavaScript


function br() {
    document.write('<br>');
}

//let arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// alert(arr);
// console.log(arr);
// document.write(arr);
//document.write(arr[0]);
//console.log(arr[2]);

let arr1 = ['a', 'b', 'c', 'd' ];
document.write(arr1[0] + ' + ' + arr1[1] + ' + ' + arr1[2] + ' + ' + arr1[3] );

br();

let arr2 = [1, 2, 3];
document.write(arr2[0] + arr2[1] + arr2[2]);

br();

let arr3 = [2, 5, 3, 9];
result = (arr3[0] * arr3[1]) + (arr3[2] * arr3[3]);
document.write(result);

br();
document.write('in arr: ' + arr3.length + ' elements'); 

br();

document.write(arr3[arr3.length -1]);
console.log(arr3[arr3.length -2]);

br();

arr3[0] = '!';

document.write(arr3);

br();

arr3[0] = arr3[0] + '!';
arr3[1] = arr3[1] + '?';
arr3[2] = arr3[2] + '$';
arr3[3] += '&';
document.write(arr3);

br();

let arr4 = [1, 2, 3];
arr4[0] += 3;
arr4[1] += 3;
arr4[2] += 3;
document.write(arr4);

br();

let arr5 = [1, 2, 3, 4, 5];

arr5[0]++;
++arr5[1];
arr5[2]--;
--arr5[3];
document.write(arr5);

br();

arr5[0] += 1;
arr5[1] += 1;
arr5[2] += 1;
arr5[3] += 1;
document.write(arr5);

br();

let arr6 = [];

arr6[0] = 'a';
arr6[1] = 'b';
arr6[2] = 'c';

document.write(arr6);

br();

arr6[3] = 'd';
arr6[4] = 'i';

document.write(arr6);

br();

document.write(arr6[10]);
br();

arr6[6] = 'g';
document.write(arr6);
br();
document.write('element number 5 is ' + arr6[5]);
console.log(arr6.length);

br();

let obj = {1: 'a', 2: 'b', 3: 'c'};

document.write(obj[1]);
document.write(obj[2]);
document.write(obj[3]);

br();
console.log(obj);
br();

let obj1 = {a: 1, b: 2, c: 3};


let sum = obj1['a'] + obj1['b'] + obj1['c'];
document.write(sum);

br();

let obj2 = {'1a': 1, '2b': 2, 'c-c': 3, a1: 4};
let sum2 = obj2['1a'] + obj2['2b'] + obj2['c-c'];
document.write(sum2);
br();
document.write(obj2['a1']);
br();
document.write(obj2.a1);

br();

let obj3 = {key1: 1, key2: 2, key3: 3};
document.write( obj3.key1 + obj3.key2 + obj3['key3']);


br();

let user = {name:'Anton', surname: 'Klimov', patronymic: 'Vasilevich'};
document.write(user.name + ' ' + user.surname + ' ' + user.patronymic);

br();

let date = {year: 2014, month: 'june', day: 14};
document.write(date.year + ' ' + date.month + ' ' + date.day);

br();

let obj4 = {};
obj4['k1'] = 'a';
obj4['k2'] = 'b';
obj4['k3'] = 'c';
console.log(obj4);




