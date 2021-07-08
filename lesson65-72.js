// let arr = [
// 	['a', 'b', 'c'],
// 	['d', 'e', 'f'],
// 	['g', 'h', 'i'],
// 	['j', 'k', 'l'],
// ];
// console.log(arr[0][1]);
// console.log(arr[1][0]);
// console.log(arr[3][2]);


// let arr = [[1, 2], [3, 4], [5, 6]];
// document.write(arr[0][0] + arr[0][1] + arr[1][0] + arr[1][1] + arr[2][0] + arr[2][1]);

// let arr = [
// 	[
// 		['a', 'b'],
// 		['c', 'd'],
// 	],
// 	[
// 		['e', 'f'],
// 		['g', 'h'],
// 	],
// 	[
// 		['i', 'j'],
// 		['k', 'l'],
// 	],
// ];
// document.write(arr[0][0][0]);

// let arr = [
// 	[
// 		[1, 2],
// 		[3, 4],
// 	],

// 	[
// 		[5, 6],
// 		[7, 8],
// 	],
// ];

// document.write(arr[0][0][0] + arr[0][0][1] + arr[0][1][0] + arr[0][1][1] + arr[1][0][0] + arr[1][0][1] + arr[1][1][0] + arr[1][1][1]);


// let arr = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]];

// for (const subArr of arr) {
// 	for (const elem of subArr) {
// 		document.write(elem);
// 	}
// }

// let arr = [[1, 2, 3], [4, 5], [6]];
// let sum = 0;
// for (const subArr of arr) {
// 	for (const elem of subArr) {
// 		sum += elem;
// 	}
// }
// document.write(sum);

// let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// let sum = 0;
// let sum2 = 0;
// for (const subArr of arr) {
// 	for (const elem of subArr) {
// 		for (const i of elem) {
// 			sum += i;
// 		}

// 	}
// }
// document.write(sum);
// console.log(sum);

// let arr = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]];
// for (let i = 0; i < arr.length; i++) {
// 	for (let j = 0; j < arr[i].length; j++) {
// 		console.log(arr[i][j]);
// 	}
// }

// let arr = [[1, 2, 3], [4, 5], [6]];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
// 	for (let k = 0; k < arr[i].length; k++) {
// 		sum += arr[i][k];
		
// 	}
	
// }
// document.write(sum);

// let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
// 	for (let k = 0; k < arr[i].length; k++) {
// 		for (let j = 0; j < arr.length; j++) {
// 			sum += arr[i][k][j];
			
// 		}
		
// 	}
	
// }
// document.write(sum);


// let arr = [];

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];

// 	for (let k = 0; k < 3; k++) {
// 		//arr[i][k] = k + 1;
// 		arr[i].push(k + 1);
		
// 	}
	
// }
// console.log(arr);

// let arr = [];

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];

// 	for (let k = 0; k < 5; k++) {
// 		arr[i][k] = k + 1;
		
// 	}
	
// }
//  console.log(arr);

// let arr = [];
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
// 	for (let k = 0; k < 5; k++) {
// 		arr[i][k] = 'x';
// 	}
// }
// console.log(arr);


// Сформируйте с помощью трех вложенных циклов следующий массив:

// let arr = [];
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
// 	for (let k = 0; k < 2; k++) {
// 		arr[i][k] = [];
// 		for (let j = 0; j < 5; j++) {
// 			arr[i][k][j] = j + 1;
			
// 		}
		
// 	}
	
// }
// console.log(arr);

// let arr = [];

// for (let i = 1; i < 3; i++) {
// 	arr[i] = [];
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i][j] = j + 1;
// 	}
// }

// console.log(arr);

// let arr = [];
// let j = 1;
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
// 	for (let k = 0; k < 3; k++, j++) {
// 		arr[i][k] = j;
		
// 	}
	
// }
// console.log(arr);

