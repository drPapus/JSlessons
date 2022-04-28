var Worker2 = /** @class */ (function () {
    function Worker2(name, surname, days, rate) {
        this._name = name;
        this._surname = surname;
        this._days = days;
        this._rate = rate;
    }
    Worker2.prototype.get_name = function () {
        return this._name;
    };
    //     public set_name(_name: string): void {
    //         this._name = _name;
    //     }
    Worker2.prototype.get_surname = function () {
        return this._surname;
    };
    //     public set_surname(_surname: string): void {
    //         this._surname = _surname;
    //     }
    Worker2.prototype.get_days = function () {
        return this._days;
    };
    Worker2.prototype.set_days = function (_days) {
        this._days = _days;
    };
    Worker2.prototype.get_rate = function () {
        return this._rate;
    };
    Worker2.prototype.set_rate = function (_rate) {
        this._rate = _rate;
    };
    Worker2.prototype.getSalary = function () {
        return this._days * this._rate;
    };
    return Worker2;
}());
var worker = new Worker2('Иван', 'Иванов', 10, 31);
console.log(worker.get_name()); //выведет 'Иван'
console.log(worker.get_surname()); //выведет 'Иванов'
worker.set_rate(20); //выведет 10
worker.set_days(40); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31
//# sourceMappingURL=oop_4.js.map