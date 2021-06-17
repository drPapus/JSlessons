function br() {
    document.write('<br>');
}

console.log( typeof {a: 1, b: 2, c: 3} );
console.log( typeof [1, 2, 3] );
let arr = [1, 2, 3];
console.log( typeof arr );
let arr1 = [1, 2, 3];
console.log( typeof arr1[0] );
let arr2 = ['1', '2', '3'];
console.log( typeof arr2[0] );

console.log( Array.isArray([1, 2, 3]) );
console.log( Array.isArray({a: 1, b: 2, c: 3}) );