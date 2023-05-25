class Personv2 {
    takeNap(): void {
      console.log("I am sleeping 8 hours per day");
    }
  }
  
  class Student extends Personv2 {
    takeNap(): void {
      console.log(`I am sleeping 10 hours per day`);
    }
  }
  
  class Developer extends Personv2 {
    takeNap(): void {
      console.log(`I am sleeping 5 hours per day`);
    }
  }
  
  function getNap(param: Personv2) {
    param.takeNap();
  }
  
  const personv21 = new Personv2();
  const personv22 = new Student();
  const personv23 = new Developer();
  getNap(personv21);
  getNap(personv22);
  getNap(personv23);
  
  class Shape {
    getArea(): number {
      return 0;
    }
  }
  
  // area -> pi *r *r
  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  class Rectangle extends Shape {
    height: number;
    width: number;
    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }
    getArea(): number {
      return this.width * this.height;
    }
  }
  
  function getAreaOfShape(param: Shape) {
    console.log(param.getArea());
  }
  
  getAreaOfShape(new Circle(10));
  getAreaOfShape(new Rectangle(10, 12));