// let arr = [];
// let j = 1;
// for (let i = 0; i < 4; i++) {
// 	arr[i] = [];
// 	for (let k = 0; k < 2; k++, j++) {
// 		arr[i][k] = j;	
// 	}
// }
// console.log(arr);

// let arr = [];
// let j = 1;
// for (let i = 0; i < 4; i++) {
// 	arr[i] = [];
// 	for (let k = 0; k < 3; k++, j++) {
// 		arr[i][k] = j*2;
// 	}
// }
// console.log(arr);

// let obj = {
// 	a: {
// 		key1: 'a1',
// 		key2: 'a2',
// 		key3: 'a3',
// 	},
// 	b: {
// 		key1: 'b1',
// 		key2: 'b2',
// 		key3: 'b3',
// 	},
// 	c: {
// 		1: 'c1',
// 		2: 'c2',
// 		3: 'c3',
// 	},
// }
// console.log(obj['a']['key1']);
// console.log(obj['c'][1]);
// console.log(obj.a.key2);
// console.log(obj['a'].key1);

// let obj = {
// 	key1: {
// 		key1: 1,
// 		key2: 2,
// 		key3: 3,
// 	},
// 	key2: {
// 		key1: 4,
// 		key2: 5,
// 		key3: 6,
// 	},
// 	key3: {
// 		key1: 7,
// 		key2: 8,
// 		key3: 9,
// 	},
// }

// document.write(obj.key1.key1 + obj.key1.key2 + obj.key1.key3 + obj['key2']['key1'] + obj['key2']['key2'] + obj['key2']['key3'] + obj['key3'].key1 + obj['key3'].key2 + obj['key3'].key3);


// let obj = {
// 	a: {
// 		1: 'a1',
// 		2: 'a2',
// 		3: 'a3',
// 	},
// 	b: {
// 		1: 'b1',
// 		2: 'b2',
// 		3: 'b3',
// 	},
// 	c: {
// 		1: 'c1',
// 		2: 'c2',
// 		3: 'c3',
// 	},
// }

// for (let key in obj) {
// 	let subObj = obj[key];

// 	for (let subKey in subObj) {
// 		console.log(subObj[subKey]);
// 	}
// }

// let obj = {
// 	1: {
// 		1: 11,
// 		2: 12,
// 		3: 13,
// 	},
// 	2: {
// 		1: 21,
// 		2: 22,
// 		3: 23,
// 	},
// 	3: {
// 		1: 24,
// 		2: 25,
// 		3: 26,
// 	},
// }

// let sum = 0;
// for (const key in obj) {
// 	let subObj = obj[key];
// 	for (const subKey in subObj) {
// 		sum = sum + subObj[subKey];
// 	}
// }
// document.write(sum);

// let months = {
// 	'ru': [
// 		'январь',
// 		'февраль',
// 		'март',
// 		'апрель',
// 		'май',
// 		'июнь',
// 		'июль',
// 		'август',
// 		'сентябрь',
// 		'октябрь',
// 		'ноябрь',
// 		'декабрь',
// 	],
// 	'en': [
// 		'january',
// 		'february',
// 		'march',
// 		'april',
// 		'may',
// 		'june',
// 		'july',
// 		'august',
// 		'september',
// 		'october',
// 		'november',
// 		'december',
// 	],
// };
// let lang = 'ru';
// let month = 5;
// document.write(months[lang][month]);


// let affairs = {
// 	'2018': {
// 		11: {
// 			29: ['дело111', 'дело112', 'дело113'],
// 			30: ['дело121', 'дело122', 'дело123'],
// 		},
// 		12: {
// 			30: ['дело211', 'дело212', 'дело213'],
// 			31: ['дело221', 'дело222', 'дело223'],
// 		},
// 	},
// 	'2019': {
// 		12: {
// 			29: ['дело311', 'дело312', 'дело313'],
// 			30: ['дело321', 'дело322', 'дело323'],
// 			31: ['дело331', 'дело332', 'дело333'],
// 		}
// 	},
// }

