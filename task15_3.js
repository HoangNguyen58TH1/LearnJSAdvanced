class Polygon {
  constructor(height, width) {
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log('Hi, I am a ', this.name + '.');
  }
}

class Square extends Polygon {
  constructor(length) {
      
      // Here, it calls the parent class' constructor with lengths
      // provided for the Polygon's width and height
      super(length, length);
      this.height; // ReferenceError, super needs to be called first!
    
    // Note: In derived classes, super() must be called before you
    // can use 'this'. Leaving this out will cause a reference error.
    this.name = 'Square';
  }

  get area() {
    return this.height * this.width;
  }

  set area(value) {
    this.area = value;
  } 
}

const test1 = new Polygon(10,20);
console.log(test1);

const test2 = new Square(10);
console.log(test2);