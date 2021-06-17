

var arr = ['Hallo ', 'world', '!'];

alert(arr[0] + arr[1] + arr[2]);

document.write(arr[0] + arr[1] + arr[2]);

document.write('<br>');


let message = "hi";

document.write(message);

document.write('<br>');

message = 12345;

document.write(message);

document.write('<br>');

let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', );
if (year == 2015) {
    alert( "Правильно!" );
    alert( "Круто!" );
}

document.write('<br>');

let year2 = prompt('Your age: ', );
if(year2 >= 14 && year2 <= 90) {
    document.write('Yes! come in');
} else {
    document.write('Stop!');
}

document.write('<br>');

function br() {
    document.write('<br>');
}

var obj = {'Коля':'1000', 'Вася':'500', 'Петя':'200'};
document.write(obj['Коля']);

document.write('<br>');

var arr = [1,2,3,4,5];

var arr = [];
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;

var arrLang = {
    'ru':['голубой','красный','зеленый'],
    'en':['blue','red','green'],
};

document.write(arrLang['ru'][0]);
br();
document.write(arrLang['en'][1]);
br();

var arr6 = ['a', 'b', 'c'];
//alert(arr6);
document.write(arr6);
br();
document.write(arr6[0]);
br();
document.write(arr6[1]);
br();
document.write(arr6[2]);
br();

var arrNext = ['a', 'b', 'c', 'd'];
document.write(`${arrNext[0]} + ${arrNext[1]}, ${arrNext[2]} + ${arrNext[3]} `);
br();
var arrNum = [ 2, 5, 3, 9 ];
document.write((arrNum[0] * arrNum[1]) + (arrNum[2] * arrNum[3]));
br();

let object = { a: 1, b: 2, c: 3 };

document.write( object['b'] );
br();


let arrNum = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

document.write( arrNum[1][0] );
br();

var objLng = {
    js:['jQuery', 'Angular'],
    php: 'hello',
    css: 'world'
    };
document.write( objLng['js'][0] );
br();
document.write( objLng['js'][1] );
br();
document.write( objLng.php );
br();
document.write(Object.keys(objLng));
br();


var arrLang = {
    'ru':['пн','вт','ср','чт','пт','сб','вс'],
    'en':['mo','tu','we','th','fr','sa','su'],
};

document.write(arrLang['ru'][0]);
br();
document.write(arrLang['en'][2]);
br();
document.write(arrLang.en[3]);
br();


var lang = 'ru';
var day = '2';
document.write(arrLang[lang][day]);












