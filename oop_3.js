var Worker1 = /** @class */ (function () {
    function Worker1(name, surname, days, rate) {
        this.name = name;
        this.surname = surname;
        this.days = days;
        this.rate = rate;
    }
    Worker1.prototype.getFullName = function () {
        return this.name + " " + this.surname + " " + this.days * this.rate;
    };
    return Worker1;
}());
var unit = new Worker1("Anton", "Klimov", 30, 10);
console.log(unit.getFullName());
//# sourceMappingURL=oop_3.js.map