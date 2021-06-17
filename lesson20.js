function br() {
    document.write('<br>');
}

let arr1 = [1, 2, 3];
let arr2 = arr1;

arr1[0] = 'a';
console.log(arr2);

let a = [1, 2, 3];
let b = a;
//b[0] = '!';
console.log(a[0]);
console.log(a);
console.log(b);
a = 'str';
console.log(b);
console.log(a);
a = [3,4,5];
console.log(a);
console.log(b);


let arr1 = [1, 2, 3];
let arr2 = arr1;

arr1[0] = 'a';
arr2[1] = 'b';

console.log(arr1);

let arr1 = [1, 2, 3];
let arr2 = arr1;

arr1[0] = 'a';
arr2[0] = 'b';

console.log(arr2);
