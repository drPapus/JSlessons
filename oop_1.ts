class Rectangle {
     private _width;
     private _height;

     constructor(w, h){
          this._width = w;
          this._height = h;
     }


     get width() {
          return this._width
     }

     set width(value) {
          if(value <= 0) {
               this._width = 1;
          } else {
               this._width = value
          }
     }

     calcArea() {
          return this._width * this._height;
     }

     calcPerimetr() {
          return (this._height + this._width) * 2
     }
}

//const rect = new Rectangle(5, 10)
const rect1 = new Rectangle(15, 20)
const rectPer = new Rectangle(4, 8)
rectPer.calcPerimetr()
//rect.calcArea()

console.log(rectPer, rectPer.calcPerimetr())
//console.log(rect, rect.calcArea())
console.log(rect1, rect1.calcArea())

const rect = new Rectangle(5, 10)
rect.width = -2
