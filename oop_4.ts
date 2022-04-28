class Worker2 {
     private _name:string;
     private _surname:string;
     private _days:number;
     private _rate:number;

    public get_name(): string {
        return this._name;
    }

//     public set_name(_name: string): void {
//         this._name = _name;
//     }

    public get_surname(): string {
        return this._surname;
    }

//     public set_surname(_surname: string): void {
//         this._surname = _surname;
//     }

    public get_days(): number {
        return this._days;
    }

    public set_days(_days: number): void {
        this._days = _days;
    }

    public get_rate(): number {
        return this._rate;
    }

    public set_rate(_rate: number): void {
        this._rate = _rate;
    }


     constructor(name, surname, days, rate){
          this._name = name;
          this._surname = surname;
          this._days = days;
          this._rate = rate;
     }

     getSalary(){
          return this._days * this._rate;
     }
}

var worker = new Worker2('Иван', 'Иванов', 10, 31);

console.log(worker.get_name()); //выведет 'Иван'
console.log(worker.get_surname()); //выведет 'Иванов'
worker.set_rate(20); //выведет 10
worker.set_days(40); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31