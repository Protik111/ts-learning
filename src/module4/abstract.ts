//interface

// interface IVehicle {
//   name: string;
//   model: string;
// }

// const vehicle: IVehicle = {
//   name: "Car",
//   model: "2000",
// };

interface Vehicle {
    startEngine(): void;
    stopEngine(): void;
    move?(): void;
  }
  
  class Car2 implements Vehicle {
    constructor(
      public name: string,
      public brand: string,
      public model: number
    ) {}
    startEngine(): void {
      console.log(" I am starting engine... ");
    }
    stopEngine(): void {
      console.log(" I am syopping engine");
    }
    // move(): void {
    //   console.log(" I am syopping engine");
    // }
  }
  
  const vehicle1 = new Car2("Car2", "Toyota", 2000);
  
  //abstract class
  
  abstract class Vehiclev2 {
    constructor(
      public name: string,
      public brand: string,
      public model: number
    ) {}
    abstract startEngine(): void 
    abstract stopEngine(): void 
    move(): void {
      console.log(" I am syopping engine");
    }
   
  }
  
  class Car extends Vehiclev2{
    startEngine(): void   {
      console.log(" I am starting engine... ");
    }
    stopEngine(): void {
      console.log(" I am stopping engine... ");
    }
    
  }
  
  const car1= new Car('Car','Honda',2015)
//   car1.