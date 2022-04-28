

// class User {
//      constructor(name, surname){
//           this._name = name;
//           this._surname = surname;
//      }
//           setAge(age){
//                if(age > 0 && age < 100){
//                return this._age = age;
//                }
//           }

//           getAge(){
//                return this._age;

//           }


//           getName() {
//                return this._name;
//           }

//           getSurname() {
//                return this._surname;
//           }

//           getFullName () {
//           return this._name + ' ' + this._surname;
//      }
// }

// let user = new User("John", "Doe");
// console.log(user.getName())
// console.log(user.getSurname())
// console.log(user.getFullName())
// user.setAge(25)
// console.log(user.getAge())



// const inventory = [
//      {name: 'apples', quantity: 2},
//      {name: 'bananas', quantity: 0},
//      {name: 'cherries', quantity: 5}
//    ];
   
//    function isCherries(fruit) {
//      return fruit.name === 'bananas';
//    }
   
//    console.log(inventory.find(isCherries));
//    // { name: 'cherries', quantity: 5 }


const arrRace = [
     { race: 'ogya', hight: 1.90 },
     { race: 'raptorian', hight: 1.70 },
     { race: 'voltrone', hight: 1.65 },
 ];


 function isName(raceName) {
     return raceName.race === 'ogya';
 }

 console.log(arrRace.find(isName));