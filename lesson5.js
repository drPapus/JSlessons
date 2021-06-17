function br() {
    document.write('<br>');
}



let a = '5' / '2';
document.write(a);

br();

let c = (-'5') + (-'2');
document.write(a);

br();

let ac = Number('2');
let bc = Number('3');
document.write(ac + bc);

br();

let num = 12345;
let str = String(num);
document.write(str.length);

br();

document.write(true + 3);

br();

document.write(true + true);

br();

document.write(true + false);

br();

document.write(true + '1');

br();

let test = Boolean(3);
document.write(test);

br();

let test1 = Boolean(0);
document.write(test1);

br();

let test2 = Boolean(-1);
document.write(test2);

br();

let test3 = Boolean(-0);
document.write(test3);

br();

let test4 = Boolean(+0);
document.write(test4);

br();

let test5 = Boolean('');
document.write(test5);

br();

let test6 = Boolean('0');
document.write(test6);

br();

let test7 = Boolean(true);
document.write(test7);

br();

let test8 = Boolean(false);
document.write(test8);

br();
let test9 = Boolean('true');
document.write(test9);
br();
let test10 = Boolean('false');
document.write(test10);
br();
let test11 = Boolean(null);
document.write(test11);
br();
let test12 = Boolean('null');
document.write(test12);
br();
let test13 = Boolean(3 * 'abc');
document.write(test13);
br();
let str1 = 'abcde';
let num1 = 3;
document.write(str1[3]);
br();
let str2 = 'abcde';
let newSt = str2[4]+str2[3]+str2[2]+str2[1]+str2[0];
document.write(newSt);
br();
let str3 = 'abcde';
let numStr = str3[2];
document.write(numStr);
br();
let str4 = 'abcde';
let last = str4.length - 1;
document.write(str4[last]);
br();
let str5 = 'abcde';
document.write(str5[str.length -1]);
br();
let str6 = 'abcde';
document.write(str6[str.length -3]);
br();
let numStr1 = '12345';
document.write(numStr1[0] + numStr1[1]);
br();
document.write(Number(numStr1[0])+Number(numStr1[1])+Number(numStr1[2])+ Number(numStr1[3])+Number(numStr1[4]))
br();
let numNotStr1 = 12345;
br();
let numNotStr = String(12345);
document.write(numNotStr[2]);
br();
document.write(Number(numNotStr[0]) + Number(numNotStr[1]));
br();
document.write(numNotStr[0] * numNotStr[1] * numNotStr[2] * numNotStr[3] * numNotStr[4]);
br();
document.write(Number(numNotStr[0]) + Number(numNotStr[1]) + Number(numNotStr[2]) + Number(numNotStr[3]) + Number(numNotStr[4]));
br();

let strCh = 'abcde';
strCh[0] = '!';
document.write(strCh);









