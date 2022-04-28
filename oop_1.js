var Rectangle = /** @class */ (function () {
    function Rectangle(w, h) {
        this._width = w;
        this._height = h;
    }
    Object.defineProperty(Rectangle.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            if (value <= 0) {
                this._width = 1;
            }
            else {
                this._width = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Rectangle.prototype.calcArea = function () {
        return this._width * this._height;
    };
    Rectangle.prototype.calcPerimetr = function () {
        return (this._height + this._width) * 2;
    };
    return Rectangle;
}());
//const rect = new Rectangle(5, 10)
var rect1 = new Rectangle(15, 20);
var rectPer = new Rectangle(4, 8);
rectPer.calcPerimetr();
//rect.calcArea()
console.log(rectPer, rectPer.calcPerimetr());
//console.log(rect, rect.calcArea())
console.log(rect1, rect1.calcArea());
var rect = new Rectangle(5, 10);
rect.width = -2;
//# sourceMappingURL=oop_1.js.map