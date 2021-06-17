function br() {
    document.write('<br>');
}


let age = prompt('age', );
let adult = age >= 18 ? true: false;
console.log(adult);

let age1 = 17;
console.log( age >= 18 ? true: false );


br();

// let ok = confirm('Вы админ');
// if(ok){
//     document.write('Да');
// } else {
//     document.write('Нет');
// }

let age2 = confirm('есть ли уже 18 лет?');

if (age2 >= 18) {
    alert('Yes');
} else {
    alert('Go a way');
}