// let year = 2018;
// let month = 12;
// let day = 30;

// document.write(affairs[year][month][day]);

// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 	},
// ];

// document.write(employees[0].salary + employees[1].salary);

// let students = {
// 	'boys':  ['Коля', 'Вася', 'Петя'],
// 	'girls': ['Даша', 'Маша', 'Лена'],
// };

// document.write(students['boys'][1] + '<br>' + students['girls'][2]);

// let users = [
// 	{
// 		name: 'name1',
// 		age: 31,
// 	},
// 	{
// 		name: 'name2',
// 		age: 32,
// 	},
// 	{
// 		name: 'name3',
// 		age: 33,
// 	},
// ];

// for (const user of users) {
// 	document.write(user.name + ' ' + user.age + '<br>');
// }


// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 	},
// ];

// for (const wrkr of employees) {
// 	document.write(wrkr.name + ' ' + wrkr.salary + ' ' + '<br>');
// }


// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 		age: 28,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 		age: 29,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 		age: 30,
// 	},
// 	{
// 		name: 'name4',
// 		salary: 600,
// 		age: 31,
// 	},
// 	{
// 		name: 'name5',
// 		salary: 700,
// 		age: 32,
// 	},
// ];

// let sum = 0;

// for (const wrkr of employees) {
// 	if (wrkr.age >= 30) {
// 		sum += wrkr.salary;
// 	}
	
// }

// document.write(sum);

// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 		dismissed: false,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 		dismissed: true,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 		dismissed: false,
// 	},
// 	{
// 		name: 'name4',
// 		salary: 600,
// 		dismissed: true,
// 	},
// 	{
// 		name: 'name5',
// 		salary: 700,
// 		dismissed: false,
// 	},
// ];
// let sum = 0;
// for (const wrkr of employees) {
//     if (wrkr.dismissed == false) {
//         sum += wrkr.salary; 
//     }
   
// }
// document.write(sum);

// let students = {
// 	'group1': ['student11', 'student12', 'student13'],
// 	'group2': ['student21', 'student22', 'student23'],
// 	'group3': ['student31', 'student32'],
// };

// for (const group in students) {
//     for (const name of students[group]) {
//         document.write(name + '<br>');
//     }
// }

// let data = {
// 	1: [
// 		'data11',
// 		'data12',
// 		'data13',
// 	],
// 	2: [
// 		'data21',
// 		'data22',
// 		'data23',
// 	],
// 	3: [
// 		'data31',
// 		'data32',
// 		'data33',
// 		'data34',
// 		'data35',
// 	],
// 	4: [
// 		'data41',
// 		'data42',
// 	],
// };

// for (const key in data) {
//     for (const dataN of data[key]) {
//         document.write(dataN + '<br>');
//     }
    
// }


// let data = [
// 	{
// 		1: 'data11',
// 		2: 'data12',
// 		3: 'data13',
// 		4: 'data14',
// 	},
// 	{
// 		1: 'data21',
// 		2: 'data22',
// 		3: 'data33',
// 	},
// 	{
// 		1: 'data31',
// 		2: 'data32',
// 	},
// ];

// for (const iterator of data) {
//     for (const key in iterator) {
//        for (const k of iterator[key]) {
//         document.write(k);
//        }
//     }
// }


let data = [
	{
		1: [
			'data111',
			'data112',
			'data113',
		],
		2: [
			'data121',
			'data122',
			'data123',
		],
	},
	{
		1: [
			'data211',
			'data212',
			'data213',
		],
		2: [
			'data221',
			'data222',
			'data223',
			'data224',
		],
		3: [
			'data231',
			'data232',
			'data233',
			'data234',
			'data235',
		],
	},
	{
		1: [
			'data411',
			'data412',
			'data413',
		],
		2: [
			'data421',
		],
	},
];

for (const iterator of data) {
    for (const key in iterator) {
        for (const j of iterator[key]) {
            document.write(j + '<br>');
        }
    }
}
