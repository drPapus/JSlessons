// function stringToArray(string){
     
//      let arr = []
//      let splitWords = string.split(' ');
//      for (let i = 0; i < splitWords.length; i++) {
//           arr.push(splitWords[i]);    
//      }     
     
//      return arr

// }

// function stringToArray(st){
//      return st.split(' ');
//      }


// console.log(stringToArray("ipsum dollar at forteen do something"))
//let x = [1, 2, 3, 4]

// function grow(x){
//      let number = 1;
//      for (let i = 0; i < x.length; i++) {
          
//           number = number * x[i]
          
//      }
//      return number;
//    }
// function grow(x) {
//      let sum = x.reduce(function(a, b) {return a * b});

//      return sum;
// }

// const grow=x=>eval(x.join("*"))




//    console.log(grow(x));
//Это ката об умножении заданного числа на восемь, если оно четное, и на девять в противном случае.

function simpleMultiplication(number) {
     if(number%2 == 0){
          return number * 8;
     }
     return number * 9
 }

 console.log(simpleMultiplication(4))

 