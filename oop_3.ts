class Worker1 {

     name;
     surname;
     days;
     rate;

     constructor(name: string, surname: string, days:number, rate:number){
          this.name = name;
          this.surname = surname;
          this.days = days;
          this.rate = rate;

     }

     getFullName(){
         return this.name + " " + this.surname + " " + this.days * this.rate;
     }
}
const unit = new Worker1("Anton", "Klimov", 30, 10);


console.log(unit.getFullName())